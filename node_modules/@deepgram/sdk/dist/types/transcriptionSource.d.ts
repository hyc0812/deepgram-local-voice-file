/// <reference types="node" />
import { ReadStream } from "fs";
export declare type TranscriptionSource = UrlSource | BufferSource | ReadStreamSource;
export declare type ReadStreamSource = {
    stream: ReadStream;
    mimetype: string;
};
export declare type UrlSource = {
    url: string;
};
export declare type BufferSource = {
    buffer: Buffer;
    mimetype: string;
};
