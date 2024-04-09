import React from 'react'
import Signup from './components/Signup/Signup'
import Profile from './components/CreateProfile/Profile';
import Description from './components/Description/Description.js';
import Verify from './components/Verification/Verify.js';
import NotFound from "./components/NotFound.js"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Signup />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/description' element={<Description />}></Route>
        <Route path='/verify' element={<Verify />}></Route>
        <Route path='*' element={<NotFound />}></Route>

      </Routes>
    </div>
  )
}

export default App
