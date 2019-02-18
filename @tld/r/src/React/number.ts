import { formatNumber, NumberOptions } from '@tld/r-402';
import { wrapParam } from './wrapParam';

export const number = (n: number, o?: NumberOptions) => wrapParam(formatNumber(n, o));
