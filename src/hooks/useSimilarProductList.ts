import { useQuery } from "react-query";
import { api } from "../api";
import { IProductCard } from "../components/card";

export const useSimilarProductList = (category: string): SimilarProductListReturn => {
    const { data, isFetched } = useQuery<IProductCard>(['itemsByCategory', category], () => api.carts.getCartsById(id), { retry: false })

    return {
        data: data as IProductCard || {},
        isFetched
    }
};

type SimilarProductListReturn = {
    data: IProductCard
    isFetched: boolean
}