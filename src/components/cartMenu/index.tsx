import styled from '@emotion/styled'
import { Add, Close, Remove } from '@mui/icons-material'
import {
    Box,
    Button,
    Divider,
    Drawer,
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

    const totalPrice = cart.reduce(
        (total, item) => total + item.count * item.price,
        0
    )

    const itemsJSX = cart.map((item) => (
        <>
            <FlexBox padding='15px 0'>
                <Box flex='1 1 40%'>
                    <img
                        alt={item.title}
                        width='123px'
                        height='164px'
                        src={item.image}
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
        </>
    ))

    return (
        <Drawer
            anchor='right'
            open={isCartOpen}
            onClose={() => dispatch(cartActions.setIsCartOpen())}
        >
            <Box
                position='fixed'
                right='0'
                bottom='0'
                width='max(400px, 30%)'
                height='100%'
                bgcolor='white'
            >
                <Box padding='30px' overflow='auto' height='100%'>
                    <FlexBox mb='15px'>
                        <Typography variant='h3'>Shopping bag</Typography>
                        <IconButton
                            onClick={() =>
                                dispatch(cartActions.setIsCartOpen())
                            }
                        >
                            <Close />
                        </IconButton>
                    </FlexBox>

                    <Box>{itemsJSX}</Box>
                    <Box m='20px 0'>
                        <FlexBox m='20px 0'>
                            <Typography fontWeight='bold'>SUBTOTAL</Typography>
                            <Typography fontWeight='bold'>
                                ${totalPrice}
                            </Typography>
                        </FlexBox>
                        <Button
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
            </Box>
        </Drawer>
    )
}
