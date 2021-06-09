import React from 'react';
import Header from './components/Header';
import './App.css';
import Chat from './components/Chat'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from "styled-components"
import Sidebar from './components/Sidebar';
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from './firebase';
import Login from './components/Login';
function App() {
  const [user,loading]=useAuthState(auth);
  return (
    <div className="app">
      <Router>
        {!user ?(
          <Login />
        ) : (
      <>
      <Header />
        <AppBody>
          <Sidebar/>
        <Switch>
          <Route path="/" exact>
            <Chat/>
          </Route>
        </Switch>
        </AppBody>
      </>
      )}
    </Router>
    </div>
  );
}

export default App;
const AppBody=styled.div`
  height: 100vh;
  display: flex;

`