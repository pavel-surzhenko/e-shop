import { IProductCart } from "../reducers"
import { cartTypes } from "../types"

export const cartActions = Object.freeze({
    setItems: (items: IProductCart[]) => {
        return {
            type: cartTypes.SET_ITEMS,
            payload: items
        }
    },

    addToCart: (item: IProductCart) => {
        return {
            type: cartTypes.ADD_TO_CART,
            payload: { item }
        }
    },

    removeFromCart: (id: string) => {
        return {
            type: cartTypes.REMOVE_FROM_CART,
            payload: {id}
        }
    },

    increaseCount: (id: string) => {
        return {
            type: cartTypes.INCREASE_COUNT,
            payload: {id}
        }
    },

    decreaseCount: (id: string) => {
        return {
            type: cartTypes.DECREASE_COUNT,
            payload: {id}
        }
    },

    setIsCartOpen: () => {
        return {
            type: cartTypes.SET_IS_CART_OPEN
        }
    }

})