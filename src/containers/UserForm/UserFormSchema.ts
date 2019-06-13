import * as Yup from 'yup';
import { ApplicationUserContact, ContactType } from '../../models/ApplicationUser';

const getContactSchema = (contactType: ContactType) => {

    let valueField = Yup
        .string()
        .required('Value is required');
 
    if(contactType === ContactType.EMAIL) {
        valueField = valueField.email('Please inform a valid email')
    } 

    return Yup.object().shape({
        value: valueField,
        type: Yup
            .number()
            .required("Type is required"),
        allowNotification: Yup
            .boolean()
    });
}

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
    structure: Yup
        .number()
        .required('Structure is required'),
    password: Yup
        .string()
        .min(6, 'Min length is 6')
        .required(('Password is required')),
    confirmPassword: Yup
        .string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Confirm password is required'),
    userGroupsKeys: Yup
        .array()
        .of(Yup.string())
        .required('User group is required'),
    userEmails: Yup
        .array()
        .of(getContactSchema(ContactType.EMAIL))
        .required('Email is required'),
    userSMSs: Yup
        .array()
        .of(getContactSchema(ContactType.SMS))
        .required('Sms is required')
});

export interface UserFormSchemaValues {
    name?: string,
    userName?: string,
    birthDate?: Date,
    password?: string,
    confirmPassword?: string,
    userGroupsKeys?: string[],
    userEmails?: ApplicationUserContact[],
    userSMSs?: ApplicationUserContact[],
    structure?: number
}