import { Tld } from '@tld/r-core';
import { createDiffs, isOutOfBounds, resolveTime, selectUnit, TimeOptions, TimeResolved, Wrapper } from '..';

export const formatTime = ([a, b = new Date()]: [Date, Date?], o?: TimeOptions) => (tld: Tld<any>) => {
    return new Wrapper<[Date, Date], TimeOptions, TimeResolved>(tld, [a, b], o, resolveTime, ([a, b], r) => {
        const diffs = createDiffs(a, b);

        // Format as absolute datetime ↓
        if (isOutOfBounds((a as any) - (b as any), diffs, r)) return r.f(a);

        // Format as relative datetime with automatically selected unit ↓
        if (r.unit === 'auto') return selectUnit(diffs, r.r);

        // Format as relative datetime with explicit unit ↓
        return r.r(diffs.get(r.unit)!, r.unit);
    });
};
