import { Tld, toDict } from '..';

export const updateDict = <M>(tld: Tld<M>): Tld<M> => {
    return {
        ...tld,
        dict: toDict(tld.lib, tld.fallback, tld.id),
        tags: tld.lib.has(tld.id) ? tld.lib.get(tld.id)!.tags : [],
    };
};
