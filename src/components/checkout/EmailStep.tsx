import {
    Paper,
    StepLabel,
    StepContent,
    TextField,
    Button,
    Typography,
    FormControl,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { EmailOutlined } from '@mui/icons-material'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Form, IEmailForm, schemaEmail } from './config'

export const EmailStep: React.FC<EmailStepProps> = ({ onStepCompleted }) => {
    const { register, formState, trigger, setValue, handleSubmit } =
        useForm<IEmailForm>({
            mode: 'all',
            reValidateMode: 'onChange',
            resolver: yupResolver(schemaEmail),
        })

    const isValid = (): boolean => !formState.isValid

    const onSubmit = handleSubmit((data: IEmailForm) => {
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
                <EmailOutlined sx={{ mr: '5px' }} /> Email
            </StepLabel>
            <StepContent>
                <Form onSubmit={onSubmit}>
                    <FormControl
                        sx={{
                            m: '8px 0 16px 0',
                            maxWidth: '50ch',
                        }}
                    >
                        <TextField
                            error={!!formState.errors.email}
                            {...register('email')}
                            type='email'
                            label='Enter your email'
                            variant='outlined'
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                                trigger('email')
                                setValue('email', event.target.value, {
                                    shouldValidate: true,
                                    shouldDirty: true,
                                    shouldTouch: true,
                                })
                            }}
                        />
                    </FormControl>
                    <Button
                        type='submit'
                        variant='contained'
                        disabled={isValid()}
                        sx={{ alignSelf: 'start', mb: '15px' }}
                    >
                        Next
                    </Button>
                </Form>
                <Typography color='text.secondary' variant='body2'>
                    By providing you email, you agree to our Privacy Policy
                </Typography>
            </StepContent>
        </Paper>
    )
}

interface EmailStepProps {
    onStepCompleted: () => void
}
