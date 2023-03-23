//go:generate protoc --gogofaster_out=Mgoogle/protobuf/timestamp.proto=github.com/gogo/protobuf/types:. gdr.proto
//go:generate omitemptyremover

package gdr

import (
	"bytes"
	"crypto/md5"
	"encoding/gob"
	"encoding/json"
	"fmt"
	"regexp"
	"strconv"
	"time"

	"github.com/gogo/protobuf/types"
)

var (
	obisCodeMatch = regexp.MustCompile(`^(?:([0-9]+)-)?(?:([0-9]+):)?([0-9]+)\.([0-9]+)(?:\.([0-9]+))?(?:[*&]([0-9]+))?$`)
)

// String tranforms ObisCode into human-readable string
func (obisCode OBISCode) String() string {
	return fmt.Sprintf("%d-%d:%d.%d.%d*%d", obisCode.Media, obisCode.Channel, obisCode.Indicator, obisCode.Mode, obisCode.Quantities, obisCode.Storage)
}

// DecodeOBISCodeToString transforms an integer-encoded OBIS code into a human-readable string
func DecodeOBISCodeToString(value uint64) string {
	return DecodeOBISCode(value).String()
}

// Encode encodes an OBIS code as a 64bit integer
func (obisCode OBISCode) Encode() uint64 {
	//uint64 = 00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000
	//All ObisCodes max 8 Bits
	//Shift First ObisCode Value 5 Bytes
	//Shift Second ObisCode Value 4 Bytes
	// ...
	return shift(obisCode.Media, 5) |
		shift(obisCode.Channel, 4) |
		shift(obisCode.Indicator, 3) |
		shift(obisCode.Mode, 2) |
		shift(obisCode.Quantities, 1) |
		shift(obisCode.Storage, 0)
}

// DecodeOBISCode decodes an integer-encoded OBIS code
func DecodeOBISCode(value uint64) OBISCode {
	return OBISCode{
		Media:      unshift(value, 5),
		Channel:    unshift(value, 4),
		Indicator:  unshift(value, 3),
		Mode:       unshift(value, 2),
		Quantities: unshift(value, 1),
		Storage:    unshift(value, 0),
	}
}

func parseByte(store *uint8, num string) bool {
	if num == "" {
		*store = 255
		return true
	}

	v, err := strconv.ParseUint(num, 10, 8)
	*store = uint8(v)
	return err == nil
}

// ParseOBISCode converts an OBIS code in standard text representation
// to an OBISCode struct
func ParseOBISCode(code string) *OBISCode {
	match := obisCodeMatch.FindStringSubmatch(code)
	if match == nil {
		return nil
	}

	ret := OBISCode{}
	if !parseByte(&ret.Media, match[1]) ||
		!parseByte(&ret.Channel, match[2]) ||
		!parseByte(&ret.Indicator, match[3]) ||
		!parseByte(&ret.Mode, match[4]) ||
		!parseByte(&ret.Quantities, match[5]) ||
		!parseByte(&ret.Storage, match[6]) {
		return nil
	}

	return &ret
}

func shift(value uint8, shift uint) uint64 {
	//Shift Value n Bytes
	return uint64(value) << (8 * shift)
}

func unshift(value uint64, shift uint) uint8 {
	//Unshift Value n Bytes
	return uint8(value >> (8 * shift))
}

// TimeToTimestamp converts a golang time to a protobuf timestamp
func TimeToTimestamp(t time.Time) *types.Timestamp {
	return &types.Timestamp{
		Seconds: t.Unix(),
		Nanos:   int32(t.Nanosecond()),
	}
}

// CalculateGCRHash calculates the MD5 checksum of a GCR
// in order for the hash to be the same for equivalent GCRs
func CalculateGCRHash(gcr *GCRs) ([16]byte, error) {

	/* make copy to prevent changes in real gcr struct */
	tmpMap := make(map[string]*GCR)
	copyMap(gcr.GCRs, &tmpMap)

	// ignore Timestamp
	for key := range tmpMap {
		tmpMap[key].Timestamp = nil
	}

	bytes, err := json.Marshal(tmpMap)
	if err != nil {
		return [16]byte{}, err
	}
	return md5.Sum(bytes), nil
}

// using encoder and decoder to avoid problems with references in underlying structures
func copyMap(in, out interface{}) {
	buf := new(bytes.Buffer)
	gob.NewEncoder(buf).Encode(in)
	gob.NewDecoder(buf).Decode(out)
}
