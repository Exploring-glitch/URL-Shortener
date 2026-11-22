import React, { useState } from 'react'
import { login_User } from '../api/userApi';
import {useDispatch, useSelector} from 'react-redux'; //redux
import { login } from '../store/slice/authSlice';
import { useNavigate } from '@tanstack/react-router';


const LoginUser = ({state}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate(); //tanstack
  const dispatch = useDispatch(); //redux
  const auth = useSelector((state) => state.auth) 
  console.log(auth);

  

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const data = await login_User(email, password);

      dispatch(login(data.user))
      navigate({to : "/dashboard"}) //this means, when user login, go to the dashboard page

      setLoading(false);
      console.log("signin success")
    } catch (e) {
      setLoading(false);
      setError(e.message || 'Login failed. Please check your credentials.');
    }
  };



  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-center mb-6">Sign In</h2>

      {error && (
        <div className="mb-4 p-3 border border-[#404040] text-[#FAFAFA] rounded-md text-sm">
            {error}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm text-[#A3A3A3] mb-2" htmlFor="email">
          Email
        </label>
        <input
          value={email}
          onInput={(c) => {setEmail(c.target.value)}}
          id="email"
          type="email"
          placeholder="you@example.com"
          className="bg-[#111111] border border-[#333333] rounded-md w-full p-2.5 text-[#FAFAFA] placeholder:text-[#666666] focus:outline-none focus:ring-1 focus:ring-[#FAFAFA] focus:border-[#FAFAFA] text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm text-[#A3A3A3] mb-2" htmlFor="password">
          Password
        </label>
        <input
          value={password}
          onInput={(c) =>{setPassword(c.target.value)}}
          id="password"
          type="password"
          placeholder="Enter your password"
          className="bg-[#111111] border border-[#333333] rounded-md w-full p-2.5 text-[#FAFAFA] placeholder:text-[#666666] focus:outline-none focus:ring-1 focus:ring-[#FAFAFA] focus:border-[#FAFAFA] text-sm"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-[#FAFAFA] hover:bg-[#D4D4D4] text-[#0A0A0A] transition-colors duration-200 font-medium text-sm py-2.5 px-4 rounded-md focus:outline-none disabled:opacity-50 w-full"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </div>

      <div className="text-center mt-4">
        <p className="cursor-pointer text-sm text-gray-600">
          Don't have an account? <span onClick={() => state(false)} className="text-[#2979FF] hover:text-[#2168ec]"><u>Sign Up</u></span>
        </p>
      </div>
    </div>
  )
}


export default LoginUser

