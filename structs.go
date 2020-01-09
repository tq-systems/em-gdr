package gdr

// OBISCode for Data-Value:
// Media - Elektricity , Gas, Water, Heat...
// channel - internal or external channels
// indicator - Active, Reactive , Apparent, Amperage, Voltage, ....
// mode - maximum, current value, energy...
// quantities - tariff level, e.g. total, tariff 1, tarif 2...
// storage -  00...99
type OBISCode struct {
	Media      uint8
	Channel    uint8
	Indicator  uint8
	Mode       uint8
	Quantities uint8
	Storage    uint8
}

// ExternalGCRs maps ExternalGCR values by their respective IDs
type ExternalGCRs struct {
	GCRs map[string]*ExternalGCR `json:"gcrs"`
}

// ExternalGCR extends GCR with additional metainformation (OBIS description)
type ExternalGCR struct {
	ID         string                              `json:"id"`
	Label      string                              `json:"label"`
	Class      Class                               `json:"class"`
	Sources    []string                            `json:"sources"`
	Values     map[uint64]*ExternalObisDescription `json:"values"`
	Devicetype DeviceType                          `json:"devicetype"`
}

// ExternalObisDescription associates an OBIS code with a human-readable label and the unit of the referenced value
type ExternalObisDescription struct {
	Obis  string `json:"obis"`
	Label string `json:"label"`
	Unit  string `json:"unit"`
}
