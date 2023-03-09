import { AnyAction } from 'redux'
import { IProductCard } from '../../components/card'
import { cartTypes } from '../types'

const initialState: CartState = {
    isCartOpen: false,
    cart: [],
    items: []
}

export const cartReducer = (state = initialState, action: AnyAction): CartState => {
    switch (action.type) {
        case cartTypes.SET_ITEMS: {
            return {
                ...state,
                items: action?.payload
            }
        }

        case cartTypes.ADD_TO_CART: {
            return {
                ...state,
                cart: [...state.cart, action?.payload.item]
            }
        }

        case cartTypes.REMOVE_FROM_CART: {
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action?.payload.id)
            }
        }

        case cartTypes.INCREASE_COUNT: {
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if (item.id === action?.payload.id) {
                        return { ...item, count: item.count + 1 }
                    }
                    return item
                })
            }
        }

        case cartTypes.DECREASE_COUNT: {
            return {
                ...state,
                cart: state.cart.map((item) => {
                    if (item.id === action?.payload.id && item.count > 1) {
                        return { ...item, count: item.count - 1 }
                    }
                    return item
                })
            }
        }

        case cartTypes.SET_IS_CART_OPEN: {
            return {
                ...state,
                isCartOpen: !state.isCartOpen
            }
        }
        default: {
            return state
        }
    }
}

type CartState = {
    isCartOpen: boolean
    cart: IProductCard[]
    items: IProductCard[]
}