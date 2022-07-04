import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';
import axios from 'axios'
import Home from './home';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Login from './login'


function App() {  
 
  return (
    <Router>
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/' element={<Login />} />
    </Routes>
  </Router>
  );
}

export default App;
