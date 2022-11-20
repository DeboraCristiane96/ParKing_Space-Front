import React from 'react';
import 'bootswatch/dist/vapor/bootstrap.css';
import NavBar from './components/NavBar';
import AppRoutes from './main/AppRoutes';
import SessionProvider from './main/SessionProvider';
export default class App extends React.Component {

  render() {
    return (
      <SessionProvider>
        <NavBar />
        <AppRoutes />
      </SessionProvider>
    )
  }
} 