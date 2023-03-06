import { useQuery } from "react-query";
import { api } from "../api";
import { IProductCard } from "../components/card";

export const useItemDetails = (id: string) => {
    const { data, isFetched } = useQuery<IProductCard>(['itemById', id], () => api.carts.getCartsById(id), { retry: false })

    return {
        data: data as IProductCard || {},
        isFetched
    }
};