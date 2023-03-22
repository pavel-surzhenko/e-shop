import { AxiosError } from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { api } from "../api";
import { IProductCard } from "../components/card";
import { authActions } from "../redux/actions";

export const useSimilarProductList = (category: string): SimilarProductListReturn => {
    const { data, isFetched, error } = useQuery<IProductCard[], AxiosError>(['itemsByCategory', category], () => api.carts.getCartsCategory(category), { retry: false })

    const dispatch = useDispatch()

    useEffect(() => {
        if (error) {
            dispatch(authActions.setError(error?.message))
        }
    }, [error, dispatch])


    return {
        data: data as IProductCard[] || [],
        isFetched
    }
};

type SimilarProductListReturn = {
    data: IProductCard[]
    isFetched: boolean
}