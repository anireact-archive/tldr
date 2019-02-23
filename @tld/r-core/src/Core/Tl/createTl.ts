import { Tags } from '../Tag/Tag';
import { RawTl, Tl, TlIds } from './Tl';

export const createTl = <M>(raw: RawTl<M>): Tl<M> => {
    return {
        ...((raw as unknown) as Tl<M>),
        tags: (raw.tags || []) as Tags,
        fallback: ((raw.fallback || []) as unknown) as TlIds,
        dict: !raw.dict ? new Map() : new Map(Object.entries(raw.dict!)),
    };
};
