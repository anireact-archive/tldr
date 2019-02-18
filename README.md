# Tld/R

> The translation daemon for the modern web.

## Tl;dr

```bash
yarn add @tld/r
```

```typescript
import { tl, Tldr } from '@tld/r';

import * as lib from './lib';

const App = () => (
    <Tldr id='en' lib={lib}>
        {tl`${host} invited ${guest} and ${guests} other guests to their party on ${date}.`}
    </Tldr>
);
```

```typescript
```

## Features

-   Unified API for `Intl.{NumberFormat,PluralRules}`,
    `Intl.{Date,Relative}TimeFormat`.
-   Plain JS/JSX syntax only.
-   No parsing and compiling at runtime.
-   Super-easy API.
-   Zero-config: no additional build steps, no tooling configuration.
-   Compact (2.8 KiB<sup>[\[1\]](#fn1)<a name="fn1_"></a></sup>).
-   Framework-agnostic (0.7 KiB core, 1.8 KiB formatting utils).
-   Seamless integration with React.
-   JSX in translations.
-   Statically typed.
-   Zero-dependency (except ES requirements; see below).

## Caveats and limitations

-   Does not include polyfills.
-   Does not provide `> 0.25%` support.
-   Only supports positional message params, not named.
-   No Flow support.

## React requirements

-   Tld/R for React requires the React v16.8 “The One With Hooks” and higher.

## ES requirements

-   🚧 Draft; requires manually loaded polyfill.
-   🤬 Requires manually loaded polyfill.
-   🤟 Covered by Babel/core-js.

| Feature                                                       | Status |
| :------------------------------------------------------------ | :----: |
| `Intl.RelativeTimeFormat`                                     |   🚧   |
| `Intl`, `Intl.PluralRules`                                    |   🤬   |
| `Set`, `Map`                                                  |   🤟   |
| `WeakMap`                                                     |   🤟   |
| `Object.{entries,values}`                                     |   🤟   |
| `Array.prototype.flatMap`                                     |   🤟   |
| Object/array/params/args destructuring/spread/rest/shorthands |   🤟   |
| Arrow functions                                               |   🤟   |
| `Promise`                                                     |   🤟   |
| `for...of` loops                                              |   🤟   |
| Computed properties                                           |   🤟   |
| Tagged template literals                                      |   🤟   |

## Footnotes

1.  [↑](#fn1_)<a name="fn1"></a> Targeting browsers not supporting required ES
    features may significantly increase the bundle size.

## License

MIT
