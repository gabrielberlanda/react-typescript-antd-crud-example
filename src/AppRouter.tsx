import React from 'react';
import { AppContainer,  AppContent, AppContentWrapper, AppTitle, AppHeader } from './components/StyledComponents';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserListContainer from './containers/UserList';
import { Constants } from './utils/Constants';
import UserFormContainer from './containers/UserForm';
import HomeContainer from './containers/Home';

export interface NavRoute {
  path: string;
  text: string;
  icon: string;
  key: string;
}

const navRoutes: NavRoute[] = [
  { path: '/', text: 'Home', icon: 'home', key: 'home' },
  { path: '/users', text: 'Users', icon: 'user', key: 'user' }
];


const UserRoutes = function () {
  return (
    <>
      <Route path="/users" exact component={ UserListContainer }/>
      <Route path="/users/create" exact component={ UserFormContainer }/>
      <Route path="/users/edit/:id" exact component={ UserFormContainer }/>
    </>
  )
}

const Routes = () => (
  <>
    <UserRoutes/>
    <Route path="/" exact component={ HomeContainer } />
    <Route path="/about" exact component={() => <h1>About</h1>}/>
  </>
)

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <AppHeader>
          <AppTitle style={{ marginRight: 20 }}>{ Constants.title }</AppTitle>
          <Navbar navRoutes={ navRoutes }/>
        </AppHeader>
        <AppContentWrapper>
          <AppContent>
            <Routes/>
          </AppContent>
        </AppContentWrapper>
      </AppContainer>
    </BrowserRouter>
  )
}


export default AppRouter;
