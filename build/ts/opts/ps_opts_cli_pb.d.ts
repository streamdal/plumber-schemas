// package: protos.opts
// file: opts/ps_opts_cli.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as opts_ps_opts_read_pb from "../opts/ps_opts_read_pb";
import * as opts_ps_write_pb from "../opts/ps_write_pb";
import * as opts_ps_opts_relay_pb from "../opts/ps_opts_relay_pb";
import * as opts_ps_opts_server_pb from "../opts/ps_opts_server_pb";
import * as opts_ps_opts_batch_pb from "../opts/ps_opts_batch_pb";
import * as opts_ps_opts_dynamic_pb from "../opts/ps_opts_dynamic_pb";

export class GlobalCLIOptions extends jspb.Message { 
    getDebug(): boolean;
    setDebug(value: boolean): GlobalCLIOptions;
    getQuiet(): boolean;
    setQuiet(value: boolean): GlobalCLIOptions;
    getVersion(): boolean;
    setVersion(value: boolean): GlobalCLIOptions;
    getFullCommand(): string;
    setFullCommand(value: string): GlobalCLIOptions;
    getAction(): string;
    setAction(value: string): GlobalCLIOptions;
    getBackend(): string;
    setBackend(value: string): GlobalCLIOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GlobalCLIOptions.AsObject;
    static toObject(includeInstance: boolean, msg: GlobalCLIOptions): GlobalCLIOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GlobalCLIOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GlobalCLIOptions;
    static deserializeBinaryFromReader(message: GlobalCLIOptions, reader: jspb.BinaryReader): GlobalCLIOptions;
}

export namespace GlobalCLIOptions {
    export type AsObject = {
        debug: boolean,
        quiet: boolean,
        version: boolean,
        FullCommand: string,
        Action: string,
        Backend: string,
    }
}

export class CLIOptions extends jspb.Message { 

    hasGlobal(): boolean;
    clearGlobal(): void;
    getGlobal(): GlobalCLIOptions | undefined;
    setGlobal(value?: GlobalCLIOptions): CLIOptions;

    hasRead(): boolean;
    clearRead(): void;
    getRead(): opts_ps_opts_read_pb.ReadOptions | undefined;
    setRead(value?: opts_ps_opts_read_pb.ReadOptions): CLIOptions;

    hasWrite(): boolean;
    clearWrite(): void;
    getWrite(): opts_ps_write_pb.WriteOptions | undefined;
    setWrite(value?: opts_ps_write_pb.WriteOptions): CLIOptions;

    hasRelay(): boolean;
    clearRelay(): void;
    getRelay(): opts_ps_opts_relay_pb.RelayOptions | undefined;
    setRelay(value?: opts_ps_opts_relay_pb.RelayOptions): CLIOptions;

    hasDynamic(): boolean;
    clearDynamic(): void;
    getDynamic(): opts_ps_opts_dynamic_pb.DynamicOptions | undefined;
    setDynamic(value?: opts_ps_opts_dynamic_pb.DynamicOptions): CLIOptions;

    hasBatch(): boolean;
    clearBatch(): void;
    getBatch(): opts_ps_opts_batch_pb.BatchOptions | undefined;
    setBatch(value?: opts_ps_opts_batch_pb.BatchOptions): CLIOptions;

    hasServer(): boolean;
    clearServer(): void;
    getServer(): opts_ps_opts_server_pb.ServerOptions | undefined;
    setServer(value?: opts_ps_opts_server_pb.ServerOptions): CLIOptions;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CLIOptions.AsObject;
    static toObject(includeInstance: boolean, msg: CLIOptions): CLIOptions.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CLIOptions, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CLIOptions;
    static deserializeBinaryFromReader(message: CLIOptions, reader: jspb.BinaryReader): CLIOptions;
}

export namespace CLIOptions {
    export type AsObject = {
        global?: GlobalCLIOptions.AsObject,
        read?: opts_ps_opts_read_pb.ReadOptions.AsObject,
        write?: opts_ps_write_pb.WriteOptions.AsObject,
        relay?: opts_ps_opts_relay_pb.RelayOptions.AsObject,
        dynamic?: opts_ps_opts_dynamic_pb.DynamicOptions.AsObject,
        batch?: opts_ps_opts_batch_pb.BatchOptions.AsObject,
        server?: opts_ps_opts_server_pb.ServerOptions.AsObject,
    }
}
