import React from 'react'

const LoginUser = () => {
  
  return (
    <div className="min-h-screen bg-[#181818] text-[#E0E0E0] flex flex-col items-center justify-center">
      <div className="bg-[#232323] w-full max-w-md p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <div className="mb-4">
          <label className="block text-[#E0E0E0] text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className=" bg-[#2C2C2C] border rounded w-full p-2 text-[#9E9E9E] focus:outline-none focus:ring-2 focus:ring-[#2979FF]"
            id="email"
            type="email"
            placeholder="example: conradward@gmail.com "
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-[#E0E0E0] text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className=" bg-[#2C2C2C] border rounded w-full p-2 text-[#9E9E9E] focus:outline-none focus:ring-2 focus:ring-[#2979FF]"
            id="password"
            type="password"
            placeholder="**********"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-[#2979FF] hover:bg-[#1E63E6] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >Login</button>
        </div>
      </div>
    </div>
  )
}


export default LoginUser

