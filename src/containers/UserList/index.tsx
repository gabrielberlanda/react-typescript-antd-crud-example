import React from 'react'
import { Typography } from 'antd';
import ExportableTable from '../../components/ExportableTable';

const UserListContainer: React.FC = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <div>
      <Typography.Title level={3}>User's List</Typography.Title>
      <ExportableTable columns={columns} dataSource={dataSource}/>
    </div>
  )
};

export default UserListContainer;