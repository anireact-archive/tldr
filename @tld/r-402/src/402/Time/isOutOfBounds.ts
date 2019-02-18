import { NativeRelativeTimeUnit, TimeResolved } from '..';

export const isOutOfBounds = (
    s: number,
    diffs: ReadonlyMap<NativeRelativeTimeUnit, number>,
    { upperUnit, upperValue, lowerUnit, lowerValue }: TimeResolved,
) => {
    if (s >= 0) {
        return diffs.get(upperUnit)! >= upperValue;
    } else if (s <= 0) {
        return diffs.get(lowerUnit)! <= lowerValue;
    }

    return false;
};
