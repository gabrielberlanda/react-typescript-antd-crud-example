import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "antd/dist/antd.css";
import AppRouter from './AppRouter';


const Bootstrap: React.FC = () => {
  return (
      <AppRouter/>
  )
}

ReactDOM.render(<Bootstrap/>, document.getElementById('root'));
