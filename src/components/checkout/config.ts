import * as yup from 'yup';

export const schemaEmail: yup.SchemaOf<IEmailForm> = yup.object().shape({
    email: yup.string().email().required('Email is required')
});

export interface IEmailForm {
    email: string;
}

export const schemaShipping: yup.SchemaOf<IShippingForm> = yup.object().shape({
    city: yup.string().min(2, 'City is required').required(),
    address: yup.string().min(3, 'Address is required').required(),
    phone: yup.number().typeError("That doesn't look like a phone number").min(8, 'Phone number is too short').max(13, 'Phone number is too long').required('Phone is required'),
    firstName: yup.string().min(2, 'First Name is required').required(),
    lastName: yup.string().min(2, 'Last Name is required').required()
})

export interface IShippingForm {
    city: string;
    address: string;
    phone: number;
    firstName: string;
    lastName: string;
}