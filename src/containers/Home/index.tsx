import React from 'react'
import { Card, Content } from '../../components/StyledComponents';

const HomeContainer: React.FC = () => {

    return (
        <Content>
            <Card bordered={false} title={'What is React?'}>
                <span>A declarative, efficient, and flexible JavaScript library for building user interfaces.</span>
            </Card>
        </Content>
    )
}

export default HomeContainer;