import { createTld, Tld, TlId } from '@tld/r-core';
import { createContext, ReactNode } from 'react';

export interface TldrContext extends Tld<ReactNode> {
    readonly switchTl: (id: TlId) => unknown;
}

export const TldrContext = createContext<TldrContext>({
    ...createTld('' as TlId, [], []),
    switchTl: () => null,
    // TODO: `addTls`.
});

TldrContext.displayName = 'Tldr';
