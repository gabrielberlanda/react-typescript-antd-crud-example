import React, { useState, useEffect } from 'react'
import { Typography, Button, Row, Col, message } from 'antd';
import { Link } from 'react-router-dom';
import { ApplicationUser } from '../../models/ApplicationUser';
import { getUsers } from '../../services/ApplicationUserService';
import UserListTable from './UserListTable';


const UserListContainer: React.FC = () => {

  const [users, setUsers] = useState<ApplicationUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('');

  //Init function
  useEffect(() => {
    loadUsers();
  }, [filter]);

  async function loadUsers() {
    setLoading(true);
    
    const usersLoaded: ApplicationUser[] = await getUsers(filter);

    setUsers(usersLoaded);
    setLoading(false);
  }

  function editUserHandler(user: ApplicationUser) {
    console.log('Edit user', user);
  }

  function removeUserHandler(user: ApplicationUser) {
    setUsers(users.filter(u => u.id !== user.id));
    message.success(`User ${user.name} deleted successfully!`);
  }


  return (
    <div>
      <Row type="flex" justify="space-between" align="middle">
        <Col span={22}><Typography.Title level={3}>User's List</Typography.Title></Col>
        <Col>
          <Button type="primary"><Link to="/users/form">New User</Link></Button>
        </Col>
      </Row>

      <div style={{ marginTop: 20 }}>
        <UserListTable 
          users={users}
          filter={filter}
          onChangeFilter={setFilter}
          onEdit={editUserHandler}
          onRemove={removeUserHandler}
          loading={loading}
        />
      </div>
    </div>
  )
};

export default UserListContainer;