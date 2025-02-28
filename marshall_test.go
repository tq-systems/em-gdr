/*
 * Generic Data Record - marshall_test.go
 * Copyright (c) 2025 TQ-Systems GmbH <license@tq-group.com>, D-82229 Seefeld, Germany. All rights reserved.
 * Author: The Energy Manager development team
 *
 * This software code contained herein is licensed under the terms and conditions of
 * the TQ-Systems Product Software License Agreement Version 1.0.2 or any later version.
 * You will find the corresponding license text in the LICENSE file.
 * In case of any license issues please contact license@tq-group.com.
 */
package gdr

import (
	"testing"

	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/timestamppb"
)

var testGDR = GDRs{
	GDRs: map[string]*GDR{
		"gdr1": {
			Id:        "smart-meter",
			Status:    Status_STATUS_OK,
			Timestamp: timestamppb.Now(),
			Values: map[uint64]uint64{
				1099528667391: 64400,
				1099528929535: 40400,
				1099545444607: 0,
				1099545706751: 0,
				1099562221823: 0,
				1099562483967: 0,
				1099578999039: 548500,
				1099579261183: 345500,
				1099662885119: 552300,
				1099663147263: 347900,
				1099679662335: 0,
				1099679924479: 0,
				1099729993983: 117,
				1099746771199: 49965,
				1099864211711: 55300,
				1099864473855: 34900,
				1099880988927: 0,
				1099881251071: 0,
				1099897766143: 0,
				1099898028287: 0,
				1099914543359: 205700,
				1099914805503: 129600,
				1099998429439: 213000,
				1099998691583: 134200,
				1100015206655: 0,
				1100015468799: 0,
				1100031983871: 975,
				1100048761087: 234731,
				1100065538303: 260,
				1100199756031: 2900,
				1100200018175: 1700,
				1100216533247: 0,
				1100216795391: 0,
				1100233310463: 0,
				1100233572607: 0,
				1100250087679: 181400,
				1100250349823: 114000,
				1100333973759: 181400,
				1100334235903: 114000,
				1100350750975: 0,
				1100351013119: 0,
				1100367528191: 781,
				1100384305407: 234773,
				1100401082623: 16,
				1100535300351: 6200,
				1100535562495: 3800,
				1100552077567: 0,
				1100552339711: 0,
				1100568854783: 0,
				1100569116927: 0,
				1100585631999: 161500,
				1100585894143: 101800,
				1100669518079: 161600,
				1100669780223: 101900,
				1100686295295: 0,
				1100686557439: 0,
				1100703072511: 692,
				1100719849727: 236071,
				1100736626943: 38,
			},
		},
	},
}

// go test -bench . -benchmem -count=10

func BenchmarkProtoUnmarshal(b *testing.B) {
	data, err := proto.Marshal(&testGDR)
	if err != nil {
		b.Fatalf("error preparing test data during marshalling: %v", err)
	}

	var unmarshalledGDR GDRs

	b.ResetTimer()
	for i := 0; i < b.N; i++ {
		if err := unmarshalledGDR.UnmarshalVT(data); err != nil {
			b.Fatalf("error unmarshalling data: %v", err)
		}
	}
}

func BenchmarkProtoMarshal(b *testing.B) {
	for i := 0; i < b.N; i++ {
		if _, err := testGDR.MarshalVT(); err != nil {
			b.Fatalf("error marshalling data: %v", err)
		}
	}
}
