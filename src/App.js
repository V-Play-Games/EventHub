import React, { Profiler, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/loginPage';
import Layout from './Pages/Layout';
import ExamCategories from './Pages/Dashboard';
import Profile from './Pages/Profile';

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path='dashboard' element={<ExamCategories/>}/>
          <Route path='profile' element={<Profile/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App