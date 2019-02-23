import { Dict } from '../Dict/Dict';
import { Lib } from '../Lib/Lib';
import { Tags } from '../Tag/Tag';
import { TlId, TlIds } from '../Tl/Tl';

declare const Tld: unique symbol; // eslint-disable-line init-declarations

export interface Tld<M> {
    readonly [Tld]: typeof Tld;
    readonly id: TlId;
    readonly lib: Lib<M>;
    readonly dict: Dict<M>;
    readonly tags: Tags;
    readonly fallback: TlIds;
}
