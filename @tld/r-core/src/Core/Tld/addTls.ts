import { concatLib } from '../Lib/concatLib';
import { createLib } from '../Lib/createLib';
import { RawLib } from '../Lib/Lib';
import { Tld } from './Tld';
import { updateDict } from './updateDict';

export const addTls = <M>(tld: Tld<M>, tls: RawLib<M>): Tld<M> => {
    return updateDict({
        ...tld,
        lib: concatLib(tld.lib, createLib(tls)),
    });
};
