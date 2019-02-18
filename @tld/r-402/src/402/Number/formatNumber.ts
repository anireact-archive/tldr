import { Tld } from '@tld/r-core';
import { NumberOptions, NumberResolved, resolveNumber, Wrapper } from '..';

export const formatNumber = (n: number, o?: NumberOptions) => (tld: Tld<any>) => {
    return new Wrapper<number, NumberOptions, NumberResolved>(tld, n, o, resolveNumber);
};
