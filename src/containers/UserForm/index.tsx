import React, { useState, useEffect, useRef } from 'react'
import { ApplicationUser, ContactType } from '../../models/ApplicationUser';
import { RouteComponentProps } from 'react-router';
import { PageHeader, message, Tabs } from 'antd';
import { findUserById } from '../../services/ApplicationUserService';
import {  SubHeader, FullWidthButton } from '../../components/StyledComponents';
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

    function goBack() {
        props.history.goBack();
    }

    function submitHandler(values: UserFormSchemaValues, actions: FormikActions<UserFormSchemaValues>) {
        console.log({values, actions});
        actions.validateForm(values).then((errors) => {
            console.log('Errors', errors);
            if(Object.keys(errors).length > 0) {
                message.error('Invalid form');
            } else {
                message.success('User saved successfully!')
            }
        })
    }

    function getInitialValues(): UserFormSchemaValues {
        return {
            ...user,
            userGroupsKeys: (user.userGroups || []).map(g => String(g.id)),
            userEmails: (user.userContacts || []).filter(c => c.type === ContactType.EMAIL),
            userSMSs: (user.userContacts || []).filter(c => c.type === ContactType.SMS),
            structure: (user.structure || {}).id 
        }
    }

    function renderTabBar (props: any, DefaultTabBar: any) {
        return <DefaultTabBar {...props} style={{ zIndex: 1, background: '#fff' }}/>
    }

    function saveHandler(ev: any) {
        const formik = (formikEl.current as Formik);
        
        formik.executeSubmit();
    }

    function renderSubHeader() {
        return (
            <SubHeader type="flex" justify="space-between" align="middle">
                <PageHeader 
                    style={{ flex: 1}}
                    onBack={goBack} 
                    title="User Form"
                    extra={[
                        <FullWidthButton type="primary" key="save" onClick={saveHandler}>Save</FullWidthButton>
                    ]}
                />
            </SubHeader>
        )
    }

    function renderForm() {
        if(!initialized) return null;
        return(
            <Formik
                ref={formikEl}
                initialValues={getInitialValues()}
                validationSchema={UserFormSchema}
                onSubmit={submitHandler}
                render={(formikBag: FormikProps<UserFormSchemaValues>) => {
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