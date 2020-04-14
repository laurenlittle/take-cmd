import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import './global';
import UserProvider from './components/providers/UserProvider';

ReactDOM.render(
  <UserProvider>
    <Routes />
  </UserProvider>,
document.getElementById('app'));