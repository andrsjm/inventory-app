import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './component/Sidebar'
import Dashboard from './pages/Dashboard'
import User from './pages/User'
import Transaction from './pages/Transaction'
import Goods from './pages/Goods'

const App = () => {
  return (
    <div className='flex flex-row'>
      <Router>
        <Sidebar />
        <main>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/user' element={<User />} />
            <Route path='/transaction' element={<Transaction />} />
            <Route path='/goods' element={<Goods />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App