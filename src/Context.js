import React, { createContext, useState } from 'react';

// Create a new context
const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
      location: '',
      reasons: ['', '', ''], // Initializing with three empty strings
    });
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  }
  
  export { UserContext, UserProvider };