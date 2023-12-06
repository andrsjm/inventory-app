import React, { createContext, useContext } from 'react';
import axios from 'axios';

// Create a new context
const ApiContext = createContext();

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: 'http://localhost:3030',
});

// Create a provider component to wrap your app with
const ApiProvider = ({ children }) => {
  return <ApiContext.Provider value={api}>{children}</ApiContext.Provider>;
};

// Custom hook to access the Axios instance
const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};

export { ApiProvider, useApi };
