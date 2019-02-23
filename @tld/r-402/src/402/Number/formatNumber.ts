import { Tld } from '@tld/r-core';
import { Wrapper } from '../Wrapper/Wrapper';
import { NumberOptions, NumberResolved } from './Number';
import { resolveNumber } from './resolveNumber';

export const formatNumber = (n: number, o?: NumberOptions) => (tld: Tld<any>) => {
    return new Wrapper<number, NumberOptions, NumberResolved>(tld, n, o, resolveNumber);
};
