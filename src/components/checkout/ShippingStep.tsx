import { yupResolver } from '@hookform/resolvers/yup'
import {
    Paper,
    StepLabel,
    StepContent,
    FormControl,
    TextField,
    Button,
    Typography,
    FormGroup,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { LocalShippingOutlined } from '@mui/icons-material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, IShippingForm, schemaShipping, Div } from './config'

export const ShippingStep: React.FC<ShippingStepProps> = ({
    onStepCompleted,
    onStepBack,
}) => {
    const [formValues, setFormValues] = useState({
        city: '',
        address: '',
        phone: '',
        firstName: '',
        lastName: '',
    })

    const {
        handleSubmit,
        formState: { errors, isValid },
        register,
        trigger,
        setValue,
    } = useForm<IShippingForm>({
        mode: 'all',
        resolver: yupResolver(schemaShipping),
    })

    const onSubmit = handleSubmit((data: IShippingForm) => {
        onStepCompleted()
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        })
        trigger(event.target.name as keyof IShippingForm)
        setValue(event.target.name as keyof IShippingForm, event.target.value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        })
    }

    const isValidForm = (): boolean => !isValid as boolean

    return (
        <Paper
            variant='outlined'
            sx={{ p: '15px', backgroundColor: grey[100] }}
            id='2'
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
                <LocalShippingOutlined sx={{ mr: '5px' }} />
                Shipping
            </StepLabel>
            <StepContent>
                <Form onSubmit={onSubmit}>
                    <FormGroup>
                        <FormControl>
                            <TextField
                                fullWidth
                                label='City'
                                error={!!errors?.city}
                                {...register('city')}
                                value={formValues.city}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                error={!!errors?.address}
                                label='Address'
                                {...register('address')}
                                value={formValues.address}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                label='Phone'
                                error={!!errors?.phone}
                                {...register('phone')}
                                type='tel'
                                value={formValues.phone}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                label='First Name'
                                error={!!errors?.firstName}
                                {...register('firstName')}
                                value={formValues.firstName}
                                onChange={handleChange}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                label='Last Name'
                                error={!!errors?.lastName}
                                {...register('lastName')}
                                value={formValues.lastName}
                                onChange={handleChange}
                            />
                        </FormControl>
                    </FormGroup>
                    <Div>
                        <Button onClick={() => onStepBack()}>Back</Button>
                        <Button
                            variant='contained'
                            color='primary'
                            type='submit'
                            disabled={isValidForm()}
                        >
                            Next
                        </Button>
                    </Div>
                </Form>
                <Typography color='text.secondary' variant='body2'>
                    Please check that the address and recipient are correct
                </Typography>
            </StepContent>
        </Paper>
    )
}

interface ShippingStepProps {
    onStepCompleted: () => void
    onStepBack: () => void
}
