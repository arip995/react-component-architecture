import React from 'react';
import { useEffect } from 'react';
import Home from './Components/Home';
import User from './Components/User';
import UserTodos from './Components/UserTodos';
import UserAddress from './Components/UserAddress';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const axios = require('axios');


const App = () => {
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) =>{
      localStorage.setItem('user',JSON.stringify(response.data))
    })
    .catch((error) =>console.error(error));

    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) =>{
      localStorage.setItem('userTodos',JSON.stringify(response.data))
    })
    .catch((error) =>console.error(error));
  },[])
  return (
    <Router>
      <Route exact path='/' ><Home /></Route>
      <Route exact path='/user'><User /></Route>
      <Route exact path='/Usertodos'><UserTodos /></Route>
      <Route exact path='/UserAddress'><UserAddress /></Route>
   </Router>
  )
}

export default App;

