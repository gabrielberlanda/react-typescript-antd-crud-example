import React from 'react'
import { Input, DatePicker, FormItem, TreeSelect } from "@jbuschke/formik-antd";
import { Card } from '../../../components/StyledComponents';
import { UserFormTabProps } from '..';
import { getStructureTreeMockData } from '../../../mocks/ApplicationUserMockData';


const UserFormGeneral: React.SFC<UserFormTabProps> = (props: UserFormTabProps) => {

    const { user } = props;

    const structureTreeData = getStructureTreeMockData();

    return (
        <Card bordered={false}>

            <FormItem hasFeedback showValidateSuccess name="name" label="Name" required={true}>
                <Input name="name"/>
            </FormItem>

            <FormItem hasFeedback showValidateSuccess name="userName" label="Username" required={true}>
                <Input name="userName"/>
            </FormItem>

            <FormItem hasFeedback showValidateSuccess name="birthDate" label="Birth date" required={true}>
                <DatePicker format="DD/MM/YYYY" name="birthDate"/>
            </FormItem>

            <FormItem hasFeedback showValidateSuccess name="structure" label="Structure" required={true}>
                <TreeSelect name="structure" treeData={structureTreeData}>
                </TreeSelect>
            </FormItem>

            <FormItem hasFeedback showValidateSuccess name="password" label="Password" required={!user.id}>
                <Input name="password" type="password"/>
            </FormItem>

            <FormItem hasFeedback showValidateSuccess name="confirmPassword" label="Confirm password" required={!user.id}>
                <Input name="confirmPassword" type="password"/>
            </FormItem>
   
        </Card>
    )
}

export default UserFormGeneral;