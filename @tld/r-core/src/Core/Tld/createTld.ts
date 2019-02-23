import { createLib } from '../Lib/createLib';
import { RawLib } from '../Lib/Lib';
import { TlId, TlIds } from '../Tl/Tl';
import { Tld } from './Tld';
import { updateDict } from './updateDict';

export const createTld = <M>(id: TlId, fallback: TlIds, lib: RawLib<M>): Tld<M> => {
    return updateDict(({
        id,
        fallback,
        lib: createLib(lib),
        dict: new Map(),
        tags: [],
    } as unknown) as Tld<M>);
};
