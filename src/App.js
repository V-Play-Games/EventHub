import React, { Profiler, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/loginPage';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';

function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/profileinfo' element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App