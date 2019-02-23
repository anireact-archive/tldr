import { isString } from '@anireact/prelude';
import { StaticMsg } from '@tld/r-core';
import { Wrapper } from '../Wrapper/Wrapper';
import { StringTable } from './String';

export const choice = <M>(v: Wrapper<string, any, any>, t: StringTable<M>): StaticMsg<M> => {
    const s = v.value;

    if (!isString(s)) return s;
    if (s in t) return t[s];

    return t.other;
};
