import { Box, Grid, Typography } from '@mui/material'
import { useSimilarProductList } from '../../hooks'

import { ProductCard } from '../card'
import { loadingLayoutJSX } from '../loadingLayout'

export const SimilarProductList: React.FC<{ category: string; id: string }> = (
    props
) => {
    const { category, id } = props

    const { data, isFetched } = useSimilarProductList(category)
    const similarProductJSX = data
        .filter((item) => item.id !== id)
        .map((item) => <ProductCard key={item.id} {...item} />)

    return (
        <Box m='25px auto'>
            <Typography align='center' variant='h5' gutterBottom>
                Similar Products
            </Typography>
            <Grid container spacing={2}>
                {isFetched ? similarProductJSX : loadingLayoutJSX}
            </Grid>
        </Box>
    )
}
