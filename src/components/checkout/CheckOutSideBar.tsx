import { ShoppingBasket } from '@mui/icons-material'
import { Box, Typography, Paper, Divider } from '@mui/material'

import { useSelector } from 'react-redux'
import { getCart } from '../../redux/selectors'
import { CheckOutSideBarItem } from './CheckOutSideBarItem'
import { PromoCodeForm } from './PromoCodeForm'

export const CheckOutSideBar: React.FC = () => {
    const cartItems = useSelector(getCart)

    const totalPrice = cartItems
        .reduce((total, item) => total + item.count * item.price, 0)
        .toFixed(2)

    return (
        <Paper
            elevation={3}
            sx={{
                flex: '0 1 40%',
                p: '30px 20px',
                ml: { xs: '0', md: '20px' },
            }}
        >
            <Box
                display='flex'
                justifyContent='space-between'
                color='primary.main'
                mb='15px'
            >
                <Box display='flex' alignItems='center'>
                    <ShoppingBasket sx={{ mr: '10px' }} />
                    <Typography variant='h5'>
                        Cart ({cartItems.length})
                    </Typography>
                </Box>
                <Typography variant='h5'>${totalPrice}</Typography>
            </Box>
            <CheckOutSideBarItem />
            <PromoCodeForm />
            <Divider sx={{ mb: '10px' }} />
            <Box display='flex' justifyContent='space-between' mb='7px'>
                <Typography fontWeight='400' variant='h6'>
                    Subtotal
                </Typography>
                <Typography fontWeight='400' variant='h6'>
                    ${totalPrice}
                </Typography>
            </Box>
            <Box display='flex' justifyContent='space-between' mb='7px'>
                <Typography fontWeight='400' variant='h6'>
                    Discount
                </Typography>
                <Typography fontWeight='400' variant='h6'>
                    $0
                </Typography>
            </Box>
            <Box display='flex' justifyContent='space-between' mb='7px'>
                <Typography fontWeight='500' variant='h5'>
                    Total
                </Typography>
                <Typography fontWeight='500' variant='h5'>
                    ${totalPrice}
                </Typography>
            </Box>
        </Paper>
    )
}
