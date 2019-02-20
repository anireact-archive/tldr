import { always, getM, isDate, isNumber, isString, isTupleOf, maybe } from '@anireact/prelude';
import { formatNumber, formatString, formatTime, Wrapper } from '@tld/r-402';
import { Tld } from '@tld/r-core';
import { params } from './params';

export const preprocessParam = (tld: Tld<any>) => (p: any) => {
    return maybe(
        getM(params, p),
        format => {
            return format(tld);
        },
        always(
            p instanceof Wrapper
                ? p
                : isNumber(p)
                ? formatNumber(p)(tld)
                : isDate(p)
                ? formatTime([p])(tld)
                : isTupleOf(p, isDate, isDate)
                ? formatTime(p)(tld)
                : isString(p)
                ? formatString(p)(tld)
                : p,
        ),
    );
};
