import { Tag, Tags } from '@tld/r-core';
import { RecordOptions, Resolved } from '../Abstract/Abstract';

// region Main
export type TimeOptions = RecordTimeOptions | FunctionTimeOptions | ShorthandTimeOptions | undefined;

export interface RecordTimeOptions extends RecordOptions {
    readonly localeMatcher?: 'lookup' | 'best fit';
    readonly formatMatcher?: 'basic' | 'best fit';
    readonly hour12?: boolean;
    readonly hourCycle?: 'hc11' | 'hc12' | 'hc23' | 'hc24';
    readonly timeZone?: string;
    readonly second?: '2-digit' | 'numeric';
    readonly minute?: '2-digit' | 'numeric';
    readonly hour?: '2-digit' | 'numeric';
    readonly day?: '2-digit' | 'numeric';
    readonly weekday?: 'narrow' | 'short' | 'long';
    readonly month?: 'narrow' | 'short' | 'long' | '2-digit' | 'numeric';
    readonly year?: '2-digit' | 'numeric';
    readonly era?: 'narrow' | 'short' | 'long';
    readonly timeZoneName?: 'short' | 'long';

    readonly timeStyle?: 'short' | 'medium' | 'long' | 'full';
    readonly dateStyle?: 'short' | 'medium' | 'long' | 'full';

    readonly numeric?: 'always' | 'auto';
    readonly style?: 'long' | 'short' | 'narrow';

    readonly unit?: RelativeTimeUnit;
    readonly maximumValue?: number;
    readonly maximumUnit?: NativeRelativeTimeUnit;
    readonly upperValue?: number;
    readonly upperUnit?: NativeRelativeTimeUnit;
    readonly lowerValue?: number;
    readonly lowerUnit?: NativeRelativeTimeUnit;
}

export interface FunctionTimeOptions {
    (s: string, ts: Tags): string;
}

export type ShorthandTimeOptions =
    | RelativeTimeUnit
    | 'time-short'
    | 'time-medium'
    | 'time-long'
    | 'time-full'
    | 'date-short'
    | 'date-medium'
    | 'date-long'
    | 'date-full'
    | 'short'
    | 'medium'
    | 'long'
    | 'full'
    | undefined;

export interface TimeResolved extends Resolved {
    readonly localeMatcher: 'lookup' | 'best fit';

    readonly calendar: string; // TODO.
    readonly numberingSystem: string; // TODO.
    readonly timeZone: string;
    readonly hour12?: boolean;
    readonly second?: '2-digit' | 'numeric';
    readonly minute?: '2-digit' | 'numeric';
    readonly hour?: '2-digit' | 'numeric';
    readonly day?: '2-digit' | 'numeric';
    readonly weekday?: 'narrow' | 'short' | 'long';
    readonly month?: 'narrow' | 'short' | 'long' | '2-digit' | 'numeric';
    readonly year?: '2-digit' | 'numeric';
    readonly era?: 'narrow' | 'short' | 'long';
    readonly timeZoneName?: 'short' | 'long';

    readonly timeStyle?: 'short' | 'medium' | 'long' | 'full';
    readonly dateStyle?: 'short' | 'medium' | 'long' | 'full';

    readonly numeric: 'always' | 'auto';
    readonly style: 'long' | 'short' | 'narrow';

    readonly unit: RelativeTimeUnit;
    readonly upperValue: number;
    readonly upperUnit: NativeRelativeTimeUnit;
    readonly lowerValue: number;
    readonly lowerUnit: NativeRelativeTimeUnit;

    readonly f: (d: Date) => string;
    readonly r: (diff: number, unit: NativeRelativeTimeUnit) => string;
}
// endregion

// region Native
export interface ResolvedDateTimeFormatOptions {
    readonly locale: Tag;
    readonly calendar: string; // TODO.
    readonly numberingSystem: string; // TODO.
    readonly timeZone: string;
    readonly hour12?: boolean;
    readonly second?: '2-digit' | 'numeric';
    readonly minute?: '2-digit' | 'numeric';
    readonly hour?: '2-digit' | 'numeric';
    readonly day?: '2-digit' | 'numeric';
    readonly weekday?: 'narrow' | 'short' | 'long';
    readonly month?: 'narrow' | 'short' | 'long' | '2-digit' | 'numeric';
    readonly year?: '2-digit' | 'numeric';
    readonly era?: 'narrow' | 'short' | 'long';
    readonly timeZoneName?: 'short' | 'long';
}

export interface ResolvedRelativeTimeFormatOptions {
    readonly locale: Tag;
    readonly numeric: 'always' | 'auto';
    readonly style: 'long' | 'short' | 'narrow';
}
// endregion

// region Supplemental
export type RelativeTimeUnit = NativeRelativeTimeUnit | 'auto';
export type NativeRelativeTimeUnit = 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year';
// endregion
