import { Msg, MsgId, translateMsg } from '@tld/r-core';
import { ReactNode } from 'react';
import { preprocessParam } from './preprocessParam';
import { wrapParam } from './wrapParam';

export const translate = (id: MsgId, params: any[], fallback = id as Msg<ReactNode>) => {
    return wrapParam(tld => {
        return translateMsg(id, params.map(preprocessParam(tld)), fallback)(tld);
    });
};
