//go:generate protoc --go_out=. gdr.proto
//go:generate omitemptyremover

package gdr

import (
	"fmt"
	"regexp"
	"strconv"
)

var (
	obisCodeMatch = regexp.MustCompile(`^(?:([0-9]+)-)?(?:([0-9]+):)?([0-9]+)\.([0-9])+(?:\.([0-9]+))?(?:[*&]([0-9]+))?$`)
)

//Function for tranforming ObisCode to Text-String
func (obisCode OBISCode) String() string {
	return fmt.Sprintf("%d-%d:%d.%d.%d*%d", obisCode.Media, obisCode.Channel, obisCode.Indicator, obisCode.Mode, obisCode.Quantities, obisCode.Storage)
}

//Function for tranforming Byte-String to ObisCode
func DecodeOBISCodeToString(value uint64) string {
	return DecodeOBISCode(value).String()
}

//Function for tranforming Byte-String to ObisCode
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

//Function for tranforming Byte-String to ObisCode
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

func parseByte(num string) uint8 {
	if num == "" {
		return 255
	}

	v, err := strconv.ParseUint(num, 10, 8)
	if err != nil {
		panic(err)
	}
	return uint8(v)
}

// ParseOBISCode converts an OBIS code in standard text representation
// to an OBISCode struct
func ParseOBISCode(code string) *OBISCode {
	match := obisCodeMatch.FindStringSubmatch(code)
	if match == nil {
		return nil
	}
	return &OBISCode{
		Media:      parseByte(match[1]),
		Channel:    parseByte(match[2]),
		Indicator:  parseByte(match[3]),
		Mode:       parseByte(match[4]),
		Quantities: parseByte(match[5]),
		Storage:    parseByte(match[6]),
	}
}

func shift(value uint8, shift uint) uint64 {
	//Shift Value n Bytes
	return uint64(value) << (8 * shift)
}

func unshift(value uint64, shift uint) uint8 {
	//Unshift Value n Bytes
	return uint8(value >> (8 * shift))
}
