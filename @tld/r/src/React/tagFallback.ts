import { append, map, Strings } from '@anireact/prelude';

export const tagFallback = (ss: Strings) => (...params: any[]) => {
    return append(
        map(params, (reference, i) => {
            return `${ss[i]}${reference}`;
        }),
        ss[ss.length - 1],
    ).join('');
};
