import { identity } from '@anireact/prelude';
import { NumberOptions, NumberResolved } from '../Number/Number';
import { StringOptions, StringResolved } from '../String/String';
import { TimeOptions, TimeResolved } from '../Time/Time';
import { Wrapper } from './Wrapper';

export type As<V extends number | string | Date> = V extends number
    ? Wrapper<number, NumberOptions, NumberResolved>
    : V extends string
    ? Wrapper<string, StringOptions, StringResolved>
    : Wrapper<[Date, Date], TimeOptions, TimeResolved>;

export const as = identity as <V extends number | string | Date>(wrapper: Wrapper<any, any, any>) => As<V>;
