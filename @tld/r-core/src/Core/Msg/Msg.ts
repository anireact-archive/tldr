declare const MsgId: unique symbol; // eslint-disable-line init-declarations
export type MsgId = string & { [MsgId]: typeof MsgId };

export type MsgIds = ReadonlyArray<MsgId>;

export type Msg<M> = StaticMsg<M> | DynamicMsg<M>;

export type StaticMsg<M> = M | String | string | number | boolean | null | undefined;
export type DynamicMsg<M> = (...args: any[]) => StaticMsg<M>;
