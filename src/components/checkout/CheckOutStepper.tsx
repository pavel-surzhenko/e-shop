import {
    Box,
    Button,
    Paper,
    Step,
    StepConnector,
    StepContent,
    StepLabel,
    Stepper,
    TextField,
    Typography,
} from '@mui/material'
import { useState } from 'react'
import { EmailStep } from './EmailStep'
import { ShippingStep } from './ShippingStep'

export const CheckOutStepper: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = () =>
        setActiveStep((prevActiveStep) => prevActiveStep + 1)

    const handleBack = () =>
        setActiveStep((prevActiveStep) => prevActiveStep - 1)

    return (
        <Paper elevation={3} sx={{ flex: '0 1 60%', p: '25px' }}>
            <Typography textAlign='center' variant='h5' gutterBottom>
                Please enter all details for order
            </Typography>
            <Stepper
                connector={<StepConnector sx={{ visibility: 'hidden' }} />}
                activeStep={activeStep}
                orientation='vertical'
            >
                <Step>
                    <EmailStep />
                </Step>
                <Step>
                    <ShippingStep />
                </Step>
                <Step>
                    <Paper variant='outlined' sx={{ p: '15px' }}>
                        <StepLabel
                            sx={{
                                '& .MuiStepLabel-label': { fontSize: '20px' },
                            }}
                        >
                            Payment
                        </StepLabel>
                        <StepContent>234234</StepContent>
                    </Paper>
                </Step>
            </Stepper>
            <div>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                    Back
                </Button>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={handleNext}
                >
                    Next
                </Button>
            </div>
        </Paper>
    )
}
