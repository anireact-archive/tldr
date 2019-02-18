export type Maybe<A> = Just<A> | Nothing;
export type Just<A> = [A];
export type Nothing = '' | 0 | false | null | undefined | void;

export const mapMaybe = <A, B>(a: Maybe<A>, f: (a: A) => B): Maybe<B> => a && [f(a[0])];
export const chainMaybe = <A, B>(a: Maybe<A>, f: (a: A) => Maybe<B>): Maybe<B> => a && f(a[0]);
export const apMaybe = <A, B>(a: Maybe<A>, f: Maybe<(a: A) => B>): Maybe<B> => a && mapMaybe(f, f => f(a[0]));

export const lift2Maybe = <A, B, C>(f: (a: A, b: B) => C) => (a: Maybe<A>, b: Maybe<B>): Maybe<C> =>
    apMaybe(b, mapMaybe(a, a => (b: B) => f(a, b)));

export const altMaybe = <A>(...as: Maybe<A>[]): Maybe<A> => {
    for (const a of as) if (a) return a;

    return undefined;
};

export const maybeL = <A, B>(a: Maybe<A>, f: (a: A) => B, g: () => B): B => (a ? f(a[0]) : g());
export const maybe_ = <A>(a: Maybe<A>, f: () => A): A => (a ? a[0] : f());
export const maybe = <A, B>(a: Maybe<A>, f: (a: A) => B, b: B): B => (a ? f(a[0]) : b);
