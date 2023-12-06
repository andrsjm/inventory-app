import React, { useState } from 'react'
import AddUserModal from '../component/AddUserModal'
import { useApi } from '../context/ApiContext'
import { useAuth } from '../context/AuthContext'

const User = () => {
  const [openAdd, setOpenAdd] = useState(false)
  const api = useApi()
  const {accessToken} = useAuth()

  const handleAddUser = async (newUser) => { 
    try {
      const res = await api.post('/user', newUser, {
        headers:{
          Authorization: `Bearer ${accessToken}`
        }
      })
    } catch (e) {
      console.log(e)
    }
  }
  
  return (
    <div className='p-5'>
      <button onClick={() => setOpenAdd(true)}>Add User</button>
      <AddUserModal open={openAdd} onClose={() => setOpenAdd(false)} onaAddUser={handleAddUser}  />
    </div>
  )
}

export default User