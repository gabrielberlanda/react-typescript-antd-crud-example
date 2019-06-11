import React from 'react'

import { Card } from './../../../components/StyledComponents';
import { UserFormTabProps } from '..';
import { ApplicationGroupsMockData } from '../../../mocks/ApplicationUserMockData';
import { TransferItem } from 'antd/lib/transfer';
import { Transfer } from 'antd';


const UserFormGroups: React.SFC<UserFormTabProps> = (props: UserFormTabProps) => {

    const { user, setUser } = props;

    const dataSource: TransferItem[] = ApplicationGroupsMockData.map(group => {
        let transferItem: TransferItem = {
            key: String(group.id),
            title: group.name || String(group.id),
            description: group.name || String(group.id)
        };

        return transferItem;
    });

    const targetKeys : string[] = (props.user.userGroups || []).map(g => String(g.id));
    const selectedKeys: string[] = ApplicationGroupsMockData.filter(g => targetKeys.indexOf(String(g.id)) == -1).map(g => String(g.id));


    function handleChange(targetKeys: string[], direction: string, moveKeys: any) {
        if(direction == 'right') {
            
        }
        const newGroups = [...(user.userGroups || []), ... ApplicationGroupsMockData.filter(g => targetKeys.indexOf(String(g.id)) > -1)] ;
        console.log({ targetKeys, direction, moveKeys });

        setUser({...user, userGroups: newGroups})
    }

    return (
        <Card bordered={false}>
            <Transfer
                showSearch
                titles={['Groups that the user not belongs to', 'Groups that the user belongs to']}                
                targetKeys={targetKeys}
                listStyle={{ width: '50%' }}
                dataSource={dataSource}
                render={item => item.title}
                onChange={handleChange}
            />

        </Card>
    )
}

export default UserFormGroups;