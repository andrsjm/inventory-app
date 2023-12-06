import React, { useContext, useNavigate } from 'react'
import {BrowserRouter, Router, Routes, Route, Navigate} from 'react-router-dom'
import Sidebar from './component/Sidebar'
import Dashboard from './pages/Dashboard'
import User from './pages/User'
import Transaction from './pages/Transaction'
import Goods from './pages/Goods'

import LoginPage from './pages/LoginPage'
import {AuthProvider, useAuth } from './context/AuthContext';

const RedirectToLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login');
  }, [navigate]);

  return null;
};

const App = () => {
  const { accessToken } = useAuth();

  return (
      <div>
        <main className='flex flex-row'>
          <BrowserRouter>
          {!accessToken ? 
            '' : 
            <Sidebar >
              <Routes>
                <Route path='/' element={accessToken ? <Dashboard /> : <LoginPage />} />
                <Route path='/register' element={accessToken ? <Dashboard />  : <LoginPage />} />
                <Route path='/user' element={accessToken ? <User />  : <LoginPage />} />
                <Route path='/transaction' element={accessToken ? <Transaction />  : <LoginPage />} />
                <Route path='/goods' element={accessToken ? <Goods />  : <LoginPage />} />
                <Route path='/login' element={accessToken ? <Dashboard />  : <LoginPage />} />
              </Routes>
            </Sidebar>}
          </BrowserRouter>
        </main>
      </div>
  );
};

export default App