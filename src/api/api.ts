// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import { IProductCard } from "../components/card";
import { ROOT_URL } from "./config";

export const api = {
    carts: {
        async getCarts(): Promise<IProductCard[]> {
            const { data } = await axios.get<IProductCard[]>(`${ROOT_URL}/products`)

            return data
        }
    }
};