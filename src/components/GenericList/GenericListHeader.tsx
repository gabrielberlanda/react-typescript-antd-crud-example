import React from 'react'
import { SubHeader } from '../StyledComponents';
import { PageHeader, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import { GenericListProps } from '.';
import LinkButton from '../LinkButton';


const GenericListHeader: React.SFC<GenericListProps<any>> = (props) => {

    const { title, baseRoute } = props; 
    const addButtonText = props.addButtonText || 'New';

    return (
        <SubHeader type="flex" justify="space-between" align="middle">
            <PageHeader title={title}></PageHeader>
            <Col>
                <LinkButton to={`${baseRoute}/create`} type="primary">
                    {addButtonText}
                </LinkButton>
            </Col>
        </SubHeader>
    )
}

export default GenericListHeader;