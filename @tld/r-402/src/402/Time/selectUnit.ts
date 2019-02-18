import { toArray } from '@tld/prelude';
import { NativeRelativeTimeUnit } from '..';

export const selectUnit = (
    map: ReadonlyMap<NativeRelativeTimeUnit, number>,
    frt: (diff: number, unit: NativeRelativeTimeUnit) => string,
) => {
    for (const [unit, diff] of toArray(map).reverse()) {
        if (unit !== 'quarter' && diff !== 0) {
            return frt(diff, unit);
        }
    }

    return frt(0, 'day');
};
