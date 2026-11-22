import React, { useState } from 'react'
import SignupUser from '../components/Signup'
import LoginUser from '../components/Login'

const UserAuthPage = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
      <div className='bg-[#1E1E1E] w-full max-w-md p-4 sm:p-8 rounded-lg'>
        {login ? <LoginUser state={setLogin} /> : <SignupUser state={setLogin} />}
      </div>
    </div>
  )
}

export default UserAuthPage