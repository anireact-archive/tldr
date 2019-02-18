import { Tld } from '@tld/r-core';
import { resolveString, StringOptions, StringResolved, Wrapper } from '..';

export const formatString = (s: string, o?: StringOptions) => (tld: Tld<any>) => {
    return new Wrapper<string, StringOptions, StringResolved>(tld, s, o, resolveString);
};
