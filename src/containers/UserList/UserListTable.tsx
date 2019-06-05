import React from 'react'
import { ApplicationUser } from '../../models/ApplicationUser';
import { ColumnProps } from 'antd/lib/table';
import StatusIcon from '../../components/StatusIcon';
import { Button, Divider, Popconfirm } from 'antd';
import ExportableTable from '../../components/ExportableTable';

interface Props {
    users: ApplicationUser[],
    loading: boolean,
    onRemove: (user: ApplicationUser) => void,
    onEdit: (user: ApplicationUser) => void
}

const UserListTable: React.SFC<Props> = (props: Props) => {
    const { users, loading, onRemove, onEdit } = props;

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
          render: renderActionRow
        }
    ];

    function renderActionRow(text: string, user: ApplicationUser) {
        return (
          <>
            <Button type="link" onClick={() => onEdit(user)}> Edit </Button>
            <Divider type="vertical" />
            <Popconfirm
              title={`Do you really want to delete ${user.name}?`}
              onConfirm={() => onRemove(user)}
              okText="Delete"
              cancelText="Cancel">
              <Button type="link"> Delete </Button>
            </Popconfirm>
          </>
        )
      }

    return (
        <ExportableTable columns={userTableColumns} rowKey="id" loading={loading} dataSource={users}/>
    )
}

export default UserListTable;