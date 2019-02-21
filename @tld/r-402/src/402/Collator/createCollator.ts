import { Tld } from '@tld/r-core';
import { CollatorOptions } from './Collator';

export const createCollator = (o?: CollatorOptions) => (tld: Tld<any>) => (a: string, b: string) => {
    return a.localeCompare(b, (tld.tags as unknown) as string[], o);
};
