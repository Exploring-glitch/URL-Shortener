import React from 'react'
import UrlForm from '../components/UrlForm'
import UserUrl from '../components/UserUrl'

const DashBoardPage = () => {
  return (
    <div className='min-h-screen bg-[#171717] flex flex-col items-center justify-center text-[#E0E0E0] p-3'>
      <div className='bg-[#1E1E1E] w-full max-w-4xl p-8 rounded-lg flex flex-col items-center'>
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>

        <UrlForm />
        <UserUrl />
      </div>
    </div>
  )
}

export default DashBoardPage