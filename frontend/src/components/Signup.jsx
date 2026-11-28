import React, { useState } from 'react'
import { signup_User } from '../api/userApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from '@tanstack/react-router';
import { login } from '../store/slice/authSlice';


const SignupUser = ({ state }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSubmit = async () => {
        if(!name || !password || !email){
            setError("Missing credentials!");
            return
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const data = await signup_User(name, email, password);
            setLoading(false)

            dispatch(login(data.user)); //this means after signing up, dispatch saves data of user in the login store and user dont have to login after signing up
            navigate({ to: "/dashboard" }) //directly user gets navigates to dashboard after signing up

        } catch (e) {
            setLoading(false)
            setError(e.message || 'Signup failed. Please try again.');
        }
    }

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
                        className="size-5"
                        aria-hidden="true"
                    >
                        <circle cx="11" cy="8" r="3.5" />
                        <path d="M4.5 19c0-3.2 2.9-5.5 6.5-5.5 1.2 0 2.3.2 3.2.7" />
                        <path d="M18 14.5v5m-2.5-2.5h5" />
                    </svg>
                </span>
                <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-accent-strong">Get started</p>
                <h2 className="text-2xl font-semibold tracking-tight text-ink">Create an Account</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">One step and your links have a home.</p>
            </div>

            {error && (
                <div className="mb-4 p-3 border border-line text-ink rounded-md text-sm">
                    {error}
                </div>
            )}

            <div className="mb-4">
                <label className="block text-sm text-muted mb-2" htmlFor="name">
                    Full Name
                </label>
                <input
                    value={name}
                    onInput={(c) => { setName(c.target.value) }}
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="bg-field border border-line rounded-md w-full p-2.5 text-ink placeholder:text-muted/70 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-sm"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm text-muted mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    value={email}
                    onInput={(c) => { setEmail(c.target.value) }}
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
                    onInput={(c) => { setPassword(c.target.value) }}

                    id="password"
                    type="password"
                    placeholder="At least 6 characters"
                    className="bg-field border border-line rounded-md w-full p-2.5 text-ink placeholder:text-muted/70 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-sm"
                    minLength={6}
                    required
                />
            </div>

            <div className="flex items-center justify-between">
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-accent hover:bg-accent-strong text-white transition-colors duration-200 font-medium text-sm py-2.5 px-4 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-strong disabled:opacity-50 w-full"
                >
                    {loading ? 'Creating...' : 'Create Account'}
                </button>
            </div>

            <div className="text-center mt-4">
                <p className="text-sm text-muted">
                    Already have an account?{' '}
                    <span onClick={() => state(true)} className="cursor-pointer text-ink underline underline-offset-4 hover:text-ink/80 transition-colors">Sign In</span>
                </p>
            </div>
        </div>
    )
}

export default SignupUser