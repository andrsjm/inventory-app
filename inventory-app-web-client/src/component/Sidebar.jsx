import React from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='flex flex-col w-48 h-screen bg-green-200 p-3 gap-5'>
        <NavLink to={'/'} className={'text-xl hover:text-red-500'}>Inventory App's</NavLink>
        <nav className='px-6 mt-28 flex flex-col text-lg gap-12 '>
            <NavLink to={'/'} className={'hover:text-red-500'}>Dashboard</NavLink>
            <NavLink to={'/user'} className={'hover:text-red-500'}>User</NavLink>
            <NavLink to={'/transaction'} className={'hover:text-red-500'}>Transaction</NavLink>
            <NavLink to={'/goods'} className={'hover:text-red-500'}>Goods</NavLink>
        </nav>

        
    </div>
  )
}

export default Sidebar