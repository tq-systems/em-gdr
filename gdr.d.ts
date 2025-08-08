import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a GDRs. */
export interface IGDRs {

    /** GDRs GDRs */
    GDRs?: ({ [k: string]: IGDR }|null);

    /** GDRs configUuid */
    configUuid?: (string|null);
}

/** Represents a GDRs. */
export class GDRs implements IGDRs {

    /**
     * Constructs a new GDRs.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGDRs);

    /** GDRs GDRs. */
    public GDRs: { [k: string]: IGDR };

    /** GDRs configUuid. */
    public configUuid: string;

    /**
     * Creates a new GDRs instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GDRs instance
     */
    public static create(properties?: IGDRs): GDRs;

    /**
     * Encodes the specified GDRs message. Does not implicitly {@link GDRs.verify|verify} messages.
     * @param message GDRs message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGDRs, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GDRs message, length delimited. Does not implicitly {@link GDRs.verify|verify} messages.
     * @param message GDRs message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGDRs, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GDRs message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GDRs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GDRs;

    /**
     * Decodes a GDRs message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GDRs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GDRs;

    /**
     * Verifies a GDRs message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GDRs message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GDRs
     */
    public static fromObject(object: { [k: string]: any }): GDRs;

    /**
     * Creates a plain object from a GDRs message. Also converts values to other types if specified.
     * @param message GDRs
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GDRs, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GDRs to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GDRs
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GCRs. */
export interface IGCRs {

    /** GCRs GCRs */
    GCRs?: ({ [k: string]: IGCR }|null);

    /** GCRs configUuid */
    configUuid?: (string|null);
}

/** Represents a GCRs. */
export class GCRs implements IGCRs {

    /**
     * Constructs a new GCRs.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGCRs);

    /** GCRs GCRs. */
    public GCRs: { [k: string]: IGCR };

    /** GCRs configUuid. */
    public configUuid: string;

    /**
     * Creates a new GCRs instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GCRs instance
     */
    public static create(properties?: IGCRs): GCRs;

    /**
     * Encodes the specified GCRs message. Does not implicitly {@link GCRs.verify|verify} messages.
     * @param message GCRs message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGCRs, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GCRs message, length delimited. Does not implicitly {@link GCRs.verify|verify} messages.
     * @param message GCRs message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGCRs, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GCRs message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GCRs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GCRs;

    /**
     * Decodes a GCRs message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GCRs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GCRs;

    /**
     * Verifies a GCRs message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GCRs message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GCRs
     */
    public static fromObject(object: { [k: string]: any }): GCRs;

    /**
     * Creates a plain object from a GCRs message. Also converts values to other types if specified.
     * @param message GCRs
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GCRs, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GCRs to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GCRs
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GDR. */
export interface IGDR {

    /** GDR id */
    id?: (string|null);

    /** GDR status */
    status?: (Status|null);

    /** GDR timestamp */
    timestamp?: (google.protobuf.ITimestamp|null);

    /** GDR values */
    values?: ({ [k: string]: number }|null);

    /** GDR flexValues */
    flexValues?: ({ [k: string]: IFlexValue }|null);
}

/** Represents a GDR. */
export class GDR implements IGDR {

    /**
     * Constructs a new GDR.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGDR);

    /** GDR id. */
    public id: string;

    /** GDR status. */
    public status: Status;

    /** GDR timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /** GDR values. */
    public values: { [k: string]: number };

    /** GDR flexValues. */
    public flexValues: { [k: string]: IFlexValue };

    /**
     * Creates a new GDR instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GDR instance
     */
    public static create(properties?: IGDR): GDR;

    /**
     * Encodes the specified GDR message. Does not implicitly {@link GDR.verify|verify} messages.
     * @param message GDR message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGDR, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GDR message, length delimited. Does not implicitly {@link GDR.verify|verify} messages.
     * @param message GDR message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGDR, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GDR message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GDR
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GDR;

    /**
     * Decodes a GDR message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GDR
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GDR;

    /**
     * Verifies a GDR message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GDR message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GDR
     */
    public static fromObject(object: { [k: string]: any }): GDR;

    /**
     * Creates a plain object from a GDR message. Also converts values to other types if specified.
     * @param message GDR
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GDR, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GDR to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GDR
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GCR. */
export interface IGCR {

    /** GCR id */
    id?: (string|null);

    /** GCR label */
    label?: (string|null);

    /** GCR class */
    "class"?: (Class|null);

    /** GCR sources */
    sources?: (string[]|null);

    /** GCR codes */
    codes?: (number[]|null);

    /** GCR devicetype */
    devicetype?: (DeviceType|null);

    /** GCR meta */
    meta?: ({ [k: string]: string }|null);

    /** GCR timestamp */
    timestamp?: (google.protobuf.ITimestamp|null);

    /** GCR flexDefinitions */
    flexDefinitions?: ({ [k: string]: IFlexDefinition }|null);
}

/** Represents a GCR. */
export class GCR implements IGCR {

    /**
     * Constructs a new GCR.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGCR);

    /** GCR id. */
    public id: string;

    /** GCR label. */
    public label: string;

    /** GCR class. */
    public class: Class;

    /** GCR sources. */
    public sources: string[];

    /** GCR codes. */
    public codes: number[];

    /** GCR devicetype. */
    public devicetype: DeviceType;

    /** GCR meta. */
    public meta: { [k: string]: string };

    /** GCR timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /** GCR flexDefinitions. */
    public flexDefinitions: { [k: string]: IFlexDefinition };

    /**
     * Creates a new GCR instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GCR instance
     */
    public static create(properties?: IGCR): GCR;

    /**
     * Encodes the specified GCR message. Does not implicitly {@link GCR.verify|verify} messages.
     * @param message GCR message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGCR, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GCR message, length delimited. Does not implicitly {@link GCR.verify|verify} messages.
     * @param message GCR message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGCR, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GCR message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GCR
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GCR;

    /**
     * Decodes a GCR message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GCR
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GCR;

    /**
     * Verifies a GCR message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GCR message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GCR
     */
    public static fromObject(object: { [k: string]: any }): GCR;

    /**
     * Creates a plain object from a GCR message. Also converts values to other types if specified.
     * @param message GCR
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GCR, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GCR to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GCR
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a FlexValue. */
export interface IFlexValue {

    /** FlexValue intValue */
    intValue?: (number|null);

    /** FlexValue stringValue */
    stringValue?: (string|null);
}

/** Represents a FlexValue. */
export class FlexValue implements IFlexValue {

    /**
     * Constructs a new FlexValue.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFlexValue);

    /** FlexValue intValue. */
    public intValue: number;

    /** FlexValue stringValue. */
    public stringValue: string;

    /**
     * Creates a new FlexValue instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FlexValue instance
     */
    public static create(properties?: IFlexValue): FlexValue;

    /**
     * Encodes the specified FlexValue message. Does not implicitly {@link FlexValue.verify|verify} messages.
     * @param message FlexValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFlexValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FlexValue message, length delimited. Does not implicitly {@link FlexValue.verify|verify} messages.
     * @param message FlexValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFlexValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FlexValue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FlexValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FlexValue;

    /**
     * Decodes a FlexValue message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FlexValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FlexValue;

    /**
     * Verifies a FlexValue message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FlexValue message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FlexValue
     */
    public static fromObject(object: { [k: string]: any }): FlexValue;

    /**
     * Creates a plain object from a FlexValue message. Also converts values to other types if specified.
     * @param message FlexValue
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FlexValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FlexValue to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for FlexValue
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a FlexDefinition. */
export interface IFlexDefinition {

    /** FlexDefinition label */
    label?: (string|null);

    /** FlexDefinition type */
    type?: (FlexValueType|null);

    /** FlexDefinition unit */
    unit?: (Unit|null);

    /** FlexDefinition decimalpower */
    decimalpower?: (number|null);
}

/** Represents a FlexDefinition. */
export class FlexDefinition implements IFlexDefinition {

    /**
     * Constructs a new FlexDefinition.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFlexDefinition);

    /** FlexDefinition label. */
    public label: string;

    /** FlexDefinition type. */
    public type: FlexValueType;

    /** FlexDefinition unit. */
    public unit: Unit;

    /** FlexDefinition decimalpower. */
    public decimalpower: number;

    /**
     * Creates a new FlexDefinition instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FlexDefinition instance
     */
    public static create(properties?: IFlexDefinition): FlexDefinition;

    /**
     * Encodes the specified FlexDefinition message. Does not implicitly {@link FlexDefinition.verify|verify} messages.
     * @param message FlexDefinition message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFlexDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FlexDefinition message, length delimited. Does not implicitly {@link FlexDefinition.verify|verify} messages.
     * @param message FlexDefinition message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFlexDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FlexDefinition message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FlexDefinition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FlexDefinition;

    /**
     * Decodes a FlexDefinition message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FlexDefinition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FlexDefinition;

    /**
     * Verifies a FlexDefinition message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FlexDefinition message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FlexDefinition
     */
    public static fromObject(object: { [k: string]: any }): FlexDefinition;

    /**
     * Creates a plain object from a FlexDefinition message. Also converts values to other types if specified.
     * @param message FlexDefinition
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FlexDefinition, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FlexDefinition to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for FlexDefinition
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** FlexValueType enum. */
export enum FlexValueType {
    FLEX_VALUE_TYPE_INTEGER = 0,
    FLEX_VALUE_TYPE_STRING = 1
}

/** Unit enum. */
export enum Unit {
    UNIT_UNKNOWN = 0,
    UNIT_AMPERE = 1,
    UNIT_VOLT = 2,
    UNIT_WATT = 3,
    UNIT_HERTZ = 4,
    UNIT_VOLT_AMPERE = 5,
    UNIT_VOLT_AMPERE_REACTIVE = 6,
    UNIT_WATT_HOUR = 7,
    UNIT_KILO_WATT_HOUR = 8,
    UNIT_SECOND = 9,
    UNIT_MINUTE = 10,
    UNIT_HOUR = 11,
    UNIT_DAY = 12,
    UNIT_WEEK = 13,
    UNIT_MONTH = 14,
    UNIT_YEAR = 15,
    UNIT_DEGREE_CELSIUS = 16,
    UNIT_KELVIN = 17,
    UNIT_DEGREE_FAHRENHEIT = 18
}

/** DeviceType enum. */
export enum DeviceType {
    DEVICE_TYPE_UNKNOWN = 0,
    DEVICE_TYPE_PHOTOVOLTAIC_SYSTEM = 1,
    DEVICE_TYPE_ELECTRIC_VEHICLE = 2,
    DEVICE_TYPE_BATTERY = 3,
    DEVICE_TYPE_OVEN = 4,
    DEVICE_TYPE_FLOW_HEATER = 5,
    DEVICE_TYPE_BOILER = 6,
    DEVICE_TYPE_IMMERSION_HEATER = 7,
    DEVICE_TYPE_STOVE = 8,
    DEVICE_TYPE_COOLER = 9,
    DEVICE_TYPE_VENTILATION = 10,
    DEVICE_TYPE_DISHWASHER = 11,
    DEVICE_TYPE_DRYER = 12,
    DEVICE_TYPE_HEAT_PUMP = 13,
    DEVICE_TYPE_WASHING_MACHINE = 14,
    DEVICE_TYPE_INVERTER_ONEPHASE = 15,
    DEVICE_TYPE_INVERTER_THREEPHASE = 16,
    DEVICE_TYPE_CHP = 17,
    DEVICE_TYPE_BUILDING_OFFICE = 18,
    DEVICE_TYPE_BUILDING_COMMERCIAL = 19,
    DEVICE_TYPE_BUILDING_FACTORY = 20,
    DEVICE_TYPE_BUILDING_SINGLE_HOME = 21,
    DEVICE_TYPE_BUILDING_HOTEL = 22,
    DEVICE_TYPE_BUILDING_APARTMENTS = 23,
    DEVICE_TYPE_BUILDING_PARKING = 24,
    DEVICE_TYPE_BUILDING_RESIDENTIAL = 25,
    DEVICE_TYPE_ROOM_BATH = 26,
    DEVICE_TYPE_ROOM_GARAGE = 27,
    DEVICE_TYPE_ROOM_BASEMENT = 28,
    DEVICE_TYPE_ROOM_CHILD = 29,
    DEVICE_TYPE_ROOM_KITCHEN = 30,
    DEVICE_TYPE_ROOM_SAUNA = 31,
    DEVICE_TYPE_ROOM_BED = 32,
    DEVICE_TYPE_ROOM_LIVING = 33,
    DEVICE_TYPE_ROOM_GENERIC = 34,
    DEVICE_TYPE_CONTROLLABLE_LOAD = 35,
    DEVICE_TYPE_LIGHTING = 36,
    DEVICE_TYPE_OFFICES = 37,
    DEVICE_TYPE_DOMESTIC_APPLIANCES = 38,
    DEVICE_TYPE_HEATER_OF_HEAT_PUMP = 39,
    DEVICE_TYPE_INDUSTRIAL_ENGINE = 40,
    DEVICE_TYPE_AIR_CONDITIONING = 41,
    DEVICE_TYPE_COMPRESSOR = 42,
    DEVICE_TYPE_PC_DATA_CENTER = 43,
    DEVICE_TYPE_FUSES_THREE = 44,
    DEVICE_TYPE_FUSES_SIX = 45,
    DEVICE_TYPE_FUSES_NINE = 46,
    DEVICE_TYPE_FUSES_TWELVE = 47,
    DEVICE_TYPE_COMPACTOR = 48,
    DEVICE_TYPE_WHITE_GOODS = 49,
    DEVICE_TYPE_COLD_STORAGE_ROOM = 50,
    DEVICE_TYPE_GARDEN_SHED = 51,
    DEVICE_TYPE_COOLING_COMBINATION = 52,
    DEVICE_TYPE_FACILITIES = 53,
    DEVICE_TYPE_FREEZER = 54,
    DEVICE_TYPE_FRIDGE = 55,
    DEVICE_TYPE_GRID_CONNECTION_POINT = 56,
    DEVICE_TYPE_INVERTER_HYBRID = 57,
    DEVICE_TYPE_CIRCUIT_PROTECTION = 58,
    DEVICE_TYPE_DATA_TRANSCEIVER = 59,
    DEVICE_TYPE_INVERTER_BATTERY = 60,
    DEVICE_TYPE_INVERTER_PV = 61
}

/** Status enum. */
export enum Status {
    STATUS_UNKNOWN = 0,
    STATUS_OK = 1,
    STATUS_WARNING = 2,
    STATUS_ERROR = 3
}

/** Class enum. */
export enum Class {
    CLASS_UNKNOWN = 0,
    CLASS_CONSUMER = 1,
    CLASS_PRODUCER = 2,
    CLASS_HYBRID = 3
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: number;

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
