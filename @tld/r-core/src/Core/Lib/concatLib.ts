import { getMap, maybe, toArray } from '@tld/prelude';
import { concatTl, Lib } from '..';

export const concatLib = <M>(a: Lib<M>, b: Lib<M>): Lib<M> => {
    return toArray(b.values()).reduce((c, tl) => {
        return c.set(
            tl.id,
            maybe(
                // Get a translation from left library ↓
                getMap(a, tl.id),

                // If it exists, concat the translation from a left library with translation from right,
                // messages from a right library take priority ↓
                existing => {
                    return concatTl(existing, tl);
                },

                // Otherwise just add a translation from a right library ↓
                tl,
            ),
        );
    }, new Map(a));
};
