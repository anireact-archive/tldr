import { CollatorOptions, createCollator } from '@tld/r-402';
import { useContext } from 'react';
import { TldrContext } from './TldrContext';

export const useCollator = (o?: CollatorOptions) => {
    return createCollator(o)(useContext(TldrContext));
};
