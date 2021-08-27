// package: protos
// file: cli.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as read_pb from "./read_pb";
import * as write_pb from "./write_pb";
import * as relay_pb from "./relay_pb";
import * as server_pb from "./server_pb";

export class GlobalCLIOptions extends jspb.Message { 
    getDebug(): boolean;
    setDebug(value: boolean): GlobalCLIOptions;
    getQuiet(): boolean;
    setQuiet(value: boolean): GlobalCLIOptions;
    getStatsEnable(): boolean;
    setStatsEnable(value: boolean): GlobalCLIOptions;
    getStatsReportIntervalSec(): number;
    setStatsReportIntervalSec(value: number): GlobalCLIOptions;

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
        statsEnable: boolean,
        statsReportIntervalSec: number,
    }
}

export class CLIOptions extends jspb.Message { 

    hasGlobal(): boolean;
    clearGlobal(): void;
    getGlobal(): GlobalCLIOptions | undefined;
    setGlobal(value?: GlobalCLIOptions): CLIOptions;

    hasRead(): boolean;
    clearRead(): void;
    getRead(): read_pb.ReadConfig | undefined;
    setRead(value?: read_pb.ReadConfig): CLIOptions;

    hasWrite(): boolean;
    clearWrite(): void;
    getWrite(): write_pb.WriteConfig | undefined;
    setWrite(value?: write_pb.WriteConfig): CLIOptions;

    hasRelay(): boolean;
    clearRelay(): void;
    getRelay(): relay_pb.RelayConfig | undefined;
    setRelay(value?: relay_pb.RelayConfig): CLIOptions;

    hasServer(): boolean;
    clearServer(): void;
    getServer(): server_pb.ServerConfig | undefined;
    setServer(value?: server_pb.ServerConfig): CLIOptions;

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
        read?: read_pb.ReadConfig.AsObject,
        write?: write_pb.WriteConfig.AsObject,
        relay?: relay_pb.RelayConfig.AsObject,
        server?: server_pb.ServerConfig.AsObject,
    }
}
