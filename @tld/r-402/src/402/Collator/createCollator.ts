import { where1 } from '@tld/prelude';
import { Tld } from '@tld/r-core';
import { CollatorOptions } from './Collator';

export const createCollator = (o?: CollatorOptions) => (tld: Tld<any>) => {
    return where1(new Intl.Collator((tld.tags as unknown) as string[], o), collator => {
        return (a: string, b: string) => {
            return collator.compare(a, b);
        };
    });
};
