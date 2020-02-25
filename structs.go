package gdr

// OBISCode for Data-Value:
// media - electricity, gas, water, heat, ...
// channel - internal or external channels
// indicator - Active, Reactive, Apparent, Amperage, Voltage, ...
// mode - maximum, current value, energy, ...
// quantities - tariff level, e.g. total, tariff 1, tarif 2, ...
// storage -  00...99
type OBISCode struct {
	Media      uint8
	Channel    uint8
	Indicator  uint8
	Mode       uint8
	Quantities uint8
	Storage    uint8
}

// Obis indicators and modes used in OBISCode
const (
	ObisIndicatorActivePlus    = 1
	ObisIndicatorActiveMinus   = 2
	ObisIndicatorReactivePlus  = 3
	ObisIndicatorReactiveMinus = 4
	ObisIndicatorApparentPlus  = 9
	ObisIndicatorApparentMinus = 10
	ObisIndicatorCurrent       = 11
	ObisIndicatorVoltage       = 12
	ObisIndicatorPowerFactor   = 13
	ObisIndicatorFrequency     = 14

	// ObisIndicatorPhaseModulo can be used to transform the indicators of phases L1-L3
	// to the indicators specified above
	ObisIndicatorPhaseModulo = 20

	// ObisModeMean is the mode used for power
	ObisModeMean = 4
	// ObisModeIntegral is the mode used for energy
	ObisModeIntegral = 8
)
