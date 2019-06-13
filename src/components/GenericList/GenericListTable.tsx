import React from 'react'
import { GenericListProps } from '.';
import ExportableTable from '../ExportableTable';
import { Card } from '../StyledComponents';

const GenericListTable: React.SFC<GenericListProps<any>> = (props) => {
    const { filterComponent, title, tableDef, loading, entities } = props;
    const idField = props.idField || 'id';

    return(
        <Card bordered={false} style={{marginTop: 20}}>

            <ExportableTable
                filterContainer={filterComponent}
                listName={title}
                columns={tableDef}
                rowKey={idField}
                loading={loading}
                dataSource={entities}
            />
            
        </Card>
    )
}

export default GenericListTable;