package gdr

//ObisCode for Data-Value:
// Media - Elektricity , Gas, Water, Heat...
// channel - internal or external channels
// indicator - Active, Reactive , Apparent, Amperage, Voltage, ....
// mode - maximum, current value, energy...
// quantities - tariff level, e.g. total, tariff 1, tarif 2...
// storage -  00...99
type OBISCode struct {
	Media      uint32
	Channel    uint32
	Indicator  uint32
	Mode       uint32
	Quantities uint32
	Storage    uint32
}
