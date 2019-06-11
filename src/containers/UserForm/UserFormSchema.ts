import * as Yup from 'yup';

export const UserFormSchema = Yup.object().shape({
    name: Yup
        .string()
        .required('Name is required'),
    userName: Yup
        .string()
        .min(4, 'Min length is 4')
        .required('Username is required'),
    birthDate: Yup
        .date()
        .required('Birthday is required'),
    password: Yup
        .string()
        .min(6, 'Min length is 6')
        .required('Password is required'),
    confirmPassword: Yup
        .string()
        .oneOf([Yup.ref('password'), null], 'Password musth match')
        .required('Confirm password is required'),
    userGroupsKeys: Yup
        .array()
        .of(Yup.string())
        .required('User group is required')
});

export interface UserFormSchemaValues {
    name?: string,
    userName?: string,
    birthDate?: Date,
    password?: string,
    confirmPassword?: string,
    userGroupsKeys?: string[]
}