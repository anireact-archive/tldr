import { isList, map, valuesO } from '@anireact/prelude';
import { Lib, RawLib, TlId } from '../..';
import { createTl } from '../Tl/createTl';
import { Tl } from '../Tl/Tl';

export const createLib = <M>(raw: RawLib<M>): Lib<M> => {
    return new Map(
        map(isList(raw) ? raw : valuesO(raw), raw => {
            return [raw.id as TlId, createTl(raw)] as [TlId, Tl<M>];
        }),
    );
};
