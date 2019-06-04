import React from 'react';
import { AppContainer, AppHeader, AppTitle, AppContent } from './components/AntStyled';
import { BrowserRouter, Route } from 'react-router-dom';

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContainer>
        <AppHeader>
          <AppTitle>React Example</AppTitle>
        </AppHeader>
        <AppContent>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Route path="/" exact component={() => <h1>Home</h1>}/>
            <Route path="/users" exact component={() => <h1>Users</h1>}/>
            <Route path="/about" exact component={() => <h1>About</h1>}/>
          </div>
        </AppContent>
      </AppContainer>
    </BrowserRouter>
  )
}


export default AppRouter;
