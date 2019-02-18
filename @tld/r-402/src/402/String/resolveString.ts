import { identity, isFunction, isNone, isString } from '@tld/prelude';
import { Tag, Tld } from '@tld/r-core';
import { StringOptions, StringResolved } from './String';

export const resolveString = (o?: StringOptions): (<M>(tld: Tld<M>) => StringResolved) => tld => {
    // No options, don’t format a string at all ↓
    if (isNone(o)) return resolveString({})(tld);
    if (isFunction(o)) return resolveString({ transform: o })(tld);
    if (isString(o)) return resolveString({ replace: o })(tld);

    return {
        locale: tld.tags[0] || getLocale(),
        transform: identity,
        ...o,

        f: s => (isNone(o.replace) ? s : o.replace),
    };
};

const getLocale = () => {
    try {
        return (navigator.languages[0] || navigator.language) as Tag;
    } catch (error) {
        const nf = new Intl.NumberFormat();

        return nf.resolvedOptions().locale as Tag;
    }
};
