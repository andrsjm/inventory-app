import React from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar = ({children}) => {
  return (
    <div className='flex'>
      <div className='flex-col w-48 h-screen bg-gradient-to-br from-sky-300 to-emerald-300 p-3 gap-5'>
          <NavLink to={'/'} className={'text-xl text-green-800 hover:text-purple-900 transition duration-300 ease-in-out'}>Inventory App's</NavLink>
          <nav className='px-6 flex flex-col text-lg gap-4 mt-4'>
              <NavLink to={'/'} className={'hover:text-purple-900 transition duration-300 ease-in-out'}>Dashboard</NavLink>
              <NavLink to={'/user'} className={'hover:text-purple-900 transition duration-300 ease-in-out'}>User</NavLink>
              <NavLink to={'/transaction'} className={'hover:text-purple-900 transition duration-300 ease-in-out'}>Transaction</NavLink>
              <NavLink to={'/goods'} className={'hover:text-purple-900 transition duration-300 ease-in-out'}>Goods</NavLink>
          </nav>
      </div>
      {children}
    </div>
  )
}

export default Sidebar