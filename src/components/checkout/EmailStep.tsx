import {
    Paper,
    StepLabel,
    StepContent,
    TextField,
    Button,
    Typography,
    FormControl,
    Box,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { IEmailForm, schemaEmail } from './config'

export const EmailStep: React.FC = () => {
    const { register, formState, trigger, setValue } = useForm<IEmailForm>({
        mode: 'all',
        reValidateMode: 'onChange',
        resolver: yupResolver(schemaEmail),
    })
    const isValid = (): boolean => !formState.isValid

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
                Email
            </StepLabel>
            <StepContent>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <FormControl
                        sx={{
                            m: '8px 0 16px 0', maxWidth:'50ch'
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
                </Box>
                <Typography color='text.secondary' variant='body2'>
                    By providing you email, you agree to our Privacy Policy
                </Typography>
            </StepContent>
        </Paper>
    )
}
