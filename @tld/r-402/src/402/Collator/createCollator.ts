import { w } from '@anireact/prelude';
import { Tld } from '@tld/r-core';
import { CollatorOptions } from './Collator';

export const createCollator = (o?: CollatorOptions) => (tld: Tld<any>) => {
    return w(collator => {
        return (a: string, b: string) => {
            return collator.compare(a, b);
        };
    }, new Intl.Collator((tld.tags as unknown) as string[], o));
};
