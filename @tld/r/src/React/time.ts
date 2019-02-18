import { formatTime, TimeOptions } from '@tld/r-402';
import { wrapParam } from './wrapParam';

export const time = ([a, b = new Date()]: [Date, Date?], o?: TimeOptions) => wrapParam(formatTime([a, b], o));
