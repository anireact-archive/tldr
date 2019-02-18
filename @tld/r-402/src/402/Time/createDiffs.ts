import { abs, sign, truncate } from '@tld/prelude';
import { NativeRelativeTimeUnit } from '..';

export const createDiffs = (a: Date, b: Date): ReadonlyMap<NativeRelativeTimeUnit, number> => {
    const s = truncate(((a as any) - (b as any)) / 1000);

    const ad = resetDayToStart(a);
    const bd = resetDayToStart(b);

    const d = generic(
        a,
        b,
        truncate((ad.getTime() - getTimeZoneOffset(ad) - (bd.getTime() - getTimeZoneOffset(bd))) / 86400000),
        (d: Date) => {
            return d.getDate();
        },
        (d: Date, n: number) => {
            return d.setDate(n);
        },
    );

    const m = generic(a, b, (getY(a) - getY(b)) * 12 + getM(a) - getM(b), getM, (d: Date, n: number) => {
        return d.setMonth(n);
    });

    return new Map<NativeRelativeTimeUnit, number>([
        ['second', s],
        ['minute', truncate(s / 60)],
        ['hour', truncate(s / 3600)],
        ['day', d],
        ['week', truncate(d / 7)],
        ['month', m],
        ['quarter', truncate(m / 3)],
        [
            'year',
            generic(a, b, getY(a) - getY(b), getY, (d: Date, n: number) => {
                return d.setFullYear(n);
            }),
        ],
    ]);
};

// region Supplemental
const generic = (a: Date, b: Date, init: number, get: (d: Date) => number, set: (d: Date, n: number) => number) => {
    const diff = abs(init);
    const s = sign((a as any) - (b as any));
    const back = cloneDate(a);

    set(back, get(back) - s * diff);

    const adjust = sign((back as any) - (b as any)) === -s;

    return s * (diff - (adjust as any)) || 0;
};

const resetDayToStart = (a: Date) => {
    const back = cloneDate(a);

    back.setHours(0, 0, 0, 0);

    return back;
};

const getTimeZoneOffset = (a: Date) => {
    const back = cloneDate(a);
    const base = back.getTimezoneOffset();

    back.setSeconds(0, 0);

    const ms = back.getTime() % 60000;

    return base * 60000 + ms;
};

const getM = (d: Date) => {
    return d.getMonth();
};

const getY = (d: Date) => {
    return d.getFullYear();
};

const cloneDate = (d: Date) => {
    return new Date(d);
};
// endregion
