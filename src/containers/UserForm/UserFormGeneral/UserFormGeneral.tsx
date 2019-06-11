import React from 'react'
import { Form, Input, DatePicker } from "@jbuschke/formik-antd";
import { Card } from '../../../components/StyledComponents';
import { UserFormTabProps } from '..';

const FormItem = Form.Item;

const UserFormGeneral: React.SFC<UserFormTabProps> = (props: UserFormTabProps) => {

    return (
        <Card bordered={false}>

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
   
        </Card>
    )
}

export default UserFormGeneral;