import { isNumber, w } from '@anireact/prelude';
import { StaticMsg } from '@tld/r-core';
import { Wrapper, NumberResolved, NumberTable } from '..';

export const plural = <M>(v: Wrapper<number, any, NumberResolved>, t: NumberTable<M>): StaticMsg<M> => {
    return w(n => {
        if (!isNumber(n)) return n;
        if (n in t) return t[n];

        return w(category => {
            if (category in t) return t[category];

            return t.other;
        }, v.resolved.s(n));
    }, v.value);
};
