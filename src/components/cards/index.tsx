import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { api } from '../../api/api'
import { ProductCard, IProductCard } from '../card'

export const ProductCardList: React.FC = () => {
    const [carts, setCarts] = useState<IProductCard[]>([])

    useEffect(() => {
        const fetchCarts = async () => {
            const data = await api.carts.getCarts()
            setCarts(data)
        }
        fetchCarts()
    }, [])

    const cardsJSX = carts.map((cart) => (
        <ProductCard key={cart.id} {...cart} />
    ))

    return (
        <Grid container spacing={2} >
            {cardsJSX}
        </Grid>
    )
}
