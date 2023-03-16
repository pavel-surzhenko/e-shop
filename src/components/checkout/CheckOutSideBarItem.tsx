import { Delete, Remove, Add } from '@mui/icons-material'
import { Box, Typography, CardMedia, IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { cartActions } from '../../redux/actions'
import { getCart } from '../../redux/selectors'

export const CheckOutSideBarItem: React.FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cartItems = useSelector(getCart)

    const cartItemsJSX = cartItems.map((item) => (
        <Box display='flex' justifyContent='space-between'>
            <CardMedia
                component='img'
                alt={item.title}
                height='150'
                image={`${item.image}`}
                sx={{
                    objectFit: 'contain',
                    cursor: 'pointer',
                    flex: '0 0 30%',
                }}
                onClick={() => navigate(`/item/${item.id}`)}
            />
            <Box sx={{ flex: '0 1 70%' }}>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Typography variant='subtitle1'>{item.title}</Typography>
                    <IconButton
                        onClick={() =>
                            dispatch(cartActions.removeFromCart(item.id))
                        }
                    >
                        <Delete />
                    </IconButton>
                </Box>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='space-between'
                >
                    <Typography variant='subtitle1'>{item.price}</Typography>
                    <Box display='flex' alignItems='center'>
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
                </Box>
            </Box>
        </Box>
    ))

    return <Box>{cartItemsJSX}</Box>
}
