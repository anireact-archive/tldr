import { Strings } from '@tld/prelude';

export const tagFallback = (ss: Strings) => (...params: any[]) => {
    return [
        ...params.map((reference, i) => {
            return `${ss[i]}${reference}`;
        }),
        ss[ss.length - 1],
    ].join('');
};
