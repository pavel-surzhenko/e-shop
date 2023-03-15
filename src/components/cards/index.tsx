/* eslint-disable no-constant-condition */
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
    Grid,
    ToggleButtonGroup,
    ToggleButton,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
    Box,
} from '@mui/material'

import { ProductCard, IProductCard } from '../card'
import { getItemsProduct } from '../../redux/selectors'
import { loadingLayoutJSX } from '../loadingLayout'

export const ProductCardList: React.FC = () => {
    const [category, setCategory] = useState('all')
    const [carts, setCarts] = useState<IProductCard[]>([])
    const [filter, setFilter] = useState('')

    const items = useSelector(getItemsProduct)

    useEffect(() => {
        setCarts([...items])
    }, [items])

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newCategory: string | null
    ) => {
        setFilter('')
        if (newCategory !== null) {
            setCategory(newCategory)
            setCarts(items.filter((item) => item.category === newCategory))
            if (newCategory === 'all') {
                setCarts(items.concat([]))
            }
        }
    }

    const handleChangeFilter = (event: SelectChangeEvent) => {
        setFilter(event.target.value)
        if (event.target.value === 'priceDown') {
            const sortItems = carts.sort(
                (item1, item2) => item1.price - item2.price
            )
            setCarts(sortItems)
        } else if (event.target.value === 'priceUp') {
            const sortItems = carts.sort(
                (item1, item2) => item2.price - item1.price
            )
            setCarts(sortItems)
        } else if (event.target.value === 'rating') {
            const sortItems = carts.sort(
                (item1, item2) => item2.rating.rate - item1.rating.rate
            )
            setCarts(sortItems)
        }
    }

    const cardsJSX: JSX.Element[] = carts.map((cart) => (
        <ProductCard key={cart.id} {...cart} />
    ))

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: { xs: 'column', sm: 'row' },
                }}
            >
                <ToggleButtonGroup
                    fullWidth
                    size='small'
                    color='info'
                    value={category}
                    exclusive
                    onChange={handleChange}
                    aria-label='Platform'
                    sx={{ mb: '20px', mr: '20px' }}
                >
                    <ToggleButton value='all'>All</ToggleButton>
                    <ToggleButton value={`men's clothing`}>Men`s</ToggleButton>
                    <ToggleButton value={`women's clothing`}>
                        Women
                    </ToggleButton>
                    <ToggleButton value='jewelery'>Jewelry</ToggleButton>
                    <ToggleButton value='electronics'>Electronics</ToggleButton>
                </ToggleButtonGroup>
                <FormControl
                    sx={{ minWidth: '100px', mb: '20px' }}
                    size='small'
                >
                    <InputLabel id='filter'>filter</InputLabel>
                    <Select
                        autoWidth
                        labelId='filter'
                        value={filter}
                        label='price'
                        onChange={handleChangeFilter}
                        sx={{ color: 'primary.main' }}
                    >
                        <MenuItem
                            sx={{ color: 'primary.main' }}
                            value='priceDown'
                        >
                            Price ↓
                        </MenuItem>
                        <MenuItem
                            sx={{ color: 'primary.main' }}
                            value='priceUp'
                        >
                            Price ↑
                        </MenuItem>
                        <MenuItem sx={{ color: 'primary.main' }} value='rating'>
                            Rating
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Grid container spacing={2}>
                {carts.length ? cardsJSX : loadingLayoutJSX}
            </Grid>
        </>
    )
}
