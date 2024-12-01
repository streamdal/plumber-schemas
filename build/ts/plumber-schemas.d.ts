import * as $protobuf from "protobufjs";
/** Namespace protos. */
export namespace protos {

    /** Namespace args. */
    namespace args {

        /** Properties of an ActiveMQConn. */
        interface IActiveMQConn {

            /** ActiveMQConn address */
            address?: (string|null);
        }

        /** Represents an ActiveMQConn. */
        class ActiveMQConn implements IActiveMQConn {

            /**
             * Constructs a new ActiveMQConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IActiveMQConn);

            /** ActiveMQConn address. */
            public address: string;

            /**
             * Creates a new ActiveMQConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ActiveMQConn instance
             */
            public static create(properties?: protos.args.IActiveMQConn): protos.args.ActiveMQConn;

            /**
             * Encodes the specified ActiveMQConn message. Does not implicitly {@link protos.args.ActiveMQConn.verify|verify} messages.
             * @param message ActiveMQConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IActiveMQConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ActiveMQConn message, length delimited. Does not implicitly {@link protos.args.ActiveMQConn.verify|verify} messages.
             * @param message ActiveMQConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IActiveMQConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ActiveMQConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ActiveMQConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.ActiveMQConn;

            /**
             * Decodes an ActiveMQConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ActiveMQConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.ActiveMQConn;

            /**
             * Verifies an ActiveMQConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ActiveMQConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ActiveMQConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.ActiveMQConn;

            /**
             * Creates a plain object from an ActiveMQConn message. Also converts values to other types if specified.
             * @param message ActiveMQConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.ActiveMQConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ActiveMQConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ActiveMQReadArgs. */
        interface IActiveMQReadArgs {

            /** ActiveMQReadArgs topic */
            topic?: (string|null);

            /** ActiveMQReadArgs queue */
            queue?: (string|null);
        }

        /** Represents an ActiveMQReadArgs. */
        class ActiveMQReadArgs implements IActiveMQReadArgs {

            /**
             * Constructs a new ActiveMQReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IActiveMQReadArgs);

            /** ActiveMQReadArgs topic. */
            public topic: string;

            /** ActiveMQReadArgs queue. */
            public queue: string;

            /**
             * Creates a new ActiveMQReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ActiveMQReadArgs instance
             */
            public static create(properties?: protos.args.IActiveMQReadArgs): protos.args.ActiveMQReadArgs;

            /**
             * Encodes the specified ActiveMQReadArgs message. Does not implicitly {@link protos.args.ActiveMQReadArgs.verify|verify} messages.
             * @param message ActiveMQReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IActiveMQReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ActiveMQReadArgs message, length delimited. Does not implicitly {@link protos.args.ActiveMQReadArgs.verify|verify} messages.
             * @param message ActiveMQReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IActiveMQReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ActiveMQReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ActiveMQReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.ActiveMQReadArgs;

            /**
             * Decodes an ActiveMQReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ActiveMQReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.ActiveMQReadArgs;

            /**
             * Verifies an ActiveMQReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ActiveMQReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ActiveMQReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.ActiveMQReadArgs;

            /**
             * Creates a plain object from an ActiveMQReadArgs message. Also converts values to other types if specified.
             * @param message ActiveMQReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.ActiveMQReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ActiveMQReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ActiveMQWriteArgs. */
        interface IActiveMQWriteArgs {

            /** ActiveMQWriteArgs topic */
            topic?: (string|null);

            /** ActiveMQWriteArgs queue */
            queue?: (string|null);
        }

        /** Represents an ActiveMQWriteArgs. */
        class ActiveMQWriteArgs implements IActiveMQWriteArgs {

            /**
             * Constructs a new ActiveMQWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IActiveMQWriteArgs);

            /** ActiveMQWriteArgs topic. */
            public topic: string;

            /** ActiveMQWriteArgs queue. */
            public queue: string;

            /**
             * Creates a new ActiveMQWriteArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ActiveMQWriteArgs instance
             */
            public static create(properties?: protos.args.IActiveMQWriteArgs): protos.args.ActiveMQWriteArgs;

            /**
             * Encodes the specified ActiveMQWriteArgs message. Does not implicitly {@link protos.args.ActiveMQWriteArgs.verify|verify} messages.
             * @param message ActiveMQWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IActiveMQWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ActiveMQWriteArgs message, length delimited. Does not implicitly {@link protos.args.ActiveMQWriteArgs.verify|verify} messages.
             * @param message ActiveMQWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IActiveMQWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ActiveMQWriteArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ActiveMQWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.ActiveMQWriteArgs;

            /**
             * Decodes an ActiveMQWriteArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ActiveMQWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.ActiveMQWriteArgs;

            /**
             * Verifies an ActiveMQWriteArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ActiveMQWriteArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ActiveMQWriteArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.ActiveMQWriteArgs;

            /**
             * Creates a plain object from an ActiveMQWriteArgs message. Also converts values to other types if specified.
             * @param message ActiveMQWriteArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.ActiveMQWriteArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ActiveMQWriteArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a AWSKinesisConn. */
        interface IAWSKinesisConn {

            /** AWSKinesisConn awsRegion */
            awsRegion?: (string|null);

            /** AWSKinesisConn awsAccessKeyId */
            awsAccessKeyId?: (string|null);

            /** AWSKinesisConn awsSecretAccessKey */
            awsSecretAccessKey?: (string|null);

            /** AWSKinesisConn awsProfile */
            awsProfile?: (string|null);
        }

        /** Represents a AWSKinesisConn. */
        class AWSKinesisConn implements IAWSKinesisConn {

            /**
             * Constructs a new AWSKinesisConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IAWSKinesisConn);

            /** AWSKinesisConn awsRegion. */
            public awsRegion: string;

            /** AWSKinesisConn awsAccessKeyId. */
            public awsAccessKeyId: string;

            /** AWSKinesisConn awsSecretAccessKey. */
            public awsSecretAccessKey: string;

            /** AWSKinesisConn awsProfile. */
            public awsProfile: string;

            /**
             * Creates a new AWSKinesisConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AWSKinesisConn instance
             */
            public static create(properties?: protos.args.IAWSKinesisConn): protos.args.AWSKinesisConn;

            /**
             * Encodes the specified AWSKinesisConn message. Does not implicitly {@link protos.args.AWSKinesisConn.verify|verify} messages.
             * @param message AWSKinesisConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IAWSKinesisConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AWSKinesisConn message, length delimited. Does not implicitly {@link protos.args.AWSKinesisConn.verify|verify} messages.
             * @param message AWSKinesisConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IAWSKinesisConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AWSKinesisConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AWSKinesisConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.AWSKinesisConn;

            /**
             * Decodes a AWSKinesisConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AWSKinesisConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.AWSKinesisConn;

            /**
             * Verifies a AWSKinesisConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AWSKinesisConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AWSKinesisConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.AWSKinesisConn;

            /**
             * Creates a plain object from a AWSKinesisConn message. Also converts values to other types if specified.
             * @param message AWSKinesisConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.AWSKinesisConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AWSKinesisConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a AWSKinesisReadArgs. */
        interface IAWSKinesisReadArgs {

            /** AWSKinesisReadArgs stream */
            stream?: (string|null);

            /** AWSKinesisReadArgs shard */
            shard?: (string|null);

            /** AWSKinesisReadArgs maxRecords */
            maxRecords?: (number|Long|null);

            /** AWSKinesisReadArgs readFromTimestamp */
            readFromTimestamp?: (number|Long|null);

            /** AWSKinesisReadArgs readSequenceNumber */
            readSequenceNumber?: (string|null);

            /** AWSKinesisReadArgs readAfterSequenceNumber */
            readAfterSequenceNumber?: (string|null);

            /** AWSKinesisReadArgs readTrimHorizon */
            readTrimHorizon?: (boolean|null);

            /** AWSKinesisReadArgs readLatest */
            readLatest?: (boolean|null);
        }

        /** Represents a AWSKinesisReadArgs. */
        class AWSKinesisReadArgs implements IAWSKinesisReadArgs {

            /**
             * Constructs a new AWSKinesisReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IAWSKinesisReadArgs);

            /** AWSKinesisReadArgs stream. */
            public stream: string;

            /** AWSKinesisReadArgs shard. */
            public shard: string;

            /** AWSKinesisReadArgs maxRecords. */
            public maxRecords: (number|Long);

            /** AWSKinesisReadArgs readFromTimestamp. */
            public readFromTimestamp: (number|Long);

            /** AWSKinesisReadArgs readSequenceNumber. */
            public readSequenceNumber: string;

            /** AWSKinesisReadArgs readAfterSequenceNumber. */
            public readAfterSequenceNumber: string;

            /** AWSKinesisReadArgs readTrimHorizon. */
            public readTrimHorizon: boolean;

            /** AWSKinesisReadArgs readLatest. */
            public readLatest: boolean;

            /**
             * Creates a new AWSKinesisReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AWSKinesisReadArgs instance
             */
            public static create(properties?: protos.args.IAWSKinesisReadArgs): protos.args.AWSKinesisReadArgs;

            /**
             * Encodes the specified AWSKinesisReadArgs message. Does not implicitly {@link protos.args.AWSKinesisReadArgs.verify|verify} messages.
             * @param message AWSKinesisReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IAWSKinesisReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AWSKinesisReadArgs message, length delimited. Does not implicitly {@link protos.args.AWSKinesisReadArgs.verify|verify} messages.
             * @param message AWSKinesisReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IAWSKinesisReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AWSKinesisReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AWSKinesisReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.AWSKinesisReadArgs;

            /**
             * Decodes a AWSKinesisReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AWSKinesisReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.AWSKinesisReadArgs;

            /**
             * Verifies a AWSKinesisReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AWSKinesisReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AWSKinesisReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.AWSKinesisReadArgs;

            /**
             * Creates a plain object from a AWSKinesisReadArgs message. Also converts values to other types if specified.
             * @param message AWSKinesisReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.AWSKinesisReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AWSKinesisReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a AWSKinesisWriteArgs. */
        interface IAWSKinesisWriteArgs {

            /** AWSKinesisWriteArgs stream */
            stream?: (string|null);

            /** AWSKinesisWriteArgs partitionKey */
            partitionKey?: (string|null);

            /** AWSKinesisWriteArgs sequenceNumber */
            sequenceNumber?: (string|null);
        }

        /** Represents a AWSKinesisWriteArgs. */
        class AWSKinesisWriteArgs implements IAWSKinesisWriteArgs {

            /**
             * Constructs a new AWSKinesisWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IAWSKinesisWriteArgs);

            /** AWSKinesisWriteArgs stream. */
            public stream: string;

            /** AWSKinesisWriteArgs partitionKey. */
            public partitionKey: string;

            /** AWSKinesisWriteArgs sequenceNumber. */
            public sequenceNumber: string;

            /**
             * Creates a new AWSKinesisWriteArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AWSKinesisWriteArgs instance
             */
            public static create(properties?: protos.args.IAWSKinesisWriteArgs): protos.args.AWSKinesisWriteArgs;

            /**
             * Encodes the specified AWSKinesisWriteArgs message. Does not implicitly {@link protos.args.AWSKinesisWriteArgs.verify|verify} messages.
             * @param message AWSKinesisWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IAWSKinesisWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AWSKinesisWriteArgs message, length delimited. Does not implicitly {@link protos.args.AWSKinesisWriteArgs.verify|verify} messages.
             * @param message AWSKinesisWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IAWSKinesisWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AWSKinesisWriteArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AWSKinesisWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.AWSKinesisWriteArgs;

            /**
             * Decodes a AWSKinesisWriteArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AWSKinesisWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.AWSKinesisWriteArgs;

            /**
             * Verifies a AWSKinesisWriteArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AWSKinesisWriteArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AWSKinesisWriteArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.AWSKinesisWriteArgs;

            /**
             * Creates a plain object from a AWSKinesisWriteArgs message. Also converts values to other types if specified.
             * @param message AWSKinesisWriteArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.AWSKinesisWriteArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AWSKinesisWriteArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a AWSSNSConn. */
        interface IAWSSNSConn {

            /** AWSSNSConn awsRegion */
            awsRegion?: (string|null);

            /** AWSSNSConn awsAccessKeyId */
            awsAccessKeyId?: (string|null);

            /** AWSSNSConn awsSecretAccessKey */
            awsSecretAccessKey?: (string|null);

            /** AWSSNSConn awsProfile */
            awsProfile?: (string|null);
        }

        /** Represents a AWSSNSConn. */
        class AWSSNSConn implements IAWSSNSConn {

            /**
             * Constructs a new AWSSNSConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IAWSSNSConn);

            /** AWSSNSConn awsRegion. */
            public awsRegion: string;

            /** AWSSNSConn awsAccessKeyId. */
            public awsAccessKeyId: string;

            /** AWSSNSConn awsSecretAccessKey. */
            public awsSecretAccessKey: string;

            /** AWSSNSConn awsProfile. */
            public awsProfile: string;

            /**
             * Creates a new AWSSNSConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AWSSNSConn instance
             */
            public static create(properties?: protos.args.IAWSSNSConn): protos.args.AWSSNSConn;

            /**
             * Encodes the specified AWSSNSConn message. Does not implicitly {@link protos.args.AWSSNSConn.verify|verify} messages.
             * @param message AWSSNSConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IAWSSNSConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AWSSNSConn message, length delimited. Does not implicitly {@link protos.args.AWSSNSConn.verify|verify} messages.
             * @param message AWSSNSConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IAWSSNSConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AWSSNSConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AWSSNSConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.AWSSNSConn;

            /**
             * Decodes a AWSSNSConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AWSSNSConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.AWSSNSConn;

            /**
             * Verifies a AWSSNSConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AWSSNSConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AWSSNSConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.AWSSNSConn;

            /**
             * Creates a plain object from a AWSSNSConn message. Also converts values to other types if specified.
             * @param message AWSSNSConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.AWSSNSConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AWSSNSConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a AWSSNSWriteArgs. */
        interface IAWSSNSWriteArgs {

            /** AWSSNSWriteArgs topic */
            topic?: (string|null);
        }

        /** Represents a AWSSNSWriteArgs. */
        class AWSSNSWriteArgs implements IAWSSNSWriteArgs {

            /**
             * Constructs a new AWSSNSWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IAWSSNSWriteArgs);

            /** AWSSNSWriteArgs topic. */
            public topic: string;

            /**
             * Creates a new AWSSNSWriteArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AWSSNSWriteArgs instance
             */
            public static create(properties?: protos.args.IAWSSNSWriteArgs): protos.args.AWSSNSWriteArgs;

            /**
             * Encodes the specified AWSSNSWriteArgs message. Does not implicitly {@link protos.args.AWSSNSWriteArgs.verify|verify} messages.
             * @param message AWSSNSWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IAWSSNSWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AWSSNSWriteArgs message, length delimited. Does not implicitly {@link protos.args.AWSSNSWriteArgs.verify|verify} messages.
             * @param message AWSSNSWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IAWSSNSWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AWSSNSWriteArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AWSSNSWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.AWSSNSWriteArgs;

            /**
             * Decodes a AWSSNSWriteArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AWSSNSWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.AWSSNSWriteArgs;

            /**
             * Verifies a AWSSNSWriteArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AWSSNSWriteArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AWSSNSWriteArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.AWSSNSWriteArgs;

            /**
             * Creates a plain object from a AWSSNSWriteArgs message. Also converts values to other types if specified.
             * @param message AWSSNSWriteArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.AWSSNSWriteArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AWSSNSWriteArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a AWSSQSConn. */
        interface IAWSSQSConn {

            /** AWSSQSConn awsRegion */
            awsRegion?: (string|null);

            /** AWSSQSConn awsAccessKeyId */
            awsAccessKeyId?: (string|null);

            /** AWSSQSConn awsSecretAccessKey */
            awsSecretAccessKey?: (string|null);

            /** AWSSQSConn awsProfile */
            awsProfile?: (string|null);
        }

        /** Represents a AWSSQSConn. */
        class AWSSQSConn implements IAWSSQSConn {

            /**
             * Constructs a new AWSSQSConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IAWSSQSConn);

            /** AWSSQSConn awsRegion. */
            public awsRegion: string;

            /** AWSSQSConn awsAccessKeyId. */
            public awsAccessKeyId: string;

            /** AWSSQSConn awsSecretAccessKey. */
            public awsSecretAccessKey: string;

            /** AWSSQSConn awsProfile. */
            public awsProfile: string;

            /**
             * Creates a new AWSSQSConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AWSSQSConn instance
             */
            public static create(properties?: protos.args.IAWSSQSConn): protos.args.AWSSQSConn;

            /**
             * Encodes the specified AWSSQSConn message. Does not implicitly {@link protos.args.AWSSQSConn.verify|verify} messages.
             * @param message AWSSQSConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IAWSSQSConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AWSSQSConn message, length delimited. Does not implicitly {@link protos.args.AWSSQSConn.verify|verify} messages.
             * @param message AWSSQSConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IAWSSQSConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AWSSQSConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AWSSQSConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.AWSSQSConn;

            /**
             * Decodes a AWSSQSConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AWSSQSConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.AWSSQSConn;

            /**
             * Verifies a AWSSQSConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AWSSQSConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AWSSQSConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.AWSSQSConn;

            /**
             * Creates a plain object from a AWSSQSConn message. Also converts values to other types if specified.
             * @param message AWSSQSConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.AWSSQSConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AWSSQSConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a AWSSQSReadArgs. */
        interface IAWSSQSReadArgs {

            /** AWSSQSReadArgs queueName */
            queueName?: (string|null);

            /** AWSSQSReadArgs remoteAccountId */
            remoteAccountId?: (string|null);

            /** AWSSQSReadArgs maxNumMessages */
            maxNumMessages?: (number|Long|null);

            /** AWSSQSReadArgs receiveRequestAttemptId */
            receiveRequestAttemptId?: (string|null);

            /** AWSSQSReadArgs autoDelete */
            autoDelete?: (boolean|null);

            /** AWSSQSReadArgs waitTimeSeconds */
            waitTimeSeconds?: (number|Long|null);
        }

        /** Represents a AWSSQSReadArgs. */
        class AWSSQSReadArgs implements IAWSSQSReadArgs {

            /**
             * Constructs a new AWSSQSReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IAWSSQSReadArgs);

            /** AWSSQSReadArgs queueName. */
            public queueName: string;

            /** AWSSQSReadArgs remoteAccountId. */
            public remoteAccountId: string;

            /** AWSSQSReadArgs maxNumMessages. */
            public maxNumMessages: (number|Long);

            /** AWSSQSReadArgs receiveRequestAttemptId. */
            public receiveRequestAttemptId: string;

            /** AWSSQSReadArgs autoDelete. */
            public autoDelete: boolean;

            /** AWSSQSReadArgs waitTimeSeconds. */
            public waitTimeSeconds: (number|Long);

            /**
             * Creates a new AWSSQSReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AWSSQSReadArgs instance
             */
            public static create(properties?: protos.args.IAWSSQSReadArgs): protos.args.AWSSQSReadArgs;

            /**
             * Encodes the specified AWSSQSReadArgs message. Does not implicitly {@link protos.args.AWSSQSReadArgs.verify|verify} messages.
             * @param message AWSSQSReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IAWSSQSReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AWSSQSReadArgs message, length delimited. Does not implicitly {@link protos.args.AWSSQSReadArgs.verify|verify} messages.
             * @param message AWSSQSReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IAWSSQSReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AWSSQSReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AWSSQSReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.AWSSQSReadArgs;

            /**
             * Decodes a AWSSQSReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AWSSQSReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.AWSSQSReadArgs;

            /**
             * Verifies a AWSSQSReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AWSSQSReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AWSSQSReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.AWSSQSReadArgs;

            /**
             * Creates a plain object from a AWSSQSReadArgs message. Also converts values to other types if specified.
             * @param message AWSSQSReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.AWSSQSReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AWSSQSReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a AWSSQSWriteArgs. */
        interface IAWSSQSWriteArgs {

            /** AWSSQSWriteArgs queueName */
            queueName?: (string|null);

            /** AWSSQSWriteArgs remoteAccountId */
            remoteAccountId?: (string|null);

            /** AWSSQSWriteArgs delaySeconds */
            delaySeconds?: (number|Long|null);

            /** AWSSQSWriteArgs attributes */
            attributes?: ({ [k: string]: string }|null);

            /** AWSSQSWriteArgs messageGroupId */
            messageGroupId?: (string|null);

            /** AWSSQSWriteArgs messageDeduplicationId */
            messageDeduplicationId?: (string|null);
        }

        /** Represents a AWSSQSWriteArgs. */
        class AWSSQSWriteArgs implements IAWSSQSWriteArgs {

            /**
             * Constructs a new AWSSQSWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IAWSSQSWriteArgs);

            /** AWSSQSWriteArgs queueName. */
            public queueName: string;

            /** AWSSQSWriteArgs remoteAccountId. */
            public remoteAccountId: string;

            /** AWSSQSWriteArgs delaySeconds. */
            public delaySeconds: (number|Long);

            /** AWSSQSWriteArgs attributes. */
            public attributes: { [k: string]: string };

            /** AWSSQSWriteArgs messageGroupId. */
            public messageGroupId: string;

            /** AWSSQSWriteArgs messageDeduplicationId. */
            public messageDeduplicationId: string;

            /**
             * Creates a new AWSSQSWriteArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AWSSQSWriteArgs instance
             */
            public static create(properties?: protos.args.IAWSSQSWriteArgs): protos.args.AWSSQSWriteArgs;

            /**
             * Encodes the specified AWSSQSWriteArgs message. Does not implicitly {@link protos.args.AWSSQSWriteArgs.verify|verify} messages.
             * @param message AWSSQSWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IAWSSQSWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AWSSQSWriteArgs message, length delimited. Does not implicitly {@link protos.args.AWSSQSWriteArgs.verify|verify} messages.
             * @param message AWSSQSWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IAWSSQSWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AWSSQSWriteArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AWSSQSWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.AWSSQSWriteArgs;

            /**
             * Decodes a AWSSQSWriteArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AWSSQSWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.AWSSQSWriteArgs;

            /**
             * Verifies a AWSSQSWriteArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AWSSQSWriteArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AWSSQSWriteArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.AWSSQSWriteArgs;

            /**
             * Creates a plain object from a AWSSQSWriteArgs message. Also converts values to other types if specified.
             * @param message AWSSQSWriteArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.AWSSQSWriteArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AWSSQSWriteArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a AWSSQSRelayArgs. */
        interface IAWSSQSRelayArgs {

            /** AWSSQSRelayArgs queueName */
            queueName?: (string|null);

            /** AWSSQSRelayArgs remoteAccountId */
            remoteAccountId?: (string|null);

            /** AWSSQSRelayArgs maxNumMessages */
            maxNumMessages?: (number|Long|null);

            /** AWSSQSRelayArgs receiveRequestAttemptId */
            receiveRequestAttemptId?: (string|null);

            /** AWSSQSRelayArgs autoDelete */
            autoDelete?: (boolean|null);

            /** AWSSQSRelayArgs waitTimeSeconds */
            waitTimeSeconds?: (number|Long|null);
        }

        /** Represents a AWSSQSRelayArgs. */
        class AWSSQSRelayArgs implements IAWSSQSRelayArgs {

            /**
             * Constructs a new AWSSQSRelayArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IAWSSQSRelayArgs);

            /** AWSSQSRelayArgs queueName. */
            public queueName: string;

            /** AWSSQSRelayArgs remoteAccountId. */
            public remoteAccountId: string;

            /** AWSSQSRelayArgs maxNumMessages. */
            public maxNumMessages: (number|Long);

            /** AWSSQSRelayArgs receiveRequestAttemptId. */
            public receiveRequestAttemptId: string;

            /** AWSSQSRelayArgs autoDelete. */
            public autoDelete: boolean;

            /** AWSSQSRelayArgs waitTimeSeconds. */
            public waitTimeSeconds: (number|Long);

            /**
             * Creates a new AWSSQSRelayArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AWSSQSRelayArgs instance
             */
            public static create(properties?: protos.args.IAWSSQSRelayArgs): protos.args.AWSSQSRelayArgs;

            /**
             * Encodes the specified AWSSQSRelayArgs message. Does not implicitly {@link protos.args.AWSSQSRelayArgs.verify|verify} messages.
             * @param message AWSSQSRelayArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IAWSSQSRelayArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AWSSQSRelayArgs message, length delimited. Does not implicitly {@link protos.args.AWSSQSRelayArgs.verify|verify} messages.
             * @param message AWSSQSRelayArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IAWSSQSRelayArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AWSSQSRelayArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AWSSQSRelayArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.AWSSQSRelayArgs;

            /**
             * Decodes a AWSSQSRelayArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AWSSQSRelayArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.AWSSQSRelayArgs;

            /**
             * Verifies a AWSSQSRelayArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AWSSQSRelayArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AWSSQSRelayArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.AWSSQSRelayArgs;

            /**
             * Creates a plain object from a AWSSQSRelayArgs message. Also converts values to other types if specified.
             * @param message AWSSQSRelayArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.AWSSQSRelayArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AWSSQSRelayArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AzureEventHubConn. */
        interface IAzureEventHubConn {

            /** AzureEventHubConn connectionString */
            connectionString?: (string|null);
        }

        /** Represents an AzureEventHubConn. */
        class AzureEventHubConn implements IAzureEventHubConn {

            /**
             * Constructs a new AzureEventHubConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IAzureEventHubConn);

            /** AzureEventHubConn connectionString. */
            public connectionString: string;

            /**
             * Creates a new AzureEventHubConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AzureEventHubConn instance
             */
            public static create(properties?: protos.args.IAzureEventHubConn): protos.args.AzureEventHubConn;

            /**
             * Encodes the specified AzureEventHubConn message. Does not implicitly {@link protos.args.AzureEventHubConn.verify|verify} messages.
             * @param message AzureEventHubConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IAzureEventHubConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AzureEventHubConn message, length delimited. Does not implicitly {@link protos.args.AzureEventHubConn.verify|verify} messages.
             * @param message AzureEventHubConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IAzureEventHubConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AzureEventHubConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AzureEventHubConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.AzureEventHubConn;

            /**
             * Decodes an AzureEventHubConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AzureEventHubConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.AzureEventHubConn;

            /**
             * Verifies an AzureEventHubConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AzureEventHubConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AzureEventHubConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.AzureEventHubConn;

            /**
             * Creates a plain object from an AzureEventHubConn message. Also converts values to other types if specified.
             * @param message AzureEventHubConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.AzureEventHubConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AzureEventHubConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AzureEventHubReadArgs. */
        interface IAzureEventHubReadArgs {
        }

        /** Represents an AzureEventHubReadArgs. */
        class AzureEventHubReadArgs implements IAzureEventHubReadArgs {

            /**
             * Constructs a new AzureEventHubReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IAzureEventHubReadArgs);

            /**
             * Creates a new AzureEventHubReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AzureEventHubReadArgs instance
             */
            public static create(properties?: protos.args.IAzureEventHubReadArgs): protos.args.AzureEventHubReadArgs;

            /**
             * Encodes the specified AzureEventHubReadArgs message. Does not implicitly {@link protos.args.AzureEventHubReadArgs.verify|verify} messages.
             * @param message AzureEventHubReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IAzureEventHubReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AzureEventHubReadArgs message, length delimited. Does not implicitly {@link protos.args.AzureEventHubReadArgs.verify|verify} messages.
             * @param message AzureEventHubReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IAzureEventHubReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AzureEventHubReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AzureEventHubReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.AzureEventHubReadArgs;

            /**
             * Decodes an AzureEventHubReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AzureEventHubReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.AzureEventHubReadArgs;

            /**
             * Verifies an AzureEventHubReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AzureEventHubReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AzureEventHubReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.AzureEventHubReadArgs;

            /**
             * Creates a plain object from an AzureEventHubReadArgs message. Also converts values to other types if specified.
             * @param message AzureEventHubReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.AzureEventHubReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AzureEventHubReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AzureEventHubWriteArgs. */
        interface IAzureEventHubWriteArgs {

            /** AzureEventHubWriteArgs messageId */
            messageId?: (string|null);

            /** AzureEventHubWriteArgs partitionKey */
            partitionKey?: (string|null);
        }

        /** Represents an AzureEventHubWriteArgs. */
        class AzureEventHubWriteArgs implements IAzureEventHubWriteArgs {

            /**
             * Constructs a new AzureEventHubWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IAzureEventHubWriteArgs);

            /** AzureEventHubWriteArgs messageId. */
            public messageId: string;

            /** AzureEventHubWriteArgs partitionKey. */
            public partitionKey: string;

            /**
             * Creates a new AzureEventHubWriteArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AzureEventHubWriteArgs instance
             */
            public static create(properties?: protos.args.IAzureEventHubWriteArgs): protos.args.AzureEventHubWriteArgs;

            /**
             * Encodes the specified AzureEventHubWriteArgs message. Does not implicitly {@link protos.args.AzureEventHubWriteArgs.verify|verify} messages.
             * @param message AzureEventHubWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IAzureEventHubWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AzureEventHubWriteArgs message, length delimited. Does not implicitly {@link protos.args.AzureEventHubWriteArgs.verify|verify} messages.
             * @param message AzureEventHubWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IAzureEventHubWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AzureEventHubWriteArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AzureEventHubWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.AzureEventHubWriteArgs;

            /**
             * Decodes an AzureEventHubWriteArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AzureEventHubWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.AzureEventHubWriteArgs;

            /**
             * Verifies an AzureEventHubWriteArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AzureEventHubWriteArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AzureEventHubWriteArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.AzureEventHubWriteArgs;

            /**
             * Creates a plain object from an AzureEventHubWriteArgs message. Also converts values to other types if specified.
             * @param message AzureEventHubWriteArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.AzureEventHubWriteArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AzureEventHubWriteArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AzureServiceBusConn. */
        interface IAzureServiceBusConn {

            /** AzureServiceBusConn connectionString */
            connectionString?: (string|null);
        }

        /** Represents an AzureServiceBusConn. */
        class AzureServiceBusConn implements IAzureServiceBusConn {

            /**
             * Constructs a new AzureServiceBusConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IAzureServiceBusConn);

            /** AzureServiceBusConn connectionString. */
            public connectionString: string;

            /**
             * Creates a new AzureServiceBusConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AzureServiceBusConn instance
             */
            public static create(properties?: protos.args.IAzureServiceBusConn): protos.args.AzureServiceBusConn;

            /**
             * Encodes the specified AzureServiceBusConn message. Does not implicitly {@link protos.args.AzureServiceBusConn.verify|verify} messages.
             * @param message AzureServiceBusConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IAzureServiceBusConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AzureServiceBusConn message, length delimited. Does not implicitly {@link protos.args.AzureServiceBusConn.verify|verify} messages.
             * @param message AzureServiceBusConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IAzureServiceBusConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AzureServiceBusConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AzureServiceBusConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.AzureServiceBusConn;

            /**
             * Decodes an AzureServiceBusConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AzureServiceBusConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.AzureServiceBusConn;

            /**
             * Verifies an AzureServiceBusConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AzureServiceBusConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AzureServiceBusConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.AzureServiceBusConn;

            /**
             * Creates a plain object from an AzureServiceBusConn message. Also converts values to other types if specified.
             * @param message AzureServiceBusConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.AzureServiceBusConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AzureServiceBusConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AzureServiceBusReadArgs. */
        interface IAzureServiceBusReadArgs {

            /** AzureServiceBusReadArgs queue */
            queue?: (string|null);

            /** AzureServiceBusReadArgs topic */
            topic?: (string|null);

            /** AzureServiceBusReadArgs subscriptionName */
            subscriptionName?: (string|null);
        }

        /** Represents an AzureServiceBusReadArgs. */
        class AzureServiceBusReadArgs implements IAzureServiceBusReadArgs {

            /**
             * Constructs a new AzureServiceBusReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IAzureServiceBusReadArgs);

            /** AzureServiceBusReadArgs queue. */
            public queue: string;

            /** AzureServiceBusReadArgs topic. */
            public topic: string;

            /** AzureServiceBusReadArgs subscriptionName. */
            public subscriptionName: string;

            /**
             * Creates a new AzureServiceBusReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AzureServiceBusReadArgs instance
             */
            public static create(properties?: protos.args.IAzureServiceBusReadArgs): protos.args.AzureServiceBusReadArgs;

            /**
             * Encodes the specified AzureServiceBusReadArgs message. Does not implicitly {@link protos.args.AzureServiceBusReadArgs.verify|verify} messages.
             * @param message AzureServiceBusReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IAzureServiceBusReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AzureServiceBusReadArgs message, length delimited. Does not implicitly {@link protos.args.AzureServiceBusReadArgs.verify|verify} messages.
             * @param message AzureServiceBusReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IAzureServiceBusReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AzureServiceBusReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AzureServiceBusReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.AzureServiceBusReadArgs;

            /**
             * Decodes an AzureServiceBusReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AzureServiceBusReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.AzureServiceBusReadArgs;

            /**
             * Verifies an AzureServiceBusReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AzureServiceBusReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AzureServiceBusReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.AzureServiceBusReadArgs;

            /**
             * Creates a plain object from an AzureServiceBusReadArgs message. Also converts values to other types if specified.
             * @param message AzureServiceBusReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.AzureServiceBusReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AzureServiceBusReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AzureServiceBusWriteArgs. */
        interface IAzureServiceBusWriteArgs {

            /** AzureServiceBusWriteArgs queue */
            queue?: (string|null);

            /** AzureServiceBusWriteArgs topic */
            topic?: (string|null);
        }

        /** Represents an AzureServiceBusWriteArgs. */
        class AzureServiceBusWriteArgs implements IAzureServiceBusWriteArgs {

            /**
             * Constructs a new AzureServiceBusWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IAzureServiceBusWriteArgs);

            /** AzureServiceBusWriteArgs queue. */
            public queue: string;

            /** AzureServiceBusWriteArgs topic. */
            public topic: string;

            /**
             * Creates a new AzureServiceBusWriteArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AzureServiceBusWriteArgs instance
             */
            public static create(properties?: protos.args.IAzureServiceBusWriteArgs): protos.args.AzureServiceBusWriteArgs;

            /**
             * Encodes the specified AzureServiceBusWriteArgs message. Does not implicitly {@link protos.args.AzureServiceBusWriteArgs.verify|verify} messages.
             * @param message AzureServiceBusWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IAzureServiceBusWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AzureServiceBusWriteArgs message, length delimited. Does not implicitly {@link protos.args.AzureServiceBusWriteArgs.verify|verify} messages.
             * @param message AzureServiceBusWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IAzureServiceBusWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AzureServiceBusWriteArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AzureServiceBusWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.AzureServiceBusWriteArgs;

            /**
             * Decodes an AzureServiceBusWriteArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AzureServiceBusWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.AzureServiceBusWriteArgs;

            /**
             * Verifies an AzureServiceBusWriteArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AzureServiceBusWriteArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AzureServiceBusWriteArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.AzureServiceBusWriteArgs;

            /**
             * Creates a plain object from an AzureServiceBusWriteArgs message. Also converts values to other types if specified.
             * @param message AzureServiceBusWriteArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.AzureServiceBusWriteArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AzureServiceBusWriteArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GCPPubSubConn. */
        interface IGCPPubSubConn {

            /** GCPPubSubConn projectId */
            projectId?: (string|null);

            /** GCPPubSubConn credentialsJson */
            credentialsJson?: (string|null);

            /** GCPPubSubConn credentialsFile */
            credentialsFile?: (string|null);
        }

        /** Represents a GCPPubSubConn. */
        class GCPPubSubConn implements IGCPPubSubConn {

            /**
             * Constructs a new GCPPubSubConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IGCPPubSubConn);

            /** GCPPubSubConn projectId. */
            public projectId: string;

            /** GCPPubSubConn credentialsJson. */
            public credentialsJson: string;

            /** GCPPubSubConn credentialsFile. */
            public credentialsFile: string;

            /**
             * Creates a new GCPPubSubConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GCPPubSubConn instance
             */
            public static create(properties?: protos.args.IGCPPubSubConn): protos.args.GCPPubSubConn;

            /**
             * Encodes the specified GCPPubSubConn message. Does not implicitly {@link protos.args.GCPPubSubConn.verify|verify} messages.
             * @param message GCPPubSubConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IGCPPubSubConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GCPPubSubConn message, length delimited. Does not implicitly {@link protos.args.GCPPubSubConn.verify|verify} messages.
             * @param message GCPPubSubConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IGCPPubSubConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GCPPubSubConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GCPPubSubConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.GCPPubSubConn;

            /**
             * Decodes a GCPPubSubConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GCPPubSubConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.GCPPubSubConn;

            /**
             * Verifies a GCPPubSubConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GCPPubSubConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GCPPubSubConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.GCPPubSubConn;

            /**
             * Creates a plain object from a GCPPubSubConn message. Also converts values to other types if specified.
             * @param message GCPPubSubConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.GCPPubSubConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GCPPubSubConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GCPPubSubReadArgs. */
        interface IGCPPubSubReadArgs {

            /** GCPPubSubReadArgs subscriptionId */
            subscriptionId?: (string|null);

            /** GCPPubSubReadArgs ackMessages */
            ackMessages?: (boolean|null);
        }

        /** Represents a GCPPubSubReadArgs. */
        class GCPPubSubReadArgs implements IGCPPubSubReadArgs {

            /**
             * Constructs a new GCPPubSubReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IGCPPubSubReadArgs);

            /** GCPPubSubReadArgs subscriptionId. */
            public subscriptionId: string;

            /** GCPPubSubReadArgs ackMessages. */
            public ackMessages: boolean;

            /**
             * Creates a new GCPPubSubReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GCPPubSubReadArgs instance
             */
            public static create(properties?: protos.args.IGCPPubSubReadArgs): protos.args.GCPPubSubReadArgs;

            /**
             * Encodes the specified GCPPubSubReadArgs message. Does not implicitly {@link protos.args.GCPPubSubReadArgs.verify|verify} messages.
             * @param message GCPPubSubReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IGCPPubSubReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GCPPubSubReadArgs message, length delimited. Does not implicitly {@link protos.args.GCPPubSubReadArgs.verify|verify} messages.
             * @param message GCPPubSubReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IGCPPubSubReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GCPPubSubReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GCPPubSubReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.GCPPubSubReadArgs;

            /**
             * Decodes a GCPPubSubReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GCPPubSubReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.GCPPubSubReadArgs;

            /**
             * Verifies a GCPPubSubReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GCPPubSubReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GCPPubSubReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.GCPPubSubReadArgs;

            /**
             * Creates a plain object from a GCPPubSubReadArgs message. Also converts values to other types if specified.
             * @param message GCPPubSubReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.GCPPubSubReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GCPPubSubReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GCPPubSubWriteArgs. */
        interface IGCPPubSubWriteArgs {

            /** GCPPubSubWriteArgs topicId */
            topicId?: (string|null);
        }

        /** Represents a GCPPubSubWriteArgs. */
        class GCPPubSubWriteArgs implements IGCPPubSubWriteArgs {

            /**
             * Constructs a new GCPPubSubWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IGCPPubSubWriteArgs);

            /** GCPPubSubWriteArgs topicId. */
            public topicId: string;

            /**
             * Creates a new GCPPubSubWriteArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GCPPubSubWriteArgs instance
             */
            public static create(properties?: protos.args.IGCPPubSubWriteArgs): protos.args.GCPPubSubWriteArgs;

            /**
             * Encodes the specified GCPPubSubWriteArgs message. Does not implicitly {@link protos.args.GCPPubSubWriteArgs.verify|verify} messages.
             * @param message GCPPubSubWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IGCPPubSubWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GCPPubSubWriteArgs message, length delimited. Does not implicitly {@link protos.args.GCPPubSubWriteArgs.verify|verify} messages.
             * @param message GCPPubSubWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IGCPPubSubWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GCPPubSubWriteArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GCPPubSubWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.GCPPubSubWriteArgs;

            /**
             * Decodes a GCPPubSubWriteArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GCPPubSubWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.GCPPubSubWriteArgs;

            /**
             * Verifies a GCPPubSubWriteArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GCPPubSubWriteArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GCPPubSubWriteArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.GCPPubSubWriteArgs;

            /**
             * Creates a plain object from a GCPPubSubWriteArgs message. Also converts values to other types if specified.
             * @param message GCPPubSubWriteArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.GCPPubSubWriteArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GCPPubSubWriteArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** SASLType enum. */
        enum SASLType {
            NONE = 0,
            PLAIN = 1,
            SCRAM = 2
        }

        /** Properties of a KafkaConn. */
        interface IKafkaConn {

            /** KafkaConn address */
            address?: (string[]|null);

            /** KafkaConn timeoutSeconds */
            timeoutSeconds?: (number|null);

            /** KafkaConn useTls */
            useTls?: (boolean|null);

            /** KafkaConn tlsSkipVerify */
            tlsSkipVerify?: (boolean|null);

            /** KafkaConn saslType */
            saslType?: (protos.args.SASLType|null);

            /** KafkaConn saslUsername */
            saslUsername?: (string|null);

            /** KafkaConn saslPassword */
            saslPassword?: (string|null);
        }

        /** Represents a KafkaConn. */
        class KafkaConn implements IKafkaConn {

            /**
             * Constructs a new KafkaConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IKafkaConn);

            /** KafkaConn address. */
            public address: string[];

            /** KafkaConn timeoutSeconds. */
            public timeoutSeconds: number;

            /** KafkaConn useTls. */
            public useTls: boolean;

            /** KafkaConn tlsSkipVerify. */
            public tlsSkipVerify: boolean;

            /** KafkaConn saslType. */
            public saslType: protos.args.SASLType;

            /** KafkaConn saslUsername. */
            public saslUsername: string;

            /** KafkaConn saslPassword. */
            public saslPassword: string;

            /**
             * Creates a new KafkaConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KafkaConn instance
             */
            public static create(properties?: protos.args.IKafkaConn): protos.args.KafkaConn;

            /**
             * Encodes the specified KafkaConn message. Does not implicitly {@link protos.args.KafkaConn.verify|verify} messages.
             * @param message KafkaConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IKafkaConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KafkaConn message, length delimited. Does not implicitly {@link protos.args.KafkaConn.verify|verify} messages.
             * @param message KafkaConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IKafkaConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KafkaConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KafkaConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.KafkaConn;

            /**
             * Decodes a KafkaConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KafkaConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.KafkaConn;

            /**
             * Verifies a KafkaConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KafkaConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KafkaConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.KafkaConn;

            /**
             * Creates a plain object from a KafkaConn message. Also converts values to other types if specified.
             * @param message KafkaConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.KafkaConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KafkaConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a KafkaReadArgs. */
        interface IKafkaReadArgs {

            /** KafkaReadArgs topics */
            topics?: (string[]|null);

            /** KafkaReadArgs readOffset */
            readOffset?: (number|Long|null);

            /** KafkaReadArgs useConsumerGroup */
            useConsumerGroup?: (boolean|null);

            /** KafkaReadArgs consumerGroupName */
            consumerGroupName?: (string|null);

            /** KafkaReadArgs maxWaitSeconds */
            maxWaitSeconds?: (number|null);

            /** KafkaReadArgs minBytes */
            minBytes?: (number|null);

            /** KafkaReadArgs maxBytes */
            maxBytes?: (number|null);

            /** KafkaReadArgs commitIntervalSeconds */
            commitIntervalSeconds?: (number|null);

            /** KafkaReadArgs rebalanceTimeoutSeconds */
            rebalanceTimeoutSeconds?: (number|null);

            /** KafkaReadArgs queueCapacity */
            queueCapacity?: (number|null);

            /** KafkaReadArgs includeOffsetInfo */
            includeOffsetInfo?: (boolean|null);

            /** KafkaReadArgs lag */
            lag?: (boolean|null);

            /** KafkaReadArgs lagConsumerGroup */
            lagConsumerGroup?: (string|null);
        }

        /** Represents a KafkaReadArgs. */
        class KafkaReadArgs implements IKafkaReadArgs {

            /**
             * Constructs a new KafkaReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IKafkaReadArgs);

            /** KafkaReadArgs topics. */
            public topics: string[];

            /** KafkaReadArgs readOffset. */
            public readOffset: (number|Long);

            /** KafkaReadArgs useConsumerGroup. */
            public useConsumerGroup: boolean;

            /** KafkaReadArgs consumerGroupName. */
            public consumerGroupName: string;

            /** KafkaReadArgs maxWaitSeconds. */
            public maxWaitSeconds: number;

            /** KafkaReadArgs minBytes. */
            public minBytes: number;

            /** KafkaReadArgs maxBytes. */
            public maxBytes: number;

            /** KafkaReadArgs commitIntervalSeconds. */
            public commitIntervalSeconds: number;

            /** KafkaReadArgs rebalanceTimeoutSeconds. */
            public rebalanceTimeoutSeconds: number;

            /** KafkaReadArgs queueCapacity. */
            public queueCapacity: number;

            /** KafkaReadArgs includeOffsetInfo. */
            public includeOffsetInfo: boolean;

            /** KafkaReadArgs lag. */
            public lag: boolean;

            /** KafkaReadArgs lagConsumerGroup. */
            public lagConsumerGroup: string;

            /**
             * Creates a new KafkaReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KafkaReadArgs instance
             */
            public static create(properties?: protos.args.IKafkaReadArgs): protos.args.KafkaReadArgs;

            /**
             * Encodes the specified KafkaReadArgs message. Does not implicitly {@link protos.args.KafkaReadArgs.verify|verify} messages.
             * @param message KafkaReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IKafkaReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KafkaReadArgs message, length delimited. Does not implicitly {@link protos.args.KafkaReadArgs.verify|verify} messages.
             * @param message KafkaReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IKafkaReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KafkaReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KafkaReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.KafkaReadArgs;

            /**
             * Decodes a KafkaReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KafkaReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.KafkaReadArgs;

            /**
             * Verifies a KafkaReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KafkaReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KafkaReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.KafkaReadArgs;

            /**
             * Creates a plain object from a KafkaReadArgs message. Also converts values to other types if specified.
             * @param message KafkaReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.KafkaReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KafkaReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a KafkaWriteArgs. */
        interface IKafkaWriteArgs {

            /** KafkaWriteArgs key */
            key?: (string|null);

            /** KafkaWriteArgs headers */
            headers?: ({ [k: string]: string }|null);

            /** KafkaWriteArgs topics */
            topics?: (string[]|null);
        }

        /** Represents a KafkaWriteArgs. */
        class KafkaWriteArgs implements IKafkaWriteArgs {

            /**
             * Constructs a new KafkaWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IKafkaWriteArgs);

            /** KafkaWriteArgs key. */
            public key: string;

            /** KafkaWriteArgs headers. */
            public headers: { [k: string]: string };

            /** KafkaWriteArgs topics. */
            public topics: string[];

            /**
             * Creates a new KafkaWriteArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KafkaWriteArgs instance
             */
            public static create(properties?: protos.args.IKafkaWriteArgs): protos.args.KafkaWriteArgs;

            /**
             * Encodes the specified KafkaWriteArgs message. Does not implicitly {@link protos.args.KafkaWriteArgs.verify|verify} messages.
             * @param message KafkaWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IKafkaWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KafkaWriteArgs message, length delimited. Does not implicitly {@link protos.args.KafkaWriteArgs.verify|verify} messages.
             * @param message KafkaWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IKafkaWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KafkaWriteArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KafkaWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.KafkaWriteArgs;

            /**
             * Decodes a KafkaWriteArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KafkaWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.KafkaWriteArgs;

            /**
             * Verifies a KafkaWriteArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KafkaWriteArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KafkaWriteArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.KafkaWriteArgs;

            /**
             * Creates a plain object from a KafkaWriteArgs message. Also converts values to other types if specified.
             * @param message KafkaWriteArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.KafkaWriteArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KafkaWriteArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a KafkaRelayArgs. */
        interface IKafkaRelayArgs {

            /** KafkaRelayArgs topics */
            topics?: (string[]|null);

            /** KafkaRelayArgs readOffset */
            readOffset?: (number|Long|null);

            /** KafkaRelayArgs useConsumerGroup */
            useConsumerGroup?: (boolean|null);

            /** KafkaRelayArgs consumerGroupName */
            consumerGroupName?: (string|null);

            /** KafkaRelayArgs maxWaitSeconds */
            maxWaitSeconds?: (number|null);

            /** KafkaRelayArgs minBytes */
            minBytes?: (number|null);

            /** KafkaRelayArgs maxBytes */
            maxBytes?: (number|null);

            /** KafkaRelayArgs commitIntervalSeconds */
            commitIntervalSeconds?: (number|null);

            /** KafkaRelayArgs rebalanceTimeoutSeconds */
            rebalanceTimeoutSeconds?: (number|null);

            /** KafkaRelayArgs queueCapacity */
            queueCapacity?: (number|null);
        }

        /** Represents a KafkaRelayArgs. */
        class KafkaRelayArgs implements IKafkaRelayArgs {

            /**
             * Constructs a new KafkaRelayArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IKafkaRelayArgs);

            /** KafkaRelayArgs topics. */
            public topics: string[];

            /** KafkaRelayArgs readOffset. */
            public readOffset: (number|Long);

            /** KafkaRelayArgs useConsumerGroup. */
            public useConsumerGroup: boolean;

            /** KafkaRelayArgs consumerGroupName. */
            public consumerGroupName: string;

            /** KafkaRelayArgs maxWaitSeconds. */
            public maxWaitSeconds: number;

            /** KafkaRelayArgs minBytes. */
            public minBytes: number;

            /** KafkaRelayArgs maxBytes. */
            public maxBytes: number;

            /** KafkaRelayArgs commitIntervalSeconds. */
            public commitIntervalSeconds: number;

            /** KafkaRelayArgs rebalanceTimeoutSeconds. */
            public rebalanceTimeoutSeconds: number;

            /** KafkaRelayArgs queueCapacity. */
            public queueCapacity: number;

            /**
             * Creates a new KafkaRelayArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KafkaRelayArgs instance
             */
            public static create(properties?: protos.args.IKafkaRelayArgs): protos.args.KafkaRelayArgs;

            /**
             * Encodes the specified KafkaRelayArgs message. Does not implicitly {@link protos.args.KafkaRelayArgs.verify|verify} messages.
             * @param message KafkaRelayArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IKafkaRelayArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KafkaRelayArgs message, length delimited. Does not implicitly {@link protos.args.KafkaRelayArgs.verify|verify} messages.
             * @param message KafkaRelayArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IKafkaRelayArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KafkaRelayArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KafkaRelayArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.KafkaRelayArgs;

            /**
             * Decodes a KafkaRelayArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KafkaRelayArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.KafkaRelayArgs;

            /**
             * Verifies a KafkaRelayArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KafkaRelayArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KafkaRelayArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.KafkaRelayArgs;

            /**
             * Creates a plain object from a KafkaRelayArgs message. Also converts values to other types if specified.
             * @param message KafkaRelayArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.KafkaRelayArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KafkaRelayArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a KubeMQQueueConn. */
        interface IKubeMQQueueConn {

            /** KubeMQQueueConn address */
            address?: (string|null);

            /** KubeMQQueueConn authToken */
            authToken?: (string|null);

            /** KubeMQQueueConn tlsClientCert */
            tlsClientCert?: (string|null);

            /** KubeMQQueueConn clientId */
            clientId?: (string|null);
        }

        /** Represents a KubeMQQueueConn. */
        class KubeMQQueueConn implements IKubeMQQueueConn {

            /**
             * Constructs a new KubeMQQueueConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IKubeMQQueueConn);

            /** KubeMQQueueConn address. */
            public address: string;

            /** KubeMQQueueConn authToken. */
            public authToken: string;

            /** KubeMQQueueConn tlsClientCert. */
            public tlsClientCert: string;

            /** KubeMQQueueConn clientId. */
            public clientId: string;

            /**
             * Creates a new KubeMQQueueConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KubeMQQueueConn instance
             */
            public static create(properties?: protos.args.IKubeMQQueueConn): protos.args.KubeMQQueueConn;

            /**
             * Encodes the specified KubeMQQueueConn message. Does not implicitly {@link protos.args.KubeMQQueueConn.verify|verify} messages.
             * @param message KubeMQQueueConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IKubeMQQueueConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KubeMQQueueConn message, length delimited. Does not implicitly {@link protos.args.KubeMQQueueConn.verify|verify} messages.
             * @param message KubeMQQueueConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IKubeMQQueueConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KubeMQQueueConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KubeMQQueueConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.KubeMQQueueConn;

            /**
             * Decodes a KubeMQQueueConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KubeMQQueueConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.KubeMQQueueConn;

            /**
             * Verifies a KubeMQQueueConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KubeMQQueueConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KubeMQQueueConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.KubeMQQueueConn;

            /**
             * Creates a plain object from a KubeMQQueueConn message. Also converts values to other types if specified.
             * @param message KubeMQQueueConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.KubeMQQueueConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KubeMQQueueConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a KubeMQQueueReadArgs. */
        interface IKubeMQQueueReadArgs {

            /** KubeMQQueueReadArgs queueName */
            queueName?: (string|null);
        }

        /** Represents a KubeMQQueueReadArgs. */
        class KubeMQQueueReadArgs implements IKubeMQQueueReadArgs {

            /**
             * Constructs a new KubeMQQueueReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IKubeMQQueueReadArgs);

            /** KubeMQQueueReadArgs queueName. */
            public queueName: string;

            /**
             * Creates a new KubeMQQueueReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KubeMQQueueReadArgs instance
             */
            public static create(properties?: protos.args.IKubeMQQueueReadArgs): protos.args.KubeMQQueueReadArgs;

            /**
             * Encodes the specified KubeMQQueueReadArgs message. Does not implicitly {@link protos.args.KubeMQQueueReadArgs.verify|verify} messages.
             * @param message KubeMQQueueReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IKubeMQQueueReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KubeMQQueueReadArgs message, length delimited. Does not implicitly {@link protos.args.KubeMQQueueReadArgs.verify|verify} messages.
             * @param message KubeMQQueueReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IKubeMQQueueReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KubeMQQueueReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KubeMQQueueReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.KubeMQQueueReadArgs;

            /**
             * Decodes a KubeMQQueueReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KubeMQQueueReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.KubeMQQueueReadArgs;

            /**
             * Verifies a KubeMQQueueReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KubeMQQueueReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KubeMQQueueReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.KubeMQQueueReadArgs;

            /**
             * Creates a plain object from a KubeMQQueueReadArgs message. Also converts values to other types if specified.
             * @param message KubeMQQueueReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.KubeMQQueueReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KubeMQQueueReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a KubeMQQueueWriteArgs. */
        interface IKubeMQQueueWriteArgs {

            /** KubeMQQueueWriteArgs queueName */
            queueName?: (string|null);
        }

        /** Represents a KubeMQQueueWriteArgs. */
        class KubeMQQueueWriteArgs implements IKubeMQQueueWriteArgs {

            /**
             * Constructs a new KubeMQQueueWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IKubeMQQueueWriteArgs);

            /** KubeMQQueueWriteArgs queueName. */
            public queueName: string;

            /**
             * Creates a new KubeMQQueueWriteArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KubeMQQueueWriteArgs instance
             */
            public static create(properties?: protos.args.IKubeMQQueueWriteArgs): protos.args.KubeMQQueueWriteArgs;

            /**
             * Encodes the specified KubeMQQueueWriteArgs message. Does not implicitly {@link protos.args.KubeMQQueueWriteArgs.verify|verify} messages.
             * @param message KubeMQQueueWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IKubeMQQueueWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KubeMQQueueWriteArgs message, length delimited. Does not implicitly {@link protos.args.KubeMQQueueWriteArgs.verify|verify} messages.
             * @param message KubeMQQueueWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IKubeMQQueueWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KubeMQQueueWriteArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KubeMQQueueWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.KubeMQQueueWriteArgs;

            /**
             * Decodes a KubeMQQueueWriteArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KubeMQQueueWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.KubeMQQueueWriteArgs;

            /**
             * Verifies a KubeMQQueueWriteArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KubeMQQueueWriteArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KubeMQQueueWriteArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.KubeMQQueueWriteArgs;

            /**
             * Creates a plain object from a KubeMQQueueWriteArgs message. Also converts values to other types if specified.
             * @param message KubeMQQueueWriteArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.KubeMQQueueWriteArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KubeMQQueueWriteArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MemphisConn. */
        interface IMemphisConn {

            /** MemphisConn address */
            address?: (string|null);

            /** MemphisConn username */
            username?: (string|null);

            /** MemphisConn brokerToken */
            brokerToken?: (string|null);
        }

        /** Represents a MemphisConn. */
        class MemphisConn implements IMemphisConn {

            /**
             * Constructs a new MemphisConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IMemphisConn);

            /** MemphisConn address. */
            public address: string;

            /** MemphisConn username. */
            public username: string;

            /** MemphisConn brokerToken. */
            public brokerToken: string;

            /**
             * Creates a new MemphisConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MemphisConn instance
             */
            public static create(properties?: protos.args.IMemphisConn): protos.args.MemphisConn;

            /**
             * Encodes the specified MemphisConn message. Does not implicitly {@link protos.args.MemphisConn.verify|verify} messages.
             * @param message MemphisConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IMemphisConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MemphisConn message, length delimited. Does not implicitly {@link protos.args.MemphisConn.verify|verify} messages.
             * @param message MemphisConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IMemphisConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MemphisConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MemphisConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.MemphisConn;

            /**
             * Decodes a MemphisConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MemphisConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.MemphisConn;

            /**
             * Verifies a MemphisConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MemphisConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MemphisConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.MemphisConn;

            /**
             * Creates a plain object from a MemphisConn message. Also converts values to other types if specified.
             * @param message MemphisConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.MemphisConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MemphisConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MemphisReadArgs. */
        interface IMemphisReadArgs {

            /** MemphisReadArgs station */
            station?: (string|null);

            /** MemphisReadArgs consumerName */
            consumerName?: (string|null);

            /** MemphisReadArgs consumerGroup */
            consumerGroup?: (string|null);
        }

        /** Represents a MemphisReadArgs. */
        class MemphisReadArgs implements IMemphisReadArgs {

            /**
             * Constructs a new MemphisReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IMemphisReadArgs);

            /** MemphisReadArgs station. */
            public station: string;

            /** MemphisReadArgs consumerName. */
            public consumerName: string;

            /** MemphisReadArgs consumerGroup. */
            public consumerGroup: string;

            /**
             * Creates a new MemphisReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MemphisReadArgs instance
             */
            public static create(properties?: protos.args.IMemphisReadArgs): protos.args.MemphisReadArgs;

            /**
             * Encodes the specified MemphisReadArgs message. Does not implicitly {@link protos.args.MemphisReadArgs.verify|verify} messages.
             * @param message MemphisReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IMemphisReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MemphisReadArgs message, length delimited. Does not implicitly {@link protos.args.MemphisReadArgs.verify|verify} messages.
             * @param message MemphisReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IMemphisReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MemphisReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MemphisReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.MemphisReadArgs;

            /**
             * Decodes a MemphisReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MemphisReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.MemphisReadArgs;

            /**
             * Verifies a MemphisReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MemphisReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MemphisReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.MemphisReadArgs;

            /**
             * Creates a plain object from a MemphisReadArgs message. Also converts values to other types if specified.
             * @param message MemphisReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.MemphisReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MemphisReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MemphisWriteArgs. */
        interface IMemphisWriteArgs {

            /** MemphisWriteArgs station */
            station?: (string|null);

            /** MemphisWriteArgs producerName */
            producerName?: (string|null);

            /** MemphisWriteArgs headers */
            headers?: ({ [k: string]: string }|null);

            /** MemphisWriteArgs messageId */
            messageId?: (string|null);
        }

        /** Represents a MemphisWriteArgs. */
        class MemphisWriteArgs implements IMemphisWriteArgs {

            /**
             * Constructs a new MemphisWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IMemphisWriteArgs);

            /** MemphisWriteArgs station. */
            public station: string;

            /** MemphisWriteArgs producerName. */
            public producerName: string;

            /** MemphisWriteArgs headers. */
            public headers: { [k: string]: string };

            /** MemphisWriteArgs messageId. */
            public messageId: string;

            /**
             * Creates a new MemphisWriteArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MemphisWriteArgs instance
             */
            public static create(properties?: protos.args.IMemphisWriteArgs): protos.args.MemphisWriteArgs;

            /**
             * Encodes the specified MemphisWriteArgs message. Does not implicitly {@link protos.args.MemphisWriteArgs.verify|verify} messages.
             * @param message MemphisWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IMemphisWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MemphisWriteArgs message, length delimited. Does not implicitly {@link protos.args.MemphisWriteArgs.verify|verify} messages.
             * @param message MemphisWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IMemphisWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MemphisWriteArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MemphisWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.MemphisWriteArgs;

            /**
             * Decodes a MemphisWriteArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MemphisWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.MemphisWriteArgs;

            /**
             * Verifies a MemphisWriteArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MemphisWriteArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MemphisWriteArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.MemphisWriteArgs;

            /**
             * Creates a plain object from a MemphisWriteArgs message. Also converts values to other types if specified.
             * @param message MemphisWriteArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.MemphisWriteArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MemphisWriteArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MongoConn. */
        interface IMongoConn {

            /** MongoConn dsn */
            dsn?: (string|null);
        }

        /** Represents a MongoConn. */
        class MongoConn implements IMongoConn {

            /**
             * Constructs a new MongoConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IMongoConn);

            /** MongoConn dsn. */
            public dsn: string;

            /**
             * Creates a new MongoConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MongoConn instance
             */
            public static create(properties?: protos.args.IMongoConn): protos.args.MongoConn;

            /**
             * Encodes the specified MongoConn message. Does not implicitly {@link protos.args.MongoConn.verify|verify} messages.
             * @param message MongoConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IMongoConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MongoConn message, length delimited. Does not implicitly {@link protos.args.MongoConn.verify|verify} messages.
             * @param message MongoConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IMongoConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MongoConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MongoConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.MongoConn;

            /**
             * Decodes a MongoConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MongoConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.MongoConn;

            /**
             * Verifies a MongoConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MongoConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MongoConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.MongoConn;

            /**
             * Creates a plain object from a MongoConn message. Also converts values to other types if specified.
             * @param message MongoConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.MongoConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MongoConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MongoReadArgs. */
        interface IMongoReadArgs {

            /** MongoReadArgs database */
            database?: (string|null);

            /** MongoReadArgs collection */
            collection?: (string|null);

            /** MongoReadArgs includeFullDocument */
            includeFullDocument?: (boolean|null);
        }

        /** Represents a MongoReadArgs. */
        class MongoReadArgs implements IMongoReadArgs {

            /**
             * Constructs a new MongoReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IMongoReadArgs);

            /** MongoReadArgs database. */
            public database: string;

            /** MongoReadArgs collection. */
            public collection: string;

            /** MongoReadArgs includeFullDocument. */
            public includeFullDocument: boolean;

            /**
             * Creates a new MongoReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MongoReadArgs instance
             */
            public static create(properties?: protos.args.IMongoReadArgs): protos.args.MongoReadArgs;

            /**
             * Encodes the specified MongoReadArgs message. Does not implicitly {@link protos.args.MongoReadArgs.verify|verify} messages.
             * @param message MongoReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IMongoReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MongoReadArgs message, length delimited. Does not implicitly {@link protos.args.MongoReadArgs.verify|verify} messages.
             * @param message MongoReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IMongoReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MongoReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MongoReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.MongoReadArgs;

            /**
             * Decodes a MongoReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MongoReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.MongoReadArgs;

            /**
             * Verifies a MongoReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MongoReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MongoReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.MongoReadArgs;

            /**
             * Creates a plain object from a MongoReadArgs message. Also converts values to other types if specified.
             * @param message MongoReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.MongoReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MongoReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** MQTTQoSLevel enum. */
        enum MQTTQoSLevel {
            MQTT_QOS_LEVEL_AT_MOST_ONCE = 0,
            MQTT_QOS_LEVEL_AT_LEAST_ONCE = 1,
            MQTT_QOS_LEVEL_EXACTLY_ONCE = 2
        }

        /** Properties of a MQTTTLSOptions. */
        interface IMQTTTLSOptions {

            /** MQTTTLSOptions tlsCaCert */
            tlsCaCert?: (string|null);

            /** MQTTTLSOptions tlsClientCert */
            tlsClientCert?: (string|null);

            /** MQTTTLSOptions tlsClientKey */
            tlsClientKey?: (string|null);

            /** MQTTTLSOptions tlsSkipVerify */
            tlsSkipVerify?: (boolean|null);
        }

        /** Represents a MQTTTLSOptions. */
        class MQTTTLSOptions implements IMQTTTLSOptions {

            /**
             * Constructs a new MQTTTLSOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IMQTTTLSOptions);

            /** MQTTTLSOptions tlsCaCert. */
            public tlsCaCert: string;

            /** MQTTTLSOptions tlsClientCert. */
            public tlsClientCert: string;

            /** MQTTTLSOptions tlsClientKey. */
            public tlsClientKey: string;

            /** MQTTTLSOptions tlsSkipVerify. */
            public tlsSkipVerify: boolean;

            /**
             * Creates a new MQTTTLSOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MQTTTLSOptions instance
             */
            public static create(properties?: protos.args.IMQTTTLSOptions): protos.args.MQTTTLSOptions;

            /**
             * Encodes the specified MQTTTLSOptions message. Does not implicitly {@link protos.args.MQTTTLSOptions.verify|verify} messages.
             * @param message MQTTTLSOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IMQTTTLSOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MQTTTLSOptions message, length delimited. Does not implicitly {@link protos.args.MQTTTLSOptions.verify|verify} messages.
             * @param message MQTTTLSOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IMQTTTLSOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MQTTTLSOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MQTTTLSOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.MQTTTLSOptions;

            /**
             * Decodes a MQTTTLSOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MQTTTLSOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.MQTTTLSOptions;

            /**
             * Verifies a MQTTTLSOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MQTTTLSOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MQTTTLSOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.args.MQTTTLSOptions;

            /**
             * Creates a plain object from a MQTTTLSOptions message. Also converts values to other types if specified.
             * @param message MQTTTLSOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.MQTTTLSOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MQTTTLSOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MQTTConn. */
        interface IMQTTConn {

            /** MQTTConn address */
            address?: (string|null);

            /** MQTTConn connTimeoutSeconds */
            connTimeoutSeconds?: (number|null);

            /** MQTTConn clientId */
            clientId?: (string|null);

            /** MQTTConn qosLevel */
            qosLevel?: (protos.args.MQTTQoSLevel|null);

            /** MQTTConn tlsOptions */
            tlsOptions?: (protos.args.IMQTTTLSOptions|null);
        }

        /** Represents a MQTTConn. */
        class MQTTConn implements IMQTTConn {

            /**
             * Constructs a new MQTTConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IMQTTConn);

            /** MQTTConn address. */
            public address: string;

            /** MQTTConn connTimeoutSeconds. */
            public connTimeoutSeconds: number;

            /** MQTTConn clientId. */
            public clientId: string;

            /** MQTTConn qosLevel. */
            public qosLevel: protos.args.MQTTQoSLevel;

            /** MQTTConn tlsOptions. */
            public tlsOptions?: (protos.args.IMQTTTLSOptions|null);

            /**
             * Creates a new MQTTConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MQTTConn instance
             */
            public static create(properties?: protos.args.IMQTTConn): protos.args.MQTTConn;

            /**
             * Encodes the specified MQTTConn message. Does not implicitly {@link protos.args.MQTTConn.verify|verify} messages.
             * @param message MQTTConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IMQTTConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MQTTConn message, length delimited. Does not implicitly {@link protos.args.MQTTConn.verify|verify} messages.
             * @param message MQTTConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IMQTTConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MQTTConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MQTTConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.MQTTConn;

            /**
             * Decodes a MQTTConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MQTTConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.MQTTConn;

            /**
             * Verifies a MQTTConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MQTTConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MQTTConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.MQTTConn;

            /**
             * Creates a plain object from a MQTTConn message. Also converts values to other types if specified.
             * @param message MQTTConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.MQTTConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MQTTConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MQTTReadArgs. */
        interface IMQTTReadArgs {

            /** MQTTReadArgs topic */
            topic?: (string|null);

            /** MQTTReadArgs readTimeoutSeconds */
            readTimeoutSeconds?: (number|null);
        }

        /** Represents a MQTTReadArgs. */
        class MQTTReadArgs implements IMQTTReadArgs {

            /**
             * Constructs a new MQTTReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IMQTTReadArgs);

            /** MQTTReadArgs topic. */
            public topic: string;

            /** MQTTReadArgs readTimeoutSeconds. */
            public readTimeoutSeconds: number;

            /**
             * Creates a new MQTTReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MQTTReadArgs instance
             */
            public static create(properties?: protos.args.IMQTTReadArgs): protos.args.MQTTReadArgs;

            /**
             * Encodes the specified MQTTReadArgs message. Does not implicitly {@link protos.args.MQTTReadArgs.verify|verify} messages.
             * @param message MQTTReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IMQTTReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MQTTReadArgs message, length delimited. Does not implicitly {@link protos.args.MQTTReadArgs.verify|verify} messages.
             * @param message MQTTReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IMQTTReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MQTTReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MQTTReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.MQTTReadArgs;

            /**
             * Decodes a MQTTReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MQTTReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.MQTTReadArgs;

            /**
             * Verifies a MQTTReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MQTTReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MQTTReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.MQTTReadArgs;

            /**
             * Creates a plain object from a MQTTReadArgs message. Also converts values to other types if specified.
             * @param message MQTTReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.MQTTReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MQTTReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MQTTWriteArgs. */
        interface IMQTTWriteArgs {

            /** MQTTWriteArgs topic */
            topic?: (string|null);

            /** MQTTWriteArgs writeTimeoutSeconds */
            writeTimeoutSeconds?: (number|null);
        }

        /** Represents a MQTTWriteArgs. */
        class MQTTWriteArgs implements IMQTTWriteArgs {

            /**
             * Constructs a new MQTTWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IMQTTWriteArgs);

            /** MQTTWriteArgs topic. */
            public topic: string;

            /** MQTTWriteArgs writeTimeoutSeconds. */
            public writeTimeoutSeconds: number;

            /**
             * Creates a new MQTTWriteArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MQTTWriteArgs instance
             */
            public static create(properties?: protos.args.IMQTTWriteArgs): protos.args.MQTTWriteArgs;

            /**
             * Encodes the specified MQTTWriteArgs message. Does not implicitly {@link protos.args.MQTTWriteArgs.verify|verify} messages.
             * @param message MQTTWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IMQTTWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MQTTWriteArgs message, length delimited. Does not implicitly {@link protos.args.MQTTWriteArgs.verify|verify} messages.
             * @param message MQTTWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IMQTTWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MQTTWriteArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MQTTWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.MQTTWriteArgs;

            /**
             * Decodes a MQTTWriteArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MQTTWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.MQTTWriteArgs;

            /**
             * Verifies a MQTTWriteArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MQTTWriteArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MQTTWriteArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.MQTTWriteArgs;

            /**
             * Creates a plain object from a MQTTWriteArgs message. Also converts values to other types if specified.
             * @param message MQTTWriteArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.MQTTWriteArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MQTTWriteArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NatsConn. */
        interface INatsConn {

            /** NatsConn dsn */
            dsn?: (string|null);

            /** NatsConn userCredentials */
            userCredentials?: (string|null);

            /** NatsConn tlsOptions */
            tlsOptions?: (protos.args.INatsTLSOptions|null);

            /** NatsConn nkey */
            nkey?: (string|null);
        }

        /** Represents a NatsConn. */
        class NatsConn implements INatsConn {

            /**
             * Constructs a new NatsConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.INatsConn);

            /** NatsConn dsn. */
            public dsn: string;

            /** NatsConn userCredentials. */
            public userCredentials: string;

            /** NatsConn tlsOptions. */
            public tlsOptions?: (protos.args.INatsTLSOptions|null);

            /** NatsConn nkey. */
            public nkey: string;

            /**
             * Creates a new NatsConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NatsConn instance
             */
            public static create(properties?: protos.args.INatsConn): protos.args.NatsConn;

            /**
             * Encodes the specified NatsConn message. Does not implicitly {@link protos.args.NatsConn.verify|verify} messages.
             * @param message NatsConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.INatsConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NatsConn message, length delimited. Does not implicitly {@link protos.args.NatsConn.verify|verify} messages.
             * @param message NatsConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.INatsConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NatsConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NatsConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.NatsConn;

            /**
             * Decodes a NatsConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NatsConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.NatsConn;

            /**
             * Verifies a NatsConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NatsConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NatsConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.NatsConn;

            /**
             * Creates a plain object from a NatsConn message. Also converts values to other types if specified.
             * @param message NatsConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.NatsConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NatsConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NatsTLSOptions. */
        interface INatsTLSOptions {

            /** NatsTLSOptions tlsSkipVerify */
            tlsSkipVerify?: (boolean|null);

            /** NatsTLSOptions tlsCaCert */
            tlsCaCert?: (string|null);

            /** NatsTLSOptions tlsClientCert */
            tlsClientCert?: (string|null);

            /** NatsTLSOptions tlsClientKey */
            tlsClientKey?: (string|null);

            /** NatsTLSOptions useTls */
            useTls?: (boolean|null);
        }

        /** Represents a NatsTLSOptions. */
        class NatsTLSOptions implements INatsTLSOptions {

            /**
             * Constructs a new NatsTLSOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.INatsTLSOptions);

            /** NatsTLSOptions tlsSkipVerify. */
            public tlsSkipVerify: boolean;

            /** NatsTLSOptions tlsCaCert. */
            public tlsCaCert: string;

            /** NatsTLSOptions tlsClientCert. */
            public tlsClientCert: string;

            /** NatsTLSOptions tlsClientKey. */
            public tlsClientKey: string;

            /** NatsTLSOptions useTls. */
            public useTls: boolean;

            /**
             * Creates a new NatsTLSOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NatsTLSOptions instance
             */
            public static create(properties?: protos.args.INatsTLSOptions): protos.args.NatsTLSOptions;

            /**
             * Encodes the specified NatsTLSOptions message. Does not implicitly {@link protos.args.NatsTLSOptions.verify|verify} messages.
             * @param message NatsTLSOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.INatsTLSOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NatsTLSOptions message, length delimited. Does not implicitly {@link protos.args.NatsTLSOptions.verify|verify} messages.
             * @param message NatsTLSOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.INatsTLSOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NatsTLSOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NatsTLSOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.NatsTLSOptions;

            /**
             * Decodes a NatsTLSOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NatsTLSOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.NatsTLSOptions;

            /**
             * Verifies a NatsTLSOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NatsTLSOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NatsTLSOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.args.NatsTLSOptions;

            /**
             * Creates a plain object from a NatsTLSOptions message. Also converts values to other types if specified.
             * @param message NatsTLSOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.NatsTLSOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NatsTLSOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NatsReadArgs. */
        interface INatsReadArgs {

            /** NatsReadArgs subject */
            subject?: (string|null);
        }

        /** Represents a NatsReadArgs. */
        class NatsReadArgs implements INatsReadArgs {

            /**
             * Constructs a new NatsReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.INatsReadArgs);

            /** NatsReadArgs subject. */
            public subject: string;

            /**
             * Creates a new NatsReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NatsReadArgs instance
             */
            public static create(properties?: protos.args.INatsReadArgs): protos.args.NatsReadArgs;

            /**
             * Encodes the specified NatsReadArgs message. Does not implicitly {@link protos.args.NatsReadArgs.verify|verify} messages.
             * @param message NatsReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.INatsReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NatsReadArgs message, length delimited. Does not implicitly {@link protos.args.NatsReadArgs.verify|verify} messages.
             * @param message NatsReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.INatsReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NatsReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NatsReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.NatsReadArgs;

            /**
             * Decodes a NatsReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NatsReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.NatsReadArgs;

            /**
             * Verifies a NatsReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NatsReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NatsReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.NatsReadArgs;

            /**
             * Creates a plain object from a NatsReadArgs message. Also converts values to other types if specified.
             * @param message NatsReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.NatsReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NatsReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NatsWriteArgs. */
        interface INatsWriteArgs {

            /** NatsWriteArgs subject */
            subject?: (string|null);
        }

        /** Represents a NatsWriteArgs. */
        class NatsWriteArgs implements INatsWriteArgs {

            /**
             * Constructs a new NatsWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.INatsWriteArgs);

            /** NatsWriteArgs subject. */
            public subject: string;

            /**
             * Creates a new NatsWriteArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NatsWriteArgs instance
             */
            public static create(properties?: protos.args.INatsWriteArgs): protos.args.NatsWriteArgs;

            /**
             * Encodes the specified NatsWriteArgs message. Does not implicitly {@link protos.args.NatsWriteArgs.verify|verify} messages.
             * @param message NatsWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.INatsWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NatsWriteArgs message, length delimited. Does not implicitly {@link protos.args.NatsWriteArgs.verify|verify} messages.
             * @param message NatsWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.INatsWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NatsWriteArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NatsWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.NatsWriteArgs;

            /**
             * Decodes a NatsWriteArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NatsWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.NatsWriteArgs;

            /**
             * Verifies a NatsWriteArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NatsWriteArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NatsWriteArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.NatsWriteArgs;

            /**
             * Creates a plain object from a NatsWriteArgs message. Also converts values to other types if specified.
             * @param message NatsWriteArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.NatsWriteArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NatsWriteArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NatsJetstreamTLSOptions. */
        interface INatsJetstreamTLSOptions {

            /** NatsJetstreamTLSOptions tlsCaCert */
            tlsCaCert?: (string|null);

            /** NatsJetstreamTLSOptions tlsClientCert */
            tlsClientCert?: (string|null);

            /** NatsJetstreamTLSOptions tlsClientKey */
            tlsClientKey?: (string|null);

            /** NatsJetstreamTLSOptions tlsSkipVerify */
            tlsSkipVerify?: (boolean|null);

            /** NatsJetstreamTLSOptions useTls */
            useTls?: (boolean|null);
        }

        /** Represents a NatsJetstreamTLSOptions. */
        class NatsJetstreamTLSOptions implements INatsJetstreamTLSOptions {

            /**
             * Constructs a new NatsJetstreamTLSOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.INatsJetstreamTLSOptions);

            /** NatsJetstreamTLSOptions tlsCaCert. */
            public tlsCaCert: string;

            /** NatsJetstreamTLSOptions tlsClientCert. */
            public tlsClientCert: string;

            /** NatsJetstreamTLSOptions tlsClientKey. */
            public tlsClientKey: string;

            /** NatsJetstreamTLSOptions tlsSkipVerify. */
            public tlsSkipVerify: boolean;

            /** NatsJetstreamTLSOptions useTls. */
            public useTls: boolean;

            /**
             * Creates a new NatsJetstreamTLSOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NatsJetstreamTLSOptions instance
             */
            public static create(properties?: protos.args.INatsJetstreamTLSOptions): protos.args.NatsJetstreamTLSOptions;

            /**
             * Encodes the specified NatsJetstreamTLSOptions message. Does not implicitly {@link protos.args.NatsJetstreamTLSOptions.verify|verify} messages.
             * @param message NatsJetstreamTLSOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.INatsJetstreamTLSOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NatsJetstreamTLSOptions message, length delimited. Does not implicitly {@link protos.args.NatsJetstreamTLSOptions.verify|verify} messages.
             * @param message NatsJetstreamTLSOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.INatsJetstreamTLSOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NatsJetstreamTLSOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NatsJetstreamTLSOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.NatsJetstreamTLSOptions;

            /**
             * Decodes a NatsJetstreamTLSOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NatsJetstreamTLSOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.NatsJetstreamTLSOptions;

            /**
             * Verifies a NatsJetstreamTLSOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NatsJetstreamTLSOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NatsJetstreamTLSOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.args.NatsJetstreamTLSOptions;

            /**
             * Creates a plain object from a NatsJetstreamTLSOptions message. Also converts values to other types if specified.
             * @param message NatsJetstreamTLSOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.NatsJetstreamTLSOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NatsJetstreamTLSOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NatsJetstreamConn. */
        interface INatsJetstreamConn {

            /** NatsJetstreamConn dsn */
            dsn?: (string|null);

            /** NatsJetstreamConn userCredentials */
            userCredentials?: (string|null);

            /** NatsJetstreamConn clientId */
            clientId?: (string|null);

            /** NatsJetstreamConn tlsOptions */
            tlsOptions?: (protos.args.INatsJetstreamTLSOptions|null);

            /** NatsJetstreamConn nkey */
            nkey?: (string|null);
        }

        /** Represents a NatsJetstreamConn. */
        class NatsJetstreamConn implements INatsJetstreamConn {

            /**
             * Constructs a new NatsJetstreamConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.INatsJetstreamConn);

            /** NatsJetstreamConn dsn. */
            public dsn: string;

            /** NatsJetstreamConn userCredentials. */
            public userCredentials: string;

            /** NatsJetstreamConn clientId. */
            public clientId: string;

            /** NatsJetstreamConn tlsOptions. */
            public tlsOptions?: (protos.args.INatsJetstreamTLSOptions|null);

            /** NatsJetstreamConn nkey. */
            public nkey: string;

            /**
             * Creates a new NatsJetstreamConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NatsJetstreamConn instance
             */
            public static create(properties?: protos.args.INatsJetstreamConn): protos.args.NatsJetstreamConn;

            /**
             * Encodes the specified NatsJetstreamConn message. Does not implicitly {@link protos.args.NatsJetstreamConn.verify|verify} messages.
             * @param message NatsJetstreamConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.INatsJetstreamConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NatsJetstreamConn message, length delimited. Does not implicitly {@link protos.args.NatsJetstreamConn.verify|verify} messages.
             * @param message NatsJetstreamConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.INatsJetstreamConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NatsJetstreamConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NatsJetstreamConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.NatsJetstreamConn;

            /**
             * Decodes a NatsJetstreamConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NatsJetstreamConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.NatsJetstreamConn;

            /**
             * Verifies a NatsJetstreamConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NatsJetstreamConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NatsJetstreamConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.NatsJetstreamConn;

            /**
             * Creates a plain object from a NatsJetstreamConn message. Also converts values to other types if specified.
             * @param message NatsJetstreamConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.NatsJetstreamConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NatsJetstreamConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NatsJetstreamReadArgs. */
        interface INatsJetstreamReadArgs {

            /** NatsJetstreamReadArgs stream */
            stream?: (string|null);

            /** NatsJetstreamReadArgs consumerName */
            consumerName?: (string|null);

            /** NatsJetstreamReadArgs createDurableConsumer */
            createDurableConsumer?: (boolean|null);

            /** NatsJetstreamReadArgs existingDurableConsumer */
            existingDurableConsumer?: (boolean|null);

            /** NatsJetstreamReadArgs keepConsumer */
            keepConsumer?: (boolean|null);

            /** NatsJetstreamReadArgs consumerStartSequence */
            consumerStartSequence?: (number|Long|null);

            /** NatsJetstreamReadArgs consumerStartTime */
            consumerStartTime?: (string|null);

            /** NatsJetstreamReadArgs consumerFilterSubject */
            consumerFilterSubject?: (string|null);
        }

        /** Represents a NatsJetstreamReadArgs. */
        class NatsJetstreamReadArgs implements INatsJetstreamReadArgs {

            /**
             * Constructs a new NatsJetstreamReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.INatsJetstreamReadArgs);

            /** NatsJetstreamReadArgs stream. */
            public stream: string;

            /** NatsJetstreamReadArgs consumerName. */
            public consumerName: string;

            /** NatsJetstreamReadArgs createDurableConsumer. */
            public createDurableConsumer: boolean;

            /** NatsJetstreamReadArgs existingDurableConsumer. */
            public existingDurableConsumer: boolean;

            /** NatsJetstreamReadArgs keepConsumer. */
            public keepConsumer: boolean;

            /** NatsJetstreamReadArgs consumerStartSequence. */
            public consumerStartSequence: (number|Long);

            /** NatsJetstreamReadArgs consumerStartTime. */
            public consumerStartTime: string;

            /** NatsJetstreamReadArgs consumerFilterSubject. */
            public consumerFilterSubject: string;

            /**
             * Creates a new NatsJetstreamReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NatsJetstreamReadArgs instance
             */
            public static create(properties?: protos.args.INatsJetstreamReadArgs): protos.args.NatsJetstreamReadArgs;

            /**
             * Encodes the specified NatsJetstreamReadArgs message. Does not implicitly {@link protos.args.NatsJetstreamReadArgs.verify|verify} messages.
             * @param message NatsJetstreamReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.INatsJetstreamReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NatsJetstreamReadArgs message, length delimited. Does not implicitly {@link protos.args.NatsJetstreamReadArgs.verify|verify} messages.
             * @param message NatsJetstreamReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.INatsJetstreamReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NatsJetstreamReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NatsJetstreamReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.NatsJetstreamReadArgs;

            /**
             * Decodes a NatsJetstreamReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NatsJetstreamReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.NatsJetstreamReadArgs;

            /**
             * Verifies a NatsJetstreamReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NatsJetstreamReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NatsJetstreamReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.NatsJetstreamReadArgs;

            /**
             * Creates a plain object from a NatsJetstreamReadArgs message. Also converts values to other types if specified.
             * @param message NatsJetstreamReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.NatsJetstreamReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NatsJetstreamReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NatsJetstreamWriteArgs. */
        interface INatsJetstreamWriteArgs {

            /** NatsJetstreamWriteArgs subject */
            subject?: (string|null);
        }

        /** Represents a NatsJetstreamWriteArgs. */
        class NatsJetstreamWriteArgs implements INatsJetstreamWriteArgs {

            /**
             * Constructs a new NatsJetstreamWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.INatsJetstreamWriteArgs);

            /** NatsJetstreamWriteArgs subject. */
            public subject: string;

            /**
             * Creates a new NatsJetstreamWriteArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NatsJetstreamWriteArgs instance
             */
            public static create(properties?: protos.args.INatsJetstreamWriteArgs): protos.args.NatsJetstreamWriteArgs;

            /**
             * Encodes the specified NatsJetstreamWriteArgs message. Does not implicitly {@link protos.args.NatsJetstreamWriteArgs.verify|verify} messages.
             * @param message NatsJetstreamWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.INatsJetstreamWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NatsJetstreamWriteArgs message, length delimited. Does not implicitly {@link protos.args.NatsJetstreamWriteArgs.verify|verify} messages.
             * @param message NatsJetstreamWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.INatsJetstreamWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NatsJetstreamWriteArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NatsJetstreamWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.NatsJetstreamWriteArgs;

            /**
             * Decodes a NatsJetstreamWriteArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NatsJetstreamWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.NatsJetstreamWriteArgs;

            /**
             * Verifies a NatsJetstreamWriteArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NatsJetstreamWriteArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NatsJetstreamWriteArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.NatsJetstreamWriteArgs;

            /**
             * Creates a plain object from a NatsJetstreamWriteArgs message. Also converts values to other types if specified.
             * @param message NatsJetstreamWriteArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.NatsJetstreamWriteArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NatsJetstreamWriteArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NatsStreamingTLSOptions. */
        interface INatsStreamingTLSOptions {

            /** NatsStreamingTLSOptions tlsCaCert */
            tlsCaCert?: (string|null);

            /** NatsStreamingTLSOptions tlsClientCert */
            tlsClientCert?: (string|null);

            /** NatsStreamingTLSOptions tlsClientKey */
            tlsClientKey?: (string|null);

            /** NatsStreamingTLSOptions tlsSkipVerify */
            tlsSkipVerify?: (boolean|null);

            /** NatsStreamingTLSOptions useTls */
            useTls?: (boolean|null);
        }

        /** Represents a NatsStreamingTLSOptions. */
        class NatsStreamingTLSOptions implements INatsStreamingTLSOptions {

            /**
             * Constructs a new NatsStreamingTLSOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.INatsStreamingTLSOptions);

            /** NatsStreamingTLSOptions tlsCaCert. */
            public tlsCaCert: string;

            /** NatsStreamingTLSOptions tlsClientCert. */
            public tlsClientCert: string;

            /** NatsStreamingTLSOptions tlsClientKey. */
            public tlsClientKey: string;

            /** NatsStreamingTLSOptions tlsSkipVerify. */
            public tlsSkipVerify: boolean;

            /** NatsStreamingTLSOptions useTls. */
            public useTls: boolean;

            /**
             * Creates a new NatsStreamingTLSOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NatsStreamingTLSOptions instance
             */
            public static create(properties?: protos.args.INatsStreamingTLSOptions): protos.args.NatsStreamingTLSOptions;

            /**
             * Encodes the specified NatsStreamingTLSOptions message. Does not implicitly {@link protos.args.NatsStreamingTLSOptions.verify|verify} messages.
             * @param message NatsStreamingTLSOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.INatsStreamingTLSOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NatsStreamingTLSOptions message, length delimited. Does not implicitly {@link protos.args.NatsStreamingTLSOptions.verify|verify} messages.
             * @param message NatsStreamingTLSOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.INatsStreamingTLSOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NatsStreamingTLSOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NatsStreamingTLSOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.NatsStreamingTLSOptions;

            /**
             * Decodes a NatsStreamingTLSOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NatsStreamingTLSOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.NatsStreamingTLSOptions;

            /**
             * Verifies a NatsStreamingTLSOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NatsStreamingTLSOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NatsStreamingTLSOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.args.NatsStreamingTLSOptions;

            /**
             * Creates a plain object from a NatsStreamingTLSOptions message. Also converts values to other types if specified.
             * @param message NatsStreamingTLSOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.NatsStreamingTLSOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NatsStreamingTLSOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NatsStreamingConn. */
        interface INatsStreamingConn {

            /** NatsStreamingConn dsn */
            dsn?: (string|null);

            /** NatsStreamingConn userCredentials */
            userCredentials?: (string|null);

            /** NatsStreamingConn clusterId */
            clusterId?: (string|null);

            /** NatsStreamingConn clientId */
            clientId?: (string|null);

            /** NatsStreamingConn tlsOptions */
            tlsOptions?: (protos.args.INatsStreamingTLSOptions|null);
        }

        /** Represents a NatsStreamingConn. */
        class NatsStreamingConn implements INatsStreamingConn {

            /**
             * Constructs a new NatsStreamingConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.INatsStreamingConn);

            /** NatsStreamingConn dsn. */
            public dsn: string;

            /** NatsStreamingConn userCredentials. */
            public userCredentials: string;

            /** NatsStreamingConn clusterId. */
            public clusterId: string;

            /** NatsStreamingConn clientId. */
            public clientId: string;

            /** NatsStreamingConn tlsOptions. */
            public tlsOptions?: (protos.args.INatsStreamingTLSOptions|null);

            /**
             * Creates a new NatsStreamingConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NatsStreamingConn instance
             */
            public static create(properties?: protos.args.INatsStreamingConn): protos.args.NatsStreamingConn;

            /**
             * Encodes the specified NatsStreamingConn message. Does not implicitly {@link protos.args.NatsStreamingConn.verify|verify} messages.
             * @param message NatsStreamingConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.INatsStreamingConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NatsStreamingConn message, length delimited. Does not implicitly {@link protos.args.NatsStreamingConn.verify|verify} messages.
             * @param message NatsStreamingConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.INatsStreamingConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NatsStreamingConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NatsStreamingConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.NatsStreamingConn;

            /**
             * Decodes a NatsStreamingConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NatsStreamingConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.NatsStreamingConn;

            /**
             * Verifies a NatsStreamingConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NatsStreamingConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NatsStreamingConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.NatsStreamingConn;

            /**
             * Creates a plain object from a NatsStreamingConn message. Also converts values to other types if specified.
             * @param message NatsStreamingConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.NatsStreamingConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NatsStreamingConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NatsStreamingReadArgs. */
        interface INatsStreamingReadArgs {

            /** NatsStreamingReadArgs channel */
            channel?: (string|null);

            /** NatsStreamingReadArgs durableName */
            durableName?: (string|null);

            /** NatsStreamingReadArgs readLastAvailable */
            readLastAvailable?: (boolean|null);

            /** NatsStreamingReadArgs readSequenceNumber */
            readSequenceNumber?: (number|null);

            /** NatsStreamingReadArgs readSince */
            readSince?: (string|null);

            /** NatsStreamingReadArgs readAll */
            readAll?: (boolean|null);
        }

        /** Represents a NatsStreamingReadArgs. */
        class NatsStreamingReadArgs implements INatsStreamingReadArgs {

            /**
             * Constructs a new NatsStreamingReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.INatsStreamingReadArgs);

            /** NatsStreamingReadArgs channel. */
            public channel: string;

            /** NatsStreamingReadArgs durableName. */
            public durableName: string;

            /** NatsStreamingReadArgs readLastAvailable. */
            public readLastAvailable: boolean;

            /** NatsStreamingReadArgs readSequenceNumber. */
            public readSequenceNumber: number;

            /** NatsStreamingReadArgs readSince. */
            public readSince: string;

            /** NatsStreamingReadArgs readAll. */
            public readAll: boolean;

            /**
             * Creates a new NatsStreamingReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NatsStreamingReadArgs instance
             */
            public static create(properties?: protos.args.INatsStreamingReadArgs): protos.args.NatsStreamingReadArgs;

            /**
             * Encodes the specified NatsStreamingReadArgs message. Does not implicitly {@link protos.args.NatsStreamingReadArgs.verify|verify} messages.
             * @param message NatsStreamingReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.INatsStreamingReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NatsStreamingReadArgs message, length delimited. Does not implicitly {@link protos.args.NatsStreamingReadArgs.verify|verify} messages.
             * @param message NatsStreamingReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.INatsStreamingReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NatsStreamingReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NatsStreamingReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.NatsStreamingReadArgs;

            /**
             * Decodes a NatsStreamingReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NatsStreamingReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.NatsStreamingReadArgs;

            /**
             * Verifies a NatsStreamingReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NatsStreamingReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NatsStreamingReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.NatsStreamingReadArgs;

            /**
             * Creates a plain object from a NatsStreamingReadArgs message. Also converts values to other types if specified.
             * @param message NatsStreamingReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.NatsStreamingReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NatsStreamingReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NatsStreamingWriteArgs. */
        interface INatsStreamingWriteArgs {

            /** NatsStreamingWriteArgs channel */
            channel?: (string|null);
        }

        /** Represents a NatsStreamingWriteArgs. */
        class NatsStreamingWriteArgs implements INatsStreamingWriteArgs {

            /**
             * Constructs a new NatsStreamingWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.INatsStreamingWriteArgs);

            /** NatsStreamingWriteArgs channel. */
            public channel: string;

            /**
             * Creates a new NatsStreamingWriteArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NatsStreamingWriteArgs instance
             */
            public static create(properties?: protos.args.INatsStreamingWriteArgs): protos.args.NatsStreamingWriteArgs;

            /**
             * Encodes the specified NatsStreamingWriteArgs message. Does not implicitly {@link protos.args.NatsStreamingWriteArgs.verify|verify} messages.
             * @param message NatsStreamingWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.INatsStreamingWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NatsStreamingWriteArgs message, length delimited. Does not implicitly {@link protos.args.NatsStreamingWriteArgs.verify|verify} messages.
             * @param message NatsStreamingWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.INatsStreamingWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NatsStreamingWriteArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NatsStreamingWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.NatsStreamingWriteArgs;

            /**
             * Decodes a NatsStreamingWriteArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NatsStreamingWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.NatsStreamingWriteArgs;

            /**
             * Verifies a NatsStreamingWriteArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NatsStreamingWriteArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NatsStreamingWriteArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.NatsStreamingWriteArgs;

            /**
             * Creates a plain object from a NatsStreamingWriteArgs message. Also converts values to other types if specified.
             * @param message NatsStreamingWriteArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.NatsStreamingWriteArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NatsStreamingWriteArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NSQConn. */
        interface INSQConn {

            /** NSQConn nsqdAddress */
            nsqdAddress?: (string|null);

            /** NSQConn lookupdAddress */
            lookupdAddress?: (string|null);

            /** NSQConn useTls */
            useTls?: (boolean|null);

            /** NSQConn tlsSkipVerify */
            tlsSkipVerify?: (boolean|null);

            /** NSQConn tlsCaCert */
            tlsCaCert?: (string|null);

            /** NSQConn tlsClientCert */
            tlsClientCert?: (string|null);

            /** NSQConn tlsClientKey */
            tlsClientKey?: (string|null);

            /** NSQConn authSecret */
            authSecret?: (string|null);

            /** NSQConn clientId */
            clientId?: (string|null);
        }

        /** Represents a NSQConn. */
        class NSQConn implements INSQConn {

            /**
             * Constructs a new NSQConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.INSQConn);

            /** NSQConn nsqdAddress. */
            public nsqdAddress: string;

            /** NSQConn lookupdAddress. */
            public lookupdAddress: string;

            /** NSQConn useTls. */
            public useTls: boolean;

            /** NSQConn tlsSkipVerify. */
            public tlsSkipVerify: boolean;

            /** NSQConn tlsCaCert. */
            public tlsCaCert: string;

            /** NSQConn tlsClientCert. */
            public tlsClientCert: string;

            /** NSQConn tlsClientKey. */
            public tlsClientKey: string;

            /** NSQConn authSecret. */
            public authSecret: string;

            /** NSQConn clientId. */
            public clientId: string;

            /**
             * Creates a new NSQConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NSQConn instance
             */
            public static create(properties?: protos.args.INSQConn): protos.args.NSQConn;

            /**
             * Encodes the specified NSQConn message. Does not implicitly {@link protos.args.NSQConn.verify|verify} messages.
             * @param message NSQConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.INSQConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NSQConn message, length delimited. Does not implicitly {@link protos.args.NSQConn.verify|verify} messages.
             * @param message NSQConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.INSQConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NSQConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NSQConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.NSQConn;

            /**
             * Decodes a NSQConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NSQConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.NSQConn;

            /**
             * Verifies a NSQConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NSQConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NSQConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.NSQConn;

            /**
             * Creates a plain object from a NSQConn message. Also converts values to other types if specified.
             * @param message NSQConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.NSQConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NSQConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NSQReadArgs. */
        interface INSQReadArgs {

            /** NSQReadArgs topic */
            topic?: (string|null);

            /** NSQReadArgs channel */
            channel?: (string|null);
        }

        /** Represents a NSQReadArgs. */
        class NSQReadArgs implements INSQReadArgs {

            /**
             * Constructs a new NSQReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.INSQReadArgs);

            /** NSQReadArgs topic. */
            public topic: string;

            /** NSQReadArgs channel. */
            public channel: string;

            /**
             * Creates a new NSQReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NSQReadArgs instance
             */
            public static create(properties?: protos.args.INSQReadArgs): protos.args.NSQReadArgs;

            /**
             * Encodes the specified NSQReadArgs message. Does not implicitly {@link protos.args.NSQReadArgs.verify|verify} messages.
             * @param message NSQReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.INSQReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NSQReadArgs message, length delimited. Does not implicitly {@link protos.args.NSQReadArgs.verify|verify} messages.
             * @param message NSQReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.INSQReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NSQReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NSQReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.NSQReadArgs;

            /**
             * Decodes a NSQReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NSQReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.NSQReadArgs;

            /**
             * Verifies a NSQReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NSQReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NSQReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.NSQReadArgs;

            /**
             * Creates a plain object from a NSQReadArgs message. Also converts values to other types if specified.
             * @param message NSQReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.NSQReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NSQReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NSQWriteArgs. */
        interface INSQWriteArgs {

            /** NSQWriteArgs topic */
            topic?: (string|null);
        }

        /** Represents a NSQWriteArgs. */
        class NSQWriteArgs implements INSQWriteArgs {

            /**
             * Constructs a new NSQWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.INSQWriteArgs);

            /** NSQWriteArgs topic. */
            public topic: string;

            /**
             * Creates a new NSQWriteArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NSQWriteArgs instance
             */
            public static create(properties?: protos.args.INSQWriteArgs): protos.args.NSQWriteArgs;

            /**
             * Encodes the specified NSQWriteArgs message. Does not implicitly {@link protos.args.NSQWriteArgs.verify|verify} messages.
             * @param message NSQWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.INSQWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NSQWriteArgs message, length delimited. Does not implicitly {@link protos.args.NSQWriteArgs.verify|verify} messages.
             * @param message NSQWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.INSQWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NSQWriteArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NSQWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.NSQWriteArgs;

            /**
             * Decodes a NSQWriteArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NSQWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.NSQWriteArgs;

            /**
             * Verifies a NSQWriteArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NSQWriteArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NSQWriteArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.NSQWriteArgs;

            /**
             * Creates a plain object from a NSQWriteArgs message. Also converts values to other types if specified.
             * @param message NSQWriteArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.NSQWriteArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NSQWriteArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PostgresConn. */
        interface IPostgresConn {

            /** PostgresConn address */
            address?: (string|null);

            /** PostgresConn port */
            port?: (number|null);

            /** PostgresConn username */
            username?: (string|null);

            /** PostgresConn password */
            password?: (string|null);

            /** PostgresConn database */
            database?: (string|null);

            /** PostgresConn useTls */
            useTls?: (boolean|null);

            /** PostgresConn tlsSkipVerify */
            tlsSkipVerify?: (boolean|null);
        }

        /** Represents a PostgresConn. */
        class PostgresConn implements IPostgresConn {

            /**
             * Constructs a new PostgresConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IPostgresConn);

            /** PostgresConn address. */
            public address: string;

            /** PostgresConn port. */
            public port: number;

            /** PostgresConn username. */
            public username: string;

            /** PostgresConn password. */
            public password: string;

            /** PostgresConn database. */
            public database: string;

            /** PostgresConn useTls. */
            public useTls: boolean;

            /** PostgresConn tlsSkipVerify. */
            public tlsSkipVerify: boolean;

            /**
             * Creates a new PostgresConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PostgresConn instance
             */
            public static create(properties?: protos.args.IPostgresConn): protos.args.PostgresConn;

            /**
             * Encodes the specified PostgresConn message. Does not implicitly {@link protos.args.PostgresConn.verify|verify} messages.
             * @param message PostgresConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IPostgresConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PostgresConn message, length delimited. Does not implicitly {@link protos.args.PostgresConn.verify|verify} messages.
             * @param message PostgresConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IPostgresConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PostgresConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PostgresConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.PostgresConn;

            /**
             * Decodes a PostgresConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PostgresConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.PostgresConn;

            /**
             * Verifies a PostgresConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PostgresConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PostgresConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.PostgresConn;

            /**
             * Creates a plain object from a PostgresConn message. Also converts values to other types if specified.
             * @param message PostgresConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.PostgresConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PostgresConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PostgresReadArgs. */
        interface IPostgresReadArgs {

            /** PostgresReadArgs replicationSlotName */
            replicationSlotName?: (string|null);

            /** PostgresReadArgs publisherName */
            publisherName?: (string|null);
        }

        /** Represents a PostgresReadArgs. */
        class PostgresReadArgs implements IPostgresReadArgs {

            /**
             * Constructs a new PostgresReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IPostgresReadArgs);

            /** PostgresReadArgs replicationSlotName. */
            public replicationSlotName: string;

            /** PostgresReadArgs publisherName. */
            public publisherName: string;

            /**
             * Creates a new PostgresReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PostgresReadArgs instance
             */
            public static create(properties?: protos.args.IPostgresReadArgs): protos.args.PostgresReadArgs;

            /**
             * Encodes the specified PostgresReadArgs message. Does not implicitly {@link protos.args.PostgresReadArgs.verify|verify} messages.
             * @param message PostgresReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IPostgresReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PostgresReadArgs message, length delimited. Does not implicitly {@link protos.args.PostgresReadArgs.verify|verify} messages.
             * @param message PostgresReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IPostgresReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PostgresReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PostgresReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.PostgresReadArgs;

            /**
             * Decodes a PostgresReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PostgresReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.PostgresReadArgs;

            /**
             * Verifies a PostgresReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PostgresReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PostgresReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.PostgresReadArgs;

            /**
             * Creates a plain object from a PostgresReadArgs message. Also converts values to other types if specified.
             * @param message PostgresReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.PostgresReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PostgresReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** SubscriptionType enum. */
        enum SubscriptionType {
            SHARED = 0,
            EXCLUSIVE = 1,
            FAILOVER = 2,
            KEYSHARED = 3
        }

        /** SubscriptionInitialPosition enum. */
        enum SubscriptionInitialPosition {
            PULSAR_LATEST = 0,
            PULSAR_EARLIEST = 1
        }

        /** Properties of a PulsarConn. */
        interface IPulsarConn {

            /** PulsarConn dsn */
            dsn?: (string|null);

            /** PulsarConn connectTimeoutSeconds */
            connectTimeoutSeconds?: (number|null);

            /** PulsarConn tlsSkipVerify */
            tlsSkipVerify?: (boolean|null);

            /** PulsarConn tlsClientCert */
            tlsClientCert?: (string|null);

            /** PulsarConn tlsClientKey */
            tlsClientKey?: (string|null);

            /** PulsarConn token */
            token?: (string|null);

            /** PulsarConn listenerName */
            listenerName?: (string|null);
        }

        /** Represents a PulsarConn. */
        class PulsarConn implements IPulsarConn {

            /**
             * Constructs a new PulsarConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IPulsarConn);

            /** PulsarConn dsn. */
            public dsn: string;

            /** PulsarConn connectTimeoutSeconds. */
            public connectTimeoutSeconds: number;

            /** PulsarConn tlsSkipVerify. */
            public tlsSkipVerify: boolean;

            /** PulsarConn tlsClientCert. */
            public tlsClientCert: string;

            /** PulsarConn tlsClientKey. */
            public tlsClientKey: string;

            /** PulsarConn token. */
            public token: string;

            /** PulsarConn listenerName. */
            public listenerName: string;

            /**
             * Creates a new PulsarConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PulsarConn instance
             */
            public static create(properties?: protos.args.IPulsarConn): protos.args.PulsarConn;

            /**
             * Encodes the specified PulsarConn message. Does not implicitly {@link protos.args.PulsarConn.verify|verify} messages.
             * @param message PulsarConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IPulsarConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PulsarConn message, length delimited. Does not implicitly {@link protos.args.PulsarConn.verify|verify} messages.
             * @param message PulsarConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IPulsarConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PulsarConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PulsarConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.PulsarConn;

            /**
             * Decodes a PulsarConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PulsarConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.PulsarConn;

            /**
             * Verifies a PulsarConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PulsarConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PulsarConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.PulsarConn;

            /**
             * Creates a plain object from a PulsarConn message. Also converts values to other types if specified.
             * @param message PulsarConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.PulsarConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PulsarConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PulsarReadArgs. */
        interface IPulsarReadArgs {

            /** PulsarReadArgs topic */
            topic?: (string|null);

            /** PulsarReadArgs subscriptionName */
            subscriptionName?: (string|null);

            /** PulsarReadArgs subscriptionType */
            subscriptionType?: (protos.args.SubscriptionType|null);

            /** PulsarReadArgs initialPosition */
            initialPosition?: (protos.args.SubscriptionInitialPosition|null);
        }

        /** Represents a PulsarReadArgs. */
        class PulsarReadArgs implements IPulsarReadArgs {

            /**
             * Constructs a new PulsarReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IPulsarReadArgs);

            /** PulsarReadArgs topic. */
            public topic: string;

            /** PulsarReadArgs subscriptionName. */
            public subscriptionName: string;

            /** PulsarReadArgs subscriptionType. */
            public subscriptionType: protos.args.SubscriptionType;

            /** PulsarReadArgs initialPosition. */
            public initialPosition: protos.args.SubscriptionInitialPosition;

            /**
             * Creates a new PulsarReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PulsarReadArgs instance
             */
            public static create(properties?: protos.args.IPulsarReadArgs): protos.args.PulsarReadArgs;

            /**
             * Encodes the specified PulsarReadArgs message. Does not implicitly {@link protos.args.PulsarReadArgs.verify|verify} messages.
             * @param message PulsarReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IPulsarReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PulsarReadArgs message, length delimited. Does not implicitly {@link protos.args.PulsarReadArgs.verify|verify} messages.
             * @param message PulsarReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IPulsarReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PulsarReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PulsarReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.PulsarReadArgs;

            /**
             * Decodes a PulsarReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PulsarReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.PulsarReadArgs;

            /**
             * Verifies a PulsarReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PulsarReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PulsarReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.PulsarReadArgs;

            /**
             * Creates a plain object from a PulsarReadArgs message. Also converts values to other types if specified.
             * @param message PulsarReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.PulsarReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PulsarReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PulsarWriteArgs. */
        interface IPulsarWriteArgs {

            /** PulsarWriteArgs topic */
            topic?: (string|null);
        }

        /** Represents a PulsarWriteArgs. */
        class PulsarWriteArgs implements IPulsarWriteArgs {

            /**
             * Constructs a new PulsarWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IPulsarWriteArgs);

            /** PulsarWriteArgs topic. */
            public topic: string;

            /**
             * Creates a new PulsarWriteArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PulsarWriteArgs instance
             */
            public static create(properties?: protos.args.IPulsarWriteArgs): protos.args.PulsarWriteArgs;

            /**
             * Encodes the specified PulsarWriteArgs message. Does not implicitly {@link protos.args.PulsarWriteArgs.verify|verify} messages.
             * @param message PulsarWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IPulsarWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PulsarWriteArgs message, length delimited. Does not implicitly {@link protos.args.PulsarWriteArgs.verify|verify} messages.
             * @param message PulsarWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IPulsarWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PulsarWriteArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PulsarWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.PulsarWriteArgs;

            /**
             * Decodes a PulsarWriteArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PulsarWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.PulsarWriteArgs;

            /**
             * Verifies a PulsarWriteArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PulsarWriteArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PulsarWriteArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.PulsarWriteArgs;

            /**
             * Creates a plain object from a PulsarWriteArgs message. Also converts values to other types if specified.
             * @param message PulsarWriteArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.PulsarWriteArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PulsarWriteArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RabbitConn. */
        interface IRabbitConn {

            /** RabbitConn address */
            address?: (string|null);

            /** RabbitConn useTls */
            useTls?: (boolean|null);

            /** RabbitConn tlsSkipVerify */
            tlsSkipVerify?: (boolean|null);
        }

        /** Represents a RabbitConn. */
        class RabbitConn implements IRabbitConn {

            /**
             * Constructs a new RabbitConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IRabbitConn);

            /** RabbitConn address. */
            public address: string;

            /** RabbitConn useTls. */
            public useTls: boolean;

            /** RabbitConn tlsSkipVerify. */
            public tlsSkipVerify: boolean;

            /**
             * Creates a new RabbitConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RabbitConn instance
             */
            public static create(properties?: protos.args.IRabbitConn): protos.args.RabbitConn;

            /**
             * Encodes the specified RabbitConn message. Does not implicitly {@link protos.args.RabbitConn.verify|verify} messages.
             * @param message RabbitConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IRabbitConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RabbitConn message, length delimited. Does not implicitly {@link protos.args.RabbitConn.verify|verify} messages.
             * @param message RabbitConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IRabbitConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RabbitConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RabbitConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.RabbitConn;

            /**
             * Decodes a RabbitConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RabbitConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.RabbitConn;

            /**
             * Verifies a RabbitConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RabbitConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RabbitConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.RabbitConn;

            /**
             * Creates a plain object from a RabbitConn message. Also converts values to other types if specified.
             * @param message RabbitConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.RabbitConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RabbitConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RabbitReadArgs. */
        interface IRabbitReadArgs {

            /** RabbitReadArgs exchangeName */
            exchangeName?: (string|null);

            /** RabbitReadArgs queueName */
            queueName?: (string|null);

            /** RabbitReadArgs bindingKey */
            bindingKey?: (string|null);

            /** RabbitReadArgs queueExclusive */
            queueExclusive?: (boolean|null);

            /** RabbitReadArgs queueDeclare */
            queueDeclare?: (boolean|null);

            /** RabbitReadArgs queueDurable */
            queueDurable?: (boolean|null);

            /** RabbitReadArgs autoAck */
            autoAck?: (boolean|null);

            /** RabbitReadArgs consumerTag */
            consumerTag?: (string|null);

            /** RabbitReadArgs queueDelete */
            queueDelete?: (boolean|null);

            /** RabbitReadArgs queueArg */
            queueArg?: ({ [k: string]: string }|null);

            /** RabbitReadArgs excludeBindingKeyRegex */
            excludeBindingKeyRegex?: (string|null);
        }

        /** Represents a RabbitReadArgs. */
        class RabbitReadArgs implements IRabbitReadArgs {

            /**
             * Constructs a new RabbitReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IRabbitReadArgs);

            /** RabbitReadArgs exchangeName. */
            public exchangeName: string;

            /** RabbitReadArgs queueName. */
            public queueName: string;

            /** RabbitReadArgs bindingKey. */
            public bindingKey: string;

            /** RabbitReadArgs queueExclusive. */
            public queueExclusive: boolean;

            /** RabbitReadArgs queueDeclare. */
            public queueDeclare: boolean;

            /** RabbitReadArgs queueDurable. */
            public queueDurable: boolean;

            /** RabbitReadArgs autoAck. */
            public autoAck: boolean;

            /** RabbitReadArgs consumerTag. */
            public consumerTag: string;

            /** RabbitReadArgs queueDelete. */
            public queueDelete: boolean;

            /** RabbitReadArgs queueArg. */
            public queueArg: { [k: string]: string };

            /** RabbitReadArgs excludeBindingKeyRegex. */
            public excludeBindingKeyRegex: string;

            /**
             * Creates a new RabbitReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RabbitReadArgs instance
             */
            public static create(properties?: protos.args.IRabbitReadArgs): protos.args.RabbitReadArgs;

            /**
             * Encodes the specified RabbitReadArgs message. Does not implicitly {@link protos.args.RabbitReadArgs.verify|verify} messages.
             * @param message RabbitReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IRabbitReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RabbitReadArgs message, length delimited. Does not implicitly {@link protos.args.RabbitReadArgs.verify|verify} messages.
             * @param message RabbitReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IRabbitReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RabbitReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RabbitReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.RabbitReadArgs;

            /**
             * Decodes a RabbitReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RabbitReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.RabbitReadArgs;

            /**
             * Verifies a RabbitReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RabbitReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RabbitReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.RabbitReadArgs;

            /**
             * Creates a plain object from a RabbitReadArgs message. Also converts values to other types if specified.
             * @param message RabbitReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.RabbitReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RabbitReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RabbitWriteArgs. */
        interface IRabbitWriteArgs {

            /** RabbitWriteArgs exchangeName */
            exchangeName?: (string|null);

            /** RabbitWriteArgs routingKey */
            routingKey?: (string|null);

            /** RabbitWriteArgs appId */
            appId?: (string|null);

            /** RabbitWriteArgs exchangeType */
            exchangeType?: (string|null);

            /** RabbitWriteArgs exchangeDeclare */
            exchangeDeclare?: (boolean|null);

            /** RabbitWriteArgs exchangeDurable */
            exchangeDurable?: (boolean|null);

            /** RabbitWriteArgs exchangeAutoDelete */
            exchangeAutoDelete?: (boolean|null);
        }

        /** Represents a RabbitWriteArgs. */
        class RabbitWriteArgs implements IRabbitWriteArgs {

            /**
             * Constructs a new RabbitWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IRabbitWriteArgs);

            /** RabbitWriteArgs exchangeName. */
            public exchangeName: string;

            /** RabbitWriteArgs routingKey. */
            public routingKey: string;

            /** RabbitWriteArgs appId. */
            public appId: string;

            /** RabbitWriteArgs exchangeType. */
            public exchangeType: string;

            /** RabbitWriteArgs exchangeDeclare. */
            public exchangeDeclare: boolean;

            /** RabbitWriteArgs exchangeDurable. */
            public exchangeDurable: boolean;

            /** RabbitWriteArgs exchangeAutoDelete. */
            public exchangeAutoDelete: boolean;

            /**
             * Creates a new RabbitWriteArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RabbitWriteArgs instance
             */
            public static create(properties?: protos.args.IRabbitWriteArgs): protos.args.RabbitWriteArgs;

            /**
             * Encodes the specified RabbitWriteArgs message. Does not implicitly {@link protos.args.RabbitWriteArgs.verify|verify} messages.
             * @param message RabbitWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IRabbitWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RabbitWriteArgs message, length delimited. Does not implicitly {@link protos.args.RabbitWriteArgs.verify|verify} messages.
             * @param message RabbitWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IRabbitWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RabbitWriteArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RabbitWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.RabbitWriteArgs;

            /**
             * Decodes a RabbitWriteArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RabbitWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.RabbitWriteArgs;

            /**
             * Verifies a RabbitWriteArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RabbitWriteArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RabbitWriteArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.RabbitWriteArgs;

            /**
             * Creates a plain object from a RabbitWriteArgs message. Also converts values to other types if specified.
             * @param message RabbitWriteArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.RabbitWriteArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RabbitWriteArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RabbitStreamsConn. */
        interface IRabbitStreamsConn {

            /** RabbitStreamsConn dsn */
            dsn?: (string|null);

            /** RabbitStreamsConn useTls */
            useTls?: (boolean|null);

            /** RabbitStreamsConn tlsSkipVerify */
            tlsSkipVerify?: (boolean|null);

            /** RabbitStreamsConn username */
            username?: (string|null);

            /** RabbitStreamsConn password */
            password?: (string|null);

            /** RabbitStreamsConn clientName */
            clientName?: (string|null);
        }

        /** Represents a RabbitStreamsConn. */
        class RabbitStreamsConn implements IRabbitStreamsConn {

            /**
             * Constructs a new RabbitStreamsConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IRabbitStreamsConn);

            /** RabbitStreamsConn dsn. */
            public dsn: string;

            /** RabbitStreamsConn useTls. */
            public useTls: boolean;

            /** RabbitStreamsConn tlsSkipVerify. */
            public tlsSkipVerify: boolean;

            /** RabbitStreamsConn username. */
            public username: string;

            /** RabbitStreamsConn password. */
            public password: string;

            /** RabbitStreamsConn clientName. */
            public clientName: string;

            /**
             * Creates a new RabbitStreamsConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RabbitStreamsConn instance
             */
            public static create(properties?: protos.args.IRabbitStreamsConn): protos.args.RabbitStreamsConn;

            /**
             * Encodes the specified RabbitStreamsConn message. Does not implicitly {@link protos.args.RabbitStreamsConn.verify|verify} messages.
             * @param message RabbitStreamsConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IRabbitStreamsConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RabbitStreamsConn message, length delimited. Does not implicitly {@link protos.args.RabbitStreamsConn.verify|verify} messages.
             * @param message RabbitStreamsConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IRabbitStreamsConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RabbitStreamsConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RabbitStreamsConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.RabbitStreamsConn;

            /**
             * Decodes a RabbitStreamsConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RabbitStreamsConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.RabbitStreamsConn;

            /**
             * Verifies a RabbitStreamsConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RabbitStreamsConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RabbitStreamsConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.RabbitStreamsConn;

            /**
             * Creates a plain object from a RabbitStreamsConn message. Also converts values to other types if specified.
             * @param message RabbitStreamsConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.RabbitStreamsConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RabbitStreamsConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RabbitStreamsOffsetOptions. */
        interface IRabbitStreamsOffsetOptions {

            /** RabbitStreamsOffsetOptions specificOffset */
            specificOffset?: (number|Long|null);

            /** RabbitStreamsOffsetOptions lastOffset */
            lastOffset?: (boolean|null);

            /** RabbitStreamsOffsetOptions lastConsumed */
            lastConsumed?: (boolean|null);

            /** RabbitStreamsOffsetOptions firstOffset */
            firstOffset?: (boolean|null);

            /** RabbitStreamsOffsetOptions nextOffset */
            nextOffset?: (boolean|null);
        }

        /** Represents a RabbitStreamsOffsetOptions. */
        class RabbitStreamsOffsetOptions implements IRabbitStreamsOffsetOptions {

            /**
             * Constructs a new RabbitStreamsOffsetOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IRabbitStreamsOffsetOptions);

            /** RabbitStreamsOffsetOptions specificOffset. */
            public specificOffset: (number|Long);

            /** RabbitStreamsOffsetOptions lastOffset. */
            public lastOffset: boolean;

            /** RabbitStreamsOffsetOptions lastConsumed. */
            public lastConsumed: boolean;

            /** RabbitStreamsOffsetOptions firstOffset. */
            public firstOffset: boolean;

            /** RabbitStreamsOffsetOptions nextOffset. */
            public nextOffset: boolean;

            /**
             * Creates a new RabbitStreamsOffsetOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RabbitStreamsOffsetOptions instance
             */
            public static create(properties?: protos.args.IRabbitStreamsOffsetOptions): protos.args.RabbitStreamsOffsetOptions;

            /**
             * Encodes the specified RabbitStreamsOffsetOptions message. Does not implicitly {@link protos.args.RabbitStreamsOffsetOptions.verify|verify} messages.
             * @param message RabbitStreamsOffsetOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IRabbitStreamsOffsetOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RabbitStreamsOffsetOptions message, length delimited. Does not implicitly {@link protos.args.RabbitStreamsOffsetOptions.verify|verify} messages.
             * @param message RabbitStreamsOffsetOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IRabbitStreamsOffsetOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RabbitStreamsOffsetOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RabbitStreamsOffsetOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.RabbitStreamsOffsetOptions;

            /**
             * Decodes a RabbitStreamsOffsetOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RabbitStreamsOffsetOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.RabbitStreamsOffsetOptions;

            /**
             * Verifies a RabbitStreamsOffsetOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RabbitStreamsOffsetOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RabbitStreamsOffsetOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.args.RabbitStreamsOffsetOptions;

            /**
             * Creates a plain object from a RabbitStreamsOffsetOptions message. Also converts values to other types if specified.
             * @param message RabbitStreamsOffsetOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.RabbitStreamsOffsetOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RabbitStreamsOffsetOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RabbitStreamsReadArgs. */
        interface IRabbitStreamsReadArgs {

            /** RabbitStreamsReadArgs stream */
            stream?: (string|null);

            /** RabbitStreamsReadArgs declareStream */
            declareStream?: (boolean|null);

            /** RabbitStreamsReadArgs declareStreamSize */
            declareStreamSize?: (string|null);

            /** RabbitStreamsReadArgs offsetOptions */
            offsetOptions?: (protos.args.IRabbitStreamsOffsetOptions|null);
        }

        /** Represents a RabbitStreamsReadArgs. */
        class RabbitStreamsReadArgs implements IRabbitStreamsReadArgs {

            /**
             * Constructs a new RabbitStreamsReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IRabbitStreamsReadArgs);

            /** RabbitStreamsReadArgs stream. */
            public stream: string;

            /** RabbitStreamsReadArgs declareStream. */
            public declareStream: boolean;

            /** RabbitStreamsReadArgs declareStreamSize. */
            public declareStreamSize: string;

            /** RabbitStreamsReadArgs offsetOptions. */
            public offsetOptions?: (protos.args.IRabbitStreamsOffsetOptions|null);

            /**
             * Creates a new RabbitStreamsReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RabbitStreamsReadArgs instance
             */
            public static create(properties?: protos.args.IRabbitStreamsReadArgs): protos.args.RabbitStreamsReadArgs;

            /**
             * Encodes the specified RabbitStreamsReadArgs message. Does not implicitly {@link protos.args.RabbitStreamsReadArgs.verify|verify} messages.
             * @param message RabbitStreamsReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IRabbitStreamsReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RabbitStreamsReadArgs message, length delimited. Does not implicitly {@link protos.args.RabbitStreamsReadArgs.verify|verify} messages.
             * @param message RabbitStreamsReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IRabbitStreamsReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RabbitStreamsReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RabbitStreamsReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.RabbitStreamsReadArgs;

            /**
             * Decodes a RabbitStreamsReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RabbitStreamsReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.RabbitStreamsReadArgs;

            /**
             * Verifies a RabbitStreamsReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RabbitStreamsReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RabbitStreamsReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.RabbitStreamsReadArgs;

            /**
             * Creates a plain object from a RabbitStreamsReadArgs message. Also converts values to other types if specified.
             * @param message RabbitStreamsReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.RabbitStreamsReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RabbitStreamsReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RabbitStreamsWriteArgs. */
        interface IRabbitStreamsWriteArgs {

            /** RabbitStreamsWriteArgs stream */
            stream?: (string|null);

            /** RabbitStreamsWriteArgs declareStream */
            declareStream?: (boolean|null);

            /** RabbitStreamsWriteArgs declareStreamSize */
            declareStreamSize?: (string|null);
        }

        /** Represents a RabbitStreamsWriteArgs. */
        class RabbitStreamsWriteArgs implements IRabbitStreamsWriteArgs {

            /**
             * Constructs a new RabbitStreamsWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IRabbitStreamsWriteArgs);

            /** RabbitStreamsWriteArgs stream. */
            public stream: string;

            /** RabbitStreamsWriteArgs declareStream. */
            public declareStream: boolean;

            /** RabbitStreamsWriteArgs declareStreamSize. */
            public declareStreamSize: string;

            /**
             * Creates a new RabbitStreamsWriteArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RabbitStreamsWriteArgs instance
             */
            public static create(properties?: protos.args.IRabbitStreamsWriteArgs): protos.args.RabbitStreamsWriteArgs;

            /**
             * Encodes the specified RabbitStreamsWriteArgs message. Does not implicitly {@link protos.args.RabbitStreamsWriteArgs.verify|verify} messages.
             * @param message RabbitStreamsWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IRabbitStreamsWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RabbitStreamsWriteArgs message, length delimited. Does not implicitly {@link protos.args.RabbitStreamsWriteArgs.verify|verify} messages.
             * @param message RabbitStreamsWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IRabbitStreamsWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RabbitStreamsWriteArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RabbitStreamsWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.RabbitStreamsWriteArgs;

            /**
             * Decodes a RabbitStreamsWriteArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RabbitStreamsWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.RabbitStreamsWriteArgs;

            /**
             * Verifies a RabbitStreamsWriteArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RabbitStreamsWriteArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RabbitStreamsWriteArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.RabbitStreamsWriteArgs;

            /**
             * Creates a plain object from a RabbitStreamsWriteArgs message. Also converts values to other types if specified.
             * @param message RabbitStreamsWriteArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.RabbitStreamsWriteArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RabbitStreamsWriteArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RedisPubSubConn. */
        interface IRedisPubSubConn {

            /** RedisPubSubConn address */
            address?: (string|null);

            /** RedisPubSubConn username */
            username?: (string|null);

            /** RedisPubSubConn password */
            password?: (string|null);

            /** RedisPubSubConn database */
            database?: (number|null);
        }

        /** Represents a RedisPubSubConn. */
        class RedisPubSubConn implements IRedisPubSubConn {

            /**
             * Constructs a new RedisPubSubConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IRedisPubSubConn);

            /** RedisPubSubConn address. */
            public address: string;

            /** RedisPubSubConn username. */
            public username: string;

            /** RedisPubSubConn password. */
            public password: string;

            /** RedisPubSubConn database. */
            public database: number;

            /**
             * Creates a new RedisPubSubConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RedisPubSubConn instance
             */
            public static create(properties?: protos.args.IRedisPubSubConn): protos.args.RedisPubSubConn;

            /**
             * Encodes the specified RedisPubSubConn message. Does not implicitly {@link protos.args.RedisPubSubConn.verify|verify} messages.
             * @param message RedisPubSubConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IRedisPubSubConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RedisPubSubConn message, length delimited. Does not implicitly {@link protos.args.RedisPubSubConn.verify|verify} messages.
             * @param message RedisPubSubConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IRedisPubSubConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RedisPubSubConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RedisPubSubConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.RedisPubSubConn;

            /**
             * Decodes a RedisPubSubConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RedisPubSubConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.RedisPubSubConn;

            /**
             * Verifies a RedisPubSubConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RedisPubSubConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RedisPubSubConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.RedisPubSubConn;

            /**
             * Creates a plain object from a RedisPubSubConn message. Also converts values to other types if specified.
             * @param message RedisPubSubConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.RedisPubSubConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RedisPubSubConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RedisPubSubReadArgs. */
        interface IRedisPubSubReadArgs {

            /** RedisPubSubReadArgs channels */
            channels?: (string[]|null);
        }

        /** Represents a RedisPubSubReadArgs. */
        class RedisPubSubReadArgs implements IRedisPubSubReadArgs {

            /**
             * Constructs a new RedisPubSubReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IRedisPubSubReadArgs);

            /** RedisPubSubReadArgs channels. */
            public channels: string[];

            /**
             * Creates a new RedisPubSubReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RedisPubSubReadArgs instance
             */
            public static create(properties?: protos.args.IRedisPubSubReadArgs): protos.args.RedisPubSubReadArgs;

            /**
             * Encodes the specified RedisPubSubReadArgs message. Does not implicitly {@link protos.args.RedisPubSubReadArgs.verify|verify} messages.
             * @param message RedisPubSubReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IRedisPubSubReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RedisPubSubReadArgs message, length delimited. Does not implicitly {@link protos.args.RedisPubSubReadArgs.verify|verify} messages.
             * @param message RedisPubSubReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IRedisPubSubReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RedisPubSubReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RedisPubSubReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.RedisPubSubReadArgs;

            /**
             * Decodes a RedisPubSubReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RedisPubSubReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.RedisPubSubReadArgs;

            /**
             * Verifies a RedisPubSubReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RedisPubSubReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RedisPubSubReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.RedisPubSubReadArgs;

            /**
             * Creates a plain object from a RedisPubSubReadArgs message. Also converts values to other types if specified.
             * @param message RedisPubSubReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.RedisPubSubReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RedisPubSubReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RedisPubSubWriteArgs. */
        interface IRedisPubSubWriteArgs {

            /** RedisPubSubWriteArgs channels */
            channels?: (string[]|null);
        }

        /** Represents a RedisPubSubWriteArgs. */
        class RedisPubSubWriteArgs implements IRedisPubSubWriteArgs {

            /**
             * Constructs a new RedisPubSubWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IRedisPubSubWriteArgs);

            /** RedisPubSubWriteArgs channels. */
            public channels: string[];

            /**
             * Creates a new RedisPubSubWriteArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RedisPubSubWriteArgs instance
             */
            public static create(properties?: protos.args.IRedisPubSubWriteArgs): protos.args.RedisPubSubWriteArgs;

            /**
             * Encodes the specified RedisPubSubWriteArgs message. Does not implicitly {@link protos.args.RedisPubSubWriteArgs.verify|verify} messages.
             * @param message RedisPubSubWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IRedisPubSubWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RedisPubSubWriteArgs message, length delimited. Does not implicitly {@link protos.args.RedisPubSubWriteArgs.verify|verify} messages.
             * @param message RedisPubSubWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IRedisPubSubWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RedisPubSubWriteArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RedisPubSubWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.RedisPubSubWriteArgs;

            /**
             * Decodes a RedisPubSubWriteArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RedisPubSubWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.RedisPubSubWriteArgs;

            /**
             * Verifies a RedisPubSubWriteArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RedisPubSubWriteArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RedisPubSubWriteArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.RedisPubSubWriteArgs;

            /**
             * Creates a plain object from a RedisPubSubWriteArgs message. Also converts values to other types if specified.
             * @param message RedisPubSubWriteArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.RedisPubSubWriteArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RedisPubSubWriteArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** OffsetStart enum. */
        enum OffsetStart {
            LATEST = 0,
            OLDEST = 1
        }

        /** Properties of a RedisStreamsConn. */
        interface IRedisStreamsConn {

            /** RedisStreamsConn address */
            address?: (string|null);

            /** RedisStreamsConn username */
            username?: (string|null);

            /** RedisStreamsConn password */
            password?: (string|null);

            /** RedisStreamsConn database */
            database?: (number|null);
        }

        /** Represents a RedisStreamsConn. */
        class RedisStreamsConn implements IRedisStreamsConn {

            /**
             * Constructs a new RedisStreamsConn.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IRedisStreamsConn);

            /** RedisStreamsConn address. */
            public address: string;

            /** RedisStreamsConn username. */
            public username: string;

            /** RedisStreamsConn password. */
            public password: string;

            /** RedisStreamsConn database. */
            public database: number;

            /**
             * Creates a new RedisStreamsConn instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RedisStreamsConn instance
             */
            public static create(properties?: protos.args.IRedisStreamsConn): protos.args.RedisStreamsConn;

            /**
             * Encodes the specified RedisStreamsConn message. Does not implicitly {@link protos.args.RedisStreamsConn.verify|verify} messages.
             * @param message RedisStreamsConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IRedisStreamsConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RedisStreamsConn message, length delimited. Does not implicitly {@link protos.args.RedisStreamsConn.verify|verify} messages.
             * @param message RedisStreamsConn message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IRedisStreamsConn, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RedisStreamsConn message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RedisStreamsConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.RedisStreamsConn;

            /**
             * Decodes a RedisStreamsConn message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RedisStreamsConn
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.RedisStreamsConn;

            /**
             * Verifies a RedisStreamsConn message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RedisStreamsConn message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RedisStreamsConn
             */
            public static fromObject(object: { [k: string]: any }): protos.args.RedisStreamsConn;

            /**
             * Creates a plain object from a RedisStreamsConn message. Also converts values to other types if specified.
             * @param message RedisStreamsConn
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.RedisStreamsConn, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RedisStreamsConn to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CreateConsumerConfig. */
        interface ICreateConsumerConfig {

            /** CreateConsumerConfig createStreams */
            createStreams?: (boolean|null);

            /** CreateConsumerConfig recreateConsumerGroup */
            recreateConsumerGroup?: (boolean|null);

            /** CreateConsumerConfig offsetStart */
            offsetStart?: (protos.args.OffsetStart|null);
        }

        /** Represents a CreateConsumerConfig. */
        class CreateConsumerConfig implements ICreateConsumerConfig {

            /**
             * Constructs a new CreateConsumerConfig.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.ICreateConsumerConfig);

            /** CreateConsumerConfig createStreams. */
            public createStreams: boolean;

            /** CreateConsumerConfig recreateConsumerGroup. */
            public recreateConsumerGroup: boolean;

            /** CreateConsumerConfig offsetStart. */
            public offsetStart: protos.args.OffsetStart;

            /**
             * Creates a new CreateConsumerConfig instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CreateConsumerConfig instance
             */
            public static create(properties?: protos.args.ICreateConsumerConfig): protos.args.CreateConsumerConfig;

            /**
             * Encodes the specified CreateConsumerConfig message. Does not implicitly {@link protos.args.CreateConsumerConfig.verify|verify} messages.
             * @param message CreateConsumerConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.ICreateConsumerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CreateConsumerConfig message, length delimited. Does not implicitly {@link protos.args.CreateConsumerConfig.verify|verify} messages.
             * @param message CreateConsumerConfig message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.ICreateConsumerConfig, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CreateConsumerConfig message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CreateConsumerConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.CreateConsumerConfig;

            /**
             * Decodes a CreateConsumerConfig message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CreateConsumerConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.CreateConsumerConfig;

            /**
             * Verifies a CreateConsumerConfig message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CreateConsumerConfig message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CreateConsumerConfig
             */
            public static fromObject(object: { [k: string]: any }): protos.args.CreateConsumerConfig;

            /**
             * Creates a plain object from a CreateConsumerConfig message. Also converts values to other types if specified.
             * @param message CreateConsumerConfig
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.CreateConsumerConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CreateConsumerConfig to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RedisStreamsReadArgs. */
        interface IRedisStreamsReadArgs {

            /** RedisStreamsReadArgs streams */
            streams?: (string[]|null);

            /** RedisStreamsReadArgs consumerGroup */
            consumerGroup?: (string|null);

            /** RedisStreamsReadArgs consumerName */
            consumerName?: (string|null);

            /** RedisStreamsReadArgs count */
            count?: (number|null);

            /** RedisStreamsReadArgs createConsumerConfig */
            createConsumerConfig?: (protos.args.ICreateConsumerConfig|null);
        }

        /** Represents a RedisStreamsReadArgs. */
        class RedisStreamsReadArgs implements IRedisStreamsReadArgs {

            /**
             * Constructs a new RedisStreamsReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IRedisStreamsReadArgs);

            /** RedisStreamsReadArgs streams. */
            public streams: string[];

            /** RedisStreamsReadArgs consumerGroup. */
            public consumerGroup: string;

            /** RedisStreamsReadArgs consumerName. */
            public consumerName: string;

            /** RedisStreamsReadArgs count. */
            public count: number;

            /** RedisStreamsReadArgs createConsumerConfig. */
            public createConsumerConfig?: (protos.args.ICreateConsumerConfig|null);

            /**
             * Creates a new RedisStreamsReadArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RedisStreamsReadArgs instance
             */
            public static create(properties?: protos.args.IRedisStreamsReadArgs): protos.args.RedisStreamsReadArgs;

            /**
             * Encodes the specified RedisStreamsReadArgs message. Does not implicitly {@link protos.args.RedisStreamsReadArgs.verify|verify} messages.
             * @param message RedisStreamsReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IRedisStreamsReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RedisStreamsReadArgs message, length delimited. Does not implicitly {@link protos.args.RedisStreamsReadArgs.verify|verify} messages.
             * @param message RedisStreamsReadArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IRedisStreamsReadArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RedisStreamsReadArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RedisStreamsReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.RedisStreamsReadArgs;

            /**
             * Decodes a RedisStreamsReadArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RedisStreamsReadArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.RedisStreamsReadArgs;

            /**
             * Verifies a RedisStreamsReadArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RedisStreamsReadArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RedisStreamsReadArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.RedisStreamsReadArgs;

            /**
             * Creates a plain object from a RedisStreamsReadArgs message. Also converts values to other types if specified.
             * @param message RedisStreamsReadArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.RedisStreamsReadArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RedisStreamsReadArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RedisStreamsWriteArgs. */
        interface IRedisStreamsWriteArgs {

            /** RedisStreamsWriteArgs writeId */
            writeId?: (string|null);

            /** RedisStreamsWriteArgs streams */
            streams?: (string[]|null);

            /** RedisStreamsWriteArgs key */
            key?: (string|null);
        }

        /** Represents a RedisStreamsWriteArgs. */
        class RedisStreamsWriteArgs implements IRedisStreamsWriteArgs {

            /**
             * Constructs a new RedisStreamsWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IRedisStreamsWriteArgs);

            /** RedisStreamsWriteArgs writeId. */
            public writeId: string;

            /** RedisStreamsWriteArgs streams. */
            public streams: string[];

            /** RedisStreamsWriteArgs key. */
            public key: string;

            /**
             * Creates a new RedisStreamsWriteArgs instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RedisStreamsWriteArgs instance
             */
            public static create(properties?: protos.args.IRedisStreamsWriteArgs): protos.args.RedisStreamsWriteArgs;

            /**
             * Encodes the specified RedisStreamsWriteArgs message. Does not implicitly {@link protos.args.RedisStreamsWriteArgs.verify|verify} messages.
             * @param message RedisStreamsWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.args.IRedisStreamsWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RedisStreamsWriteArgs message, length delimited. Does not implicitly {@link protos.args.RedisStreamsWriteArgs.verify|verify} messages.
             * @param message RedisStreamsWriteArgs message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.args.IRedisStreamsWriteArgs, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RedisStreamsWriteArgs message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RedisStreamsWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.args.RedisStreamsWriteArgs;

            /**
             * Decodes a RedisStreamsWriteArgs message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RedisStreamsWriteArgs
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.args.RedisStreamsWriteArgs;

            /**
             * Verifies a RedisStreamsWriteArgs message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RedisStreamsWriteArgs message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RedisStreamsWriteArgs
             */
            public static fromObject(object: { [k: string]: any }): protos.args.RedisStreamsWriteArgs;

            /**
             * Creates a plain object from a RedisStreamsWriteArgs message. Also converts values to other types if specified.
             * @param message RedisStreamsWriteArgs
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.args.RedisStreamsWriteArgs, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RedisStreamsWriteArgs to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace common. */
    namespace common {

        /** Properties of a Foreman. */
        interface IForeman {

            /** Foreman authToken */
            authToken?: (string|null);

            /** Foreman plumberClusterId */
            plumberClusterId?: (string|null);

            /** Foreman teamId */
            teamId?: (string|null);
        }

        /** Represents a Foreman. */
        class Foreman implements IForeman {

            /**
             * Constructs a new Foreman.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.common.IForeman);

            /** Foreman authToken. */
            public authToken: string;

            /** Foreman plumberClusterId. */
            public plumberClusterId: string;

            /** Foreman teamId. */
            public teamId: string;

            /**
             * Creates a new Foreman instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Foreman instance
             */
            public static create(properties?: protos.common.IForeman): protos.common.Foreman;

            /**
             * Encodes the specified Foreman message. Does not implicitly {@link protos.common.Foreman.verify|verify} messages.
             * @param message Foreman message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.common.IForeman, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Foreman message, length delimited. Does not implicitly {@link protos.common.Foreman.verify|verify} messages.
             * @param message Foreman message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.common.IForeman, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Foreman message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Foreman
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.common.Foreman;

            /**
             * Decodes a Foreman message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Foreman
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.common.Foreman;

            /**
             * Verifies a Foreman message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Foreman message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Foreman
             */
            public static fromObject(object: { [k: string]: any }): protos.common.Foreman;

            /**
             * Creates a plain object from a Foreman message. Also converts values to other types if specified.
             * @param message Foreman
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.common.Foreman, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Foreman to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SourceManager. */
        interface ISourceManager {

            /** SourceManager serverToken */
            serverToken?: (string|null);

            /** SourceManager sourceId */
            sourceId?: (string|null);
        }

        /** Represents a SourceManager. */
        class SourceManager implements ISourceManager {

            /**
             * Constructs a new SourceManager.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.common.ISourceManager);

            /** SourceManager serverToken. */
            public serverToken: string;

            /** SourceManager sourceId. */
            public sourceId: string;

            /**
             * Creates a new SourceManager instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceManager instance
             */
            public static create(properties?: protos.common.ISourceManager): protos.common.SourceManager;

            /**
             * Encodes the specified SourceManager message. Does not implicitly {@link protos.common.SourceManager.verify|verify} messages.
             * @param message SourceManager message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.common.ISourceManager, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceManager message, length delimited. Does not implicitly {@link protos.common.SourceManager.verify|verify} messages.
             * @param message SourceManager message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.common.ISourceManager, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceManager message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceManager
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.common.SourceManager;

            /**
             * Decodes a SourceManager message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceManager
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.common.SourceManager;

            /**
             * Verifies a SourceManager message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceManager message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceManager
             */
            public static fromObject(object: { [k: string]: any }): protos.common.SourceManager;

            /**
             * Creates a plain object from a SourceManager message. Also converts values to other types if specified.
             * @param message SourceManager
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.common.SourceManager, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceManager to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Auth. */
        interface IAuth {

            /** Auth token */
            token?: (string|null);

            /** Auth _foreman */
            _foreman?: (protos.common.IForeman|null);

            /** Auth _sourceManager */
            _sourceManager?: (protos.common.ISourceManager|null);
        }

        /** Represents an Auth. */
        class Auth implements IAuth {

            /**
             * Constructs a new Auth.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.common.IAuth);

            /** Auth token. */
            public token: string;

            /** Auth _foreman. */
            public _foreman?: (protos.common.IForeman|null);

            /** Auth _sourceManager. */
            public _sourceManager?: (protos.common.ISourceManager|null);

            /**
             * Creates a new Auth instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Auth instance
             */
            public static create(properties?: protos.common.IAuth): protos.common.Auth;

            /**
             * Encodes the specified Auth message. Does not implicitly {@link protos.common.Auth.verify|verify} messages.
             * @param message Auth message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.common.IAuth, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Auth message, length delimited. Does not implicitly {@link protos.common.Auth.verify|verify} messages.
             * @param message Auth message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.common.IAuth, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Auth message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Auth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.common.Auth;

            /**
             * Decodes an Auth message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Auth
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.common.Auth;

            /**
             * Verifies an Auth message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Auth message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Auth
             */
            public static fromObject(object: { [k: string]: any }): protos.common.Auth;

            /**
             * Creates a plain object from an Auth message. Also converts values to other types if specified.
             * @param message Auth
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.common.Auth, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Auth to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** BackendType enum. */
        enum BackendType {
            BACKEND_TYPE_UNSET = 0,
            BACKEND_TYPE_KAFKA = 1,
            BACKEND_TYPE_RABBIT = 2,
            BACKEND_TYPE_RABBIT_STREAMS = 3,
            BACKEND_TYPE_NSQ = 4,
            BACKEND_TYPE_NATS = 5,
            BACKEND_TYPE_NATS_STREAMING = 6,
            BACKEND_TYPE_GCP_PUBSUB = 7,
            BACKEND_TYPE_AZURE_SERVICE_BUS = 8,
            BACKEND_TYPE_AZURE_EVENT_HUB = 9,
            BACKEND_TYPE_AWS_SQS = 10,
            BACKEND_TYPE_AWS_SNS = 11,
            BACKEND_TYPE_REDIS_PUBSUB = 12,
            BACKEND_TYPE_REDIS_STREAMS = 13,
            BACKEND_TYPE_ACTIVEMQ = 14,
            BACKEND_TYPE_PULSAR = 15,
            BACKEND_TYPE_MQTT = 16,
            BACKEND_TYPE_POSTGRES_CDC = 17,
            BACKEND_TYPE_MONGODB_CDC = 18,
            BACKEND_TYPE_KUBE_MQ = 19,
            BACKEND_TYPE_AWS_KINESIS = 20
        }

        /** Code enum. */
        enum Code {
            OK = 0,
            CANCELLED = 1,
            UNKNOWN = 2,
            INVALID_ARGUMENT = 3,
            DEADLINE_EXCEEDED = 4,
            NOT_FOUND = 5,
            ALREADY_EXISTS = 6,
            PERMISSION_DENIED = 7,
            UNAUTHENTICATED = 16,
            RESOURCE_EXHAUSTED = 8,
            FAILED_PRECONDITION = 9,
            ABORTED = 10,
            OUT_OF_RANGE = 11,
            UNIMPLEMENTED = 12,
            INTERNAL = 13,
            UNAVAILABLE = 14,
            DATA_LOSS = 15
        }

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (protos.common.Code|null);

            /** Status message */
            message?: (string|null);

            /** Status requestId */
            requestId?: (string|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.common.IStatus);

            /** Status code. */
            public code: protos.common.Code;

            /** Status message. */
            public message: string;

            /** Status requestId. */
            public requestId: string;

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: protos.common.IStatus): protos.common.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link protos.common.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.common.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link protos.common.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.common.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.common.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.common.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): protos.common.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.common.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Validation. */
        interface IValidation {

            /** Validation _id */
            _id?: (string|null);

            /** Validation schemaId */
            schemaId?: (string|null);

            /** Validation fields */
            fields?: (protos.common.Validation.IField[]|null);
        }

        /** Represents a Validation. */
        class Validation implements IValidation {

            /**
             * Constructs a new Validation.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.common.IValidation);

            /** Validation _id. */
            public _id: string;

            /** Validation schemaId. */
            public schemaId: string;

            /** Validation fields. */
            public fields: protos.common.Validation.IField[];

            /**
             * Creates a new Validation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Validation instance
             */
            public static create(properties?: protos.common.IValidation): protos.common.Validation;

            /**
             * Encodes the specified Validation message. Does not implicitly {@link protos.common.Validation.verify|verify} messages.
             * @param message Validation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.common.IValidation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Validation message, length delimited. Does not implicitly {@link protos.common.Validation.verify|verify} messages.
             * @param message Validation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.common.IValidation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Validation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Validation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.common.Validation;

            /**
             * Decodes a Validation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Validation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.common.Validation;

            /**
             * Verifies a Validation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Validation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Validation
             */
            public static fromObject(object: { [k: string]: any }): protos.common.Validation;

            /**
             * Creates a plain object from a Validation message. Also converts values to other types if specified.
             * @param message Validation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.common.Validation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Validation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace Validation {

            /** Properties of a Field. */
            interface IField {

                /** Field path */
                path?: (string|null);

                /** Field validationType */
                validationType?: (string|null);

                /** Field matchValue */
                matchValue?: (string|null);
            }

            /** Represents a Field. */
            class Field implements IField {

                /**
                 * Constructs a new Field.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: protos.common.Validation.IField);

                /** Field path. */
                public path: string;

                /** Field validationType. */
                public validationType: string;

                /** Field matchValue. */
                public matchValue: string;

                /**
                 * Creates a new Field instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Field instance
                 */
                public static create(properties?: protos.common.Validation.IField): protos.common.Validation.Field;

                /**
                 * Encodes the specified Field message. Does not implicitly {@link protos.common.Validation.Field.verify|verify} messages.
                 * @param message Field message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: protos.common.Validation.IField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Field message, length delimited. Does not implicitly {@link protos.common.Validation.Field.verify|verify} messages.
                 * @param message Field message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: protos.common.Validation.IField, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Field message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Field
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.common.Validation.Field;

                /**
                 * Decodes a Field message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Field
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.common.Validation.Field;

                /**
                 * Verifies a Field message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Field message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Field
                 */
                public static fromObject(object: { [k: string]: any }): protos.common.Validation.Field;

                /**
                 * Creates a plain object from a Field message. Also converts values to other types if specified.
                 * @param message Field
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: protos.common.Validation.Field, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Field to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace encoding. */
    namespace encoding {

        /** EncodeType enum. */
        enum EncodeType {
            ENCODE_TYPE_UNSET = 0,
            ENCODE_TYPE_JSONPB = 1,
            ENCODE_TYPE_AVRO = 2,
            ENCODE_TYPE_CLOUDEVENT = 3
        }

        /** DecodeType enum. */
        enum DecodeType {
            DECODE_TYPE_UNSET = 0,
            DECODE_TYPE_PROTOBUF = 1,
            DECODE_TYPE_AVRO = 2,
            DECODE_TYPE_THRIFT = 3,
            DECODE_TYPE_FLATBUFFER = 4
        }

        /** EnvelopeType enum. */
        enum EnvelopeType {
            ENVELOPE_TYPE_UNSET = 0,
            ENVELOPE_TYPE_DEEP = 1,
            ENVELOPE_TYPE_SHALLOW = 2
        }

        /** Properties of a ProtobufSettings. */
        interface IProtobufSettings {

            /** ProtobufSettings protobufRootMessage */
            protobufRootMessage?: (string|null);

            /** ProtobufSettings protobufDirs */
            protobufDirs?: (string[]|null);

            /** ProtobufSettings _protobufRootDir */
            _protobufRootDir?: (string|null);

            /** ProtobufSettings archive */
            archive?: (Uint8Array|null);

            /** ProtobufSettings _messageDescriptor */
            _messageDescriptor?: (Uint8Array|null);

            /** ProtobufSettings protobufEnvelopeType */
            protobufEnvelopeType?: (protos.encoding.EnvelopeType|null);

            /** ProtobufSettings shallowEnvelopeMessage */
            shallowEnvelopeMessage?: (string|null);

            /** ProtobufSettings shallowEnvelopeFieldNumber */
            shallowEnvelopeFieldNumber?: (number|null);

            /** ProtobufSettings _shallowEnvelopeMessageDescriptor */
            _shallowEnvelopeMessageDescriptor?: (Uint8Array|null);

            /** ProtobufSettings protobufDescriptorSet */
            protobufDescriptorSet?: (string|null);
        }

        /** Represents a ProtobufSettings. */
        class ProtobufSettings implements IProtobufSettings {

            /**
             * Constructs a new ProtobufSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.encoding.IProtobufSettings);

            /** ProtobufSettings protobufRootMessage. */
            public protobufRootMessage: string;

            /** ProtobufSettings protobufDirs. */
            public protobufDirs: string[];

            /** ProtobufSettings _protobufRootDir. */
            public _protobufRootDir: string;

            /** ProtobufSettings archive. */
            public archive: Uint8Array;

            /** ProtobufSettings _messageDescriptor. */
            public _messageDescriptor: Uint8Array;

            /** ProtobufSettings protobufEnvelopeType. */
            public protobufEnvelopeType: protos.encoding.EnvelopeType;

            /** ProtobufSettings shallowEnvelopeMessage. */
            public shallowEnvelopeMessage: string;

            /** ProtobufSettings shallowEnvelopeFieldNumber. */
            public shallowEnvelopeFieldNumber: number;

            /** ProtobufSettings _shallowEnvelopeMessageDescriptor. */
            public _shallowEnvelopeMessageDescriptor: Uint8Array;

            /** ProtobufSettings protobufDescriptorSet. */
            public protobufDescriptorSet: string;

            /**
             * Creates a new ProtobufSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProtobufSettings instance
             */
            public static create(properties?: protos.encoding.IProtobufSettings): protos.encoding.ProtobufSettings;

            /**
             * Encodes the specified ProtobufSettings message. Does not implicitly {@link protos.encoding.ProtobufSettings.verify|verify} messages.
             * @param message ProtobufSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.encoding.IProtobufSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProtobufSettings message, length delimited. Does not implicitly {@link protos.encoding.ProtobufSettings.verify|verify} messages.
             * @param message ProtobufSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.encoding.IProtobufSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProtobufSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProtobufSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.encoding.ProtobufSettings;

            /**
             * Decodes a ProtobufSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProtobufSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.encoding.ProtobufSettings;

            /**
             * Verifies a ProtobufSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProtobufSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProtobufSettings
             */
            public static fromObject(object: { [k: string]: any }): protos.encoding.ProtobufSettings;

            /**
             * Creates a plain object from a ProtobufSettings message. Also converts values to other types if specified.
             * @param message ProtobufSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.encoding.ProtobufSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProtobufSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AvroSettings. */
        interface IAvroSettings {

            /** AvroSettings avroSchemaFile */
            avroSchemaFile?: (string|null);

            /** AvroSettings schema */
            schema?: (Uint8Array|null);
        }

        /** Represents an AvroSettings. */
        class AvroSettings implements IAvroSettings {

            /**
             * Constructs a new AvroSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.encoding.IAvroSettings);

            /** AvroSettings avroSchemaFile. */
            public avroSchemaFile: string;

            /** AvroSettings schema. */
            public schema: Uint8Array;

            /**
             * Creates a new AvroSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AvroSettings instance
             */
            public static create(properties?: protos.encoding.IAvroSettings): protos.encoding.AvroSettings;

            /**
             * Encodes the specified AvroSettings message. Does not implicitly {@link protos.encoding.AvroSettings.verify|verify} messages.
             * @param message AvroSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.encoding.IAvroSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AvroSettings message, length delimited. Does not implicitly {@link protos.encoding.AvroSettings.verify|verify} messages.
             * @param message AvroSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.encoding.IAvroSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AvroSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AvroSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.encoding.AvroSettings;

            /**
             * Decodes an AvroSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AvroSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.encoding.AvroSettings;

            /**
             * Verifies an AvroSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AvroSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AvroSettings
             */
            public static fromObject(object: { [k: string]: any }): protos.encoding.AvroSettings;

            /**
             * Creates a plain object from an AvroSettings message. Also converts values to other types if specified.
             * @param message AvroSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.encoding.AvroSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AvroSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ThriftSettings. */
        interface IThriftSettings {

            /** ThriftSettings thriftDirs */
            thriftDirs?: (string[]|null);

            /** ThriftSettings thriftStruct */
            thriftStruct?: (string|null);
        }

        /** Represents a ThriftSettings. */
        class ThriftSettings implements IThriftSettings {

            /**
             * Constructs a new ThriftSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.encoding.IThriftSettings);

            /** ThriftSettings thriftDirs. */
            public thriftDirs: string[];

            /** ThriftSettings thriftStruct. */
            public thriftStruct: string;

            /**
             * Creates a new ThriftSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ThriftSettings instance
             */
            public static create(properties?: protos.encoding.IThriftSettings): protos.encoding.ThriftSettings;

            /**
             * Encodes the specified ThriftSettings message. Does not implicitly {@link protos.encoding.ThriftSettings.verify|verify} messages.
             * @param message ThriftSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.encoding.IThriftSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ThriftSettings message, length delimited. Does not implicitly {@link protos.encoding.ThriftSettings.verify|verify} messages.
             * @param message ThriftSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.encoding.IThriftSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ThriftSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ThriftSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.encoding.ThriftSettings;

            /**
             * Decodes a ThriftSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ThriftSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.encoding.ThriftSettings;

            /**
             * Verifies a ThriftSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ThriftSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ThriftSettings
             */
            public static fromObject(object: { [k: string]: any }): protos.encoding.ThriftSettings;

            /**
             * Creates a plain object from a ThriftSettings message. Also converts values to other types if specified.
             * @param message ThriftSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.encoding.ThriftSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ThriftSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a JSONSchemaSettings. */
        interface IJSONSchemaSettings {

            /** JSONSchemaSettings schema */
            schema?: (Uint8Array|null);
        }

        /** Represents a JSONSchemaSettings. */
        class JSONSchemaSettings implements IJSONSchemaSettings {

            /**
             * Constructs a new JSONSchemaSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.encoding.IJSONSchemaSettings);

            /** JSONSchemaSettings schema. */
            public schema: Uint8Array;

            /**
             * Creates a new JSONSchemaSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JSONSchemaSettings instance
             */
            public static create(properties?: protos.encoding.IJSONSchemaSettings): protos.encoding.JSONSchemaSettings;

            /**
             * Encodes the specified JSONSchemaSettings message. Does not implicitly {@link protos.encoding.JSONSchemaSettings.verify|verify} messages.
             * @param message JSONSchemaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.encoding.IJSONSchemaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JSONSchemaSettings message, length delimited. Does not implicitly {@link protos.encoding.JSONSchemaSettings.verify|verify} messages.
             * @param message JSONSchemaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.encoding.IJSONSchemaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JSONSchemaSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JSONSchemaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.encoding.JSONSchemaSettings;

            /**
             * Decodes a JSONSchemaSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JSONSchemaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.encoding.JSONSchemaSettings;

            /**
             * Verifies a JSONSchemaSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JSONSchemaSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JSONSchemaSettings
             */
            public static fromObject(object: { [k: string]: any }): protos.encoding.JSONSchemaSettings;

            /**
             * Creates a plain object from a JSONSchemaSettings message. Also converts values to other types if specified.
             * @param message JSONSchemaSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.encoding.JSONSchemaSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JSONSchemaSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CloudEventSettings. */
        interface ICloudEventSettings {

            /** CloudEventSettings ceId */
            ceId?: (string|null);

            /** CloudEventSettings ceSource */
            ceSource?: (string|null);

            /** CloudEventSettings ceType */
            ceType?: (string|null);

            /** CloudEventSettings ceSubject */
            ceSubject?: (string|null);

            /** CloudEventSettings ceSpecVersion */
            ceSpecVersion?: (string|null);

            /** CloudEventSettings ceDataContentType */
            ceDataContentType?: (string|null);

            /** CloudEventSettings ceDataSchema */
            ceDataSchema?: (string|null);
        }

        /** Represents a CloudEventSettings. */
        class CloudEventSettings implements ICloudEventSettings {

            /**
             * Constructs a new CloudEventSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.encoding.ICloudEventSettings);

            /** CloudEventSettings ceId. */
            public ceId: string;

            /** CloudEventSettings ceSource. */
            public ceSource: string;

            /** CloudEventSettings ceType. */
            public ceType: string;

            /** CloudEventSettings ceSubject. */
            public ceSubject: string;

            /** CloudEventSettings ceSpecVersion. */
            public ceSpecVersion: string;

            /** CloudEventSettings ceDataContentType. */
            public ceDataContentType: string;

            /** CloudEventSettings ceDataSchema. */
            public ceDataSchema: string;

            /**
             * Creates a new CloudEventSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CloudEventSettings instance
             */
            public static create(properties?: protos.encoding.ICloudEventSettings): protos.encoding.CloudEventSettings;

            /**
             * Encodes the specified CloudEventSettings message. Does not implicitly {@link protos.encoding.CloudEventSettings.verify|verify} messages.
             * @param message CloudEventSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.encoding.ICloudEventSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CloudEventSettings message, length delimited. Does not implicitly {@link protos.encoding.CloudEventSettings.verify|verify} messages.
             * @param message CloudEventSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.encoding.ICloudEventSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CloudEventSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CloudEventSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.encoding.CloudEventSettings;

            /**
             * Decodes a CloudEventSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CloudEventSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.encoding.CloudEventSettings;

            /**
             * Verifies a CloudEventSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CloudEventSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CloudEventSettings
             */
            public static fromObject(object: { [k: string]: any }): protos.encoding.CloudEventSettings;

            /**
             * Creates a plain object from a CloudEventSettings message. Also converts values to other types if specified.
             * @param message CloudEventSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.encoding.CloudEventSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CloudEventSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EncodeOptions. */
        interface IEncodeOptions {

            /** EncodeOptions schemaId */
            schemaId?: (string|null);

            /** EncodeOptions encodeType */
            encodeType?: (protos.encoding.EncodeType|null);

            /** EncodeOptions protobufSettings */
            protobufSettings?: (protos.encoding.IProtobufSettings|null);

            /** EncodeOptions avroSettings */
            avroSettings?: (protos.encoding.IAvroSettings|null);

            /** EncodeOptions cloudeventSettings */
            cloudeventSettings?: (protos.encoding.ICloudEventSettings|null);
        }

        /** Represents an EncodeOptions. */
        class EncodeOptions implements IEncodeOptions {

            /**
             * Constructs a new EncodeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.encoding.IEncodeOptions);

            /** EncodeOptions schemaId. */
            public schemaId: string;

            /** EncodeOptions encodeType. */
            public encodeType: protos.encoding.EncodeType;

            /** EncodeOptions protobufSettings. */
            public protobufSettings?: (protos.encoding.IProtobufSettings|null);

            /** EncodeOptions avroSettings. */
            public avroSettings?: (protos.encoding.IAvroSettings|null);

            /** EncodeOptions cloudeventSettings. */
            public cloudeventSettings?: (protos.encoding.ICloudEventSettings|null);

            /**
             * Creates a new EncodeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EncodeOptions instance
             */
            public static create(properties?: protos.encoding.IEncodeOptions): protos.encoding.EncodeOptions;

            /**
             * Encodes the specified EncodeOptions message. Does not implicitly {@link protos.encoding.EncodeOptions.verify|verify} messages.
             * @param message EncodeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.encoding.IEncodeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EncodeOptions message, length delimited. Does not implicitly {@link protos.encoding.EncodeOptions.verify|verify} messages.
             * @param message EncodeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.encoding.IEncodeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EncodeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EncodeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.encoding.EncodeOptions;

            /**
             * Decodes an EncodeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EncodeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.encoding.EncodeOptions;

            /**
             * Verifies an EncodeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EncodeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EncodeOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.encoding.EncodeOptions;

            /**
             * Creates a plain object from an EncodeOptions message. Also converts values to other types if specified.
             * @param message EncodeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.encoding.EncodeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EncodeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DecodeOptions. */
        interface IDecodeOptions {

            /** DecodeOptions schemaId */
            schemaId?: (string|null);

            /** DecodeOptions decodeType */
            decodeType?: (protos.encoding.DecodeType|null);

            /** DecodeOptions protobufSettings */
            protobufSettings?: (protos.encoding.IProtobufSettings|null);

            /** DecodeOptions avroSettings */
            avroSettings?: (protos.encoding.IAvroSettings|null);

            /** DecodeOptions thriftSettings */
            thriftSettings?: (protos.encoding.IThriftSettings|null);
        }

        /** Represents a DecodeOptions. */
        class DecodeOptions implements IDecodeOptions {

            /**
             * Constructs a new DecodeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.encoding.IDecodeOptions);

            /** DecodeOptions schemaId. */
            public schemaId: string;

            /** DecodeOptions decodeType. */
            public decodeType: protos.encoding.DecodeType;

            /** DecodeOptions protobufSettings. */
            public protobufSettings?: (protos.encoding.IProtobufSettings|null);

            /** DecodeOptions avroSettings. */
            public avroSettings?: (protos.encoding.IAvroSettings|null);

            /** DecodeOptions thriftSettings. */
            public thriftSettings?: (protos.encoding.IThriftSettings|null);

            /**
             * Creates a new DecodeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DecodeOptions instance
             */
            public static create(properties?: protos.encoding.IDecodeOptions): protos.encoding.DecodeOptions;

            /**
             * Encodes the specified DecodeOptions message. Does not implicitly {@link protos.encoding.DecodeOptions.verify|verify} messages.
             * @param message DecodeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.encoding.IDecodeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DecodeOptions message, length delimited. Does not implicitly {@link protos.encoding.DecodeOptions.verify|verify} messages.
             * @param message DecodeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.encoding.IDecodeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DecodeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DecodeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.encoding.DecodeOptions;

            /**
             * Decodes a DecodeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DecodeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.encoding.DecodeOptions;

            /**
             * Verifies a DecodeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DecodeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DecodeOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.encoding.DecodeOptions;

            /**
             * Creates a plain object from a DecodeOptions message. Also converts values to other types if specified.
             * @param message DecodeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.encoding.DecodeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DecodeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace opts. */
    namespace opts {

        /** Properties of a GlobalCLIOptions. */
        interface IGlobalCLIOptions {

            /** GlobalCLIOptions debug */
            debug?: (boolean|null);

            /** GlobalCLIOptions quiet */
            quiet?: (boolean|null);

            /** GlobalCLIOptions version */
            version?: (boolean|null);

            /** GlobalCLIOptions _fullCommand */
            _fullCommand?: (string|null);

            /** GlobalCLIOptions _action */
            _action?: (string|null);

            /** GlobalCLIOptions _backend */
            _backend?: (string|null);

            /** GlobalCLIOptions _commands */
            _commands?: (string[]|null);
        }

        /** Represents a GlobalCLIOptions. */
        class GlobalCLIOptions implements IGlobalCLIOptions {

            /**
             * Constructs a new GlobalCLIOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IGlobalCLIOptions);

            /** GlobalCLIOptions debug. */
            public debug: boolean;

            /** GlobalCLIOptions quiet. */
            public quiet: boolean;

            /** GlobalCLIOptions version. */
            public version: boolean;

            /** GlobalCLIOptions _fullCommand. */
            public _fullCommand: string;

            /** GlobalCLIOptions _action. */
            public _action: string;

            /** GlobalCLIOptions _backend. */
            public _backend: string;

            /** GlobalCLIOptions _commands. */
            public _commands: string[];

            /**
             * Creates a new GlobalCLIOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GlobalCLIOptions instance
             */
            public static create(properties?: protos.opts.IGlobalCLIOptions): protos.opts.GlobalCLIOptions;

            /**
             * Encodes the specified GlobalCLIOptions message. Does not implicitly {@link protos.opts.GlobalCLIOptions.verify|verify} messages.
             * @param message GlobalCLIOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IGlobalCLIOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GlobalCLIOptions message, length delimited. Does not implicitly {@link protos.opts.GlobalCLIOptions.verify|verify} messages.
             * @param message GlobalCLIOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IGlobalCLIOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GlobalCLIOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GlobalCLIOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.GlobalCLIOptions;

            /**
             * Decodes a GlobalCLIOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GlobalCLIOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.GlobalCLIOptions;

            /**
             * Verifies a GlobalCLIOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GlobalCLIOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GlobalCLIOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.GlobalCLIOptions;

            /**
             * Creates a plain object from a GlobalCLIOptions message. Also converts values to other types if specified.
             * @param message GlobalCLIOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.GlobalCLIOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GlobalCLIOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CLIOptions. */
        interface ICLIOptions {

            /** CLIOptions global */
            global?: (protos.opts.IGlobalCLIOptions|null);

            /** CLIOptions read */
            read?: (protos.opts.IReadOptions|null);

            /** CLIOptions write */
            write?: (protos.opts.IWriteOptions|null);
        }

        /** Represents a CLIOptions. */
        class CLIOptions implements ICLIOptions {

            /**
             * Constructs a new CLIOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.ICLIOptions);

            /** CLIOptions global. */
            public global?: (protos.opts.IGlobalCLIOptions|null);

            /** CLIOptions read. */
            public read?: (protos.opts.IReadOptions|null);

            /** CLIOptions write. */
            public write?: (protos.opts.IWriteOptions|null);

            /**
             * Creates a new CLIOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CLIOptions instance
             */
            public static create(properties?: protos.opts.ICLIOptions): protos.opts.CLIOptions;

            /**
             * Encodes the specified CLIOptions message. Does not implicitly {@link protos.opts.CLIOptions.verify|verify} messages.
             * @param message CLIOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.ICLIOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CLIOptions message, length delimited. Does not implicitly {@link protos.opts.CLIOptions.verify|verify} messages.
             * @param message CLIOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.ICLIOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CLIOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CLIOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.CLIOptions;

            /**
             * Decodes a CLIOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CLIOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.CLIOptions;

            /**
             * Verifies a CLIOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CLIOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CLIOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.CLIOptions;

            /**
             * Creates a plain object from a CLIOptions message. Also converts values to other types if specified.
             * @param message CLIOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.CLIOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CLIOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** ConvertOption enum. */
        enum ConvertOption {
            CONVERT_OPTION_UNSET = 0,
            CONVERT_OPTION_BASE64 = 1,
            CONVERT_OPTION_GZIP = 2
        }

        /** Properties of a ReadCLIOptions. */
        interface IReadCLIOptions {

            /** ReadCLIOptions verboseOutput */
            verboseOutput?: (boolean|null);

            /** ReadCLIOptions pretty */
            pretty?: (boolean|null);

            /** ReadCLIOptions json */
            json?: (boolean|null);
        }

        /** Represents a ReadCLIOptions. */
        class ReadCLIOptions implements IReadCLIOptions {

            /**
             * Constructs a new ReadCLIOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadCLIOptions);

            /** ReadCLIOptions verboseOutput. */
            public verboseOutput: boolean;

            /** ReadCLIOptions pretty. */
            public pretty: boolean;

            /** ReadCLIOptions json. */
            public json: boolean;

            /**
             * Creates a new ReadCLIOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadCLIOptions instance
             */
            public static create(properties?: protos.opts.IReadCLIOptions): protos.opts.ReadCLIOptions;

            /**
             * Encodes the specified ReadCLIOptions message. Does not implicitly {@link protos.opts.ReadCLIOptions.verify|verify} messages.
             * @param message ReadCLIOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadCLIOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadCLIOptions message, length delimited. Does not implicitly {@link protos.opts.ReadCLIOptions.verify|verify} messages.
             * @param message ReadCLIOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadCLIOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadCLIOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadCLIOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadCLIOptions;

            /**
             * Decodes a ReadCLIOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadCLIOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadCLIOptions;

            /**
             * Verifies a ReadCLIOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadCLIOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadCLIOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadCLIOptions;

            /**
             * Creates a plain object from a ReadCLIOptions message. Also converts values to other types if specified.
             * @param message ReadCLIOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadCLIOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadCLIOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadSampleOptions. */
        interface IReadSampleOptions {

            /** ReadSampleOptions sampleRate */
            sampleRate?: (number|null);

            /** ReadSampleOptions sampleIntervalSeconds */
            sampleIntervalSeconds?: (number|null);
        }

        /** Represents a ReadSampleOptions. */
        class ReadSampleOptions implements IReadSampleOptions {

            /**
             * Constructs a new ReadSampleOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadSampleOptions);

            /** ReadSampleOptions sampleRate. */
            public sampleRate: number;

            /** ReadSampleOptions sampleIntervalSeconds. */
            public sampleIntervalSeconds: number;

            /**
             * Creates a new ReadSampleOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadSampleOptions instance
             */
            public static create(properties?: protos.opts.IReadSampleOptions): protos.opts.ReadSampleOptions;

            /**
             * Encodes the specified ReadSampleOptions message. Does not implicitly {@link protos.opts.ReadSampleOptions.verify|verify} messages.
             * @param message ReadSampleOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadSampleOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadSampleOptions message, length delimited. Does not implicitly {@link protos.opts.ReadSampleOptions.verify|verify} messages.
             * @param message ReadSampleOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadSampleOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadSampleOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadSampleOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadSampleOptions;

            /**
             * Decodes a ReadSampleOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadSampleOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadSampleOptions;

            /**
             * Verifies a ReadSampleOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadSampleOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadSampleOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadSampleOptions;

            /**
             * Creates a plain object from a ReadSampleOptions message. Also converts values to other types if specified.
             * @param message ReadSampleOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadSampleOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadSampleOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadFilterOptions. */
        interface IReadFilterOptions {

            /** ReadFilterOptions query */
            query?: (string|null);
        }

        /** Represents a ReadFilterOptions. */
        class ReadFilterOptions implements IReadFilterOptions {

            /**
             * Constructs a new ReadFilterOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadFilterOptions);

            /** ReadFilterOptions query. */
            public query: string;

            /**
             * Creates a new ReadFilterOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadFilterOptions instance
             */
            public static create(properties?: protos.opts.IReadFilterOptions): protos.opts.ReadFilterOptions;

            /**
             * Encodes the specified ReadFilterOptions message. Does not implicitly {@link protos.opts.ReadFilterOptions.verify|verify} messages.
             * @param message ReadFilterOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadFilterOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadFilterOptions message, length delimited. Does not implicitly {@link protos.opts.ReadFilterOptions.verify|verify} messages.
             * @param message ReadFilterOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadFilterOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadFilterOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadFilterOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadFilterOptions;

            /**
             * Decodes a ReadFilterOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadFilterOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadFilterOptions;

            /**
             * Verifies a ReadFilterOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadFilterOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadFilterOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadFilterOptions;

            /**
             * Creates a plain object from a ReadFilterOptions message. Also converts values to other types if specified.
             * @param message ReadFilterOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadFilterOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadFilterOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadOptions. */
        interface IReadOptions {

            /** ReadOptions name */
            name?: (string|null);

            /** ReadOptions connectionId */
            connectionId?: (string|null);

            /** ReadOptions continuous */
            continuous?: (boolean|null);

            /** ReadOptions sampleOptions */
            sampleOptions?: (protos.opts.IReadSampleOptions|null);

            /** ReadOptions decodeOptions */
            decodeOptions?: (protos.encoding.IDecodeOptions|null);

            /** ReadOptions convertOutput */
            convertOutput?: (protos.opts.ConvertOption|null);

            /** ReadOptions filter */
            filter?: (protos.opts.IReadFilterOptions|null);

            /** ReadOptions inferSchemaOptions */
            inferSchemaOptions?: (protos.opts.IInferSchemaOptions|null);

            /** ReadOptions _id */
            _id?: (string|null);

            /** ReadOptions _active */
            _active?: (boolean|null);

            /** ReadOptions _cliOptions */
            _cliOptions?: (protos.opts.IReadCLIOptions|null);

            /** ReadOptions kafka */
            kafka?: (protos.opts.IReadGroupKafkaOptions|null);

            /** ReadOptions activemq */
            activemq?: (protos.opts.IReadGroupActiveMQOptions|null);

            /** ReadOptions awsSqs */
            awsSqs?: (protos.opts.IReadGroupAWSSQSOptions|null);

            /** ReadOptions mongo */
            mongo?: (protos.opts.IReadGroupMongoOptions|null);

            /** ReadOptions nats */
            nats?: (protos.opts.IReadGroupNatsOptions|null);

            /** ReadOptions natsStreaming */
            natsStreaming?: (protos.opts.IReadGroupNatsStreamingOptions|null);

            /** ReadOptions nsq */
            nsq?: (protos.opts.IReadGroupNSQOptions|null);

            /** ReadOptions pulsar */
            pulsar?: (protos.opts.IReadGroupPulsarOptions|null);

            /** ReadOptions rabbit */
            rabbit?: (protos.opts.IReadGroupRabbitOptions|null);

            /** ReadOptions rabbitStreams */
            rabbitStreams?: (protos.opts.IReadGroupRabbitStreamsOptions|null);

            /** ReadOptions mqtt */
            mqtt?: (protos.opts.IReadGroupMQTTOptions|null);

            /** ReadOptions azureServiceBus */
            azureServiceBus?: (protos.opts.IReadGroupAzureServiceBusOptions|null);

            /** ReadOptions azureEventHub */
            azureEventHub?: (protos.opts.IReadGroupAzureEventHubOptions|null);

            /** ReadOptions gcpPubsub */
            gcpPubsub?: (protos.opts.IReadGroupGCPPubSubOptions|null);

            /** ReadOptions kubemqQueue */
            kubemqQueue?: (protos.opts.IReadGroupKubeMQQueueOptions|null);

            /** ReadOptions redisPubsub */
            redisPubsub?: (protos.opts.IReadGroupRedisPubSubOptions|null);

            /** ReadOptions redisStreams */
            redisStreams?: (protos.opts.IReadGroupRedisStreamsOptions|null);

            /** ReadOptions postgres */
            postgres?: (protos.opts.IReadGroupPostgresOptions|null);

            /** ReadOptions natsJetstream */
            natsJetstream?: (protos.opts.IReadGroupNatsJetstreamOptions|null);

            /** ReadOptions awsKinesis */
            awsKinesis?: (protos.opts.IReadGroupAWSKinesisOptions|null);

            /** ReadOptions memphis */
            memphis?: (protos.opts.IReadGroupMemphisOptions|null);
        }

        /** Represents a ReadOptions. */
        class ReadOptions implements IReadOptions {

            /**
             * Constructs a new ReadOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadOptions);

            /** ReadOptions name. */
            public name: string;

            /** ReadOptions connectionId. */
            public connectionId: string;

            /** ReadOptions continuous. */
            public continuous: boolean;

            /** ReadOptions sampleOptions. */
            public sampleOptions?: (protos.opts.IReadSampleOptions|null);

            /** ReadOptions decodeOptions. */
            public decodeOptions?: (protos.encoding.IDecodeOptions|null);

            /** ReadOptions convertOutput. */
            public convertOutput: protos.opts.ConvertOption;

            /** ReadOptions filter. */
            public filter?: (protos.opts.IReadFilterOptions|null);

            /** ReadOptions inferSchemaOptions. */
            public inferSchemaOptions?: (protos.opts.IInferSchemaOptions|null);

            /** ReadOptions _id. */
            public _id: string;

            /** ReadOptions _active. */
            public _active: boolean;

            /** ReadOptions _cliOptions. */
            public _cliOptions?: (protos.opts.IReadCLIOptions|null);

            /** ReadOptions kafka. */
            public kafka?: (protos.opts.IReadGroupKafkaOptions|null);

            /** ReadOptions activemq. */
            public activemq?: (protos.opts.IReadGroupActiveMQOptions|null);

            /** ReadOptions awsSqs. */
            public awsSqs?: (protos.opts.IReadGroupAWSSQSOptions|null);

            /** ReadOptions mongo. */
            public mongo?: (protos.opts.IReadGroupMongoOptions|null);

            /** ReadOptions nats. */
            public nats?: (protos.opts.IReadGroupNatsOptions|null);

            /** ReadOptions natsStreaming. */
            public natsStreaming?: (protos.opts.IReadGroupNatsStreamingOptions|null);

            /** ReadOptions nsq. */
            public nsq?: (protos.opts.IReadGroupNSQOptions|null);

            /** ReadOptions pulsar. */
            public pulsar?: (protos.opts.IReadGroupPulsarOptions|null);

            /** ReadOptions rabbit. */
            public rabbit?: (protos.opts.IReadGroupRabbitOptions|null);

            /** ReadOptions rabbitStreams. */
            public rabbitStreams?: (protos.opts.IReadGroupRabbitStreamsOptions|null);

            /** ReadOptions mqtt. */
            public mqtt?: (protos.opts.IReadGroupMQTTOptions|null);

            /** ReadOptions azureServiceBus. */
            public azureServiceBus?: (protos.opts.IReadGroupAzureServiceBusOptions|null);

            /** ReadOptions azureEventHub. */
            public azureEventHub?: (protos.opts.IReadGroupAzureEventHubOptions|null);

            /** ReadOptions gcpPubsub. */
            public gcpPubsub?: (protos.opts.IReadGroupGCPPubSubOptions|null);

            /** ReadOptions kubemqQueue. */
            public kubemqQueue?: (protos.opts.IReadGroupKubeMQQueueOptions|null);

            /** ReadOptions redisPubsub. */
            public redisPubsub?: (protos.opts.IReadGroupRedisPubSubOptions|null);

            /** ReadOptions redisStreams. */
            public redisStreams?: (protos.opts.IReadGroupRedisStreamsOptions|null);

            /** ReadOptions postgres. */
            public postgres?: (protos.opts.IReadGroupPostgresOptions|null);

            /** ReadOptions natsJetstream. */
            public natsJetstream?: (protos.opts.IReadGroupNatsJetstreamOptions|null);

            /** ReadOptions awsKinesis. */
            public awsKinesis?: (protos.opts.IReadGroupAWSKinesisOptions|null);

            /** ReadOptions memphis. */
            public memphis?: (protos.opts.IReadGroupMemphisOptions|null);

            /**
             * Creates a new ReadOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadOptions instance
             */
            public static create(properties?: protos.opts.IReadOptions): protos.opts.ReadOptions;

            /**
             * Encodes the specified ReadOptions message. Does not implicitly {@link protos.opts.ReadOptions.verify|verify} messages.
             * @param message ReadOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadOptions message, length delimited. Does not implicitly {@link protos.opts.ReadOptions.verify|verify} messages.
             * @param message ReadOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadOptions;

            /**
             * Decodes a ReadOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadOptions;

            /**
             * Verifies a ReadOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadOptions;

            /**
             * Creates a plain object from a ReadOptions message. Also converts values to other types if specified.
             * @param message ReadOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupKafkaOptions. */
        interface IReadGroupKafkaOptions {

            /** ReadGroupKafkaOptions _conn */
            _conn?: (protos.args.IKafkaConn|null);

            /** ReadGroupKafkaOptions args */
            args?: (protos.args.IKafkaReadArgs|null);
        }

        /** Represents a ReadGroupKafkaOptions. */
        class ReadGroupKafkaOptions implements IReadGroupKafkaOptions {

            /**
             * Constructs a new ReadGroupKafkaOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupKafkaOptions);

            /** ReadGroupKafkaOptions _conn. */
            public _conn?: (protos.args.IKafkaConn|null);

            /** ReadGroupKafkaOptions args. */
            public args?: (protos.args.IKafkaReadArgs|null);

            /**
             * Creates a new ReadGroupKafkaOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupKafkaOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupKafkaOptions): protos.opts.ReadGroupKafkaOptions;

            /**
             * Encodes the specified ReadGroupKafkaOptions message. Does not implicitly {@link protos.opts.ReadGroupKafkaOptions.verify|verify} messages.
             * @param message ReadGroupKafkaOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupKafkaOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupKafkaOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupKafkaOptions.verify|verify} messages.
             * @param message ReadGroupKafkaOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupKafkaOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupKafkaOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupKafkaOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupKafkaOptions;

            /**
             * Decodes a ReadGroupKafkaOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupKafkaOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupKafkaOptions;

            /**
             * Verifies a ReadGroupKafkaOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupKafkaOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupKafkaOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupKafkaOptions;

            /**
             * Creates a plain object from a ReadGroupKafkaOptions message. Also converts values to other types if specified.
             * @param message ReadGroupKafkaOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupKafkaOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupKafkaOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupActiveMQOptions. */
        interface IReadGroupActiveMQOptions {

            /** ReadGroupActiveMQOptions _conn */
            _conn?: (protos.args.IActiveMQConn|null);

            /** ReadGroupActiveMQOptions args */
            args?: (protos.args.IActiveMQReadArgs|null);
        }

        /** Represents a ReadGroupActiveMQOptions. */
        class ReadGroupActiveMQOptions implements IReadGroupActiveMQOptions {

            /**
             * Constructs a new ReadGroupActiveMQOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupActiveMQOptions);

            /** ReadGroupActiveMQOptions _conn. */
            public _conn?: (protos.args.IActiveMQConn|null);

            /** ReadGroupActiveMQOptions args. */
            public args?: (protos.args.IActiveMQReadArgs|null);

            /**
             * Creates a new ReadGroupActiveMQOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupActiveMQOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupActiveMQOptions): protos.opts.ReadGroupActiveMQOptions;

            /**
             * Encodes the specified ReadGroupActiveMQOptions message. Does not implicitly {@link protos.opts.ReadGroupActiveMQOptions.verify|verify} messages.
             * @param message ReadGroupActiveMQOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupActiveMQOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupActiveMQOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupActiveMQOptions.verify|verify} messages.
             * @param message ReadGroupActiveMQOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupActiveMQOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupActiveMQOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupActiveMQOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupActiveMQOptions;

            /**
             * Decodes a ReadGroupActiveMQOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupActiveMQOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupActiveMQOptions;

            /**
             * Verifies a ReadGroupActiveMQOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupActiveMQOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupActiveMQOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupActiveMQOptions;

            /**
             * Creates a plain object from a ReadGroupActiveMQOptions message. Also converts values to other types if specified.
             * @param message ReadGroupActiveMQOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupActiveMQOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupActiveMQOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupAWSSQSOptions. */
        interface IReadGroupAWSSQSOptions {

            /** ReadGroupAWSSQSOptions _conn */
            _conn?: (protos.args.IAWSSQSConn|null);

            /** ReadGroupAWSSQSOptions args */
            args?: (protos.args.IAWSSQSReadArgs|null);
        }

        /** Represents a ReadGroupAWSSQSOptions. */
        class ReadGroupAWSSQSOptions implements IReadGroupAWSSQSOptions {

            /**
             * Constructs a new ReadGroupAWSSQSOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupAWSSQSOptions);

            /** ReadGroupAWSSQSOptions _conn. */
            public _conn?: (protos.args.IAWSSQSConn|null);

            /** ReadGroupAWSSQSOptions args. */
            public args?: (protos.args.IAWSSQSReadArgs|null);

            /**
             * Creates a new ReadGroupAWSSQSOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupAWSSQSOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupAWSSQSOptions): protos.opts.ReadGroupAWSSQSOptions;

            /**
             * Encodes the specified ReadGroupAWSSQSOptions message. Does not implicitly {@link protos.opts.ReadGroupAWSSQSOptions.verify|verify} messages.
             * @param message ReadGroupAWSSQSOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupAWSSQSOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupAWSSQSOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupAWSSQSOptions.verify|verify} messages.
             * @param message ReadGroupAWSSQSOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupAWSSQSOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupAWSSQSOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupAWSSQSOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupAWSSQSOptions;

            /**
             * Decodes a ReadGroupAWSSQSOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupAWSSQSOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupAWSSQSOptions;

            /**
             * Verifies a ReadGroupAWSSQSOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupAWSSQSOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupAWSSQSOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupAWSSQSOptions;

            /**
             * Creates a plain object from a ReadGroupAWSSQSOptions message. Also converts values to other types if specified.
             * @param message ReadGroupAWSSQSOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupAWSSQSOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupAWSSQSOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupMongoOptions. */
        interface IReadGroupMongoOptions {

            /** ReadGroupMongoOptions _conn */
            _conn?: (protos.args.IMongoConn|null);

            /** ReadGroupMongoOptions args */
            args?: (protos.args.IMongoReadArgs|null);
        }

        /** Represents a ReadGroupMongoOptions. */
        class ReadGroupMongoOptions implements IReadGroupMongoOptions {

            /**
             * Constructs a new ReadGroupMongoOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupMongoOptions);

            /** ReadGroupMongoOptions _conn. */
            public _conn?: (protos.args.IMongoConn|null);

            /** ReadGroupMongoOptions args. */
            public args?: (protos.args.IMongoReadArgs|null);

            /**
             * Creates a new ReadGroupMongoOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupMongoOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupMongoOptions): protos.opts.ReadGroupMongoOptions;

            /**
             * Encodes the specified ReadGroupMongoOptions message. Does not implicitly {@link protos.opts.ReadGroupMongoOptions.verify|verify} messages.
             * @param message ReadGroupMongoOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupMongoOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupMongoOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupMongoOptions.verify|verify} messages.
             * @param message ReadGroupMongoOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupMongoOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupMongoOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupMongoOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupMongoOptions;

            /**
             * Decodes a ReadGroupMongoOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupMongoOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupMongoOptions;

            /**
             * Verifies a ReadGroupMongoOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupMongoOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupMongoOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupMongoOptions;

            /**
             * Creates a plain object from a ReadGroupMongoOptions message. Also converts values to other types if specified.
             * @param message ReadGroupMongoOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupMongoOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupMongoOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupNatsOptions. */
        interface IReadGroupNatsOptions {

            /** ReadGroupNatsOptions _conn */
            _conn?: (protos.args.INatsConn|null);

            /** ReadGroupNatsOptions args */
            args?: (protos.args.INatsReadArgs|null);
        }

        /** Represents a ReadGroupNatsOptions. */
        class ReadGroupNatsOptions implements IReadGroupNatsOptions {

            /**
             * Constructs a new ReadGroupNatsOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupNatsOptions);

            /** ReadGroupNatsOptions _conn. */
            public _conn?: (protos.args.INatsConn|null);

            /** ReadGroupNatsOptions args. */
            public args?: (protos.args.INatsReadArgs|null);

            /**
             * Creates a new ReadGroupNatsOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupNatsOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupNatsOptions): protos.opts.ReadGroupNatsOptions;

            /**
             * Encodes the specified ReadGroupNatsOptions message. Does not implicitly {@link protos.opts.ReadGroupNatsOptions.verify|verify} messages.
             * @param message ReadGroupNatsOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupNatsOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupNatsOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupNatsOptions.verify|verify} messages.
             * @param message ReadGroupNatsOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupNatsOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupNatsOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupNatsOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupNatsOptions;

            /**
             * Decodes a ReadGroupNatsOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupNatsOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupNatsOptions;

            /**
             * Verifies a ReadGroupNatsOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupNatsOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupNatsOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupNatsOptions;

            /**
             * Creates a plain object from a ReadGroupNatsOptions message. Also converts values to other types if specified.
             * @param message ReadGroupNatsOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupNatsOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupNatsOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupNatsStreamingOptions. */
        interface IReadGroupNatsStreamingOptions {

            /** ReadGroupNatsStreamingOptions _conn */
            _conn?: (protos.args.INatsStreamingConn|null);

            /** ReadGroupNatsStreamingOptions args */
            args?: (protos.args.INatsStreamingReadArgs|null);
        }

        /** Represents a ReadGroupNatsStreamingOptions. */
        class ReadGroupNatsStreamingOptions implements IReadGroupNatsStreamingOptions {

            /**
             * Constructs a new ReadGroupNatsStreamingOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupNatsStreamingOptions);

            /** ReadGroupNatsStreamingOptions _conn. */
            public _conn?: (protos.args.INatsStreamingConn|null);

            /** ReadGroupNatsStreamingOptions args. */
            public args?: (protos.args.INatsStreamingReadArgs|null);

            /**
             * Creates a new ReadGroupNatsStreamingOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupNatsStreamingOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupNatsStreamingOptions): protos.opts.ReadGroupNatsStreamingOptions;

            /**
             * Encodes the specified ReadGroupNatsStreamingOptions message. Does not implicitly {@link protos.opts.ReadGroupNatsStreamingOptions.verify|verify} messages.
             * @param message ReadGroupNatsStreamingOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupNatsStreamingOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupNatsStreamingOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupNatsStreamingOptions.verify|verify} messages.
             * @param message ReadGroupNatsStreamingOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupNatsStreamingOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupNatsStreamingOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupNatsStreamingOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupNatsStreamingOptions;

            /**
             * Decodes a ReadGroupNatsStreamingOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupNatsStreamingOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupNatsStreamingOptions;

            /**
             * Verifies a ReadGroupNatsStreamingOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupNatsStreamingOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupNatsStreamingOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupNatsStreamingOptions;

            /**
             * Creates a plain object from a ReadGroupNatsStreamingOptions message. Also converts values to other types if specified.
             * @param message ReadGroupNatsStreamingOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupNatsStreamingOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupNatsStreamingOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupNatsJetstreamOptions. */
        interface IReadGroupNatsJetstreamOptions {

            /** ReadGroupNatsJetstreamOptions _conn */
            _conn?: (protos.args.INatsJetstreamConn|null);

            /** ReadGroupNatsJetstreamOptions args */
            args?: (protos.args.INatsJetstreamReadArgs|null);
        }

        /** Represents a ReadGroupNatsJetstreamOptions. */
        class ReadGroupNatsJetstreamOptions implements IReadGroupNatsJetstreamOptions {

            /**
             * Constructs a new ReadGroupNatsJetstreamOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupNatsJetstreamOptions);

            /** ReadGroupNatsJetstreamOptions _conn. */
            public _conn?: (protos.args.INatsJetstreamConn|null);

            /** ReadGroupNatsJetstreamOptions args. */
            public args?: (protos.args.INatsJetstreamReadArgs|null);

            /**
             * Creates a new ReadGroupNatsJetstreamOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupNatsJetstreamOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupNatsJetstreamOptions): protos.opts.ReadGroupNatsJetstreamOptions;

            /**
             * Encodes the specified ReadGroupNatsJetstreamOptions message. Does not implicitly {@link protos.opts.ReadGroupNatsJetstreamOptions.verify|verify} messages.
             * @param message ReadGroupNatsJetstreamOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupNatsJetstreamOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupNatsJetstreamOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupNatsJetstreamOptions.verify|verify} messages.
             * @param message ReadGroupNatsJetstreamOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupNatsJetstreamOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupNatsJetstreamOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupNatsJetstreamOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupNatsJetstreamOptions;

            /**
             * Decodes a ReadGroupNatsJetstreamOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupNatsJetstreamOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupNatsJetstreamOptions;

            /**
             * Verifies a ReadGroupNatsJetstreamOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupNatsJetstreamOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupNatsJetstreamOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupNatsJetstreamOptions;

            /**
             * Creates a plain object from a ReadGroupNatsJetstreamOptions message. Also converts values to other types if specified.
             * @param message ReadGroupNatsJetstreamOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupNatsJetstreamOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupNatsJetstreamOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupNSQOptions. */
        interface IReadGroupNSQOptions {

            /** ReadGroupNSQOptions _conn */
            _conn?: (protos.args.INSQConn|null);

            /** ReadGroupNSQOptions args */
            args?: (protos.args.INSQReadArgs|null);
        }

        /** Represents a ReadGroupNSQOptions. */
        class ReadGroupNSQOptions implements IReadGroupNSQOptions {

            /**
             * Constructs a new ReadGroupNSQOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupNSQOptions);

            /** ReadGroupNSQOptions _conn. */
            public _conn?: (protos.args.INSQConn|null);

            /** ReadGroupNSQOptions args. */
            public args?: (protos.args.INSQReadArgs|null);

            /**
             * Creates a new ReadGroupNSQOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupNSQOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupNSQOptions): protos.opts.ReadGroupNSQOptions;

            /**
             * Encodes the specified ReadGroupNSQOptions message. Does not implicitly {@link protos.opts.ReadGroupNSQOptions.verify|verify} messages.
             * @param message ReadGroupNSQOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupNSQOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupNSQOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupNSQOptions.verify|verify} messages.
             * @param message ReadGroupNSQOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupNSQOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupNSQOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupNSQOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupNSQOptions;

            /**
             * Decodes a ReadGroupNSQOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupNSQOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupNSQOptions;

            /**
             * Verifies a ReadGroupNSQOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupNSQOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupNSQOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupNSQOptions;

            /**
             * Creates a plain object from a ReadGroupNSQOptions message. Also converts values to other types if specified.
             * @param message ReadGroupNSQOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupNSQOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupNSQOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupPostgresOptions. */
        interface IReadGroupPostgresOptions {

            /** ReadGroupPostgresOptions _conn */
            _conn?: (protos.args.IPostgresConn|null);

            /** ReadGroupPostgresOptions args */
            args?: (protos.args.IPostgresReadArgs|null);
        }

        /** Represents a ReadGroupPostgresOptions. */
        class ReadGroupPostgresOptions implements IReadGroupPostgresOptions {

            /**
             * Constructs a new ReadGroupPostgresOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupPostgresOptions);

            /** ReadGroupPostgresOptions _conn. */
            public _conn?: (protos.args.IPostgresConn|null);

            /** ReadGroupPostgresOptions args. */
            public args?: (protos.args.IPostgresReadArgs|null);

            /**
             * Creates a new ReadGroupPostgresOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupPostgresOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupPostgresOptions): protos.opts.ReadGroupPostgresOptions;

            /**
             * Encodes the specified ReadGroupPostgresOptions message. Does not implicitly {@link protos.opts.ReadGroupPostgresOptions.verify|verify} messages.
             * @param message ReadGroupPostgresOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupPostgresOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupPostgresOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupPostgresOptions.verify|verify} messages.
             * @param message ReadGroupPostgresOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupPostgresOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupPostgresOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupPostgresOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupPostgresOptions;

            /**
             * Decodes a ReadGroupPostgresOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupPostgresOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupPostgresOptions;

            /**
             * Verifies a ReadGroupPostgresOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupPostgresOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupPostgresOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupPostgresOptions;

            /**
             * Creates a plain object from a ReadGroupPostgresOptions message. Also converts values to other types if specified.
             * @param message ReadGroupPostgresOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupPostgresOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupPostgresOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupPulsarOptions. */
        interface IReadGroupPulsarOptions {

            /** ReadGroupPulsarOptions _conn */
            _conn?: (protos.args.IPulsarConn|null);

            /** ReadGroupPulsarOptions args */
            args?: (protos.args.IPulsarReadArgs|null);
        }

        /** Represents a ReadGroupPulsarOptions. */
        class ReadGroupPulsarOptions implements IReadGroupPulsarOptions {

            /**
             * Constructs a new ReadGroupPulsarOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupPulsarOptions);

            /** ReadGroupPulsarOptions _conn. */
            public _conn?: (protos.args.IPulsarConn|null);

            /** ReadGroupPulsarOptions args. */
            public args?: (protos.args.IPulsarReadArgs|null);

            /**
             * Creates a new ReadGroupPulsarOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupPulsarOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupPulsarOptions): protos.opts.ReadGroupPulsarOptions;

            /**
             * Encodes the specified ReadGroupPulsarOptions message. Does not implicitly {@link protos.opts.ReadGroupPulsarOptions.verify|verify} messages.
             * @param message ReadGroupPulsarOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupPulsarOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupPulsarOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupPulsarOptions.verify|verify} messages.
             * @param message ReadGroupPulsarOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupPulsarOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupPulsarOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupPulsarOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupPulsarOptions;

            /**
             * Decodes a ReadGroupPulsarOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupPulsarOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupPulsarOptions;

            /**
             * Verifies a ReadGroupPulsarOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupPulsarOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupPulsarOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupPulsarOptions;

            /**
             * Creates a plain object from a ReadGroupPulsarOptions message. Also converts values to other types if specified.
             * @param message ReadGroupPulsarOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupPulsarOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupPulsarOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupRabbitOptions. */
        interface IReadGroupRabbitOptions {

            /** ReadGroupRabbitOptions _conn */
            _conn?: (protos.args.IRabbitConn|null);

            /** ReadGroupRabbitOptions args */
            args?: (protos.args.IRabbitReadArgs|null);
        }

        /** Represents a ReadGroupRabbitOptions. */
        class ReadGroupRabbitOptions implements IReadGroupRabbitOptions {

            /**
             * Constructs a new ReadGroupRabbitOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupRabbitOptions);

            /** ReadGroupRabbitOptions _conn. */
            public _conn?: (protos.args.IRabbitConn|null);

            /** ReadGroupRabbitOptions args. */
            public args?: (protos.args.IRabbitReadArgs|null);

            /**
             * Creates a new ReadGroupRabbitOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupRabbitOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupRabbitOptions): protos.opts.ReadGroupRabbitOptions;

            /**
             * Encodes the specified ReadGroupRabbitOptions message. Does not implicitly {@link protos.opts.ReadGroupRabbitOptions.verify|verify} messages.
             * @param message ReadGroupRabbitOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupRabbitOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupRabbitOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupRabbitOptions.verify|verify} messages.
             * @param message ReadGroupRabbitOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupRabbitOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupRabbitOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupRabbitOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupRabbitOptions;

            /**
             * Decodes a ReadGroupRabbitOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupRabbitOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupRabbitOptions;

            /**
             * Verifies a ReadGroupRabbitOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupRabbitOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupRabbitOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupRabbitOptions;

            /**
             * Creates a plain object from a ReadGroupRabbitOptions message. Also converts values to other types if specified.
             * @param message ReadGroupRabbitOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupRabbitOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupRabbitOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupRabbitStreamsOptions. */
        interface IReadGroupRabbitStreamsOptions {

            /** ReadGroupRabbitStreamsOptions _conn */
            _conn?: (protos.args.IRabbitStreamsConn|null);

            /** ReadGroupRabbitStreamsOptions args */
            args?: (protos.args.IRabbitStreamsReadArgs|null);
        }

        /** Represents a ReadGroupRabbitStreamsOptions. */
        class ReadGroupRabbitStreamsOptions implements IReadGroupRabbitStreamsOptions {

            /**
             * Constructs a new ReadGroupRabbitStreamsOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupRabbitStreamsOptions);

            /** ReadGroupRabbitStreamsOptions _conn. */
            public _conn?: (protos.args.IRabbitStreamsConn|null);

            /** ReadGroupRabbitStreamsOptions args. */
            public args?: (protos.args.IRabbitStreamsReadArgs|null);

            /**
             * Creates a new ReadGroupRabbitStreamsOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupRabbitStreamsOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupRabbitStreamsOptions): protos.opts.ReadGroupRabbitStreamsOptions;

            /**
             * Encodes the specified ReadGroupRabbitStreamsOptions message. Does not implicitly {@link protos.opts.ReadGroupRabbitStreamsOptions.verify|verify} messages.
             * @param message ReadGroupRabbitStreamsOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupRabbitStreamsOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupRabbitStreamsOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupRabbitStreamsOptions.verify|verify} messages.
             * @param message ReadGroupRabbitStreamsOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupRabbitStreamsOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupRabbitStreamsOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupRabbitStreamsOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupRabbitStreamsOptions;

            /**
             * Decodes a ReadGroupRabbitStreamsOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupRabbitStreamsOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupRabbitStreamsOptions;

            /**
             * Verifies a ReadGroupRabbitStreamsOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupRabbitStreamsOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupRabbitStreamsOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupRabbitStreamsOptions;

            /**
             * Creates a plain object from a ReadGroupRabbitStreamsOptions message. Also converts values to other types if specified.
             * @param message ReadGroupRabbitStreamsOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupRabbitStreamsOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupRabbitStreamsOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupRedisPubSubOptions. */
        interface IReadGroupRedisPubSubOptions {

            /** ReadGroupRedisPubSubOptions _conn */
            _conn?: (protos.args.IRedisPubSubConn|null);

            /** ReadGroupRedisPubSubOptions args */
            args?: (protos.args.IRedisPubSubReadArgs|null);
        }

        /** Represents a ReadGroupRedisPubSubOptions. */
        class ReadGroupRedisPubSubOptions implements IReadGroupRedisPubSubOptions {

            /**
             * Constructs a new ReadGroupRedisPubSubOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupRedisPubSubOptions);

            /** ReadGroupRedisPubSubOptions _conn. */
            public _conn?: (protos.args.IRedisPubSubConn|null);

            /** ReadGroupRedisPubSubOptions args. */
            public args?: (protos.args.IRedisPubSubReadArgs|null);

            /**
             * Creates a new ReadGroupRedisPubSubOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupRedisPubSubOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupRedisPubSubOptions): protos.opts.ReadGroupRedisPubSubOptions;

            /**
             * Encodes the specified ReadGroupRedisPubSubOptions message. Does not implicitly {@link protos.opts.ReadGroupRedisPubSubOptions.verify|verify} messages.
             * @param message ReadGroupRedisPubSubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupRedisPubSubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupRedisPubSubOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupRedisPubSubOptions.verify|verify} messages.
             * @param message ReadGroupRedisPubSubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupRedisPubSubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupRedisPubSubOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupRedisPubSubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupRedisPubSubOptions;

            /**
             * Decodes a ReadGroupRedisPubSubOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupRedisPubSubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupRedisPubSubOptions;

            /**
             * Verifies a ReadGroupRedisPubSubOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupRedisPubSubOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupRedisPubSubOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupRedisPubSubOptions;

            /**
             * Creates a plain object from a ReadGroupRedisPubSubOptions message. Also converts values to other types if specified.
             * @param message ReadGroupRedisPubSubOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupRedisPubSubOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupRedisPubSubOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupRedisStreamsOptions. */
        interface IReadGroupRedisStreamsOptions {

            /** ReadGroupRedisStreamsOptions _conn */
            _conn?: (protos.args.IRedisStreamsConn|null);

            /** ReadGroupRedisStreamsOptions args */
            args?: (protos.args.IRedisStreamsReadArgs|null);
        }

        /** Represents a ReadGroupRedisStreamsOptions. */
        class ReadGroupRedisStreamsOptions implements IReadGroupRedisStreamsOptions {

            /**
             * Constructs a new ReadGroupRedisStreamsOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupRedisStreamsOptions);

            /** ReadGroupRedisStreamsOptions _conn. */
            public _conn?: (protos.args.IRedisStreamsConn|null);

            /** ReadGroupRedisStreamsOptions args. */
            public args?: (protos.args.IRedisStreamsReadArgs|null);

            /**
             * Creates a new ReadGroupRedisStreamsOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupRedisStreamsOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupRedisStreamsOptions): protos.opts.ReadGroupRedisStreamsOptions;

            /**
             * Encodes the specified ReadGroupRedisStreamsOptions message. Does not implicitly {@link protos.opts.ReadGroupRedisStreamsOptions.verify|verify} messages.
             * @param message ReadGroupRedisStreamsOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupRedisStreamsOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupRedisStreamsOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupRedisStreamsOptions.verify|verify} messages.
             * @param message ReadGroupRedisStreamsOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupRedisStreamsOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupRedisStreamsOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupRedisStreamsOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupRedisStreamsOptions;

            /**
             * Decodes a ReadGroupRedisStreamsOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupRedisStreamsOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupRedisStreamsOptions;

            /**
             * Verifies a ReadGroupRedisStreamsOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupRedisStreamsOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupRedisStreamsOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupRedisStreamsOptions;

            /**
             * Creates a plain object from a ReadGroupRedisStreamsOptions message. Also converts values to other types if specified.
             * @param message ReadGroupRedisStreamsOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupRedisStreamsOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupRedisStreamsOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupAzureEventHubOptions. */
        interface IReadGroupAzureEventHubOptions {

            /** ReadGroupAzureEventHubOptions _conn */
            _conn?: (protos.args.IAzureEventHubConn|null);

            /** ReadGroupAzureEventHubOptions args */
            args?: (protos.args.IAzureEventHubReadArgs|null);
        }

        /** Represents a ReadGroupAzureEventHubOptions. */
        class ReadGroupAzureEventHubOptions implements IReadGroupAzureEventHubOptions {

            /**
             * Constructs a new ReadGroupAzureEventHubOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupAzureEventHubOptions);

            /** ReadGroupAzureEventHubOptions _conn. */
            public _conn?: (protos.args.IAzureEventHubConn|null);

            /** ReadGroupAzureEventHubOptions args. */
            public args?: (protos.args.IAzureEventHubReadArgs|null);

            /**
             * Creates a new ReadGroupAzureEventHubOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupAzureEventHubOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupAzureEventHubOptions): protos.opts.ReadGroupAzureEventHubOptions;

            /**
             * Encodes the specified ReadGroupAzureEventHubOptions message. Does not implicitly {@link protos.opts.ReadGroupAzureEventHubOptions.verify|verify} messages.
             * @param message ReadGroupAzureEventHubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupAzureEventHubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupAzureEventHubOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupAzureEventHubOptions.verify|verify} messages.
             * @param message ReadGroupAzureEventHubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupAzureEventHubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupAzureEventHubOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupAzureEventHubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupAzureEventHubOptions;

            /**
             * Decodes a ReadGroupAzureEventHubOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupAzureEventHubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupAzureEventHubOptions;

            /**
             * Verifies a ReadGroupAzureEventHubOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupAzureEventHubOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupAzureEventHubOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupAzureEventHubOptions;

            /**
             * Creates a plain object from a ReadGroupAzureEventHubOptions message. Also converts values to other types if specified.
             * @param message ReadGroupAzureEventHubOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupAzureEventHubOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupAzureEventHubOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupAzureServiceBusOptions. */
        interface IReadGroupAzureServiceBusOptions {

            /** ReadGroupAzureServiceBusOptions _conn */
            _conn?: (protos.args.IAzureServiceBusConn|null);

            /** ReadGroupAzureServiceBusOptions args */
            args?: (protos.args.IAzureServiceBusReadArgs|null);
        }

        /** Represents a ReadGroupAzureServiceBusOptions. */
        class ReadGroupAzureServiceBusOptions implements IReadGroupAzureServiceBusOptions {

            /**
             * Constructs a new ReadGroupAzureServiceBusOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupAzureServiceBusOptions);

            /** ReadGroupAzureServiceBusOptions _conn. */
            public _conn?: (protos.args.IAzureServiceBusConn|null);

            /** ReadGroupAzureServiceBusOptions args. */
            public args?: (protos.args.IAzureServiceBusReadArgs|null);

            /**
             * Creates a new ReadGroupAzureServiceBusOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupAzureServiceBusOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupAzureServiceBusOptions): protos.opts.ReadGroupAzureServiceBusOptions;

            /**
             * Encodes the specified ReadGroupAzureServiceBusOptions message. Does not implicitly {@link protos.opts.ReadGroupAzureServiceBusOptions.verify|verify} messages.
             * @param message ReadGroupAzureServiceBusOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupAzureServiceBusOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupAzureServiceBusOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupAzureServiceBusOptions.verify|verify} messages.
             * @param message ReadGroupAzureServiceBusOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupAzureServiceBusOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupAzureServiceBusOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupAzureServiceBusOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupAzureServiceBusOptions;

            /**
             * Decodes a ReadGroupAzureServiceBusOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupAzureServiceBusOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupAzureServiceBusOptions;

            /**
             * Verifies a ReadGroupAzureServiceBusOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupAzureServiceBusOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupAzureServiceBusOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupAzureServiceBusOptions;

            /**
             * Creates a plain object from a ReadGroupAzureServiceBusOptions message. Also converts values to other types if specified.
             * @param message ReadGroupAzureServiceBusOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupAzureServiceBusOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupAzureServiceBusOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupMQTTOptions. */
        interface IReadGroupMQTTOptions {

            /** ReadGroupMQTTOptions _conn */
            _conn?: (protos.args.IMQTTConn|null);

            /** ReadGroupMQTTOptions args */
            args?: (protos.args.IMQTTReadArgs|null);
        }

        /** Represents a ReadGroupMQTTOptions. */
        class ReadGroupMQTTOptions implements IReadGroupMQTTOptions {

            /**
             * Constructs a new ReadGroupMQTTOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupMQTTOptions);

            /** ReadGroupMQTTOptions _conn. */
            public _conn?: (protos.args.IMQTTConn|null);

            /** ReadGroupMQTTOptions args. */
            public args?: (protos.args.IMQTTReadArgs|null);

            /**
             * Creates a new ReadGroupMQTTOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupMQTTOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupMQTTOptions): protos.opts.ReadGroupMQTTOptions;

            /**
             * Encodes the specified ReadGroupMQTTOptions message. Does not implicitly {@link protos.opts.ReadGroupMQTTOptions.verify|verify} messages.
             * @param message ReadGroupMQTTOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupMQTTOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupMQTTOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupMQTTOptions.verify|verify} messages.
             * @param message ReadGroupMQTTOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupMQTTOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupMQTTOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupMQTTOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupMQTTOptions;

            /**
             * Decodes a ReadGroupMQTTOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupMQTTOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupMQTTOptions;

            /**
             * Verifies a ReadGroupMQTTOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupMQTTOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupMQTTOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupMQTTOptions;

            /**
             * Creates a plain object from a ReadGroupMQTTOptions message. Also converts values to other types if specified.
             * @param message ReadGroupMQTTOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupMQTTOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupMQTTOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupGCPPubSubOptions. */
        interface IReadGroupGCPPubSubOptions {

            /** ReadGroupGCPPubSubOptions _conn */
            _conn?: (protos.args.IGCPPubSubConn|null);

            /** ReadGroupGCPPubSubOptions args */
            args?: (protos.args.IGCPPubSubReadArgs|null);
        }

        /** Represents a ReadGroupGCPPubSubOptions. */
        class ReadGroupGCPPubSubOptions implements IReadGroupGCPPubSubOptions {

            /**
             * Constructs a new ReadGroupGCPPubSubOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupGCPPubSubOptions);

            /** ReadGroupGCPPubSubOptions _conn. */
            public _conn?: (protos.args.IGCPPubSubConn|null);

            /** ReadGroupGCPPubSubOptions args. */
            public args?: (protos.args.IGCPPubSubReadArgs|null);

            /**
             * Creates a new ReadGroupGCPPubSubOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupGCPPubSubOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupGCPPubSubOptions): protos.opts.ReadGroupGCPPubSubOptions;

            /**
             * Encodes the specified ReadGroupGCPPubSubOptions message. Does not implicitly {@link protos.opts.ReadGroupGCPPubSubOptions.verify|verify} messages.
             * @param message ReadGroupGCPPubSubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupGCPPubSubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupGCPPubSubOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupGCPPubSubOptions.verify|verify} messages.
             * @param message ReadGroupGCPPubSubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupGCPPubSubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupGCPPubSubOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupGCPPubSubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupGCPPubSubOptions;

            /**
             * Decodes a ReadGroupGCPPubSubOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupGCPPubSubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupGCPPubSubOptions;

            /**
             * Verifies a ReadGroupGCPPubSubOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupGCPPubSubOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupGCPPubSubOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupGCPPubSubOptions;

            /**
             * Creates a plain object from a ReadGroupGCPPubSubOptions message. Also converts values to other types if specified.
             * @param message ReadGroupGCPPubSubOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupGCPPubSubOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupGCPPubSubOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupKubeMQQueueOptions. */
        interface IReadGroupKubeMQQueueOptions {

            /** ReadGroupKubeMQQueueOptions _conn */
            _conn?: (protos.args.IKubeMQQueueConn|null);

            /** ReadGroupKubeMQQueueOptions args */
            args?: (protos.args.IKubeMQQueueReadArgs|null);
        }

        /** Represents a ReadGroupKubeMQQueueOptions. */
        class ReadGroupKubeMQQueueOptions implements IReadGroupKubeMQQueueOptions {

            /**
             * Constructs a new ReadGroupKubeMQQueueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupKubeMQQueueOptions);

            /** ReadGroupKubeMQQueueOptions _conn. */
            public _conn?: (protos.args.IKubeMQQueueConn|null);

            /** ReadGroupKubeMQQueueOptions args. */
            public args?: (protos.args.IKubeMQQueueReadArgs|null);

            /**
             * Creates a new ReadGroupKubeMQQueueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupKubeMQQueueOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupKubeMQQueueOptions): protos.opts.ReadGroupKubeMQQueueOptions;

            /**
             * Encodes the specified ReadGroupKubeMQQueueOptions message. Does not implicitly {@link protos.opts.ReadGroupKubeMQQueueOptions.verify|verify} messages.
             * @param message ReadGroupKubeMQQueueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupKubeMQQueueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupKubeMQQueueOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupKubeMQQueueOptions.verify|verify} messages.
             * @param message ReadGroupKubeMQQueueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupKubeMQQueueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupKubeMQQueueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupKubeMQQueueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupKubeMQQueueOptions;

            /**
             * Decodes a ReadGroupKubeMQQueueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupKubeMQQueueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupKubeMQQueueOptions;

            /**
             * Verifies a ReadGroupKubeMQQueueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupKubeMQQueueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupKubeMQQueueOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupKubeMQQueueOptions;

            /**
             * Creates a plain object from a ReadGroupKubeMQQueueOptions message. Also converts values to other types if specified.
             * @param message ReadGroupKubeMQQueueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupKubeMQQueueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupKubeMQQueueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupAWSKinesisOptions. */
        interface IReadGroupAWSKinesisOptions {

            /** ReadGroupAWSKinesisOptions _conn */
            _conn?: (protos.args.IAWSKinesisConn|null);

            /** ReadGroupAWSKinesisOptions args */
            args?: (protos.args.IAWSKinesisReadArgs|null);
        }

        /** Represents a ReadGroupAWSKinesisOptions. */
        class ReadGroupAWSKinesisOptions implements IReadGroupAWSKinesisOptions {

            /**
             * Constructs a new ReadGroupAWSKinesisOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupAWSKinesisOptions);

            /** ReadGroupAWSKinesisOptions _conn. */
            public _conn?: (protos.args.IAWSKinesisConn|null);

            /** ReadGroupAWSKinesisOptions args. */
            public args?: (protos.args.IAWSKinesisReadArgs|null);

            /**
             * Creates a new ReadGroupAWSKinesisOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupAWSKinesisOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupAWSKinesisOptions): protos.opts.ReadGroupAWSKinesisOptions;

            /**
             * Encodes the specified ReadGroupAWSKinesisOptions message. Does not implicitly {@link protos.opts.ReadGroupAWSKinesisOptions.verify|verify} messages.
             * @param message ReadGroupAWSKinesisOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupAWSKinesisOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupAWSKinesisOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupAWSKinesisOptions.verify|verify} messages.
             * @param message ReadGroupAWSKinesisOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupAWSKinesisOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupAWSKinesisOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupAWSKinesisOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupAWSKinesisOptions;

            /**
             * Decodes a ReadGroupAWSKinesisOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupAWSKinesisOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupAWSKinesisOptions;

            /**
             * Verifies a ReadGroupAWSKinesisOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupAWSKinesisOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupAWSKinesisOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupAWSKinesisOptions;

            /**
             * Creates a plain object from a ReadGroupAWSKinesisOptions message. Also converts values to other types if specified.
             * @param message ReadGroupAWSKinesisOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupAWSKinesisOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupAWSKinesisOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReadGroupMemphisOptions. */
        interface IReadGroupMemphisOptions {

            /** ReadGroupMemphisOptions _conn */
            _conn?: (protos.args.IMemphisConn|null);

            /** ReadGroupMemphisOptions args */
            args?: (protos.args.IMemphisReadArgs|null);
        }

        /** Represents a ReadGroupMemphisOptions. */
        class ReadGroupMemphisOptions implements IReadGroupMemphisOptions {

            /**
             * Constructs a new ReadGroupMemphisOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IReadGroupMemphisOptions);

            /** ReadGroupMemphisOptions _conn. */
            public _conn?: (protos.args.IMemphisConn|null);

            /** ReadGroupMemphisOptions args. */
            public args?: (protos.args.IMemphisReadArgs|null);

            /**
             * Creates a new ReadGroupMemphisOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadGroupMemphisOptions instance
             */
            public static create(properties?: protos.opts.IReadGroupMemphisOptions): protos.opts.ReadGroupMemphisOptions;

            /**
             * Encodes the specified ReadGroupMemphisOptions message. Does not implicitly {@link protos.opts.ReadGroupMemphisOptions.verify|verify} messages.
             * @param message ReadGroupMemphisOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IReadGroupMemphisOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadGroupMemphisOptions message, length delimited. Does not implicitly {@link protos.opts.ReadGroupMemphisOptions.verify|verify} messages.
             * @param message ReadGroupMemphisOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IReadGroupMemphisOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadGroupMemphisOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadGroupMemphisOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ReadGroupMemphisOptions;

            /**
             * Decodes a ReadGroupMemphisOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadGroupMemphisOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ReadGroupMemphisOptions;

            /**
             * Verifies a ReadGroupMemphisOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadGroupMemphisOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadGroupMemphisOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ReadGroupMemphisOptions;

            /**
             * Creates a plain object from a ReadGroupMemphisOptions message. Also converts values to other types if specified.
             * @param message ReadGroupMemphisOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ReadGroupMemphisOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadGroupMemphisOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an InferSchemaOptions. */
        interface IInferSchemaOptions {

            /** InferSchemaOptions type */
            type?: (protos.opts.InferSchemaOptions.Type|null);

            /** InferSchemaOptions schemaId */
            schemaId?: (string|null);
        }

        /** Represents an InferSchemaOptions. */
        class InferSchemaOptions implements IInferSchemaOptions {

            /**
             * Constructs a new InferSchemaOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IInferSchemaOptions);

            /** InferSchemaOptions type. */
            public type: protos.opts.InferSchemaOptions.Type;

            /** InferSchemaOptions schemaId. */
            public schemaId: string;

            /**
             * Creates a new InferSchemaOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InferSchemaOptions instance
             */
            public static create(properties?: protos.opts.IInferSchemaOptions): protos.opts.InferSchemaOptions;

            /**
             * Encodes the specified InferSchemaOptions message. Does not implicitly {@link protos.opts.InferSchemaOptions.verify|verify} messages.
             * @param message InferSchemaOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IInferSchemaOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InferSchemaOptions message, length delimited. Does not implicitly {@link protos.opts.InferSchemaOptions.verify|verify} messages.
             * @param message InferSchemaOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IInferSchemaOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InferSchemaOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InferSchemaOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.InferSchemaOptions;

            /**
             * Decodes an InferSchemaOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InferSchemaOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.InferSchemaOptions;

            /**
             * Verifies an InferSchemaOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an InferSchemaOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InferSchemaOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.InferSchemaOptions;

            /**
             * Creates a plain object from an InferSchemaOptions message. Also converts values to other types if specified.
             * @param message InferSchemaOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.InferSchemaOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InferSchemaOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace InferSchemaOptions {

            /** Type enum. */
            enum Type {
                UNSET = 0,
                JSONSCHEMA = 1
            }
        }

        /** Properties of a WriteCLIOptions. */
        interface IWriteCLIOptions {

            /** WriteCLIOptions inputFile */
            inputFile?: (string|null);

            /** WriteCLIOptions inputAsJsonArray */
            inputAsJsonArray?: (boolean|null);

            /** WriteCLIOptions inputStdin */
            inputStdin?: (string[]|null);
        }

        /** Represents a WriteCLIOptions. */
        class WriteCLIOptions implements IWriteCLIOptions {

            /**
             * Constructs a new WriteCLIOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteCLIOptions);

            /** WriteCLIOptions inputFile. */
            public inputFile: string;

            /** WriteCLIOptions inputAsJsonArray. */
            public inputAsJsonArray: boolean;

            /** WriteCLIOptions inputStdin. */
            public inputStdin: string[];

            /**
             * Creates a new WriteCLIOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteCLIOptions instance
             */
            public static create(properties?: protos.opts.IWriteCLIOptions): protos.opts.WriteCLIOptions;

            /**
             * Encodes the specified WriteCLIOptions message. Does not implicitly {@link protos.opts.WriteCLIOptions.verify|verify} messages.
             * @param message WriteCLIOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteCLIOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteCLIOptions message, length delimited. Does not implicitly {@link protos.opts.WriteCLIOptions.verify|verify} messages.
             * @param message WriteCLIOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteCLIOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteCLIOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteCLIOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteCLIOptions;

            /**
             * Decodes a WriteCLIOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteCLIOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteCLIOptions;

            /**
             * Verifies a WriteCLIOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteCLIOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteCLIOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteCLIOptions;

            /**
             * Creates a plain object from a WriteCLIOptions message. Also converts values to other types if specified.
             * @param message WriteCLIOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteCLIOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteCLIOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteOptions. */
        interface IWriteOptions {

            /** WriteOptions connectionId */
            connectionId?: (string|null);

            /** WriteOptions record */
            record?: (protos.records.IWriteRecord|null);

            /** WriteOptions encodeOptions */
            encodeOptions?: (protos.encoding.IEncodeOptions|null);

            /** WriteOptions _cliOptions */
            _cliOptions?: (protos.opts.IWriteCLIOptions|null);

            /** WriteOptions kafka */
            kafka?: (protos.opts.IWriteGroupKafkaOptions|null);

            /** WriteOptions activemq */
            activemq?: (protos.opts.IWriteGroupActiveMQOptions|null);

            /** WriteOptions awsSqs */
            awsSqs?: (protos.opts.IWriteGroupAWSSQSOptions|null);

            /** WriteOptions awsSns */
            awsSns?: (protos.opts.IWriteGroupAWSSNSOptions|null);

            /** WriteOptions nats */
            nats?: (protos.opts.IWriteGroupNatsOptions|null);

            /** WriteOptions natsStreaming */
            natsStreaming?: (protos.opts.IWriteGroupNatsStreamingOptions|null);

            /** WriteOptions nsq */
            nsq?: (protos.opts.IWriteGroupNSQOptions|null);

            /** WriteOptions pulsar */
            pulsar?: (protos.opts.IWriteGroupPulsarOptions|null);

            /** WriteOptions rabbit */
            rabbit?: (protos.opts.IWriteGroupRabbitOptions|null);

            /** WriteOptions rabbitStreams */
            rabbitStreams?: (protos.opts.IWriteGroupRabbitStreamsOptions|null);

            /** WriteOptions mqtt */
            mqtt?: (protos.opts.IWriteGroupMQTTOptions|null);

            /** WriteOptions azureServiceBus */
            azureServiceBus?: (protos.opts.IWriteGroupAzureServiceBusOptions|null);

            /** WriteOptions azureEventHub */
            azureEventHub?: (protos.opts.IWriteGroupAzureEventHubOptions|null);

            /** WriteOptions gcpPubsub */
            gcpPubsub?: (protos.opts.IWriteGroupGCPPubSubOptions|null);

            /** WriteOptions kubemqQueue */
            kubemqQueue?: (protos.opts.IWriteGroupKubeMQQueueOptions|null);

            /** WriteOptions redisPubsub */
            redisPubsub?: (protos.opts.IWriteGroupRedisPubSubOptions|null);

            /** WriteOptions redisStreams */
            redisStreams?: (protos.opts.IWriteGroupRedisStreamsOptions|null);

            /** WriteOptions natsJetstream */
            natsJetstream?: (protos.opts.IWriteGroupNatsJetstreamOptions|null);

            /** WriteOptions awsKinesis */
            awsKinesis?: (protos.opts.IWriteGroupAWSKinesisOptions|null);

            /** WriteOptions memphis */
            memphis?: (protos.opts.IWriteGroupMemphisOptions|null);
        }

        /** Represents a WriteOptions. */
        class WriteOptions implements IWriteOptions {

            /**
             * Constructs a new WriteOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteOptions);

            /** WriteOptions connectionId. */
            public connectionId: string;

            /** WriteOptions record. */
            public record?: (protos.records.IWriteRecord|null);

            /** WriteOptions encodeOptions. */
            public encodeOptions?: (protos.encoding.IEncodeOptions|null);

            /** WriteOptions _cliOptions. */
            public _cliOptions?: (protos.opts.IWriteCLIOptions|null);

            /** WriteOptions kafka. */
            public kafka?: (protos.opts.IWriteGroupKafkaOptions|null);

            /** WriteOptions activemq. */
            public activemq?: (protos.opts.IWriteGroupActiveMQOptions|null);

            /** WriteOptions awsSqs. */
            public awsSqs?: (protos.opts.IWriteGroupAWSSQSOptions|null);

            /** WriteOptions awsSns. */
            public awsSns?: (protos.opts.IWriteGroupAWSSNSOptions|null);

            /** WriteOptions nats. */
            public nats?: (protos.opts.IWriteGroupNatsOptions|null);

            /** WriteOptions natsStreaming. */
            public natsStreaming?: (protos.opts.IWriteGroupNatsStreamingOptions|null);

            /** WriteOptions nsq. */
            public nsq?: (protos.opts.IWriteGroupNSQOptions|null);

            /** WriteOptions pulsar. */
            public pulsar?: (protos.opts.IWriteGroupPulsarOptions|null);

            /** WriteOptions rabbit. */
            public rabbit?: (protos.opts.IWriteGroupRabbitOptions|null);

            /** WriteOptions rabbitStreams. */
            public rabbitStreams?: (protos.opts.IWriteGroupRabbitStreamsOptions|null);

            /** WriteOptions mqtt. */
            public mqtt?: (protos.opts.IWriteGroupMQTTOptions|null);

            /** WriteOptions azureServiceBus. */
            public azureServiceBus?: (protos.opts.IWriteGroupAzureServiceBusOptions|null);

            /** WriteOptions azureEventHub. */
            public azureEventHub?: (protos.opts.IWriteGroupAzureEventHubOptions|null);

            /** WriteOptions gcpPubsub. */
            public gcpPubsub?: (protos.opts.IWriteGroupGCPPubSubOptions|null);

            /** WriteOptions kubemqQueue. */
            public kubemqQueue?: (protos.opts.IWriteGroupKubeMQQueueOptions|null);

            /** WriteOptions redisPubsub. */
            public redisPubsub?: (protos.opts.IWriteGroupRedisPubSubOptions|null);

            /** WriteOptions redisStreams. */
            public redisStreams?: (protos.opts.IWriteGroupRedisStreamsOptions|null);

            /** WriteOptions natsJetstream. */
            public natsJetstream?: (protos.opts.IWriteGroupNatsJetstreamOptions|null);

            /** WriteOptions awsKinesis. */
            public awsKinesis?: (protos.opts.IWriteGroupAWSKinesisOptions|null);

            /** WriteOptions memphis. */
            public memphis?: (protos.opts.IWriteGroupMemphisOptions|null);

            /**
             * Creates a new WriteOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteOptions instance
             */
            public static create(properties?: protos.opts.IWriteOptions): protos.opts.WriteOptions;

            /**
             * Encodes the specified WriteOptions message. Does not implicitly {@link protos.opts.WriteOptions.verify|verify} messages.
             * @param message WriteOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteOptions message, length delimited. Does not implicitly {@link protos.opts.WriteOptions.verify|verify} messages.
             * @param message WriteOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteOptions;

            /**
             * Decodes a WriteOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteOptions;

            /**
             * Verifies a WriteOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteOptions;

            /**
             * Creates a plain object from a WriteOptions message. Also converts values to other types if specified.
             * @param message WriteOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteGroupKafkaOptions. */
        interface IWriteGroupKafkaOptions {

            /** WriteGroupKafkaOptions _conn */
            _conn?: (protos.args.IKafkaConn|null);

            /** WriteGroupKafkaOptions args */
            args?: (protos.args.IKafkaWriteArgs|null);
        }

        /** Represents a WriteGroupKafkaOptions. */
        class WriteGroupKafkaOptions implements IWriteGroupKafkaOptions {

            /**
             * Constructs a new WriteGroupKafkaOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteGroupKafkaOptions);

            /** WriteGroupKafkaOptions _conn. */
            public _conn?: (protos.args.IKafkaConn|null);

            /** WriteGroupKafkaOptions args. */
            public args?: (protos.args.IKafkaWriteArgs|null);

            /**
             * Creates a new WriteGroupKafkaOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteGroupKafkaOptions instance
             */
            public static create(properties?: protos.opts.IWriteGroupKafkaOptions): protos.opts.WriteGroupKafkaOptions;

            /**
             * Encodes the specified WriteGroupKafkaOptions message. Does not implicitly {@link protos.opts.WriteGroupKafkaOptions.verify|verify} messages.
             * @param message WriteGroupKafkaOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteGroupKafkaOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteGroupKafkaOptions message, length delimited. Does not implicitly {@link protos.opts.WriteGroupKafkaOptions.verify|verify} messages.
             * @param message WriteGroupKafkaOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteGroupKafkaOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteGroupKafkaOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteGroupKafkaOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteGroupKafkaOptions;

            /**
             * Decodes a WriteGroupKafkaOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteGroupKafkaOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteGroupKafkaOptions;

            /**
             * Verifies a WriteGroupKafkaOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteGroupKafkaOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteGroupKafkaOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteGroupKafkaOptions;

            /**
             * Creates a plain object from a WriteGroupKafkaOptions message. Also converts values to other types if specified.
             * @param message WriteGroupKafkaOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteGroupKafkaOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteGroupKafkaOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteGroupActiveMQOptions. */
        interface IWriteGroupActiveMQOptions {

            /** WriteGroupActiveMQOptions _conn */
            _conn?: (protos.args.IActiveMQConn|null);

            /** WriteGroupActiveMQOptions args */
            args?: (protos.args.IActiveMQWriteArgs|null);
        }

        /** Represents a WriteGroupActiveMQOptions. */
        class WriteGroupActiveMQOptions implements IWriteGroupActiveMQOptions {

            /**
             * Constructs a new WriteGroupActiveMQOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteGroupActiveMQOptions);

            /** WriteGroupActiveMQOptions _conn. */
            public _conn?: (protos.args.IActiveMQConn|null);

            /** WriteGroupActiveMQOptions args. */
            public args?: (protos.args.IActiveMQWriteArgs|null);

            /**
             * Creates a new WriteGroupActiveMQOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteGroupActiveMQOptions instance
             */
            public static create(properties?: protos.opts.IWriteGroupActiveMQOptions): protos.opts.WriteGroupActiveMQOptions;

            /**
             * Encodes the specified WriteGroupActiveMQOptions message. Does not implicitly {@link protos.opts.WriteGroupActiveMQOptions.verify|verify} messages.
             * @param message WriteGroupActiveMQOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteGroupActiveMQOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteGroupActiveMQOptions message, length delimited. Does not implicitly {@link protos.opts.WriteGroupActiveMQOptions.verify|verify} messages.
             * @param message WriteGroupActiveMQOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteGroupActiveMQOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteGroupActiveMQOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteGroupActiveMQOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteGroupActiveMQOptions;

            /**
             * Decodes a WriteGroupActiveMQOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteGroupActiveMQOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteGroupActiveMQOptions;

            /**
             * Verifies a WriteGroupActiveMQOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteGroupActiveMQOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteGroupActiveMQOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteGroupActiveMQOptions;

            /**
             * Creates a plain object from a WriteGroupActiveMQOptions message. Also converts values to other types if specified.
             * @param message WriteGroupActiveMQOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteGroupActiveMQOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteGroupActiveMQOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteGroupAWSSQSOptions. */
        interface IWriteGroupAWSSQSOptions {

            /** WriteGroupAWSSQSOptions _conn */
            _conn?: (protos.args.IAWSSQSConn|null);

            /** WriteGroupAWSSQSOptions args */
            args?: (protos.args.IAWSSQSWriteArgs|null);
        }

        /** Represents a WriteGroupAWSSQSOptions. */
        class WriteGroupAWSSQSOptions implements IWriteGroupAWSSQSOptions {

            /**
             * Constructs a new WriteGroupAWSSQSOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteGroupAWSSQSOptions);

            /** WriteGroupAWSSQSOptions _conn. */
            public _conn?: (protos.args.IAWSSQSConn|null);

            /** WriteGroupAWSSQSOptions args. */
            public args?: (protos.args.IAWSSQSWriteArgs|null);

            /**
             * Creates a new WriteGroupAWSSQSOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteGroupAWSSQSOptions instance
             */
            public static create(properties?: protos.opts.IWriteGroupAWSSQSOptions): protos.opts.WriteGroupAWSSQSOptions;

            /**
             * Encodes the specified WriteGroupAWSSQSOptions message. Does not implicitly {@link protos.opts.WriteGroupAWSSQSOptions.verify|verify} messages.
             * @param message WriteGroupAWSSQSOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteGroupAWSSQSOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteGroupAWSSQSOptions message, length delimited. Does not implicitly {@link protos.opts.WriteGroupAWSSQSOptions.verify|verify} messages.
             * @param message WriteGroupAWSSQSOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteGroupAWSSQSOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteGroupAWSSQSOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteGroupAWSSQSOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteGroupAWSSQSOptions;

            /**
             * Decodes a WriteGroupAWSSQSOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteGroupAWSSQSOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteGroupAWSSQSOptions;

            /**
             * Verifies a WriteGroupAWSSQSOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteGroupAWSSQSOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteGroupAWSSQSOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteGroupAWSSQSOptions;

            /**
             * Creates a plain object from a WriteGroupAWSSQSOptions message. Also converts values to other types if specified.
             * @param message WriteGroupAWSSQSOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteGroupAWSSQSOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteGroupAWSSQSOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteGroupAWSSNSOptions. */
        interface IWriteGroupAWSSNSOptions {

            /** WriteGroupAWSSNSOptions _conn */
            _conn?: (protos.args.IAWSSNSConn|null);

            /** WriteGroupAWSSNSOptions args */
            args?: (protos.args.IAWSSNSWriteArgs|null);
        }

        /** Represents a WriteGroupAWSSNSOptions. */
        class WriteGroupAWSSNSOptions implements IWriteGroupAWSSNSOptions {

            /**
             * Constructs a new WriteGroupAWSSNSOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteGroupAWSSNSOptions);

            /** WriteGroupAWSSNSOptions _conn. */
            public _conn?: (protos.args.IAWSSNSConn|null);

            /** WriteGroupAWSSNSOptions args. */
            public args?: (protos.args.IAWSSNSWriteArgs|null);

            /**
             * Creates a new WriteGroupAWSSNSOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteGroupAWSSNSOptions instance
             */
            public static create(properties?: protos.opts.IWriteGroupAWSSNSOptions): protos.opts.WriteGroupAWSSNSOptions;

            /**
             * Encodes the specified WriteGroupAWSSNSOptions message. Does not implicitly {@link protos.opts.WriteGroupAWSSNSOptions.verify|verify} messages.
             * @param message WriteGroupAWSSNSOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteGroupAWSSNSOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteGroupAWSSNSOptions message, length delimited. Does not implicitly {@link protos.opts.WriteGroupAWSSNSOptions.verify|verify} messages.
             * @param message WriteGroupAWSSNSOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteGroupAWSSNSOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteGroupAWSSNSOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteGroupAWSSNSOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteGroupAWSSNSOptions;

            /**
             * Decodes a WriteGroupAWSSNSOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteGroupAWSSNSOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteGroupAWSSNSOptions;

            /**
             * Verifies a WriteGroupAWSSNSOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteGroupAWSSNSOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteGroupAWSSNSOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteGroupAWSSNSOptions;

            /**
             * Creates a plain object from a WriteGroupAWSSNSOptions message. Also converts values to other types if specified.
             * @param message WriteGroupAWSSNSOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteGroupAWSSNSOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteGroupAWSSNSOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteGroupNatsOptions. */
        interface IWriteGroupNatsOptions {

            /** WriteGroupNatsOptions _conn */
            _conn?: (protos.args.INatsConn|null);

            /** WriteGroupNatsOptions args */
            args?: (protos.args.INatsWriteArgs|null);
        }

        /** Represents a WriteGroupNatsOptions. */
        class WriteGroupNatsOptions implements IWriteGroupNatsOptions {

            /**
             * Constructs a new WriteGroupNatsOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteGroupNatsOptions);

            /** WriteGroupNatsOptions _conn. */
            public _conn?: (protos.args.INatsConn|null);

            /** WriteGroupNatsOptions args. */
            public args?: (protos.args.INatsWriteArgs|null);

            /**
             * Creates a new WriteGroupNatsOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteGroupNatsOptions instance
             */
            public static create(properties?: protos.opts.IWriteGroupNatsOptions): protos.opts.WriteGroupNatsOptions;

            /**
             * Encodes the specified WriteGroupNatsOptions message. Does not implicitly {@link protos.opts.WriteGroupNatsOptions.verify|verify} messages.
             * @param message WriteGroupNatsOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteGroupNatsOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteGroupNatsOptions message, length delimited. Does not implicitly {@link protos.opts.WriteGroupNatsOptions.verify|verify} messages.
             * @param message WriteGroupNatsOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteGroupNatsOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteGroupNatsOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteGroupNatsOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteGroupNatsOptions;

            /**
             * Decodes a WriteGroupNatsOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteGroupNatsOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteGroupNatsOptions;

            /**
             * Verifies a WriteGroupNatsOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteGroupNatsOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteGroupNatsOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteGroupNatsOptions;

            /**
             * Creates a plain object from a WriteGroupNatsOptions message. Also converts values to other types if specified.
             * @param message WriteGroupNatsOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteGroupNatsOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteGroupNatsOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteGroupNatsJetstreamOptions. */
        interface IWriteGroupNatsJetstreamOptions {

            /** WriteGroupNatsJetstreamOptions _conn */
            _conn?: (protos.args.INatsJetstreamConn|null);

            /** WriteGroupNatsJetstreamOptions args */
            args?: (protos.args.INatsJetstreamWriteArgs|null);
        }

        /** Represents a WriteGroupNatsJetstreamOptions. */
        class WriteGroupNatsJetstreamOptions implements IWriteGroupNatsJetstreamOptions {

            /**
             * Constructs a new WriteGroupNatsJetstreamOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteGroupNatsJetstreamOptions);

            /** WriteGroupNatsJetstreamOptions _conn. */
            public _conn?: (protos.args.INatsJetstreamConn|null);

            /** WriteGroupNatsJetstreamOptions args. */
            public args?: (protos.args.INatsJetstreamWriteArgs|null);

            /**
             * Creates a new WriteGroupNatsJetstreamOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteGroupNatsJetstreamOptions instance
             */
            public static create(properties?: protos.opts.IWriteGroupNatsJetstreamOptions): protos.opts.WriteGroupNatsJetstreamOptions;

            /**
             * Encodes the specified WriteGroupNatsJetstreamOptions message. Does not implicitly {@link protos.opts.WriteGroupNatsJetstreamOptions.verify|verify} messages.
             * @param message WriteGroupNatsJetstreamOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteGroupNatsJetstreamOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteGroupNatsJetstreamOptions message, length delimited. Does not implicitly {@link protos.opts.WriteGroupNatsJetstreamOptions.verify|verify} messages.
             * @param message WriteGroupNatsJetstreamOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteGroupNatsJetstreamOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteGroupNatsJetstreamOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteGroupNatsJetstreamOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteGroupNatsJetstreamOptions;

            /**
             * Decodes a WriteGroupNatsJetstreamOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteGroupNatsJetstreamOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteGroupNatsJetstreamOptions;

            /**
             * Verifies a WriteGroupNatsJetstreamOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteGroupNatsJetstreamOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteGroupNatsJetstreamOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteGroupNatsJetstreamOptions;

            /**
             * Creates a plain object from a WriteGroupNatsJetstreamOptions message. Also converts values to other types if specified.
             * @param message WriteGroupNatsJetstreamOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteGroupNatsJetstreamOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteGroupNatsJetstreamOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteGroupNatsStreamingOptions. */
        interface IWriteGroupNatsStreamingOptions {

            /** WriteGroupNatsStreamingOptions _conn */
            _conn?: (protos.args.INatsStreamingConn|null);

            /** WriteGroupNatsStreamingOptions args */
            args?: (protos.args.INatsStreamingWriteArgs|null);
        }

        /** Represents a WriteGroupNatsStreamingOptions. */
        class WriteGroupNatsStreamingOptions implements IWriteGroupNatsStreamingOptions {

            /**
             * Constructs a new WriteGroupNatsStreamingOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteGroupNatsStreamingOptions);

            /** WriteGroupNatsStreamingOptions _conn. */
            public _conn?: (protos.args.INatsStreamingConn|null);

            /** WriteGroupNatsStreamingOptions args. */
            public args?: (protos.args.INatsStreamingWriteArgs|null);

            /**
             * Creates a new WriteGroupNatsStreamingOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteGroupNatsStreamingOptions instance
             */
            public static create(properties?: protos.opts.IWriteGroupNatsStreamingOptions): protos.opts.WriteGroupNatsStreamingOptions;

            /**
             * Encodes the specified WriteGroupNatsStreamingOptions message. Does not implicitly {@link protos.opts.WriteGroupNatsStreamingOptions.verify|verify} messages.
             * @param message WriteGroupNatsStreamingOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteGroupNatsStreamingOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteGroupNatsStreamingOptions message, length delimited. Does not implicitly {@link protos.opts.WriteGroupNatsStreamingOptions.verify|verify} messages.
             * @param message WriteGroupNatsStreamingOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteGroupNatsStreamingOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteGroupNatsStreamingOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteGroupNatsStreamingOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteGroupNatsStreamingOptions;

            /**
             * Decodes a WriteGroupNatsStreamingOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteGroupNatsStreamingOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteGroupNatsStreamingOptions;

            /**
             * Verifies a WriteGroupNatsStreamingOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteGroupNatsStreamingOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteGroupNatsStreamingOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteGroupNatsStreamingOptions;

            /**
             * Creates a plain object from a WriteGroupNatsStreamingOptions message. Also converts values to other types if specified.
             * @param message WriteGroupNatsStreamingOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteGroupNatsStreamingOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteGroupNatsStreamingOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteGroupNSQOptions. */
        interface IWriteGroupNSQOptions {

            /** WriteGroupNSQOptions _conn */
            _conn?: (protos.args.INSQConn|null);

            /** WriteGroupNSQOptions args */
            args?: (protos.args.INSQWriteArgs|null);
        }

        /** Represents a WriteGroupNSQOptions. */
        class WriteGroupNSQOptions implements IWriteGroupNSQOptions {

            /**
             * Constructs a new WriteGroupNSQOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteGroupNSQOptions);

            /** WriteGroupNSQOptions _conn. */
            public _conn?: (protos.args.INSQConn|null);

            /** WriteGroupNSQOptions args. */
            public args?: (protos.args.INSQWriteArgs|null);

            /**
             * Creates a new WriteGroupNSQOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteGroupNSQOptions instance
             */
            public static create(properties?: protos.opts.IWriteGroupNSQOptions): protos.opts.WriteGroupNSQOptions;

            /**
             * Encodes the specified WriteGroupNSQOptions message. Does not implicitly {@link protos.opts.WriteGroupNSQOptions.verify|verify} messages.
             * @param message WriteGroupNSQOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteGroupNSQOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteGroupNSQOptions message, length delimited. Does not implicitly {@link protos.opts.WriteGroupNSQOptions.verify|verify} messages.
             * @param message WriteGroupNSQOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteGroupNSQOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteGroupNSQOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteGroupNSQOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteGroupNSQOptions;

            /**
             * Decodes a WriteGroupNSQOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteGroupNSQOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteGroupNSQOptions;

            /**
             * Verifies a WriteGroupNSQOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteGroupNSQOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteGroupNSQOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteGroupNSQOptions;

            /**
             * Creates a plain object from a WriteGroupNSQOptions message. Also converts values to other types if specified.
             * @param message WriteGroupNSQOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteGroupNSQOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteGroupNSQOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteGroupPulsarOptions. */
        interface IWriteGroupPulsarOptions {

            /** WriteGroupPulsarOptions _conn */
            _conn?: (protos.args.IPulsarConn|null);

            /** WriteGroupPulsarOptions args */
            args?: (protos.args.IPulsarWriteArgs|null);
        }

        /** Represents a WriteGroupPulsarOptions. */
        class WriteGroupPulsarOptions implements IWriteGroupPulsarOptions {

            /**
             * Constructs a new WriteGroupPulsarOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteGroupPulsarOptions);

            /** WriteGroupPulsarOptions _conn. */
            public _conn?: (protos.args.IPulsarConn|null);

            /** WriteGroupPulsarOptions args. */
            public args?: (protos.args.IPulsarWriteArgs|null);

            /**
             * Creates a new WriteGroupPulsarOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteGroupPulsarOptions instance
             */
            public static create(properties?: protos.opts.IWriteGroupPulsarOptions): protos.opts.WriteGroupPulsarOptions;

            /**
             * Encodes the specified WriteGroupPulsarOptions message. Does not implicitly {@link protos.opts.WriteGroupPulsarOptions.verify|verify} messages.
             * @param message WriteGroupPulsarOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteGroupPulsarOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteGroupPulsarOptions message, length delimited. Does not implicitly {@link protos.opts.WriteGroupPulsarOptions.verify|verify} messages.
             * @param message WriteGroupPulsarOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteGroupPulsarOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteGroupPulsarOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteGroupPulsarOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteGroupPulsarOptions;

            /**
             * Decodes a WriteGroupPulsarOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteGroupPulsarOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteGroupPulsarOptions;

            /**
             * Verifies a WriteGroupPulsarOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteGroupPulsarOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteGroupPulsarOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteGroupPulsarOptions;

            /**
             * Creates a plain object from a WriteGroupPulsarOptions message. Also converts values to other types if specified.
             * @param message WriteGroupPulsarOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteGroupPulsarOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteGroupPulsarOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteGroupRabbitOptions. */
        interface IWriteGroupRabbitOptions {

            /** WriteGroupRabbitOptions _conn */
            _conn?: (protos.args.IRabbitConn|null);

            /** WriteGroupRabbitOptions args */
            args?: (protos.args.IRabbitWriteArgs|null);
        }

        /** Represents a WriteGroupRabbitOptions. */
        class WriteGroupRabbitOptions implements IWriteGroupRabbitOptions {

            /**
             * Constructs a new WriteGroupRabbitOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteGroupRabbitOptions);

            /** WriteGroupRabbitOptions _conn. */
            public _conn?: (protos.args.IRabbitConn|null);

            /** WriteGroupRabbitOptions args. */
            public args?: (protos.args.IRabbitWriteArgs|null);

            /**
             * Creates a new WriteGroupRabbitOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteGroupRabbitOptions instance
             */
            public static create(properties?: protos.opts.IWriteGroupRabbitOptions): protos.opts.WriteGroupRabbitOptions;

            /**
             * Encodes the specified WriteGroupRabbitOptions message. Does not implicitly {@link protos.opts.WriteGroupRabbitOptions.verify|verify} messages.
             * @param message WriteGroupRabbitOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteGroupRabbitOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteGroupRabbitOptions message, length delimited. Does not implicitly {@link protos.opts.WriteGroupRabbitOptions.verify|verify} messages.
             * @param message WriteGroupRabbitOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteGroupRabbitOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteGroupRabbitOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteGroupRabbitOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteGroupRabbitOptions;

            /**
             * Decodes a WriteGroupRabbitOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteGroupRabbitOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteGroupRabbitOptions;

            /**
             * Verifies a WriteGroupRabbitOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteGroupRabbitOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteGroupRabbitOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteGroupRabbitOptions;

            /**
             * Creates a plain object from a WriteGroupRabbitOptions message. Also converts values to other types if specified.
             * @param message WriteGroupRabbitOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteGroupRabbitOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteGroupRabbitOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteGroupRabbitStreamsOptions. */
        interface IWriteGroupRabbitStreamsOptions {

            /** WriteGroupRabbitStreamsOptions _conn */
            _conn?: (protos.args.IRabbitStreamsConn|null);

            /** WriteGroupRabbitStreamsOptions args */
            args?: (protos.args.IRabbitStreamsWriteArgs|null);
        }

        /** Represents a WriteGroupRabbitStreamsOptions. */
        class WriteGroupRabbitStreamsOptions implements IWriteGroupRabbitStreamsOptions {

            /**
             * Constructs a new WriteGroupRabbitStreamsOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteGroupRabbitStreamsOptions);

            /** WriteGroupRabbitStreamsOptions _conn. */
            public _conn?: (protos.args.IRabbitStreamsConn|null);

            /** WriteGroupRabbitStreamsOptions args. */
            public args?: (protos.args.IRabbitStreamsWriteArgs|null);

            /**
             * Creates a new WriteGroupRabbitStreamsOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteGroupRabbitStreamsOptions instance
             */
            public static create(properties?: protos.opts.IWriteGroupRabbitStreamsOptions): protos.opts.WriteGroupRabbitStreamsOptions;

            /**
             * Encodes the specified WriteGroupRabbitStreamsOptions message. Does not implicitly {@link protos.opts.WriteGroupRabbitStreamsOptions.verify|verify} messages.
             * @param message WriteGroupRabbitStreamsOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteGroupRabbitStreamsOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteGroupRabbitStreamsOptions message, length delimited. Does not implicitly {@link protos.opts.WriteGroupRabbitStreamsOptions.verify|verify} messages.
             * @param message WriteGroupRabbitStreamsOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteGroupRabbitStreamsOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteGroupRabbitStreamsOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteGroupRabbitStreamsOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteGroupRabbitStreamsOptions;

            /**
             * Decodes a WriteGroupRabbitStreamsOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteGroupRabbitStreamsOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteGroupRabbitStreamsOptions;

            /**
             * Verifies a WriteGroupRabbitStreamsOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteGroupRabbitStreamsOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteGroupRabbitStreamsOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteGroupRabbitStreamsOptions;

            /**
             * Creates a plain object from a WriteGroupRabbitStreamsOptions message. Also converts values to other types if specified.
             * @param message WriteGroupRabbitStreamsOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteGroupRabbitStreamsOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteGroupRabbitStreamsOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteGroupRedisPubSubOptions. */
        interface IWriteGroupRedisPubSubOptions {

            /** WriteGroupRedisPubSubOptions _conn */
            _conn?: (protos.args.IRedisPubSubConn|null);

            /** WriteGroupRedisPubSubOptions args */
            args?: (protos.args.IRedisPubSubWriteArgs|null);
        }

        /** Represents a WriteGroupRedisPubSubOptions. */
        class WriteGroupRedisPubSubOptions implements IWriteGroupRedisPubSubOptions {

            /**
             * Constructs a new WriteGroupRedisPubSubOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteGroupRedisPubSubOptions);

            /** WriteGroupRedisPubSubOptions _conn. */
            public _conn?: (protos.args.IRedisPubSubConn|null);

            /** WriteGroupRedisPubSubOptions args. */
            public args?: (protos.args.IRedisPubSubWriteArgs|null);

            /**
             * Creates a new WriteGroupRedisPubSubOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteGroupRedisPubSubOptions instance
             */
            public static create(properties?: protos.opts.IWriteGroupRedisPubSubOptions): protos.opts.WriteGroupRedisPubSubOptions;

            /**
             * Encodes the specified WriteGroupRedisPubSubOptions message. Does not implicitly {@link protos.opts.WriteGroupRedisPubSubOptions.verify|verify} messages.
             * @param message WriteGroupRedisPubSubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteGroupRedisPubSubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteGroupRedisPubSubOptions message, length delimited. Does not implicitly {@link protos.opts.WriteGroupRedisPubSubOptions.verify|verify} messages.
             * @param message WriteGroupRedisPubSubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteGroupRedisPubSubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteGroupRedisPubSubOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteGroupRedisPubSubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteGroupRedisPubSubOptions;

            /**
             * Decodes a WriteGroupRedisPubSubOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteGroupRedisPubSubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteGroupRedisPubSubOptions;

            /**
             * Verifies a WriteGroupRedisPubSubOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteGroupRedisPubSubOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteGroupRedisPubSubOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteGroupRedisPubSubOptions;

            /**
             * Creates a plain object from a WriteGroupRedisPubSubOptions message. Also converts values to other types if specified.
             * @param message WriteGroupRedisPubSubOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteGroupRedisPubSubOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteGroupRedisPubSubOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteGroupRedisStreamsOptions. */
        interface IWriteGroupRedisStreamsOptions {

            /** WriteGroupRedisStreamsOptions _conn */
            _conn?: (protos.args.IRedisStreamsConn|null);

            /** WriteGroupRedisStreamsOptions args */
            args?: (protos.args.IRedisStreamsWriteArgs|null);
        }

        /** Represents a WriteGroupRedisStreamsOptions. */
        class WriteGroupRedisStreamsOptions implements IWriteGroupRedisStreamsOptions {

            /**
             * Constructs a new WriteGroupRedisStreamsOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteGroupRedisStreamsOptions);

            /** WriteGroupRedisStreamsOptions _conn. */
            public _conn?: (protos.args.IRedisStreamsConn|null);

            /** WriteGroupRedisStreamsOptions args. */
            public args?: (protos.args.IRedisStreamsWriteArgs|null);

            /**
             * Creates a new WriteGroupRedisStreamsOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteGroupRedisStreamsOptions instance
             */
            public static create(properties?: protos.opts.IWriteGroupRedisStreamsOptions): protos.opts.WriteGroupRedisStreamsOptions;

            /**
             * Encodes the specified WriteGroupRedisStreamsOptions message. Does not implicitly {@link protos.opts.WriteGroupRedisStreamsOptions.verify|verify} messages.
             * @param message WriteGroupRedisStreamsOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteGroupRedisStreamsOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteGroupRedisStreamsOptions message, length delimited. Does not implicitly {@link protos.opts.WriteGroupRedisStreamsOptions.verify|verify} messages.
             * @param message WriteGroupRedisStreamsOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteGroupRedisStreamsOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteGroupRedisStreamsOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteGroupRedisStreamsOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteGroupRedisStreamsOptions;

            /**
             * Decodes a WriteGroupRedisStreamsOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteGroupRedisStreamsOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteGroupRedisStreamsOptions;

            /**
             * Verifies a WriteGroupRedisStreamsOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteGroupRedisStreamsOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteGroupRedisStreamsOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteGroupRedisStreamsOptions;

            /**
             * Creates a plain object from a WriteGroupRedisStreamsOptions message. Also converts values to other types if specified.
             * @param message WriteGroupRedisStreamsOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteGroupRedisStreamsOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteGroupRedisStreamsOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteGroupAzureEventHubOptions. */
        interface IWriteGroupAzureEventHubOptions {

            /** WriteGroupAzureEventHubOptions _conn */
            _conn?: (protos.args.IAzureEventHubConn|null);

            /** WriteGroupAzureEventHubOptions args */
            args?: (protos.args.IAzureEventHubWriteArgs|null);
        }

        /** Represents a WriteGroupAzureEventHubOptions. */
        class WriteGroupAzureEventHubOptions implements IWriteGroupAzureEventHubOptions {

            /**
             * Constructs a new WriteGroupAzureEventHubOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteGroupAzureEventHubOptions);

            /** WriteGroupAzureEventHubOptions _conn. */
            public _conn?: (protos.args.IAzureEventHubConn|null);

            /** WriteGroupAzureEventHubOptions args. */
            public args?: (protos.args.IAzureEventHubWriteArgs|null);

            /**
             * Creates a new WriteGroupAzureEventHubOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteGroupAzureEventHubOptions instance
             */
            public static create(properties?: protos.opts.IWriteGroupAzureEventHubOptions): protos.opts.WriteGroupAzureEventHubOptions;

            /**
             * Encodes the specified WriteGroupAzureEventHubOptions message. Does not implicitly {@link protos.opts.WriteGroupAzureEventHubOptions.verify|verify} messages.
             * @param message WriteGroupAzureEventHubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteGroupAzureEventHubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteGroupAzureEventHubOptions message, length delimited. Does not implicitly {@link protos.opts.WriteGroupAzureEventHubOptions.verify|verify} messages.
             * @param message WriteGroupAzureEventHubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteGroupAzureEventHubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteGroupAzureEventHubOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteGroupAzureEventHubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteGroupAzureEventHubOptions;

            /**
             * Decodes a WriteGroupAzureEventHubOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteGroupAzureEventHubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteGroupAzureEventHubOptions;

            /**
             * Verifies a WriteGroupAzureEventHubOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteGroupAzureEventHubOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteGroupAzureEventHubOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteGroupAzureEventHubOptions;

            /**
             * Creates a plain object from a WriteGroupAzureEventHubOptions message. Also converts values to other types if specified.
             * @param message WriteGroupAzureEventHubOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteGroupAzureEventHubOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteGroupAzureEventHubOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteGroupAzureServiceBusOptions. */
        interface IWriteGroupAzureServiceBusOptions {

            /** WriteGroupAzureServiceBusOptions _conn */
            _conn?: (protos.args.IAzureServiceBusConn|null);

            /** WriteGroupAzureServiceBusOptions args */
            args?: (protos.args.IAzureServiceBusWriteArgs|null);
        }

        /** Represents a WriteGroupAzureServiceBusOptions. */
        class WriteGroupAzureServiceBusOptions implements IWriteGroupAzureServiceBusOptions {

            /**
             * Constructs a new WriteGroupAzureServiceBusOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteGroupAzureServiceBusOptions);

            /** WriteGroupAzureServiceBusOptions _conn. */
            public _conn?: (protos.args.IAzureServiceBusConn|null);

            /** WriteGroupAzureServiceBusOptions args. */
            public args?: (protos.args.IAzureServiceBusWriteArgs|null);

            /**
             * Creates a new WriteGroupAzureServiceBusOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteGroupAzureServiceBusOptions instance
             */
            public static create(properties?: protos.opts.IWriteGroupAzureServiceBusOptions): protos.opts.WriteGroupAzureServiceBusOptions;

            /**
             * Encodes the specified WriteGroupAzureServiceBusOptions message. Does not implicitly {@link protos.opts.WriteGroupAzureServiceBusOptions.verify|verify} messages.
             * @param message WriteGroupAzureServiceBusOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteGroupAzureServiceBusOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteGroupAzureServiceBusOptions message, length delimited. Does not implicitly {@link protos.opts.WriteGroupAzureServiceBusOptions.verify|verify} messages.
             * @param message WriteGroupAzureServiceBusOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteGroupAzureServiceBusOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteGroupAzureServiceBusOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteGroupAzureServiceBusOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteGroupAzureServiceBusOptions;

            /**
             * Decodes a WriteGroupAzureServiceBusOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteGroupAzureServiceBusOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteGroupAzureServiceBusOptions;

            /**
             * Verifies a WriteGroupAzureServiceBusOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteGroupAzureServiceBusOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteGroupAzureServiceBusOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteGroupAzureServiceBusOptions;

            /**
             * Creates a plain object from a WriteGroupAzureServiceBusOptions message. Also converts values to other types if specified.
             * @param message WriteGroupAzureServiceBusOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteGroupAzureServiceBusOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteGroupAzureServiceBusOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteGroupMQTTOptions. */
        interface IWriteGroupMQTTOptions {

            /** WriteGroupMQTTOptions _conn */
            _conn?: (protos.args.IMQTTConn|null);

            /** WriteGroupMQTTOptions args */
            args?: (protos.args.IMQTTWriteArgs|null);
        }

        /** Represents a WriteGroupMQTTOptions. */
        class WriteGroupMQTTOptions implements IWriteGroupMQTTOptions {

            /**
             * Constructs a new WriteGroupMQTTOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteGroupMQTTOptions);

            /** WriteGroupMQTTOptions _conn. */
            public _conn?: (protos.args.IMQTTConn|null);

            /** WriteGroupMQTTOptions args. */
            public args?: (protos.args.IMQTTWriteArgs|null);

            /**
             * Creates a new WriteGroupMQTTOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteGroupMQTTOptions instance
             */
            public static create(properties?: protos.opts.IWriteGroupMQTTOptions): protos.opts.WriteGroupMQTTOptions;

            /**
             * Encodes the specified WriteGroupMQTTOptions message. Does not implicitly {@link protos.opts.WriteGroupMQTTOptions.verify|verify} messages.
             * @param message WriteGroupMQTTOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteGroupMQTTOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteGroupMQTTOptions message, length delimited. Does not implicitly {@link protos.opts.WriteGroupMQTTOptions.verify|verify} messages.
             * @param message WriteGroupMQTTOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteGroupMQTTOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteGroupMQTTOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteGroupMQTTOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteGroupMQTTOptions;

            /**
             * Decodes a WriteGroupMQTTOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteGroupMQTTOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteGroupMQTTOptions;

            /**
             * Verifies a WriteGroupMQTTOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteGroupMQTTOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteGroupMQTTOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteGroupMQTTOptions;

            /**
             * Creates a plain object from a WriteGroupMQTTOptions message. Also converts values to other types if specified.
             * @param message WriteGroupMQTTOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteGroupMQTTOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteGroupMQTTOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteGroupGCPPubSubOptions. */
        interface IWriteGroupGCPPubSubOptions {

            /** WriteGroupGCPPubSubOptions _conn */
            _conn?: (protos.args.IGCPPubSubConn|null);

            /** WriteGroupGCPPubSubOptions args */
            args?: (protos.args.IGCPPubSubWriteArgs|null);
        }

        /** Represents a WriteGroupGCPPubSubOptions. */
        class WriteGroupGCPPubSubOptions implements IWriteGroupGCPPubSubOptions {

            /**
             * Constructs a new WriteGroupGCPPubSubOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteGroupGCPPubSubOptions);

            /** WriteGroupGCPPubSubOptions _conn. */
            public _conn?: (protos.args.IGCPPubSubConn|null);

            /** WriteGroupGCPPubSubOptions args. */
            public args?: (protos.args.IGCPPubSubWriteArgs|null);

            /**
             * Creates a new WriteGroupGCPPubSubOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteGroupGCPPubSubOptions instance
             */
            public static create(properties?: protos.opts.IWriteGroupGCPPubSubOptions): protos.opts.WriteGroupGCPPubSubOptions;

            /**
             * Encodes the specified WriteGroupGCPPubSubOptions message. Does not implicitly {@link protos.opts.WriteGroupGCPPubSubOptions.verify|verify} messages.
             * @param message WriteGroupGCPPubSubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteGroupGCPPubSubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteGroupGCPPubSubOptions message, length delimited. Does not implicitly {@link protos.opts.WriteGroupGCPPubSubOptions.verify|verify} messages.
             * @param message WriteGroupGCPPubSubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteGroupGCPPubSubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteGroupGCPPubSubOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteGroupGCPPubSubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteGroupGCPPubSubOptions;

            /**
             * Decodes a WriteGroupGCPPubSubOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteGroupGCPPubSubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteGroupGCPPubSubOptions;

            /**
             * Verifies a WriteGroupGCPPubSubOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteGroupGCPPubSubOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteGroupGCPPubSubOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteGroupGCPPubSubOptions;

            /**
             * Creates a plain object from a WriteGroupGCPPubSubOptions message. Also converts values to other types if specified.
             * @param message WriteGroupGCPPubSubOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteGroupGCPPubSubOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteGroupGCPPubSubOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteGroupKubeMQQueueOptions. */
        interface IWriteGroupKubeMQQueueOptions {

            /** WriteGroupKubeMQQueueOptions _conn */
            _conn?: (protos.args.IKubeMQQueueConn|null);

            /** WriteGroupKubeMQQueueOptions args */
            args?: (protos.args.IKubeMQQueueWriteArgs|null);
        }

        /** Represents a WriteGroupKubeMQQueueOptions. */
        class WriteGroupKubeMQQueueOptions implements IWriteGroupKubeMQQueueOptions {

            /**
             * Constructs a new WriteGroupKubeMQQueueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteGroupKubeMQQueueOptions);

            /** WriteGroupKubeMQQueueOptions _conn. */
            public _conn?: (protos.args.IKubeMQQueueConn|null);

            /** WriteGroupKubeMQQueueOptions args. */
            public args?: (protos.args.IKubeMQQueueWriteArgs|null);

            /**
             * Creates a new WriteGroupKubeMQQueueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteGroupKubeMQQueueOptions instance
             */
            public static create(properties?: protos.opts.IWriteGroupKubeMQQueueOptions): protos.opts.WriteGroupKubeMQQueueOptions;

            /**
             * Encodes the specified WriteGroupKubeMQQueueOptions message. Does not implicitly {@link protos.opts.WriteGroupKubeMQQueueOptions.verify|verify} messages.
             * @param message WriteGroupKubeMQQueueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteGroupKubeMQQueueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteGroupKubeMQQueueOptions message, length delimited. Does not implicitly {@link protos.opts.WriteGroupKubeMQQueueOptions.verify|verify} messages.
             * @param message WriteGroupKubeMQQueueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteGroupKubeMQQueueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteGroupKubeMQQueueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteGroupKubeMQQueueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteGroupKubeMQQueueOptions;

            /**
             * Decodes a WriteGroupKubeMQQueueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteGroupKubeMQQueueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteGroupKubeMQQueueOptions;

            /**
             * Verifies a WriteGroupKubeMQQueueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteGroupKubeMQQueueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteGroupKubeMQQueueOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteGroupKubeMQQueueOptions;

            /**
             * Creates a plain object from a WriteGroupKubeMQQueueOptions message. Also converts values to other types if specified.
             * @param message WriteGroupKubeMQQueueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteGroupKubeMQQueueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteGroupKubeMQQueueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteGroupAWSKinesisOptions. */
        interface IWriteGroupAWSKinesisOptions {

            /** WriteGroupAWSKinesisOptions _conn */
            _conn?: (protos.args.IAWSKinesisConn|null);

            /** WriteGroupAWSKinesisOptions args */
            args?: (protos.args.IAWSKinesisWriteArgs|null);
        }

        /** Represents a WriteGroupAWSKinesisOptions. */
        class WriteGroupAWSKinesisOptions implements IWriteGroupAWSKinesisOptions {

            /**
             * Constructs a new WriteGroupAWSKinesisOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteGroupAWSKinesisOptions);

            /** WriteGroupAWSKinesisOptions _conn. */
            public _conn?: (protos.args.IAWSKinesisConn|null);

            /** WriteGroupAWSKinesisOptions args. */
            public args?: (protos.args.IAWSKinesisWriteArgs|null);

            /**
             * Creates a new WriteGroupAWSKinesisOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteGroupAWSKinesisOptions instance
             */
            public static create(properties?: protos.opts.IWriteGroupAWSKinesisOptions): protos.opts.WriteGroupAWSKinesisOptions;

            /**
             * Encodes the specified WriteGroupAWSKinesisOptions message. Does not implicitly {@link protos.opts.WriteGroupAWSKinesisOptions.verify|verify} messages.
             * @param message WriteGroupAWSKinesisOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteGroupAWSKinesisOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteGroupAWSKinesisOptions message, length delimited. Does not implicitly {@link protos.opts.WriteGroupAWSKinesisOptions.verify|verify} messages.
             * @param message WriteGroupAWSKinesisOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteGroupAWSKinesisOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteGroupAWSKinesisOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteGroupAWSKinesisOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteGroupAWSKinesisOptions;

            /**
             * Decodes a WriteGroupAWSKinesisOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteGroupAWSKinesisOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteGroupAWSKinesisOptions;

            /**
             * Verifies a WriteGroupAWSKinesisOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteGroupAWSKinesisOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteGroupAWSKinesisOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteGroupAWSKinesisOptions;

            /**
             * Creates a plain object from a WriteGroupAWSKinesisOptions message. Also converts values to other types if specified.
             * @param message WriteGroupAWSKinesisOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteGroupAWSKinesisOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteGroupAWSKinesisOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteGroupMemphisOptions. */
        interface IWriteGroupMemphisOptions {

            /** WriteGroupMemphisOptions _conn */
            _conn?: (protos.args.IMemphisConn|null);

            /** WriteGroupMemphisOptions args */
            args?: (protos.args.IMemphisWriteArgs|null);
        }

        /** Represents a WriteGroupMemphisOptions. */
        class WriteGroupMemphisOptions implements IWriteGroupMemphisOptions {

            /**
             * Constructs a new WriteGroupMemphisOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IWriteGroupMemphisOptions);

            /** WriteGroupMemphisOptions _conn. */
            public _conn?: (protos.args.IMemphisConn|null);

            /** WriteGroupMemphisOptions args. */
            public args?: (protos.args.IMemphisWriteArgs|null);

            /**
             * Creates a new WriteGroupMemphisOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteGroupMemphisOptions instance
             */
            public static create(properties?: protos.opts.IWriteGroupMemphisOptions): protos.opts.WriteGroupMemphisOptions;

            /**
             * Encodes the specified WriteGroupMemphisOptions message. Does not implicitly {@link protos.opts.WriteGroupMemphisOptions.verify|verify} messages.
             * @param message WriteGroupMemphisOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IWriteGroupMemphisOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteGroupMemphisOptions message, length delimited. Does not implicitly {@link protos.opts.WriteGroupMemphisOptions.verify|verify} messages.
             * @param message WriteGroupMemphisOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IWriteGroupMemphisOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteGroupMemphisOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteGroupMemphisOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.WriteGroupMemphisOptions;

            /**
             * Decodes a WriteGroupMemphisOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteGroupMemphisOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.WriteGroupMemphisOptions;

            /**
             * Verifies a WriteGroupMemphisOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteGroupMemphisOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteGroupMemphisOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.WriteGroupMemphisOptions;

            /**
             * Creates a plain object from a WriteGroupMemphisOptions message. Also converts values to other types if specified.
             * @param message WriteGroupMemphisOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.WriteGroupMemphisOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteGroupMemphisOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ConnectionOptions. */
        interface IConnectionOptions {

            /** ConnectionOptions name */
            name?: (string|null);

            /** ConnectionOptions notes */
            notes?: (string|null);

            /** ConnectionOptions kafka */
            kafka?: (protos.args.IKafkaConn|null);

            /** ConnectionOptions activeMq */
            activeMq?: (protos.args.IActiveMQConn|null);

            /** ConnectionOptions awsSqs */
            awsSqs?: (protos.args.IAWSSQSConn|null);

            /** ConnectionOptions awsSns */
            awsSns?: (protos.args.IAWSSNSConn|null);

            /** ConnectionOptions mongo */
            mongo?: (protos.args.IMongoConn|null);

            /** ConnectionOptions nats */
            nats?: (protos.args.INatsConn|null);

            /** ConnectionOptions natsStreaming */
            natsStreaming?: (protos.args.INatsStreamingConn|null);

            /** ConnectionOptions nsq */
            nsq?: (protos.args.INSQConn|null);

            /** ConnectionOptions postgres */
            postgres?: (protos.args.IPostgresConn|null);

            /** ConnectionOptions pulsar */
            pulsar?: (protos.args.IPulsarConn|null);

            /** ConnectionOptions rabbit */
            rabbit?: (protos.args.IRabbitConn|null);

            /** ConnectionOptions rabbitStreams */
            rabbitStreams?: (protos.args.IRabbitStreamsConn|null);

            /** ConnectionOptions redisPubsub */
            redisPubsub?: (protos.args.IRedisPubSubConn|null);

            /** ConnectionOptions redisStreams */
            redisStreams?: (protos.args.IRedisStreamsConn|null);

            /** ConnectionOptions azureEventHub */
            azureEventHub?: (protos.args.IAzureEventHubConn|null);

            /** ConnectionOptions azureServiceBus */
            azureServiceBus?: (protos.args.IAzureServiceBusConn|null);

            /** ConnectionOptions mqtt */
            mqtt?: (protos.args.IMQTTConn|null);

            /** ConnectionOptions kubemqQueue */
            kubemqQueue?: (protos.args.IKubeMQQueueConn|null);

            /** ConnectionOptions gcpPubsub */
            gcpPubsub?: (protos.args.IGCPPubSubConn|null);

            /** ConnectionOptions natsJetstream */
            natsJetstream?: (protos.args.INatsJetstreamConn|null);

            /** ConnectionOptions awsKinesis */
            awsKinesis?: (protos.args.IAWSKinesisConn|null);

            /** ConnectionOptions memphis */
            memphis?: (protos.args.IMemphisConn|null);

            /** ConnectionOptions _id */
            _id?: (string|null);
        }

        /** Represents a ConnectionOptions. */
        class ConnectionOptions implements IConnectionOptions {

            /**
             * Constructs a new ConnectionOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IConnectionOptions);

            /** ConnectionOptions name. */
            public name: string;

            /** ConnectionOptions notes. */
            public notes: string;

            /** ConnectionOptions kafka. */
            public kafka?: (protos.args.IKafkaConn|null);

            /** ConnectionOptions activeMq. */
            public activeMq?: (protos.args.IActiveMQConn|null);

            /** ConnectionOptions awsSqs. */
            public awsSqs?: (protos.args.IAWSSQSConn|null);

            /** ConnectionOptions awsSns. */
            public awsSns?: (protos.args.IAWSSNSConn|null);

            /** ConnectionOptions mongo. */
            public mongo?: (protos.args.IMongoConn|null);

            /** ConnectionOptions nats. */
            public nats?: (protos.args.INatsConn|null);

            /** ConnectionOptions natsStreaming. */
            public natsStreaming?: (protos.args.INatsStreamingConn|null);

            /** ConnectionOptions nsq. */
            public nsq?: (protos.args.INSQConn|null);

            /** ConnectionOptions postgres. */
            public postgres?: (protos.args.IPostgresConn|null);

            /** ConnectionOptions pulsar. */
            public pulsar?: (protos.args.IPulsarConn|null);

            /** ConnectionOptions rabbit. */
            public rabbit?: (protos.args.IRabbitConn|null);

            /** ConnectionOptions rabbitStreams. */
            public rabbitStreams?: (protos.args.IRabbitStreamsConn|null);

            /** ConnectionOptions redisPubsub. */
            public redisPubsub?: (protos.args.IRedisPubSubConn|null);

            /** ConnectionOptions redisStreams. */
            public redisStreams?: (protos.args.IRedisStreamsConn|null);

            /** ConnectionOptions azureEventHub. */
            public azureEventHub?: (protos.args.IAzureEventHubConn|null);

            /** ConnectionOptions azureServiceBus. */
            public azureServiceBus?: (protos.args.IAzureServiceBusConn|null);

            /** ConnectionOptions mqtt. */
            public mqtt?: (protos.args.IMQTTConn|null);

            /** ConnectionOptions kubemqQueue. */
            public kubemqQueue?: (protos.args.IKubeMQQueueConn|null);

            /** ConnectionOptions gcpPubsub. */
            public gcpPubsub?: (protos.args.IGCPPubSubConn|null);

            /** ConnectionOptions natsJetstream. */
            public natsJetstream?: (protos.args.INatsJetstreamConn|null);

            /** ConnectionOptions awsKinesis. */
            public awsKinesis?: (protos.args.IAWSKinesisConn|null);

            /** ConnectionOptions memphis. */
            public memphis?: (protos.args.IMemphisConn|null);

            /** ConnectionOptions _id. */
            public _id: string;

            /** ConnectionOptions conn. */
            public conn?: ("kafka"|"activeMq"|"awsSqs"|"awsSns"|"mongo"|"nats"|"natsStreaming"|"nsq"|"postgres"|"pulsar"|"rabbit"|"rabbitStreams"|"redisPubsub"|"redisStreams"|"azureEventHub"|"azureServiceBus"|"mqtt"|"kubemqQueue"|"gcpPubsub"|"natsJetstream"|"awsKinesis"|"memphis");

            /**
             * Creates a new ConnectionOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConnectionOptions instance
             */
            public static create(properties?: protos.opts.IConnectionOptions): protos.opts.ConnectionOptions;

            /**
             * Encodes the specified ConnectionOptions message. Does not implicitly {@link protos.opts.ConnectionOptions.verify|verify} messages.
             * @param message ConnectionOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IConnectionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConnectionOptions message, length delimited. Does not implicitly {@link protos.opts.ConnectionOptions.verify|verify} messages.
             * @param message ConnectionOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IConnectionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConnectionOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConnectionOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ConnectionOptions;

            /**
             * Decodes a ConnectionOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConnectionOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ConnectionOptions;

            /**
             * Verifies a ConnectionOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConnectionOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConnectionOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ConnectionOptions;

            /**
             * Creates a plain object from a ConnectionOptions message. Also converts values to other types if specified.
             * @param message ConnectionOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ConnectionOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConnectionOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace records. */
    namespace records {

        /** Properties of a ReadRecord. */
        interface IReadRecord {

            /** ReadRecord messageId */
            messageId?: (string|null);

            /** ReadRecord num */
            num?: (number|Long|null);

            /** ReadRecord metadata */
            metadata?: ({ [k: string]: string }|null);

            /** ReadRecord receivedAtUnixTsUtc */
            receivedAtUnixTsUtc?: (number|Long|null);

            /** ReadRecord payload */
            payload?: (Uint8Array|null);

            /** ReadRecord kafka */
            kafka?: (protos.records.IKafka|null);

            /** ReadRecord rabbit */
            rabbit?: (protos.records.IRabbit|null);

            /** ReadRecord activemq */
            activemq?: (protos.records.IActiveMQ|null);

            /** ReadRecord awsSqs */
            awsSqs?: (protos.records.IAWSSQS|null);

            /** ReadRecord azureEventHub */
            azureEventHub?: (protos.records.IAzureEventHub|null);

            /** ReadRecord azureServiceBus */
            azureServiceBus?: (protos.records.IAzureServiceBus|null);

            /** ReadRecord gcpPubsub */
            gcpPubsub?: (protos.records.IGCPPubSub|null);

            /** ReadRecord kubemq */
            kubemq?: (protos.records.IKubeMQ|null);

            /** ReadRecord mongo */
            mongo?: (protos.records.IMongo|null);

            /** ReadRecord mqtt */
            mqtt?: (protos.records.IMQTT|null);

            /** ReadRecord nats */
            nats?: (protos.records.INats|null);

            /** ReadRecord natsStreaming */
            natsStreaming?: (protos.records.INatsStreaming|null);

            /** ReadRecord nsq */
            nsq?: (protos.records.INSQ|null);

            /** ReadRecord postgres */
            postgres?: (protos.records.IPostgres|null);

            /** ReadRecord pulsar */
            pulsar?: (protos.records.IPulsar|null);

            /** ReadRecord rabbitStreams */
            rabbitStreams?: (protos.records.IRabbitStreams|null);

            /** ReadRecord redisPubsub */
            redisPubsub?: (protos.records.IRedisPubsub|null);

            /** ReadRecord redisStreams */
            redisStreams?: (protos.records.IRedisStreams|null);

            /** ReadRecord natsJetstream */
            natsJetstream?: (protos.records.INatsJetstream|null);

            /** ReadRecord awsKinesis */
            awsKinesis?: (protos.records.IAWSKinesis|null);

            /** ReadRecord memphis */
            memphis?: (protos.records.IMemphis|null);

            /** ReadRecord _raw */
            _raw?: (Uint8Array|null);

            /** ReadRecord _plumberId */
            _plumberId?: (string|null);
        }

        /** Represents a ReadRecord. */
        class ReadRecord implements IReadRecord {

            /**
             * Constructs a new ReadRecord.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IReadRecord);

            /** ReadRecord messageId. */
            public messageId: string;

            /** ReadRecord num. */
            public num: (number|Long);

            /** ReadRecord metadata. */
            public metadata: { [k: string]: string };

            /** ReadRecord receivedAtUnixTsUtc. */
            public receivedAtUnixTsUtc: (number|Long);

            /** ReadRecord payload. */
            public payload: Uint8Array;

            /** ReadRecord kafka. */
            public kafka?: (protos.records.IKafka|null);

            /** ReadRecord rabbit. */
            public rabbit?: (protos.records.IRabbit|null);

            /** ReadRecord activemq. */
            public activemq?: (protos.records.IActiveMQ|null);

            /** ReadRecord awsSqs. */
            public awsSqs?: (protos.records.IAWSSQS|null);

            /** ReadRecord azureEventHub. */
            public azureEventHub?: (protos.records.IAzureEventHub|null);

            /** ReadRecord azureServiceBus. */
            public azureServiceBus?: (protos.records.IAzureServiceBus|null);

            /** ReadRecord gcpPubsub. */
            public gcpPubsub?: (protos.records.IGCPPubSub|null);

            /** ReadRecord kubemq. */
            public kubemq?: (protos.records.IKubeMQ|null);

            /** ReadRecord mongo. */
            public mongo?: (protos.records.IMongo|null);

            /** ReadRecord mqtt. */
            public mqtt?: (protos.records.IMQTT|null);

            /** ReadRecord nats. */
            public nats?: (protos.records.INats|null);

            /** ReadRecord natsStreaming. */
            public natsStreaming?: (protos.records.INatsStreaming|null);

            /** ReadRecord nsq. */
            public nsq?: (protos.records.INSQ|null);

            /** ReadRecord postgres. */
            public postgres?: (protos.records.IPostgres|null);

            /** ReadRecord pulsar. */
            public pulsar?: (protos.records.IPulsar|null);

            /** ReadRecord rabbitStreams. */
            public rabbitStreams?: (protos.records.IRabbitStreams|null);

            /** ReadRecord redisPubsub. */
            public redisPubsub?: (protos.records.IRedisPubsub|null);

            /** ReadRecord redisStreams. */
            public redisStreams?: (protos.records.IRedisStreams|null);

            /** ReadRecord natsJetstream. */
            public natsJetstream?: (protos.records.INatsJetstream|null);

            /** ReadRecord awsKinesis. */
            public awsKinesis?: (protos.records.IAWSKinesis|null);

            /** ReadRecord memphis. */
            public memphis?: (protos.records.IMemphis|null);

            /** ReadRecord _raw. */
            public _raw: Uint8Array;

            /** ReadRecord _plumberId. */
            public _plumberId: string;

            /** ReadRecord Record. */
            public Record?: ("kafka"|"rabbit"|"activemq"|"awsSqs"|"azureEventHub"|"azureServiceBus"|"gcpPubsub"|"kubemq"|"mongo"|"mqtt"|"nats"|"natsStreaming"|"nsq"|"postgres"|"pulsar"|"rabbitStreams"|"redisPubsub"|"redisStreams"|"natsJetstream"|"awsKinesis"|"memphis");

            /**
             * Creates a new ReadRecord instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReadRecord instance
             */
            public static create(properties?: protos.records.IReadRecord): protos.records.ReadRecord;

            /**
             * Encodes the specified ReadRecord message. Does not implicitly {@link protos.records.ReadRecord.verify|verify} messages.
             * @param message ReadRecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IReadRecord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReadRecord message, length delimited. Does not implicitly {@link protos.records.ReadRecord.verify|verify} messages.
             * @param message ReadRecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IReadRecord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReadRecord message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReadRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.ReadRecord;

            /**
             * Decodes a ReadRecord message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReadRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.ReadRecord;

            /**
             * Verifies a ReadRecord message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ReadRecord message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReadRecord
             */
            public static fromObject(object: { [k: string]: any }): protos.records.ReadRecord;

            /**
             * Creates a plain object from a ReadRecord message. Also converts values to other types if specified.
             * @param message ReadRecord
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.ReadRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReadRecord to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WriteRecord. */
        interface IWriteRecord {

            /** WriteRecord input */
            input?: (string|null);

            /** WriteRecord inputMetadata */
            inputMetadata?: ({ [k: string]: string }|null);
        }

        /** Represents a WriteRecord. */
        class WriteRecord implements IWriteRecord {

            /**
             * Constructs a new WriteRecord.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IWriteRecord);

            /** WriteRecord input. */
            public input: string;

            /** WriteRecord inputMetadata. */
            public inputMetadata: { [k: string]: string };

            /**
             * Creates a new WriteRecord instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WriteRecord instance
             */
            public static create(properties?: protos.records.IWriteRecord): protos.records.WriteRecord;

            /**
             * Encodes the specified WriteRecord message. Does not implicitly {@link protos.records.WriteRecord.verify|verify} messages.
             * @param message WriteRecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IWriteRecord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WriteRecord message, length delimited. Does not implicitly {@link protos.records.WriteRecord.verify|verify} messages.
             * @param message WriteRecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IWriteRecord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WriteRecord message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WriteRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.WriteRecord;

            /**
             * Decodes a WriteRecord message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WriteRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.WriteRecord;

            /**
             * Verifies a WriteRecord message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WriteRecord message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WriteRecord
             */
            public static fromObject(object: { [k: string]: any }): protos.records.WriteRecord;

            /**
             * Creates a plain object from a WriteRecord message. Also converts values to other types if specified.
             * @param message WriteRecord
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.WriteRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WriteRecord to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ErrorRecord. */
        interface IErrorRecord {

            /** ErrorRecord occurredAtUnixTsUtc */
            occurredAtUnixTsUtc?: (number|Long|null);

            /** ErrorRecord error */
            error?: (string|null);

            /** ErrorRecord metadata */
            metadata?: ({ [k: string]: Uint8Array }|null);
        }

        /** Represents an ErrorRecord. */
        class ErrorRecord implements IErrorRecord {

            /**
             * Constructs a new ErrorRecord.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IErrorRecord);

            /** ErrorRecord occurredAtUnixTsUtc. */
            public occurredAtUnixTsUtc: (number|Long);

            /** ErrorRecord error. */
            public error: string;

            /** ErrorRecord metadata. */
            public metadata: { [k: string]: Uint8Array };

            /**
             * Creates a new ErrorRecord instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ErrorRecord instance
             */
            public static create(properties?: protos.records.IErrorRecord): protos.records.ErrorRecord;

            /**
             * Encodes the specified ErrorRecord message. Does not implicitly {@link protos.records.ErrorRecord.verify|verify} messages.
             * @param message ErrorRecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IErrorRecord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ErrorRecord message, length delimited. Does not implicitly {@link protos.records.ErrorRecord.verify|verify} messages.
             * @param message ErrorRecord message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IErrorRecord, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ErrorRecord message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ErrorRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.ErrorRecord;

            /**
             * Decodes an ErrorRecord message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ErrorRecord
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.ErrorRecord;

            /**
             * Verifies an ErrorRecord message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ErrorRecord message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ErrorRecord
             */
            public static fromObject(object: { [k: string]: any }): protos.records.ErrorRecord;

            /**
             * Creates a plain object from an ErrorRecord message. Also converts values to other types if specified.
             * @param message ErrorRecord
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.ErrorRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ErrorRecord to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ActiveMQ. */
        interface IActiveMQ {

            /** ActiveMQ destination */
            destination?: (string|null);

            /** ActiveMQ contentType */
            contentType?: (string|null);

            /** ActiveMQ subscriptionId */
            subscriptionId?: (string|null);

            /** ActiveMQ timestamp */
            timestamp?: (number|Long|null);

            /** ActiveMQ value */
            value?: (Uint8Array|null);
        }

        /** Represents an ActiveMQ. */
        class ActiveMQ implements IActiveMQ {

            /**
             * Constructs a new ActiveMQ.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IActiveMQ);

            /** ActiveMQ destination. */
            public destination: string;

            /** ActiveMQ contentType. */
            public contentType: string;

            /** ActiveMQ subscriptionId. */
            public subscriptionId: string;

            /** ActiveMQ timestamp. */
            public timestamp: (number|Long);

            /** ActiveMQ value. */
            public value: Uint8Array;

            /**
             * Creates a new ActiveMQ instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ActiveMQ instance
             */
            public static create(properties?: protos.records.IActiveMQ): protos.records.ActiveMQ;

            /**
             * Encodes the specified ActiveMQ message. Does not implicitly {@link protos.records.ActiveMQ.verify|verify} messages.
             * @param message ActiveMQ message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IActiveMQ, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ActiveMQ message, length delimited. Does not implicitly {@link protos.records.ActiveMQ.verify|verify} messages.
             * @param message ActiveMQ message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IActiveMQ, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ActiveMQ message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ActiveMQ
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.ActiveMQ;

            /**
             * Decodes an ActiveMQ message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ActiveMQ
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.ActiveMQ;

            /**
             * Verifies an ActiveMQ message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ActiveMQ message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ActiveMQ
             */
            public static fromObject(object: { [k: string]: any }): protos.records.ActiveMQ;

            /**
             * Creates a plain object from an ActiveMQ message. Also converts values to other types if specified.
             * @param message ActiveMQ
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.ActiveMQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ActiveMQ to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a AWSKinesis. */
        interface IAWSKinesis {

            /** AWSKinesis partitionKey */
            partitionKey?: (string|null);

            /** AWSKinesis sequenceNumber */
            sequenceNumber?: (string|null);

            /** AWSKinesis encryptionType */
            encryptionType?: (string|null);

            /** AWSKinesis shardId */
            shardId?: (string|null);

            /** AWSKinesis value */
            value?: (Uint8Array|null);
        }

        /** Represents a AWSKinesis. */
        class AWSKinesis implements IAWSKinesis {

            /**
             * Constructs a new AWSKinesis.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IAWSKinesis);

            /** AWSKinesis partitionKey. */
            public partitionKey: string;

            /** AWSKinesis sequenceNumber. */
            public sequenceNumber: string;

            /** AWSKinesis encryptionType. */
            public encryptionType: string;

            /** AWSKinesis shardId. */
            public shardId: string;

            /** AWSKinesis value. */
            public value: Uint8Array;

            /**
             * Creates a new AWSKinesis instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AWSKinesis instance
             */
            public static create(properties?: protos.records.IAWSKinesis): protos.records.AWSKinesis;

            /**
             * Encodes the specified AWSKinesis message. Does not implicitly {@link protos.records.AWSKinesis.verify|verify} messages.
             * @param message AWSKinesis message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IAWSKinesis, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AWSKinesis message, length delimited. Does not implicitly {@link protos.records.AWSKinesis.verify|verify} messages.
             * @param message AWSKinesis message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IAWSKinesis, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AWSKinesis message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AWSKinesis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.AWSKinesis;

            /**
             * Decodes a AWSKinesis message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AWSKinesis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.AWSKinesis;

            /**
             * Verifies a AWSKinesis message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AWSKinesis message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AWSKinesis
             */
            public static fromObject(object: { [k: string]: any }): protos.records.AWSKinesis;

            /**
             * Creates a plain object from a AWSKinesis message. Also converts values to other types if specified.
             * @param message AWSKinesis
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.AWSKinesis, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AWSKinesis to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a AWSSQS. */
        interface IAWSSQS {

            /** AWSSQS id */
            id?: (string|null);

            /** AWSSQS timestamp */
            timestamp?: (number|Long|null);

            /** AWSSQS recipientHandle */
            recipientHandle?: (string|null);

            /** AWSSQS attributes */
            attributes?: ({ [k: string]: string }|null);

            /** AWSSQS value */
            value?: (Uint8Array|null);
        }

        /** Represents a AWSSQS. */
        class AWSSQS implements IAWSSQS {

            /**
             * Constructs a new AWSSQS.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IAWSSQS);

            /** AWSSQS id. */
            public id: string;

            /** AWSSQS timestamp. */
            public timestamp: (number|Long);

            /** AWSSQS recipientHandle. */
            public recipientHandle: string;

            /** AWSSQS attributes. */
            public attributes: { [k: string]: string };

            /** AWSSQS value. */
            public value: Uint8Array;

            /**
             * Creates a new AWSSQS instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AWSSQS instance
             */
            public static create(properties?: protos.records.IAWSSQS): protos.records.AWSSQS;

            /**
             * Encodes the specified AWSSQS message. Does not implicitly {@link protos.records.AWSSQS.verify|verify} messages.
             * @param message AWSSQS message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IAWSSQS, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AWSSQS message, length delimited. Does not implicitly {@link protos.records.AWSSQS.verify|verify} messages.
             * @param message AWSSQS message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IAWSSQS, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a AWSSQS message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AWSSQS
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.AWSSQS;

            /**
             * Decodes a AWSSQS message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AWSSQS
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.AWSSQS;

            /**
             * Verifies a AWSSQS message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a AWSSQS message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AWSSQS
             */
            public static fromObject(object: { [k: string]: any }): protos.records.AWSSQS;

            /**
             * Creates a plain object from a AWSSQS message. Also converts values to other types if specified.
             * @param message AWSSQS
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.AWSSQS, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AWSSQS to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AzureEventHub. */
        interface IAzureEventHub {

            /** AzureEventHub id */
            id?: (string|null);

            /** AzureEventHub systemProperties */
            systemProperties?: ({ [k: string]: string }|null);

            /** AzureEventHub timestamp */
            timestamp?: (number|Long|null);

            /** AzureEventHub value */
            value?: (Uint8Array|null);
        }

        /** Represents an AzureEventHub. */
        class AzureEventHub implements IAzureEventHub {

            /**
             * Constructs a new AzureEventHub.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IAzureEventHub);

            /** AzureEventHub id. */
            public id: string;

            /** AzureEventHub systemProperties. */
            public systemProperties: { [k: string]: string };

            /** AzureEventHub timestamp. */
            public timestamp: (number|Long);

            /** AzureEventHub value. */
            public value: Uint8Array;

            /**
             * Creates a new AzureEventHub instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AzureEventHub instance
             */
            public static create(properties?: protos.records.IAzureEventHub): protos.records.AzureEventHub;

            /**
             * Encodes the specified AzureEventHub message. Does not implicitly {@link protos.records.AzureEventHub.verify|verify} messages.
             * @param message AzureEventHub message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IAzureEventHub, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AzureEventHub message, length delimited. Does not implicitly {@link protos.records.AzureEventHub.verify|verify} messages.
             * @param message AzureEventHub message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IAzureEventHub, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AzureEventHub message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AzureEventHub
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.AzureEventHub;

            /**
             * Decodes an AzureEventHub message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AzureEventHub
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.AzureEventHub;

            /**
             * Verifies an AzureEventHub message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AzureEventHub message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AzureEventHub
             */
            public static fromObject(object: { [k: string]: any }): protos.records.AzureEventHub;

            /**
             * Creates a plain object from an AzureEventHub message. Also converts values to other types if specified.
             * @param message AzureEventHub
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.AzureEventHub, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AzureEventHub to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AzureServiceBus. */
        interface IAzureServiceBus {

            /** AzureServiceBus contentType */
            contentType?: (string|null);

            /** AzureServiceBus correlationId */
            correlationId?: (string|null);

            /** AzureServiceBus value */
            value?: (Uint8Array|null);

            /** AzureServiceBus deliveryCount */
            deliveryCount?: (number|null);

            /** AzureServiceBus sessionId */
            sessionId?: (string|null);

            /** AzureServiceBus groupSequence */
            groupSequence?: (number|null);

            /** AzureServiceBus id */
            id?: (string|null);

            /** AzureServiceBus label */
            label?: (string|null);

            /** AzureServiceBus replyTo */
            replyTo?: (string|null);

            /** AzureServiceBus replyToGroupId */
            replyToGroupId?: (string|null);

            /** AzureServiceBus to */
            to?: (string|null);

            /** AzureServiceBus ttl */
            ttl?: (number|Long|null);

            /** AzureServiceBus lockToken */
            lockToken?: (string|null);

            /** AzureServiceBus systemProperties */
            systemProperties?: (protos.records.IAzureSystemProperties|null);

            /** AzureServiceBus userProperties */
            userProperties?: ({ [k: string]: string }|null);

            /** AzureServiceBus format */
            format?: (number|null);
        }

        /** Represents an AzureServiceBus. */
        class AzureServiceBus implements IAzureServiceBus {

            /**
             * Constructs a new AzureServiceBus.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IAzureServiceBus);

            /** AzureServiceBus contentType. */
            public contentType: string;

            /** AzureServiceBus correlationId. */
            public correlationId: string;

            /** AzureServiceBus value. */
            public value: Uint8Array;

            /** AzureServiceBus deliveryCount. */
            public deliveryCount: number;

            /** AzureServiceBus sessionId. */
            public sessionId: string;

            /** AzureServiceBus groupSequence. */
            public groupSequence: number;

            /** AzureServiceBus id. */
            public id: string;

            /** AzureServiceBus label. */
            public label: string;

            /** AzureServiceBus replyTo. */
            public replyTo: string;

            /** AzureServiceBus replyToGroupId. */
            public replyToGroupId: string;

            /** AzureServiceBus to. */
            public to: string;

            /** AzureServiceBus ttl. */
            public ttl: (number|Long);

            /** AzureServiceBus lockToken. */
            public lockToken: string;

            /** AzureServiceBus systemProperties. */
            public systemProperties?: (protos.records.IAzureSystemProperties|null);

            /** AzureServiceBus userProperties. */
            public userProperties: { [k: string]: string };

            /** AzureServiceBus format. */
            public format: number;

            /**
             * Creates a new AzureServiceBus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AzureServiceBus instance
             */
            public static create(properties?: protos.records.IAzureServiceBus): protos.records.AzureServiceBus;

            /**
             * Encodes the specified AzureServiceBus message. Does not implicitly {@link protos.records.AzureServiceBus.verify|verify} messages.
             * @param message AzureServiceBus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IAzureServiceBus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AzureServiceBus message, length delimited. Does not implicitly {@link protos.records.AzureServiceBus.verify|verify} messages.
             * @param message AzureServiceBus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IAzureServiceBus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AzureServiceBus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AzureServiceBus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.AzureServiceBus;

            /**
             * Decodes an AzureServiceBus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AzureServiceBus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.AzureServiceBus;

            /**
             * Verifies an AzureServiceBus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AzureServiceBus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AzureServiceBus
             */
            public static fromObject(object: { [k: string]: any }): protos.records.AzureServiceBus;

            /**
             * Creates a plain object from an AzureServiceBus message. Also converts values to other types if specified.
             * @param message AzureServiceBus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.AzureServiceBus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AzureServiceBus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an AzureSystemProperties. */
        interface IAzureSystemProperties {

            /** AzureSystemProperties lockedUntil */
            lockedUntil?: (number|Long|null);

            /** AzureSystemProperties sequenceNumber */
            sequenceNumber?: (number|Long|null);

            /** AzureSystemProperties partitionId */
            partitionId?: (number|null);

            /** AzureSystemProperties partitionKey */
            partitionKey?: (string|null);

            /** AzureSystemProperties enqueuedTime */
            enqueuedTime?: (number|Long|null);

            /** AzureSystemProperties deadLetterSource */
            deadLetterSource?: (string|null);

            /** AzureSystemProperties scheduledEnqueueTime */
            scheduledEnqueueTime?: (number|Long|null);

            /** AzureSystemProperties enqueuedSequenceNumber */
            enqueuedSequenceNumber?: (number|Long|null);

            /** AzureSystemProperties viaPartitionKey */
            viaPartitionKey?: (string|null);

            /** AzureSystemProperties annotations */
            annotations?: ({ [k: string]: string }|null);
        }

        /** Represents an AzureSystemProperties. */
        class AzureSystemProperties implements IAzureSystemProperties {

            /**
             * Constructs a new AzureSystemProperties.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IAzureSystemProperties);

            /** AzureSystemProperties lockedUntil. */
            public lockedUntil: (number|Long);

            /** AzureSystemProperties sequenceNumber. */
            public sequenceNumber: (number|Long);

            /** AzureSystemProperties partitionId. */
            public partitionId: number;

            /** AzureSystemProperties partitionKey. */
            public partitionKey: string;

            /** AzureSystemProperties enqueuedTime. */
            public enqueuedTime: (number|Long);

            /** AzureSystemProperties deadLetterSource. */
            public deadLetterSource: string;

            /** AzureSystemProperties scheduledEnqueueTime. */
            public scheduledEnqueueTime: (number|Long);

            /** AzureSystemProperties enqueuedSequenceNumber. */
            public enqueuedSequenceNumber: (number|Long);

            /** AzureSystemProperties viaPartitionKey. */
            public viaPartitionKey: string;

            /** AzureSystemProperties annotations. */
            public annotations: { [k: string]: string };

            /**
             * Creates a new AzureSystemProperties instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AzureSystemProperties instance
             */
            public static create(properties?: protos.records.IAzureSystemProperties): protos.records.AzureSystemProperties;

            /**
             * Encodes the specified AzureSystemProperties message. Does not implicitly {@link protos.records.AzureSystemProperties.verify|verify} messages.
             * @param message AzureSystemProperties message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IAzureSystemProperties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AzureSystemProperties message, length delimited. Does not implicitly {@link protos.records.AzureSystemProperties.verify|verify} messages.
             * @param message AzureSystemProperties message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IAzureSystemProperties, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AzureSystemProperties message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AzureSystemProperties
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.AzureSystemProperties;

            /**
             * Decodes an AzureSystemProperties message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AzureSystemProperties
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.AzureSystemProperties;

            /**
             * Verifies an AzureSystemProperties message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AzureSystemProperties message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AzureSystemProperties
             */
            public static fromObject(object: { [k: string]: any }): protos.records.AzureSystemProperties;

            /**
             * Creates a plain object from an AzureSystemProperties message. Also converts values to other types if specified.
             * @param message AzureSystemProperties
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.AzureSystemProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AzureSystemProperties to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GCPPubSub. */
        interface IGCPPubSub {

            /** GCPPubSub id */
            id?: (string|null);

            /** GCPPubSub value */
            value?: (Uint8Array|null);

            /** GCPPubSub attributes */
            attributes?: ({ [k: string]: string }|null);

            /** GCPPubSub publishTime */
            publishTime?: (number|Long|null);

            /** GCPPubSub deliveryAttempt */
            deliveryAttempt?: (number|null);

            /** GCPPubSub orderingKey */
            orderingKey?: (string|null);
        }

        /** Represents a GCPPubSub. */
        class GCPPubSub implements IGCPPubSub {

            /**
             * Constructs a new GCPPubSub.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IGCPPubSub);

            /** GCPPubSub id. */
            public id: string;

            /** GCPPubSub value. */
            public value: Uint8Array;

            /** GCPPubSub attributes. */
            public attributes: { [k: string]: string };

            /** GCPPubSub publishTime. */
            public publishTime: (number|Long);

            /** GCPPubSub deliveryAttempt. */
            public deliveryAttempt: number;

            /** GCPPubSub orderingKey. */
            public orderingKey: string;

            /**
             * Creates a new GCPPubSub instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GCPPubSub instance
             */
            public static create(properties?: protos.records.IGCPPubSub): protos.records.GCPPubSub;

            /**
             * Encodes the specified GCPPubSub message. Does not implicitly {@link protos.records.GCPPubSub.verify|verify} messages.
             * @param message GCPPubSub message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IGCPPubSub, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GCPPubSub message, length delimited. Does not implicitly {@link protos.records.GCPPubSub.verify|verify} messages.
             * @param message GCPPubSub message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IGCPPubSub, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GCPPubSub message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GCPPubSub
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.GCPPubSub;

            /**
             * Decodes a GCPPubSub message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GCPPubSub
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.GCPPubSub;

            /**
             * Verifies a GCPPubSub message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GCPPubSub message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GCPPubSub
             */
            public static fromObject(object: { [k: string]: any }): protos.records.GCPPubSub;

            /**
             * Creates a plain object from a GCPPubSub message. Also converts values to other types if specified.
             * @param message GCPPubSub
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.GCPPubSub, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GCPPubSub to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a KafkaHeader. */
        interface IKafkaHeader {

            /** KafkaHeader key */
            key?: (string|null);

            /** KafkaHeader value */
            value?: (string|null);
        }

        /** Represents a KafkaHeader. */
        class KafkaHeader implements IKafkaHeader {

            /**
             * Constructs a new KafkaHeader.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IKafkaHeader);

            /** KafkaHeader key. */
            public key: string;

            /** KafkaHeader value. */
            public value: string;

            /**
             * Creates a new KafkaHeader instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KafkaHeader instance
             */
            public static create(properties?: protos.records.IKafkaHeader): protos.records.KafkaHeader;

            /**
             * Encodes the specified KafkaHeader message. Does not implicitly {@link protos.records.KafkaHeader.verify|verify} messages.
             * @param message KafkaHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IKafkaHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KafkaHeader message, length delimited. Does not implicitly {@link protos.records.KafkaHeader.verify|verify} messages.
             * @param message KafkaHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IKafkaHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KafkaHeader message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KafkaHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.KafkaHeader;

            /**
             * Decodes a KafkaHeader message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KafkaHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.KafkaHeader;

            /**
             * Verifies a KafkaHeader message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KafkaHeader message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KafkaHeader
             */
            public static fromObject(object: { [k: string]: any }): protos.records.KafkaHeader;

            /**
             * Creates a plain object from a KafkaHeader message. Also converts values to other types if specified.
             * @param message KafkaHeader
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.KafkaHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KafkaHeader to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Kafka. */
        interface IKafka {

            /** Kafka topic */
            topic?: (string|null);

            /** Kafka key */
            key?: (Uint8Array|null);

            /** Kafka value */
            value?: (Uint8Array|null);

            /** Kafka timestamp */
            timestamp?: (number|Long|null);

            /** Kafka offset */
            offset?: (number|Long|null);

            /** Kafka partition */
            partition?: (number|null);

            /** Kafka headers */
            headers?: (protos.records.IKafkaHeader[]|null);
        }

        /** Represents a Kafka. */
        class Kafka implements IKafka {

            /**
             * Constructs a new Kafka.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IKafka);

            /** Kafka topic. */
            public topic: string;

            /** Kafka key. */
            public key: Uint8Array;

            /** Kafka value. */
            public value: Uint8Array;

            /** Kafka timestamp. */
            public timestamp: (number|Long);

            /** Kafka offset. */
            public offset: (number|Long);

            /** Kafka partition. */
            public partition: number;

            /** Kafka headers. */
            public headers: protos.records.IKafkaHeader[];

            /**
             * Creates a new Kafka instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Kafka instance
             */
            public static create(properties?: protos.records.IKafka): protos.records.Kafka;

            /**
             * Encodes the specified Kafka message. Does not implicitly {@link protos.records.Kafka.verify|verify} messages.
             * @param message Kafka message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IKafka, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Kafka message, length delimited. Does not implicitly {@link protos.records.Kafka.verify|verify} messages.
             * @param message Kafka message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IKafka, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Kafka message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Kafka
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.Kafka;

            /**
             * Decodes a Kafka message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Kafka
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.Kafka;

            /**
             * Verifies a Kafka message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Kafka message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Kafka
             */
            public static fromObject(object: { [k: string]: any }): protos.records.Kafka;

            /**
             * Creates a plain object from a Kafka message. Also converts values to other types if specified.
             * @param message Kafka
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.Kafka, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Kafka to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a KubeMQ. */
        interface IKubeMQ {

            /** KubeMQ id */
            id?: (string|null);

            /** KubeMQ clientId */
            clientId?: (string|null);

            /** KubeMQ channel */
            channel?: (string|null);

            /** KubeMQ value */
            value?: (Uint8Array|null);

            /** KubeMQ timestamp */
            timestamp?: (number|Long|null);

            /** KubeMQ sequence */
            sequence?: (number|Long|null);
        }

        /** Represents a KubeMQ. */
        class KubeMQ implements IKubeMQ {

            /**
             * Constructs a new KubeMQ.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IKubeMQ);

            /** KubeMQ id. */
            public id: string;

            /** KubeMQ clientId. */
            public clientId: string;

            /** KubeMQ channel. */
            public channel: string;

            /** KubeMQ value. */
            public value: Uint8Array;

            /** KubeMQ timestamp. */
            public timestamp: (number|Long);

            /** KubeMQ sequence. */
            public sequence: (number|Long);

            /**
             * Creates a new KubeMQ instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KubeMQ instance
             */
            public static create(properties?: protos.records.IKubeMQ): protos.records.KubeMQ;

            /**
             * Encodes the specified KubeMQ message. Does not implicitly {@link protos.records.KubeMQ.verify|verify} messages.
             * @param message KubeMQ message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IKubeMQ, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KubeMQ message, length delimited. Does not implicitly {@link protos.records.KubeMQ.verify|verify} messages.
             * @param message KubeMQ message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IKubeMQ, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KubeMQ message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KubeMQ
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.KubeMQ;

            /**
             * Decodes a KubeMQ message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KubeMQ
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.KubeMQ;

            /**
             * Verifies a KubeMQ message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KubeMQ message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KubeMQ
             */
            public static fromObject(object: { [k: string]: any }): protos.records.KubeMQ;

            /**
             * Creates a plain object from a KubeMQ message. Also converts values to other types if specified.
             * @param message KubeMQ
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.KubeMQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KubeMQ to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Memphis. */
        interface IMemphis {

            /** Memphis value */
            value?: (Uint8Array|null);

            /** Memphis timestamp */
            timestamp?: (number|Long|null);
        }

        /** Represents a Memphis. */
        class Memphis implements IMemphis {

            /**
             * Constructs a new Memphis.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IMemphis);

            /** Memphis value. */
            public value: Uint8Array;

            /** Memphis timestamp. */
            public timestamp: (number|Long);

            /**
             * Creates a new Memphis instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Memphis instance
             */
            public static create(properties?: protos.records.IMemphis): protos.records.Memphis;

            /**
             * Encodes the specified Memphis message. Does not implicitly {@link protos.records.Memphis.verify|verify} messages.
             * @param message Memphis message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IMemphis, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Memphis message, length delimited. Does not implicitly {@link protos.records.Memphis.verify|verify} messages.
             * @param message Memphis message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IMemphis, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Memphis message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Memphis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.Memphis;

            /**
             * Decodes a Memphis message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Memphis
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.Memphis;

            /**
             * Verifies a Memphis message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Memphis message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Memphis
             */
            public static fromObject(object: { [k: string]: any }): protos.records.Memphis;

            /**
             * Creates a plain object from a Memphis message. Also converts values to other types if specified.
             * @param message Memphis
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.Memphis, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Memphis to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Mongo. */
        interface IMongo {

            /** Mongo value */
            value?: (Uint8Array|null);

            /** Mongo timestamp */
            timestamp?: (number|Long|null);
        }

        /** Represents a Mongo. */
        class Mongo implements IMongo {

            /**
             * Constructs a new Mongo.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IMongo);

            /** Mongo value. */
            public value: Uint8Array;

            /** Mongo timestamp. */
            public timestamp: (number|Long);

            /**
             * Creates a new Mongo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Mongo instance
             */
            public static create(properties?: protos.records.IMongo): protos.records.Mongo;

            /**
             * Encodes the specified Mongo message. Does not implicitly {@link protos.records.Mongo.verify|verify} messages.
             * @param message Mongo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IMongo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Mongo message, length delimited. Does not implicitly {@link protos.records.Mongo.verify|verify} messages.
             * @param message Mongo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IMongo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Mongo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Mongo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.Mongo;

            /**
             * Decodes a Mongo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Mongo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.Mongo;

            /**
             * Verifies a Mongo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Mongo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Mongo
             */
            public static fromObject(object: { [k: string]: any }): protos.records.Mongo;

            /**
             * Creates a plain object from a Mongo message. Also converts values to other types if specified.
             * @param message Mongo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.Mongo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Mongo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MQTT. */
        interface IMQTT {

            /** MQTT id */
            id?: (number|null);

            /** MQTT topic */
            topic?: (string|null);

            /** MQTT value */
            value?: (Uint8Array|null);

            /** MQTT duplicate */
            duplicate?: (boolean|null);

            /** MQTT retained */
            retained?: (boolean|null);

            /** MQTT qos */
            qos?: (number|null);

            /** MQTT timestamp */
            timestamp?: (number|Long|null);
        }

        /** Represents a MQTT. */
        class MQTT implements IMQTT {

            /**
             * Constructs a new MQTT.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IMQTT);

            /** MQTT id. */
            public id: number;

            /** MQTT topic. */
            public topic: string;

            /** MQTT value. */
            public value: Uint8Array;

            /** MQTT duplicate. */
            public duplicate: boolean;

            /** MQTT retained. */
            public retained: boolean;

            /** MQTT qos. */
            public qos: number;

            /** MQTT timestamp. */
            public timestamp: (number|Long);

            /**
             * Creates a new MQTT instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MQTT instance
             */
            public static create(properties?: protos.records.IMQTT): protos.records.MQTT;

            /**
             * Encodes the specified MQTT message. Does not implicitly {@link protos.records.MQTT.verify|verify} messages.
             * @param message MQTT message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IMQTT, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MQTT message, length delimited. Does not implicitly {@link protos.records.MQTT.verify|verify} messages.
             * @param message MQTT message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IMQTT, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MQTT message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MQTT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.MQTT;

            /**
             * Decodes a MQTT message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MQTT
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.MQTT;

            /**
             * Verifies a MQTT message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MQTT message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MQTT
             */
            public static fromObject(object: { [k: string]: any }): protos.records.MQTT;

            /**
             * Creates a plain object from a MQTT message. Also converts values to other types if specified.
             * @param message MQTT
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.MQTT, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MQTT to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Nats. */
        interface INats {

            /** Nats subject */
            subject?: (string|null);

            /** Nats value */
            value?: (Uint8Array|null);
        }

        /** Represents a Nats. */
        class Nats implements INats {

            /**
             * Constructs a new Nats.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.INats);

            /** Nats subject. */
            public subject: string;

            /** Nats value. */
            public value: Uint8Array;

            /**
             * Creates a new Nats instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Nats instance
             */
            public static create(properties?: protos.records.INats): protos.records.Nats;

            /**
             * Encodes the specified Nats message. Does not implicitly {@link protos.records.Nats.verify|verify} messages.
             * @param message Nats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.INats, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Nats message, length delimited. Does not implicitly {@link protos.records.Nats.verify|verify} messages.
             * @param message Nats message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.INats, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Nats message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Nats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.Nats;

            /**
             * Decodes a Nats message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Nats
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.Nats;

            /**
             * Verifies a Nats message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Nats message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Nats
             */
            public static fromObject(object: { [k: string]: any }): protos.records.Nats;

            /**
             * Creates a plain object from a Nats message. Also converts values to other types if specified.
             * @param message Nats
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.Nats, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Nats to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NatsJetstream. */
        interface INatsJetstream {

            /** NatsJetstream stream */
            stream?: (string|null);

            /** NatsJetstream value */
            value?: (Uint8Array|null);

            /** NatsJetstream consumerName */
            consumerName?: (string|null);

            /** NatsJetstream sequence */
            sequence?: (number|Long|null);
        }

        /** Represents a NatsJetstream. */
        class NatsJetstream implements INatsJetstream {

            /**
             * Constructs a new NatsJetstream.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.INatsJetstream);

            /** NatsJetstream stream. */
            public stream: string;

            /** NatsJetstream value. */
            public value: Uint8Array;

            /** NatsJetstream consumerName. */
            public consumerName: string;

            /** NatsJetstream sequence. */
            public sequence: (number|Long);

            /**
             * Creates a new NatsJetstream instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NatsJetstream instance
             */
            public static create(properties?: protos.records.INatsJetstream): protos.records.NatsJetstream;

            /**
             * Encodes the specified NatsJetstream message. Does not implicitly {@link protos.records.NatsJetstream.verify|verify} messages.
             * @param message NatsJetstream message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.INatsJetstream, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NatsJetstream message, length delimited. Does not implicitly {@link protos.records.NatsJetstream.verify|verify} messages.
             * @param message NatsJetstream message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.INatsJetstream, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NatsJetstream message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NatsJetstream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.NatsJetstream;

            /**
             * Decodes a NatsJetstream message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NatsJetstream
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.NatsJetstream;

            /**
             * Verifies a NatsJetstream message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NatsJetstream message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NatsJetstream
             */
            public static fromObject(object: { [k: string]: any }): protos.records.NatsJetstream;

            /**
             * Creates a plain object from a NatsJetstream message. Also converts values to other types if specified.
             * @param message NatsJetstream
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.NatsJetstream, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NatsJetstream to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NatsStreaming. */
        interface INatsStreaming {

            /** NatsStreaming metadata */
            metadata?: ({ [k: string]: string }|null);

            /** NatsStreaming value */
            value?: (Uint8Array|null);

            /** NatsStreaming timestamp */
            timestamp?: (number|Long|null);
        }

        /** Represents a NatsStreaming. */
        class NatsStreaming implements INatsStreaming {

            /**
             * Constructs a new NatsStreaming.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.INatsStreaming);

            /** NatsStreaming metadata. */
            public metadata: { [k: string]: string };

            /** NatsStreaming value. */
            public value: Uint8Array;

            /** NatsStreaming timestamp. */
            public timestamp: (number|Long);

            /**
             * Creates a new NatsStreaming instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NatsStreaming instance
             */
            public static create(properties?: protos.records.INatsStreaming): protos.records.NatsStreaming;

            /**
             * Encodes the specified NatsStreaming message. Does not implicitly {@link protos.records.NatsStreaming.verify|verify} messages.
             * @param message NatsStreaming message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.INatsStreaming, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NatsStreaming message, length delimited. Does not implicitly {@link protos.records.NatsStreaming.verify|verify} messages.
             * @param message NatsStreaming message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.INatsStreaming, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NatsStreaming message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NatsStreaming
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.NatsStreaming;

            /**
             * Decodes a NatsStreaming message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NatsStreaming
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.NatsStreaming;

            /**
             * Verifies a NatsStreaming message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NatsStreaming message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NatsStreaming
             */
            public static fromObject(object: { [k: string]: any }): protos.records.NatsStreaming;

            /**
             * Creates a plain object from a NatsStreaming message. Also converts values to other types if specified.
             * @param message NatsStreaming
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.NatsStreaming, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NatsStreaming to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NSQ. */
        interface INSQ {

            /** NSQ id */
            id?: (string|null);

            /** NSQ topic */
            topic?: (string|null);

            /** NSQ channel */
            channel?: (string|null);

            /** NSQ attempts */
            attempts?: (number|null);

            /** NSQ nsqdAddress */
            nsqdAddress?: (string|null);

            /** NSQ value */
            value?: (Uint8Array|null);

            /** NSQ timestamp */
            timestamp?: (number|Long|null);
        }

        /** Represents a NSQ. */
        class NSQ implements INSQ {

            /**
             * Constructs a new NSQ.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.INSQ);

            /** NSQ id. */
            public id: string;

            /** NSQ topic. */
            public topic: string;

            /** NSQ channel. */
            public channel: string;

            /** NSQ attempts. */
            public attempts: number;

            /** NSQ nsqdAddress. */
            public nsqdAddress: string;

            /** NSQ value. */
            public value: Uint8Array;

            /** NSQ timestamp. */
            public timestamp: (number|Long);

            /**
             * Creates a new NSQ instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NSQ instance
             */
            public static create(properties?: protos.records.INSQ): protos.records.NSQ;

            /**
             * Encodes the specified NSQ message. Does not implicitly {@link protos.records.NSQ.verify|verify} messages.
             * @param message NSQ message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.INSQ, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NSQ message, length delimited. Does not implicitly {@link protos.records.NSQ.verify|verify} messages.
             * @param message NSQ message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.INSQ, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NSQ message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NSQ
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.NSQ;

            /**
             * Decodes a NSQ message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NSQ
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.NSQ;

            /**
             * Verifies a NSQ message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NSQ message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NSQ
             */
            public static fromObject(object: { [k: string]: any }): protos.records.NSQ;

            /**
             * Creates a plain object from a NSQ message. Also converts values to other types if specified.
             * @param message NSQ
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.NSQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NSQ to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Postgres. */
        interface IPostgres {

            /** Postgres metadata */
            metadata?: ({ [k: string]: string }|null);

            /** Postgres timestamp */
            timestamp?: (number|Long|null);

            /** Postgres value */
            value?: (Uint8Array|null);
        }

        /** Represents a Postgres. */
        class Postgres implements IPostgres {

            /**
             * Constructs a new Postgres.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IPostgres);

            /** Postgres metadata. */
            public metadata: { [k: string]: string };

            /** Postgres timestamp. */
            public timestamp: (number|Long);

            /** Postgres value. */
            public value: Uint8Array;

            /**
             * Creates a new Postgres instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Postgres instance
             */
            public static create(properties?: protos.records.IPostgres): protos.records.Postgres;

            /**
             * Encodes the specified Postgres message. Does not implicitly {@link protos.records.Postgres.verify|verify} messages.
             * @param message Postgres message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IPostgres, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Postgres message, length delimited. Does not implicitly {@link protos.records.Postgres.verify|verify} messages.
             * @param message Postgres message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IPostgres, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Postgres message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Postgres
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.Postgres;

            /**
             * Decodes a Postgres message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Postgres
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.Postgres;

            /**
             * Verifies a Postgres message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Postgres message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Postgres
             */
            public static fromObject(object: { [k: string]: any }): protos.records.Postgres;

            /**
             * Creates a plain object from a Postgres message. Also converts values to other types if specified.
             * @param message Postgres
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.Postgres, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Postgres to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Pulsar. */
        interface IPulsar {

            /** Pulsar id */
            id?: (string|null);

            /** Pulsar key */
            key?: (string|null);

            /** Pulsar topic */
            topic?: (string|null);

            /** Pulsar properties */
            properties?: ({ [k: string]: string }|null);

            /** Pulsar redeliveryCount */
            redeliveryCount?: (number|null);

            /** Pulsar eventTime */
            eventTime?: (string|null);

            /** Pulsar isReplicated */
            isReplicated?: (boolean|null);

            /** Pulsar orderingKey */
            orderingKey?: (string|null);

            /** Pulsar producerName */
            producerName?: (string|null);

            /** Pulsar publishTime */
            publishTime?: (string|null);

            /** Pulsar timestamp */
            timestamp?: (number|Long|null);

            /** Pulsar value */
            value?: (Uint8Array|null);
        }

        /** Represents a Pulsar. */
        class Pulsar implements IPulsar {

            /**
             * Constructs a new Pulsar.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IPulsar);

            /** Pulsar id. */
            public id: string;

            /** Pulsar key. */
            public key: string;

            /** Pulsar topic. */
            public topic: string;

            /** Pulsar properties. */
            public properties: { [k: string]: string };

            /** Pulsar redeliveryCount. */
            public redeliveryCount: number;

            /** Pulsar eventTime. */
            public eventTime: string;

            /** Pulsar isReplicated. */
            public isReplicated: boolean;

            /** Pulsar orderingKey. */
            public orderingKey: string;

            /** Pulsar producerName. */
            public producerName: string;

            /** Pulsar publishTime. */
            public publishTime: string;

            /** Pulsar timestamp. */
            public timestamp: (number|Long);

            /** Pulsar value. */
            public value: Uint8Array;

            /**
             * Creates a new Pulsar instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Pulsar instance
             */
            public static create(properties?: protos.records.IPulsar): protos.records.Pulsar;

            /**
             * Encodes the specified Pulsar message. Does not implicitly {@link protos.records.Pulsar.verify|verify} messages.
             * @param message Pulsar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IPulsar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Pulsar message, length delimited. Does not implicitly {@link protos.records.Pulsar.verify|verify} messages.
             * @param message Pulsar message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IPulsar, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Pulsar message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Pulsar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.Pulsar;

            /**
             * Decodes a Pulsar message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Pulsar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.Pulsar;

            /**
             * Verifies a Pulsar message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Pulsar message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Pulsar
             */
            public static fromObject(object: { [k: string]: any }): protos.records.Pulsar;

            /**
             * Creates a plain object from a Pulsar message. Also converts values to other types if specified.
             * @param message Pulsar
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.Pulsar, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Pulsar to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RabbitHeader. */
        interface IRabbitHeader {

            /** RabbitHeader key */
            key?: (string|null);

            /** RabbitHeader value */
            value?: (string|null);
        }

        /** Represents a RabbitHeader. */
        class RabbitHeader implements IRabbitHeader {

            /**
             * Constructs a new RabbitHeader.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IRabbitHeader);

            /** RabbitHeader key. */
            public key: string;

            /** RabbitHeader value. */
            public value: string;

            /**
             * Creates a new RabbitHeader instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RabbitHeader instance
             */
            public static create(properties?: protos.records.IRabbitHeader): protos.records.RabbitHeader;

            /**
             * Encodes the specified RabbitHeader message. Does not implicitly {@link protos.records.RabbitHeader.verify|verify} messages.
             * @param message RabbitHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IRabbitHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RabbitHeader message, length delimited. Does not implicitly {@link protos.records.RabbitHeader.verify|verify} messages.
             * @param message RabbitHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IRabbitHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RabbitHeader message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RabbitHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.RabbitHeader;

            /**
             * Decodes a RabbitHeader message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RabbitHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.RabbitHeader;

            /**
             * Verifies a RabbitHeader message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RabbitHeader message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RabbitHeader
             */
            public static fromObject(object: { [k: string]: any }): protos.records.RabbitHeader;

            /**
             * Creates a plain object from a RabbitHeader message. Also converts values to other types if specified.
             * @param message RabbitHeader
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.RabbitHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RabbitHeader to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Rabbit. */
        interface IRabbit {

            /** Rabbit body */
            body?: (Uint8Array|null);

            /** Rabbit timestamp */
            timestamp?: (number|Long|null);

            /** Rabbit type */
            type?: (string|null);

            /** Rabbit exchange */
            exchange?: (string|null);

            /** Rabbit routingKey */
            routingKey?: (string|null);

            /** Rabbit contentType */
            contentType?: (string|null);

            /** Rabbit contentEncoding */
            contentEncoding?: (string|null);

            /** Rabbit priority */
            priority?: (number|null);

            /** Rabbit expiration */
            expiration?: (string|null);

            /** Rabbit messageId */
            messageId?: (string|null);

            /** Rabbit userId */
            userId?: (string|null);

            /** Rabbit appId */
            appId?: (string|null);

            /** Rabbit replyTo */
            replyTo?: (string|null);

            /** Rabbit correlationId */
            correlationId?: (string|null);

            /** Rabbit headers */
            headers?: (protos.records.IRabbitHeader[]|null);
        }

        /** Represents a Rabbit. */
        class Rabbit implements IRabbit {

            /**
             * Constructs a new Rabbit.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IRabbit);

            /** Rabbit body. */
            public body: Uint8Array;

            /** Rabbit timestamp. */
            public timestamp: (number|Long);

            /** Rabbit type. */
            public type: string;

            /** Rabbit exchange. */
            public exchange: string;

            /** Rabbit routingKey. */
            public routingKey: string;

            /** Rabbit contentType. */
            public contentType: string;

            /** Rabbit contentEncoding. */
            public contentEncoding: string;

            /** Rabbit priority. */
            public priority: number;

            /** Rabbit expiration. */
            public expiration: string;

            /** Rabbit messageId. */
            public messageId: string;

            /** Rabbit userId. */
            public userId: string;

            /** Rabbit appId. */
            public appId: string;

            /** Rabbit replyTo. */
            public replyTo: string;

            /** Rabbit correlationId. */
            public correlationId: string;

            /** Rabbit headers. */
            public headers: protos.records.IRabbitHeader[];

            /**
             * Creates a new Rabbit instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Rabbit instance
             */
            public static create(properties?: protos.records.IRabbit): protos.records.Rabbit;

            /**
             * Encodes the specified Rabbit message. Does not implicitly {@link protos.records.Rabbit.verify|verify} messages.
             * @param message Rabbit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IRabbit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Rabbit message, length delimited. Does not implicitly {@link protos.records.Rabbit.verify|verify} messages.
             * @param message Rabbit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IRabbit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Rabbit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Rabbit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.Rabbit;

            /**
             * Decodes a Rabbit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Rabbit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.Rabbit;

            /**
             * Verifies a Rabbit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Rabbit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Rabbit
             */
            public static fromObject(object: { [k: string]: any }): protos.records.Rabbit;

            /**
             * Creates a plain object from a Rabbit message. Also converts values to other types if specified.
             * @param message Rabbit
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.Rabbit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Rabbit to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RabbitStreams. */
        interface IRabbitStreams {

            /** RabbitStreams deliveryTag */
            deliveryTag?: (string|null);

            /** RabbitStreams format */
            format?: (number|null);

            /** RabbitStreams header */
            header?: (protos.records.IRabbitStreamsHeader|null);

            /** RabbitStreams deliveryAnnotations */
            deliveryAnnotations?: ({ [k: string]: string }|null);

            /** RabbitStreams sendSettled */
            sendSettled?: (boolean|null);

            /** RabbitStreams streamName */
            streamName?: (string|null);

            /** RabbitStreams timestamp */
            timestamp?: (number|Long|null);

            /** RabbitStreams value */
            value?: (Uint8Array|null);
        }

        /** Represents a RabbitStreams. */
        class RabbitStreams implements IRabbitStreams {

            /**
             * Constructs a new RabbitStreams.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IRabbitStreams);

            /** RabbitStreams deliveryTag. */
            public deliveryTag: string;

            /** RabbitStreams format. */
            public format: number;

            /** RabbitStreams header. */
            public header?: (protos.records.IRabbitStreamsHeader|null);

            /** RabbitStreams deliveryAnnotations. */
            public deliveryAnnotations: { [k: string]: string };

            /** RabbitStreams sendSettled. */
            public sendSettled: boolean;

            /** RabbitStreams streamName. */
            public streamName: string;

            /** RabbitStreams timestamp. */
            public timestamp: (number|Long);

            /** RabbitStreams value. */
            public value: Uint8Array;

            /**
             * Creates a new RabbitStreams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RabbitStreams instance
             */
            public static create(properties?: protos.records.IRabbitStreams): protos.records.RabbitStreams;

            /**
             * Encodes the specified RabbitStreams message. Does not implicitly {@link protos.records.RabbitStreams.verify|verify} messages.
             * @param message RabbitStreams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IRabbitStreams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RabbitStreams message, length delimited. Does not implicitly {@link protos.records.RabbitStreams.verify|verify} messages.
             * @param message RabbitStreams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IRabbitStreams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RabbitStreams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RabbitStreams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.RabbitStreams;

            /**
             * Decodes a RabbitStreams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RabbitStreams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.RabbitStreams;

            /**
             * Verifies a RabbitStreams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RabbitStreams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RabbitStreams
             */
            public static fromObject(object: { [k: string]: any }): protos.records.RabbitStreams;

            /**
             * Creates a plain object from a RabbitStreams message. Also converts values to other types if specified.
             * @param message RabbitStreams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.RabbitStreams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RabbitStreams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RabbitStreamsHeader. */
        interface IRabbitStreamsHeader {

            /** RabbitStreamsHeader durable */
            durable?: (boolean|null);

            /** RabbitStreamsHeader priority */
            priority?: (number|null);

            /** RabbitStreamsHeader ttl */
            ttl?: (number|Long|null);

            /** RabbitStreamsHeader firstAcquirer */
            firstAcquirer?: (boolean|null);

            /** RabbitStreamsHeader deliveryCount */
            deliveryCount?: (number|null);
        }

        /** Represents a RabbitStreamsHeader. */
        class RabbitStreamsHeader implements IRabbitStreamsHeader {

            /**
             * Constructs a new RabbitStreamsHeader.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IRabbitStreamsHeader);

            /** RabbitStreamsHeader durable. */
            public durable: boolean;

            /** RabbitStreamsHeader priority. */
            public priority: number;

            /** RabbitStreamsHeader ttl. */
            public ttl: (number|Long);

            /** RabbitStreamsHeader firstAcquirer. */
            public firstAcquirer: boolean;

            /** RabbitStreamsHeader deliveryCount. */
            public deliveryCount: number;

            /**
             * Creates a new RabbitStreamsHeader instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RabbitStreamsHeader instance
             */
            public static create(properties?: protos.records.IRabbitStreamsHeader): protos.records.RabbitStreamsHeader;

            /**
             * Encodes the specified RabbitStreamsHeader message. Does not implicitly {@link protos.records.RabbitStreamsHeader.verify|verify} messages.
             * @param message RabbitStreamsHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IRabbitStreamsHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RabbitStreamsHeader message, length delimited. Does not implicitly {@link protos.records.RabbitStreamsHeader.verify|verify} messages.
             * @param message RabbitStreamsHeader message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IRabbitStreamsHeader, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RabbitStreamsHeader message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RabbitStreamsHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.RabbitStreamsHeader;

            /**
             * Decodes a RabbitStreamsHeader message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RabbitStreamsHeader
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.RabbitStreamsHeader;

            /**
             * Verifies a RabbitStreamsHeader message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RabbitStreamsHeader message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RabbitStreamsHeader
             */
            public static fromObject(object: { [k: string]: any }): protos.records.RabbitStreamsHeader;

            /**
             * Creates a plain object from a RabbitStreamsHeader message. Also converts values to other types if specified.
             * @param message RabbitStreamsHeader
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.RabbitStreamsHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RabbitStreamsHeader to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RedisPubsub. */
        interface IRedisPubsub {

            /** RedisPubsub metadata */
            metadata?: ({ [k: string]: string }|null);

            /** RedisPubsub value */
            value?: (Uint8Array|null);

            /** RedisPubsub timestamp */
            timestamp?: (number|Long|null);
        }

        /** Represents a RedisPubsub. */
        class RedisPubsub implements IRedisPubsub {

            /**
             * Constructs a new RedisPubsub.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IRedisPubsub);

            /** RedisPubsub metadata. */
            public metadata: { [k: string]: string };

            /** RedisPubsub value. */
            public value: Uint8Array;

            /** RedisPubsub timestamp. */
            public timestamp: (number|Long);

            /**
             * Creates a new RedisPubsub instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RedisPubsub instance
             */
            public static create(properties?: protos.records.IRedisPubsub): protos.records.RedisPubsub;

            /**
             * Encodes the specified RedisPubsub message. Does not implicitly {@link protos.records.RedisPubsub.verify|verify} messages.
             * @param message RedisPubsub message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IRedisPubsub, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RedisPubsub message, length delimited. Does not implicitly {@link protos.records.RedisPubsub.verify|verify} messages.
             * @param message RedisPubsub message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IRedisPubsub, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RedisPubsub message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RedisPubsub
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.RedisPubsub;

            /**
             * Decodes a RedisPubsub message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RedisPubsub
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.RedisPubsub;

            /**
             * Verifies a RedisPubsub message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RedisPubsub message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RedisPubsub
             */
            public static fromObject(object: { [k: string]: any }): protos.records.RedisPubsub;

            /**
             * Creates a plain object from a RedisPubsub message. Also converts values to other types if specified.
             * @param message RedisPubsub
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.RedisPubsub, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RedisPubsub to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RedisStreams. */
        interface IRedisStreams {

            /** RedisStreams id */
            id?: (string|null);

            /** RedisStreams key */
            key?: (string|null);

            /** RedisStreams value */
            value?: (string|null);

            /** RedisStreams stream */
            stream?: (string|null);

            /** RedisStreams timestamp */
            timestamp?: (number|Long|null);
        }

        /** Represents a RedisStreams. */
        class RedisStreams implements IRedisStreams {

            /**
             * Constructs a new RedisStreams.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.records.IRedisStreams);

            /** RedisStreams id. */
            public id: string;

            /** RedisStreams key. */
            public key: string;

            /** RedisStreams value. */
            public value: string;

            /** RedisStreams stream. */
            public stream: string;

            /** RedisStreams timestamp. */
            public timestamp: (number|Long);

            /**
             * Creates a new RedisStreams instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RedisStreams instance
             */
            public static create(properties?: protos.records.IRedisStreams): protos.records.RedisStreams;

            /**
             * Encodes the specified RedisStreams message. Does not implicitly {@link protos.records.RedisStreams.verify|verify} messages.
             * @param message RedisStreams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.records.IRedisStreams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RedisStreams message, length delimited. Does not implicitly {@link protos.records.RedisStreams.verify|verify} messages.
             * @param message RedisStreams message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.records.IRedisStreams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RedisStreams message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RedisStreams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.records.RedisStreams;

            /**
             * Decodes a RedisStreams message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RedisStreams
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.records.RedisStreams;

            /**
             * Verifies a RedisStreams message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RedisStreams message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RedisStreams
             */
            public static fromObject(object: { [k: string]: any }): protos.records.RedisStreams;

            /**
             * Creates a plain object from a RedisStreams message. Also converts values to other types if specified.
             * @param message RedisStreams
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.records.RedisStreams, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RedisStreams to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
