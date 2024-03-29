import React from 'react'

import { Card } from './../../../components/StyledComponents';
import { UserFormTabProps } from '..';
import { ApplicationGroupsMockData } from '../../../mocks/ApplicationUserMockData';
import { TransferItem } from 'antd/lib/transfer';
import { Transfer } from '@jbuschke/formik-antd';
import FormItemFeedback from '../../../components/FormItemFeedback';

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
            <FormItemFeedback name="userGroupsKeys" label="User Groups" required={true}>
                <Transfer
                    name="userGroupsKeys"
                    titles={['Groups that the user not belongs to', 'Groups that the user belongs to']}                
                    listStyle={{ width: '45%', height: 500 }}
                    dataSource={dataSource}
                    render={item => item.title}
                />
            </FormItemFeedback>
        </Card>
    )
}

export default UserFormGroups;