import { Tld } from '@tld/r-core';
import React, { ReactNode } from 'react';
import { params } from './params';
import { TldrContext } from './TldrContext';

export const wrapParam = (format: (tld: Tld<any>) => ReactNode): ReactNode => {
    const consumer = <TldrContext.Consumer>{format}</TldrContext.Consumer>;

    params.set(consumer, format);

    return consumer;
};
