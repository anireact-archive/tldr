import { StaticMsg, Tags } from '@tld/r-core';
import { RecordOptions, Resolved, Table } from '../Abstract/Abstract';

export type StringOptions = RecordStringOptions | FunctionStringOptions | ShorthandStringOptions | undefined;

export interface RecordStringOptions extends RecordOptions {
    readonly replace?: string;
}

export interface FunctionStringOptions {
    (s: string, ts: Tags): string;
}

export type ShorthandStringOptions = string;

export interface StringResolved extends Resolved {
    readonly replace?: string;

    readonly f: (s: string) => string;
}

export interface StringTable<M> extends Table<M> {
    readonly [match: string]: StaticMsg<M>;
}
