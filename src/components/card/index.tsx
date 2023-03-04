import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'

export const ProductCard: React.FC<IProductCard> = (props) => {
    const { image, title, description, category, price } = props

    return (
        <Card sx={{ maxWidth: 350, padding: '10px' }}>
            <CardActionArea>
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
                    alt='product'
                    height='150'
                    image={`${image}`}
                    sx={{ objectFit: 'contain' }}
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {title}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Typography variant='h6'>{price}$</Typography>
                <Button
                    size='medium'
                    color='primary'
                    variant='contained'
                    endIcon={<ShoppingCart />}
                >
                    {' '}
                    Buy
                </Button>
            </CardActions>
        </Card>
    )
}

export interface IProductCard {
    id: number
    title: string
    price: string
    category: string
    description: string
    image: string
    rating: {
        count: number
        rate: number
    }
}
