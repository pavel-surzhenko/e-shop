import * as yup from 'yup';

export const schemaEmail: yup.SchemaOf<IEmailForm> = yup.object().shape({
    email: yup.string().email().required()
});

export interface IEmailForm {
    email: string;
}

export const schemaShipping: yup.SchemaOf<IShippingForm> = yup.object().shape({
    city: yup.string().min(2,).required(),
    address: yup.string().min(3).required(),
    phone: yup.string().matches(/^\d+$/).min(10).max(13).required(),
    firstName: yup.string().min(2).required(),
    lastName: yup.string().min(2).required()
})

export interface IShippingForm {
    city: string;
    address: string;
    phone: string;
    firstName: string;
    lastName: string;
}