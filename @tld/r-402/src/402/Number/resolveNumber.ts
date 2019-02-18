import { identity, isFunction, isString, where2 } from '@tld/prelude';
import { Tld } from '@tld/r-core';

import {
    NumberOptions,
    NumberResolved,
    PluralCategory,
    ResolvedNumberFormatOptions,
    ResolvedPluralRulesOptions,
} from '..';

export const resolveNumber = (o?: NumberOptions): (<M>(tld: Tld<M>) => NumberResolved) => tld => {
    // No options, defaults ↓
    if (!o) return resolveNumber({})(tld);

    if (isString(o)) {
        if (o === 'decimal' || o === 'percent') return resolveNumber({ style: o })(tld);
        if (o === 'cardinal' || o === 'ordinal') return resolveNumber({ type: o })(tld);

        return resolveNumber({ style: 'currency', currency: o })(tld);
    }

    if (isFunction(o)) return resolveNumber({ transform: o })(tld);

    // Imply `style: 'currency'` if currency is specified ↓
    if (o.currency && o.style !== 'currency') return resolveNumber({ ...o, style: 'currency' })(tld);

    return where2(
        new Intl.NumberFormat((tld.tags as unknown) as string[], o),
        new Intl.PluralRules((tld.tags as unknown) as string[], o),
        (numberFormat, pluralSelect): NumberResolved => {
            return {
                // Defaults ↓
                localeMatcher: 'lookup',
                transform: identity,

                // Native ↓
                ...((numberFormat.resolvedOptions() as unknown) as ResolvedNumberFormatOptions),
                ...((pluralSelect.resolvedOptions() as unknown) as ResolvedPluralRulesOptions),

                // Original ↓
                ...o,

                // Functions ↓
                f: n => numberFormat.format(n),
                s: n => pluralSelect.select(n) as PluralCategory,
            };
        },
    );
};
