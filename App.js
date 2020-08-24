import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router'
import { BrowserRouter as Router} from 'react-router-dom'
import Header from './Header.js';
import Home from './Home.js';

function App() {
  return (
    <Router>   
    <div className="app">
      <Switch>
        <Route path='/checkout'>
          <Header />
          <h1>Checkout</h1>
        </Route>
        <Route path='/login'>
          <h1>Login Page</h1>
        </Route>
        {/* This is default route */}
        <Route path ='/'>
          <Header />
          <Home /> 
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

