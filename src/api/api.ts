// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import { ICart } from "../components/cart";
import { ROOT_URL } from "./config";

export const api = {
    carts: {
        async getCarts(): Promise<ICart[]> {
            const { data } = await axios.get<ICart[]>(`${ROOT_URL}/products`)

            return data
        }
    }
};