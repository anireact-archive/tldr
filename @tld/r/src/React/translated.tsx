import React, { FunctionComponent, ReactNode } from 'react';
import { TldrContext } from './TldrContext';

export const translated = <Props extends object>(
    component: (props: Props, context: TldrContext) => ReactNode,
): FunctionComponent<Props> => (props: Props) => (
    <TldrContext.Consumer>{context => component(props, context)}</TldrContext.Consumer>
);
