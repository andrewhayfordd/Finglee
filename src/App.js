import React, { useState } from 'react';
import './App.css';
import "./Assert/fontawesome-free-6.5.1-web/css/all.min.css";
import "./Styles/Login.css";
import "./Styles/LeftSidebar.css";
import "./Styles/Header.css";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './Components/Login';
import { Layouts } from './Components/Layouts';


function App() {

  return (
  <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Layouts/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
