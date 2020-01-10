//go:generate protoc --gogofaster_out=Mgoogle/protobuf/timestamp.proto=github.com/gogo/protobuf/types:. gdr.proto
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

// DecodeOBISCodeToExternalDescription returns an ExternalObisDescription describing the OBIS code
func DecodeOBISCodeToExternalDescription(value uint64) *ExternalObisDescription {

	obisCodeAsString := DecodeOBISCodeToString(value)
	oc := DecodeOBISCode(value)
	label := ""
	unit := ""
	if mm("1.4", oc) {
		label = "active power +"
		unit = "mW"
	}
	if mm("2.4", oc) {
		label = "active power -"
		unit = "mW"
	}
	if mm("1.8", oc) {
		label = "active energy +"
		unit = "mWh"
	}
	if mm("2.8", oc) {
		label = "active energy -"
		unit = "mWh"
	}
	if mm("3.4", oc) {
		label = "reactive power +"
		unit = "mvar"
	}
	if mm("4.4", oc) {
		label = "reactive power -"
		unit = "mvar"
	}

	if mm("3.8", oc) {
		label = "reactive energy +"
		unit = "mvarh"
	}
	if mm("4.8", oc) {
		label = "reactive energy -"
		unit = "mvarh"
	}

	if mm("9.4", oc) {
		label = "apparent power +"
		unit = "mVA"
	}
	if mm("10.4", oc) {
		label = "apparent power -"
		unit = "mVA"
	}

	if mm("9.8", oc) {
		label = "apparent energy +"
		unit = "mVAh"
	}
	if mm("10.8", oc) {
		label = "apparent energy -"
		unit = "mVAh"
	}

	if mm("11.4", oc) {
		label = "Current"
		unit = "mA"
	}

	if mm("12.4", oc) {
		label = "Voltage"
		unit = "mV"
	}

	if mm("13.4", oc) {
		label = "power factor"
		unit = "cos φ"
	}

	if mm("14.4", oc) {
		label = "supply frequency"
		unit = "Hz"
	}

	if oc.Indicator >= 0 && oc.Indicator <= 10 {
		label = "∑ " + label
	}

	if oc.Indicator >= 21 && oc.Indicator <= 33 {
		label = label + " L1"
	}
	if oc.Indicator >= 41 && oc.Indicator <= 53 {
		label = label + " L2"
	}
	if oc.Indicator >= 61 && oc.Indicator <= 73 {
		label = label + " L3"
	}

	externalObis := ExternalObisDescription{
		Label: label,
		Obis:  obisCodeAsString,
		Unit:  unit,
	}

	return &externalObis
}

/**
 * matches indicator % 20 and mode
 */
func mm(code string, obis OBISCode) bool {
	s := fmt.Sprintf("%d.%d", obis.Indicator%20, obis.Mode)
	return code == s
}
