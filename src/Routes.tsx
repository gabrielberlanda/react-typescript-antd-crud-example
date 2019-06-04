import React from 'react';
import { AppContainer,  AppContent, AppContentWrapper, AppTitle, AppHeader } from './components/AntStyled';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import userListContainer from './containers/UserList';

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
          <AppTitle>React Example</AppTitle>
        </AppHeader>
        <AppHeader>
          <Navbar navRoutes={navRoutes}/>
        </AppHeader>
        <AppContentWrapper>
          <AppContent>
            <Route path="/" exact component={() => <h1>Home</h1>}/>
            <Route path="/users" exact component={userListContainer}/>
            <Route path="/about" exact component={() => <h1>About</h1>}/>
          </AppContent>
        </AppContentWrapper>
      </AppContainer>
    </BrowserRouter>
  )
}


export default AppRouter;
