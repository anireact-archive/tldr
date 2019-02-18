import { Dict, Lib, Tags, TlId, TlIds } from '..';

declare const Tld: unique symbol; // eslint-disable-line init-declarations

export interface Tld<M> {
    readonly [Tld]: typeof Tld;
    readonly id: TlId;
    readonly lib: Lib<M>;
    readonly dict: Dict<M>;
    readonly tags: Tags;
    readonly fallback: TlIds;
}
