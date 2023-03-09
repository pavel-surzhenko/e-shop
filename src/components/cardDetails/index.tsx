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
    Skeleton,
} from '@mui/material'
import { useParams } from 'react-router-dom'
import { useItemDetails } from '../../hooks'

export const CardDetails:React.FC = () => {
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
                {isFetched ? (
                    <CardMedia
                        component='img'
                        image={data?.image}
                        alt={data?.title}
                        sx={{
                            maxWidth: '300px',
                            height: '400px',
                            objectFit: 'contain',
                            margin: '20px auto',
                        }}
                    />
                ) : (
                    <Skeleton
                        animation='wave'
                        variant='rectangular'
                        width={300}
                        height={400}
                        sx={{m:'20px auto'}}
                    />
                )}

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexBasis: '50%',
                    }}
                >
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        {isFetched ? (
                            <Typography
                                textAlign='center'
                                gutterBottom
                                component='div'
                                variant='h5'
                            >
                                {data?.title}
                            </Typography>
                        ) : (
                            <Skeleton
                                animation='wave'
                                variant='rectangular'
                                width={500}
                                height={50}
                                sx={{ mb: '15px' }}
                            />
                        )}
                        {isFetched ? (
                            <Typography
                                textAlign='center'
                                gutterBottom
                                variant='subtitle1'
                                color='text.secondary'
                                component='div'
                            >
                                {data?.description}
                            </Typography>
                        ) : (
                            <Skeleton
                                animation='wave'
                                variant='rectangular'
                                width={500}
                                height={200}
                                sx={{ mb: '15px' }}
                            />
                        )}
                        {isFetched ? (
                            <Rating
                                name='read-only'
                                value={data?.rating?.rate ?? 1}
                                readOnly
                            />
                        ) : (
                            <Skeleton
                                animation='wave'
                                variant='rectangular'
                                width={200}
                                height={50}
                            />
                        )}
                        <CardActions sx={{ justifyContent: 'space-between' }}>
                            {isFetched ? (
                                <Typography variant='h6'>
                                    {data?.price}$
                                </Typography>
                            ) : (
                                <Skeleton
                                    animation='wave'
                                    variant='rectangular'
                                    width={150}
                                    height={50}
                                    sx={{ml: '-8px'}}
                                />
                            )}
                            {isFetched ? (
                                <Button
                                    size='medium'
                                    color='primary'
                                    variant='contained'
                                    endIcon={<ShoppingCart />}
                                >
                                    Buy
                                </Button>
                            ) : (
                                <Skeleton
                                    animation='wave'
                                    variant='rectangular'
                                    width={150}
                                    height={50}
                                />
                            )}
                        </CardActions>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    )
}
