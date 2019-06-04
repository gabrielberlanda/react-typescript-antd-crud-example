import React, { useState } from 'react'
import { Table, Row, Col } from 'antd';
import { TableProps } from 'antd/lib/table';
import { ExportableFileType } from './ExportableFileType';
import ExportableButton from './ExportableButton';

interface Props<T> extends TableProps<T>{
  isExportable?: boolean;
  filterContainer?: any; //Optional row for filter
};

const ExportableTable: React.SFC<Props<any>> = (props) => {

  const { title, filterContainer, isExportable, ...tableProps} = props;

  const [exportLoading, setExportLoading] = useState(false);

  async function exportDataHandler(type: ExportableFileType) {
    setExportLoading(true);

    setTimeout(() => {
      setExportLoading(false);
    }, 2000);

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
        <Table {...tableProps}/>
      </div>

    </>
  );
}

export default ExportableTable;