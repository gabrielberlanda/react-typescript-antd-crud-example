import React from 'react'
import { ApplicationUser } from '../../models/ApplicationUser';
import { Formik, FormikActions, FormikProps, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { Card } from '../../components/StyledComponents';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

interface Props {
    user?: ApplicationUser
}

interface UserFormGeneralValues {
    name?: string;
    userName?: string;
    birthDate?: Date;
    password?: string;
    confirmPassword?: string;
}

const UserFormGeneralSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    username: Yup.string().min(4, 'Min length is 4').required('Username is required'),
    birthDate: Yup.date().required('Birthday is required'),
    password: Yup.string().min(6, 'Min length is 6').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Password confirm is required')
});

const UserFormGeneral: React.SFC<Props> = (props) => {
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
                        <form style={{ display: "flex" }} onSubmit={handleSubmit}>
                            <FormItem
                                help={touched.name && errors.name ? errors.name : ""}
                                validateStatus={touched.name && errors.name ? "error" : undefined}
                                label="Name"
                            >
                                <Input
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </FormItem>
                        </form>
                    )
                }}
            >

            </Formik>
        </Card>
    )
}

export default UserFormGeneral;