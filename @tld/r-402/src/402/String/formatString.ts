import { Tld } from '@tld/r-core';
import { Wrapper } from '../Wrapper/Wrapper';
import { resolveString } from './resolveString';
import { StringOptions, StringResolved } from './String';

export const formatString = (s: string, o?: StringOptions) => (tld: Tld<any>) => {
    return new Wrapper<string, StringOptions, StringResolved>(tld, s, o, resolveString);
};
