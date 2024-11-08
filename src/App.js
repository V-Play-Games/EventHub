import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {loginPage} from './Pages/loginPage'

function App(){
  return(
    <Router>
      <Routes>
        <Route path='/' element={<loginPage/>}/>
      </Routes>
    </Router>
  )
}

export default App