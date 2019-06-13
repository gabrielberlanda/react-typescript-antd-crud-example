import React from 'react'
import { ApplicationUser } from '../../models/ApplicationUser';
import { ColumnProps } from 'antd/lib/table';
import StatusIcon from '../../components/StatusIcon';
import { Button, Divider, Popconfirm, Input } from 'antd';
import ExportableTable from '../../components/ExportableTable';
import { Link } from 'react-router-dom';

interface Props {
    users: ApplicationUser[],
    loading: boolean,
    filter: string,
    onChangeFilter: (filter: string) => void,
    onRemove: (user: ApplicationUser) => void,
    onEdit: (user: ApplicationUser) => void
}

const UserListTable: React.SFC<Props> = (props: Props) => {
    const { users, loading, onRemove, onEdit, onChangeFilter } = props;

    const userTableColumns: ColumnProps<ApplicationUser>[] = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Username', dataIndex: 'userName', key: 'userName' },
        { 
          title: 'Status', 
          dataIndex: 'disabled', 
          key: 'disabled', 
          render: (disabled) => {
            return <StatusIcon isActived={disabled == null}/>
          }
        },
        {
          title: 'Actions',
          key: 'actions',
          render: renderActionRow,
          width: '15%'
        }
    ];

    function renderActionRow(text: string, user: ApplicationUser) {
      return (
        <>
          <Link to={`users/edit/${user.id}`}>
            <Button type="link" onClick={() => onEdit(user)}> edit </Button>
          </Link>
          <Divider type="vertical" />
          <Popconfirm
            title={`Do you really want to delete ${user.name}?`}
            onConfirm={() => onRemove(user)}
            okText="Delete"
            cancelText="Cancel">
            <Button type="link"> delete </Button>
          </Popconfirm>
        </>
      )
    }

    return (
      <ExportableTable 
        filterContainer={
          <Input.Search 
            placeholder="Filter by name"
            onSearch={value => onChangeFilter(value)}
            enterButton 
          />
        }
        listName="User_List"
        columns={userTableColumns} 
        rowKey="id" 
        loading={loading} 
        dataSource={users}/>
    )
}

export default UserListTable;