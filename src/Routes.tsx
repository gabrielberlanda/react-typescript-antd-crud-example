import React from 'react';
import { AppContainer, AppHeader, AppTitle, AppContent, AppContentWrapper } from './components/AntStyled';
import { BrowserRouter, Route } from 'react-router-dom';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <AppHeader>
          <AppTitle>React Example</AppTitle>
        </AppHeader>
        <AppContentWrapper>
          <AppContent>
            <Route path="/" exact component={() => <h1>Home</h1>}/>
            <Route path="/users" exact component={() => <h1>Users</h1>}/>
            <Route path="/about" exact component={() => <h1>About</h1>}/>
          </AppContent>
        </AppContentWrapper>
      </AppContainer>
    </BrowserRouter>
  )
}


export default AppRouter;
