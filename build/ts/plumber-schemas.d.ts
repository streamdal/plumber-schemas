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

        /** Properties of a AWSSNSConn. */
        interface IAWSSNSConn {

            /** AWSSNSConn awsRegion */
            awsRegion?: (string|null);

            /** AWSSNSConn awsAccessKeyId */
            awsAccessKeyId?: (string|null);

            /** AWSSNSConn awsSecretAccessKey */
            awsSecretAccessKey?: (string|null);
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
            maxNumMessages?: (number|null);

            /** AWSSQSReadArgs receiveRequestAttemptId */
            receiveRequestAttemptId?: (string|null);

            /** AWSSQSReadArgs autoDelete */
            autoDelete?: (boolean|null);

            /** AWSSQSReadArgs waitTimeSeconds */
            waitTimeSeconds?: (number|null);
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
            public maxNumMessages: number;

            /** AWSSQSReadArgs receiveRequestAttemptId. */
            public receiveRequestAttemptId: string;

            /** AWSSQSReadArgs autoDelete. */
            public autoDelete: boolean;

            /** AWSSQSReadArgs waitTimeSeconds. */
            public waitTimeSeconds: number;

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
            delaySeconds?: (number|null);

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
            public delaySeconds: number;

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
            maxNumMessages?: (number|null);

            /** AWSSQSRelayArgs receiveRequestAttemptId */
            receiveRequestAttemptId?: (string|null);

            /** AWSSQSRelayArgs autoDelete */
            autoDelete?: (boolean|null);

            /** AWSSQSRelayArgs waitTimeSeconds */
            waitTimeSeconds?: (number|null);
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
            public maxNumMessages: number;

            /** AWSSQSRelayArgs receiveRequestAttemptId. */
            public receiveRequestAttemptId: string;

            /** AWSSQSRelayArgs autoDelete. */
            public autoDelete: boolean;

            /** AWSSQSRelayArgs waitTimeSeconds. */
            public waitTimeSeconds: number;

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

        /** Properties of a KafkaConn. */
        interface IKafkaConn {

            /** KafkaConn address */
            address?: (string[]|null);

            /** KafkaConn timeoutSeconds */
            timeoutSeconds?: (number|null);

            /** KafkaConn useTls */
            useTls?: (boolean|null);

            /** KafkaConn insecureTls */
            insecureTls?: (boolean|null);

            /** KafkaConn saslType */
            saslType?: (protos.args.KafkaConn.SASLType|null);

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

            /** KafkaConn insecureTls. */
            public insecureTls: boolean;

            /** KafkaConn saslType. */
            public saslType: protos.args.KafkaConn.SASLType;

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

        namespace KafkaConn {

            /** SASLType enum. */
            enum SASLType {
                NONE = 0,
                PLAIN = 1,
                SCRAM = 2
            }
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

            /** KubeMQQueueConn tlsCertFile */
            tlsCertFile?: (string|null);
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

            /** KubeMQQueueConn tlsCertFile. */
            public tlsCertFile: string;

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

            /** KubeMQQueueReadArgs clientId */
            clientId?: (string|null);

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

            /** KubeMQQueueReadArgs clientId. */
            public clientId: string;

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

            /** KubeMQQueueWriteArgs clientId */
            clientId?: (string|null);

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

            /** KubeMQQueueWriteArgs clientId. */
            public clientId: string;

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

            /** MQTTTLSOptions caFile */
            caFile?: (string|null);

            /** MQTTTLSOptions certFile */
            certFile?: (string|null);

            /** MQTTTLSOptions keyFile */
            keyFile?: (string|null);

            /** MQTTTLSOptions skipVerify */
            skipVerify?: (boolean|null);
        }

        /** Represents a MQTTTLSOptions. */
        class MQTTTLSOptions implements IMQTTTLSOptions {

            /**
             * Constructs a new MQTTTLSOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IMQTTTLSOptions);

            /** MQTTTLSOptions caFile. */
            public caFile: string;

            /** MQTTTLSOptions certFile. */
            public certFile: string;

            /** MQTTTLSOptions keyFile. */
            public keyFile: string;

            /** MQTTTLSOptions skipVerify. */
            public skipVerify: boolean;

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
            qosLevel?: (number|null);

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
            public qosLevel: number;

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

            /** NatsConn insecureTls */
            insecureTls?: (boolean|null);

            /** NatsConn tlsCaCert */
            tlsCaCert?: (Uint8Array|null);

            /** NatsConn tlsClientCert */
            tlsClientCert?: (Uint8Array|null);

            /** NatsConn tlsClientKey */
            tlsClientKey?: (Uint8Array|null);

            /** NatsConn userCredentials */
            userCredentials?: (Uint8Array|null);
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

            /** NatsConn insecureTls. */
            public insecureTls: boolean;

            /** NatsConn tlsCaCert. */
            public tlsCaCert: Uint8Array;

            /** NatsConn tlsClientCert. */
            public tlsClientCert: Uint8Array;

            /** NatsConn tlsClientKey. */
            public tlsClientKey: Uint8Array;

            /** NatsConn userCredentials. */
            public userCredentials: Uint8Array;

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

        /** Properties of a NatsStreamingConn. */
        interface INatsStreamingConn {

            /** NatsStreamingConn dsn */
            dsn?: (string|null);

            /** NatsStreamingConn insecureTls */
            insecureTls?: (boolean|null);

            /** NatsStreamingConn tlsCaCert */
            tlsCaCert?: (Uint8Array|null);

            /** NatsStreamingConn tlsClientCert */
            tlsClientCert?: (Uint8Array|null);

            /** NatsStreamingConn tlsClientKey */
            tlsClientKey?: (Uint8Array|null);

            /** NatsStreamingConn userCredentials */
            userCredentials?: (Uint8Array|null);

            /** NatsStreamingConn clusterId */
            clusterId?: (string|null);

            /** NatsStreamingConn clientId */
            clientId?: (string|null);
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

            /** NatsStreamingConn insecureTls. */
            public insecureTls: boolean;

            /** NatsStreamingConn tlsCaCert. */
            public tlsCaCert: Uint8Array;

            /** NatsStreamingConn tlsClientCert. */
            public tlsClientCert: Uint8Array;

            /** NatsStreamingConn tlsClientKey. */
            public tlsClientKey: Uint8Array;

            /** NatsStreamingConn userCredentials. */
            public userCredentials: Uint8Array;

            /** NatsStreamingConn clusterId. */
            public clusterId: string;

            /** NatsStreamingConn clientId. */
            public clientId: string;

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

            /** NSQConn insecureTls */
            insecureTls?: (boolean|null);

            /** NSQConn tlsCaCert */
            tlsCaCert?: (Uint8Array|null);

            /** NSQConn tlsClientCert */
            tlsClientCert?: (Uint8Array|null);

            /** NSQConn tlsClientKey */
            tlsClientKey?: (Uint8Array|null);

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

            /** NSQConn insecureTls. */
            public insecureTls: boolean;

            /** NSQConn tlsCaCert. */
            public tlsCaCert: Uint8Array;

            /** NSQConn tlsClientCert. */
            public tlsClientCert: Uint8Array;

            /** NSQConn tlsClientKey. */
            public tlsClientKey: Uint8Array;

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

            /** PostgresConn insecureTls */
            insecureTls?: (boolean|null);
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

            /** PostgresConn insecureTls. */
            public insecureTls: boolean;

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

        /** Properties of a PulsarConn. */
        interface IPulsarConn {

            /** PulsarConn dsn */
            dsn?: (string|null);

            /** PulsarConn connectTimeoutSeconds */
            connectTimeoutSeconds?: (number|null);

            /** PulsarConn insecureTls */
            insecureTls?: (boolean|null);

            /** PulsarConn tlsClientCert */
            tlsClientCert?: (Uint8Array|null);

            /** PulsarConn tlsClientKey */
            tlsClientKey?: (Uint8Array|null);
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

            /** PulsarConn insecureTls. */
            public insecureTls: boolean;

            /** PulsarConn tlsClientCert. */
            public tlsClientCert: Uint8Array;

            /** PulsarConn tlsClientKey. */
            public tlsClientKey: Uint8Array;

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

            /** RabbitConn insecureTls */
            insecureTls?: (boolean|null);
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

            /** RabbitConn insecureTls. */
            public insecureTls: boolean;

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

            /** RabbitStreamsConn insecureTls */
            insecureTls?: (boolean|null);

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

            /** RabbitStreamsConn insecureTls. */
            public insecureTls: boolean;

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
            lastOffset?: (number|Long|null);

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
            public lastOffset: (number|Long);

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

            /** RedisPubSubReadArgs database */
            database?: (number|null);

            /** RedisPubSubReadArgs channel */
            channel?: (string[]|null);
        }

        /** Represents a RedisPubSubReadArgs. */
        class RedisPubSubReadArgs implements IRedisPubSubReadArgs {

            /**
             * Constructs a new RedisPubSubReadArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IRedisPubSubReadArgs);

            /** RedisPubSubReadArgs database. */
            public database: number;

            /** RedisPubSubReadArgs channel. */
            public channel: string[];

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

            /** RedisPubSubWriteArgs database */
            database?: (number|null);

            /** RedisPubSubWriteArgs channel */
            channel?: (string[]|null);
        }

        /** Represents a RedisPubSubWriteArgs. */
        class RedisPubSubWriteArgs implements IRedisPubSubWriteArgs {

            /**
             * Constructs a new RedisPubSubWriteArgs.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.args.IRedisPubSubWriteArgs);

            /** RedisPubSubWriteArgs database. */
            public database: number;

            /** RedisPubSubWriteArgs channel. */
            public channel: string[];

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

        /** Properties of a RedisStreamsConn. */
        interface IRedisStreamsConn {

            /** RedisStreamsConn address */
            address?: (string|null);

            /** RedisStreamsConn username */
            username?: (string|null);

            /** RedisStreamsConn password */
            password?: (string|null);
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
            offsetStart?: (protos.args.CreateConsumerConfig.OffsetStart|null);
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
            public offsetStart: protos.args.CreateConsumerConfig.OffsetStart;

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

        namespace CreateConsumerConfig {

            /** OffsetStart enum. */
            enum OffsetStart {
                Latest = 0,
                Oldest = 1
            }
        }

        /** Properties of a RedisStreamsReadArgs. */
        interface IRedisStreamsReadArgs {

            /** RedisStreamsReadArgs database */
            database?: (number|null);

            /** RedisStreamsReadArgs stream */
            stream?: (string[]|null);

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

            /** RedisStreamsReadArgs database. */
            public database: number;

            /** RedisStreamsReadArgs stream. */
            public stream: string[];

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

        /** Properties of an Auth. */
        interface IAuth {

            /** Auth token */
            token?: (string|null);
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
            BACKEND_TYPE_KUBE_MQ = 19
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
    }

    /** Namespace encoding. */
    namespace encoding {

        /** EncodeType enum. */
        enum EncodeType {
            ENCODE_TYPE_UNSET = 0,
            ENCODE_TYPE_JSONPB = 1,
            ENCODE_TYPE_AVRO = 2
        }

        /** DecodeType enum. */
        enum DecodeType {
            DECODE_TYPE_UNSET = 0,
            DECODE_TYPE_PROTOBUF = 1,
            DECODE_TYPE_AVRO = 2,
            DECODE_TYPE_THRIFT = 3,
            DECODE_TYPE_FLATBUFFER = 4
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

        /** Properties of a BatchOptions. */
        interface IBatchOptions {

            /** BatchOptions outputType */
            outputType?: (protos.opts.BatchOutputType|null);

            /** BatchOptions apiUrl */
            apiUrl?: (string|null);

            /** BatchOptions login */
            login?: (protos.opts.IBatchLoginOptions|null);

            /** BatchOptions logout */
            logout?: (protos.opts.IBatchLogoutOptions|null);

            /** BatchOptions list */
            list?: (protos.opts.IBatchListOptions|null);

            /** BatchOptions create */
            create?: (protos.opts.IBatchCreateOptions|null);

            /** BatchOptions search */
            search?: (protos.opts.IBatchSearchOptions|null);

            /** BatchOptions archive */
            archive?: (protos.opts.IBatchArchiveOptions|null);
        }

        /** Represents a BatchOptions. */
        class BatchOptions implements IBatchOptions {

            /**
             * Constructs a new BatchOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IBatchOptions);

            /** BatchOptions outputType. */
            public outputType: protos.opts.BatchOutputType;

            /** BatchOptions apiUrl. */
            public apiUrl: string;

            /** BatchOptions login. */
            public login?: (protos.opts.IBatchLoginOptions|null);

            /** BatchOptions logout. */
            public logout?: (protos.opts.IBatchLogoutOptions|null);

            /** BatchOptions list. */
            public list?: (protos.opts.IBatchListOptions|null);

            /** BatchOptions create. */
            public create?: (protos.opts.IBatchCreateOptions|null);

            /** BatchOptions search. */
            public search?: (protos.opts.IBatchSearchOptions|null);

            /** BatchOptions archive. */
            public archive?: (protos.opts.IBatchArchiveOptions|null);

            /**
             * Creates a new BatchOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchOptions instance
             */
            public static create(properties?: protos.opts.IBatchOptions): protos.opts.BatchOptions;

            /**
             * Encodes the specified BatchOptions message. Does not implicitly {@link protos.opts.BatchOptions.verify|verify} messages.
             * @param message BatchOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IBatchOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchOptions message, length delimited. Does not implicitly {@link protos.opts.BatchOptions.verify|verify} messages.
             * @param message BatchOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IBatchOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.BatchOptions;

            /**
             * Decodes a BatchOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.BatchOptions;

            /**
             * Verifies a BatchOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.BatchOptions;

            /**
             * Creates a plain object from a BatchOptions message. Also converts values to other types if specified.
             * @param message BatchOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.BatchOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchLoginOptions. */
        interface IBatchLoginOptions {
        }

        /** Represents a BatchLoginOptions. */
        class BatchLoginOptions implements IBatchLoginOptions {

            /**
             * Constructs a new BatchLoginOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IBatchLoginOptions);

            /**
             * Creates a new BatchLoginOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchLoginOptions instance
             */
            public static create(properties?: protos.opts.IBatchLoginOptions): protos.opts.BatchLoginOptions;

            /**
             * Encodes the specified BatchLoginOptions message. Does not implicitly {@link protos.opts.BatchLoginOptions.verify|verify} messages.
             * @param message BatchLoginOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IBatchLoginOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchLoginOptions message, length delimited. Does not implicitly {@link protos.opts.BatchLoginOptions.verify|verify} messages.
             * @param message BatchLoginOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IBatchLoginOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchLoginOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchLoginOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.BatchLoginOptions;

            /**
             * Decodes a BatchLoginOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchLoginOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.BatchLoginOptions;

            /**
             * Verifies a BatchLoginOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchLoginOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchLoginOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.BatchLoginOptions;

            /**
             * Creates a plain object from a BatchLoginOptions message. Also converts values to other types if specified.
             * @param message BatchLoginOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.BatchLoginOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchLoginOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchLogoutOptions. */
        interface IBatchLogoutOptions {
        }

        /** Represents a BatchLogoutOptions. */
        class BatchLogoutOptions implements IBatchLogoutOptions {

            /**
             * Constructs a new BatchLogoutOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IBatchLogoutOptions);

            /**
             * Creates a new BatchLogoutOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchLogoutOptions instance
             */
            public static create(properties?: protos.opts.IBatchLogoutOptions): protos.opts.BatchLogoutOptions;

            /**
             * Encodes the specified BatchLogoutOptions message. Does not implicitly {@link protos.opts.BatchLogoutOptions.verify|verify} messages.
             * @param message BatchLogoutOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IBatchLogoutOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchLogoutOptions message, length delimited. Does not implicitly {@link protos.opts.BatchLogoutOptions.verify|verify} messages.
             * @param message BatchLogoutOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IBatchLogoutOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchLogoutOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchLogoutOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.BatchLogoutOptions;

            /**
             * Decodes a BatchLogoutOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchLogoutOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.BatchLogoutOptions;

            /**
             * Verifies a BatchLogoutOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchLogoutOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchLogoutOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.BatchLogoutOptions;

            /**
             * Creates a plain object from a BatchLogoutOptions message. Also converts values to other types if specified.
             * @param message BatchLogoutOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.BatchLogoutOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchLogoutOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchArchiveOptions. */
        interface IBatchArchiveOptions {

            /** BatchArchiveOptions replay */
            replay?: (protos.opts.IBatchArchiveReplayOptions|null);
        }

        /** Represents a BatchArchiveOptions. */
        class BatchArchiveOptions implements IBatchArchiveOptions {

            /**
             * Constructs a new BatchArchiveOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IBatchArchiveOptions);

            /** BatchArchiveOptions replay. */
            public replay?: (protos.opts.IBatchArchiveReplayOptions|null);

            /**
             * Creates a new BatchArchiveOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchArchiveOptions instance
             */
            public static create(properties?: protos.opts.IBatchArchiveOptions): protos.opts.BatchArchiveOptions;

            /**
             * Encodes the specified BatchArchiveOptions message. Does not implicitly {@link protos.opts.BatchArchiveOptions.verify|verify} messages.
             * @param message BatchArchiveOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IBatchArchiveOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchArchiveOptions message, length delimited. Does not implicitly {@link protos.opts.BatchArchiveOptions.verify|verify} messages.
             * @param message BatchArchiveOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IBatchArchiveOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchArchiveOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchArchiveOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.BatchArchiveOptions;

            /**
             * Decodes a BatchArchiveOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchArchiveOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.BatchArchiveOptions;

            /**
             * Verifies a BatchArchiveOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchArchiveOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchArchiveOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.BatchArchiveOptions;

            /**
             * Creates a plain object from a BatchArchiveOptions message. Also converts values to other types if specified.
             * @param message BatchArchiveOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.BatchArchiveOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchArchiveOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchArchiveReplayOptions. */
        interface IBatchArchiveReplayOptions {

            /** BatchArchiveReplayOptions replayId */
            replayId?: (string|null);
        }

        /** Represents a BatchArchiveReplayOptions. */
        class BatchArchiveReplayOptions implements IBatchArchiveReplayOptions {

            /**
             * Constructs a new BatchArchiveReplayOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IBatchArchiveReplayOptions);

            /** BatchArchiveReplayOptions replayId. */
            public replayId: string;

            /**
             * Creates a new BatchArchiveReplayOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchArchiveReplayOptions instance
             */
            public static create(properties?: protos.opts.IBatchArchiveReplayOptions): protos.opts.BatchArchiveReplayOptions;

            /**
             * Encodes the specified BatchArchiveReplayOptions message. Does not implicitly {@link protos.opts.BatchArchiveReplayOptions.verify|verify} messages.
             * @param message BatchArchiveReplayOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IBatchArchiveReplayOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchArchiveReplayOptions message, length delimited. Does not implicitly {@link protos.opts.BatchArchiveReplayOptions.verify|verify} messages.
             * @param message BatchArchiveReplayOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IBatchArchiveReplayOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchArchiveReplayOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchArchiveReplayOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.BatchArchiveReplayOptions;

            /**
             * Decodes a BatchArchiveReplayOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchArchiveReplayOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.BatchArchiveReplayOptions;

            /**
             * Verifies a BatchArchiveReplayOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchArchiveReplayOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchArchiveReplayOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.BatchArchiveReplayOptions;

            /**
             * Creates a plain object from a BatchArchiveReplayOptions message. Also converts values to other types if specified.
             * @param message BatchArchiveReplayOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.BatchArchiveReplayOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchArchiveReplayOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** BatchOutputType enum. */
        enum BatchOutputType {
            TABLE = 0,
            JSON = 1
        }

        /** Properties of a BatchListOptions. */
        interface IBatchListOptions {

            /** BatchListOptions collection */
            collection?: (boolean|null);

            /** BatchListOptions destination */
            destination?: (boolean|null);

            /** BatchListOptions replay */
            replay?: (boolean|null);

            /** BatchListOptions schema */
            schema?: (boolean|null);
        }

        /** Represents a BatchListOptions. */
        class BatchListOptions implements IBatchListOptions {

            /**
             * Constructs a new BatchListOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IBatchListOptions);

            /** BatchListOptions collection. */
            public collection: boolean;

            /** BatchListOptions destination. */
            public destination: boolean;

            /** BatchListOptions replay. */
            public replay: boolean;

            /** BatchListOptions schema. */
            public schema: boolean;

            /**
             * Creates a new BatchListOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchListOptions instance
             */
            public static create(properties?: protos.opts.IBatchListOptions): protos.opts.BatchListOptions;

            /**
             * Encodes the specified BatchListOptions message. Does not implicitly {@link protos.opts.BatchListOptions.verify|verify} messages.
             * @param message BatchListOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IBatchListOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchListOptions message, length delimited. Does not implicitly {@link protos.opts.BatchListOptions.verify|verify} messages.
             * @param message BatchListOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IBatchListOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchListOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchListOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.BatchListOptions;

            /**
             * Decodes a BatchListOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchListOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.BatchListOptions;

            /**
             * Verifies a BatchListOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchListOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchListOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.BatchListOptions;

            /**
             * Creates a plain object from a BatchListOptions message. Also converts values to other types if specified.
             * @param message BatchListOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.BatchListOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchListOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchCreateOptions. */
        interface IBatchCreateOptions {

            /** BatchCreateOptions collection */
            collection?: (protos.opts.IBatchCreateCollectionOptions|null);

            /** BatchCreateOptions replay */
            replay?: (protos.opts.IBatchCreateReplayOptions|null);

            /** BatchCreateOptions destination */
            destination?: (protos.opts.IBatchCreateDestinationOptions|null);
        }

        /** Represents a BatchCreateOptions. */
        class BatchCreateOptions implements IBatchCreateOptions {

            /**
             * Constructs a new BatchCreateOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IBatchCreateOptions);

            /** BatchCreateOptions collection. */
            public collection?: (protos.opts.IBatchCreateCollectionOptions|null);

            /** BatchCreateOptions replay. */
            public replay?: (protos.opts.IBatchCreateReplayOptions|null);

            /** BatchCreateOptions destination. */
            public destination?: (protos.opts.IBatchCreateDestinationOptions|null);

            /**
             * Creates a new BatchCreateOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchCreateOptions instance
             */
            public static create(properties?: protos.opts.IBatchCreateOptions): protos.opts.BatchCreateOptions;

            /**
             * Encodes the specified BatchCreateOptions message. Does not implicitly {@link protos.opts.BatchCreateOptions.verify|verify} messages.
             * @param message BatchCreateOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IBatchCreateOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchCreateOptions message, length delimited. Does not implicitly {@link protos.opts.BatchCreateOptions.verify|verify} messages.
             * @param message BatchCreateOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IBatchCreateOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchCreateOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchCreateOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.BatchCreateOptions;

            /**
             * Decodes a BatchCreateOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchCreateOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.BatchCreateOptions;

            /**
             * Verifies a BatchCreateOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchCreateOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchCreateOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.BatchCreateOptions;

            /**
             * Creates a plain object from a BatchCreateOptions message. Also converts values to other types if specified.
             * @param message BatchCreateOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.BatchCreateOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchCreateOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchSearchOptions. */
        interface IBatchSearchOptions {

            /** BatchSearchOptions query */
            query?: (string|null);

            /** BatchSearchOptions collectionId */
            collectionId?: (string|null);

            /** BatchSearchOptions page */
            page?: (number|null);
        }

        /** Represents a BatchSearchOptions. */
        class BatchSearchOptions implements IBatchSearchOptions {

            /**
             * Constructs a new BatchSearchOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IBatchSearchOptions);

            /** BatchSearchOptions query. */
            public query: string;

            /** BatchSearchOptions collectionId. */
            public collectionId: string;

            /** BatchSearchOptions page. */
            public page: number;

            /**
             * Creates a new BatchSearchOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchSearchOptions instance
             */
            public static create(properties?: protos.opts.IBatchSearchOptions): protos.opts.BatchSearchOptions;

            /**
             * Encodes the specified BatchSearchOptions message. Does not implicitly {@link protos.opts.BatchSearchOptions.verify|verify} messages.
             * @param message BatchSearchOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IBatchSearchOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchSearchOptions message, length delimited. Does not implicitly {@link protos.opts.BatchSearchOptions.verify|verify} messages.
             * @param message BatchSearchOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IBatchSearchOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchSearchOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchSearchOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.BatchSearchOptions;

            /**
             * Decodes a BatchSearchOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchSearchOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.BatchSearchOptions;

            /**
             * Verifies a BatchSearchOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchSearchOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchSearchOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.BatchSearchOptions;

            /**
             * Creates a plain object from a BatchSearchOptions message. Also converts values to other types if specified.
             * @param message BatchSearchOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.BatchSearchOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchSearchOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchCreateCollectionOptions. */
        interface IBatchCreateCollectionOptions {

            /** BatchCreateCollectionOptions name */
            name?: (string|null);

            /** BatchCreateCollectionOptions schemaId */
            schemaId?: (string|null);

            /** BatchCreateCollectionOptions notes */
            notes?: (string|null);
        }

        /** Represents a BatchCreateCollectionOptions. */
        class BatchCreateCollectionOptions implements IBatchCreateCollectionOptions {

            /**
             * Constructs a new BatchCreateCollectionOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IBatchCreateCollectionOptions);

            /** BatchCreateCollectionOptions name. */
            public name: string;

            /** BatchCreateCollectionOptions schemaId. */
            public schemaId: string;

            /** BatchCreateCollectionOptions notes. */
            public notes: string;

            /**
             * Creates a new BatchCreateCollectionOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchCreateCollectionOptions instance
             */
            public static create(properties?: protos.opts.IBatchCreateCollectionOptions): protos.opts.BatchCreateCollectionOptions;

            /**
             * Encodes the specified BatchCreateCollectionOptions message. Does not implicitly {@link protos.opts.BatchCreateCollectionOptions.verify|verify} messages.
             * @param message BatchCreateCollectionOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IBatchCreateCollectionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchCreateCollectionOptions message, length delimited. Does not implicitly {@link protos.opts.BatchCreateCollectionOptions.verify|verify} messages.
             * @param message BatchCreateCollectionOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IBatchCreateCollectionOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchCreateCollectionOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchCreateCollectionOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.BatchCreateCollectionOptions;

            /**
             * Decodes a BatchCreateCollectionOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchCreateCollectionOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.BatchCreateCollectionOptions;

            /**
             * Verifies a BatchCreateCollectionOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchCreateCollectionOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchCreateCollectionOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.BatchCreateCollectionOptions;

            /**
             * Creates a plain object from a BatchCreateCollectionOptions message. Also converts values to other types if specified.
             * @param message BatchCreateCollectionOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.BatchCreateCollectionOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchCreateCollectionOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** BatchReplayType enum. */
        enum BatchReplayType {
            SINGLE = 0,
            CONTINUOUS = 1
        }

        /** Properties of a BatchCreateReplayOptions. */
        interface IBatchCreateReplayOptions {

            /** BatchCreateReplayOptions name */
            name?: (string|null);

            /** BatchCreateReplayOptions type */
            type?: (protos.opts.BatchReplayType|null);

            /** BatchCreateReplayOptions notes */
            notes?: (string|null);

            /** BatchCreateReplayOptions collectionId */
            collectionId?: (string|null);

            /** BatchCreateReplayOptions destinationId */
            destinationId?: (string|null);

            /** BatchCreateReplayOptions query */
            query?: (string|null);

            /** BatchCreateReplayOptions fromTimestamp */
            fromTimestamp?: (string|null);

            /** BatchCreateReplayOptions toTimestamp */
            toTimestamp?: (string|null);
        }

        /** Represents a BatchCreateReplayOptions. */
        class BatchCreateReplayOptions implements IBatchCreateReplayOptions {

            /**
             * Constructs a new BatchCreateReplayOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IBatchCreateReplayOptions);

            /** BatchCreateReplayOptions name. */
            public name: string;

            /** BatchCreateReplayOptions type. */
            public type: protos.opts.BatchReplayType;

            /** BatchCreateReplayOptions notes. */
            public notes: string;

            /** BatchCreateReplayOptions collectionId. */
            public collectionId: string;

            /** BatchCreateReplayOptions destinationId. */
            public destinationId: string;

            /** BatchCreateReplayOptions query. */
            public query: string;

            /** BatchCreateReplayOptions fromTimestamp. */
            public fromTimestamp: string;

            /** BatchCreateReplayOptions toTimestamp. */
            public toTimestamp: string;

            /**
             * Creates a new BatchCreateReplayOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchCreateReplayOptions instance
             */
            public static create(properties?: protos.opts.IBatchCreateReplayOptions): protos.opts.BatchCreateReplayOptions;

            /**
             * Encodes the specified BatchCreateReplayOptions message. Does not implicitly {@link protos.opts.BatchCreateReplayOptions.verify|verify} messages.
             * @param message BatchCreateReplayOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IBatchCreateReplayOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchCreateReplayOptions message, length delimited. Does not implicitly {@link protos.opts.BatchCreateReplayOptions.verify|verify} messages.
             * @param message BatchCreateReplayOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IBatchCreateReplayOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchCreateReplayOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchCreateReplayOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.BatchCreateReplayOptions;

            /**
             * Decodes a BatchCreateReplayOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchCreateReplayOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.BatchCreateReplayOptions;

            /**
             * Verifies a BatchCreateReplayOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchCreateReplayOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchCreateReplayOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.BatchCreateReplayOptions;

            /**
             * Creates a plain object from a BatchCreateReplayOptions message. Also converts values to other types if specified.
             * @param message BatchCreateReplayOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.BatchCreateReplayOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchCreateReplayOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BatchCreateDestinationOptions. */
        interface IBatchCreateDestinationOptions {

            /** BatchCreateDestinationOptions name */
            name?: (string|null);

            /** BatchCreateDestinationOptions notes */
            notes?: (string|null);

            /** BatchCreateDestinationOptions _apiDestinationType */
            _apiDestinationType?: (string|null);

            /** BatchCreateDestinationOptions kafka */
            kafka?: (protos.opts.IWriteGroupKafkaOptions|null);

            /** BatchCreateDestinationOptions rabbit */
            rabbit?: (protos.opts.IWriteGroupRabbitOptions|null);

            /** BatchCreateDestinationOptions kubemqQueue */
            kubemqQueue?: (protos.opts.IWriteGroupKubeMQQueueOptions|null);

            /** BatchCreateDestinationOptions awssqs */
            awssqs?: (protos.opts.IWriteGroupAWSSQSOptions|null);

            /** BatchCreateDestinationOptions http */
            http?: (protos.opts.IHTTPDestination|null);
        }

        /** Represents a BatchCreateDestinationOptions. */
        class BatchCreateDestinationOptions implements IBatchCreateDestinationOptions {

            /**
             * Constructs a new BatchCreateDestinationOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IBatchCreateDestinationOptions);

            /** BatchCreateDestinationOptions name. */
            public name: string;

            /** BatchCreateDestinationOptions notes. */
            public notes: string;

            /** BatchCreateDestinationOptions _apiDestinationType. */
            public _apiDestinationType: string;

            /** BatchCreateDestinationOptions kafka. */
            public kafka?: (protos.opts.IWriteGroupKafkaOptions|null);

            /** BatchCreateDestinationOptions rabbit. */
            public rabbit?: (protos.opts.IWriteGroupRabbitOptions|null);

            /** BatchCreateDestinationOptions kubemqQueue. */
            public kubemqQueue?: (protos.opts.IWriteGroupKubeMQQueueOptions|null);

            /** BatchCreateDestinationOptions awssqs. */
            public awssqs?: (protos.opts.IWriteGroupAWSSQSOptions|null);

            /** BatchCreateDestinationOptions http. */
            public http?: (protos.opts.IHTTPDestination|null);

            /**
             * Creates a new BatchCreateDestinationOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BatchCreateDestinationOptions instance
             */
            public static create(properties?: protos.opts.IBatchCreateDestinationOptions): protos.opts.BatchCreateDestinationOptions;

            /**
             * Encodes the specified BatchCreateDestinationOptions message. Does not implicitly {@link protos.opts.BatchCreateDestinationOptions.verify|verify} messages.
             * @param message BatchCreateDestinationOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IBatchCreateDestinationOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BatchCreateDestinationOptions message, length delimited. Does not implicitly {@link protos.opts.BatchCreateDestinationOptions.verify|verify} messages.
             * @param message BatchCreateDestinationOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IBatchCreateDestinationOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BatchCreateDestinationOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BatchCreateDestinationOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.BatchCreateDestinationOptions;

            /**
             * Decodes a BatchCreateDestinationOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BatchCreateDestinationOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.BatchCreateDestinationOptions;

            /**
             * Verifies a BatchCreateDestinationOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BatchCreateDestinationOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BatchCreateDestinationOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.BatchCreateDestinationOptions;

            /**
             * Creates a plain object from a BatchCreateDestinationOptions message. Also converts values to other types if specified.
             * @param message BatchCreateDestinationOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.BatchCreateDestinationOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BatchCreateDestinationOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HTTPDestination. */
        interface IHTTPDestination {

            /** HTTPDestination url */
            url?: (string|null);

            /** HTTPDestination headers */
            headers?: ({ [k: string]: string }|null);
        }

        /** Represents a HTTPDestination. */
        class HTTPDestination implements IHTTPDestination {

            /**
             * Constructs a new HTTPDestination.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IHTTPDestination);

            /** HTTPDestination url. */
            public url: string;

            /** HTTPDestination headers. */
            public headers: { [k: string]: string };

            /**
             * Creates a new HTTPDestination instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HTTPDestination instance
             */
            public static create(properties?: protos.opts.IHTTPDestination): protos.opts.HTTPDestination;

            /**
             * Encodes the specified HTTPDestination message. Does not implicitly {@link protos.opts.HTTPDestination.verify|verify} messages.
             * @param message HTTPDestination message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IHTTPDestination, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HTTPDestination message, length delimited. Does not implicitly {@link protos.opts.HTTPDestination.verify|verify} messages.
             * @param message HTTPDestination message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IHTTPDestination, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HTTPDestination message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HTTPDestination
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.HTTPDestination;

            /**
             * Decodes a HTTPDestination message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HTTPDestination
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.HTTPDestination;

            /**
             * Verifies a HTTPDestination message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HTTPDestination message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HTTPDestination
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.HTTPDestination;

            /**
             * Creates a plain object from a HTTPDestination message. Also converts values to other types if specified.
             * @param message HTTPDestination
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.HTTPDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HTTPDestination to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
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

            /** WriteOptions awssqs */
            awssqs?: (protos.opts.IWriteGroupAWSSQSOptions|null);

            /** WriteOptions awssns */
            awssns?: (protos.opts.IWriteGroupAWSSNSOptions|null);

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

            /** WriteOptions awssqs. */
            public awssqs?: (protos.opts.IWriteGroupAWSSQSOptions|null);

            /** WriteOptions awssns. */
            public awssns?: (protos.opts.IWriteGroupAWSSNSOptions|null);

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

            /** CLIOptions relay */
            relay?: (protos.opts.IRelayOptions|null);

            /** CLIOptions dynamic */
            dynamic?: (protos.opts.IDynamicOptions|null);

            /** CLIOptions batch */
            batch?: (protos.opts.IBatchOptions|null);

            /** CLIOptions server */
            server?: (protos.opts.IServerOptions|null);
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

            /** CLIOptions relay. */
            public relay?: (protos.opts.IRelayOptions|null);

            /** CLIOptions dynamic. */
            public dynamic?: (protos.opts.IDynamicOptions|null);

            /** CLIOptions batch. */
            public batch?: (protos.opts.IBatchOptions|null);

            /** CLIOptions server. */
            public server?: (protos.opts.IServerOptions|null);

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

            /** ReadCLIOptions statsEnable */
            statsEnable?: (boolean|null);

            /** ReadCLIOptions statsReportIntervalSec */
            statsReportIntervalSec?: (number|null);

            /** ReadCLIOptions pretty */
            pretty?: (boolean|null);
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

            /** ReadCLIOptions statsEnable. */
            public statsEnable: boolean;

            /** ReadCLIOptions statsReportIntervalSec. */
            public statsReportIntervalSec: number;

            /** ReadCLIOptions pretty. */
            public pretty: boolean;

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

            /** ReadOptions awssqs */
            awssqs?: (protos.opts.IReadGroupAWSSQSOptions|null);

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

            /** ReadOptions awssqs. */
            public awssqs?: (protos.opts.IReadGroupAWSSQSOptions|null);

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

        /** Properties of a RelayCLIOptions. */
        interface IRelayCLIOptions {

            /** RelayCLIOptions httpListenAddress */
            httpListenAddress?: (string|null);
        }

        /** Represents a RelayCLIOptions. */
        class RelayCLIOptions implements IRelayCLIOptions {

            /**
             * Constructs a new RelayCLIOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IRelayCLIOptions);

            /** RelayCLIOptions httpListenAddress. */
            public httpListenAddress: string;

            /**
             * Creates a new RelayCLIOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RelayCLIOptions instance
             */
            public static create(properties?: protos.opts.IRelayCLIOptions): protos.opts.RelayCLIOptions;

            /**
             * Encodes the specified RelayCLIOptions message. Does not implicitly {@link protos.opts.RelayCLIOptions.verify|verify} messages.
             * @param message RelayCLIOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IRelayCLIOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RelayCLIOptions message, length delimited. Does not implicitly {@link protos.opts.RelayCLIOptions.verify|verify} messages.
             * @param message RelayCLIOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IRelayCLIOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RelayCLIOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RelayCLIOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.RelayCLIOptions;

            /**
             * Decodes a RelayCLIOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RelayCLIOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.RelayCLIOptions;

            /**
             * Verifies a RelayCLIOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RelayCLIOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RelayCLIOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.RelayCLIOptions;

            /**
             * Creates a plain object from a RelayCLIOptions message. Also converts values to other types if specified.
             * @param message RelayCLIOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.RelayCLIOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RelayCLIOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RelayOptions. */
        interface IRelayOptions {

            /** RelayOptions collectionToken */
            collectionToken?: (string|null);

            /** RelayOptions batchSize */
            batchSize?: (number|null);

            /** RelayOptions batchMaxRetry */
            batchMaxRetry?: (number|null);

            /** RelayOptions connectionId */
            connectionId?: (string|null);

            /** RelayOptions numWorkers */
            numWorkers?: (number|null);

            /** RelayOptions _batchshGrpcAddress */
            _batchshGrpcAddress?: (string|null);

            /** RelayOptions _batchshGrpcDisableTls */
            _batchshGrpcDisableTls?: (boolean|null);

            /** RelayOptions _batchshGrpcTimeoutSeconds */
            _batchshGrpcTimeoutSeconds?: (number|null);

            /** RelayOptions _relayId */
            _relayId?: (string|null);

            /** RelayOptions _cliOptions */
            _cliOptions?: (protos.opts.IRelayCLIOptions|null);

            /** RelayOptions kafka */
            kafka?: (protos.opts.IRelayGroupKafkaOptions|null);

            /** RelayOptions awssqs */
            awssqs?: (protos.opts.IRelayGroupAWSSQSOptions|null);

            /** RelayOptions mongo */
            mongo?: (protos.opts.IRelayGroupMongoOptions|null);

            /** RelayOptions nsq */
            nsq?: (protos.opts.IRelayGroupNSQOptions|null);

            /** RelayOptions rabbit */
            rabbit?: (protos.opts.IRelayGroupRabbitOptions|null);

            /** RelayOptions mqtt */
            mqtt?: (protos.opts.IRelayGroupMQTTOptions|null);

            /** RelayOptions azureServiceBus */
            azureServiceBus?: (protos.opts.IRelayGroupAzureServiceBusOptions|null);

            /** RelayOptions gcpPubsub */
            gcpPubsub?: (protos.opts.IRelayGroupGCPPubSubOptions|null);

            /** RelayOptions kubemqQueue */
            kubemqQueue?: (protos.opts.IRelayGroupKubeMQQueueOptions|null);

            /** RelayOptions redisPubsub */
            redisPubsub?: (protos.opts.IRelayGroupRedisPubSubOptions|null);

            /** RelayOptions redisStreams */
            redisStreams?: (protos.opts.IRelayGroupRedisStreamsOptions|null);

            /** RelayOptions postgres */
            postgres?: (protos.opts.IRelayGroupPostgresOptions|null);
        }

        /** Represents a RelayOptions. */
        class RelayOptions implements IRelayOptions {

            /**
             * Constructs a new RelayOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IRelayOptions);

            /** RelayOptions collectionToken. */
            public collectionToken: string;

            /** RelayOptions batchSize. */
            public batchSize: number;

            /** RelayOptions batchMaxRetry. */
            public batchMaxRetry: number;

            /** RelayOptions connectionId. */
            public connectionId: string;

            /** RelayOptions numWorkers. */
            public numWorkers: number;

            /** RelayOptions _batchshGrpcAddress. */
            public _batchshGrpcAddress: string;

            /** RelayOptions _batchshGrpcDisableTls. */
            public _batchshGrpcDisableTls: boolean;

            /** RelayOptions _batchshGrpcTimeoutSeconds. */
            public _batchshGrpcTimeoutSeconds: number;

            /** RelayOptions _relayId. */
            public _relayId: string;

            /** RelayOptions _cliOptions. */
            public _cliOptions?: (protos.opts.IRelayCLIOptions|null);

            /** RelayOptions kafka. */
            public kafka?: (protos.opts.IRelayGroupKafkaOptions|null);

            /** RelayOptions awssqs. */
            public awssqs?: (protos.opts.IRelayGroupAWSSQSOptions|null);

            /** RelayOptions mongo. */
            public mongo?: (protos.opts.IRelayGroupMongoOptions|null);

            /** RelayOptions nsq. */
            public nsq?: (protos.opts.IRelayGroupNSQOptions|null);

            /** RelayOptions rabbit. */
            public rabbit?: (protos.opts.IRelayGroupRabbitOptions|null);

            /** RelayOptions mqtt. */
            public mqtt?: (protos.opts.IRelayGroupMQTTOptions|null);

            /** RelayOptions azureServiceBus. */
            public azureServiceBus?: (protos.opts.IRelayGroupAzureServiceBusOptions|null);

            /** RelayOptions gcpPubsub. */
            public gcpPubsub?: (protos.opts.IRelayGroupGCPPubSubOptions|null);

            /** RelayOptions kubemqQueue. */
            public kubemqQueue?: (protos.opts.IRelayGroupKubeMQQueueOptions|null);

            /** RelayOptions redisPubsub. */
            public redisPubsub?: (protos.opts.IRelayGroupRedisPubSubOptions|null);

            /** RelayOptions redisStreams. */
            public redisStreams?: (protos.opts.IRelayGroupRedisStreamsOptions|null);

            /** RelayOptions postgres. */
            public postgres?: (protos.opts.IRelayGroupPostgresOptions|null);

            /**
             * Creates a new RelayOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RelayOptions instance
             */
            public static create(properties?: protos.opts.IRelayOptions): protos.opts.RelayOptions;

            /**
             * Encodes the specified RelayOptions message. Does not implicitly {@link protos.opts.RelayOptions.verify|verify} messages.
             * @param message RelayOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IRelayOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RelayOptions message, length delimited. Does not implicitly {@link protos.opts.RelayOptions.verify|verify} messages.
             * @param message RelayOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IRelayOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RelayOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RelayOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.RelayOptions;

            /**
             * Decodes a RelayOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RelayOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.RelayOptions;

            /**
             * Verifies a RelayOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RelayOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RelayOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.RelayOptions;

            /**
             * Creates a plain object from a RelayOptions message. Also converts values to other types if specified.
             * @param message RelayOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.RelayOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RelayOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RelayGroupKafkaOptions. */
        interface IRelayGroupKafkaOptions {

            /** RelayGroupKafkaOptions _conn */
            _conn?: (protos.args.IKafkaConn|null);

            /** RelayGroupKafkaOptions args */
            args?: (protos.args.IKafkaRelayArgs|null);
        }

        /** Represents a RelayGroupKafkaOptions. */
        class RelayGroupKafkaOptions implements IRelayGroupKafkaOptions {

            /**
             * Constructs a new RelayGroupKafkaOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IRelayGroupKafkaOptions);

            /** RelayGroupKafkaOptions _conn. */
            public _conn?: (protos.args.IKafkaConn|null);

            /** RelayGroupKafkaOptions args. */
            public args?: (protos.args.IKafkaRelayArgs|null);

            /**
             * Creates a new RelayGroupKafkaOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RelayGroupKafkaOptions instance
             */
            public static create(properties?: protos.opts.IRelayGroupKafkaOptions): protos.opts.RelayGroupKafkaOptions;

            /**
             * Encodes the specified RelayGroupKafkaOptions message. Does not implicitly {@link protos.opts.RelayGroupKafkaOptions.verify|verify} messages.
             * @param message RelayGroupKafkaOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IRelayGroupKafkaOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RelayGroupKafkaOptions message, length delimited. Does not implicitly {@link protos.opts.RelayGroupKafkaOptions.verify|verify} messages.
             * @param message RelayGroupKafkaOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IRelayGroupKafkaOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RelayGroupKafkaOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RelayGroupKafkaOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.RelayGroupKafkaOptions;

            /**
             * Decodes a RelayGroupKafkaOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RelayGroupKafkaOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.RelayGroupKafkaOptions;

            /**
             * Verifies a RelayGroupKafkaOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RelayGroupKafkaOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RelayGroupKafkaOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.RelayGroupKafkaOptions;

            /**
             * Creates a plain object from a RelayGroupKafkaOptions message. Also converts values to other types if specified.
             * @param message RelayGroupKafkaOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.RelayGroupKafkaOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RelayGroupKafkaOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RelayGroupAWSSQSOptions. */
        interface IRelayGroupAWSSQSOptions {

            /** RelayGroupAWSSQSOptions _conn */
            _conn?: (protos.args.IAWSSQSConn|null);

            /** RelayGroupAWSSQSOptions args */
            args?: (protos.args.IAWSSQSRelayArgs|null);
        }

        /** Represents a RelayGroupAWSSQSOptions. */
        class RelayGroupAWSSQSOptions implements IRelayGroupAWSSQSOptions {

            /**
             * Constructs a new RelayGroupAWSSQSOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IRelayGroupAWSSQSOptions);

            /** RelayGroupAWSSQSOptions _conn. */
            public _conn?: (protos.args.IAWSSQSConn|null);

            /** RelayGroupAWSSQSOptions args. */
            public args?: (protos.args.IAWSSQSRelayArgs|null);

            /**
             * Creates a new RelayGroupAWSSQSOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RelayGroupAWSSQSOptions instance
             */
            public static create(properties?: protos.opts.IRelayGroupAWSSQSOptions): protos.opts.RelayGroupAWSSQSOptions;

            /**
             * Encodes the specified RelayGroupAWSSQSOptions message. Does not implicitly {@link protos.opts.RelayGroupAWSSQSOptions.verify|verify} messages.
             * @param message RelayGroupAWSSQSOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IRelayGroupAWSSQSOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RelayGroupAWSSQSOptions message, length delimited. Does not implicitly {@link protos.opts.RelayGroupAWSSQSOptions.verify|verify} messages.
             * @param message RelayGroupAWSSQSOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IRelayGroupAWSSQSOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RelayGroupAWSSQSOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RelayGroupAWSSQSOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.RelayGroupAWSSQSOptions;

            /**
             * Decodes a RelayGroupAWSSQSOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RelayGroupAWSSQSOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.RelayGroupAWSSQSOptions;

            /**
             * Verifies a RelayGroupAWSSQSOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RelayGroupAWSSQSOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RelayGroupAWSSQSOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.RelayGroupAWSSQSOptions;

            /**
             * Creates a plain object from a RelayGroupAWSSQSOptions message. Also converts values to other types if specified.
             * @param message RelayGroupAWSSQSOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.RelayGroupAWSSQSOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RelayGroupAWSSQSOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RelayGroupMongoOptions. */
        interface IRelayGroupMongoOptions {

            /** RelayGroupMongoOptions _conn */
            _conn?: (protos.args.IMongoConn|null);

            /** RelayGroupMongoOptions args */
            args?: (protos.args.IMongoReadArgs|null);
        }

        /** Represents a RelayGroupMongoOptions. */
        class RelayGroupMongoOptions implements IRelayGroupMongoOptions {

            /**
             * Constructs a new RelayGroupMongoOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IRelayGroupMongoOptions);

            /** RelayGroupMongoOptions _conn. */
            public _conn?: (protos.args.IMongoConn|null);

            /** RelayGroupMongoOptions args. */
            public args?: (protos.args.IMongoReadArgs|null);

            /**
             * Creates a new RelayGroupMongoOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RelayGroupMongoOptions instance
             */
            public static create(properties?: protos.opts.IRelayGroupMongoOptions): protos.opts.RelayGroupMongoOptions;

            /**
             * Encodes the specified RelayGroupMongoOptions message. Does not implicitly {@link protos.opts.RelayGroupMongoOptions.verify|verify} messages.
             * @param message RelayGroupMongoOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IRelayGroupMongoOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RelayGroupMongoOptions message, length delimited. Does not implicitly {@link protos.opts.RelayGroupMongoOptions.verify|verify} messages.
             * @param message RelayGroupMongoOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IRelayGroupMongoOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RelayGroupMongoOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RelayGroupMongoOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.RelayGroupMongoOptions;

            /**
             * Decodes a RelayGroupMongoOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RelayGroupMongoOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.RelayGroupMongoOptions;

            /**
             * Verifies a RelayGroupMongoOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RelayGroupMongoOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RelayGroupMongoOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.RelayGroupMongoOptions;

            /**
             * Creates a plain object from a RelayGroupMongoOptions message. Also converts values to other types if specified.
             * @param message RelayGroupMongoOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.RelayGroupMongoOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RelayGroupMongoOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RelayGroupNSQOptions. */
        interface IRelayGroupNSQOptions {

            /** RelayGroupNSQOptions _conn */
            _conn?: (protos.args.INSQConn|null);

            /** RelayGroupNSQOptions args */
            args?: (protos.args.INSQReadArgs|null);
        }

        /** Represents a RelayGroupNSQOptions. */
        class RelayGroupNSQOptions implements IRelayGroupNSQOptions {

            /**
             * Constructs a new RelayGroupNSQOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IRelayGroupNSQOptions);

            /** RelayGroupNSQOptions _conn. */
            public _conn?: (protos.args.INSQConn|null);

            /** RelayGroupNSQOptions args. */
            public args?: (protos.args.INSQReadArgs|null);

            /**
             * Creates a new RelayGroupNSQOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RelayGroupNSQOptions instance
             */
            public static create(properties?: protos.opts.IRelayGroupNSQOptions): protos.opts.RelayGroupNSQOptions;

            /**
             * Encodes the specified RelayGroupNSQOptions message. Does not implicitly {@link protos.opts.RelayGroupNSQOptions.verify|verify} messages.
             * @param message RelayGroupNSQOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IRelayGroupNSQOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RelayGroupNSQOptions message, length delimited. Does not implicitly {@link protos.opts.RelayGroupNSQOptions.verify|verify} messages.
             * @param message RelayGroupNSQOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IRelayGroupNSQOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RelayGroupNSQOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RelayGroupNSQOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.RelayGroupNSQOptions;

            /**
             * Decodes a RelayGroupNSQOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RelayGroupNSQOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.RelayGroupNSQOptions;

            /**
             * Verifies a RelayGroupNSQOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RelayGroupNSQOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RelayGroupNSQOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.RelayGroupNSQOptions;

            /**
             * Creates a plain object from a RelayGroupNSQOptions message. Also converts values to other types if specified.
             * @param message RelayGroupNSQOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.RelayGroupNSQOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RelayGroupNSQOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RelayGroupPostgresOptions. */
        interface IRelayGroupPostgresOptions {

            /** RelayGroupPostgresOptions _conn */
            _conn?: (protos.args.IPostgresConn|null);

            /** RelayGroupPostgresOptions args */
            args?: (protos.args.IPostgresReadArgs|null);
        }

        /** Represents a RelayGroupPostgresOptions. */
        class RelayGroupPostgresOptions implements IRelayGroupPostgresOptions {

            /**
             * Constructs a new RelayGroupPostgresOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IRelayGroupPostgresOptions);

            /** RelayGroupPostgresOptions _conn. */
            public _conn?: (protos.args.IPostgresConn|null);

            /** RelayGroupPostgresOptions args. */
            public args?: (protos.args.IPostgresReadArgs|null);

            /**
             * Creates a new RelayGroupPostgresOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RelayGroupPostgresOptions instance
             */
            public static create(properties?: protos.opts.IRelayGroupPostgresOptions): protos.opts.RelayGroupPostgresOptions;

            /**
             * Encodes the specified RelayGroupPostgresOptions message. Does not implicitly {@link protos.opts.RelayGroupPostgresOptions.verify|verify} messages.
             * @param message RelayGroupPostgresOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IRelayGroupPostgresOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RelayGroupPostgresOptions message, length delimited. Does not implicitly {@link protos.opts.RelayGroupPostgresOptions.verify|verify} messages.
             * @param message RelayGroupPostgresOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IRelayGroupPostgresOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RelayGroupPostgresOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RelayGroupPostgresOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.RelayGroupPostgresOptions;

            /**
             * Decodes a RelayGroupPostgresOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RelayGroupPostgresOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.RelayGroupPostgresOptions;

            /**
             * Verifies a RelayGroupPostgresOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RelayGroupPostgresOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RelayGroupPostgresOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.RelayGroupPostgresOptions;

            /**
             * Creates a plain object from a RelayGroupPostgresOptions message. Also converts values to other types if specified.
             * @param message RelayGroupPostgresOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.RelayGroupPostgresOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RelayGroupPostgresOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RelayGroupRabbitOptions. */
        interface IRelayGroupRabbitOptions {

            /** RelayGroupRabbitOptions _conn */
            _conn?: (protos.args.IRabbitConn|null);

            /** RelayGroupRabbitOptions args */
            args?: (protos.args.IRabbitReadArgs|null);
        }

        /** Represents a RelayGroupRabbitOptions. */
        class RelayGroupRabbitOptions implements IRelayGroupRabbitOptions {

            /**
             * Constructs a new RelayGroupRabbitOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IRelayGroupRabbitOptions);

            /** RelayGroupRabbitOptions _conn. */
            public _conn?: (protos.args.IRabbitConn|null);

            /** RelayGroupRabbitOptions args. */
            public args?: (protos.args.IRabbitReadArgs|null);

            /**
             * Creates a new RelayGroupRabbitOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RelayGroupRabbitOptions instance
             */
            public static create(properties?: protos.opts.IRelayGroupRabbitOptions): protos.opts.RelayGroupRabbitOptions;

            /**
             * Encodes the specified RelayGroupRabbitOptions message. Does not implicitly {@link protos.opts.RelayGroupRabbitOptions.verify|verify} messages.
             * @param message RelayGroupRabbitOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IRelayGroupRabbitOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RelayGroupRabbitOptions message, length delimited. Does not implicitly {@link protos.opts.RelayGroupRabbitOptions.verify|verify} messages.
             * @param message RelayGroupRabbitOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IRelayGroupRabbitOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RelayGroupRabbitOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RelayGroupRabbitOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.RelayGroupRabbitOptions;

            /**
             * Decodes a RelayGroupRabbitOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RelayGroupRabbitOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.RelayGroupRabbitOptions;

            /**
             * Verifies a RelayGroupRabbitOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RelayGroupRabbitOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RelayGroupRabbitOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.RelayGroupRabbitOptions;

            /**
             * Creates a plain object from a RelayGroupRabbitOptions message. Also converts values to other types if specified.
             * @param message RelayGroupRabbitOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.RelayGroupRabbitOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RelayGroupRabbitOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RelayGroupRedisPubSubOptions. */
        interface IRelayGroupRedisPubSubOptions {

            /** RelayGroupRedisPubSubOptions _conn */
            _conn?: (protos.args.IRedisPubSubConn|null);

            /** RelayGroupRedisPubSubOptions args */
            args?: (protos.args.IRedisPubSubReadArgs|null);
        }

        /** Represents a RelayGroupRedisPubSubOptions. */
        class RelayGroupRedisPubSubOptions implements IRelayGroupRedisPubSubOptions {

            /**
             * Constructs a new RelayGroupRedisPubSubOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IRelayGroupRedisPubSubOptions);

            /** RelayGroupRedisPubSubOptions _conn. */
            public _conn?: (protos.args.IRedisPubSubConn|null);

            /** RelayGroupRedisPubSubOptions args. */
            public args?: (protos.args.IRedisPubSubReadArgs|null);

            /**
             * Creates a new RelayGroupRedisPubSubOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RelayGroupRedisPubSubOptions instance
             */
            public static create(properties?: protos.opts.IRelayGroupRedisPubSubOptions): protos.opts.RelayGroupRedisPubSubOptions;

            /**
             * Encodes the specified RelayGroupRedisPubSubOptions message. Does not implicitly {@link protos.opts.RelayGroupRedisPubSubOptions.verify|verify} messages.
             * @param message RelayGroupRedisPubSubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IRelayGroupRedisPubSubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RelayGroupRedisPubSubOptions message, length delimited. Does not implicitly {@link protos.opts.RelayGroupRedisPubSubOptions.verify|verify} messages.
             * @param message RelayGroupRedisPubSubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IRelayGroupRedisPubSubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RelayGroupRedisPubSubOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RelayGroupRedisPubSubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.RelayGroupRedisPubSubOptions;

            /**
             * Decodes a RelayGroupRedisPubSubOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RelayGroupRedisPubSubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.RelayGroupRedisPubSubOptions;

            /**
             * Verifies a RelayGroupRedisPubSubOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RelayGroupRedisPubSubOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RelayGroupRedisPubSubOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.RelayGroupRedisPubSubOptions;

            /**
             * Creates a plain object from a RelayGroupRedisPubSubOptions message. Also converts values to other types if specified.
             * @param message RelayGroupRedisPubSubOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.RelayGroupRedisPubSubOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RelayGroupRedisPubSubOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RelayGroupRedisStreamsOptions. */
        interface IRelayGroupRedisStreamsOptions {

            /** RelayGroupRedisStreamsOptions _conn */
            _conn?: (protos.args.IRedisStreamsConn|null);

            /** RelayGroupRedisStreamsOptions args */
            args?: (protos.args.IRedisStreamsReadArgs|null);
        }

        /** Represents a RelayGroupRedisStreamsOptions. */
        class RelayGroupRedisStreamsOptions implements IRelayGroupRedisStreamsOptions {

            /**
             * Constructs a new RelayGroupRedisStreamsOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IRelayGroupRedisStreamsOptions);

            /** RelayGroupRedisStreamsOptions _conn. */
            public _conn?: (protos.args.IRedisStreamsConn|null);

            /** RelayGroupRedisStreamsOptions args. */
            public args?: (protos.args.IRedisStreamsReadArgs|null);

            /**
             * Creates a new RelayGroupRedisStreamsOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RelayGroupRedisStreamsOptions instance
             */
            public static create(properties?: protos.opts.IRelayGroupRedisStreamsOptions): protos.opts.RelayGroupRedisStreamsOptions;

            /**
             * Encodes the specified RelayGroupRedisStreamsOptions message. Does not implicitly {@link protos.opts.RelayGroupRedisStreamsOptions.verify|verify} messages.
             * @param message RelayGroupRedisStreamsOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IRelayGroupRedisStreamsOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RelayGroupRedisStreamsOptions message, length delimited. Does not implicitly {@link protos.opts.RelayGroupRedisStreamsOptions.verify|verify} messages.
             * @param message RelayGroupRedisStreamsOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IRelayGroupRedisStreamsOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RelayGroupRedisStreamsOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RelayGroupRedisStreamsOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.RelayGroupRedisStreamsOptions;

            /**
             * Decodes a RelayGroupRedisStreamsOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RelayGroupRedisStreamsOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.RelayGroupRedisStreamsOptions;

            /**
             * Verifies a RelayGroupRedisStreamsOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RelayGroupRedisStreamsOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RelayGroupRedisStreamsOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.RelayGroupRedisStreamsOptions;

            /**
             * Creates a plain object from a RelayGroupRedisStreamsOptions message. Also converts values to other types if specified.
             * @param message RelayGroupRedisStreamsOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.RelayGroupRedisStreamsOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RelayGroupRedisStreamsOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RelayGroupAzureServiceBusOptions. */
        interface IRelayGroupAzureServiceBusOptions {

            /** RelayGroupAzureServiceBusOptions _conn */
            _conn?: (protos.args.IAzureServiceBusConn|null);

            /** RelayGroupAzureServiceBusOptions args */
            args?: (protos.args.IAzureServiceBusReadArgs|null);
        }

        /** Represents a RelayGroupAzureServiceBusOptions. */
        class RelayGroupAzureServiceBusOptions implements IRelayGroupAzureServiceBusOptions {

            /**
             * Constructs a new RelayGroupAzureServiceBusOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IRelayGroupAzureServiceBusOptions);

            /** RelayGroupAzureServiceBusOptions _conn. */
            public _conn?: (protos.args.IAzureServiceBusConn|null);

            /** RelayGroupAzureServiceBusOptions args. */
            public args?: (protos.args.IAzureServiceBusReadArgs|null);

            /**
             * Creates a new RelayGroupAzureServiceBusOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RelayGroupAzureServiceBusOptions instance
             */
            public static create(properties?: protos.opts.IRelayGroupAzureServiceBusOptions): protos.opts.RelayGroupAzureServiceBusOptions;

            /**
             * Encodes the specified RelayGroupAzureServiceBusOptions message. Does not implicitly {@link protos.opts.RelayGroupAzureServiceBusOptions.verify|verify} messages.
             * @param message RelayGroupAzureServiceBusOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IRelayGroupAzureServiceBusOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RelayGroupAzureServiceBusOptions message, length delimited. Does not implicitly {@link protos.opts.RelayGroupAzureServiceBusOptions.verify|verify} messages.
             * @param message RelayGroupAzureServiceBusOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IRelayGroupAzureServiceBusOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RelayGroupAzureServiceBusOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RelayGroupAzureServiceBusOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.RelayGroupAzureServiceBusOptions;

            /**
             * Decodes a RelayGroupAzureServiceBusOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RelayGroupAzureServiceBusOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.RelayGroupAzureServiceBusOptions;

            /**
             * Verifies a RelayGroupAzureServiceBusOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RelayGroupAzureServiceBusOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RelayGroupAzureServiceBusOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.RelayGroupAzureServiceBusOptions;

            /**
             * Creates a plain object from a RelayGroupAzureServiceBusOptions message. Also converts values to other types if specified.
             * @param message RelayGroupAzureServiceBusOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.RelayGroupAzureServiceBusOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RelayGroupAzureServiceBusOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RelayGroupMQTTOptions. */
        interface IRelayGroupMQTTOptions {

            /** RelayGroupMQTTOptions _conn */
            _conn?: (protos.args.IMQTTConn|null);

            /** RelayGroupMQTTOptions args */
            args?: (protos.args.IMQTTReadArgs|null);
        }

        /** Represents a RelayGroupMQTTOptions. */
        class RelayGroupMQTTOptions implements IRelayGroupMQTTOptions {

            /**
             * Constructs a new RelayGroupMQTTOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IRelayGroupMQTTOptions);

            /** RelayGroupMQTTOptions _conn. */
            public _conn?: (protos.args.IMQTTConn|null);

            /** RelayGroupMQTTOptions args. */
            public args?: (protos.args.IMQTTReadArgs|null);

            /**
             * Creates a new RelayGroupMQTTOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RelayGroupMQTTOptions instance
             */
            public static create(properties?: protos.opts.IRelayGroupMQTTOptions): protos.opts.RelayGroupMQTTOptions;

            /**
             * Encodes the specified RelayGroupMQTTOptions message. Does not implicitly {@link protos.opts.RelayGroupMQTTOptions.verify|verify} messages.
             * @param message RelayGroupMQTTOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IRelayGroupMQTTOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RelayGroupMQTTOptions message, length delimited. Does not implicitly {@link protos.opts.RelayGroupMQTTOptions.verify|verify} messages.
             * @param message RelayGroupMQTTOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IRelayGroupMQTTOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RelayGroupMQTTOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RelayGroupMQTTOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.RelayGroupMQTTOptions;

            /**
             * Decodes a RelayGroupMQTTOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RelayGroupMQTTOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.RelayGroupMQTTOptions;

            /**
             * Verifies a RelayGroupMQTTOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RelayGroupMQTTOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RelayGroupMQTTOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.RelayGroupMQTTOptions;

            /**
             * Creates a plain object from a RelayGroupMQTTOptions message. Also converts values to other types if specified.
             * @param message RelayGroupMQTTOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.RelayGroupMQTTOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RelayGroupMQTTOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RelayGroupGCPPubSubOptions. */
        interface IRelayGroupGCPPubSubOptions {

            /** RelayGroupGCPPubSubOptions _conn */
            _conn?: (protos.args.IGCPPubSubConn|null);

            /** RelayGroupGCPPubSubOptions args */
            args?: (protos.args.IGCPPubSubReadArgs|null);
        }

        /** Represents a RelayGroupGCPPubSubOptions. */
        class RelayGroupGCPPubSubOptions implements IRelayGroupGCPPubSubOptions {

            /**
             * Constructs a new RelayGroupGCPPubSubOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IRelayGroupGCPPubSubOptions);

            /** RelayGroupGCPPubSubOptions _conn. */
            public _conn?: (protos.args.IGCPPubSubConn|null);

            /** RelayGroupGCPPubSubOptions args. */
            public args?: (protos.args.IGCPPubSubReadArgs|null);

            /**
             * Creates a new RelayGroupGCPPubSubOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RelayGroupGCPPubSubOptions instance
             */
            public static create(properties?: protos.opts.IRelayGroupGCPPubSubOptions): protos.opts.RelayGroupGCPPubSubOptions;

            /**
             * Encodes the specified RelayGroupGCPPubSubOptions message. Does not implicitly {@link protos.opts.RelayGroupGCPPubSubOptions.verify|verify} messages.
             * @param message RelayGroupGCPPubSubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IRelayGroupGCPPubSubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RelayGroupGCPPubSubOptions message, length delimited. Does not implicitly {@link protos.opts.RelayGroupGCPPubSubOptions.verify|verify} messages.
             * @param message RelayGroupGCPPubSubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IRelayGroupGCPPubSubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RelayGroupGCPPubSubOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RelayGroupGCPPubSubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.RelayGroupGCPPubSubOptions;

            /**
             * Decodes a RelayGroupGCPPubSubOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RelayGroupGCPPubSubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.RelayGroupGCPPubSubOptions;

            /**
             * Verifies a RelayGroupGCPPubSubOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RelayGroupGCPPubSubOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RelayGroupGCPPubSubOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.RelayGroupGCPPubSubOptions;

            /**
             * Creates a plain object from a RelayGroupGCPPubSubOptions message. Also converts values to other types if specified.
             * @param message RelayGroupGCPPubSubOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.RelayGroupGCPPubSubOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RelayGroupGCPPubSubOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RelayGroupKubeMQQueueOptions. */
        interface IRelayGroupKubeMQQueueOptions {

            /** RelayGroupKubeMQQueueOptions _conn */
            _conn?: (protos.args.IKubeMQQueueConn|null);

            /** RelayGroupKubeMQQueueOptions args */
            args?: (protos.args.IKubeMQQueueReadArgs|null);
        }

        /** Represents a RelayGroupKubeMQQueueOptions. */
        class RelayGroupKubeMQQueueOptions implements IRelayGroupKubeMQQueueOptions {

            /**
             * Constructs a new RelayGroupKubeMQQueueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IRelayGroupKubeMQQueueOptions);

            /** RelayGroupKubeMQQueueOptions _conn. */
            public _conn?: (protos.args.IKubeMQQueueConn|null);

            /** RelayGroupKubeMQQueueOptions args. */
            public args?: (protos.args.IKubeMQQueueReadArgs|null);

            /**
             * Creates a new RelayGroupKubeMQQueueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RelayGroupKubeMQQueueOptions instance
             */
            public static create(properties?: protos.opts.IRelayGroupKubeMQQueueOptions): protos.opts.RelayGroupKubeMQQueueOptions;

            /**
             * Encodes the specified RelayGroupKubeMQQueueOptions message. Does not implicitly {@link protos.opts.RelayGroupKubeMQQueueOptions.verify|verify} messages.
             * @param message RelayGroupKubeMQQueueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IRelayGroupKubeMQQueueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RelayGroupKubeMQQueueOptions message, length delimited. Does not implicitly {@link protos.opts.RelayGroupKubeMQQueueOptions.verify|verify} messages.
             * @param message RelayGroupKubeMQQueueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IRelayGroupKubeMQQueueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RelayGroupKubeMQQueueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RelayGroupKubeMQQueueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.RelayGroupKubeMQQueueOptions;

            /**
             * Decodes a RelayGroupKubeMQQueueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RelayGroupKubeMQQueueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.RelayGroupKubeMQQueueOptions;

            /**
             * Verifies a RelayGroupKubeMQQueueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RelayGroupKubeMQQueueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RelayGroupKubeMQQueueOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.RelayGroupKubeMQQueueOptions;

            /**
             * Creates a plain object from a RelayGroupKubeMQQueueOptions message. Also converts values to other types if specified.
             * @param message RelayGroupKubeMQQueueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.RelayGroupKubeMQQueueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RelayGroupKubeMQQueueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServerOptions. */
        interface IServerOptions {

            /** ServerOptions nodeId */
            nodeId?: (string|null);

            /** ServerOptions clusterId */
            clusterId?: (string|null);

            /** ServerOptions grpcListenAddress */
            grpcListenAddress?: (string|null);

            /** ServerOptions authToken */
            authToken?: (string|null);

            /** ServerOptions initialCluster */
            initialCluster?: (string|null);

            /** ServerOptions advertisePeerUrl */
            advertisePeerUrl?: (string|null);

            /** ServerOptions advertiseClientUrl */
            advertiseClientUrl?: (string|null);

            /** ServerOptions listenerPeerUrl */
            listenerPeerUrl?: (string|null);

            /** ServerOptions listenerClientUrl */
            listenerClientUrl?: (string|null);

            /** ServerOptions peerToken */
            peerToken?: (string|null);

            /** ServerOptions vcserviceGrpcAddress */
            vcserviceGrpcAddress?: (string|null);

            /** ServerOptions vcserviceGrpcTimeoutSeconds */
            vcserviceGrpcTimeoutSeconds?: (number|null);

            /** ServerOptions vcserviceGrpcInsecure */
            vcserviceGrpcInsecure?: (boolean|null);
        }

        /** Represents a ServerOptions. */
        class ServerOptions implements IServerOptions {

            /**
             * Constructs a new ServerOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IServerOptions);

            /** ServerOptions nodeId. */
            public nodeId: string;

            /** ServerOptions clusterId. */
            public clusterId: string;

            /** ServerOptions grpcListenAddress. */
            public grpcListenAddress: string;

            /** ServerOptions authToken. */
            public authToken: string;

            /** ServerOptions initialCluster. */
            public initialCluster: string;

            /** ServerOptions advertisePeerUrl. */
            public advertisePeerUrl: string;

            /** ServerOptions advertiseClientUrl. */
            public advertiseClientUrl: string;

            /** ServerOptions listenerPeerUrl. */
            public listenerPeerUrl: string;

            /** ServerOptions listenerClientUrl. */
            public listenerClientUrl: string;

            /** ServerOptions peerToken. */
            public peerToken: string;

            /** ServerOptions vcserviceGrpcAddress. */
            public vcserviceGrpcAddress: string;

            /** ServerOptions vcserviceGrpcTimeoutSeconds. */
            public vcserviceGrpcTimeoutSeconds: number;

            /** ServerOptions vcserviceGrpcInsecure. */
            public vcserviceGrpcInsecure: boolean;

            /**
             * Creates a new ServerOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServerOptions instance
             */
            public static create(properties?: protos.opts.IServerOptions): protos.opts.ServerOptions;

            /**
             * Encodes the specified ServerOptions message. Does not implicitly {@link protos.opts.ServerOptions.verify|verify} messages.
             * @param message ServerOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IServerOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServerOptions message, length delimited. Does not implicitly {@link protos.opts.ServerOptions.verify|verify} messages.
             * @param message ServerOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IServerOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServerOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServerOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.ServerOptions;

            /**
             * Decodes a ServerOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServerOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.ServerOptions;

            /**
             * Verifies a ServerOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServerOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServerOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.ServerOptions;

            /**
             * Creates a plain object from a ServerOptions message. Also converts values to other types if specified.
             * @param message ServerOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.ServerOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServerOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DynamicOptions. */
        interface IDynamicOptions {

            /** DynamicOptions apiToken */
            apiToken?: (string|null);

            /** DynamicOptions _grpcAddress */
            _grpcAddress?: (string|null);

            /** DynamicOptions _grpcTimeoutSeconds */
            _grpcTimeoutSeconds?: (number|null);

            /** DynamicOptions _grpcInsecure */
            _grpcInsecure?: (boolean|null);

            /** DynamicOptions kafka */
            kafka?: (protos.opts.IDynamicGroupKafkaOptions|null);

            /** DynamicOptions activemq */
            activemq?: (protos.opts.IDynamicGroupActiveMQOptions|null);

            /** DynamicOptions awssqs */
            awssqs?: (protos.opts.IDynamicGroupAWSSQSOptions|null);

            /** DynamicOptions awssns */
            awssns?: (protos.opts.IDynamicGroupAWSSNSOptions|null);

            /** DynamicOptions nats */
            nats?: (protos.opts.IDynamicGroupNatsOptions|null);

            /** DynamicOptions natsStreaming */
            natsStreaming?: (protos.opts.IDynamicGroupNatsStreamingOptions|null);

            /** DynamicOptions nsq */
            nsq?: (protos.opts.IDynamicGroupNSQOptions|null);

            /** DynamicOptions rabbit */
            rabbit?: (protos.opts.IDynamicGroupRabbitOptions|null);

            /** DynamicOptions mqtt */
            mqtt?: (protos.opts.IDynamicGroupMQTTOptions|null);

            /** DynamicOptions azureServiceBus */
            azureServiceBus?: (protos.opts.IDynamicGroupAzureServiceBusOptions|null);

            /** DynamicOptions azureEventHub */
            azureEventHub?: (protos.opts.IDynamicGroupAzureEventHubOptions|null);

            /** DynamicOptions gcpPubsub */
            gcpPubsub?: (protos.opts.IDynamicGroupGCPPubSubOptions|null);

            /** DynamicOptions kubemqQueue */
            kubemqQueue?: (protos.opts.IDynamicGroupKubeMQQueueOptions|null);

            /** DynamicOptions redisPubsub */
            redisPubsub?: (protos.opts.IDynamicGroupRedisPubSubOptions|null);

            /** DynamicOptions redisStreams */
            redisStreams?: (protos.opts.IDynamicGroupRedisStreamsOptions|null);
        }

        /** Represents a DynamicOptions. */
        class DynamicOptions implements IDynamicOptions {

            /**
             * Constructs a new DynamicOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IDynamicOptions);

            /** DynamicOptions apiToken. */
            public apiToken: string;

            /** DynamicOptions _grpcAddress. */
            public _grpcAddress: string;

            /** DynamicOptions _grpcTimeoutSeconds. */
            public _grpcTimeoutSeconds: number;

            /** DynamicOptions _grpcInsecure. */
            public _grpcInsecure: boolean;

            /** DynamicOptions kafka. */
            public kafka?: (protos.opts.IDynamicGroupKafkaOptions|null);

            /** DynamicOptions activemq. */
            public activemq?: (protos.opts.IDynamicGroupActiveMQOptions|null);

            /** DynamicOptions awssqs. */
            public awssqs?: (protos.opts.IDynamicGroupAWSSQSOptions|null);

            /** DynamicOptions awssns. */
            public awssns?: (protos.opts.IDynamicGroupAWSSNSOptions|null);

            /** DynamicOptions nats. */
            public nats?: (protos.opts.IDynamicGroupNatsOptions|null);

            /** DynamicOptions natsStreaming. */
            public natsStreaming?: (protos.opts.IDynamicGroupNatsStreamingOptions|null);

            /** DynamicOptions nsq. */
            public nsq?: (protos.opts.IDynamicGroupNSQOptions|null);

            /** DynamicOptions rabbit. */
            public rabbit?: (protos.opts.IDynamicGroupRabbitOptions|null);

            /** DynamicOptions mqtt. */
            public mqtt?: (protos.opts.IDynamicGroupMQTTOptions|null);

            /** DynamicOptions azureServiceBus. */
            public azureServiceBus?: (protos.opts.IDynamicGroupAzureServiceBusOptions|null);

            /** DynamicOptions azureEventHub. */
            public azureEventHub?: (protos.opts.IDynamicGroupAzureEventHubOptions|null);

            /** DynamicOptions gcpPubsub. */
            public gcpPubsub?: (protos.opts.IDynamicGroupGCPPubSubOptions|null);

            /** DynamicOptions kubemqQueue. */
            public kubemqQueue?: (protos.opts.IDynamicGroupKubeMQQueueOptions|null);

            /** DynamicOptions redisPubsub. */
            public redisPubsub?: (protos.opts.IDynamicGroupRedisPubSubOptions|null);

            /** DynamicOptions redisStreams. */
            public redisStreams?: (protos.opts.IDynamicGroupRedisStreamsOptions|null);

            /**
             * Creates a new DynamicOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DynamicOptions instance
             */
            public static create(properties?: protos.opts.IDynamicOptions): protos.opts.DynamicOptions;

            /**
             * Encodes the specified DynamicOptions message. Does not implicitly {@link protos.opts.DynamicOptions.verify|verify} messages.
             * @param message DynamicOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IDynamicOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DynamicOptions message, length delimited. Does not implicitly {@link protos.opts.DynamicOptions.verify|verify} messages.
             * @param message DynamicOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IDynamicOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DynamicOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DynamicOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.DynamicOptions;

            /**
             * Decodes a DynamicOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DynamicOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.DynamicOptions;

            /**
             * Verifies a DynamicOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DynamicOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DynamicOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.DynamicOptions;

            /**
             * Creates a plain object from a DynamicOptions message. Also converts values to other types if specified.
             * @param message DynamicOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.DynamicOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DynamicOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DynamicGroupKafkaOptions. */
        interface IDynamicGroupKafkaOptions {

            /** DynamicGroupKafkaOptions _conn */
            _conn?: (protos.args.IKafkaConn|null);

            /** DynamicGroupKafkaOptions args */
            args?: (protos.args.IKafkaWriteArgs|null);
        }

        /** Represents a DynamicGroupKafkaOptions. */
        class DynamicGroupKafkaOptions implements IDynamicGroupKafkaOptions {

            /**
             * Constructs a new DynamicGroupKafkaOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IDynamicGroupKafkaOptions);

            /** DynamicGroupKafkaOptions _conn. */
            public _conn?: (protos.args.IKafkaConn|null);

            /** DynamicGroupKafkaOptions args. */
            public args?: (protos.args.IKafkaWriteArgs|null);

            /**
             * Creates a new DynamicGroupKafkaOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DynamicGroupKafkaOptions instance
             */
            public static create(properties?: protos.opts.IDynamicGroupKafkaOptions): protos.opts.DynamicGroupKafkaOptions;

            /**
             * Encodes the specified DynamicGroupKafkaOptions message. Does not implicitly {@link protos.opts.DynamicGroupKafkaOptions.verify|verify} messages.
             * @param message DynamicGroupKafkaOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IDynamicGroupKafkaOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DynamicGroupKafkaOptions message, length delimited. Does not implicitly {@link protos.opts.DynamicGroupKafkaOptions.verify|verify} messages.
             * @param message DynamicGroupKafkaOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IDynamicGroupKafkaOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DynamicGroupKafkaOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DynamicGroupKafkaOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.DynamicGroupKafkaOptions;

            /**
             * Decodes a DynamicGroupKafkaOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DynamicGroupKafkaOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.DynamicGroupKafkaOptions;

            /**
             * Verifies a DynamicGroupKafkaOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DynamicGroupKafkaOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DynamicGroupKafkaOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.DynamicGroupKafkaOptions;

            /**
             * Creates a plain object from a DynamicGroupKafkaOptions message. Also converts values to other types if specified.
             * @param message DynamicGroupKafkaOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.DynamicGroupKafkaOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DynamicGroupKafkaOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DynamicGroupActiveMQOptions. */
        interface IDynamicGroupActiveMQOptions {

            /** DynamicGroupActiveMQOptions _conn */
            _conn?: (protos.args.IActiveMQConn|null);

            /** DynamicGroupActiveMQOptions args */
            args?: (protos.args.IActiveMQWriteArgs|null);
        }

        /** Represents a DynamicGroupActiveMQOptions. */
        class DynamicGroupActiveMQOptions implements IDynamicGroupActiveMQOptions {

            /**
             * Constructs a new DynamicGroupActiveMQOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IDynamicGroupActiveMQOptions);

            /** DynamicGroupActiveMQOptions _conn. */
            public _conn?: (protos.args.IActiveMQConn|null);

            /** DynamicGroupActiveMQOptions args. */
            public args?: (protos.args.IActiveMQWriteArgs|null);

            /**
             * Creates a new DynamicGroupActiveMQOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DynamicGroupActiveMQOptions instance
             */
            public static create(properties?: protos.opts.IDynamicGroupActiveMQOptions): protos.opts.DynamicGroupActiveMQOptions;

            /**
             * Encodes the specified DynamicGroupActiveMQOptions message. Does not implicitly {@link protos.opts.DynamicGroupActiveMQOptions.verify|verify} messages.
             * @param message DynamicGroupActiveMQOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IDynamicGroupActiveMQOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DynamicGroupActiveMQOptions message, length delimited. Does not implicitly {@link protos.opts.DynamicGroupActiveMQOptions.verify|verify} messages.
             * @param message DynamicGroupActiveMQOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IDynamicGroupActiveMQOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DynamicGroupActiveMQOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DynamicGroupActiveMQOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.DynamicGroupActiveMQOptions;

            /**
             * Decodes a DynamicGroupActiveMQOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DynamicGroupActiveMQOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.DynamicGroupActiveMQOptions;

            /**
             * Verifies a DynamicGroupActiveMQOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DynamicGroupActiveMQOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DynamicGroupActiveMQOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.DynamicGroupActiveMQOptions;

            /**
             * Creates a plain object from a DynamicGroupActiveMQOptions message. Also converts values to other types if specified.
             * @param message DynamicGroupActiveMQOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.DynamicGroupActiveMQOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DynamicGroupActiveMQOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DynamicGroupAWSSQSOptions. */
        interface IDynamicGroupAWSSQSOptions {

            /** DynamicGroupAWSSQSOptions _conn */
            _conn?: (protos.args.IAWSSQSConn|null);

            /** DynamicGroupAWSSQSOptions args */
            args?: (protos.args.IAWSSQSWriteArgs|null);
        }

        /** Represents a DynamicGroupAWSSQSOptions. */
        class DynamicGroupAWSSQSOptions implements IDynamicGroupAWSSQSOptions {

            /**
             * Constructs a new DynamicGroupAWSSQSOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IDynamicGroupAWSSQSOptions);

            /** DynamicGroupAWSSQSOptions _conn. */
            public _conn?: (protos.args.IAWSSQSConn|null);

            /** DynamicGroupAWSSQSOptions args. */
            public args?: (protos.args.IAWSSQSWriteArgs|null);

            /**
             * Creates a new DynamicGroupAWSSQSOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DynamicGroupAWSSQSOptions instance
             */
            public static create(properties?: protos.opts.IDynamicGroupAWSSQSOptions): protos.opts.DynamicGroupAWSSQSOptions;

            /**
             * Encodes the specified DynamicGroupAWSSQSOptions message. Does not implicitly {@link protos.opts.DynamicGroupAWSSQSOptions.verify|verify} messages.
             * @param message DynamicGroupAWSSQSOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IDynamicGroupAWSSQSOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DynamicGroupAWSSQSOptions message, length delimited. Does not implicitly {@link protos.opts.DynamicGroupAWSSQSOptions.verify|verify} messages.
             * @param message DynamicGroupAWSSQSOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IDynamicGroupAWSSQSOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DynamicGroupAWSSQSOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DynamicGroupAWSSQSOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.DynamicGroupAWSSQSOptions;

            /**
             * Decodes a DynamicGroupAWSSQSOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DynamicGroupAWSSQSOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.DynamicGroupAWSSQSOptions;

            /**
             * Verifies a DynamicGroupAWSSQSOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DynamicGroupAWSSQSOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DynamicGroupAWSSQSOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.DynamicGroupAWSSQSOptions;

            /**
             * Creates a plain object from a DynamicGroupAWSSQSOptions message. Also converts values to other types if specified.
             * @param message DynamicGroupAWSSQSOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.DynamicGroupAWSSQSOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DynamicGroupAWSSQSOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DynamicGroupAWSSNSOptions. */
        interface IDynamicGroupAWSSNSOptions {

            /** DynamicGroupAWSSNSOptions _conn */
            _conn?: (protos.args.IAWSSNSConn|null);

            /** DynamicGroupAWSSNSOptions args */
            args?: (protos.args.IAWSSNSWriteArgs|null);
        }

        /** Represents a DynamicGroupAWSSNSOptions. */
        class DynamicGroupAWSSNSOptions implements IDynamicGroupAWSSNSOptions {

            /**
             * Constructs a new DynamicGroupAWSSNSOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IDynamicGroupAWSSNSOptions);

            /** DynamicGroupAWSSNSOptions _conn. */
            public _conn?: (protos.args.IAWSSNSConn|null);

            /** DynamicGroupAWSSNSOptions args. */
            public args?: (protos.args.IAWSSNSWriteArgs|null);

            /**
             * Creates a new DynamicGroupAWSSNSOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DynamicGroupAWSSNSOptions instance
             */
            public static create(properties?: protos.opts.IDynamicGroupAWSSNSOptions): protos.opts.DynamicGroupAWSSNSOptions;

            /**
             * Encodes the specified DynamicGroupAWSSNSOptions message. Does not implicitly {@link protos.opts.DynamicGroupAWSSNSOptions.verify|verify} messages.
             * @param message DynamicGroupAWSSNSOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IDynamicGroupAWSSNSOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DynamicGroupAWSSNSOptions message, length delimited. Does not implicitly {@link protos.opts.DynamicGroupAWSSNSOptions.verify|verify} messages.
             * @param message DynamicGroupAWSSNSOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IDynamicGroupAWSSNSOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DynamicGroupAWSSNSOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DynamicGroupAWSSNSOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.DynamicGroupAWSSNSOptions;

            /**
             * Decodes a DynamicGroupAWSSNSOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DynamicGroupAWSSNSOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.DynamicGroupAWSSNSOptions;

            /**
             * Verifies a DynamicGroupAWSSNSOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DynamicGroupAWSSNSOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DynamicGroupAWSSNSOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.DynamicGroupAWSSNSOptions;

            /**
             * Creates a plain object from a DynamicGroupAWSSNSOptions message. Also converts values to other types if specified.
             * @param message DynamicGroupAWSSNSOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.DynamicGroupAWSSNSOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DynamicGroupAWSSNSOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DynamicGroupNatsOptions. */
        interface IDynamicGroupNatsOptions {

            /** DynamicGroupNatsOptions _conn */
            _conn?: (protos.args.INatsConn|null);

            /** DynamicGroupNatsOptions args */
            args?: (protos.args.INatsWriteArgs|null);
        }

        /** Represents a DynamicGroupNatsOptions. */
        class DynamicGroupNatsOptions implements IDynamicGroupNatsOptions {

            /**
             * Constructs a new DynamicGroupNatsOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IDynamicGroupNatsOptions);

            /** DynamicGroupNatsOptions _conn. */
            public _conn?: (protos.args.INatsConn|null);

            /** DynamicGroupNatsOptions args. */
            public args?: (protos.args.INatsWriteArgs|null);

            /**
             * Creates a new DynamicGroupNatsOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DynamicGroupNatsOptions instance
             */
            public static create(properties?: protos.opts.IDynamicGroupNatsOptions): protos.opts.DynamicGroupNatsOptions;

            /**
             * Encodes the specified DynamicGroupNatsOptions message. Does not implicitly {@link protos.opts.DynamicGroupNatsOptions.verify|verify} messages.
             * @param message DynamicGroupNatsOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IDynamicGroupNatsOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DynamicGroupNatsOptions message, length delimited. Does not implicitly {@link protos.opts.DynamicGroupNatsOptions.verify|verify} messages.
             * @param message DynamicGroupNatsOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IDynamicGroupNatsOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DynamicGroupNatsOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DynamicGroupNatsOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.DynamicGroupNatsOptions;

            /**
             * Decodes a DynamicGroupNatsOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DynamicGroupNatsOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.DynamicGroupNatsOptions;

            /**
             * Verifies a DynamicGroupNatsOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DynamicGroupNatsOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DynamicGroupNatsOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.DynamicGroupNatsOptions;

            /**
             * Creates a plain object from a DynamicGroupNatsOptions message. Also converts values to other types if specified.
             * @param message DynamicGroupNatsOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.DynamicGroupNatsOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DynamicGroupNatsOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DynamicGroupNatsStreamingOptions. */
        interface IDynamicGroupNatsStreamingOptions {

            /** DynamicGroupNatsStreamingOptions _conn */
            _conn?: (protos.args.INatsStreamingConn|null);

            /** DynamicGroupNatsStreamingOptions args */
            args?: (protos.args.INatsStreamingWriteArgs|null);
        }

        /** Represents a DynamicGroupNatsStreamingOptions. */
        class DynamicGroupNatsStreamingOptions implements IDynamicGroupNatsStreamingOptions {

            /**
             * Constructs a new DynamicGroupNatsStreamingOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IDynamicGroupNatsStreamingOptions);

            /** DynamicGroupNatsStreamingOptions _conn. */
            public _conn?: (protos.args.INatsStreamingConn|null);

            /** DynamicGroupNatsStreamingOptions args. */
            public args?: (protos.args.INatsStreamingWriteArgs|null);

            /**
             * Creates a new DynamicGroupNatsStreamingOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DynamicGroupNatsStreamingOptions instance
             */
            public static create(properties?: protos.opts.IDynamicGroupNatsStreamingOptions): protos.opts.DynamicGroupNatsStreamingOptions;

            /**
             * Encodes the specified DynamicGroupNatsStreamingOptions message. Does not implicitly {@link protos.opts.DynamicGroupNatsStreamingOptions.verify|verify} messages.
             * @param message DynamicGroupNatsStreamingOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IDynamicGroupNatsStreamingOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DynamicGroupNatsStreamingOptions message, length delimited. Does not implicitly {@link protos.opts.DynamicGroupNatsStreamingOptions.verify|verify} messages.
             * @param message DynamicGroupNatsStreamingOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IDynamicGroupNatsStreamingOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DynamicGroupNatsStreamingOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DynamicGroupNatsStreamingOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.DynamicGroupNatsStreamingOptions;

            /**
             * Decodes a DynamicGroupNatsStreamingOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DynamicGroupNatsStreamingOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.DynamicGroupNatsStreamingOptions;

            /**
             * Verifies a DynamicGroupNatsStreamingOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DynamicGroupNatsStreamingOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DynamicGroupNatsStreamingOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.DynamicGroupNatsStreamingOptions;

            /**
             * Creates a plain object from a DynamicGroupNatsStreamingOptions message. Also converts values to other types if specified.
             * @param message DynamicGroupNatsStreamingOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.DynamicGroupNatsStreamingOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DynamicGroupNatsStreamingOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DynamicGroupNSQOptions. */
        interface IDynamicGroupNSQOptions {

            /** DynamicGroupNSQOptions _conn */
            _conn?: (protos.args.INSQConn|null);

            /** DynamicGroupNSQOptions args */
            args?: (protos.args.INSQWriteArgs|null);
        }

        /** Represents a DynamicGroupNSQOptions. */
        class DynamicGroupNSQOptions implements IDynamicGroupNSQOptions {

            /**
             * Constructs a new DynamicGroupNSQOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IDynamicGroupNSQOptions);

            /** DynamicGroupNSQOptions _conn. */
            public _conn?: (protos.args.INSQConn|null);

            /** DynamicGroupNSQOptions args. */
            public args?: (protos.args.INSQWriteArgs|null);

            /**
             * Creates a new DynamicGroupNSQOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DynamicGroupNSQOptions instance
             */
            public static create(properties?: protos.opts.IDynamicGroupNSQOptions): protos.opts.DynamicGroupNSQOptions;

            /**
             * Encodes the specified DynamicGroupNSQOptions message. Does not implicitly {@link protos.opts.DynamicGroupNSQOptions.verify|verify} messages.
             * @param message DynamicGroupNSQOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IDynamicGroupNSQOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DynamicGroupNSQOptions message, length delimited. Does not implicitly {@link protos.opts.DynamicGroupNSQOptions.verify|verify} messages.
             * @param message DynamicGroupNSQOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IDynamicGroupNSQOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DynamicGroupNSQOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DynamicGroupNSQOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.DynamicGroupNSQOptions;

            /**
             * Decodes a DynamicGroupNSQOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DynamicGroupNSQOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.DynamicGroupNSQOptions;

            /**
             * Verifies a DynamicGroupNSQOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DynamicGroupNSQOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DynamicGroupNSQOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.DynamicGroupNSQOptions;

            /**
             * Creates a plain object from a DynamicGroupNSQOptions message. Also converts values to other types if specified.
             * @param message DynamicGroupNSQOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.DynamicGroupNSQOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DynamicGroupNSQOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DynamicGroupRabbitOptions. */
        interface IDynamicGroupRabbitOptions {

            /** DynamicGroupRabbitOptions _conn */
            _conn?: (protos.args.IRabbitConn|null);

            /** DynamicGroupRabbitOptions args */
            args?: (protos.args.IRabbitWriteArgs|null);
        }

        /** Represents a DynamicGroupRabbitOptions. */
        class DynamicGroupRabbitOptions implements IDynamicGroupRabbitOptions {

            /**
             * Constructs a new DynamicGroupRabbitOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IDynamicGroupRabbitOptions);

            /** DynamicGroupRabbitOptions _conn. */
            public _conn?: (protos.args.IRabbitConn|null);

            /** DynamicGroupRabbitOptions args. */
            public args?: (protos.args.IRabbitWriteArgs|null);

            /**
             * Creates a new DynamicGroupRabbitOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DynamicGroupRabbitOptions instance
             */
            public static create(properties?: protos.opts.IDynamicGroupRabbitOptions): protos.opts.DynamicGroupRabbitOptions;

            /**
             * Encodes the specified DynamicGroupRabbitOptions message. Does not implicitly {@link protos.opts.DynamicGroupRabbitOptions.verify|verify} messages.
             * @param message DynamicGroupRabbitOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IDynamicGroupRabbitOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DynamicGroupRabbitOptions message, length delimited. Does not implicitly {@link protos.opts.DynamicGroupRabbitOptions.verify|verify} messages.
             * @param message DynamicGroupRabbitOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IDynamicGroupRabbitOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DynamicGroupRabbitOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DynamicGroupRabbitOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.DynamicGroupRabbitOptions;

            /**
             * Decodes a DynamicGroupRabbitOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DynamicGroupRabbitOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.DynamicGroupRabbitOptions;

            /**
             * Verifies a DynamicGroupRabbitOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DynamicGroupRabbitOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DynamicGroupRabbitOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.DynamicGroupRabbitOptions;

            /**
             * Creates a plain object from a DynamicGroupRabbitOptions message. Also converts values to other types if specified.
             * @param message DynamicGroupRabbitOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.DynamicGroupRabbitOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DynamicGroupRabbitOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DynamicGroupRabbitStreamsOptions. */
        interface IDynamicGroupRabbitStreamsOptions {

            /** DynamicGroupRabbitStreamsOptions _conn */
            _conn?: (protos.args.IRabbitStreamsConn|null);

            /** DynamicGroupRabbitStreamsOptions args */
            args?: (protos.args.IRabbitStreamsWriteArgs|null);
        }

        /** Represents a DynamicGroupRabbitStreamsOptions. */
        class DynamicGroupRabbitStreamsOptions implements IDynamicGroupRabbitStreamsOptions {

            /**
             * Constructs a new DynamicGroupRabbitStreamsOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IDynamicGroupRabbitStreamsOptions);

            /** DynamicGroupRabbitStreamsOptions _conn. */
            public _conn?: (protos.args.IRabbitStreamsConn|null);

            /** DynamicGroupRabbitStreamsOptions args. */
            public args?: (protos.args.IRabbitStreamsWriteArgs|null);

            /**
             * Creates a new DynamicGroupRabbitStreamsOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DynamicGroupRabbitStreamsOptions instance
             */
            public static create(properties?: protos.opts.IDynamicGroupRabbitStreamsOptions): protos.opts.DynamicGroupRabbitStreamsOptions;

            /**
             * Encodes the specified DynamicGroupRabbitStreamsOptions message. Does not implicitly {@link protos.opts.DynamicGroupRabbitStreamsOptions.verify|verify} messages.
             * @param message DynamicGroupRabbitStreamsOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IDynamicGroupRabbitStreamsOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DynamicGroupRabbitStreamsOptions message, length delimited. Does not implicitly {@link protos.opts.DynamicGroupRabbitStreamsOptions.verify|verify} messages.
             * @param message DynamicGroupRabbitStreamsOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IDynamicGroupRabbitStreamsOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DynamicGroupRabbitStreamsOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DynamicGroupRabbitStreamsOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.DynamicGroupRabbitStreamsOptions;

            /**
             * Decodes a DynamicGroupRabbitStreamsOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DynamicGroupRabbitStreamsOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.DynamicGroupRabbitStreamsOptions;

            /**
             * Verifies a DynamicGroupRabbitStreamsOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DynamicGroupRabbitStreamsOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DynamicGroupRabbitStreamsOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.DynamicGroupRabbitStreamsOptions;

            /**
             * Creates a plain object from a DynamicGroupRabbitStreamsOptions message. Also converts values to other types if specified.
             * @param message DynamicGroupRabbitStreamsOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.DynamicGroupRabbitStreamsOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DynamicGroupRabbitStreamsOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DynamicGroupRedisPubSubOptions. */
        interface IDynamicGroupRedisPubSubOptions {

            /** DynamicGroupRedisPubSubOptions _conn */
            _conn?: (protos.args.IRedisPubSubConn|null);

            /** DynamicGroupRedisPubSubOptions args */
            args?: (protos.args.IRedisPubSubWriteArgs|null);
        }

        /** Represents a DynamicGroupRedisPubSubOptions. */
        class DynamicGroupRedisPubSubOptions implements IDynamicGroupRedisPubSubOptions {

            /**
             * Constructs a new DynamicGroupRedisPubSubOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IDynamicGroupRedisPubSubOptions);

            /** DynamicGroupRedisPubSubOptions _conn. */
            public _conn?: (protos.args.IRedisPubSubConn|null);

            /** DynamicGroupRedisPubSubOptions args. */
            public args?: (protos.args.IRedisPubSubWriteArgs|null);

            /**
             * Creates a new DynamicGroupRedisPubSubOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DynamicGroupRedisPubSubOptions instance
             */
            public static create(properties?: protos.opts.IDynamicGroupRedisPubSubOptions): protos.opts.DynamicGroupRedisPubSubOptions;

            /**
             * Encodes the specified DynamicGroupRedisPubSubOptions message. Does not implicitly {@link protos.opts.DynamicGroupRedisPubSubOptions.verify|verify} messages.
             * @param message DynamicGroupRedisPubSubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IDynamicGroupRedisPubSubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DynamicGroupRedisPubSubOptions message, length delimited. Does not implicitly {@link protos.opts.DynamicGroupRedisPubSubOptions.verify|verify} messages.
             * @param message DynamicGroupRedisPubSubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IDynamicGroupRedisPubSubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DynamicGroupRedisPubSubOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DynamicGroupRedisPubSubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.DynamicGroupRedisPubSubOptions;

            /**
             * Decodes a DynamicGroupRedisPubSubOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DynamicGroupRedisPubSubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.DynamicGroupRedisPubSubOptions;

            /**
             * Verifies a DynamicGroupRedisPubSubOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DynamicGroupRedisPubSubOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DynamicGroupRedisPubSubOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.DynamicGroupRedisPubSubOptions;

            /**
             * Creates a plain object from a DynamicGroupRedisPubSubOptions message. Also converts values to other types if specified.
             * @param message DynamicGroupRedisPubSubOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.DynamicGroupRedisPubSubOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DynamicGroupRedisPubSubOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DynamicGroupRedisStreamsOptions. */
        interface IDynamicGroupRedisStreamsOptions {

            /** DynamicGroupRedisStreamsOptions _conn */
            _conn?: (protos.args.IRedisStreamsConn|null);

            /** DynamicGroupRedisStreamsOptions args */
            args?: (protos.args.IRedisStreamsWriteArgs|null);
        }

        /** Represents a DynamicGroupRedisStreamsOptions. */
        class DynamicGroupRedisStreamsOptions implements IDynamicGroupRedisStreamsOptions {

            /**
             * Constructs a new DynamicGroupRedisStreamsOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IDynamicGroupRedisStreamsOptions);

            /** DynamicGroupRedisStreamsOptions _conn. */
            public _conn?: (protos.args.IRedisStreamsConn|null);

            /** DynamicGroupRedisStreamsOptions args. */
            public args?: (protos.args.IRedisStreamsWriteArgs|null);

            /**
             * Creates a new DynamicGroupRedisStreamsOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DynamicGroupRedisStreamsOptions instance
             */
            public static create(properties?: protos.opts.IDynamicGroupRedisStreamsOptions): protos.opts.DynamicGroupRedisStreamsOptions;

            /**
             * Encodes the specified DynamicGroupRedisStreamsOptions message. Does not implicitly {@link protos.opts.DynamicGroupRedisStreamsOptions.verify|verify} messages.
             * @param message DynamicGroupRedisStreamsOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IDynamicGroupRedisStreamsOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DynamicGroupRedisStreamsOptions message, length delimited. Does not implicitly {@link protos.opts.DynamicGroupRedisStreamsOptions.verify|verify} messages.
             * @param message DynamicGroupRedisStreamsOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IDynamicGroupRedisStreamsOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DynamicGroupRedisStreamsOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DynamicGroupRedisStreamsOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.DynamicGroupRedisStreamsOptions;

            /**
             * Decodes a DynamicGroupRedisStreamsOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DynamicGroupRedisStreamsOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.DynamicGroupRedisStreamsOptions;

            /**
             * Verifies a DynamicGroupRedisStreamsOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DynamicGroupRedisStreamsOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DynamicGroupRedisStreamsOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.DynamicGroupRedisStreamsOptions;

            /**
             * Creates a plain object from a DynamicGroupRedisStreamsOptions message. Also converts values to other types if specified.
             * @param message DynamicGroupRedisStreamsOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.DynamicGroupRedisStreamsOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DynamicGroupRedisStreamsOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DynamicGroupAzureEventHubOptions. */
        interface IDynamicGroupAzureEventHubOptions {

            /** DynamicGroupAzureEventHubOptions _conn */
            _conn?: (protos.args.IAzureEventHubConn|null);

            /** DynamicGroupAzureEventHubOptions args */
            args?: (protos.args.IAzureEventHubWriteArgs|null);
        }

        /** Represents a DynamicGroupAzureEventHubOptions. */
        class DynamicGroupAzureEventHubOptions implements IDynamicGroupAzureEventHubOptions {

            /**
             * Constructs a new DynamicGroupAzureEventHubOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IDynamicGroupAzureEventHubOptions);

            /** DynamicGroupAzureEventHubOptions _conn. */
            public _conn?: (protos.args.IAzureEventHubConn|null);

            /** DynamicGroupAzureEventHubOptions args. */
            public args?: (protos.args.IAzureEventHubWriteArgs|null);

            /**
             * Creates a new DynamicGroupAzureEventHubOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DynamicGroupAzureEventHubOptions instance
             */
            public static create(properties?: protos.opts.IDynamicGroupAzureEventHubOptions): protos.opts.DynamicGroupAzureEventHubOptions;

            /**
             * Encodes the specified DynamicGroupAzureEventHubOptions message. Does not implicitly {@link protos.opts.DynamicGroupAzureEventHubOptions.verify|verify} messages.
             * @param message DynamicGroupAzureEventHubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IDynamicGroupAzureEventHubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DynamicGroupAzureEventHubOptions message, length delimited. Does not implicitly {@link protos.opts.DynamicGroupAzureEventHubOptions.verify|verify} messages.
             * @param message DynamicGroupAzureEventHubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IDynamicGroupAzureEventHubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DynamicGroupAzureEventHubOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DynamicGroupAzureEventHubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.DynamicGroupAzureEventHubOptions;

            /**
             * Decodes a DynamicGroupAzureEventHubOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DynamicGroupAzureEventHubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.DynamicGroupAzureEventHubOptions;

            /**
             * Verifies a DynamicGroupAzureEventHubOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DynamicGroupAzureEventHubOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DynamicGroupAzureEventHubOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.DynamicGroupAzureEventHubOptions;

            /**
             * Creates a plain object from a DynamicGroupAzureEventHubOptions message. Also converts values to other types if specified.
             * @param message DynamicGroupAzureEventHubOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.DynamicGroupAzureEventHubOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DynamicGroupAzureEventHubOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DynamicGroupAzureServiceBusOptions. */
        interface IDynamicGroupAzureServiceBusOptions {

            /** DynamicGroupAzureServiceBusOptions _conn */
            _conn?: (protos.args.IAzureServiceBusConn|null);

            /** DynamicGroupAzureServiceBusOptions args */
            args?: (protos.args.IAzureServiceBusWriteArgs|null);
        }

        /** Represents a DynamicGroupAzureServiceBusOptions. */
        class DynamicGroupAzureServiceBusOptions implements IDynamicGroupAzureServiceBusOptions {

            /**
             * Constructs a new DynamicGroupAzureServiceBusOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IDynamicGroupAzureServiceBusOptions);

            /** DynamicGroupAzureServiceBusOptions _conn. */
            public _conn?: (protos.args.IAzureServiceBusConn|null);

            /** DynamicGroupAzureServiceBusOptions args. */
            public args?: (protos.args.IAzureServiceBusWriteArgs|null);

            /**
             * Creates a new DynamicGroupAzureServiceBusOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DynamicGroupAzureServiceBusOptions instance
             */
            public static create(properties?: protos.opts.IDynamicGroupAzureServiceBusOptions): protos.opts.DynamicGroupAzureServiceBusOptions;

            /**
             * Encodes the specified DynamicGroupAzureServiceBusOptions message. Does not implicitly {@link protos.opts.DynamicGroupAzureServiceBusOptions.verify|verify} messages.
             * @param message DynamicGroupAzureServiceBusOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IDynamicGroupAzureServiceBusOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DynamicGroupAzureServiceBusOptions message, length delimited. Does not implicitly {@link protos.opts.DynamicGroupAzureServiceBusOptions.verify|verify} messages.
             * @param message DynamicGroupAzureServiceBusOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IDynamicGroupAzureServiceBusOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DynamicGroupAzureServiceBusOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DynamicGroupAzureServiceBusOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.DynamicGroupAzureServiceBusOptions;

            /**
             * Decodes a DynamicGroupAzureServiceBusOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DynamicGroupAzureServiceBusOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.DynamicGroupAzureServiceBusOptions;

            /**
             * Verifies a DynamicGroupAzureServiceBusOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DynamicGroupAzureServiceBusOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DynamicGroupAzureServiceBusOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.DynamicGroupAzureServiceBusOptions;

            /**
             * Creates a plain object from a DynamicGroupAzureServiceBusOptions message. Also converts values to other types if specified.
             * @param message DynamicGroupAzureServiceBusOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.DynamicGroupAzureServiceBusOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DynamicGroupAzureServiceBusOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DynamicGroupMQTTOptions. */
        interface IDynamicGroupMQTTOptions {

            /** DynamicGroupMQTTOptions _conn */
            _conn?: (protos.args.IMQTTConn|null);

            /** DynamicGroupMQTTOptions args */
            args?: (protos.args.IMQTTWriteArgs|null);
        }

        /** Represents a DynamicGroupMQTTOptions. */
        class DynamicGroupMQTTOptions implements IDynamicGroupMQTTOptions {

            /**
             * Constructs a new DynamicGroupMQTTOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IDynamicGroupMQTTOptions);

            /** DynamicGroupMQTTOptions _conn. */
            public _conn?: (protos.args.IMQTTConn|null);

            /** DynamicGroupMQTTOptions args. */
            public args?: (protos.args.IMQTTWriteArgs|null);

            /**
             * Creates a new DynamicGroupMQTTOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DynamicGroupMQTTOptions instance
             */
            public static create(properties?: protos.opts.IDynamicGroupMQTTOptions): protos.opts.DynamicGroupMQTTOptions;

            /**
             * Encodes the specified DynamicGroupMQTTOptions message. Does not implicitly {@link protos.opts.DynamicGroupMQTTOptions.verify|verify} messages.
             * @param message DynamicGroupMQTTOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IDynamicGroupMQTTOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DynamicGroupMQTTOptions message, length delimited. Does not implicitly {@link protos.opts.DynamicGroupMQTTOptions.verify|verify} messages.
             * @param message DynamicGroupMQTTOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IDynamicGroupMQTTOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DynamicGroupMQTTOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DynamicGroupMQTTOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.DynamicGroupMQTTOptions;

            /**
             * Decodes a DynamicGroupMQTTOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DynamicGroupMQTTOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.DynamicGroupMQTTOptions;

            /**
             * Verifies a DynamicGroupMQTTOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DynamicGroupMQTTOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DynamicGroupMQTTOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.DynamicGroupMQTTOptions;

            /**
             * Creates a plain object from a DynamicGroupMQTTOptions message. Also converts values to other types if specified.
             * @param message DynamicGroupMQTTOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.DynamicGroupMQTTOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DynamicGroupMQTTOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DynamicGroupGCPPubSubOptions. */
        interface IDynamicGroupGCPPubSubOptions {

            /** DynamicGroupGCPPubSubOptions _conn */
            _conn?: (protos.args.IGCPPubSubConn|null);

            /** DynamicGroupGCPPubSubOptions args */
            args?: (protos.args.IGCPPubSubWriteArgs|null);
        }

        /** Represents a DynamicGroupGCPPubSubOptions. */
        class DynamicGroupGCPPubSubOptions implements IDynamicGroupGCPPubSubOptions {

            /**
             * Constructs a new DynamicGroupGCPPubSubOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IDynamicGroupGCPPubSubOptions);

            /** DynamicGroupGCPPubSubOptions _conn. */
            public _conn?: (protos.args.IGCPPubSubConn|null);

            /** DynamicGroupGCPPubSubOptions args. */
            public args?: (protos.args.IGCPPubSubWriteArgs|null);

            /**
             * Creates a new DynamicGroupGCPPubSubOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DynamicGroupGCPPubSubOptions instance
             */
            public static create(properties?: protos.opts.IDynamicGroupGCPPubSubOptions): protos.opts.DynamicGroupGCPPubSubOptions;

            /**
             * Encodes the specified DynamicGroupGCPPubSubOptions message. Does not implicitly {@link protos.opts.DynamicGroupGCPPubSubOptions.verify|verify} messages.
             * @param message DynamicGroupGCPPubSubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IDynamicGroupGCPPubSubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DynamicGroupGCPPubSubOptions message, length delimited. Does not implicitly {@link protos.opts.DynamicGroupGCPPubSubOptions.verify|verify} messages.
             * @param message DynamicGroupGCPPubSubOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IDynamicGroupGCPPubSubOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DynamicGroupGCPPubSubOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DynamicGroupGCPPubSubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.DynamicGroupGCPPubSubOptions;

            /**
             * Decodes a DynamicGroupGCPPubSubOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DynamicGroupGCPPubSubOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.DynamicGroupGCPPubSubOptions;

            /**
             * Verifies a DynamicGroupGCPPubSubOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DynamicGroupGCPPubSubOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DynamicGroupGCPPubSubOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.DynamicGroupGCPPubSubOptions;

            /**
             * Creates a plain object from a DynamicGroupGCPPubSubOptions message. Also converts values to other types if specified.
             * @param message DynamicGroupGCPPubSubOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.DynamicGroupGCPPubSubOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DynamicGroupGCPPubSubOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DynamicGroupKubeMQQueueOptions. */
        interface IDynamicGroupKubeMQQueueOptions {

            /** DynamicGroupKubeMQQueueOptions _conn */
            _conn?: (protos.args.IKubeMQQueueConn|null);

            /** DynamicGroupKubeMQQueueOptions args */
            args?: (protos.args.IKubeMQQueueWriteArgs|null);
        }

        /** Represents a DynamicGroupKubeMQQueueOptions. */
        class DynamicGroupKubeMQQueueOptions implements IDynamicGroupKubeMQQueueOptions {

            /**
             * Constructs a new DynamicGroupKubeMQQueueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: protos.opts.IDynamicGroupKubeMQQueueOptions);

            /** DynamicGroupKubeMQQueueOptions _conn. */
            public _conn?: (protos.args.IKubeMQQueueConn|null);

            /** DynamicGroupKubeMQQueueOptions args. */
            public args?: (protos.args.IKubeMQQueueWriteArgs|null);

            /**
             * Creates a new DynamicGroupKubeMQQueueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DynamicGroupKubeMQQueueOptions instance
             */
            public static create(properties?: protos.opts.IDynamicGroupKubeMQQueueOptions): protos.opts.DynamicGroupKubeMQQueueOptions;

            /**
             * Encodes the specified DynamicGroupKubeMQQueueOptions message. Does not implicitly {@link protos.opts.DynamicGroupKubeMQQueueOptions.verify|verify} messages.
             * @param message DynamicGroupKubeMQQueueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: protos.opts.IDynamicGroupKubeMQQueueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DynamicGroupKubeMQQueueOptions message, length delimited. Does not implicitly {@link protos.opts.DynamicGroupKubeMQQueueOptions.verify|verify} messages.
             * @param message DynamicGroupKubeMQQueueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: protos.opts.IDynamicGroupKubeMQQueueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DynamicGroupKubeMQQueueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DynamicGroupKubeMQQueueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): protos.opts.DynamicGroupKubeMQQueueOptions;

            /**
             * Decodes a DynamicGroupKubeMQQueueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DynamicGroupKubeMQQueueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): protos.opts.DynamicGroupKubeMQQueueOptions;

            /**
             * Verifies a DynamicGroupKubeMQQueueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DynamicGroupKubeMQQueueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DynamicGroupKubeMQQueueOptions
             */
            public static fromObject(object: { [k: string]: any }): protos.opts.DynamicGroupKubeMQQueueOptions;

            /**
             * Creates a plain object from a DynamicGroupKubeMQQueueOptions message. Also converts values to other types if specified.
             * @param message DynamicGroupKubeMQQueueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: protos.opts.DynamicGroupKubeMQQueueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DynamicGroupKubeMQQueueOptions to JSON.
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

            /** ConnectionOptions awssqs */
            awssqs?: (protos.args.IAWSSQSConn|null);

            /** ConnectionOptions awssns */
            awssns?: (protos.args.IAWSSNSConn|null);

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

            /** ConnectionOptions awssqs. */
            public awssqs?: (protos.args.IAWSSQSConn|null);

            /** ConnectionOptions awssns. */
            public awssns?: (protos.args.IAWSSNSConn|null);

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

            /** ConnectionOptions _id. */
            public _id: string;

            /** ConnectionOptions conn. */
            public conn?: ("kafka"|"activeMq"|"awssqs"|"awssns"|"mongo"|"nats"|"natsStreaming"|"nsq"|"postgres"|"pulsar"|"rabbit"|"rabbitStreams"|"redisPubsub"|"redisStreams"|"azureEventHub"|"azureServiceBus"|"mqtt"|"kubemqQueue"|"gcpPubsub");

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

            /** ReadRecord _raw. */
            public _raw: Uint8Array;

            /** ReadRecord _plumberId. */
            public _plumberId: string;

            /** ReadRecord Record. */
            public Record?: "kafka";

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
    }
}
