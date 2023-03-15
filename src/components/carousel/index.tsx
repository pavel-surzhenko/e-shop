import { useNavigate } from 'react-router-dom'
import { NavigateBefore, NavigateNext } from '@mui/icons-material'
import { Box, CardMedia, IconButton, Typography } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { useSelector } from 'react-redux'
import { getItemsProduct } from '../../redux/selectors'

export const MainCarousel: React.FC = () => {
    const items = useSelector(getItemsProduct)
    const navigate = useNavigate()

    const photosJSX = items?.map((item) => (
        <Box
            sx={{ mb: '15px', overflow: 'hidden' }}
            key={`carousel-image-${item.id}`}
        >
            <CardMedia
                image={item.image}
                sx={{
                    width: { xs: '150px', md: '350px' },
                    height: { xs: '200px', md: '400px' },
                    m: '0 auto',
                    backgroundSize: 'contain',
                    cursor: 'pointer',
                }}
                onClick={() => navigate(`/item/${item.id}`)}
            />
        </Box>
    ))

    return (
        <Box m='25px auto'>
            <Carousel
                swipeable
                transitionTime={1000}
                autoPlay
                interval={3000}
                infiniteLoop
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(onClickHandler) => (
                    <IconButton
                        onClick={onClickHandler}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '0',
                            color: 'black',
                            p: '5px',
                            zIndex: '10',
                        }}
                    >
                        <NavigateBefore color='primary' sx={{ fontSize: 40 }} />
                    </IconButton>
                )}
                renderArrowNext={(onClickHandler) => (
                    <IconButton
                        onClick={onClickHandler}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            right: '0',
                            color: 'black',
                            p: '5px',
                            zIndex: '10',
                        }}
                    >
                        <NavigateNext color='primary' sx={{ fontSize: 40 }} />
                    </IconButton>
                )}
            >
                {photosJSX}
            </Carousel>
            <Typography align='center' variant='h3' color='primary'>
                Our products
            </Typography>
        </Box>
    )
}
