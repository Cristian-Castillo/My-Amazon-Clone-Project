import React,{useEffect} from 'react';
import './App.css';
import {Switch, Route} from 'react-router'
import { BrowserRouter as Router} from 'react-router-dom'
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import Login from './Login.js';
import {useStateValue} from './StateProvider.js';
import {auth} from './Firebase.js';

function App() {

  const [{user},dispatch] = useStateValue();

  // useEffect <<<<< POWERFUL
  // Piece of code which runs based on a give condition
  // run onces only since [] is empty, because we only want it to
  // run once to listen if the user login/logout
  useEffect(() => {
    /* Listener for login/logout from firebase*/
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        // then user is logged in...
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        // the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    });

    /* Clean up : If anything changes or doesnt work properly
      it returns an unsubscribe */
    return ()=> {
    // Any cleanup ops go in here...bg-contain, any listener would detach and reattach
    unsubscribe();
    }
  },[])



  return (
    <Router>   
    <div className="app">
      <Switch>
        <Route path='/checkout'>
          <Header />
          <Checkout />
        </Route>
        <Route path='/login'>
          <Login />
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

