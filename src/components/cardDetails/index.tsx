import { ShoppingCart } from '@mui/icons-material'
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Rating,
    CardActions,
    Button,
} from '@mui/material'
import { useParams } from 'react-router-dom'
import { useItemDetails } from '../../hooks'

export const CardDetails = () => {
    const { itemId } = useParams()

    const { data, isFetched } = useItemDetails(itemId as string)

    return (
        <Box>
            <Card
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                }}
            >
                <CardMedia
                    component='img'
                    image={data?.image}
                    alt={data?.title}
                    sx={{
                        maxWidth: '300px',
                        height: '400px',
                        objectFit: 'contain',
                        margin: '0 auto',
                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexBasis: '50%',
                    }}
                >
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography
                            textAlign='center'
                            gutterBottom
                            component='div'
                            variant='h5'
                        >
                            {data?.title}
                        </Typography>
                        <Typography
                            textAlign='center'
                            gutterBottom
                            variant='subtitle1'
                            color='text.secondary'
                            component='div'
                        >
                            {data?.description}
                        </Typography>
                        <Rating
                            name='read-only'
                            value={data?.rating?.rate ?? 1}
                            readOnly
                        />
                        <CardActions sx={{ justifyContent: 'space-between' }}>
                            <Typography variant='h6'>{data?.price}$</Typography>
                            <Button
                                size='medium'
                                color='primary'
                                variant='contained'
                                endIcon={<ShoppingCart />}
                            >
                                Buy
                            </Button>
                        </CardActions>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    )
}
