export const sign = (x = 0 as unknown): -1 | 0 | 1 => Math.sign(x as number) as -1 | 0 | 1;
export const abs = (x = 0 as unknown): number => Math.abs(x as number);
export const max = (...xs: unknown[]): number => Math.max(...(xs as ReadonlyArray<number>));
export const min = (...xs: unknown[]): number => Math.min(...(xs as ReadonlyArray<number>));
export const truncate = (x = 0 as unknown) => ((x as number) > 0 ? Math.floor(x as number) : Math.ceil(x as number));
