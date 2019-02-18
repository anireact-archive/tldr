export const uniq = <M>(xs: ReadonlyArray<M>) => toArray(new Set(xs));
export const toArray = <M>(a: Iterable<M>) => [...a];
