import React, { useState } from 'react'
import { Table, Row, Col } from 'antd';
import { TableProps } from 'antd/lib/table';
import { ExportableFileType } from './ExportableFileType';
import ExportableButton from './ExportableButton';
import { exportData } from './ExportData';

interface Props<T> extends TableProps<T>{
  listName?: string;
  filterContainer?: any; //Optional row for filter
};

const ExportableTable: React.SFC<Props<any>> = (props) => {

  const { listName, filterContainer, ...tableProps} = props;

  const [exportLoading, setExportLoading] = useState(false);

  async function exportDataHandler(type: ExportableFileType) {
    
    setExportLoading(true);

    const { columns, dataSource } = props; 

    exportData(listName, type, dataSource || [], columns || [] );
    
    setTimeout(() => {
      setExportLoading(false);
    }, 500);
  }

  return (
    <>
      <Row type="flex">
        <Col span={18}> { filterContainer } </Col>
        <Col style={{ flex: 1 }}/>
        <Col>
          <ExportableButton 
            fileTypes={[ ExportableFileType.CSV, ExportableFileType.PDF ]}
            onClick={exportDataHandler}
            loading={exportLoading}
          /> 
        </Col>
      </Row>
      
      {/* Table loading */}
      <div style={{ marginTop: 20 }}>
        <Table 
          size="small"
          bordered={true}
          {...tableProps} />
      </div>

    </>
  );
}

export default ExportableTable;