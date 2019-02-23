import { always, fold, getM, maybe } from '@anireact/prelude';
import { concatTl } from '../Tl/concatTl';
import { Lib } from './Lib';

export const concatLib = <M>(a: Lib<M>, b: Lib<M>): Lib<M> => {
    return fold(
        b,
        (c, [, tl]) => {
            return c.set(
                tl.id,
                maybe(
                    // Get a translation from left library ↓
                    getM(a, tl.id),

                    // If it exists, concat the translation from a left library with translation from right,
                    // messages from a right library take priority ↓
                    existing => {
                        return concatTl(existing, tl);
                    },

                    // Otherwise just add a translation from a right library ↓
                    always(tl),
                ),
            );
        },
        new Map(a),
    );
};
