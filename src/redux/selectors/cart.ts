import { IProductCard } from "../../components/card";
import { RootState } from "../init/store";

export const getItems = (state: RootState): IProductCard[] => {
    return state.cart.items
};

export const setIsCartOpen = (state: RootState): boolean  => {
    return state.cart.isCartOpen
};

export const getCart = (state: RootState): IProductCard[]  => {
    return state.cart.cart
};