import { isString, w } from '@anireact/prelude';
import { StaticMsg } from '@tld/r-core';
import { Wrapper, StringTable } from '..';

export const choice = <M>(v: Wrapper<string, any, any>, t: StringTable<M>): StaticMsg<M> => {
    return w(s => {
        if (!isString(s)) return s;
        if (s in t) return t[s];

        return t.other;
    }, v.value);
};
