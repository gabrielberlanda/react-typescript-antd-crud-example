import React, { useState, useEffect } from 'react'
import { Button, message, Divider, Popconfirm, Input } from 'antd';
import { Link } from 'react-router-dom';
import { ApplicationUser } from '../../models/ApplicationUser';
import { getUsers } from '../../services/ApplicationUserService';
import GenericList from '../../components/GenericList';
import { ColumnProps } from 'antd/lib/table';
import StatusIcon from '../../components/StatusIcon';
import LinkButton from '../../components/LinkButton';

const UserListContainer: React.FC = () => {

  const tableDef: ColumnProps<ApplicationUser>[] = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Username', dataIndex: 'userName' },
    { title: 'Status', dataIndex: 'disabled', render: (disabled) => <StatusIcon isActived={disabled == null}/> },
    { title: 'Actions', render: renderActionRow, width: '15%' }
  ];

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


  function removeUserHandler(user: ApplicationUser) {
    setUsers(users.filter(u => u.id !== user.id));
    message.success(`User ${user.name} deleted successfully!`);
  }

  function renderActionRow(text: string, user: ApplicationUser) {
    return (
      <>
        
        <LinkButton to={`users/edit/${user.id}`} type="link"> edit </LinkButton>
        
        <Divider type="vertical" />
        
        <Popconfirm
          title={`Do you really want to delete ${user.name}?`} onConfirm={() => removeUserHandler(user)}
          okText="Delete" cancelText="Cancel">
            <Button type="link"> delete </Button>
        </Popconfirm>

      </>
    )
  }

  function renderFilterContainer() {
    return (
        <Input.Search 
          placeholder="Filter by name"
          onSearch={setFilter}
          enterButton 
        />
    )
  }

  return (

    <GenericList
      title="Users List"
      baseRoute="/users"
      entities={users}
      tableDef={tableDef}
      loading={loading}
      filterComponent={renderFilterContainer()}
    />
  )
};

export default UserListContainer;