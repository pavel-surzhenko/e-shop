import { Box, Card, CardMedia } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useItemDetails } from '../../hooks'

export const CardDetails = () => {
    const { itemId } = useParams()

    const { data } = useItemDetails(itemId as string)

    return (
        <Box>
            <Card>
                <CardMedia component='img' image={data?.image} alt='' />
                21414
            </Card>
        </Box>
    )
}
