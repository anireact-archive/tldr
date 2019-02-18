import { promises } from 'fs';
import { resolve, dirname } from 'upath';

import { terser } from 'rollup-plugin-terser';
import { compress } from 'brotli';
import babel from 'rollup-plugin-babel';
import gzip from 'rollup-plugin-gzip';

const { stat } = promises;

const extensions = ['.tsx', '.ts', '.mjs', '.jsx', '.js', '.json'];

// eslint-disable-next-line import/no-default-export
export default {
    external: importee => {
        return importee === 'react' || importee.startsWith('core-js') || importee.startsWith('@babel');
    },
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
        terser(),
        gzip(),
        gzip({
            customCompression: content => compress(Buffer.from(content), { mode: 1 }),
            fileName: '.br',
        }),
        babel({
            extensions,
            runtimeHelpers: true,
        }),
        {
            resolveId(importee, importer) {
                if (!importer || !importee) return null;

                const dir = dirname(importer);

                const r = async (importee, importer) => {
                    if (importee.startsWith('@tld/')) return r(resolve(__dirname, importee, 'src'));

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
