import React, { useState } from 'react'
import { Tooltip, Popover, Button, Row } from 'antd';
import { FullWidthButton } from '../StyledComponents';
import { ExportableFileType } from './ExportableFileType';

interface Props {
  fileTypes: ExportableFileType[],
  onClick: (type: ExportableFileType) => {},
  loading?: boolean
};

const ExportableButton: React.SFC<Props> = ({ fileTypes, onClick, loading }) => {

  const [popoverOpened, setPopoverOpened] = useState(false);

  function optionSelectHandler(fileTypeSelected: ExportableFileType) {
    setPopoverOpened(false);
    onClick(fileTypeSelected);
  }

  function renderChooseFileTypeMenuPopover() {
 
    const buttons = fileTypes.map((e, i) => {
      return (
        <Row key={i}>
          <FullWidthButton onClick={() => optionSelectHandler(e)}>
            {e.toString()}
          </FullWidthButton>
        </Row>
      )
    });

    return <div>{ buttons }</div>
  };

  return (
    <Tooltip 
      title="Download table data" 
      placement="topRight">
      
      <Popover 
        trigger={'click'} 
        placement="bottom" 
        title="Choose file type" 
        visible={popoverOpened} 
        onVisibleChange={setPopoverOpened} 
        content={renderChooseFileTypeMenuPopover()}>

        <Button 
          type="primary" 
          shape="circle" 
          icon="download" 
          size="large" 
          loading={loading}/>
      
      </Popover>
    </Tooltip>
  );
}

export default ExportableButton;