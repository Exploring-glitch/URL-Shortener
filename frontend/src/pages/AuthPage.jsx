import React, { useState } from 'react'
import SignupUser from '../components/Signup'
import LoginUser from '../components/Login'

const UserAuthPage = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="min-h-screen bg-[#181818] text-[#E0E0E0] flex flex-col items-center justify-center p-3">
      <div className='bg-[#1E1E1E] w-full max-w-md p-8 rounded-lg'>
        {login ? <LoginUser state={setLogin} /> : <SignupUser state={setLogin} />}
      </div>
    </div>
  )
}

export default UserAuthPage