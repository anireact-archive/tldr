import { Maybe } from './Maybe';

export const getMap = <K, V>(map: { get(key: K): V | undefined; has(key: K): boolean }, key: K): Maybe<V> => {
    if (map.has(key)) return [map.get(key)!];

    return false;
};
