import React from 'react'
import { Formik, FormikActions, FormikProps } from "formik";
import * as Yup from 'yup';
import { Button } from 'antd';
import { Form, Input, DatePicker, SubmitButton, ResetButton } from "@jbuschke/formik-antd";
import { ApplicationUser } from '../../../models/ApplicationUser';
import { Card } from '../../../components/StyledComponents';
import { UserFormTabProps } from '..';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
};

interface UserFormGeneralValues {
    name?: string;
    userName?: string;
    birthDate?: Date;
    password?: string;
    confirmPassword?: string;
};

const UserFormGeneralSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    userName: Yup.string().min(4, 'Min length is 4').required('Username is required'),
    birthDate: Yup.date().required('Birthday is required'),
    password: Yup.string().min(6, 'Min length is 6').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Password confirm is required')
});

const UserFormGeneral: React.SFC<UserFormTabProps> = (props: UserFormTabProps) => {
    const { user } = props;

    return (
        <Card bordered={false}>
            <Formik
                initialValues={{...user}}
                validationSchema={UserFormGeneralSchema}
                onSubmit={(values: UserFormGeneralValues, actions: FormikActions<UserFormGeneralValues>) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
                render={(formikBag: FormikProps<UserFormGeneralValues>) => {
                    
                    const { values, handleChange, handleBlur, handleSubmit, touched, errors } = formikBag;

                    return (
                        <Form {...formItemLayout}>

                            <FormItem name="name" label="Name">
                                <Input name="name"/>
                            </FormItem>

                            <FormItem name="userName" label="Username">
                                <Input name="userName"/>
                            </FormItem>

                            <FormItem name="birthDate" label="Birth date">
                                <DatePicker format="DD/MM/YYYY" name="birthDate"/>
                            </FormItem>

                            <FormItem name="password" label="Password">
                                <Input name="password" type="password"/>
                            </FormItem>

                            <FormItem name="confirmPassword" label="Confirm password">
                                <Input name="confirmPassword" type="password"/>
                            </FormItem>

                            <Button.Group size="large">
                                <ResetButton>Reset</ResetButton>
                                <SubmitButton type="primary" disabled={false}>Submit</SubmitButton>
                            </Button.Group>
                        </Form>
                    )
                }}
            />
        </Card>
    )
}

export default UserFormGeneral;