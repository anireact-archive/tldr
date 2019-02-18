export const where1 = <A, B>(a: A, f: (a: A) => B): B => f(a);
export const where2 = <A, B, C>(a: A, b: B, f: (a: A, b: B) => C): C => f(a, b);
export const where3 = <A, B, C, D>(a: A, b: B, c: C, f: (a: A, b: B, c: C) => D): D => f(a, b, c);
