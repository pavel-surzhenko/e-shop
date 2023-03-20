import { Container, Box, Button } from '@mui/material'
import { useState } from 'react'
import { CheckOutSideBar, CheckOutStepper } from '../components'

export const CheckOutPage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false)

    const setVisible = () => setIsVisible(!isVisible)

    return (
        <Container maxWidth='xl'>
            <Box
                sx={{
                    margin: '25px auto',
                    flexGrow: '1',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: { xs: 'column', md: 'row' },
                    gap: '15px',
                }}
            >
                <CheckOutStepper onComplete = {setVisible}/>
                <CheckOutSideBar />
            </Box>
            <Button
                fullWidth
                variant='contained'
                color='success'
                type='submit'
                size='large'
                sx={{
                    mb: '15px',
                    visibility: isVisible ? 'visible' : 'hidden',
                }}
            >
                Confirm order
            </Button>
        </Container>
    )
}
