/*
 * Generic Data Record - marshall.go
 * Copyright (c) 2019, TQ-Systems GmbH
 * All rights reserved. For further information see LICENSE.txt
 */

package gdr

import (
	"encoding/json"
	"errors"
)

// MarshalJSON is the custom marshalling implementation for DeviceType
func (d DeviceType) MarshalJSON() ([]byte, error) {
	return json.Marshal(d.String())
}

// UnmarshalJSON is the custom unmarshalling implementation for DeviceType
func (d *DeviceType) UnmarshalJSON(data []byte) error {
	var str string
	err := json.Unmarshal(data, &str)
	if err != nil {
		return err
	}

	val, ok := DeviceType_value[str]
	if !ok {
		return errors.New("invalid device type: " + str)
	}

	*d = DeviceType(val)
	return nil
}

// MarshalJSON is the custom marshalling implementation for Class
func (c Class) MarshalJSON() ([]byte, error) {
	return json.Marshal(c.String())
}

// UnmarshalJSON is the custom unmarshalling implementation for Class
func (c *Class) UnmarshalJSON(data []byte) error {
	var str string
	err := json.Unmarshal(data, &str)
	if err != nil {
		return err
	}

	val, ok := Class_value[str]
	if !ok {
		return errors.New("invalid class: " + str)
	}

	*c = Class(val)
	return nil
}

// MarshalJSON is the custom marshalling implementation for Status
func (s Status) MarshalJSON() ([]byte, error) {
	return json.Marshal(s.String())
}

// UnmarshalJSON is the custom unmarshalling implementation for Status
func (s *Status) UnmarshalJSON(data []byte) error {
	var str string
	err := json.Unmarshal(data, &str)
	if err != nil {
		return err
	}

	val, ok := Status_value[str]
	if !ok {
		return errors.New("invalid status: " + str)
	}

	*s = Status(val)
	return nil
}
