import { uniq } from '@tld/prelude';
import { Tl } from '..';

export const concatTl = <M>(a: Tl<M>, b: Tl<M>): Tl<M> => {
    return {
        ...b,
        tags: uniq([...a.tags, ...b.tags]),
        fallback: uniq([...a.fallback, ...b.fallback]),
        dict: new Map([...a.dict, ...b.dict]),
    };
};
