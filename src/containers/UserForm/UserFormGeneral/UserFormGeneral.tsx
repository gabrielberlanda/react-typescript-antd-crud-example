import React from 'react'
import { Input, DatePicker, TreeSelect } from "@jbuschke/formik-antd";
import { Card } from '../../../components/StyledComponents';
import { UserFormTabProps } from '..';
import { getStructureTreeMockData } from '../../../mocks/ApplicationUserMockData';
import FormItemFeedback from '../../../components/FormItemFeedback';


const UserFormGeneral: React.SFC<UserFormTabProps> = (props: UserFormTabProps) => {

    const { user, formikBag: { values } } = props;

    const structureTreeData = getStructureTreeMockData();

    return (
        <Card bordered={false}>

            <FormItemFeedback name="name" label="Name" required={true}>
                <Input name="name"/>
            </FormItemFeedback>

            <FormItemFeedback name="userName" label="Username" required={true}>
                <Input name="userName"/>
            </FormItemFeedback>

            <FormItemFeedback name="birthDate" label="Birth date" required={true}>
                <DatePicker format="DD/MM/YYYY" name="birthDate"/>
            </FormItemFeedback>

            <FormItemFeedback name="structure" label="Structure" required={true}>
                <TreeSelect name="structure" treeData={structureTreeData}>
                </TreeSelect>
            </FormItemFeedback>

            <FormItemFeedback name="password" label="Password" required={!user.id}>
                <Input name="password" type="password"/>
            </FormItemFeedback>

            <FormItemFeedback name="confirmPassword" label="Confirm password" required={!user.id}>
                <Input name="confirmPassword" type="password"/>
            </FormItemFeedback>
   
        </Card>
    )
}

export default UserFormGeneral;