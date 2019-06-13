import React from 'react'

import { ContactType } from '../../../models/ApplicationUser';
import { Card } from '../../../components/StyledComponents';
import { UserFormTabProps } from '..';
import UserFormContactsForm from './UserFormContactsForm';

const UserFormContacts: React.SFC<UserFormTabProps> = (props: UserFormTabProps) => {

    const { values } = props.formikBag;

    return (
        <Card bordered={false}>
            
            <UserFormContactsForm
                title="Email"
                formFieldName="userEmails"
                items={values.userEmails || []}
                type={ContactType.EMAIL}
            />
            
            <div style={{ marginTop: 10 }}>
                <UserFormContactsForm
                    title="SMS"
                    formFieldName="userSMSs"
                    items={values.userSMSs || []}
                    type={ContactType.SMS}
                />
            </div>

        </Card>
    )
}

export default UserFormContacts; 