import React, { useState } from 'react'

const SignupUser = ({state}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [loading, setLoading] = useState(false);
    return (
    <div>
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
        
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
                //onClick={handleSubmit}
                className="bg-[#2979FF] hover:bg-[#1E63E6] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
            Create Account
            </button>
        </div>
        
        <div className="text-center mt-4">
            <p className="cursor-pointer text-sm text-gray-600">
                Already have an account? <span onClick={() => state(false)} className="text-[#2979FF] hover:text-[#2168ec]"><u>Sign In</u></span>
            </p>
        </div>
    </div>
  )
}

export default SignupUser