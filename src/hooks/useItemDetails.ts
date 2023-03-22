import { AxiosError } from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { api } from "../api";
import { IProductCard } from "../components/card";
import { authActions } from "../redux/actions";

export const useItemDetails = (id: string): ItemDetailsReturn => {
    const { data, isFetched, error } = useQuery<IProductCard, AxiosError>(['itemById', id], () => api.carts.getCartsById(id), { retry: false })

    const dispatch = useDispatch()

    useEffect(() => {
        if (error) {
            dispatch(authActions.setError(error?.message))
        }
    }, [error, dispatch])


    return {
        data: data as IProductCard || {},
        isFetched
    }
};

type ItemDetailsReturn = {
    data: IProductCard
    isFetched: boolean
}
