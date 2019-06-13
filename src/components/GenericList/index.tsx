import React from 'react'

import GenericListHeader from './GenericListHeader';
import GenericListTable from './GenericListTable';
import { ColumnProps } from 'antd/lib/table';
import { Content } from '../StyledComponents';

export interface GenericListProps<T> {
    title: string;
    baseRoute: string;
    entities: any[],
    tableDef: ColumnProps<T>[], 

    loading?: boolean;
    idField?: string;     
    filterComponent?: React.ReactNode;
    addButtonText?: string;
    showAddButton?: boolean;
}

const GenericList: React.SFC<GenericListProps<any>> = (props) => {

    return (

        <div>
            
            <GenericListHeader {...props}/>

            <Content>
                <GenericListTable {...props}/>
            </Content>

        </div>
        
    )
}

export default GenericList;