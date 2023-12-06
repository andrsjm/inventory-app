import React, { useState } from 'react'
import AddUserModal from '../component/AddUserModal'

const User = () => {
  const [openAdd, setOpenAdd] = useState(false)

  const handleAddUser = async (newUser) => { 
    console.log(newUser)
   }
  
  return (
    <div className='p-5'>
      <button onClick={() => setOpenAdd(true)}>Add User</button>
      <AddUserModal open={openAdd} onClose={() => setOpenAdd(false)} onaAddUser={handleAddUser}  />
    </div>
  )
}

export default User