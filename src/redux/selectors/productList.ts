import { IProductCard } from '../../components/card';
import { RootState } from '../init/store';

export const getItemsProduct = (state: RootState): IProductCard[] => {
    return state.productList.items
};
