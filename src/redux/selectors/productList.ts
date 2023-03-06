import { IProductCard } from '../../components/card';
import { RootState } from '../init/store';

export const getItems = (state: RootState): IProductCard[] => {
    return state.productList.items
};

export const getSelectedItem = (state: RootState): string => {
    return state.productList.id
};