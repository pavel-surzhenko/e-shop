import styled from '@emotion/styled'
import { Add, Close, Remove } from '@mui/icons-material'
import {
    Box,
    Button,
    Divider,
    SwipeableDrawer,
    IconButton,
    Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cartActions } from '../../redux/actions'
import { getCart, setIsCartOpen } from '../../redux/selectors'

const FlexBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CartMenu: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector(getCart)
    const isCartOpen = useSelector(setIsCartOpen)

    const totalPrice = cart
        .reduce((total, item) => total + item.count * item.price, 0)
        .toFixed(2)

    const itemsJSX = cart.map((item) => (
        <Box key={item.id}>
            <FlexBox padding='15px 0' key={item.id} gap='10px'>
                <Box
                    flex='1 1 40%'
                    onClick={() => {
                        navigate(`/item/${item.id}`)
                        dispatch(cartActions.setIsCartOpen())
                    }}
                    sx={{ cursor: 'pointer' }}
                >
                    <img
                        alt={item.title}
                        width='123px'
                        height='164px'
                        src={item.image}
                        style={{objectFit: 'contain',
                        maxWidth: '100%'}}
                    />
                </Box>
                <Box flex='1 1 60%'>
                    <FlexBox mb='5px'>
                        <Typography fontWeight='bold'>{item.title}</Typography>
                        <IconButton
                            onClick={() =>
                                dispatch(cartActions.removeFromCart(item.id))
                            }
                        >
                            <Close />
                        </IconButton>
                    </FlexBox>
                    <FlexBox m='15px 0'>
                        <Box
                            display='flex'
                            alignItems='center'
                            border='1.5px solid primary'
                        >
                            <IconButton
                                onClick={() =>
                                    dispatch(cartActions.decreaseCount(item.id))
                                }
                            >
                                <Remove />
                            </IconButton>
                            <Typography>{item.count}</Typography>
                            <IconButton
                                onClick={() =>
                                    dispatch(cartActions.increaseCount(item.id))
                                }
                            >
                                <Add />
                            </IconButton>
                        </Box>
                        <Typography fontWeight='bold'>${item.price}</Typography>
                    </FlexBox>
                </Box>
            </FlexBox>
            <Divider />
        </Box>
    ))

    return (
        <SwipeableDrawer
            anchor='right'
            open={isCartOpen}
            onOpen={() => dispatch(cartActions.setIsCartOpen())}
            onClose={() => dispatch(cartActions.setIsCartOpen())}
        >
            <Box padding='30px' overflow='auto' height='100%' sx={{width: {xs: '100%', sm: '400px'}}}>
                <FlexBox mb='15px'>
                    <Typography variant='h4'>Shopping bag</Typography>
                    <IconButton
                        onClick={() => dispatch(cartActions.setIsCartOpen())}
                    >
                        <Close />
                    </IconButton>
                </FlexBox>

                <Box>{itemsJSX}</Box>
                <Box m='20px 0'>
                    <FlexBox m='20px 0'>
                        <Typography fontWeight='bold' variant='h6'>
                            TOTAL
                        </Typography>
                        <Typography fontWeight='bold' variant='h6'>
                            ${totalPrice}
                        </Typography>
                    </FlexBox>
                    <Button
                        disabled={!cart.length}
                        color='primary'
                        variant='contained'
                        sx={{
                            borderRadius: 0,
                            minWidth: '100%',
                            padding: '20px 40px',
                            m: '20px 0',
                        }}
                        onClick={() => {
                            navigate('/checkout')
                            dispatch(cartActions.setIsCartOpen())
                        }}
                    >
                        CHECKOUT
                    </Button>
                </Box>
            </Box>
        </SwipeableDrawer>
    )
}
