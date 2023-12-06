import React from 'react'
import { NavLink } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='flex flex-col w-48 h-screen bg-green-200 px-3 py-10 justify-between'>
      <NavLink to={'/'} className={'text-xl hover:text-red-500'}>Inventory App's</NavLink>
      <nav className='px-6 flex flex-col text-lg gap-12 '>
          <NavLink to={'/'} className={'hover:text-red-500'}>Dashboard</NavLink>
          <NavLink to={'/user'} className={'hover:text-red-500'}>User</NavLink>
          <NavLink to={'/transaction'} className={'hover:text-red-500'}>Transaction</NavLink>
          <NavLink to={'/goods'} className={'hover:text-red-500'}>Goods</NavLink>
      </nav>
      <div className='flex flex-col items-center gap-5'>
        <img src="https://source.unsplash.com/random" alt="" className='w-20 h-20 rounded-full object-cover' />
        <h1>Name</h1>
      </div>
    </div>
  )
}

export default Sidebar