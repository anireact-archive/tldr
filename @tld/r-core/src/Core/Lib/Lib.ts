import { RawTl, RawTls, Tl, TlId } from '../Tl/Tl';

export type Lib<M> = ReadonlyMap<TlId, Tl<M>>;

export type RawLib<M> = RawTls<M> | Record<string, RawTl<M>>;
