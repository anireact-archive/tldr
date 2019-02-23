import { StaticMsg, Tag, Tags } from '@tld/r-core';
import { RecordOptions, Resolved, Table } from '../Abstract/Abstract';
import { Currency } from './Currency';

// region Main
export type NumberOptions = RecordNumberOptions | FunctionNumberOptions | ShorthandNumberOptions | undefined;

export interface RecordNumberOptions extends RecordOptions {
    readonly localeMatcher?: 'lookup' | 'best fit';
    readonly useGrouping?: boolean;
    readonly style?: 'currency' | 'decimal' | 'percent';
    readonly currency?: Currency;
    readonly currencyDisplay?: 'symbol' | 'code' | 'name';
    readonly minimumIntegerDigits?: Digits121;
    readonly minimumFractionDigits?: Digits020;
    readonly maximumFractionDigits?: Digits020;
    readonly minimumSignificantDigits?: Digits121;
    readonly maximumSignificantDigits?: Digits121;

    readonly type?: 'cardinal' | 'ordinal';
}
export interface FunctionNumberOptions {
    (s: string, ts: Tags): string;
}

export type ShorthandNumberOptions = Currency | 'decimal' | 'percent' | 'cardinal' | 'ordinal' | undefined;

export interface NumberResolved extends Resolved {
    readonly localeMatcher: 'lookup' | 'best fit';
    readonly numberingSystem: string; // TODO
    readonly useGrouping: boolean;
    readonly style: 'currency' | 'decimal' | 'percent';
    readonly currency?: Currency;
    readonly currencyDisplay?: 'symbol' | 'code' | 'name';
    readonly minimumIntegerDigits?: Digits121;
    readonly minimumFractionDigits?: Digits020;
    readonly maximumFractionDigits?: Digits020;
    readonly minimumSignificantDigits?: Digits121;
    readonly maximumSignificantDigits?: Digits121;

    readonly type: 'cardinal' | 'ordinal';
    readonly pluralCategories: ReadonlyArray<PluralCategory>;

    readonly f: (n: number) => string;
    readonly s: (n: number) => PluralCategory;
}

export interface NumberTable<M> extends Table<M> {
    readonly zero?: StaticMsg<M>;
    readonly one?: StaticMsg<M>;
    readonly two?: StaticMsg<M>;
    readonly few?: StaticMsg<M>;
    readonly many?: StaticMsg<M>;
    readonly [match: number]: StaticMsg<M>;
}
// endregion

// region Native
export interface ResolvedNumberFormatOptions {
    readonly locale: Tag;
    readonly numberingSystem: string; // TODO
    readonly useGrouping: boolean;
    readonly style: 'currency' | 'decimal' | 'percent';
    readonly currency?: Currency;
    readonly currencyDisplay?: 'symbol' | 'code' | 'name';
    readonly minimumIntegerDigits?: Digits121;
    readonly minimumFractionDigits?: Digits020;
    readonly maximumFractionDigits?: Digits020;
    readonly minimumSignificantDigits?: Digits121;
    readonly maximumSignificantDigits?: Digits121;
}

export interface ResolvedPluralRulesOptions {
    readonly locale: Tag;
    readonly type: 'cardinal' | 'ordinal';
    readonly pluralCategories: ReadonlyArray<PluralCategory>;
}
// endregion

// region Supplemental
export type Digits020 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
export type Digits121 = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21;

export type PluralCategory = 'zero' | 'one' | 'two' | 'few' | 'many' | 'other';
// endregion
