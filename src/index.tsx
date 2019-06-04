import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './AppRouter';
import { LocaleProvider } from 'antd';
import pt_BR from 'antd/lib/locale-provider/pt_BR';


const Bootstrap: React.FC = () => {
  return (
    <LocaleProvider locale={pt_BR}>
      <AppRouter/>
    </LocaleProvider>
  )
}

ReactDOM.render(<Bootstrap/>, document.getElementById('root'));
