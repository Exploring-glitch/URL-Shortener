import React, { useState } from 'react'
import { login_User } from '../api/userApi';

const LoginUser = ({state}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const data = await login_User(email, password);
      setLoading(false);
      console.log("signin success")
    } catch (e) {
      setLoading(false);
      setError(e.message || 'Login failed. Please check your credentials.');
    }
  };



  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6">Signin</h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
            {error}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-[#E0E0E0] text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          value={email}
          onInput={(c) => {setEmail(c.target.value)}}
          id="email"
          type="email"
          placeholder="example: conradward@gmail.com"
          className=" bg-[#2C2C2C] border rounded w-full p-2 text-[#9E9E9E] focus:outline-none focus:ring-2 focus:ring-[#2979FF]"
        />
      </div>

      <div className="mb-4">
        <label className="block text-[#E0E0E0] text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          value={password}
          onInput={(c) =>{setPassword(c.target.value)}}
          id="password"
          type="password"
          placeholder="**********"
          className=" bg-[#2C2C2C] border rounded w-full p-2 text-[#9E9E9E] focus:outline-none focus:ring-2 focus:ring-[#2979FF]"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-[#2979FF] hover:bg-[#1E63E6] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </div>

      <div className="text-center mt-4">
        <p className="cursor-pointer text-sm text-gray-600">
          Don't have an account? <span onClick={() => state(true)} className="text-[#2979FF] hover:text-[#2168ec]"><u>Sign Up</u></span>
        </p>
      </div>
    </div>
  )
}


export default LoginUser

