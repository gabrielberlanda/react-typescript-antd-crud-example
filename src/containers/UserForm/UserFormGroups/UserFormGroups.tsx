import React from 'react'

import { Card } from './../../../components/StyledComponents';
import { UserFormTabProps } from '..';
import { ApplicationGroupsMockData } from '../../../mocks/ApplicationUserMockData';
import { TransferItem } from 'antd/lib/transfer';
import { Transfer, FormItem } from '@jbuschke/formik-antd';

const UserFormGroups: React.SFC<UserFormTabProps> = (props: UserFormTabProps) => {

    const dataSource: TransferItem[] = ApplicationGroupsMockData.map(group => {
        let transferItem: TransferItem = {
            key: String(group.id),
            title: group.name || String(group.id),
            description: group.name || String(group.id)
        };

        return transferItem;
    });

    return (
        <Card bordered={false}>
            <FormItem name="userGroupsKeys" label="User Groups" required={true}>
                <Transfer
                    name="userGroupsKeys"
                    titles={['Groups that the user not belongs to', 'Groups that the user belongs to']}                
                    listStyle={{ width: '40%' }}
                    dataSource={dataSource}
                    render={item => item.title}
                />
            </FormItem>
        </Card>
    )
}

export default UserFormGroups;