import { isString } from '@tld/prelude';
import { MsgId } from '@tld/r-core';
import { ReactElement } from 'react';
import { tagFallback } from './tagFallback';
import { translate } from './translate';

export function tl(id: string): (ss: TemplateStringsArray, ...params: any[]) => ReactElement<unknown>;
export function tl(id: string, a: any, ...params: any[]): ReactElement<unknown>;
export function tl(ss: TemplateStringsArray, ...params: any[]): ReactElement<unknown>;

// eslint-disable-next-line func-style
export function tl(a: any, ...b: any[]): any {
    if (isString(a)) {
        if (b.length === 0) {
            return (c: any, ...d: any[]) => {
                return translate(a as MsgId, d, tagFallback(c));
            };
        }

        return translate(a as MsgId, b, a);
    }

    return translate(a.join('{}') as MsgId, b, tagFallback(a));
}
