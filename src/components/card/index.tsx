import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Rating,
    Typography,
} from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { productListActions } from '../../redux/actions'

export const ProductCard: React.FC<IProductCard> = (props) => {
    const { image, title, category, price, rating, id } = props
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch(productListActions.setItemId(id))
    }

    return (
        <Grid item xs={12} md={4} lg={3}>
            <Card
                sx={{
                    maxWidth: 350,
                    padding: '10px',
                    height: '100%',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                }}
                onClick={handleClick}
            >
                <Typography
                    gutterBottom
                    variant='body2'
                    color='text.secondary'
                    sx={{ textAlign: 'right' }}
                >
                    {category}
                </Typography>
                <CardMedia
                    component='img'
                    alt={title}
                    height='150'
                    image={`${image}`}
                    sx={{ objectFit: 'contain', cursor:'pointer' }}
                    onClick={() => navigate(`/item/${id}`)}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                        onClick={() => navigate(`/item/${id}`)}
                        gutterBottom
                        variant='subtitle1'
                        component='div'
                        sx={{cursor: 'pointer'}}
                    >
                        {title}
                    </Typography>
                </CardContent>
                <Rating name='read-only' value={rating.rate} readOnly />
                <CardActions sx={{ justifyContent: 'space-between' }}>
                    <Typography variant='h6'>{price}$</Typography>
                    <Button
                        size='medium'
                        color='primary'
                        variant='contained'
                        endIcon={<ShoppingCart />}
                    >
                        Buy
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export interface IProductCard {
    id: string
    title: string
    price: number
    category: string
    description: string
    image: string
    rating: {
        count: number
        rate: number
    }
}
