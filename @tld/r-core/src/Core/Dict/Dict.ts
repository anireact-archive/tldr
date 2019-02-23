import { Msg, MsgId } from '../Msg/Msg';

export interface Dict<M> extends ReadonlyMap<MsgId, Msg<M>> {}

export type RawDict<M> = Record<string, Msg<M>>;
