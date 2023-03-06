import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, ToggleButtonGroup, ToggleButton } from '@mui/material'
import { ProductCard, IProductCard } from '../card'
import { getItems } from '../../redux/selectors'
import { productListActions } from '../../redux/actions'

export const ProductCardList: React.FC = () => {
    const dispatch = useDispatch()

    const [carts, setCarts] = useState<IProductCard[]>([])
    const [category, setCategory] = useState('all')

    const handleChange = () => {}

    useEffect(() => {
        dispatch(productListActions.fetchTaskAsync())
    }, [])

    const items = useSelector(getItems)
    console.log(items)

    const cardsJSX = items.map((cart) => (
        <ProductCard key={cart.id} {...cart} />
    ))

    return (
        <>
            <ToggleButtonGroup
                size='small'
                color='info'
                value={category}
                exclusive
                onChange={handleChange}
                aria-label='Platform'
            >
                <ToggleButton value='all'>All</ToggleButton>
                <ToggleButton value={`men's clothing`}>Men`s</ToggleButton>
                <ToggleButton value={`women's clothing`}>Women</ToggleButton>
                <ToggleButton value='jewelery'>Jewelry</ToggleButton>
                <ToggleButton value='electronics'>Electronics</ToggleButton>
            </ToggleButtonGroup>
            <Grid container spacing={2}>
                {cardsJSX}
            </Grid>
        </>
    )
}
