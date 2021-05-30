import React from 'react';
import Header from './components/Header';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
      <>
      <Header />
        <Switch>
          <Route path="/" exact>
          
          </Route>
        </Switch>
      </>
    </Router>
    </div>
  );
}

export default App;
