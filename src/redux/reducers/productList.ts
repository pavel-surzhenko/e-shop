import { AnyAction } from 'redux'
import { IProductCard } from '../../components/card'
import { productListTypes } from "../types"

const initialState : ProductListState = {
    id: '',
    items: [],
    isFetching: false,
}

export const productListReducer = (state = initialState, action: AnyAction): ProductListState => {
    switch (action.type) {
        case productListTypes.START_FETCHING: {
            return {
                ...state,
                isFetching: true,
            }
        }

        case productListTypes.STOP_FETCHING: {
            return {
                ...state,
                isFetching: false,
            }
        }

        case productListTypes.FETCH_ITEMS: {
            return {
                ...state,
                isFetching: true,
                items: action?.payload
            }
        }

        case productListTypes.SET_SELECTED_ITEM: {
            return {
                ...state,
                id: action?.payload
            }
        }

        default: {
            return state
        }
    }
}

type ProductListState = {
    id: string;
    items: IProductCard[];
    isFetching: boolean;
}