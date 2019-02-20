import { promises } from 'fs';
import { resolve, dirname } from 'upath';

import babel from 'rollup-plugin-babel';

const { stat } = promises;

const extensions = ['.tsx', '.ts', '.mjs', '.jsx', '.js', '.json'];

// eslint-disable-next-line import/no-default-export
export default {
    external: [/^[^.]/u],
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: true,
        },
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            sourcemap: true,
        },
    ],
    plugins: [
        babel({
            extensions,
            runtimeHelpers: true,
        }),
        {
            resolveId(importee, importer) {
                if (!importer || !importee) return null;

                const dir = dirname(importer);

                // eslint-disable-next-line max-statements
                const r = async (importee, importer) => {
                    const name = resolve(dir, importee);

                    for (const ext of extensions) {
                        try {
                            const stats = await stat(`${name}${ext}`);

                            if (stats.isFile() || stats.isSymbolicLink() || stats.isFIFO()) {
                                return `${name}${ext}`;
                            }
                        } catch {}
                    }

                    try {
                        if ((await stat(name)).isDirectory()) {
                            return r(resolve(dir, importee, 'index'), importer);
                        }
                    } catch {}

                    return null;
                };

                return r(importee, importer);
            },
        },
    ],
};
