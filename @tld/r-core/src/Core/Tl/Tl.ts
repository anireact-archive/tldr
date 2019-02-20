import { Strings } from '@anireact/prelude';
import { Dict, RawDict, Tags } from '..';

export interface Tl<M> {
    readonly id: TlId;
    readonly name: string;
    readonly tags: Tags;
    readonly fallback: TlIds;
    readonly dict: Dict<M>;
}

export interface RawTl<M> {
    readonly id: string;
    readonly name: string;
    readonly tags?: Strings;
    readonly fallback?: Strings;
    readonly dict?: RawDict<M>;
}

export type Tls<M> = ReadonlyArray<Tl<M>>;
export type RawTls<M> = ReadonlyArray<RawTl<M>>;

declare const TlId: unique symbol; // eslint-disable-line init-declarations
export type TlId = string & { [TlId]: typeof TlId };

export type TlIds = ReadonlyArray<TlId>;
