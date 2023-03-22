import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import { Box, Container, Link, Stack, Typography } from '@mui/material'

export const Footer: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: '#1976d2', height: '64px' }}>
            <Container
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <Typography color='#fff'>
                    ©2023. E-Shop. All rights reserved.
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Link href='https://twitter.com/'>
                        <Twitter sx={{ color: '#fff' }} />
                    </Link>
                    <Link href='https://instagram.com/'>
                        <Instagram sx={{ color: '#fff' }} />
                    </Link>
                    <Link href='https://facebook.com/'>
                        <Facebook sx={{ color: '#fff' }} />
                    </Link>
                </Stack>
            </Container>
        </Box>
    )
}
