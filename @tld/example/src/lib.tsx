import { tl, RawTl, as, choice, plural, Wrapper } from '@tld/r';
import { ReactNode } from 'react';

const offset = (w: Wrapper, offset: number) => as<number>(w).map(x => x - offset);

export const en: RawTl<ReactNode> = {
    id: 'en',
    tags: ['en-us', 'en'],
    name: 'English',
    dict: {
        'to {} party': host =>
            choice(host, {
                feminine: 'to her party',
                masculine: 'to his party',
                other: 'to their party',
            }),

        'on {}': date => `on ${date} (${as<Date>(date).reformat({ unit: 'auto', numeric: 'auto' })})`,
        'and {} other guests': guests => `and ${offset(guests, 1)} other guests`,

        '{} invited {} and {} other guests to their party on {}.': (host, guest, guests, date) =>
            plural(guests, {
                0: tl`${host} did not invite anyone ${tl`to ${host} party`} ${tl`on ${date}`}.`,
                1: tl`${host} invited ${guest} ${tl`to ${host} party`} ${tl`on ${date}`}.`,
                2: tl`${host} invited ${guest} and one other guest ${tl`to ${host} party`} ${tl`on ${date}`}.`,
                other: tl`${host} invited ${guest} ${tl`and ${guests} other guests`} ${tl`to ${host} party`} ${tl`on ${date}`}.`,
            }),
    },
};

export const ja: RawTl<ReactNode> = {
    id: 'ja',
    tags: ['ja-u-nu-fullwide', 'ja'],
    name: '日本語',
    fallback: ['en'],
    dict: {
        '{}のパーティー': host =>
            choice(host, {
                feminine: '彼女のパーティー',
                masculine: '彼のパーティー',
                other: '自分のパーティー',
            }),

        '{}の': date => `${date}（${as<Date>(date).reformat({ unit: 'auto', numeric: 'auto' })}）`,
        '他の{}人': guests => `他の${offset(guests, 1)}人`,

        '{} invited {} and {} other guests to their party on {}.': (host, guest, guests, date) => {
            return plural(guests, {
                0: tl`${host}は${tl`${date}の`}${tl`${host}のパーティー`}にだれ一人として招かなかった。`,
                1: tl`${host}は${tl`${date}の`}${tl`${host}のパーティー`}に${guest}を招いた。`,
                2: tl`${host}は${tl`${date}の`}${tl`${host}のパーティー`}に${guest}と他の一人を招いた。`,
                other: tl`${host}は${tl`${date}の`}${tl`${host}のパーティー`}に${guest}と${tl`他の${guests}人`}を招いた。`,
            });
        },
    },
};
