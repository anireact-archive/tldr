import { TlId } from '../Tl/Tl';
import { Tld } from './Tld';
import { updateDict } from './updateDict';

export const switchTl = <M>(tld: Tld<M>, id: TlId): Tld<M> => {
    return updateDict({
        ...tld,
        id,
    });
};
