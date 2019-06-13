import React from 'react'
import { ApplicationUserContact, ContactType } from '../../../models/ApplicationUser';
import { FieldArray } from 'formik';
import { Row, Col, Divider, List, Button } from 'antd';
import { FullWidthButton } from '../../../components/StyledComponents';
import { FormItem, Input, Checkbox } from '@jbuschke/formik-antd';

interface Props {
    title: string;
    addText?: string,
    items: ApplicationUserContact[];
    formFieldName: string,
    type: ContactType
}

const UserFormContactsForm: React.SFC<Props> = (props: Props) => {
    const { title, items, formFieldName, type } = props;
    const addText = props.addText || 'Add';

    function renderFormHeader(pushFn: (obj: ApplicationUserContact) => void) {

        function pushNewContact() {
            pushFn({ value: '', allowNotification: false, type })
        }

        return (
            <Row type="flex" align="bottom" justify="space-between">
                <Col><span>{title}</span></Col>
                <Col span={2}>
                    <FullWidthButton type="primary" ghost onClick={pushNewContact}>
                        {addText}
                    </FullWidthButton>
                </Col>
            </Row>
        )
    }

    function renderContactRow(contact: ApplicationUserContact, index: number, remove: () => void) {

        const fieldValue = `${formFieldName}.${index}.value`;
        const fieldAllowNotification = `${formFieldName}.${index}.allowNotification`;

        return (
            <List.Item actions={[ <Button style={{marginTop: -20}} type="link" onClick={remove}>delete</Button>]}>
                <Row style={{ flex: 1 }} type="flex" align="middle" justify="space-between">
                    <Col span={18}>
                        <FormItem hasFeedback showValidateSuccess name={fieldValue} labelCol={{ span: 2 }} label="Value" required={true}>
                            <Input name={fieldValue}/>
                        </FormItem>
                    </Col>
                    <Col span={6}>
                        <FormItem name={fieldAllowNotification} labelCol={{ span: 1 }}>
                            <Checkbox name={fieldAllowNotification}>Allow notifications</Checkbox>
                        </FormItem>
                    </Col>
                </Row>
            </List.Item>
        )
    }

    function renderContactList(removeFn: (index: number) => void) {
        return (
            <List
                itemLayout="horizontal"
                dataSource={items}
                renderItem={(item, index) => renderContactRow(item, index, () => removeFn(index))}
            />
        )
    }

    return (
        <FieldArray
            name={formFieldName}
            render={({ push, remove }) => (
                <>
                    { renderFormHeader(push) }
                    
                    <Divider></Divider>

                    { renderContactList(remove) }

                </>
            )}   
        />
    )
}

export default UserFormContactsForm;
