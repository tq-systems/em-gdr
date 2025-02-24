/*
 * Generic Data Record - structs.go
 * Copyright (c) 2018 - 2025 TQ-Systems GmbH <license@tq-group.com>, D-82229 Seefeld, Germany. All rights reserved.
 * Author: The Energy Manager development team
 *
 * This software code contained herein is licensed under the terms and conditions of
 * the TQ-Systems Product Software License Agreement Version 1.0.2 or any later version.
 * You will find the corresponding license text in the LICENSE file.
 * In case of any license issues please contact license@tq-group.com.
 */

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
	ObisIndicatorActivePlus       = 1
	ObisIndicatorActiveMinus      = 2
	ObisIndicatorReactivePlus     = 3
	ObisIndicatorReactiveMinus    = 4
	ObisIndicatorApparentPlus     = 9
	ObisIndicatorApparentMinus    = 10
	ObisIndicatorCurrent          = 11
	ObisIndicatorVoltage          = 12
	ObisIndicatorPowerFactorPlus  = 13
	ObisIndicatorFrequency        = 14
	ObisIndicatorPowerFactorMinus = 15

	// ObisIndicatorPhaseModulo can be used to transform the indicators of phases L1-L3
	// to the indicators specified above
	ObisIndicatorPhaseModulo = 20

	// ObisModeMean is the mode used to describe the mean value
	ObisModeMean = 4
	// ObisModeMaximum is the mode used to describe the maximum value
	ObisModeMaximum = 6
	// ObisModeInstantaneous is the mode used to describe the instantaneous value
	ObisModeInstantaneous = 7
	// ObisModeIntegral is the mode used to describe the integral value
	ObisModeIntegral = 8
)
