import { Box, Step, StepLabel, Stepper } from '@mui/material'
import { Formik } from 'formik'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import * as yup from 'yup'
import { getCart } from '../../redux/selectors'

const initialValues = {
    billingAddress: {
        firstName: '',
        lastName: '',
        country: '',
        city: '',
    },
    shippingAddress: {
        isSameAddress: true,
        firstName: '',
        lastName: '',
        country: '',
        city: '',
    },
    email: '',
    phoneNumber: '',
}

const checkoutSchema = yup.array().of(
    yup.object().shape({
        billingAddress: yup.object().shape({
            firstName: yup.string().required('required'),
            lastName: yup.string().required('required'),
            country: yup.string().required('required'),
            city: yup.string().required('required'),
        }),
        shippingAddress: yup.object().shape({
            isSameAddress: yup.boolean(),
            firstName: yup.string().when('isSameAddress', {
                is: false,
                then: () => yup.string().required('required'),
                otherwise: () => yup.string(),
            }),
            lastName: yup.string().when('isSameAddress', {
                is: false,
                then: () => yup.string().required('required'),
                otherwise: () => yup.string(),
            }),
            country: yup.string().when('isSameAddress', {
                is: false,
                then: () => yup.string().required('required'),
                otherwise: () => yup.string(),
            }),
            city: yup.string().when('isSameAddress', {
                is: false,
                then: () => yup.string().required('required'),
                otherwise: () => yup.string(),
            }),
        }),
        email: yup.string().required('required'),
        phoneNumber: yup.string().required('required'),
    }),
)

export const Checkout: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0)
    const cart = useSelector(getCart)
    const isFirstStep = activeStep === 0
    const isSecondStep = activeStep === 1

    const handleFormSubmit = async (value, actions) => {
        setActiveStep(activeStep + 1)
    }

    async function makePayment(values: type) {}

    return (
        <Box width='80%' m='100px auto'>
            <Stepper activeStep={activeStep} sx={{ m: '20px 0' }}>
                <Step>
                    <StepLabel>Billing</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Payment</StepLabel>
                </Step>
            </Stepper>
            <Box>
                <Formik
                    onSubmit={handleFormSubmit}
                    initialValues={initialValues}
                    validationSchema={checkoutSchema}
                ></Formik>
            </Box>
        </Box>
    )
}
