import { concatLib, createLib, RawLib, Tld, updateDict } from '..';

export const addTls = <M>(tld: Tld<M>, tls: RawLib<M>): Tld<M> => {
    return updateDict({
        ...tld,
        lib: concatLib(tld.lib, createLib(tls)),
    });
};
