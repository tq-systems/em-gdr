/*
 * Generic Data Record - marshall.go
 * Copyright (c) 2019 - 2024 TQ-Systems GmbH <license@tq-group.com>, D-82229 Seefeld, Germany. All rights reserved.
 * Author: Alexander Poegelt and the Energy Manager development team
 *
 * This software code contained herein is licensed under the terms and conditions of
 * the TQ-Systems Product Software License Agreement Version 1.0.1 or any later version.
 * You will find the corresponding license text in the LICENSE file.
 * In case of any license issues please contact license@tq-group.com.
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

// MarshalJSON is the custom marshalling implementation for Unit
func (s Unit) MarshalJSON() ([]byte, error) {
	return json.Marshal(s.String())
}

// UnmarshalJSON is the custom unmarshalling implementation for Unit
func (s *Unit) UnmarshalJSON(data []byte) error {
	var str string
	err := json.Unmarshal(data, &str)
	if err != nil {
		return err
	}

	val, ok := Unit_value[str]
	if !ok {
		return errors.New("invalid unit: " + str)
	}

	*s = Unit(val)
	return nil
}

// MarshalJSON is the custom marshalling implementation for FlexValueType
func (s FlexValueType) MarshalJSON() ([]byte, error) {
	return json.Marshal(s.String())
}

// UnmarshalJSON is the custom unmarshalling implementation for FlexValueType
func (s *FlexValueType) UnmarshalJSON(data []byte) error {
	var str string
	err := json.Unmarshal(data, &str)
	if err != nil {
		return err
	}

	val, ok := FlexValueType_value[str]
	if !ok {
		return errors.New("invalid flexible value type: " + str)
	}

	*s = FlexValueType(val)
	return nil
}
