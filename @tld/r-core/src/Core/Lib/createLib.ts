import { isArray, toArray } from '@tld/prelude';
import { createTl, Lib, RawLib, RawTl, Tl, TlId } from '..';

export const createLib = <M>(raw: RawLib<M>): Lib<M> => {
    return new Map(
        (isArray<RawTl<M>>(raw) ? raw : toArray(Object.values(raw))).map(raw => {
            return [raw.id as TlId, createTl(raw)] as [TlId, Tl<M>];
        }),
    );
};
