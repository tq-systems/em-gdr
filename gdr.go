//go:generate protoc --go_out=. gdr.proto
//go:generate omitemptyremover

package gdr

import (
	"fmt"
)

//Function for tranforming ObisCode to Text-String
func (obisCode OBISCode) String() string {
	return fmt.Sprintf("%d-%d:%d.%d.%d*%d", obisCode.Media, obisCode.Channel, obisCode.Indicator, obisCode.Mode, obisCode.Quantities, obisCode.Storage)
}

//Function for tranforming Byte-String to ObisCode
func DecodeOBISCodeToString(value uint64) string {
	return fmt.Sprintf("%d-%d:%d.%d.%d*%d", unshift(value, 5), unshift(value, 4), unshift(value, 3), unshift(value, 2), unshift(value, 1), unshift(value, 0))
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

func shift(value uint32, shift uint) uint64 {
	//Shift Value n Bytes
	return uint64(value) << (8 * shift)
}

func unshift(value uint64, shift uint) uint32 {
	//Unshift Value n Bytes
	//Bitwise AND with 0xFF to cut off the other ObisCodes (Only leaves the last Byte)
	return uint32((value >> (8 * shift)) & 0xff)
}
