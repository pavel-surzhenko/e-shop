import {
    Paper,
    StepLabel,
    StepContent,
    TextField,
    Button,
    Typography,
    FormControl,
} from '@mui/material'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { IEmailForm, schema } from './config'

export const EmailStep: React.FC = () => {
    const { register, formState, trigger, setValue } = useForm<IEmailForm>({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: yupResolver(schema),
    })
    const isValid = () => !formState.isValid

    return (
        <Paper variant='outlined' sx={{ p: '15px' }}>
            <StepLabel
                sx={{
                    '& .MuiStepLabel-label': { fontSize: '20px' },
                }}
            >
                Email
            </StepLabel>
            <StepContent>
                <FormControl
                    sx={{ display: 'flex', m: '15px 0', flexDirection: 'row' }}
                >
                    <TextField
                        error={!!formState.errors.email}
                        {...register('email')}
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
                    <Button
                        type='submit'
                        sx={{ borderRadius: '0 4px 4px 0' }}
                        variant='contained'
                        disabled={isValid()}
                    >
                        Enter
                    </Button>
                </FormControl>
                <Typography color='text.secondary' variant='body2'>
                    By providing you email, you agree to our Privacy Policy
                </Typography>
            </StepContent>
        </Paper>
    )
}
