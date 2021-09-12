import React, { useEffect } from "react";
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from "./Login.js";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{basket}, dispatch] = useStateValue();

  useEffect(()=>{
// runs onces when the app component loads
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>', authUser);

      if(authUser){
          dispatch({
            // if you are logged in or just logged in thus this will keep them looged in from the firebase database

            type: 'SET_USER',
            user: authUser
          })
      }else{
        // if the user is logged out or not logged in
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  },[])

  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
       </Route>
       <Route path="/">
         <Header />
         <Home />
       </Route>
      </Switch>
  

    </div>
    </Router>
  );
}

export default App;
