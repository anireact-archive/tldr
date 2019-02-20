import { always, concat, foldR, getM, map, maybe } from '@anireact/prelude';
import { Dict, Lib, Msg, MsgId, Tl, TlId, TlIds, Tls } from '..';

export const toDict = <M>(Lib: Lib<M>, fallback: TlIds, id: TlId): Dict<M> => {
    return new Map(
        foldR(
            createLookupList(Lib, fallback, id),
            // Merge all dictionaries in list from right to left
            // (Messages from left dictionaries take priority) ↓
            (dict, tl) => {
                return concat(dict, tl.dict);
            },
            [] as ReadonlyArray<[MsgId, Msg<M>]>,
        ),
    );
};

const createLookupList = <M>(lib: Lib<M>, fallback: TlIds, id: TlId) => {
    // This list is mutable ↓
    const queue = idsToTls(lib, [id]);

    // As well as this set ↓
    const result = new Set(queue);

    if (queue.length > 0)
        do
            map(idsToTls(lib, queue.shift()!.fallback), tl => {
                if (!result.has(tl)) {
                    result.add(tl);
                    queue.push(tl);
                }

                return 0;
            });
        while (queue.length > 0);

    // Append fallback Tls ↓
    for (const Tl of idsToTls(lib, fallback)) {
        result.add(Tl);
    }

    return result;
};

const idsToTls = <M>(lib: Lib<M>, list: TlIds) => {
    return list.flatMap(id => {
        return maybe<Tl<M>, Tls<M> | Tl<M>>(
            // Get a Tl from map ↓
            getM(lib, id),

            // If a Tl with required identifier exists, add it ↓
            tl => {
                return tl;
            },

            // Otherwise, add an empty array ↓
            always([]),
        );
    });
};
