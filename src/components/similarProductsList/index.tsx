import { Box } from '@mui/material'
import { useSimilarProductList } from '../../hooks'
import { ProductCard } from '../card'

export const SimilarProductList: React.FC<{ category: string }> = (props) => {
    const { category } = props

    const {data, isFetched } = useSimilarProductList(category)
    const similarProductJSX = data.map(item=> (
        <ProductCard key={item.id} {...item} />
    ))
    
    return <Box display='flex' m='25px auto'>
        {similarProductJSX}
    </Box>
}
