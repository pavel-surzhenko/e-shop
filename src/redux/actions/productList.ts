/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../../api"
import { IProductCard } from "../../components/card"
import { AppThunk } from "../init/store"
import { productListTypes } from "../types"
import { authActions } from "./auth"

export const productListActions = Object.freeze({
    setItemId: (itemId: string) => {
        return {
            type: productListTypes.SET_SELECTED_ITEM,
            payload: itemId
        }
    },

    startFetching: () => {
        return {
            type: productListTypes.START_FETCHING,
        }
    },

    stopFetching: () => {
        return {
            type: productListTypes.STOP_FETCHING,
        }
    },

    fetchTask: (items: IProductCard[]) => {
        return {
            type: productListTypes.FETCH_ITEMS,
            payload: items,
        }
    },

    fetchTaskAsync: (): AppThunk => async (dispatch) => {
        try {
            dispatch(productListActions.startFetching())
            const items = await api.carts.getCarts()
            dispatch(productListActions.fetchTask(items))
        } catch (error: any) {
            const { message } = error;
            dispatch(authActions.setError(message))
        } finally {
            dispatch(productListActions.stopFetching());
        }
    }
})