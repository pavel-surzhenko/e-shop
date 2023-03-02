import { useEffect, useState } from "react";
import { api } from "../../api/api"
import { ICart } from "../cart";

export const Carts: React.FC = () => {
    const [carts, setCarts] = useState<ICart[]>([])
    
    useEffect(()=> {
        const fetchCarts = async () => {
            const data = await api.carts.getCarts()
            setCarts(data)
        }
        fetchCarts()
    }, [])
    


    console.log(carts);
    

    return (
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h2>title</h2>
                <div>price</div>
            </div>
        </div>
    )
}
