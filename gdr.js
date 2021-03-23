/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GDRs = (function() {

    /**
     * Properties of a GDRs.
     * @exports IGDRs
     * @interface IGDRs
     * @property {Object.<string,IGDR>|null} [GDRs] GDRs GDRs
     * @property {string|null} [configUuid] GDRs configUuid
     */

    /**
     * Constructs a new GDRs.
     * @exports GDRs
     * @classdesc Represents a GDRs.
     * @implements IGDRs
     * @constructor
     * @param {IGDRs=} [properties] Properties to set
     */
    function GDRs(properties) {
        this.GDRs = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GDRs GDRs.
     * @member {Object.<string,IGDR>} GDRs
     * @memberof GDRs
     * @instance
     */
    GDRs.prototype.GDRs = $util.emptyObject;

    /**
     * GDRs configUuid.
     * @member {string} configUuid
     * @memberof GDRs
     * @instance
     */
    GDRs.prototype.configUuid = "";

    /**
     * Creates a new GDRs instance using the specified properties.
     * @function create
     * @memberof GDRs
     * @static
     * @param {IGDRs=} [properties] Properties to set
     * @returns {GDRs} GDRs instance
     */
    GDRs.create = function create(properties) {
        return new GDRs(properties);
    };

    /**
     * Encodes the specified GDRs message. Does not implicitly {@link GDRs.verify|verify} messages.
     * @function encode
     * @memberof GDRs
     * @static
     * @param {IGDRs} message GDRs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GDRs.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.GDRs != null && Object.hasOwnProperty.call(message, "GDRs"))
            for (var keys = Object.keys(message.GDRs), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.GDR.encode(message.GDRs[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.configUuid != null && Object.hasOwnProperty.call(message, "configUuid"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.configUuid);
        return writer;
    };

    /**
     * Encodes the specified GDRs message, length delimited. Does not implicitly {@link GDRs.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GDRs
     * @static
     * @param {IGDRs} message GDRs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GDRs.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GDRs message from the specified reader or buffer.
     * @function decode
     * @memberof GDRs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GDRs} GDRs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GDRs.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GDRs(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (message.GDRs === $util.emptyObject)
                    message.GDRs = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = null;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = $root.GDR.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.GDRs[key] = value;
                break;
            case 2:
                message.configUuid = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GDRs message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GDRs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GDRs} GDRs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GDRs.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GDRs message.
     * @function verify
     * @memberof GDRs
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GDRs.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.GDRs != null && message.hasOwnProperty("GDRs")) {
            if (!$util.isObject(message.GDRs))
                return "GDRs: object expected";
            var key = Object.keys(message.GDRs);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.GDR.verify(message.GDRs[key[i]]);
                if (error)
                    return "GDRs." + error;
            }
        }
        if (message.configUuid != null && message.hasOwnProperty("configUuid"))
            if (!$util.isString(message.configUuid))
                return "configUuid: string expected";
        return null;
    };

    /**
     * Creates a GDRs message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GDRs
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GDRs} GDRs
     */
    GDRs.fromObject = function fromObject(object) {
        if (object instanceof $root.GDRs)
            return object;
        var message = new $root.GDRs();
        if (object.GDRs) {
            if (typeof object.GDRs !== "object")
                throw TypeError(".GDRs.GDRs: object expected");
            message.GDRs = {};
            for (var keys = Object.keys(object.GDRs), i = 0; i < keys.length; ++i) {
                if (typeof object.GDRs[keys[i]] !== "object")
                    throw TypeError(".GDRs.GDRs: object expected");
                message.GDRs[keys[i]] = $root.GDR.fromObject(object.GDRs[keys[i]]);
            }
        }
        if (object.configUuid != null)
            message.configUuid = String(object.configUuid);
        return message;
    };

    /**
     * Creates a plain object from a GDRs message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GDRs
     * @static
     * @param {GDRs} message GDRs
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GDRs.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.GDRs = {};
        if (options.defaults)
            object.configUuid = "";
        var keys2;
        if (message.GDRs && (keys2 = Object.keys(message.GDRs)).length) {
            object.GDRs = {};
            for (var j = 0; j < keys2.length; ++j)
                object.GDRs[keys2[j]] = $root.GDR.toObject(message.GDRs[keys2[j]], options);
        }
        if (message.configUuid != null && message.hasOwnProperty("configUuid"))
            object.configUuid = message.configUuid;
        return object;
    };

    /**
     * Converts this GDRs to JSON.
     * @function toJSON
     * @memberof GDRs
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GDRs.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GDRs;
})();

$root.GCRs = (function() {

    /**
     * Properties of a GCRs.
     * @exports IGCRs
     * @interface IGCRs
     * @property {Object.<string,IGCR>|null} [GCRs] GCRs GCRs
     * @property {string|null} [configUuid] GCRs configUuid
     */

    /**
     * Constructs a new GCRs.
     * @exports GCRs
     * @classdesc Represents a GCRs.
     * @implements IGCRs
     * @constructor
     * @param {IGCRs=} [properties] Properties to set
     */
    function GCRs(properties) {
        this.GCRs = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GCRs GCRs.
     * @member {Object.<string,IGCR>} GCRs
     * @memberof GCRs
     * @instance
     */
    GCRs.prototype.GCRs = $util.emptyObject;

    /**
     * GCRs configUuid.
     * @member {string} configUuid
     * @memberof GCRs
     * @instance
     */
    GCRs.prototype.configUuid = "";

    /**
     * Creates a new GCRs instance using the specified properties.
     * @function create
     * @memberof GCRs
     * @static
     * @param {IGCRs=} [properties] Properties to set
     * @returns {GCRs} GCRs instance
     */
    GCRs.create = function create(properties) {
        return new GCRs(properties);
    };

    /**
     * Encodes the specified GCRs message. Does not implicitly {@link GCRs.verify|verify} messages.
     * @function encode
     * @memberof GCRs
     * @static
     * @param {IGCRs} message GCRs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GCRs.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.GCRs != null && Object.hasOwnProperty.call(message, "GCRs"))
            for (var keys = Object.keys(message.GCRs), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.GCR.encode(message.GCRs[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        if (message.configUuid != null && Object.hasOwnProperty.call(message, "configUuid"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.configUuid);
        return writer;
    };

    /**
     * Encodes the specified GCRs message, length delimited. Does not implicitly {@link GCRs.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GCRs
     * @static
     * @param {IGCRs} message GCRs message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GCRs.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GCRs message from the specified reader or buffer.
     * @function decode
     * @memberof GCRs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GCRs} GCRs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GCRs.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GCRs(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (message.GCRs === $util.emptyObject)
                    message.GCRs = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = null;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = $root.GCR.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.GCRs[key] = value;
                break;
            case 2:
                message.configUuid = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GCRs message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GCRs
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GCRs} GCRs
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GCRs.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GCRs message.
     * @function verify
     * @memberof GCRs
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GCRs.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.GCRs != null && message.hasOwnProperty("GCRs")) {
            if (!$util.isObject(message.GCRs))
                return "GCRs: object expected";
            var key = Object.keys(message.GCRs);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.GCR.verify(message.GCRs[key[i]]);
                if (error)
                    return "GCRs." + error;
            }
        }
        if (message.configUuid != null && message.hasOwnProperty("configUuid"))
            if (!$util.isString(message.configUuid))
                return "configUuid: string expected";
        return null;
    };

    /**
     * Creates a GCRs message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GCRs
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GCRs} GCRs
     */
    GCRs.fromObject = function fromObject(object) {
        if (object instanceof $root.GCRs)
            return object;
        var message = new $root.GCRs();
        if (object.GCRs) {
            if (typeof object.GCRs !== "object")
                throw TypeError(".GCRs.GCRs: object expected");
            message.GCRs = {};
            for (var keys = Object.keys(object.GCRs), i = 0; i < keys.length; ++i) {
                if (typeof object.GCRs[keys[i]] !== "object")
                    throw TypeError(".GCRs.GCRs: object expected");
                message.GCRs[keys[i]] = $root.GCR.fromObject(object.GCRs[keys[i]]);
            }
        }
        if (object.configUuid != null)
            message.configUuid = String(object.configUuid);
        return message;
    };

    /**
     * Creates a plain object from a GCRs message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GCRs
     * @static
     * @param {GCRs} message GCRs
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GCRs.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults)
            object.GCRs = {};
        if (options.defaults)
            object.configUuid = "";
        var keys2;
        if (message.GCRs && (keys2 = Object.keys(message.GCRs)).length) {
            object.GCRs = {};
            for (var j = 0; j < keys2.length; ++j)
                object.GCRs[keys2[j]] = $root.GCR.toObject(message.GCRs[keys2[j]], options);
        }
        if (message.configUuid != null && message.hasOwnProperty("configUuid"))
            object.configUuid = message.configUuid;
        return object;
    };

    /**
     * Converts this GCRs to JSON.
     * @function toJSON
     * @memberof GCRs
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GCRs.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GCRs;
})();

$root.GDR = (function() {

    /**
     * Properties of a GDR.
     * @exports IGDR
     * @interface IGDR
     * @property {string|null} [id] GDR id
     * @property {Status|null} [status] GDR status
     * @property {google.protobuf.ITimestamp|null} [timestamp] GDR timestamp
     * @property {Object.<string,number>|null} [values] GDR values
     * @property {Object.<string,IFlexValue>|null} [flexValues] GDR flexValues
     */

    /**
     * Constructs a new GDR.
     * @exports GDR
     * @classdesc Represents a GDR.
     * @implements IGDR
     * @constructor
     * @param {IGDR=} [properties] Properties to set
     */
    function GDR(properties) {
        this.values = {};
        this.flexValues = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GDR id.
     * @member {string} id
     * @memberof GDR
     * @instance
     */
    GDR.prototype.id = "";

    /**
     * GDR status.
     * @member {Status} status
     * @memberof GDR
     * @instance
     */
    GDR.prototype.status = 0;

    /**
     * GDR timestamp.
     * @member {google.protobuf.ITimestamp|null|undefined} timestamp
     * @memberof GDR
     * @instance
     */
    GDR.prototype.timestamp = null;

    /**
     * GDR values.
     * @member {Object.<string,number>} values
     * @memberof GDR
     * @instance
     */
    GDR.prototype.values = $util.emptyObject;

    /**
     * GDR flexValues.
     * @member {Object.<string,IFlexValue>} flexValues
     * @memberof GDR
     * @instance
     */
    GDR.prototype.flexValues = $util.emptyObject;

    /**
     * Creates a new GDR instance using the specified properties.
     * @function create
     * @memberof GDR
     * @static
     * @param {IGDR=} [properties] Properties to set
     * @returns {GDR} GDR instance
     */
    GDR.create = function create(properties) {
        return new GDR(properties);
    };

    /**
     * Encodes the specified GDR message. Does not implicitly {@link GDR.verify|verify} messages.
     * @function encode
     * @memberof GDR
     * @static
     * @param {IGDR} message GDR message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GDR.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.status);
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.values != null && Object.hasOwnProperty.call(message, "values"))
            for (var keys = Object.keys(message.values), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 0 =*/8).uint64(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint64(message.values[keys[i]]).ldelim();
        if (message.flexValues != null && Object.hasOwnProperty.call(message, "flexValues"))
            for (var keys = Object.keys(message.flexValues), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.FlexValue.encode(message.flexValues[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        return writer;
    };

    /**
     * Encodes the specified GDR message, length delimited. Does not implicitly {@link GDR.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GDR
     * @static
     * @param {IGDR} message GDR message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GDR.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GDR message from the specified reader or buffer.
     * @function decode
     * @memberof GDR
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GDR} GDR
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GDR.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GDR(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.status = reader.int32();
                break;
            case 3:
                message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                break;
            case 4:
                if (message.values === $util.emptyObject)
                    message.values = {};
                var end2 = reader.uint32() + reader.pos;
                key = 0;
                value = 0;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.uint64();
                        break;
                    case 2:
                        value = reader.uint64();
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.values[typeof key === "object" ? $util.longToHash(key) : key] = value;
                break;
            case 5:
                if (message.flexValues === $util.emptyObject)
                    message.flexValues = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = null;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = $root.FlexValue.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.flexValues[key] = value;
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GDR message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GDR
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GDR} GDR
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GDR.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GDR message.
     * @function verify
     * @memberof GDR
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GDR.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.status != null && message.hasOwnProperty("status"))
            switch (message.status) {
            default:
                return "status: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
            var error = $root.google.protobuf.Timestamp.verify(message.timestamp);
            if (error)
                return "timestamp." + error;
        }
        if (message.values != null && message.hasOwnProperty("values")) {
            if (!$util.isObject(message.values))
                return "values: object expected";
            var key = Object.keys(message.values);
            for (var i = 0; i < key.length; ++i) {
                if (!$util.key64Re.test(key[i]))
                    return "values: integer|Long key{k:uint64} expected";
                if (!$util.isInteger(message.values[key[i]]) && !(message.values[key[i]] && $util.isInteger(message.values[key[i]].low) && $util.isInteger(message.values[key[i]].high)))
                    return "values: integer|Long{k:uint64} expected";
            }
        }
        if (message.flexValues != null && message.hasOwnProperty("flexValues")) {
            if (!$util.isObject(message.flexValues))
                return "flexValues: object expected";
            var key = Object.keys(message.flexValues);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.FlexValue.verify(message.flexValues[key[i]]);
                if (error)
                    return "flexValues." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GDR message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GDR
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GDR} GDR
     */
    GDR.fromObject = function fromObject(object) {
        if (object instanceof $root.GDR)
            return object;
        var message = new $root.GDR();
        if (object.id != null)
            message.id = String(object.id);
        switch (object.status) {
        case "STATUS_UNKNOWN":
        case 0:
            message.status = 0;
            break;
        case "STATUS_OK":
        case 1:
            message.status = 1;
            break;
        case "STATUS_WARNING":
        case 2:
            message.status = 2;
            break;
        case "STATUS_ERROR":
        case 3:
            message.status = 3;
            break;
        }
        if (object.timestamp != null) {
            if (typeof object.timestamp !== "object")
                throw TypeError(".GDR.timestamp: object expected");
            message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
        }
        if (object.values) {
            if (typeof object.values !== "object")
                throw TypeError(".GDR.values: object expected");
            message.values = {};
            for (var keys = Object.keys(object.values), i = 0; i < keys.length; ++i)
                if ($util.Long)
                    (message.values[keys[i]] = $util.Long.fromValue(object.values[keys[i]])).unsigned = true;
                else if (typeof object.values[keys[i]] === "string")
                    message.values[keys[i]] = parseInt(object.values[keys[i]], 10);
                else if (typeof object.values[keys[i]] === "number")
                    message.values[keys[i]] = object.values[keys[i]];
                else if (typeof object.values[keys[i]] === "object")
                    message.values[keys[i]] = new $util.LongBits(object.values[keys[i]].low >>> 0, object.values[keys[i]].high >>> 0).toNumber(true);
        }
        if (object.flexValues) {
            if (typeof object.flexValues !== "object")
                throw TypeError(".GDR.flexValues: object expected");
            message.flexValues = {};
            for (var keys = Object.keys(object.flexValues), i = 0; i < keys.length; ++i) {
                if (typeof object.flexValues[keys[i]] !== "object")
                    throw TypeError(".GDR.flexValues: object expected");
                message.flexValues[keys[i]] = $root.FlexValue.fromObject(object.flexValues[keys[i]]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GDR message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GDR
     * @static
     * @param {GDR} message GDR
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GDR.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.objects || options.defaults) {
            object.values = {};
            object.flexValues = {};
        }
        if (options.defaults) {
            object.id = "";
            object.status = options.enums === String ? "STATUS_UNKNOWN" : 0;
            object.timestamp = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = options.enums === String ? $root.Status[message.status] : message.status;
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
        var keys2;
        if (message.values && (keys2 = Object.keys(message.values)).length) {
            object.values = {};
            for (var j = 0; j < keys2.length; ++j)
                if (typeof message.values[keys2[j]] === "number")
                    object.values[keys2[j]] = options.longs === String ? String(message.values[keys2[j]]) : message.values[keys2[j]];
                else
                    object.values[keys2[j]] = options.longs === String ? $util.Long.prototype.toString.call(message.values[keys2[j]]) : options.longs === Number ? new $util.LongBits(message.values[keys2[j]].low >>> 0, message.values[keys2[j]].high >>> 0).toNumber(true) : message.values[keys2[j]];
        }
        if (message.flexValues && (keys2 = Object.keys(message.flexValues)).length) {
            object.flexValues = {};
            for (var j = 0; j < keys2.length; ++j)
                object.flexValues[keys2[j]] = $root.FlexValue.toObject(message.flexValues[keys2[j]], options);
        }
        return object;
    };

    /**
     * Converts this GDR to JSON.
     * @function toJSON
     * @memberof GDR
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GDR.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GDR;
})();

$root.GCR = (function() {

    /**
     * Properties of a GCR.
     * @exports IGCR
     * @interface IGCR
     * @property {string|null} [id] GCR id
     * @property {string|null} [label] GCR label
     * @property {Class|null} ["class"] GCR class
     * @property {Array.<string>|null} [sources] GCR sources
     * @property {Array.<number>|null} [codes] GCR codes
     * @property {DeviceType|null} [devicetype] GCR devicetype
     * @property {Object.<string,string>|null} [meta] GCR meta
     * @property {google.protobuf.ITimestamp|null} [timestamp] GCR timestamp
     * @property {Object.<string,IFlexDefinition>|null} [flexDefinitions] GCR flexDefinitions
     */

    /**
     * Constructs a new GCR.
     * @exports GCR
     * @classdesc Represents a GCR.
     * @implements IGCR
     * @constructor
     * @param {IGCR=} [properties] Properties to set
     */
    function GCR(properties) {
        this.sources = [];
        this.codes = [];
        this.meta = {};
        this.flexDefinitions = {};
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GCR id.
     * @member {string} id
     * @memberof GCR
     * @instance
     */
    GCR.prototype.id = "";

    /**
     * GCR label.
     * @member {string} label
     * @memberof GCR
     * @instance
     */
    GCR.prototype.label = "";

    /**
     * GCR class.
     * @member {Class} class
     * @memberof GCR
     * @instance
     */
    GCR.prototype["class"] = 0;

    /**
     * GCR sources.
     * @member {Array.<string>} sources
     * @memberof GCR
     * @instance
     */
    GCR.prototype.sources = $util.emptyArray;

    /**
     * GCR codes.
     * @member {Array.<number>} codes
     * @memberof GCR
     * @instance
     */
    GCR.prototype.codes = $util.emptyArray;

    /**
     * GCR devicetype.
     * @member {DeviceType} devicetype
     * @memberof GCR
     * @instance
     */
    GCR.prototype.devicetype = 0;

    /**
     * GCR meta.
     * @member {Object.<string,string>} meta
     * @memberof GCR
     * @instance
     */
    GCR.prototype.meta = $util.emptyObject;

    /**
     * GCR timestamp.
     * @member {google.protobuf.ITimestamp|null|undefined} timestamp
     * @memberof GCR
     * @instance
     */
    GCR.prototype.timestamp = null;

    /**
     * GCR flexDefinitions.
     * @member {Object.<string,IFlexDefinition>} flexDefinitions
     * @memberof GCR
     * @instance
     */
    GCR.prototype.flexDefinitions = $util.emptyObject;

    /**
     * Creates a new GCR instance using the specified properties.
     * @function create
     * @memberof GCR
     * @static
     * @param {IGCR=} [properties] Properties to set
     * @returns {GCR} GCR instance
     */
    GCR.create = function create(properties) {
        return new GCR(properties);
    };

    /**
     * Encodes the specified GCR message. Does not implicitly {@link GCR.verify|verify} messages.
     * @function encode
     * @memberof GCR
     * @static
     * @param {IGCR} message GCR message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GCR.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.label != null && Object.hasOwnProperty.call(message, "label"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.label);
        if (message["class"] != null && Object.hasOwnProperty.call(message, "class"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message["class"]);
        if (message.sources != null && message.sources.length)
            for (var i = 0; i < message.sources.length; ++i)
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.sources[i]);
        if (message.codes != null && message.codes.length) {
            writer.uint32(/* id 5, wireType 2 =*/42).fork();
            for (var i = 0; i < message.codes.length; ++i)
                writer.uint64(message.codes[i]);
            writer.ldelim();
        }
        if (message.devicetype != null && Object.hasOwnProperty.call(message, "devicetype"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.devicetype);
        if (message.meta != null && Object.hasOwnProperty.call(message, "meta"))
            for (var keys = Object.keys(message.meta), i = 0; i < keys.length; ++i)
                writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.meta[keys[i]]).ldelim();
        if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
            $root.google.protobuf.Timestamp.encode(message.timestamp, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.flexDefinitions != null && Object.hasOwnProperty.call(message, "flexDefinitions"))
            for (var keys = Object.keys(message.flexDefinitions), i = 0; i < keys.length; ++i) {
                writer.uint32(/* id 9, wireType 2 =*/74).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                $root.FlexDefinition.encode(message.flexDefinitions[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
            }
        return writer;
    };

    /**
     * Encodes the specified GCR message, length delimited. Does not implicitly {@link GCR.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GCR
     * @static
     * @param {IGCR} message GCR message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GCR.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GCR message from the specified reader or buffer.
     * @function decode
     * @memberof GCR
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GCR} GCR
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GCR.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GCR(), key, value;
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.string();
                break;
            case 2:
                message.label = reader.string();
                break;
            case 3:
                message["class"] = reader.int32();
                break;
            case 4:
                if (!(message.sources && message.sources.length))
                    message.sources = [];
                message.sources.push(reader.string());
                break;
            case 5:
                if (!(message.codes && message.codes.length))
                    message.codes = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.codes.push(reader.uint64());
                } else
                    message.codes.push(reader.uint64());
                break;
            case 6:
                message.devicetype = reader.int32();
                break;
            case 7:
                if (message.meta === $util.emptyObject)
                    message.meta = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = "";
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = reader.string();
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.meta[key] = value;
                break;
            case 8:
                message.timestamp = $root.google.protobuf.Timestamp.decode(reader, reader.uint32());
                break;
            case 9:
                if (message.flexDefinitions === $util.emptyObject)
                    message.flexDefinitions = {};
                var end2 = reader.uint32() + reader.pos;
                key = "";
                value = null;
                while (reader.pos < end2) {
                    var tag2 = reader.uint32();
                    switch (tag2 >>> 3) {
                    case 1:
                        key = reader.string();
                        break;
                    case 2:
                        value = $root.FlexDefinition.decode(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag2 & 7);
                        break;
                    }
                }
                message.flexDefinitions[key] = value;
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GCR message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GCR
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GCR} GCR
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GCR.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GCR message.
     * @function verify
     * @memberof GCR
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GCR.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.label != null && message.hasOwnProperty("label"))
            if (!$util.isString(message.label))
                return "label: string expected";
        if (message["class"] != null && message.hasOwnProperty("class"))
            switch (message["class"]) {
            default:
                return "class: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.sources != null && message.hasOwnProperty("sources")) {
            if (!Array.isArray(message.sources))
                return "sources: array expected";
            for (var i = 0; i < message.sources.length; ++i)
                if (!$util.isString(message.sources[i]))
                    return "sources: string[] expected";
        }
        if (message.codes != null && message.hasOwnProperty("codes")) {
            if (!Array.isArray(message.codes))
                return "codes: array expected";
            for (var i = 0; i < message.codes.length; ++i)
                if (!$util.isInteger(message.codes[i]) && !(message.codes[i] && $util.isInteger(message.codes[i].low) && $util.isInteger(message.codes[i].high)))
                    return "codes: integer|Long[] expected";
        }
        if (message.devicetype != null && message.hasOwnProperty("devicetype"))
            switch (message.devicetype) {
            default:
                return "devicetype: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
            case 29:
            case 30:
            case 31:
            case 32:
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
            case 43:
            case 44:
            case 45:
            case 46:
            case 47:
            case 48:
            case 49:
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                break;
            }
        if (message.meta != null && message.hasOwnProperty("meta")) {
            if (!$util.isObject(message.meta))
                return "meta: object expected";
            var key = Object.keys(message.meta);
            for (var i = 0; i < key.length; ++i)
                if (!$util.isString(message.meta[key[i]]))
                    return "meta: string{k:string} expected";
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
            var error = $root.google.protobuf.Timestamp.verify(message.timestamp);
            if (error)
                return "timestamp." + error;
        }
        if (message.flexDefinitions != null && message.hasOwnProperty("flexDefinitions")) {
            if (!$util.isObject(message.flexDefinitions))
                return "flexDefinitions: object expected";
            var key = Object.keys(message.flexDefinitions);
            for (var i = 0; i < key.length; ++i) {
                var error = $root.FlexDefinition.verify(message.flexDefinitions[key[i]]);
                if (error)
                    return "flexDefinitions." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GCR message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GCR
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GCR} GCR
     */
    GCR.fromObject = function fromObject(object) {
        if (object instanceof $root.GCR)
            return object;
        var message = new $root.GCR();
        if (object.id != null)
            message.id = String(object.id);
        if (object.label != null)
            message.label = String(object.label);
        switch (object["class"]) {
        case "CLASS_UNKNOWN":
        case 0:
            message["class"] = 0;
            break;
        case "CLASS_CONSUMER":
        case 1:
            message["class"] = 1;
            break;
        case "CLASS_PRODUCER":
        case 2:
            message["class"] = 2;
            break;
        case "CLASS_HYBRID":
        case 3:
            message["class"] = 3;
            break;
        }
        if (object.sources) {
            if (!Array.isArray(object.sources))
                throw TypeError(".GCR.sources: array expected");
            message.sources = [];
            for (var i = 0; i < object.sources.length; ++i)
                message.sources[i] = String(object.sources[i]);
        }
        if (object.codes) {
            if (!Array.isArray(object.codes))
                throw TypeError(".GCR.codes: array expected");
            message.codes = [];
            for (var i = 0; i < object.codes.length; ++i)
                if ($util.Long)
                    (message.codes[i] = $util.Long.fromValue(object.codes[i])).unsigned = true;
                else if (typeof object.codes[i] === "string")
                    message.codes[i] = parseInt(object.codes[i], 10);
                else if (typeof object.codes[i] === "number")
                    message.codes[i] = object.codes[i];
                else if (typeof object.codes[i] === "object")
                    message.codes[i] = new $util.LongBits(object.codes[i].low >>> 0, object.codes[i].high >>> 0).toNumber(true);
        }
        switch (object.devicetype) {
        case "DEVICE_TYPE_UNKNOWN":
        case 0:
            message.devicetype = 0;
            break;
        case "DEVICE_TYPE_PHOTOVOLTAIC_SYSTEM":
        case 1:
            message.devicetype = 1;
            break;
        case "DEVICE_TYPE_ELECTRIC_VEHICLE":
        case 2:
            message.devicetype = 2;
            break;
        case "DEVICE_TYPE_BATTERY":
        case 3:
            message.devicetype = 3;
            break;
        case "DEVICE_TYPE_OVEN":
        case 4:
            message.devicetype = 4;
            break;
        case "DEVICE_TYPE_FLOW_HEATER":
        case 5:
            message.devicetype = 5;
            break;
        case "DEVICE_TYPE_BOILER":
        case 6:
            message.devicetype = 6;
            break;
        case "DEVICE_TYPE_IMMERSION_HEATER":
        case 7:
            message.devicetype = 7;
            break;
        case "DEVICE_TYPE_STOVE":
        case 8:
            message.devicetype = 8;
            break;
        case "DEVICE_TYPE_COOLER":
        case 9:
            message.devicetype = 9;
            break;
        case "DEVICE_TYPE_VENTILATION":
        case 10:
            message.devicetype = 10;
            break;
        case "DEVICE_TYPE_DISHWASHER":
        case 11:
            message.devicetype = 11;
            break;
        case "DEVICE_TYPE_DRYER":
        case 12:
            message.devicetype = 12;
            break;
        case "DEVICE_TYPE_HEAT_PUMP":
        case 13:
            message.devicetype = 13;
            break;
        case "DEVICE_TYPE_WASHING_MACHINE":
        case 14:
            message.devicetype = 14;
            break;
        case "DEVICE_TYPE_INVERTER_ONEPHASE":
        case 15:
            message.devicetype = 15;
            break;
        case "DEVICE_TYPE_INVERTER_THREEPHASE":
        case 16:
            message.devicetype = 16;
            break;
        case "DEVICE_TYPE_CHP":
        case 17:
            message.devicetype = 17;
            break;
        case "DEVICE_TYPE_BUILDING_OFFICE":
        case 18:
            message.devicetype = 18;
            break;
        case "DEVICE_TYPE_BUILDING_COMMERCIAL":
        case 19:
            message.devicetype = 19;
            break;
        case "DEVICE_TYPE_BUILDING_FACTORY":
        case 20:
            message.devicetype = 20;
            break;
        case "DEVICE_TYPE_BUILDING_SINGLE_HOME":
        case 21:
            message.devicetype = 21;
            break;
        case "DEVICE_TYPE_BUILDING_HOTEL":
        case 22:
            message.devicetype = 22;
            break;
        case "DEVICE_TYPE_BUILDING_APARTMENTS":
        case 23:
            message.devicetype = 23;
            break;
        case "DEVICE_TYPE_BUILDING_PARKING":
        case 24:
            message.devicetype = 24;
            break;
        case "DEVICE_TYPE_BUILDING_RESIDENTIAL":
        case 25:
            message.devicetype = 25;
            break;
        case "DEVICE_TYPE_ROOM_BATH":
        case 26:
            message.devicetype = 26;
            break;
        case "DEVICE_TYPE_ROOM_GARAGE":
        case 27:
            message.devicetype = 27;
            break;
        case "DEVICE_TYPE_ROOM_BASEMENT":
        case 28:
            message.devicetype = 28;
            break;
        case "DEVICE_TYPE_ROOM_CHILD":
        case 29:
            message.devicetype = 29;
            break;
        case "DEVICE_TYPE_ROOM_KITCHEN":
        case 30:
            message.devicetype = 30;
            break;
        case "DEVICE_TYPE_ROOM_SAUNA":
        case 31:
            message.devicetype = 31;
            break;
        case "DEVICE_TYPE_ROOM_BED":
        case 32:
            message.devicetype = 32;
            break;
        case "DEVICE_TYPE_ROOM_LIVING":
        case 33:
            message.devicetype = 33;
            break;
        case "DEVICE_TYPE_ROOM_GENERIC":
        case 34:
            message.devicetype = 34;
            break;
        case "DEVICE_TYPE_CONTROLLABLE_LOAD":
        case 35:
            message.devicetype = 35;
            break;
        case "DEVICE_TYPE_LIGHTING":
        case 36:
            message.devicetype = 36;
            break;
        case "DEVICE_TYPE_OFFICES":
        case 37:
            message.devicetype = 37;
            break;
        case "DEVICE_TYPE_DOMESTIC_APPLIANCES":
        case 38:
            message.devicetype = 38;
            break;
        case "DEVICE_TYPE_HEATER_OF_HEAT_PUMP":
        case 39:
            message.devicetype = 39;
            break;
        case "DEVICE_TYPE_INDUSTRIAL_ENGINE":
        case 40:
            message.devicetype = 40;
            break;
        case "DEVICE_TYPE_AIR_CONDITIONING":
        case 41:
            message.devicetype = 41;
            break;
        case "DEVICE_TYPE_COMPRESSOR":
        case 42:
            message.devicetype = 42;
            break;
        case "DEVICE_TYPE_PC_DATA_CENTER":
        case 43:
            message.devicetype = 43;
            break;
        case "DEVICE_TYPE_FUSES_THREE":
        case 44:
            message.devicetype = 44;
            break;
        case "DEVICE_TYPE_FUSES_SIX":
        case 45:
            message.devicetype = 45;
            break;
        case "DEVICE_TYPE_FUSES_NINE":
        case 46:
            message.devicetype = 46;
            break;
        case "DEVICE_TYPE_FUSES_TWELVE":
        case 47:
            message.devicetype = 47;
            break;
        case "DEVICE_TYPE_COMPACTOR":
        case 48:
            message.devicetype = 48;
            break;
        case "DEVICE_TYPE_WHITE_GOODS":
        case 49:
            message.devicetype = 49;
            break;
        case "DEVICE_TYPE_COLD_STORAGE_ROOM":
        case 50:
            message.devicetype = 50;
            break;
        case "DEVICE_TYPE_GARDEN_SHED":
        case 51:
            message.devicetype = 51;
            break;
        case "DEVICE_TYPE_COOLING_COMBINATION":
        case 52:
            message.devicetype = 52;
            break;
        case "DEVICE_TYPE_FACILITIES":
        case 53:
            message.devicetype = 53;
            break;
        case "DEVICE_TYPE_FREEZER":
        case 54:
            message.devicetype = 54;
            break;
        case "DEVICE_TYPE_FRIDGE":
        case 55:
            message.devicetype = 55;
            break;
        case "DEVICE_TYPE_GRID_CONNECTION_POINT":
        case 56:
            message.devicetype = 56;
            break;
        case "DEVICE_TYPE_INVERTER_HYBRID":
        case 57:
            message.devicetype = 57;
            break;
        }
        if (object.meta) {
            if (typeof object.meta !== "object")
                throw TypeError(".GCR.meta: object expected");
            message.meta = {};
            for (var keys = Object.keys(object.meta), i = 0; i < keys.length; ++i)
                message.meta[keys[i]] = String(object.meta[keys[i]]);
        }
        if (object.timestamp != null) {
            if (typeof object.timestamp !== "object")
                throw TypeError(".GCR.timestamp: object expected");
            message.timestamp = $root.google.protobuf.Timestamp.fromObject(object.timestamp);
        }
        if (object.flexDefinitions) {
            if (typeof object.flexDefinitions !== "object")
                throw TypeError(".GCR.flexDefinitions: object expected");
            message.flexDefinitions = {};
            for (var keys = Object.keys(object.flexDefinitions), i = 0; i < keys.length; ++i) {
                if (typeof object.flexDefinitions[keys[i]] !== "object")
                    throw TypeError(".GCR.flexDefinitions: object expected");
                message.flexDefinitions[keys[i]] = $root.FlexDefinition.fromObject(object.flexDefinitions[keys[i]]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a GCR message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GCR
     * @static
     * @param {GCR} message GCR
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GCR.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.sources = [];
            object.codes = [];
        }
        if (options.objects || options.defaults) {
            object.meta = {};
            object.flexDefinitions = {};
        }
        if (options.defaults) {
            object.id = "";
            object.label = "";
            object["class"] = options.enums === String ? "CLASS_UNKNOWN" : 0;
            object.devicetype = options.enums === String ? "DEVICE_TYPE_UNKNOWN" : 0;
            object.timestamp = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.label != null && message.hasOwnProperty("label"))
            object.label = message.label;
        if (message["class"] != null && message.hasOwnProperty("class"))
            object["class"] = options.enums === String ? $root.Class[message["class"]] : message["class"];
        if (message.sources && message.sources.length) {
            object.sources = [];
            for (var j = 0; j < message.sources.length; ++j)
                object.sources[j] = message.sources[j];
        }
        if (message.codes && message.codes.length) {
            object.codes = [];
            for (var j = 0; j < message.codes.length; ++j)
                if (typeof message.codes[j] === "number")
                    object.codes[j] = options.longs === String ? String(message.codes[j]) : message.codes[j];
                else
                    object.codes[j] = options.longs === String ? $util.Long.prototype.toString.call(message.codes[j]) : options.longs === Number ? new $util.LongBits(message.codes[j].low >>> 0, message.codes[j].high >>> 0).toNumber(true) : message.codes[j];
        }
        if (message.devicetype != null && message.hasOwnProperty("devicetype"))
            object.devicetype = options.enums === String ? $root.DeviceType[message.devicetype] : message.devicetype;
        var keys2;
        if (message.meta && (keys2 = Object.keys(message.meta)).length) {
            object.meta = {};
            for (var j = 0; j < keys2.length; ++j)
                object.meta[keys2[j]] = message.meta[keys2[j]];
        }
        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
            object.timestamp = $root.google.protobuf.Timestamp.toObject(message.timestamp, options);
        if (message.flexDefinitions && (keys2 = Object.keys(message.flexDefinitions)).length) {
            object.flexDefinitions = {};
            for (var j = 0; j < keys2.length; ++j)
                object.flexDefinitions[keys2[j]] = $root.FlexDefinition.toObject(message.flexDefinitions[keys2[j]], options);
        }
        return object;
    };

    /**
     * Converts this GCR to JSON.
     * @function toJSON
     * @memberof GCR
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GCR.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GCR;
})();

$root.FlexValue = (function() {

    /**
     * Properties of a FlexValue.
     * @exports IFlexValue
     * @interface IFlexValue
     * @property {number|null} [intValue] FlexValue intValue
     * @property {string|null} [stringValue] FlexValue stringValue
     */

    /**
     * Constructs a new FlexValue.
     * @exports FlexValue
     * @classdesc Represents a FlexValue.
     * @implements IFlexValue
     * @constructor
     * @param {IFlexValue=} [properties] Properties to set
     */
    function FlexValue(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FlexValue intValue.
     * @member {number} intValue
     * @memberof FlexValue
     * @instance
     */
    FlexValue.prototype.intValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * FlexValue stringValue.
     * @member {string} stringValue
     * @memberof FlexValue
     * @instance
     */
    FlexValue.prototype.stringValue = "";

    /**
     * Creates a new FlexValue instance using the specified properties.
     * @function create
     * @memberof FlexValue
     * @static
     * @param {IFlexValue=} [properties] Properties to set
     * @returns {FlexValue} FlexValue instance
     */
    FlexValue.create = function create(properties) {
        return new FlexValue(properties);
    };

    /**
     * Encodes the specified FlexValue message. Does not implicitly {@link FlexValue.verify|verify} messages.
     * @function encode
     * @memberof FlexValue
     * @static
     * @param {IFlexValue} message FlexValue message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FlexValue.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.intValue != null && Object.hasOwnProperty.call(message, "intValue"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.intValue);
        if (message.stringValue != null && Object.hasOwnProperty.call(message, "stringValue"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.stringValue);
        return writer;
    };

    /**
     * Encodes the specified FlexValue message, length delimited. Does not implicitly {@link FlexValue.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FlexValue
     * @static
     * @param {IFlexValue} message FlexValue message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FlexValue.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FlexValue message from the specified reader or buffer.
     * @function decode
     * @memberof FlexValue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FlexValue} FlexValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FlexValue.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FlexValue();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.intValue = reader.int64();
                break;
            case 2:
                message.stringValue = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FlexValue message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FlexValue
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FlexValue} FlexValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FlexValue.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FlexValue message.
     * @function verify
     * @memberof FlexValue
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FlexValue.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.intValue != null && message.hasOwnProperty("intValue"))
            if (!$util.isInteger(message.intValue) && !(message.intValue && $util.isInteger(message.intValue.low) && $util.isInteger(message.intValue.high)))
                return "intValue: integer|Long expected";
        if (message.stringValue != null && message.hasOwnProperty("stringValue"))
            if (!$util.isString(message.stringValue))
                return "stringValue: string expected";
        return null;
    };

    /**
     * Creates a FlexValue message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FlexValue
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FlexValue} FlexValue
     */
    FlexValue.fromObject = function fromObject(object) {
        if (object instanceof $root.FlexValue)
            return object;
        var message = new $root.FlexValue();
        if (object.intValue != null)
            if ($util.Long)
                (message.intValue = $util.Long.fromValue(object.intValue)).unsigned = false;
            else if (typeof object.intValue === "string")
                message.intValue = parseInt(object.intValue, 10);
            else if (typeof object.intValue === "number")
                message.intValue = object.intValue;
            else if (typeof object.intValue === "object")
                message.intValue = new $util.LongBits(object.intValue.low >>> 0, object.intValue.high >>> 0).toNumber();
        if (object.stringValue != null)
            message.stringValue = String(object.stringValue);
        return message;
    };

    /**
     * Creates a plain object from a FlexValue message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FlexValue
     * @static
     * @param {FlexValue} message FlexValue
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FlexValue.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.intValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.intValue = options.longs === String ? "0" : 0;
            object.stringValue = "";
        }
        if (message.intValue != null && message.hasOwnProperty("intValue"))
            if (typeof message.intValue === "number")
                object.intValue = options.longs === String ? String(message.intValue) : message.intValue;
            else
                object.intValue = options.longs === String ? $util.Long.prototype.toString.call(message.intValue) : options.longs === Number ? new $util.LongBits(message.intValue.low >>> 0, message.intValue.high >>> 0).toNumber() : message.intValue;
        if (message.stringValue != null && message.hasOwnProperty("stringValue"))
            object.stringValue = message.stringValue;
        return object;
    };

    /**
     * Converts this FlexValue to JSON.
     * @function toJSON
     * @memberof FlexValue
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FlexValue.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FlexValue;
})();

/**
 * FlexValueType enum.
 * @exports FlexValueType
 * @enum {string}
 * @property {number} FLEX_VALUE_TYPE_INTEGER=0 FLEX_VALUE_TYPE_INTEGER value
 * @property {number} FLEX_VALUE_TYPE_STRING=1 FLEX_VALUE_TYPE_STRING value
 */
$root.FlexValueType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "FLEX_VALUE_TYPE_INTEGER"] = 0;
    values[valuesById[1] = "FLEX_VALUE_TYPE_STRING"] = 1;
    return values;
})();

$root.FlexDefinition = (function() {

    /**
     * Properties of a FlexDefinition.
     * @exports IFlexDefinition
     * @interface IFlexDefinition
     * @property {string|null} [label] FlexDefinition label
     * @property {FlexValueType|null} [type] FlexDefinition type
     * @property {Unit|null} [unit] FlexDefinition unit
     * @property {number|null} [decimalpower] FlexDefinition decimalpower
     */

    /**
     * Constructs a new FlexDefinition.
     * @exports FlexDefinition
     * @classdesc Represents a FlexDefinition.
     * @implements IFlexDefinition
     * @constructor
     * @param {IFlexDefinition=} [properties] Properties to set
     */
    function FlexDefinition(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FlexDefinition label.
     * @member {string} label
     * @memberof FlexDefinition
     * @instance
     */
    FlexDefinition.prototype.label = "";

    /**
     * FlexDefinition type.
     * @member {FlexValueType} type
     * @memberof FlexDefinition
     * @instance
     */
    FlexDefinition.prototype.type = 0;

    /**
     * FlexDefinition unit.
     * @member {Unit} unit
     * @memberof FlexDefinition
     * @instance
     */
    FlexDefinition.prototype.unit = 0;

    /**
     * FlexDefinition decimalpower.
     * @member {number} decimalpower
     * @memberof FlexDefinition
     * @instance
     */
    FlexDefinition.prototype.decimalpower = 0;

    /**
     * Creates a new FlexDefinition instance using the specified properties.
     * @function create
     * @memberof FlexDefinition
     * @static
     * @param {IFlexDefinition=} [properties] Properties to set
     * @returns {FlexDefinition} FlexDefinition instance
     */
    FlexDefinition.create = function create(properties) {
        return new FlexDefinition(properties);
    };

    /**
     * Encodes the specified FlexDefinition message. Does not implicitly {@link FlexDefinition.verify|verify} messages.
     * @function encode
     * @memberof FlexDefinition
     * @static
     * @param {IFlexDefinition} message FlexDefinition message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FlexDefinition.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.label != null && Object.hasOwnProperty.call(message, "label"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.label);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        if (message.unit != null && Object.hasOwnProperty.call(message, "unit"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.unit);
        if (message.decimalpower != null && Object.hasOwnProperty.call(message, "decimalpower"))
            writer.uint32(/* id 4, wireType 0 =*/32).sint32(message.decimalpower);
        return writer;
    };

    /**
     * Encodes the specified FlexDefinition message, length delimited. Does not implicitly {@link FlexDefinition.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FlexDefinition
     * @static
     * @param {IFlexDefinition} message FlexDefinition message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FlexDefinition.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FlexDefinition message from the specified reader or buffer.
     * @function decode
     * @memberof FlexDefinition
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FlexDefinition} FlexDefinition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FlexDefinition.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.FlexDefinition();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.label = reader.string();
                break;
            case 2:
                message.type = reader.int32();
                break;
            case 3:
                message.unit = reader.int32();
                break;
            case 4:
                message.decimalpower = reader.sint32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FlexDefinition message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FlexDefinition
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FlexDefinition} FlexDefinition
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FlexDefinition.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FlexDefinition message.
     * @function verify
     * @memberof FlexDefinition
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FlexDefinition.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.label != null && message.hasOwnProperty("label"))
            if (!$util.isString(message.label))
                return "label: string expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.unit != null && message.hasOwnProperty("unit"))
            switch (message.unit) {
            default:
                return "unit: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
                break;
            }
        if (message.decimalpower != null && message.hasOwnProperty("decimalpower"))
            if (!$util.isInteger(message.decimalpower))
                return "decimalpower: integer expected";
        return null;
    };

    /**
     * Creates a FlexDefinition message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FlexDefinition
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FlexDefinition} FlexDefinition
     */
    FlexDefinition.fromObject = function fromObject(object) {
        if (object instanceof $root.FlexDefinition)
            return object;
        var message = new $root.FlexDefinition();
        if (object.label != null)
            message.label = String(object.label);
        switch (object.type) {
        case "FLEX_VALUE_TYPE_INTEGER":
        case 0:
            message.type = 0;
            break;
        case "FLEX_VALUE_TYPE_STRING":
        case 1:
            message.type = 1;
            break;
        }
        switch (object.unit) {
        case "UNIT_UNKNOWN":
        case 0:
            message.unit = 0;
            break;
        case "UNIT_AMPERE":
        case 1:
            message.unit = 1;
            break;
        case "UNIT_VOLT":
        case 2:
            message.unit = 2;
            break;
        case "UNIT_WATT":
        case 3:
            message.unit = 3;
            break;
        case "UNIT_HERTZ":
        case 4:
            message.unit = 4;
            break;
        case "UNIT_VOLT_AMPERE":
        case 5:
            message.unit = 5;
            break;
        case "UNIT_VOLT_AMPERE_REACTIVE":
        case 6:
            message.unit = 6;
            break;
        case "UNIT_WATT_HOUR":
        case 7:
            message.unit = 7;
            break;
        case "UNIT_KILO_WATT_HOUR":
        case 8:
            message.unit = 8;
            break;
        case "UNIT_SECOND":
        case 9:
            message.unit = 9;
            break;
        case "UNIT_MINUTE":
        case 10:
            message.unit = 10;
            break;
        case "UNIT_HOUR":
        case 11:
            message.unit = 11;
            break;
        case "UNIT_DAY":
        case 12:
            message.unit = 12;
            break;
        case "UNIT_WEEK":
        case 13:
            message.unit = 13;
            break;
        case "UNIT_MONTH":
        case 14:
            message.unit = 14;
            break;
        case "UNIT_YEAR":
        case 15:
            message.unit = 15;
            break;
        case "UNIT_DEGREE_CELSIUS":
        case 16:
            message.unit = 16;
            break;
        case "UNIT_KELVIN":
        case 17:
            message.unit = 17;
            break;
        case "UNIT_DEGREE_FAHRENHEIT":
        case 18:
            message.unit = 18;
            break;
        }
        if (object.decimalpower != null)
            message.decimalpower = object.decimalpower | 0;
        return message;
    };

    /**
     * Creates a plain object from a FlexDefinition message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FlexDefinition
     * @static
     * @param {FlexDefinition} message FlexDefinition
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FlexDefinition.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.label = "";
            object.type = options.enums === String ? "FLEX_VALUE_TYPE_INTEGER" : 0;
            object.unit = options.enums === String ? "UNIT_UNKNOWN" : 0;
            object.decimalpower = 0;
        }
        if (message.label != null && message.hasOwnProperty("label"))
            object.label = message.label;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.FlexValueType[message.type] : message.type;
        if (message.unit != null && message.hasOwnProperty("unit"))
            object.unit = options.enums === String ? $root.Unit[message.unit] : message.unit;
        if (message.decimalpower != null && message.hasOwnProperty("decimalpower"))
            object.decimalpower = message.decimalpower;
        return object;
    };

    /**
     * Converts this FlexDefinition to JSON.
     * @function toJSON
     * @memberof FlexDefinition
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FlexDefinition.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return FlexDefinition;
})();

/**
 * Unit enum.
 * @exports Unit
 * @enum {string}
 * @property {number} UNIT_UNKNOWN=0 UNIT_UNKNOWN value
 * @property {number} UNIT_AMPERE=1 UNIT_AMPERE value
 * @property {number} UNIT_VOLT=2 UNIT_VOLT value
 * @property {number} UNIT_WATT=3 UNIT_WATT value
 * @property {number} UNIT_HERTZ=4 UNIT_HERTZ value
 * @property {number} UNIT_VOLT_AMPERE=5 UNIT_VOLT_AMPERE value
 * @property {number} UNIT_VOLT_AMPERE_REACTIVE=6 UNIT_VOLT_AMPERE_REACTIVE value
 * @property {number} UNIT_WATT_HOUR=7 UNIT_WATT_HOUR value
 * @property {number} UNIT_KILO_WATT_HOUR=8 UNIT_KILO_WATT_HOUR value
 * @property {number} UNIT_SECOND=9 UNIT_SECOND value
 * @property {number} UNIT_MINUTE=10 UNIT_MINUTE value
 * @property {number} UNIT_HOUR=11 UNIT_HOUR value
 * @property {number} UNIT_DAY=12 UNIT_DAY value
 * @property {number} UNIT_WEEK=13 UNIT_WEEK value
 * @property {number} UNIT_MONTH=14 UNIT_MONTH value
 * @property {number} UNIT_YEAR=15 UNIT_YEAR value
 * @property {number} UNIT_DEGREE_CELSIUS=16 UNIT_DEGREE_CELSIUS value
 * @property {number} UNIT_KELVIN=17 UNIT_KELVIN value
 * @property {number} UNIT_DEGREE_FAHRENHEIT=18 UNIT_DEGREE_FAHRENHEIT value
 */
$root.Unit = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "UNIT_UNKNOWN"] = 0;
    values[valuesById[1] = "UNIT_AMPERE"] = 1;
    values[valuesById[2] = "UNIT_VOLT"] = 2;
    values[valuesById[3] = "UNIT_WATT"] = 3;
    values[valuesById[4] = "UNIT_HERTZ"] = 4;
    values[valuesById[5] = "UNIT_VOLT_AMPERE"] = 5;
    values[valuesById[6] = "UNIT_VOLT_AMPERE_REACTIVE"] = 6;
    values[valuesById[7] = "UNIT_WATT_HOUR"] = 7;
    values[valuesById[8] = "UNIT_KILO_WATT_HOUR"] = 8;
    values[valuesById[9] = "UNIT_SECOND"] = 9;
    values[valuesById[10] = "UNIT_MINUTE"] = 10;
    values[valuesById[11] = "UNIT_HOUR"] = 11;
    values[valuesById[12] = "UNIT_DAY"] = 12;
    values[valuesById[13] = "UNIT_WEEK"] = 13;
    values[valuesById[14] = "UNIT_MONTH"] = 14;
    values[valuesById[15] = "UNIT_YEAR"] = 15;
    values[valuesById[16] = "UNIT_DEGREE_CELSIUS"] = 16;
    values[valuesById[17] = "UNIT_KELVIN"] = 17;
    values[valuesById[18] = "UNIT_DEGREE_FAHRENHEIT"] = 18;
    return values;
})();

/**
 * DeviceType enum.
 * @exports DeviceType
 * @enum {string}
 * @property {number} DEVICE_TYPE_UNKNOWN=0 DEVICE_TYPE_UNKNOWN value
 * @property {number} DEVICE_TYPE_PHOTOVOLTAIC_SYSTEM=1 DEVICE_TYPE_PHOTOVOLTAIC_SYSTEM value
 * @property {number} DEVICE_TYPE_ELECTRIC_VEHICLE=2 DEVICE_TYPE_ELECTRIC_VEHICLE value
 * @property {number} DEVICE_TYPE_BATTERY=3 DEVICE_TYPE_BATTERY value
 * @property {number} DEVICE_TYPE_OVEN=4 DEVICE_TYPE_OVEN value
 * @property {number} DEVICE_TYPE_FLOW_HEATER=5 DEVICE_TYPE_FLOW_HEATER value
 * @property {number} DEVICE_TYPE_BOILER=6 DEVICE_TYPE_BOILER value
 * @property {number} DEVICE_TYPE_IMMERSION_HEATER=7 DEVICE_TYPE_IMMERSION_HEATER value
 * @property {number} DEVICE_TYPE_STOVE=8 DEVICE_TYPE_STOVE value
 * @property {number} DEVICE_TYPE_COOLER=9 DEVICE_TYPE_COOLER value
 * @property {number} DEVICE_TYPE_VENTILATION=10 DEVICE_TYPE_VENTILATION value
 * @property {number} DEVICE_TYPE_DISHWASHER=11 DEVICE_TYPE_DISHWASHER value
 * @property {number} DEVICE_TYPE_DRYER=12 DEVICE_TYPE_DRYER value
 * @property {number} DEVICE_TYPE_HEAT_PUMP=13 DEVICE_TYPE_HEAT_PUMP value
 * @property {number} DEVICE_TYPE_WASHING_MACHINE=14 DEVICE_TYPE_WASHING_MACHINE value
 * @property {number} DEVICE_TYPE_INVERTER_ONEPHASE=15 DEVICE_TYPE_INVERTER_ONEPHASE value
 * @property {number} DEVICE_TYPE_INVERTER_THREEPHASE=16 DEVICE_TYPE_INVERTER_THREEPHASE value
 * @property {number} DEVICE_TYPE_CHP=17 DEVICE_TYPE_CHP value
 * @property {number} DEVICE_TYPE_BUILDING_OFFICE=18 DEVICE_TYPE_BUILDING_OFFICE value
 * @property {number} DEVICE_TYPE_BUILDING_COMMERCIAL=19 DEVICE_TYPE_BUILDING_COMMERCIAL value
 * @property {number} DEVICE_TYPE_BUILDING_FACTORY=20 DEVICE_TYPE_BUILDING_FACTORY value
 * @property {number} DEVICE_TYPE_BUILDING_SINGLE_HOME=21 DEVICE_TYPE_BUILDING_SINGLE_HOME value
 * @property {number} DEVICE_TYPE_BUILDING_HOTEL=22 DEVICE_TYPE_BUILDING_HOTEL value
 * @property {number} DEVICE_TYPE_BUILDING_APARTMENTS=23 DEVICE_TYPE_BUILDING_APARTMENTS value
 * @property {number} DEVICE_TYPE_BUILDING_PARKING=24 DEVICE_TYPE_BUILDING_PARKING value
 * @property {number} DEVICE_TYPE_BUILDING_RESIDENTIAL=25 DEVICE_TYPE_BUILDING_RESIDENTIAL value
 * @property {number} DEVICE_TYPE_ROOM_BATH=26 DEVICE_TYPE_ROOM_BATH value
 * @property {number} DEVICE_TYPE_ROOM_GARAGE=27 DEVICE_TYPE_ROOM_GARAGE value
 * @property {number} DEVICE_TYPE_ROOM_BASEMENT=28 DEVICE_TYPE_ROOM_BASEMENT value
 * @property {number} DEVICE_TYPE_ROOM_CHILD=29 DEVICE_TYPE_ROOM_CHILD value
 * @property {number} DEVICE_TYPE_ROOM_KITCHEN=30 DEVICE_TYPE_ROOM_KITCHEN value
 * @property {number} DEVICE_TYPE_ROOM_SAUNA=31 DEVICE_TYPE_ROOM_SAUNA value
 * @property {number} DEVICE_TYPE_ROOM_BED=32 DEVICE_TYPE_ROOM_BED value
 * @property {number} DEVICE_TYPE_ROOM_LIVING=33 DEVICE_TYPE_ROOM_LIVING value
 * @property {number} DEVICE_TYPE_ROOM_GENERIC=34 DEVICE_TYPE_ROOM_GENERIC value
 * @property {number} DEVICE_TYPE_CONTROLLABLE_LOAD=35 DEVICE_TYPE_CONTROLLABLE_LOAD value
 * @property {number} DEVICE_TYPE_LIGHTING=36 DEVICE_TYPE_LIGHTING value
 * @property {number} DEVICE_TYPE_OFFICES=37 DEVICE_TYPE_OFFICES value
 * @property {number} DEVICE_TYPE_DOMESTIC_APPLIANCES=38 DEVICE_TYPE_DOMESTIC_APPLIANCES value
 * @property {number} DEVICE_TYPE_HEATER_OF_HEAT_PUMP=39 DEVICE_TYPE_HEATER_OF_HEAT_PUMP value
 * @property {number} DEVICE_TYPE_INDUSTRIAL_ENGINE=40 DEVICE_TYPE_INDUSTRIAL_ENGINE value
 * @property {number} DEVICE_TYPE_AIR_CONDITIONING=41 DEVICE_TYPE_AIR_CONDITIONING value
 * @property {number} DEVICE_TYPE_COMPRESSOR=42 DEVICE_TYPE_COMPRESSOR value
 * @property {number} DEVICE_TYPE_PC_DATA_CENTER=43 DEVICE_TYPE_PC_DATA_CENTER value
 * @property {number} DEVICE_TYPE_FUSES_THREE=44 DEVICE_TYPE_FUSES_THREE value
 * @property {number} DEVICE_TYPE_FUSES_SIX=45 DEVICE_TYPE_FUSES_SIX value
 * @property {number} DEVICE_TYPE_FUSES_NINE=46 DEVICE_TYPE_FUSES_NINE value
 * @property {number} DEVICE_TYPE_FUSES_TWELVE=47 DEVICE_TYPE_FUSES_TWELVE value
 * @property {number} DEVICE_TYPE_COMPACTOR=48 DEVICE_TYPE_COMPACTOR value
 * @property {number} DEVICE_TYPE_WHITE_GOODS=49 DEVICE_TYPE_WHITE_GOODS value
 * @property {number} DEVICE_TYPE_COLD_STORAGE_ROOM=50 DEVICE_TYPE_COLD_STORAGE_ROOM value
 * @property {number} DEVICE_TYPE_GARDEN_SHED=51 DEVICE_TYPE_GARDEN_SHED value
 * @property {number} DEVICE_TYPE_COOLING_COMBINATION=52 DEVICE_TYPE_COOLING_COMBINATION value
 * @property {number} DEVICE_TYPE_FACILITIES=53 DEVICE_TYPE_FACILITIES value
 * @property {number} DEVICE_TYPE_FREEZER=54 DEVICE_TYPE_FREEZER value
 * @property {number} DEVICE_TYPE_FRIDGE=55 DEVICE_TYPE_FRIDGE value
 * @property {number} DEVICE_TYPE_GRID_CONNECTION_POINT=56 DEVICE_TYPE_GRID_CONNECTION_POINT value
 * @property {number} DEVICE_TYPE_INVERTER_HYBRID=57 DEVICE_TYPE_INVERTER_HYBRID value
 */
$root.DeviceType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "DEVICE_TYPE_UNKNOWN"] = 0;
    values[valuesById[1] = "DEVICE_TYPE_PHOTOVOLTAIC_SYSTEM"] = 1;
    values[valuesById[2] = "DEVICE_TYPE_ELECTRIC_VEHICLE"] = 2;
    values[valuesById[3] = "DEVICE_TYPE_BATTERY"] = 3;
    values[valuesById[4] = "DEVICE_TYPE_OVEN"] = 4;
    values[valuesById[5] = "DEVICE_TYPE_FLOW_HEATER"] = 5;
    values[valuesById[6] = "DEVICE_TYPE_BOILER"] = 6;
    values[valuesById[7] = "DEVICE_TYPE_IMMERSION_HEATER"] = 7;
    values[valuesById[8] = "DEVICE_TYPE_STOVE"] = 8;
    values[valuesById[9] = "DEVICE_TYPE_COOLER"] = 9;
    values[valuesById[10] = "DEVICE_TYPE_VENTILATION"] = 10;
    values[valuesById[11] = "DEVICE_TYPE_DISHWASHER"] = 11;
    values[valuesById[12] = "DEVICE_TYPE_DRYER"] = 12;
    values[valuesById[13] = "DEVICE_TYPE_HEAT_PUMP"] = 13;
    values[valuesById[14] = "DEVICE_TYPE_WASHING_MACHINE"] = 14;
    values[valuesById[15] = "DEVICE_TYPE_INVERTER_ONEPHASE"] = 15;
    values[valuesById[16] = "DEVICE_TYPE_INVERTER_THREEPHASE"] = 16;
    values[valuesById[17] = "DEVICE_TYPE_CHP"] = 17;
    values[valuesById[18] = "DEVICE_TYPE_BUILDING_OFFICE"] = 18;
    values[valuesById[19] = "DEVICE_TYPE_BUILDING_COMMERCIAL"] = 19;
    values[valuesById[20] = "DEVICE_TYPE_BUILDING_FACTORY"] = 20;
    values[valuesById[21] = "DEVICE_TYPE_BUILDING_SINGLE_HOME"] = 21;
    values[valuesById[22] = "DEVICE_TYPE_BUILDING_HOTEL"] = 22;
    values[valuesById[23] = "DEVICE_TYPE_BUILDING_APARTMENTS"] = 23;
    values[valuesById[24] = "DEVICE_TYPE_BUILDING_PARKING"] = 24;
    values[valuesById[25] = "DEVICE_TYPE_BUILDING_RESIDENTIAL"] = 25;
    values[valuesById[26] = "DEVICE_TYPE_ROOM_BATH"] = 26;
    values[valuesById[27] = "DEVICE_TYPE_ROOM_GARAGE"] = 27;
    values[valuesById[28] = "DEVICE_TYPE_ROOM_BASEMENT"] = 28;
    values[valuesById[29] = "DEVICE_TYPE_ROOM_CHILD"] = 29;
    values[valuesById[30] = "DEVICE_TYPE_ROOM_KITCHEN"] = 30;
    values[valuesById[31] = "DEVICE_TYPE_ROOM_SAUNA"] = 31;
    values[valuesById[32] = "DEVICE_TYPE_ROOM_BED"] = 32;
    values[valuesById[33] = "DEVICE_TYPE_ROOM_LIVING"] = 33;
    values[valuesById[34] = "DEVICE_TYPE_ROOM_GENERIC"] = 34;
    values[valuesById[35] = "DEVICE_TYPE_CONTROLLABLE_LOAD"] = 35;
    values[valuesById[36] = "DEVICE_TYPE_LIGHTING"] = 36;
    values[valuesById[37] = "DEVICE_TYPE_OFFICES"] = 37;
    values[valuesById[38] = "DEVICE_TYPE_DOMESTIC_APPLIANCES"] = 38;
    values[valuesById[39] = "DEVICE_TYPE_HEATER_OF_HEAT_PUMP"] = 39;
    values[valuesById[40] = "DEVICE_TYPE_INDUSTRIAL_ENGINE"] = 40;
    values[valuesById[41] = "DEVICE_TYPE_AIR_CONDITIONING"] = 41;
    values[valuesById[42] = "DEVICE_TYPE_COMPRESSOR"] = 42;
    values[valuesById[43] = "DEVICE_TYPE_PC_DATA_CENTER"] = 43;
    values[valuesById[44] = "DEVICE_TYPE_FUSES_THREE"] = 44;
    values[valuesById[45] = "DEVICE_TYPE_FUSES_SIX"] = 45;
    values[valuesById[46] = "DEVICE_TYPE_FUSES_NINE"] = 46;
    values[valuesById[47] = "DEVICE_TYPE_FUSES_TWELVE"] = 47;
    values[valuesById[48] = "DEVICE_TYPE_COMPACTOR"] = 48;
    values[valuesById[49] = "DEVICE_TYPE_WHITE_GOODS"] = 49;
    values[valuesById[50] = "DEVICE_TYPE_COLD_STORAGE_ROOM"] = 50;
    values[valuesById[51] = "DEVICE_TYPE_GARDEN_SHED"] = 51;
    values[valuesById[52] = "DEVICE_TYPE_COOLING_COMBINATION"] = 52;
    values[valuesById[53] = "DEVICE_TYPE_FACILITIES"] = 53;
    values[valuesById[54] = "DEVICE_TYPE_FREEZER"] = 54;
    values[valuesById[55] = "DEVICE_TYPE_FRIDGE"] = 55;
    values[valuesById[56] = "DEVICE_TYPE_GRID_CONNECTION_POINT"] = 56;
    values[valuesById[57] = "DEVICE_TYPE_INVERTER_HYBRID"] = 57;
    return values;
})();

/**
 * Status enum.
 * @exports Status
 * @enum {string}
 * @property {number} STATUS_UNKNOWN=0 STATUS_UNKNOWN value
 * @property {number} STATUS_OK=1 STATUS_OK value
 * @property {number} STATUS_WARNING=2 STATUS_WARNING value
 * @property {number} STATUS_ERROR=3 STATUS_ERROR value
 */
$root.Status = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "STATUS_UNKNOWN"] = 0;
    values[valuesById[1] = "STATUS_OK"] = 1;
    values[valuesById[2] = "STATUS_WARNING"] = 2;
    values[valuesById[3] = "STATUS_ERROR"] = 3;
    return values;
})();

/**
 * Class enum.
 * @exports Class
 * @enum {string}
 * @property {number} CLASS_UNKNOWN=0 CLASS_UNKNOWN value
 * @property {number} CLASS_CONSUMER=1 CLASS_CONSUMER value
 * @property {number} CLASS_PRODUCER=2 CLASS_PRODUCER value
 * @property {number} CLASS_HYBRID=3 CLASS_HYBRID value
 */
$root.Class = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "CLASS_UNKNOWN"] = 0;
    values[valuesById[1] = "CLASS_CONSUMER"] = 1;
    values[valuesById[2] = "CLASS_PRODUCER"] = 2;
    values[valuesById[3] = "CLASS_HYBRID"] = 3;
    return values;
})();

$root.google = (function() {

    /**
     * Namespace google.
     * @exports google
     * @namespace
     */
    var google = {};

    google.protobuf = (function() {

        /**
         * Namespace protobuf.
         * @memberof google
         * @namespace
         */
        var protobuf = {};

        protobuf.Timestamp = (function() {

            /**
             * Properties of a Timestamp.
             * @memberof google.protobuf
             * @interface ITimestamp
             * @property {number|null} [seconds] Timestamp seconds
             * @property {number|null} [nanos] Timestamp nanos
             */

            /**
             * Constructs a new Timestamp.
             * @memberof google.protobuf
             * @classdesc Represents a Timestamp.
             * @implements ITimestamp
             * @constructor
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             */
            function Timestamp(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Timestamp seconds.
             * @member {number} seconds
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Timestamp nanos.
             * @member {number} nanos
             * @memberof google.protobuf.Timestamp
             * @instance
             */
            Timestamp.prototype.nanos = 0;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @function create
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp=} [properties] Properties to set
             * @returns {google.protobuf.Timestamp} Timestamp instance
             */
            Timestamp.create = function create(properties) {
                return new Timestamp(properties);
            };

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.seconds != null && Object.hasOwnProperty.call(message, "seconds"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.seconds);
                if (message.nanos != null && Object.hasOwnProperty.call(message, "nanos"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nanos);
                return writer;
            };

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @function encodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.ITimestamp} message Timestamp message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Timestamp.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @function decode
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Timestamp();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.seconds = reader.int64();
                        break;
                    case 2:
                        message.nanos = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {google.protobuf.Timestamp} Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Timestamp.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Timestamp message.
             * @function verify
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Timestamp.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (!$util.isInteger(message.seconds) && !(message.seconds && $util.isInteger(message.seconds.low) && $util.isInteger(message.seconds.high)))
                        return "seconds: integer|Long expected";
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    if (!$util.isInteger(message.nanos))
                        return "nanos: integer expected";
                return null;
            };

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {google.protobuf.Timestamp} Timestamp
             */
            Timestamp.fromObject = function fromObject(object) {
                if (object instanceof $root.google.protobuf.Timestamp)
                    return object;
                var message = new $root.google.protobuf.Timestamp();
                if (object.seconds != null)
                    if ($util.Long)
                        (message.seconds = $util.Long.fromValue(object.seconds)).unsigned = false;
                    else if (typeof object.seconds === "string")
                        message.seconds = parseInt(object.seconds, 10);
                    else if (typeof object.seconds === "number")
                        message.seconds = object.seconds;
                    else if (typeof object.seconds === "object")
                        message.seconds = new $util.LongBits(object.seconds.low >>> 0, object.seconds.high >>> 0).toNumber();
                if (object.nanos != null)
                    message.nanos = object.nanos | 0;
                return message;
            };

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @function toObject
             * @memberof google.protobuf.Timestamp
             * @static
             * @param {google.protobuf.Timestamp} message Timestamp
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Timestamp.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.seconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.seconds = options.longs === String ? "0" : 0;
                    object.nanos = 0;
                }
                if (message.seconds != null && message.hasOwnProperty("seconds"))
                    if (typeof message.seconds === "number")
                        object.seconds = options.longs === String ? String(message.seconds) : message.seconds;
                    else
                        object.seconds = options.longs === String ? $util.Long.prototype.toString.call(message.seconds) : options.longs === Number ? new $util.LongBits(message.seconds.low >>> 0, message.seconds.high >>> 0).toNumber() : message.seconds;
                if (message.nanos != null && message.hasOwnProperty("nanos"))
                    object.nanos = message.nanos;
                return object;
            };

            /**
             * Converts this Timestamp to JSON.
             * @function toJSON
             * @memberof google.protobuf.Timestamp
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Timestamp.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
