import { RecordTimeOptions, RelativeTimeUnit, ShorthandTimeOptions } from './Time';

export const createOptionsForTime = (style: 'full' | 'long' | 'medium' | 'short') => {
    if (style === 'short') return timeShort;
    if (style === 'medium') return timeMedium;
    if (style === 'long') return timeLong;

    return timeFull;
};

export const createOptionsForDate = (style: 'full' | 'long' | 'medium' | 'short') => {
    if (style === 'short') return dateShort;
    if (style === 'medium') return dateMedium;
    if (style === 'long') return dateLong;

    return dateFull;
};

export const createOptionsForShorthand = (s: Exclude<ShorthandTimeOptions, undefined>): RecordTimeOptions => {
    if (['second', 'minute', 'hour', 'day', 'week', 'month', 'quarter', 'year', 'auto'].includes(s)) {
        return { unit: s as RelativeTimeUnit };
    }

    if (['full', 'long', 'medium', 'short'].includes(s)) {
        return {
            timeStyle: s as 'full' | 'long' | 'medium' | 'short',
            dateStyle: s as 'full' | 'long' | 'medium' | 'short',
        };
    }

    const [span, style] = s.split('-');

    if (span === 'time') return { timeStyle: style as 'full' | 'long' | 'medium' | 'short' };

    return { dateStyle: style as 'full' | 'long' | 'medium' | 'short' };
};

// region Supplemental
const timeShort: RecordTimeOptions = {
    second: undefined,
    minute: 'numeric',
    hour: 'numeric',
    timeZoneName: undefined,
};

const timeMedium: RecordTimeOptions = {
    ...timeShort,
    second: 'numeric',
};

const timeLong: RecordTimeOptions = {
    ...timeMedium,
    timeZoneName: 'short',
};

const timeFull: RecordTimeOptions = {
    ...timeMedium,
    timeZoneName: 'long',
};

const dateShort: RecordTimeOptions = {
    day: 'numeric',
    weekday: undefined,
    month: 'numeric',
    year: 'numeric',
};

const dateMedium: RecordTimeOptions = {
    ...dateShort,
    month: 'short',
};

const dateLong: RecordTimeOptions = {
    ...dateShort,
    month: 'long',
};

const dateFull: RecordTimeOptions = {
    ...dateLong,
    weekday: 'long',
};
// endregion
