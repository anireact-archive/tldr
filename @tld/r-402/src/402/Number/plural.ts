import { isNumber } from '@anireact/prelude';
import { StaticMsg } from '@tld/r-core';
import { Wrapper } from '../Wrapper/Wrapper';
import { NumberResolved, NumberTable } from './Number';

export const plural = <M>(v: Wrapper<number, any, NumberResolved>, t: NumberTable<M>): StaticMsg<M> => {
    const n = v.value;
    const category = v.resolved.s(n);

    if (!isNumber(n)) return n;
    if (n in t) return t[n];
    if (category in t) return t[category];

    return t.other;
};
