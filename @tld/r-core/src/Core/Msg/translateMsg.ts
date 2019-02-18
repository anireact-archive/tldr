import { Msg, MsgId, postprocessMsg, Tld } from '..';

export const translateMsg = <M>(id: MsgId, params: any[], fallback = id as Msg<M>) => (tld: Tld<M>) => {
    if (tld.dict.has(id)) {
        return postprocessMsg(tld.dict.get(id), params, id, fallback);
    }

    return postprocessMsg(fallback, params, id);
};
