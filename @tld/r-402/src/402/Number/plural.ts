import { isNumber, where1 } from '@tld/prelude';
import { StaticMsg } from '@tld/r-core';
import { Wrapper, NumberResolved, NumberTable } from '..';

export const plural = <M>(v: Wrapper<number, any, NumberResolved>, t: NumberTable<M>): StaticMsg<M> => {
    return where1(v.value, n => {
        if (!isNumber(n)) return n;
        if (n in t) return t[n];

        return where1(v.resolved.s(n), category => {
            if (category in t) return t[category];

            return t.other;
        });
    });
};
