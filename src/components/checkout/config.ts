import * as yup from 'yup';
import { styled } from '@mui/material/styles'

export const schemaEmail: yup.SchemaOf<IEmailForm> = yup.object().shape({
    email: yup.string().email().required()
});

export const schemaShipping: yup.SchemaOf<IShippingForm> = yup.object().shape({
    city: yup.string().min(2,).required(),
    address: yup.string().min(3).required(),
    phone: yup.string().matches(/^\d+$/).min(10).max(13).required(),
    firstName: yup.string().min(2).required(),
    lastName: yup.string().min(2).required()
})

export const schemaPayment: yup.SchemaOf<IPaymentForm> = yup.object().shape({
    card: yup.string().matches(/^\d+$/).min(16).max(16).required(),
    expiration: yup.string().matches(/^\d+$/).min(4).max(4).required(),
    cvv: yup.string().matches(/^\d+$/).min(3).max(3).required(),
})

export interface IEmailForm {
    email: string;
}

export interface IShippingForm {
    city: string;
    address: string;
    phone: string;
    firstName: string;
    lastName: string;
}

export interface IPaymentForm {
    card: string;
    expiration: string;
    cvv: string;
}

export const Form = styled('form')(() => ({
    display: 'flex',
    flexDirection: 'column',
    marginTop:'8px',
    '& .MuiFormControl-root': {
        maxWidth:'45ch',
        marginBottom:'16px'
    },
}))