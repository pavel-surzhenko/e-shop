import {
    Paper,
    Step,
    StepConnector,
    Stepper,
    Typography,
} from '@mui/material'
import { useState } from 'react'
import { EmailStep } from './EmailStep'
import { PaymentStep } from './PaymentStep'
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
                    <EmailStep onStepCompleted={handleNext} />
                </Step>
                <Step>
                    <ShippingStep
                        onStepCompleted={handleNext}
                        onStepBack={handleBack}
                    />
                </Step>
                <Step>
                    <PaymentStep
                        onStepCompleted={handleNext}
                        onStepBack={handleBack}
                    />
                </Step>
            </Stepper>
        </Paper>
    )
}
