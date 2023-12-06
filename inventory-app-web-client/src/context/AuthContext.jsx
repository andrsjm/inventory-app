// AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('accessToken');
    const savedUsername = localStorage.getItem('username');

    if (savedToken && savedUsername) {
      setAccessToken(savedToken);
      setUsername(savedUsername);
    }
  }, []);

  const login = (token, name) => {
    setAccessToken(token);
    setUsername(name);
    localStorage.setItem('accessToken', token);
    localStorage.setItem('username', name);
  };

  const setNewUsername = (name) => {
    setUsername(name);
    localStorage.setItem('username', name);
  };

  const logout = () => {
    setAccessToken(null);
    setUsername(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider value={{ accessToken, username, login, logout, setNewUsername }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};