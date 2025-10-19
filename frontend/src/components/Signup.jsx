import React, { useState } from 'react'
import { signup_User } from '../api/userApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from '@tanstack/react-router';
import { login } from '../store/slice/authSlice';


const SignupUser = ({state}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSubmit = async() =>{
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        setLoading(true);
        setError('');

        try{
            const data = await signup_User(name, email, password);
            setLoading(false)

            dispatch(login(data.user)); //this means after signing up, dispatch saves data of user in the login store and user dont have to login after signing up
            navigate({to : "/dashboard"}) //directly user gets navigates to dashboard after signing up

        }catch(e){
            setLoading(false)
            setError(e.message || 'Signup failed. Please try again.');           
        }
    }

    return (
    <div>
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
        
        {error && (
          <div className="mb-4 p-2 sm:p-3 bg-[#2B0D0D] text-[#FF6B6B] rounded-md">
            {error}
          </div>
        )}

        <div className="mb-4">
            <label className="block text-[#E0E0E0] text-sm font-bold mb-2" htmlFor="name">
                Full Name
            </label>
            <input
                value={name}
                onInput={(c) => {setName(c.target.value) }}
                id="name"
                type="text"
                placeholder="example: Conrad Ward"
                className=" bg-[#2C2C2C] border rounded w-full p-2 text-[#9E9E9E] focus:outline-none focus:ring-2 focus:ring-[#2979FF]"
            />
        </div>

        <div className="mb-4">
            <label className="block text-[#E0E0E0] text-sm font-bold mb-2" htmlFor="email">
                Email
            </label>
            <input
                value={email}
                onInput={(c) => {setEmail(c.target.value) }}
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
                onInput={(c) => {setPassword(c.target.value) }}
                
                id="password"
                type="password"
                placeholder="**********"
                className=" bg-[#2C2C2C] border rounded w-full p-2 text-[#9E9E9E] focus:outline-none focus:ring-2 focus:ring-[#2979FF]"
                minLength={6}
                required
            />
        </div>

        <div className="flex items-center justify-between">
            <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-[#2979FF] hover:bg-[#1E63E6] text-white transition-colors duration-200  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
            {loading ? 'Creating...' : 'Create Account'}
            </button>
        </div>
        
        <div className="text-center mt-4">
            <p className="cursor-pointer text-sm text-gray-600">
                Already have an account? <span onClick={() => state(true)} className="text-[#2979FF] hover:text-[#2168ec]"><u>Sign In</u></span>
            </p>
        </div>
    </div>
  )
}

export default SignupUser