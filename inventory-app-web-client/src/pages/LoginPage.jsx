import { useState, useContext } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'

export default function LoginPage(){
    const navigate = useNavigate();
    const { login } = useAuth();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    // Handle Change State
    const handleChangeEmail = (e)=>{
        setLoginData({ ...loginData, email: e.target.value });
    }
    const handleChangePassword = (e)=>{
        setLoginData({ ...loginData, password: e.target.value });
    }
      
    async function handleLogin() {
        try {
          const response = await axios.post('http://10.10.101.25:3030/user/login', {
            email: loginData.email,
            password: loginData.password,
          });
    
          console.log(response);
          const userData = response.data.Data;
    
          // Use the login function from AuthContext to update user data
          login(userData.accessToken, userData.username);
    
          // Redirect the user to the dashboard or any other page
          navigate('/');
        } catch (error) {
          console.error(error);
        }
      }

    return(
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl text-center font-semibold mb-4">Login</h2>

                <form>
                <div className="mb-4">
                    <label className="block text-gray-600">Email</label>
                    <input type="text" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" onChange={handleChangeEmail}/>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-600">Password</label>
                    <input type="password" id="password" name="password" className="w-full p-2 border border-gray-300 rounded" onChange={handleChangePassword}/>
                </div>

                <button type="button" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full" onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    );
}