import { concat, uniq } from '@anireact/prelude';
import { Tl } from '..';

export const concatTl = <M>(a: Tl<M>, b: Tl<M>): Tl<M> => {
    return {
        ...b,
        tags: uniq(concat(a.tags, b.tags)),
        fallback: uniq(concat(a.fallback, b.fallback)),
        dict: new Map(concat(a.dict, b.dict)),
    };
};
