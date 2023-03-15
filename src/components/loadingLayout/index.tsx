import { Grid, Skeleton, Box } from '@mui/material'

export const loadingLayoutJSX: JSX.Element[] = Array.from(
    { length: 4 },
    (_, i) => (
        <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <Box
                sx={{
                    maxWidth: 350,
                    padding: '10px',
                    height: '100%',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Skeleton
                    animation='wave'
                    variant='rectangular'
                    width='100%'
                    height={150}
                    sx={{ mb: '15px' }}
                />
                <Skeleton
                    animation='wave'
                    variant='rectangular'
                    width='100%'
                    height={50}
                    sx={{ mb: '15px' }}
                />
                <Skeleton
                    animation='wave'
                    variant='rectangular'
                    width='40%'
                    height={50}
                    sx={{ mb: '15px' }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Skeleton
                        animation='wave'
                        variant='rectangular'
                        width='30%'
                        height={50}
                        sx={{ mb: '15px' }}
                    />
                    <Skeleton
                        animation='wave'
                        variant='rectangular'
                        width='30%'
                        height={50}
                        sx={{ mb: '15px' }}
                    />
                </Box>
            </Box>
        </Grid>
    )
)
