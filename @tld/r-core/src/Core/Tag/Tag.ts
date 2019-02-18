declare const Tag: unique symbol; // eslint-disable-line init-declarations
export type Tag = string & { [Tag]: typeof Tag };

export type Tags = ReadonlyArray<Tag>;
