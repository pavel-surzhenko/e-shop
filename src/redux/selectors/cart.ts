import { RootState } from "../init/store";
import { IProductCart } from "../reducers";

export const getItems = (state: RootState): IProductCart[] => {
    return state.cart.items
};

export const setIsCartOpen = (state: RootState): boolean  => {
    return state.cart.isCartOpen
};

export const getCart = (state: RootState): IProductCart[]  => {
    return state.cart.cart
};