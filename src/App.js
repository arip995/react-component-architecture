import React from 'react';
import { useState,useEffect } from 'react';
import Home from './Components/Home';
import User from './Components/User';
import UserTodos from './Components/UserTodos';
import UserAddress from './Components/UserAddress';
import Modals from './Components/Modals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const axios = require('axios');


const App = () => {
  const [users,setUsers] = useState([]);
  const [userTodos,setUserTodos] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) =>{
      localStorage.setItem('user',JSON.stringify(response.data))
      const data = JSON.parse(localStorage.getItem('user'));
      setUsers(data);
    })
    .catch((error) =>console.error(error));

    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) =>{
      localStorage.setItem('userTodos',JSON.stringify(response.data))
      setUserTodos(response.data)
    })
    .catch((error) =>console.error(error));
  },[])
  return (
    <Router>
      <Route exact path='/' ><Home /></Route>
      {/* <Route exact path='/' ><Modals /></Route> */}
      <Route exact path='/user'><User /></Route>
      <Route exact path='/Usertodos'><UserTodos /></Route>
      <Route exact path='/UserAddress'><UserAddress /></Route>
   </Router>
  )
}

export default App;

