import { formatString, StringOptions } from '@tld/r-402';
import { wrapParam } from './wrapParam';

export const string = (s: string, o?: StringOptions) => wrapParam(formatString(s, o));
