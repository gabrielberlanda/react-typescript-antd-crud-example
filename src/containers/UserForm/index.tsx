import React, { useState, useEffect } from 'react'
import { ApplicationUser } from '../../models/ApplicationUser';
import { RouteComponentProps } from 'react-router';
import { PageHeader, message, Tabs } from 'antd';
import { findUserById } from '../../services/ApplicationUserService';
import {  SubHeader } from '../../components/StyledComponents';
import UserFormContacts from './UserFormContacts';
import UserFormGeneral from './UserFormGeneral';
import UserFormGroups from './UserFormGroups';


const UserFormContainer: React.SFC<RouteComponentProps> = (props: RouteComponentProps) => {
    
    const [user, setUser] = useState<ApplicationUser>({});

    useEffect(() => {
        const { id } = (props.match.params as any);
        
        if(id) findById(parseInt(id))

    }, [props.match.params]);

    function findById(id: number) {
        findUserById(id)
            .then((user: ApplicationUser) => setUser(user))
            .catch(err => message.error(err.message))
    }

    function goBack() {
        props.history.goBack();
    }

    function renderTabBar (props: any, DefaultTabBar: any) {
        return <DefaultTabBar {...props} style={{ zIndex: 1, background: '#fff' }}/>
    }

    return (
        <div>
            <SubHeader type="flex" justify="space-between" align="middle">
                <PageHeader onBack={goBack} title="User Form"></PageHeader>
            </SubHeader>

            <div style={{ marginTop: 10 }}>

                <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                    <Tabs.TabPane tab="General" key="1">
                        <UserFormGeneral></UserFormGeneral>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Contacts" key="2">
                        <UserFormContacts/>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Groups" key="3">
                        <UserFormGroups/>
                    </Tabs.TabPane>
                </Tabs>
            </div>

        </div>
    )
}

export default UserFormContainer;