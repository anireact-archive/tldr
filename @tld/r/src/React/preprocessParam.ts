import { getMap, isArrayOfType, isDate, isNumber, isString, maybe } from '@tld/prelude';
import { formatNumber, formatString, formatTime, Wrapper } from '@tld/r-402';
import { Tld } from '@tld/r-core';
import { params } from './params';

export const preprocessParam = (tld: Tld<any>) => (p: any) => {
    return maybe(
        getMap(params, p),
        format => {
            return format(tld);
        },
        p instanceof Wrapper
            ? p
            : isNumber(p)
            ? formatNumber(p)(tld)
            : isDate(p)
            ? formatTime([p])(tld)
            : isArrayOfType<Date, [Date, Date]>(isDate, p) && p.length >= 1
            ? formatTime(p)(tld)
            : isString(p)
            ? formatString(p)(tld)
            : p,
    );
};
