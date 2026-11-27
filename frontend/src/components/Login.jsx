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
        <div className="mb-4 p-3 border border-line text-ink rounded-md text-sm">
            {error}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm text-muted mb-2" htmlFor="email">
          Email
        </label>
        <input
          value={email}
          onInput={(c) => {setEmail(c.target.value)}}
          id="email"
          type="email"
          placeholder="you@example.com"
          className="bg-field border border-line rounded-md w-full p-2.5 text-ink placeholder:text-muted/70 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm text-muted mb-2" htmlFor="password">
          Password
        </label>
        <input
          value={password}
          onInput={(c) =>{setPassword(c.target.value)}}
          id="password"
          type="password"
          placeholder="Enter your password"
          className="bg-field border border-line rounded-md w-full p-2.5 text-ink placeholder:text-muted/70 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-sm"
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="bg-accent hover:bg-accent-strong text-white transition-colors duration-200 font-medium text-sm py-2.5 px-4 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-strong disabled:opacity-50 w-full"
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </div>

      <div className="text-center mt-4">
        <p className="text-sm text-muted">
          Don't have an account?{' '}
          <span onClick={() => state(false)} className="cursor-pointer text-ink underline underline-offset-4 hover:text-ink/80 transition-colors">Sign Up</span>
        </p>
      </div>
    </div>
  )
}


export default LoginUser

