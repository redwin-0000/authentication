import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

import {auth} from "./firebase";

function App() {
const [userName, setUserName] = useState("");
useEffect(()=>{
  auth.onAuthStateChanged((user)=>{
    if(user){
setUserName(user.displayName)
    } else setUserName("");
  });
},[]);
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route 
          path='/Login'
          element = {<Login />}/>
          <Route 
          path='/'
          element = {<SignUp />}/>
          <Route 
          path='/Home'
          element = {<Home name={userName} />}/>
        </Routes>
      </Router>
      {/* */}
    </div>
  );
}

export default App;
