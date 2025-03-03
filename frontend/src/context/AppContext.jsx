import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <AppContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </AppContext.Provider>
  );
};