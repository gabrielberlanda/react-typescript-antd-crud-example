import React, { useState, useEffect } from 'react'
import { ApplicationUser } from '../../models/ApplicationUser';
import { RouteComponentProps } from 'react-router';
import { PageHeader, message, Tabs } from 'antd';
import { findUserById } from '../../services/ApplicationUserService';
import {  SubHeader } from '../../components/StyledComponents';
import { Formik, FormikActions, FormikProps } from 'formik';
import { UserFormSchemaValues, UserFormSchema } from './UserFormSchema';
import { Form } from '@jbuschke/formik-antd';
import UserFormContacts from './UserFormContacts/UserFormContacts';
import UserFormGeneral from './UserFormGeneral/UserFormGeneral';
import UserFormGroups from './UserFormGroups/UserFormGroups';

export interface UserFormTabProps {
    user: ApplicationUser,
    setUser: React.Dispatch<React.SetStateAction<ApplicationUser>>,
    formikBag: FormikProps<UserFormSchemaValues>
}

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
};


const UserFormContainer: React.SFC<RouteComponentProps> = (props: RouteComponentProps) => {
    
    const [user, setUser] = useState<ApplicationUser>({});
    const [initialized, setInitialized] = useState<boolean>(false);

    useEffect(() => {
        const { id } = (props.match.params as any);
        
        if(id) {
            findById(parseInt(id));
        } else {
            setInitialized(true);
        }

    }, [props.match.params]);

    function findById(id: number) {
        findUserById(id)
            .then((user: ApplicationUser) => {
                console.log('User', user);
                setUser(user);
                setInitialized(true);
            })
            .catch(err => message.error(err.message))
    }

    function goBack() {
        props.history.goBack();
    }

    function submitHandler(values: UserFormSchemaValues, actions: FormikActions<UserFormSchemaValues>) {
        console.log({values, actions});
    }

    function getInitialValues(): UserFormSchemaValues {
        return {
            ...user,
            userGroupsKeys: (user.userGroups || []).map(g => String(g.id))
        }
    }

    function renderTabBar (props: any, DefaultTabBar: any) {
        return <DefaultTabBar {...props} style={{ zIndex: 1, background: '#fff' }}/>
    }

    function renderSubHeader() {
        return (
            <SubHeader type="flex" justify="space-between" align="middle">
                <PageHeader onBack={goBack} title="User Form"></PageHeader>
            </SubHeader>
        )
    }

    function renderForm() {
        if(!initialized) return null;
        return(
            <Formik
                initialValues={getInitialValues()}
                validationSchema={UserFormSchema}
                onSubmit={submitHandler}
                render={(formikBag: FormikProps<UserFormSchemaValues>) => {
                    console.log('Formik bag', formikBag);
                    return (
                        <Form {...formItemLayout} style={{ marginTop: 10 }}>
                            <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                                <Tabs.TabPane tab="General" key="1">
                                    <UserFormGeneral user={user} formikBag={formikBag} setUser={setUser}></UserFormGeneral>
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="Contacts" key="2">
                                    <UserFormContacts user={user} formikBag={formikBag} setUser={setUser}/>
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="Groups" key="3" >
                                    <UserFormGroups user={user} formikBag={formikBag} setUser={setUser}/>
                                </Tabs.TabPane>
                            </Tabs>
                        </Form>
        
                    )
                }}
            />
        )
    }


    return (
        <div>
            
            { renderSubHeader() }
            { renderForm() }

        </div>
    )
}

export default UserFormContainer;