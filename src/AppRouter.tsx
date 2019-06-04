import React from 'react';
import { AppContainer,  AppContent, AppContentWrapper, AppTitle, AppHeader } from './components/StyledComponents';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserListContainer from './containers/UserList';
import { Constants } from './utils/Constants';

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

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <AppHeader>
          <AppTitle>{ Constants.title }</AppTitle>
        </AppHeader>
        <AppHeader>
          <Navbar navRoutes={ navRoutes }/>
        </AppHeader>
        <AppContentWrapper>
          <AppContent>
            <Route path="/" exact component={() => <h1>Home</h1>}/>
            <Route path="/users" exact component={ UserListContainer }/>
            <Route path="/users/form" exact component={ () => <h1>User form</h1> }/>
            <Route path="/about" exact component={() => <h1>About</h1>}/>
          </AppContent>
        </AppContentWrapper>
      </AppContainer>
    </BrowserRouter>
  )
}


export default AppRouter;
