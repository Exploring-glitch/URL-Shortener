import React from 'react'
import UrlForm from '../components/UrlForm'
import UserUrl from '../components/UserUrl'

const DashBoardPage = () => {
  return (
    <div className='min-h-screen bg-page flex flex-col items-center text-ink px-4 sm:px-6 py-12 sm:py-16'>
      <div className='w-full max-w-4xl border border-line bg-surface rounded-lg p-5 sm:p-8 flex flex-col'>
        <h1 className="text-xl font-semibold tracking-tight text-center mb-6">Dashboard</h1>

        <UrlForm />
        <UserUrl />
      </div>
    </div>
  )
}

export default DashBoardPage