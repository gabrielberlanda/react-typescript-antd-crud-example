import React from 'react'
import { Card } from '../../components/StyledComponents';

const HomeContainer: React.FC = () => {

    return (
        <>
            <Card bordered={false} title={'What is React?'}>
                <span>A declarative, efficient, and flexible JavaScript library for building user interfaces.</span>
            </Card>
        </>
    )
}

export default HomeContainer;