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
                    <label className="mb-2 block text-sm text-muted" htmlFor="name">
                        Full Name
                    </label>
                    <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-0 grid w-11 place-items-center text-muted/70" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" className="size-4">
                                <circle cx="12" cy="8" r="3.5" />
                                <path d="M5.5 19c0-3.2 2.9-5.5 6.5-5.5s6.5 2.3 6.5 5.5" />
                            </svg>
                        </span>
                        <input
                            value={name}
                            onInput={(c) => { setName(c.target.value) }}
                            id="name"
                            type="text"
                            placeholder="Your name"
                            className="bg-field border border-line rounded-lg w-full py-3 pr-3 pl-11 text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors text-sm"
                        />
                    </div>
                </div>

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
                            onInput={(c) => { setEmail(c.target.value) }}
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
                            onInput={(c) => { setPassword(c.target.value) }}
                            id="password"
                            type="password"
                            placeholder="At least 6 characters"
                            className="bg-field border border-line rounded-lg w-full py-3 pr-3 pl-11 text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors text-sm"
                            minLength={6}
                            required
                        />
                    </div>
                    <p className="mt-2 pl-1 text-xs text-muted/70">Use at least 6 characters.</p>
                </div>
            </div>

            <button
                onClick={handleSubmit}
                disabled={loading}
                className="mt-7 w-full rounded-lg bg-gradient-to-r from-accent to-accent-strong py-3 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-[filter,transform] duration-200 hover:brightness-110 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-strong focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:brightness-100"
            >
                {loading ? 'Creating...' : 'Create Account'}
            </button>

            <div className="mt-7 flex items-center gap-3">
                <span className="h-px flex-1 bg-line" aria-hidden="true" />
                <span className="text-[11px] uppercase tracking-[0.16em] text-muted/70">or</span>
                <span className="h-px flex-1 bg-line" aria-hidden="true" />
            </div>

            <div className="mt-5 rounded-lg border border-line bg-field/60 px-4 py-3 text-center">
                <p className="text-sm text-muted">
                    Already have an account?{' '}
                    <span onClick={() => state(true)} className="cursor-pointer font-medium text-accent-strong underline underline-offset-4 transition-colors hover:text-ink">Sign In</span>
                </p>
            </div>
        </div>
    )
}

export default SignupUser