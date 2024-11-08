import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/loginPage';

function App(){
  return(
    <Router>
      <Routes>
        <Route path='' element={<LoginPage/>}/>
      </Routes>
    </Router>
  )
}

export default App