import { Tld } from '@tld/r-core';
import { ReactNode } from 'react';

export const params = new WeakMap<object, (tld: Tld<any>) => ReactNode>();
