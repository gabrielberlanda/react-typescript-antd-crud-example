import React from 'react'

import { Row, Col, Button, Divider, Empty, List } from 'antd';
import { ApplicationUser, ApplicationUserContact, ContactType } from '../../../models/ApplicationUser';
import { Card, FullWidthButton } from '../../../components/StyledComponents';
import StatusIcon from '../../../components/StatusIcon';
import { UserFormTabProps } from '..';

const UserFormContacts: React.SFC<UserFormTabProps> = (props: UserFormTabProps) => {

    const user: ApplicationUser = props.user || {};

    function renderContactRow(item: ApplicationUserContact) {
        return (
            <List.Item actions={[<a>edit</a>, <a>delete</a>]}>
                <Row style={{ flex: 1 }} type="flex" align="bottom" justify="space-between">
                    <Col span={20}>{item.value}</Col>
                    <Col span={2}><StatusIcon isActived={item.allowNotification}/> <span>Notifications</span></Col>
                </Row>
            </List.Item>
        )
    }

    function renderContactContainer(type: ContactType) {
        const isEmail = type === ContactType.EMAIL;

        const options = {
            title: isEmail ? 'Email' : 'SMS',
            addText: isEmail ? 'Add Email': 'Add SMS',
            items: (user.userContacts || []).filter(c => c.type == type)
        }

        return (
            <>
                <Row type="flex" align="bottom" justify="space-between">
                    <Col><span>{options.title}</span></Col>
                    <Col span={2}>
                        <FullWidthButton type="primary" ghost>{options.addText}</FullWidthButton>
                    </Col>
                </Row>
                <Divider></Divider>
                <List
                    itemLayout="horizontal"
                    dataSource={options.items}
                    renderItem={renderContactRow}
                />
            </>
        )
    }


    return (
        <Card bordered={false}>
            
            { renderContactContainer(ContactType.EMAIL) }

            <div style={{ marginTop: 10 }}>
                { renderContactContainer(ContactType.SMS) }
            </div>
            
        </Card>
    )
}

export default UserFormContacts;