import React from 'react'
import { Input, DatePicker, TreeSelect } from "@jbuschke/formik-antd";
import { Card } from '../../../components/StyledComponents';
import { UserFormTabProps } from '..';
import { getStructureTreeMockData } from '../../../mocks/ApplicationUserMockData';
import FormItemFeedback from '../../../components/FormItemFeedback';
import { withFormItem } from '../../../hoc/WithFormItem';

const FormInput = withFormItem(Input);
const FormDatePicker = withFormItem(DatePicker);

const UserFormGeneral: React.SFC<UserFormTabProps> = (props: UserFormTabProps) => {

    const { user } = props;

    const structureTreeData = getStructureTreeMockData();

    return (
        
        <Card bordered={false}>

            <FormInput label="Name" name="name" required={true}/>
            {/* <FormItemFeedback name="name" label="Name" required={true}>
                <Input name="name"/>
            </FormItemFeedback> */}

            <FormItemFeedback name="userName" label="Username" required={true}>
                <Input name="userName"/>
            </FormItemFeedback>

            <FormDatePicker label="BirthDate" required={true} format="DD/MM/YYYY" name="birthDate"/>

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