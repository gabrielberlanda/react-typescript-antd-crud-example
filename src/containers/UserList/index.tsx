import React, { useState, useEffect } from 'react'
import { Button, Col, message, PageHeader } from 'antd';
import { Link } from 'react-router-dom';
import { ApplicationUser } from '../../models/ApplicationUser';
import { getUsers } from '../../services/ApplicationUserService';
import UserListTable from './UserListTable';
import { Card, SubHeader } from '../../components/StyledComponents';


const UserListContainer: React.FC = () => {

  const [users, setUsers] = useState<ApplicationUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('');

  //Init function
  useEffect(() => {

    async function loadUsers() {
      setLoading(true);
      
      const usersLoaded: ApplicationUser[] = await getUsers(filter);
  
      setUsers(usersLoaded);
      setLoading(false);
    }
    
    loadUsers();
  }, [filter]);



  function editUserHandler(user: ApplicationUser) {
    console.log('Edit user', user);
  }

  function removeUserHandler(user: ApplicationUser) {
    setUsers(users.filter(u => u.id !== user.id));
    message.success(`User ${user.name} deleted successfully!`);
  }


  return (
    <div>

      <SubHeader type="flex" justify="space-between" align="middle">
        <PageHeader title="User's List"></PageHeader>
        <Col> <Button type="primary"><Link to="/users/create">New User</Link></Button> </Col>
      </SubHeader>
      
      <Card style={{ marginTop: 20 }} bordered={false}>
        <UserListTable 
          users={users}
          filter={filter}
          onChangeFilter={setFilter}
          onEdit={editUserHandler}
          onRemove={removeUserHandler}
          loading={loading}
        />
      </Card>

    </div>
  )
};

export default UserListContainer;