import { Tld, TlId, updateDict } from '..';

export const switchTl = <M>(tld: Tld<M>, id: TlId): Tld<M> => {
    return updateDict({
        ...tld,
        id,
    });
};
