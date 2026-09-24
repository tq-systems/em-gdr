import * as $protobuf from "protobufjs";
import Long = require("long");

/**
 * Properties of a GDRs.
 * @deprecated Use GDRs.$Properties instead.
 */
export interface IGDRs extends GDRs.$Properties {
}

/** Represents a GDRs. */
export class GDRs {

    /**
     * Constructs a new GDRs.
     * @param [properties] Properties to set
     */
    constructor(properties?: GDRs.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** GDRs GDRs. */
    GDRs: { [k: string]: GDR.$Properties };

    /** GDRs configUuid. */
    configUuid: string;

    /**
     * Creates a new GDRs instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GDRs instance
     */
    static create(properties: GDRs.$Shape): GDRs & GDRs.$Shape;
    static create(properties?: GDRs.$Properties): GDRs;

    /**
     * Encodes the specified GDRs message. Does not implicitly {@link GDRs.verify|verify} messages.
     * @param message GDRs message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: GDRs.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GDRs message, length delimited. Does not implicitly {@link GDRs.verify|verify} messages.
     * @param message GDRs message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: GDRs.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GDRs message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {GDRs & GDRs.$Shape} GDRs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GDRs & GDRs.$Shape;

    /**
     * Decodes a GDRs message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {GDRs & GDRs.$Shape} GDRs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GDRs & GDRs.$Shape;

    /**
     * Verifies a GDRs message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GDRs message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GDRs
     */
    static fromObject(object: { [k: string]: any }): GDRs;

    /**
     * Creates a plain object from a GDRs message. Also converts values to other types if specified.
     * @param message GDRs
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: GDRs, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GDRs to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for GDRs
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace GDRs {

    /** Properties of a GDRs. */
    interface $Properties {

        /** GDRs GDRs */
        GDRs?: ({ [k: string]: GDR.$Properties }|null);

        /** GDRs configUuid */
        configUuid?: (string|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a GDRs. */
    type $Shape = GDRs.$Properties;
}

/**
 * Properties of a GCRs.
 * @deprecated Use GCRs.$Properties instead.
 */
export interface IGCRs extends GCRs.$Properties {
}

/** Represents a GCRs. */
export class GCRs {

    /**
     * Constructs a new GCRs.
     * @param [properties] Properties to set
     */
    constructor(properties?: GCRs.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** GCRs GCRs. */
    GCRs: { [k: string]: GCR.$Properties };

    /** GCRs configUuid. */
    configUuid: string;

    /**
     * Creates a new GCRs instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GCRs instance
     */
    static create(properties: GCRs.$Shape): GCRs & GCRs.$Shape;
    static create(properties?: GCRs.$Properties): GCRs;

    /**
     * Encodes the specified GCRs message. Does not implicitly {@link GCRs.verify|verify} messages.
     * @param message GCRs message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: GCRs.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GCRs message, length delimited. Does not implicitly {@link GCRs.verify|verify} messages.
     * @param message GCRs message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: GCRs.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GCRs message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {GCRs & GCRs.$Shape} GCRs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GCRs & GCRs.$Shape;

    /**
     * Decodes a GCRs message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {GCRs & GCRs.$Shape} GCRs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GCRs & GCRs.$Shape;

    /**
     * Verifies a GCRs message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GCRs message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GCRs
     */
    static fromObject(object: { [k: string]: any }): GCRs;

    /**
     * Creates a plain object from a GCRs message. Also converts values to other types if specified.
     * @param message GCRs
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: GCRs, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GCRs to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for GCRs
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace GCRs {

    /** Properties of a GCRs. */
    interface $Properties {

        /** GCRs GCRs */
        GCRs?: ({ [k: string]: GCR.$Properties }|null);

        /** GCRs configUuid */
        configUuid?: (string|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a GCRs. */
    type $Shape = GCRs.$Properties;
}

/**
 * Properties of a GDR.
 * @deprecated Use GDR.$Properties instead.
 */
export interface IGDR extends GDR.$Properties {
}

/** Represents a GDR. */
export class GDR {

    /**
     * Constructs a new GDR.
     * @param [properties] Properties to set
     */
    constructor(properties?: GDR.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** GDR id. */
    id: string;

    /** GDR status. */
    status: Status;

    /** GDR timestamp. */
    timestamp?: (google.protobuf.Timestamp.$Properties|null);

    /** GDR values. */
    values: { [k: string]: number };

    /** GDR flexValues. */
    flexValues: { [k: string]: FlexValue.$Properties };

    /**
     * Creates a new GDR instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GDR instance
     */
    static create(properties: GDR.$Shape): GDR & GDR.$Shape;
    static create(properties?: GDR.$Properties): GDR;

    /**
     * Encodes the specified GDR message. Does not implicitly {@link GDR.verify|verify} messages.
     * @param message GDR message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: GDR.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GDR message, length delimited. Does not implicitly {@link GDR.verify|verify} messages.
     * @param message GDR message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: GDR.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GDR message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {GDR & GDR.$Shape} GDR
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GDR & GDR.$Shape;

    /**
     * Decodes a GDR message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {GDR & GDR.$Shape} GDR
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GDR & GDR.$Shape;

    /**
     * Verifies a GDR message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GDR message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GDR
     */
    static fromObject(object: { [k: string]: any }): GDR;

    /**
     * Creates a plain object from a GDR message. Also converts values to other types if specified.
     * @param message GDR
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: GDR, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GDR to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for GDR
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace GDR {

    /** Properties of a GDR. */
    interface $Properties {

        /** GDR id */
        id?: (string|null);

        /** GDR status */
        status?: (Status|null);

        /** GDR timestamp */
        timestamp?: (google.protobuf.Timestamp.$Properties|null);

        /** GDR values */
        values?: ({ [k: string]: number }|null);

        /** GDR flexValues */
        flexValues?: ({ [k: string]: FlexValue.$Properties }|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a GDR. */
    type $Shape = GDR.$Properties;
}

/**
 * Properties of a GCR.
 * @deprecated Use GCR.$Properties instead.
 */
export interface IGCR extends GCR.$Properties {
}

/** Represents a GCR. */
export class GCR {

    /**
     * Constructs a new GCR.
     * @param [properties] Properties to set
     */
    constructor(properties?: GCR.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** GCR id. */
    id: string;

    /** GCR label. */
    label: string;

    /** GCR class. */
    class: Class;

    /** GCR sources. */
    sources: string[];

    /** GCR codes. */
    codes: number[];

    /** GCR devicetype. */
    devicetype: DeviceType;

    /** GCR meta. */
    meta: { [k: string]: string };

    /** GCR timestamp. */
    timestamp?: (google.protobuf.Timestamp.$Properties|null);

    /** GCR flexDefinitions. */
    flexDefinitions: { [k: string]: FlexDefinition.$Properties };

    /**
     * Creates a new GCR instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GCR instance
     */
    static create(properties: GCR.$Shape): GCR & GCR.$Shape;
    static create(properties?: GCR.$Properties): GCR;

    /**
     * Encodes the specified GCR message. Does not implicitly {@link GCR.verify|verify} messages.
     * @param message GCR message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: GCR.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GCR message, length delimited. Does not implicitly {@link GCR.verify|verify} messages.
     * @param message GCR message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: GCR.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GCR message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {GCR & GCR.$Shape} GCR
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GCR & GCR.$Shape;

    /**
     * Decodes a GCR message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {GCR & GCR.$Shape} GCR
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GCR & GCR.$Shape;

    /**
     * Verifies a GCR message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GCR message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GCR
     */
    static fromObject(object: { [k: string]: any }): GCR;

    /**
     * Creates a plain object from a GCR message. Also converts values to other types if specified.
     * @param message GCR
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: GCR, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GCR to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for GCR
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace GCR {

    /** Properties of a GCR. */
    interface $Properties {

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
        timestamp?: (google.protobuf.Timestamp.$Properties|null);

        /** GCR flexDefinitions */
        flexDefinitions?: ({ [k: string]: FlexDefinition.$Properties }|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a GCR. */
    type $Shape = GCR.$Properties;
}

/**
 * Properties of a FlexValue.
 * @deprecated Use FlexValue.$Properties instead.
 */
export interface IFlexValue extends FlexValue.$Properties {
}

/** Represents a FlexValue. */
export class FlexValue {

    /**
     * Constructs a new FlexValue.
     * @param [properties] Properties to set
     */
    constructor(properties?: FlexValue.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** FlexValue intValue. */
    intValue: number;

    /** FlexValue stringValue. */
    stringValue: string;

    /**
     * Creates a new FlexValue instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FlexValue instance
     */
    static create(properties: FlexValue.$Shape): FlexValue & FlexValue.$Shape;
    static create(properties?: FlexValue.$Properties): FlexValue;

    /**
     * Encodes the specified FlexValue message. Does not implicitly {@link FlexValue.verify|verify} messages.
     * @param message FlexValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: FlexValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FlexValue message, length delimited. Does not implicitly {@link FlexValue.verify|verify} messages.
     * @param message FlexValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: FlexValue.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FlexValue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {FlexValue & FlexValue.$Shape} FlexValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FlexValue & FlexValue.$Shape;

    /**
     * Decodes a FlexValue message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {FlexValue & FlexValue.$Shape} FlexValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FlexValue & FlexValue.$Shape;

    /**
     * Verifies a FlexValue message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FlexValue message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FlexValue
     */
    static fromObject(object: { [k: string]: any }): FlexValue;

    /**
     * Creates a plain object from a FlexValue message. Also converts values to other types if specified.
     * @param message FlexValue
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: FlexValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FlexValue to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for FlexValue
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace FlexValue {

    /** Properties of a FlexValue. */
    interface $Properties {

        /** FlexValue intValue */
        intValue?: (number|null);

        /** FlexValue stringValue */
        stringValue?: (string|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a FlexValue. */
    type $Shape = FlexValue.$Properties;
}

/**
 * Properties of a FlexDefinition.
 * @deprecated Use FlexDefinition.$Properties instead.
 */
export interface IFlexDefinition extends FlexDefinition.$Properties {
}

/** Represents a FlexDefinition. */
export class FlexDefinition {

    /**
     * Constructs a new FlexDefinition.
     * @param [properties] Properties to set
     */
    constructor(properties?: FlexDefinition.$Properties);

    /** Unknown fields preserved while decoding when enabled */
    $unknowns?: Uint8Array[];

    /** FlexDefinition label. */
    label: string;

    /** FlexDefinition type. */
    type: FlexValueType;

    /** FlexDefinition unit. */
    unit: Unit;

    /** FlexDefinition decimalpower. */
    decimalpower: number;

    /**
     * Creates a new FlexDefinition instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FlexDefinition instance
     */
    static create(properties: FlexDefinition.$Shape): FlexDefinition & FlexDefinition.$Shape;
    static create(properties?: FlexDefinition.$Properties): FlexDefinition;

    /**
     * Encodes the specified FlexDefinition message. Does not implicitly {@link FlexDefinition.verify|verify} messages.
     * @param message FlexDefinition message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encode(message: FlexDefinition.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FlexDefinition message, length delimited. Does not implicitly {@link FlexDefinition.verify|verify} messages.
     * @param message FlexDefinition message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    static encodeDelimited(message: FlexDefinition.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FlexDefinition message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns {FlexDefinition & FlexDefinition.$Shape} FlexDefinition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FlexDefinition & FlexDefinition.$Shape;

    /**
     * Decodes a FlexDefinition message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns {FlexDefinition & FlexDefinition.$Shape} FlexDefinition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FlexDefinition & FlexDefinition.$Shape;

    /**
     * Verifies a FlexDefinition message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FlexDefinition message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FlexDefinition
     */
    static fromObject(object: { [k: string]: any }): FlexDefinition;

    /**
     * Creates a plain object from a FlexDefinition message. Also converts values to other types if specified.
     * @param message FlexDefinition
     * @param [options] Conversion options
     * @returns Plain object
     */
    static toObject(message: FlexDefinition, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FlexDefinition to JSON.
     * @returns JSON object
     */
    toJSON(): { [k: string]: any };

    /**
     * Gets the type url for FlexDefinition
     * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
     * @returns The type url
     */
    static getTypeUrl(prefix?: string): string;
}

export namespace FlexDefinition {

    /** Properties of a FlexDefinition. */
    interface $Properties {

        /** FlexDefinition label */
        label?: (string|null);

        /** FlexDefinition type */
        type?: (FlexValueType|null);

        /** FlexDefinition unit */
        unit?: (Unit|null);

        /** FlexDefinition decimalpower */
        decimalpower?: (number|null);

        /** Unknown fields preserved while decoding when enabled */
        $unknowns?: Uint8Array[];
    }

    /** Shape of a FlexDefinition. */
    type $Shape = FlexDefinition.$Properties;
}

/** FlexValueType enum. */
export enum FlexValueType {

    /** FLEX_VALUE_TYPE_INTEGER value */
    FLEX_VALUE_TYPE_INTEGER = 0,

    /** FLEX_VALUE_TYPE_STRING value */
    FLEX_VALUE_TYPE_STRING = 1
}

/** Unit enum. */
export enum Unit {

    /** UNIT_UNKNOWN value */
    UNIT_UNKNOWN = 0,

    /** UNIT_AMPERE value */
    UNIT_AMPERE = 1,

    /** UNIT_VOLT value */
    UNIT_VOLT = 2,

    /** UNIT_WATT value */
    UNIT_WATT = 3,

    /** UNIT_HERTZ value */
    UNIT_HERTZ = 4,

    /** UNIT_VOLT_AMPERE value */
    UNIT_VOLT_AMPERE = 5,

    /** UNIT_VOLT_AMPERE_REACTIVE value */
    UNIT_VOLT_AMPERE_REACTIVE = 6,

    /** UNIT_WATT_HOUR value */
    UNIT_WATT_HOUR = 7,

    /** UNIT_KILO_WATT_HOUR value */
    UNIT_KILO_WATT_HOUR = 8,

    /** UNIT_SECOND value */
    UNIT_SECOND = 9,

    /** UNIT_MINUTE value */
    UNIT_MINUTE = 10,

    /** UNIT_HOUR value */
    UNIT_HOUR = 11,

    /** UNIT_DAY value */
    UNIT_DAY = 12,

    /** UNIT_WEEK value */
    UNIT_WEEK = 13,

    /** UNIT_MONTH value */
    UNIT_MONTH = 14,

    /** UNIT_YEAR value */
    UNIT_YEAR = 15,

    /** UNIT_DEGREE_CELSIUS value */
    UNIT_DEGREE_CELSIUS = 16,

    /** UNIT_KELVIN value */
    UNIT_KELVIN = 17,

    /** UNIT_DEGREE_FAHRENHEIT value */
    UNIT_DEGREE_FAHRENHEIT = 18
}

/** DeviceType enum. */
export enum DeviceType {

    /** DEVICE_TYPE_UNKNOWN value */
    DEVICE_TYPE_UNKNOWN = 0,

    /** DEVICE_TYPE_PHOTOVOLTAIC_SYSTEM value */
    DEVICE_TYPE_PHOTOVOLTAIC_SYSTEM = 1,

    /** DEVICE_TYPE_ELECTRIC_VEHICLE value */
    DEVICE_TYPE_ELECTRIC_VEHICLE = 2,

    /** DEVICE_TYPE_BATTERY value */
    DEVICE_TYPE_BATTERY = 3,

    /** DEVICE_TYPE_OVEN value */
    DEVICE_TYPE_OVEN = 4,

    /** DEVICE_TYPE_FLOW_HEATER value */
    DEVICE_TYPE_FLOW_HEATER = 5,

    /** DEVICE_TYPE_BOILER value */
    DEVICE_TYPE_BOILER = 6,

    /** DEVICE_TYPE_IMMERSION_HEATER value */
    DEVICE_TYPE_IMMERSION_HEATER = 7,

    /** DEVICE_TYPE_STOVE value */
    DEVICE_TYPE_STOVE = 8,

    /** DEVICE_TYPE_COOLER value */
    DEVICE_TYPE_COOLER = 9,

    /** DEVICE_TYPE_VENTILATION value */
    DEVICE_TYPE_VENTILATION = 10,

    /** DEVICE_TYPE_DISHWASHER value */
    DEVICE_TYPE_DISHWASHER = 11,

    /** DEVICE_TYPE_DRYER value */
    DEVICE_TYPE_DRYER = 12,

    /** DEVICE_TYPE_HEAT_PUMP value */
    DEVICE_TYPE_HEAT_PUMP = 13,

    /** DEVICE_TYPE_WASHING_MACHINE value */
    DEVICE_TYPE_WASHING_MACHINE = 14,

    /** DEVICE_TYPE_INVERTER_ONEPHASE value */
    DEVICE_TYPE_INVERTER_ONEPHASE = 15,

    /** DEVICE_TYPE_INVERTER_THREEPHASE value */
    DEVICE_TYPE_INVERTER_THREEPHASE = 16,

    /** DEVICE_TYPE_CHP value */
    DEVICE_TYPE_CHP = 17,

    /** DEVICE_TYPE_BUILDING_OFFICE value */
    DEVICE_TYPE_BUILDING_OFFICE = 18,

    /** DEVICE_TYPE_BUILDING_COMMERCIAL value */
    DEVICE_TYPE_BUILDING_COMMERCIAL = 19,

    /** DEVICE_TYPE_BUILDING_FACTORY value */
    DEVICE_TYPE_BUILDING_FACTORY = 20,

    /** DEVICE_TYPE_BUILDING_SINGLE_HOME value */
    DEVICE_TYPE_BUILDING_SINGLE_HOME = 21,

    /** DEVICE_TYPE_BUILDING_HOTEL value */
    DEVICE_TYPE_BUILDING_HOTEL = 22,

    /** DEVICE_TYPE_BUILDING_APARTMENTS value */
    DEVICE_TYPE_BUILDING_APARTMENTS = 23,

    /** DEVICE_TYPE_BUILDING_PARKING value */
    DEVICE_TYPE_BUILDING_PARKING = 24,

    /** DEVICE_TYPE_BUILDING_RESIDENTIAL value */
    DEVICE_TYPE_BUILDING_RESIDENTIAL = 25,

    /** DEVICE_TYPE_ROOM_BATH value */
    DEVICE_TYPE_ROOM_BATH = 26,

    /** DEVICE_TYPE_ROOM_GARAGE value */
    DEVICE_TYPE_ROOM_GARAGE = 27,

    /** DEVICE_TYPE_ROOM_BASEMENT value */
    DEVICE_TYPE_ROOM_BASEMENT = 28,

    /** DEVICE_TYPE_ROOM_CHILD value */
    DEVICE_TYPE_ROOM_CHILD = 29,

    /** DEVICE_TYPE_ROOM_KITCHEN value */
    DEVICE_TYPE_ROOM_KITCHEN = 30,

    /** DEVICE_TYPE_ROOM_SAUNA value */
    DEVICE_TYPE_ROOM_SAUNA = 31,

    /** DEVICE_TYPE_ROOM_BED value */
    DEVICE_TYPE_ROOM_BED = 32,

    /** DEVICE_TYPE_ROOM_LIVING value */
    DEVICE_TYPE_ROOM_LIVING = 33,

    /** DEVICE_TYPE_ROOM_GENERIC value */
    DEVICE_TYPE_ROOM_GENERIC = 34,

    /** DEVICE_TYPE_CONTROLLABLE_LOAD value */
    DEVICE_TYPE_CONTROLLABLE_LOAD = 35,

    /** DEVICE_TYPE_LIGHTING value */
    DEVICE_TYPE_LIGHTING = 36,

    /** DEVICE_TYPE_OFFICES value */
    DEVICE_TYPE_OFFICES = 37,

    /** DEVICE_TYPE_DOMESTIC_APPLIANCES value */
    DEVICE_TYPE_DOMESTIC_APPLIANCES = 38,

    /** DEVICE_TYPE_HEATER_OF_HEAT_PUMP value */
    DEVICE_TYPE_HEATER_OF_HEAT_PUMP = 39,

    /** DEVICE_TYPE_INDUSTRIAL_ENGINE value */
    DEVICE_TYPE_INDUSTRIAL_ENGINE = 40,

    /** DEVICE_TYPE_AIR_CONDITIONING value */
    DEVICE_TYPE_AIR_CONDITIONING = 41,

    /** DEVICE_TYPE_COMPRESSOR value */
    DEVICE_TYPE_COMPRESSOR = 42,

    /** DEVICE_TYPE_PC_DATA_CENTER value */
    DEVICE_TYPE_PC_DATA_CENTER = 43,

    /** DEVICE_TYPE_FUSES_THREE value */
    DEVICE_TYPE_FUSES_THREE = 44,

    /** DEVICE_TYPE_FUSES_SIX value */
    DEVICE_TYPE_FUSES_SIX = 45,

    /** DEVICE_TYPE_FUSES_NINE value */
    DEVICE_TYPE_FUSES_NINE = 46,

    /** DEVICE_TYPE_FUSES_TWELVE value */
    DEVICE_TYPE_FUSES_TWELVE = 47,

    /** DEVICE_TYPE_COMPACTOR value */
    DEVICE_TYPE_COMPACTOR = 48,

    /** DEVICE_TYPE_WHITE_GOODS value */
    DEVICE_TYPE_WHITE_GOODS = 49,

    /** DEVICE_TYPE_COLD_STORAGE_ROOM value */
    DEVICE_TYPE_COLD_STORAGE_ROOM = 50,

    /** DEVICE_TYPE_GARDEN_SHED value */
    DEVICE_TYPE_GARDEN_SHED = 51,

    /** DEVICE_TYPE_COOLING_COMBINATION value */
    DEVICE_TYPE_COOLING_COMBINATION = 52,

    /** DEVICE_TYPE_FACILITIES value */
    DEVICE_TYPE_FACILITIES = 53,

    /** DEVICE_TYPE_FREEZER value */
    DEVICE_TYPE_FREEZER = 54,

    /** DEVICE_TYPE_FRIDGE value */
    DEVICE_TYPE_FRIDGE = 55,

    /** DEVICE_TYPE_GRID_CONNECTION_POINT value */
    DEVICE_TYPE_GRID_CONNECTION_POINT = 56,

    /** DEVICE_TYPE_INVERTER_HYBRID value */
    DEVICE_TYPE_INVERTER_HYBRID = 57,

    /** DEVICE_TYPE_CIRCUIT_PROTECTION value */
    DEVICE_TYPE_CIRCUIT_PROTECTION = 58,

    /** DEVICE_TYPE_DATA_TRANSCEIVER value */
    DEVICE_TYPE_DATA_TRANSCEIVER = 59,

    /** DEVICE_TYPE_DEVICE_SELF value */
    DEVICE_TYPE_DEVICE_SELF = 60,

    /** DEVICE_TYPE_GRID_CONNECTION_POINT_HUB value */
    DEVICE_TYPE_GRID_CONNECTION_POINT_HUB = 61,

    /** DEVICE_TYPE_CHARGING_GROUP value */
    DEVICE_TYPE_CHARGING_GROUP = 62,

    /** DEVICE_TYPE_ENERGY_MANAGEMENT_SYSTEM value */
    DEVICE_TYPE_ENERGY_MANAGEMENT_SYSTEM = 63
}

/** Status enum. */
export enum Status {

    /** STATUS_UNKNOWN value */
    STATUS_UNKNOWN = 0,

    /** STATUS_OK value */
    STATUS_OK = 1,

    /** STATUS_WARNING value */
    STATUS_WARNING = 2,

    /** STATUS_ERROR value */
    STATUS_ERROR = 3
}

/** Class enum. */
export enum Class {

    /** CLASS_UNKNOWN value */
    CLASS_UNKNOWN = 0,

    /** CLASS_CONSUMER value */
    CLASS_CONSUMER = 1,

    /** CLASS_PRODUCER value */
    CLASS_PRODUCER = 2,

    /** CLASS_HYBRID value */
    CLASS_HYBRID = 3
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /**
         * Properties of a Timestamp.
         * @deprecated Use google.protobuf.Timestamp.$Properties instead.
         */
        interface ITimestamp extends google.protobuf.Timestamp.$Properties {
        }

        /** Represents a Timestamp. */
        class Timestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.Timestamp.$Properties);

            /** Unknown fields preserved while decoding when enabled */
            $unknowns?: Uint8Array[];

            /** Timestamp seconds. */
            seconds: number;

            /** Timestamp nanos. */
            nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            static create(properties: google.protobuf.Timestamp.$Shape): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;
            static create(properties?: google.protobuf.Timestamp.$Properties): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encode(message: google.protobuf.Timestamp.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            static encodeDelimited(message: google.protobuf.Timestamp.$Properties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp & google.protobuf.Timestamp.$Shape;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            toJSON(): { [k: string]: any };

            /**
             * Gets the type url for Timestamp
             * @param [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns The type url
             */
            static getTypeUrl(prefix?: string): string;
        }

        namespace Timestamp {

            /** Properties of a Timestamp. */
            interface $Properties {

                /** Timestamp seconds */
                seconds?: (number|null);

                /** Timestamp nanos */
                nanos?: (number|null);

                /** Unknown fields preserved while decoding when enabled */
                $unknowns?: Uint8Array[];
            }

            /** Shape of a Timestamp. */
            type $Shape = google.protobuf.Timestamp.$Properties;
        }
    }
}
