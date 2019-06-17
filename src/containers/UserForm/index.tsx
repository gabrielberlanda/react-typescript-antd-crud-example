import React, { useState, useEffect, useRef } from 'react'
import { ApplicationUser, ContactType } from '../../models/ApplicationUser';
import { RouteComponentProps } from 'react-router';
import { PageHeader, message, Tabs } from 'antd';
import { findUserById } from '../../services/ApplicationUserService';
import {  SubHeader, FullWidthButton, Content } from '../../components/StyledComponents';
import { Formik, FormikActions, FormikProps } from 'formik';
import { UserFormSchemaValues, getUserFormSchema } from './UserFormSchema';
import { Form, SubmitButton } from '@jbuschke/formik-antd';
import { Constants } from '../../utils/Constants';
import UserFormContacts from './UserFormContacts/UserFormContacts';
import UserFormGeneral from './UserFormGeneral/UserFormGeneral';
import UserFormGroups from './UserFormGroups/UserFormGroups';

export interface UserFormTabProps {
    user: ApplicationUser,
    setUser: React.Dispatch<React.SetStateAction<ApplicationUser>>,
    formikBag: FormikProps<UserFormSchemaValues>
}

const UserFormContainer: React.SFC<RouteComponentProps> = (props: RouteComponentProps) => {
    
    const [user, setUser] = useState<ApplicationUser>({});
    const [initialized, setInitialized] = useState<boolean>(false);
    const formikEl = useRef<Formik>(null);

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
                setUser(user);
                setInitialized(true);
            })
            .catch(err => message.error(err.message))
    }

    function goBackHandler() {
        props.history.goBack();
    }

    function submitHandler(values: UserFormSchemaValues, actions: FormikActions<UserFormSchemaValues>) {
        console.log({values, actions});
        actions.validateForm(values).then((errors) => {
            
            let errorKeys = Object.keys(errors);

            if(errorKeys.length > 0) {
                message.error('Invalid form');
            } else {
                message.success('User saved successfully!')
            }
        })
    }

    function getInitialValues(): UserFormSchemaValues {
        return {
            ...user,
            password: '',
            userGroupsKeys: (user.userGroups || []).map(g => String(g.id)),
            userEmails: (user.userContacts || []).filter(c => c.type === ContactType.EMAIL),
            userSMSs: (user.userContacts || []).filter(c => c.type === ContactType.SMS),
            structure: (user.structure || {}).id 
        }
    }
    
    function saveHandler(ev: any) {
        const formik = (formikEl.current as Formik);
        formik.executeSubmit();
    }
    
    function renderTabBar (props: any, DefaultTabBar: any) {
        return <DefaultTabBar {...props} style={{ zIndex: 1, background: '#fff' }}/>
    }

    function renderSubHeader() {
        return (
            <SubHeader type="flex" justify="space-between" align="middle">
                <PageHeader 
                    style={{ flex: 1}}
                    onBack={goBackHandler} 
                    title="User Form"
                    extra={[
                        <FullWidthButton type="primary" key="save" onClick={saveHandler}>Save</FullWidthButton>
                    ]}
                />
            </SubHeader>
        )
    }

    function renderFormContent(formikBag: FormikProps<UserFormSchemaValues>) {
        return (
            <Form {...Constants.defaultFormLayout} style={{ marginTop: 10 }}>
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
    }

    if(!initialized) return <div>Loading...</div>
    
    return (
        <div>
            
            { renderSubHeader() }
            
            <Content>
                <Formik
                    ref={formikEl}
                    initialValues={getInitialValues()}
                    validationSchema={getUserFormSchema(user.id != null)}
                    onSubmit={submitHandler}
                    render={renderFormContent}
                />
            </Content>

        </div>
    )
}

export default UserFormContainer;