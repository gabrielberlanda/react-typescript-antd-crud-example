import React from 'react'
import { SubHeader } from '../StyledComponents';
import { PageHeader, Col } from 'antd';
import { GenericListProps } from '.';
import LinkButton from '../LinkButton';

const GenericListHeader: React.SFC<GenericListProps<any>> = (props) => {

    const { title, baseRoute } = props; 
    const addButtonText = props.addButtonText || 'New';
    const showAddButton = props.showAddButton || true;

    function renderAddButton() {
        if(!showAddButton) return null;

        return (
            <LinkButton to={`${baseRoute}/create`} type="primary">
                {addButtonText}
            </LinkButton>
        )
    }

    return (
        <SubHeader type="flex" justify="space-between" align="middle">
            <PageHeader title={title}></PageHeader>
            <Col style={{marginRight: 24 }}>
                { renderAddButton() }
            </Col>
        </SubHeader>
    )
}

export default GenericListHeader;