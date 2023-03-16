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

export const CheckOutStepper: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [email, setEmail] = useState('')

    const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    const handleNext = () =>
        setActiveStep((prevActiveStep) => prevActiveStep + 1)

    const handleBack = () =>
        setActiveStep((prevActiveStep) => prevActiveStep - 1)

    return (
        <Paper elevation={3} sx={{ flex: '0 1 60%', p: '25px' }}>
            <Typography textAlign='center' variant='h4' gutterBottom>
                Please enter all details
            </Typography>
            <Stepper
                connector={<StepConnector sx={{ visibility: 'hidden' }} />}
                activeStep={activeStep}
                orientation='vertical'
            >
                <Step>
                    <Paper variant='outlined' sx={{ p: '15px' }}>
                        <StepLabel
                            sx={{
                                '& .MuiStepLabel-label': { fontSize: '20px' },
                            }}
                        >
                            Email
                        </StepLabel>
                        <StepContent>
                            <Box display='flex' m='15px 0'>
                                <TextField
                                    error={!isEmailValid()}
                                    type='email'
                                    id='outlined-basic'
                                    label='Enter your email'
                                    variant='outlined'
                                    sx={{
                                        flexBasis: '50%',
                                        '& .MuiInputBase-root': {
                                            borderRadius: '4px 0 0 4px',
                                        },
                                    }}
                                    value={email}
                                    onChange={(
                                        event: React.ChangeEvent<HTMLInputElement>
                                    ) => {
                                        setEmail(event.target.value)
                                    }}
                                />
                                <Button
                                    sx={{ borderRadius: '0 4px 4px 0' }}
                                    variant='contained'
                                    disabled={!isEmailValid()}
                                >
                                    Enter
                                </Button>
                            </Box>
                            <Typography color='text.secondary' variant='body2'>
                                By providing you email, you agree to our Privacy
                                Policy
                            </Typography>
                        </StepContent>
                    </Paper>
                </Step>
                <Step>
                    <Paper variant='outlined' sx={{ p: '15px' }}>
                        <StepLabel
                            sx={{
                                '& .MuiStepLabel-label': { fontSize: '20px' },
                            }}
                        >
                            Shipping
                        </StepLabel>
                        <StepContent>234234</StepContent>
                    </Paper>
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
                    disabled={activeStep === 2 || !isEmailValid()}
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
