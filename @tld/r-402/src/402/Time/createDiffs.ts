import {
    diffDays,
    diffHours,
    diffMinutes,
    diffMonths,
    diffQuarters,
    diffSeconds,
    diffWeeks,
    diffYears,
} from '@anireact/prelude';

import { NativeRelativeTimeUnit } from './Time';

export const createDiffs = (a: Date, b: Date): ReadonlyMap<NativeRelativeTimeUnit, number> => {
    return new Map<NativeRelativeTimeUnit, number>([
        ['second', diffSeconds(a, b)],
        ['minute', diffMinutes(a, b)],
        ['hour', diffHours(a, b)],
        ['day', diffDays(a, b)],
        ['week', diffWeeks(a, b)],
        ['month', diffMonths(a, b)],
        ['quarter', diffQuarters(a, b)],
        ['year', diffYears(a, b)],
    ]);
};
