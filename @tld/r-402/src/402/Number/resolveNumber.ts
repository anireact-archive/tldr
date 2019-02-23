import { identity, isFunction, isString } from '@anireact/prelude';
import { Tld } from '@tld/r-core';

import {
    NumberOptions,
    NumberResolved,
    PluralCategory,
    ResolvedNumberFormatOptions,
    ResolvedPluralRulesOptions,
} from './Number';

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

    const numberFormat = new Intl.NumberFormat((tld.tags as unknown) as string[], o);
    const pluralRules = new Intl.PluralRules((tld.tags as unknown) as string[], o);

    return {
        // Defaults ↓
        localeMatcher: 'lookup',
        transform: identity,

        // Native ↓
        ...((numberFormat.resolvedOptions() as unknown) as ResolvedNumberFormatOptions),
        ...((pluralRules.resolvedOptions() as unknown) as ResolvedPluralRulesOptions),

        // Original ↓
        ...o,

        // Functions ↓
        f: n => numberFormat.format(n),
        s: n => pluralRules.select(n) as PluralCategory,
    };
};
