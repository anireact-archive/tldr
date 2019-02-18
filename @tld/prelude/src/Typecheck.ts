export const isString = (x: any): x is string => typeof x === 'string' || x instanceof String;
export const isNumber = (x: any): x is number => typeof x === 'number' || x instanceof Number;
export const isBoolean = (x: any): x is boolean => typeof x === 'boolean' || x instanceof Boolean;
export const isObject = (x: any): x is object => typeof x === 'object' && x !== null;
export const isFunction = (x: any): x is Function => typeof x === 'function';
export const isDate = (x: any): x is Date => isObject(x) && x instanceof Date;
export const isNone = (x: any): x is null | undefined | void => x === null || typeof x === 'undefined';
export const isMap = <K, V>(x: any): x is Map<K, V> => x instanceof Map;
export const isPromise = <A>(x: any): x is Promise<A> => x instanceof Promise;

export const isArray = <M>(x: any): x is ReadonlyArray<M> => Array.isArray(x);
export const isArrayOfType = <A, B extends A[]>(f: (x: any) => x is A, x: any): x is B => isArray(x) && x.every(f);

export const isTag = (ss: any, xs: any) =>
    Array.isArray(ss) &&
    Array.isArray(((ss as unknown) as TemplateStringsArray).raw) &&
    ss.length === ((ss as unknown) as TemplateStringsArray).raw.length &&
    Array.isArray(xs) &&
    xs.length === ss.length - 1;
