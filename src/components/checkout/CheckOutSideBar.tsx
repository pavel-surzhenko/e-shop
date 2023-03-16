import { ShoppingBasket, Delete, Remove, Add } from '@mui/icons-material'
import {
    Box,
    Typography,
    Paper,
    CardMedia,
    IconButton,
    Divider,
    TextField,
    Button,
} from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../redux/actions'
import { getCart } from '../../redux/selectors'
import { CheckOutSideBarItem } from './CheckOutSideBarItem'
import { PromoCodeForm } from './PromoCodeForm'

export const CheckOutSideBar: React.FC = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(getCart)

    const totalPrice = cartItems
        .reduce((total, item) => total + item.count * item.price, 0)
        .toFixed(2)  

    return (
        <Paper elevation={3} sx={{ flex: '0 1 40%', p: '10px', ml: '20px' }}>
            <Box
                display='flex'
                justifyContent='space-between'
                color='primary.main'
            >
                <Box display='flex' alignItems='center'>
                    <ShoppingBasket sx={{ mr: '10px' }} />
                    <Typography variant='h5'>Cart ({cartItems.length})</Typography>
                </Box>
                <Typography variant='h5'>${totalPrice}</Typography>
            </Box>
            <CheckOutSideBarItem />
            <PromoCodeForm />
            <Divider />
            <Box display='flex' justifyContent='space-between' mb='7px'>
                <Typography variant='body2'>Subtotal</Typography>
                <Typography variant='body2'>${totalPrice}</Typography>
            </Box>
            <Box display='flex' justifyContent='space-between' mb='7px'>
                <Typography variant='body2'>Discount</Typography>
                <Typography variant='body2'>$0</Typography>
            </Box>
            <Box display='flex' justifyContent='space-between' mb='7px'>
                <Typography variant='subtitle2'>Total</Typography>
                <Typography variant='subtitle2'>${totalPrice}</Typography>
            </Box>
        </Paper>
    )
}
