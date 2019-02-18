import { createLib, RawLib, Tld, TlId, TlIds, updateDict } from '..';

export const createTld = <M>(id: TlId, fallback: TlIds, lib: RawLib<M>): Tld<M> => {
    return updateDict(({
        id,
        fallback,
        lib: createLib(lib),
        dict: new Map(),
        tags: [],
    } as unknown) as Tld<M>);
};
