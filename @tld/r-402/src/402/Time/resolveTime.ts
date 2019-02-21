import { abs, identity, isFunction, isString, max, min } from '@anireact/prelude';
import { Tld } from '@tld/r-core';

import {
    createOptionsForDate,
    createOptionsForShorthand,
    createOptionsForTime,
    ResolvedDateTimeFormatOptions,
    ResolvedRelativeTimeFormatOptions,
    TimeOptions,
    TimeResolved,
} from '..';

export const resolveTime = (o?: TimeOptions, t = false, d = false): (<M>(tld: Tld<M>) => TimeResolved) => tld => {
    // No options, defaults ↓
    if (!o) return resolveTime({})(tld);
    if (isFunction(o)) return resolveTime({ transform: o })(tld);
    if (isString(o)) return resolveTime(createOptionsForShorthand(o))(tld);

    if (!t && o.timeStyle) return resolveTime({ ...o, ...createOptionsForTime(o.timeStyle) }, true, d)(tld);
    if (!d && o.dateStyle) return resolveTime({ ...o, ...createOptionsForDate(o.dateStyle) }, t, true)(tld);

    const dtFormat = new Intl.DateTimeFormat((tld.tags as unknown) as string[], o);
    const rtFormat = new (Intl as any).RelativeTimeFormat((tld.tags as unknown) as string[], o);

    return {
        // Defaults ↓
        localeMatcher: 'lookup',
        unit: 'auto',
        transform: identity,

        // Native ↓
        ...((dtFormat.resolvedOptions() as unknown) as ResolvedDateTimeFormatOptions),
        ...((rtFormat.resolvedOptions() as unknown) as ResolvedRelativeTimeFormatOptions),

        // Original ↓
        ...o,

        // Resolve bounds ↓
        upperValue: o.unit ? Infinity : max(abs(o.upperValue!), abs(o.maximumValue!), 0),
        upperUnit: o.upperUnit || o.maximumUnit || 'day',
        lowerValue: o.unit ? -Infinity : min(-abs(o.lowerValue!), -abs(o.maximumValue!), 0),
        lowerUnit: o.lowerUnit || o.maximumUnit || 'day',

        // Functions ↓
        f: d => dtFormat.format(d),
        r: (diff, unit) => rtFormat.format(diff, unit),
    };
};
