import { StaticMsg, Tag, Tags, Tld } from '@tld/r-core';

export type Options = RecordOptions | FunctionOptions | ShorthandOptions | undefined;

export interface RecordOptions {
    readonly transform?: (s: string, ts: Tags) => string;
}

export interface FunctionOptions {
    (s: string, ts: Tags): string;
}

export type ShorthandOptions = string;

export interface Resolved {
    readonly locale: Tag;
    readonly transform: (s: string, ts: Tags) => string;
    readonly f: (v: any) => string;
}

export interface Table<M> {
    readonly other: StaticMsg<M>;
}

export type Resolve<O extends Options, R extends Resolved> = (o?: O) => (tld: Tld<any>) => R;

export type Format<V, R extends Resolved> = (v: V, r: R) => string;
