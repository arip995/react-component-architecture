import React from 'react';
import { useState,useEffect } from 'react';
import Home from './Components/Home';
import User from './Components/User';
import UserTodos from './Components/UserTodos';
import UserAddress from './Components/UserAddress';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={Home}/>
      <Route exact path='/user' component={User}/>
      <Route exact path='/Usertodos' component={UserTodos}/>
      <Route exact path='/UserAddress' component={UserAddress}/>
   </Router>
  )
}

export default App;

