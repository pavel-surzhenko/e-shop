import { useEffect, useState } from "react";
import { api } from "../../api/api"
import { Cart, ICart } from "../cart";

export const Carts: React.FC = () => {
    const [carts, setCarts] = useState<ICart[]>([])
    
    useEffect(()=> {
        const fetchCarts = async () => {
            const data = await api.carts.getCarts()
            setCarts(data)
        }
        fetchCarts()
    }, [])
    
    const cartsJSX = carts.map((cart) => (
        <Cart key={cart.id} {...cart} />
    ))

    console.log(carts);
    

    return (
        <div>
            {cartsJSX}
        </div>
    )
}
