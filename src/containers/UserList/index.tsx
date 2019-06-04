import React from 'react'
import { Typography, Button, Row, Col } from 'antd';
import ExportableTable from '../../components/ExportableTable';
import { Link } from 'react-router-dom';

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
      <Row type="flex" justify="space-between" align="middle">
        <Col span={22}><Typography.Title level={3}>User's List</Typography.Title></Col>
        <Col>
          <Button type="primary"><Link to="/users/form">New User</Link></Button>
        </Col>
      </Row>

      <div style={{ marginTop: 20 }}>
        <ExportableTable columns={columns} dataSource={dataSource}/>
      </div>
    </div>
  )
};

export default UserListContainer;