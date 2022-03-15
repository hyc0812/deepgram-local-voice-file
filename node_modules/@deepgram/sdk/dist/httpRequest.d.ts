/// <reference types="node" />
import { ReadStream } from "fs";
export declare function _request<T>(method: string, api_key: string, apiUrl: string, path: string, payload?: string | Buffer | ReadStream, options?: Object): Promise<T>;
