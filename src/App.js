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
import Spinner from 'react-spinkit';
function App() {
  const [user,loading]=useAuthState(auth);
  if(loading)
  {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src="https:/cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
          />
          <Spinner
            name="ball-spin-fade-loader"
            color= "purple"
            fadeIn="none"
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }
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
const AppLoading=styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents=styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 100px;
  align-items: center;
  text-align: center;
  >img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;