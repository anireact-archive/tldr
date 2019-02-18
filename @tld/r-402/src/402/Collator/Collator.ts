import { Tag } from '@tld/r-core';

export interface CollatorOptions {
    readonly localeMatcher?: 'basic' | 'best fit';
    readonly usage?: 'sort' | 'search';
    readonly sensitivity?: 'base' | 'accent' | 'case' | 'variant';
    readonly ignorePunctuation?: boolean;
    readonly numeric?: boolean;
    readonly caseFirst?: 'upper' | 'lower' | 'false';
}

export interface CollatorResolved {
    readonly locale: Tag;
    readonly collation: string;
    readonly usage: 'sort' | 'search';
    readonly sensitivity: 'base' | 'accent' | 'case' | 'variant';
    readonly ignorePunctuation: boolean;
    readonly numeric: 'upper' | 'lower' | 'false';
    readonly caseFirst: string;
}
