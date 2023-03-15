import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'

import { useItemDetails } from '../hooks'
import { CardDetails, SimilarProductList } from '../components'

export const ProductDetailsPage: React.FC = () => {
    const dispatch = useDispatch()
    const { itemId } = useParams()

    const { data, isFetched } = useItemDetails(itemId as string)
    console.log(data)

    return (
        <Container maxWidth='xl' sx={{ margin: '25px auto', flexGrow: '1' }}>
            <CardDetails data={data} isFetched={isFetched} />
            <SimilarProductList category={data?.category} />
        </Container>
    )
}
