import { prepend, Strings, uniq } from '@anireact/prelude';
import { createTld, RawLib, switchTl, TlId, TlIds } from '@tld/r-core';
import React, { ReactNode, useState } from 'react';
import { TldrContext } from './TldrContext';

export interface Tldr {
    readonly id?: string;
    readonly lib?: RawLib<ReactNode>;
    readonly fallback?: Strings;
    readonly children?: ReactNode;
}

export const Tldr = ({ id = '', lib = [], fallback = [], children }: Tldr) => {
    const [context, setState] = useState<TldrContext>({
        ...createTld(id as TlId, (uniq(prepend(id, fallback)) as unknown) as TlIds, lib),
        switchTl: id => {
            // eslint-disable-next-line promise/catch-or-return, promise/prefer-await-to-then
            Promise.resolve().then(() => {
                setState({
                    ...context,
                    ...switchTl(context, id),
                });
            });
        },
    });

    return <TldrContext.Provider value={context}>{children}</TldrContext.Provider>;
};

Tldr.displayName = 'Tldr';
