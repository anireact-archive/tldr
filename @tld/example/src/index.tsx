import { tl, string, time, Tldr, translated, number } from '@tld/r';
import React, { useState } from 'react';
import { render } from 'react-dom';
import * as lib from './lib';

const formatPerson = (name: string, gender: string) => string(gender, { replace: name });
const formatMonthAndDay = (date: Date | number) => time([new Date(date)], { month: 'long', day: 'numeric' });

// eslint-disable-next-line max-lines-per-function
const Demo = () => {
    const [hostName, setHostName] = useState('Alice');
    const [hostGender, setHostGender] = useState('feminine');
    const [firstGuestName, setFirstGuestName] = useState('Bob');
    const [guests, setTotalGuests] = useState(1337);
    const [dateOffset, setDateOffset] = useState(8);

    const host = formatPerson(hostName, hostGender);
    const guest = formatPerson(firstGuestName, 'masculine');
    const date = formatMonthAndDay(Date.now() + 3600000 * 24 * dateOffset);

    return (
        <>
            <div>
                <label>
                    {tl`Host name: `}
                    <input type={'text'} value={hostName} onChange={e => setHostName(e.target.value)} />
                </label>
            </div>
            <div>
                {tl`Host gender: `}
                <label>
                    <input
                        type={'radio'}
                        name={'gender'}
                        checked={hostGender === 'feminine'}
                        onChange={() => setHostGender('feminine')}
                    />
                    {tl`Feminine`}
                </label>
                <label>
                    <input
                        type={'radio'}
                        name={'gender'}
                        checked={hostGender === 'masculine'}
                        onChange={() => setHostGender('masculine')}
                    />
                    {tl`Masculine`}
                </label>
                <label>
                    <input
                        type={'radio'}
                        name={'gender'}
                        checked={hostGender === 'neuter'}
                        onChange={() => setHostGender('neuter')}
                    />
                    {tl`Neuter`}
                </label>
            </div>
            <div>
                {tl`First guest name: `}
                <input type={'text'} value={firstGuestName} onChange={e => setFirstGuestName(e.target.value)} />
            </div>
            <div>
                {tl`Total guests: `}
                <button onClick={() => setTotalGuests(0)}>{number(0)}</button>
                <button onClick={() => setTotalGuests(1)}>{number(1)}</button>
                <button onClick={() => setTotalGuests(2)}>{number(2)}</button>
                <button onClick={() => setTotalGuests(1488)}>{number(1337)}</button>
                <button onClick={() => setTotalGuests(Math.max(0, guests - 1))}>-</button>
                <button onClick={() => setTotalGuests(guests + 1)}>+</button>
            </div>
            <div>
                {tl`Party date offset (in days): `}
                <button onClick={() => setDateOffset(0)}>{number(0)}</button>
                <button onClick={() => setDateOffset(-8)}>{number(-8)}</button>
                <button onClick={() => setDateOffset(8)}>{number(8)}</button>
                <button onClick={() => setDateOffset(dateOffset - 1)}>-</button>
                <button onClick={() => setDateOffset(dateOffset + 1)}>+</button>
            </div>
            <p>{tl`${host} invited ${guest} and ${guests} other guests to their party on ${date}.`}</p>
        </>
    );
};

const Switcher = translated(({}, { id, lib, switchTl }) => (
    <ul>
        {[...lib.values()].map(tl => (
            <li key={tl.id} onClick={() => switchTl(tl.id)}>
                {tl.id === id ? '* ' : ''} {tl.name}
            </li>
        ))}
    </ul>
));

render(
    <Tldr id={'en'} fallback={['en']} lib={lib}>
        <Switcher />
        <Demo />
        <style jsx global>{/* language=CSS */ `
            html {
                font-family: 'Noto Sans', 'Noto Sans CJK JP', sans-serif;
            }
        `}</style>
    </Tldr>,
    document.querySelector('#root'),
);
