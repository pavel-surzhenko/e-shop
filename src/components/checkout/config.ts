import * as yup from 'yup';

export const schema: yup.SchemaOf<IEmailForm> = yup.object().shape({
    email: yup.string().email().required('')
});

export interface IEmailForm {
    email: string;
}