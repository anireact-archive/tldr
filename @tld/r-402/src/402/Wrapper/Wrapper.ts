import { identity } from '@anireact/prelude';
import { Tld } from '@tld/r-core';
import { Format, Options, Resolve, Resolved } from '../Abstract/Abstract';

export class Wrapper<V = any, O extends Options = any, R extends Resolved = any> extends String {
    readonly tld: Tld<any>;
    readonly value: V;
    readonly options: O | undefined;
    readonly resolved: R;

    readonly resolve: Resolve<O, R>;
    readonly format: Format<V, R>;

    constructor(tld: Tld<any>, v: V, o: O | undefined, resolve: Resolve<O, R>, format = (v: V, r: R) => r.f(v)) {
        const resolved = resolve(o)(tld);

        super(format(v, resolved));

        this.tld = tld;
        this.value = v;
        this.options = o;
        this.resolved = resolved;
        this.resolve = resolve;
        this.format = format;
    }

    map(f: (v: V) => V, o?: O) {
        const { tld, resolve } = this;

        return new Wrapper<V, O, R>(
            tld,
            f(this.value),
            ({
                ...this.resolved,
                ...resolve(o)(tld),
            } as unknown) as O,
            resolve,
            this.format,
        );
    }

    reformat(o?: O) {
        return this.map(identity, o);
    }
}
