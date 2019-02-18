import { isString, where1 } from '@tld/prelude';
import { StaticMsg } from '@tld/r-core';
import { Wrapper, StringTable } from '..';

export const choice = <M>(v: Wrapper<string, any, any>, t: StringTable<M>): StaticMsg<M> => {
    return where1(v.value, s => {
        if (!isString(s)) return s;
        if (s in t) return t[s];

        return t.other;
    });
};
