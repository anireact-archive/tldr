import { Tld } from '../Tld/Tld';
import { Msg, MsgId } from './Msg';
import { postprocessMsg } from './postprocessMsg';

export const translateMsg = <M>(id: MsgId, params: any[], fallback = id as Msg<M>) => (tld: Tld<M>) => {
    if (tld.dict.has(id)) {
        return postprocessMsg(tld.dict.get(id), params, id, fallback);
    }

    return postprocessMsg(fallback, params, id);
};
