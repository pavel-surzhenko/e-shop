import { Paper, StepContent, StepLabel, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

export const PaymentStep: React.FC = () => {
    return (
        <Paper
            variant='outlined'
            sx={{ p: '15px', backgroundColor: grey[100] }}
        >
            <StepLabel
                sx={{
                    '& .MuiStepLabel-label': { fontSize: '20px' },
                }}
            >
                Payment
            </StepLabel>
            <StepContent>
                <Typography variant='h6' align='left'>
                    Credit card
                </Typography>
            </StepContent>
        </Paper>
    )
}
