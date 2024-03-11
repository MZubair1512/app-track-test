import React, { createContext, useState } from 'react';

const UserContext = createContext();

const Usercontext = ({children}) => {
    const [value, setValue] = useState("");
    return (
      <UserContext.Provider value={{ value, setValue }}>
        {children}
      </UserContext.Provider>
    );
  };


export {Usercontext,UserContext}