import { styled } from '@mui/material/styles'
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
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IShippingForm, schemaShipping } from './config'

const Form = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    '& .MuiFormControl-root': {
        margin: theme.spacing(1),
        width: '25ch',
    },
}))

export const ShippingStep: React.FC = () => {
    const [formValues, setFormValues] = useState({
        city: '',
        address: '',
        phone: '',
        firstName: '',
        lastName: '',
    })

    const {
        handleSubmit,
        formState: { errors },
        register,
        trigger,
        setValue,
    } = useForm<IShippingForm>({
        mode: 'all',
        resolver: yupResolver(schemaShipping),
    })

    const onSubmit = handleSubmit((data: IShippingForm) => {
        console.log('Form Values:', formValues)
        console.log(errors)
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
                Shiping
            </StepLabel>
            <StepContent>
                <Form onSubmit={onSubmit}>
                    <FormGroup
                        sx={{
                            '& .MuiFormControl-root': {
                                width: '100%',
                                maxWidth: '45ch',
                            },
                        }}
                    >
                        <FormControl sx={{ maxWidth: '45ch' }}>
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
                    <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        sx={{ alignSelf: 'start', mb: '15px' }}
                    >
                        Submit
                    </Button>
                </Form>
                <Typography color='text.secondary' variant='body2'>
                    Please check that the address and recipient are correct
                </Typography>
            </StepContent>
        </Paper>
    )
}
