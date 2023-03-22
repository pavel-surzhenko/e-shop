import { yupResolver } from '@hookform/resolvers/yup'
import { Payment } from '@mui/icons-material'
import {
    Button,
    FormGroup,
    Paper,
    StepContent,
    StepLabel,
    TextField,
    Typography
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Form, IPaymentForm, schemaPayment, Div } from './config'

export const PaymentStep: React.FC<PaymentStepProps> = ({
    onStepCompleted,
    onStepBack,
}) => {
    const [formValues, setFormValues] = useState({
        card: '',
        expiration: '',
        cvv: '',
    })

    const {
        handleSubmit,
        formState: { errors, isValid },
        register,
        trigger,
        setValue,
    } = useForm<IPaymentForm>({
        mode: 'all',
        resolver: yupResolver(schemaPayment),
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        })
        trigger(event.target.name as keyof IPaymentForm)
        setValue(event.target.name as keyof IPaymentForm, event.target.value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        })
    }

    const isValidForm = (): boolean => !isValid

    const onSubmit = handleSubmit((data: IPaymentForm) => {
        onStepCompleted()
    })

    return (
        <Paper
            variant='outlined'
            sx={{ p: '15px', backgroundColor: grey[100] }}
        >
            <StepLabel
                sx={{
                    '& .MuiStepLabel-label': {
                        fontSize: '20px',
                        alignItems: 'center',
                        display: 'flex',
                    },
                }}
            >
                <Payment sx={{ mr: '5px' }} /> Payment
            </StepLabel>
            <StepContent>
                <Form onSubmit={onSubmit}>
                    <TextField
                        fullWidth
                        label='Card'
                        error={!!errors?.card}
                        {...register('card')}
                        value={formValues.card}
                        onChange={handleChange}
                        
                    /> 
                    <FormGroup
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            maxWidth: '45ch',
                            '& .MuiFormControl-root': {
                                maxWidth: '20ch',
                            },
                        }}
                    >
                        <TextField
                            fullWidth
                            label='Expiration'
                            error={!!errors?.expiration}
                            {...register('expiration')}
                            value={formValues.expiration}
                            onChange={handleChange}
                        />
                        <TextField
                            type='password'
                            fullWidth
                            label='Cvv'
                            error={!!errors?.cvv}
                            {...register('cvv')}
                            value={formValues.cvv}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <Div>
                        <Button onClick={() => onStepBack()}>Back</Button>
                        <Button
                            variant='contained'
                            color='primary'
                            type='submit'
                            disabled={isValidForm()}
                        >
                            Finish
                        </Button>
                    </Div>
                </Form>
                <Typography color='text.secondary' variant='body2'>
                    All information is protected and private
                </Typography>
            </StepContent>
        </Paper>
    )
}

interface PaymentStepProps {
    onStepCompleted: () => void
    onStepBack: () => void
}
