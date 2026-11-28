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
      <div className="mb-7">
        <span className="mb-4 grid size-11 place-items-center rounded-xl border border-line bg-field text-accent-strong">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
            aria-hidden="true"
          >
            <rect x="6" y="10" width="12" height="9" rx="2" />
            <path d="M9 10V7.5a3 3 0 0 1 6 0V10" />
          </svg>
        </span>
        <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-accent-strong">Welcome back</p>
        <h2 className="text-2xl font-semibold tracking-tight text-ink">Sign In</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">Pick up where you left off. Your links are waiting.</p>
      </div>

      {error && (
        <div className="mb-6 flex items-start gap-3 rounded-lg border border-danger/40 bg-danger/10 p-3 text-sm text-ink">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="mt-0.5 size-4 shrink-0 text-danger"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v4.5M12 16h.01" />
          </svg>
          <span className="leading-relaxed">{error}</span>
        </div>
      )}

      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm text-muted" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-0 grid w-11 place-items-center text-muted/70" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" className="size-4">
                <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                <path d="M4 7l8 6 8-6" />
              </svg>
            </span>
            <input
              value={email}
              onInput={(c) => {setEmail(c.target.value)}}
              id="email"
              type="email"
              placeholder="you@example.com"
              className="bg-field border border-line rounded-lg w-full py-3 pr-3 pl-11 text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors text-sm"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm text-muted" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-0 grid w-11 place-items-center text-muted/70" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className="size-4">
                <rect x="6" y="10" width="12" height="9" rx="2" />
                <path d="M9 10V7.5a3 3 0 0 1 6 0V10" />
              </svg>
            </span>
            <input
              value={password}
              onInput={(c) =>{setPassword(c.target.value)}}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="bg-field border border-line rounded-lg w-full py-3 pr-3 pl-11 text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors text-sm"
            />
          </div>
        </div>
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

