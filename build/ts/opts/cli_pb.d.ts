// package: protos.opts
// file: opts/cli.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as opts_read_pb from "../opts/read_pb";
import * as opts_write_pb from "../opts/write_pb";
import * as opts_relay_pb from "../opts/relay_pb";
import * as opts_server_pb from "../opts/server_pb";

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
    getRead(): opts_read_pb.ReadOptions | undefined;
    setRead(value?: opts_read_pb.ReadOptions): CLIOptions;

    hasWrite(): boolean;
    clearWrite(): void;
    getWrite(): opts_write_pb.WriteOptions | undefined;
    setWrite(value?: opts_write_pb.WriteOptions): CLIOptions;

    hasRelay(): boolean;
    clearRelay(): void;
    getRelay(): opts_relay_pb.RelayOptions | undefined;
    setRelay(value?: opts_relay_pb.RelayOptions): CLIOptions;

    hasServer(): boolean;
    clearServer(): void;
    getServer(): opts_server_pb.ServerOptions | undefined;
    setServer(value?: opts_server_pb.ServerOptions): CLIOptions;

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
        read?: opts_read_pb.ReadOptions.AsObject,
        write?: opts_write_pb.WriteOptions.AsObject,
        relay?: opts_relay_pb.RelayOptions.AsObject,
        server?: opts_server_pb.ServerOptions.AsObject,
    }
}
