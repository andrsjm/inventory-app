import React, { useState } from 'react';

const AddUserModal = ({ open, onClose, onaAddUser }) => {
  const [newUser, setNewUser] = useState({
    type: '',
    name: '',
    image:'',
    email:'',
    password:''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleAddUser = () => {
    onaAddUser(newUser)
    console.log(first)
  };

  if (!open) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-opacity ${
        open ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md w-96 text-center">
        <h1 className="text-2xl text-blue-500 font-semibold mb-4">Add New User</h1>
        
        <div className="mb-4">
          <input
            type="text"
            name="type"
            placeholder="Type"
            value={newUser.type}
            onChange={handleInputChange}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={newUser.name}
            onChange={handleInputChange}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={newUser.email}
            onChange={handleInputChange}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="image"
            placeholder="Image"
            value={newUser.image}
            onChange={handleInputChange}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={newUser.password}
            onChange={handleInputChange}
            className="w-full border rounded-md py-2 px-3"
          />
        </div>

        <button
          onClick={handleAddUser}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mr-2"
        >
          Add User
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddUserModal;
