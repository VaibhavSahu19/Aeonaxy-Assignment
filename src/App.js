import React from 'react'
import Signup from './components/Signup/Signup'
import Profile from './components/CreateProfile/Profile'
import { UserContext, UserProvider } from "../src/Context.js";
import Description from './components/Description/Description.js';

function App() {
  return (
    <UserProvider>
      <div>
        {/* <Signup /> */}
        {/* <Profile /> */}
        <Description />
      </div>
    </UserProvider>
  )
}

export default App