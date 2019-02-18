import { Msg, MsgId } from '..';

export interface Dict<M> extends ReadonlyMap<MsgId, Msg<M>> {}

export type RawDict<M> = Record<string, Msg<M>>;
