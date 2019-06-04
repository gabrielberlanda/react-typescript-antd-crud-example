import React, { useState } from 'react'
import { Table, Row, Col, Button, Tooltip, Dropdown, Menu, Typography, Divider, Popover } from 'antd';
import { TableProps } from 'antd/lib/table';
import { ExportableFileType } from './ExportableFileType';
import { ClickParam } from 'antd/lib/menu';
import { FullWidthButton } from '../StyledComponents';

interface Props<T> extends TableProps<T>{
  isExportable?: boolean;
  filterContainer?: any; //Optional row for filter
};

const ExportableTable: React.SFC<Props<any>> = (props) => {

  const { title, filterContainer, isExportable, ...tableProps} = props;
  
  const [ exportPopoverOpen, setExportPopoverOpen ] = useState(false);

  function exportFileHandler(fileType: ExportableFileType) {
    setExportPopoverOpen(false)
  }

  function renderChooseFileTypeMenuPopover() {
    return (
      <div>
        <Row>
          <FullWidthButton style={{ flex: 1 }} onClick={() => exportFileHandler(ExportableFileType.CSV)}>CSV</FullWidthButton>
        </Row>
        <Row style={{ marginTop: 5 }}>
          <FullWidthButton onClick={() => exportFileHandler(ExportableFileType.PDF)}>PDF</FullWidthButton>
        </Row>
      </div>
    )
  };

  return (
    <>

      <Row type="flex">
        <Col span={18}> 
          { filterContainer }
        </Col>
        <Col style={{ flex: 1 }}/>
        <Col>
          <Tooltip title="Download table data" placement="topRight">
            <Popover 
              trigger={'click'}
              title="Choose file type"
              placement="bottom"
              visible={exportPopoverOpen}
              onVisibleChange={setExportPopoverOpen}
              content={renderChooseFileTypeMenuPopover()}>

              <Button type="primary" shape="circle" icon="download" size="large" />
              
            </Popover>
          </Tooltip>
        </Col>
      </Row>
      
      <div style={{ marginTop: 20 }}>
        <Table {...tableProps}/>
      </div>

    </>
  );
}

export default ExportableTable;