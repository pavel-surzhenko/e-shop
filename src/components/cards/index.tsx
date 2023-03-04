import { useEffect, useState } from 'react'
import { api } from '../../api/api'
import { ProductCard, IProductCard } from '../card'

export const Cards: React.FC = () => {
    const [carts, setCarts] = useState<IProductCard[]>([])

    useEffect(() => {
        const fetchCarts = async () => {
            const data = await api.carts.getCarts()
            setCarts(data)
        }
        fetchCarts()
    }, [])

    const cartsJSX = carts.map((cart) => <ProductCard key={cart.id} {...cart} />)

    console.log(carts)

    return <div>{cartsJSX}</div>
}
