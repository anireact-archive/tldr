import { useContext } from 'react';
import { TldrContext } from './TldrContext';

export const useTldr = () => {
    return useContext(TldrContext);
};
