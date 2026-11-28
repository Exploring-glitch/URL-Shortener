import React, { useState } from 'react'
import SignupUser from '../components/Signup'
import LoginUser from '../components/Login'

const BrandMark = () => (
  <span className="grid size-9 place-items-center rounded-lg border border-line bg-field text-accent-strong">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M10 13.5l4-4" />
      <path d="M8.5 11.5L7 13a3.5 3.5 0 0 0 5 5l1.5-1.5" />
      <path d="M15.5 12.5L17 11a3.5 3.5 0 0 0-5-5l-1.5 1.5" />
    </svg>
  </span>
)

const UserAuthPage = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="min-h-screen bg-page text-ink">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col lg:flex-row">
        <aside className="hidden lg:flex lg:w-[46%] shrink-0 flex-col border-r border-line bg-surface px-10 py-12 xl:px-14">
          <div className="flex items-center gap-3">
            <BrandMark />
            <span className="text-sm font-medium tracking-tight">URL Shortener</span>
          </div>
        </aside>

        <main className="flex flex-1 flex-col justify-center px-4 py-10 sm:px-8 sm:py-14 lg:px-12">
          <div className="mb-7 flex items-center gap-3 lg:hidden">
            <BrandMark />
            <span className="text-sm font-medium tracking-tight">URL Shortener</span>
          </div>

          <div className="mx-auto w-full max-w-md rounded-xl border border-line bg-surface p-6 sm:p-8">
            {login ? <LoginUser state={setLogin} /> : <SignupUser state={setLogin} />}
          </div>
        </main>
      </div>
    </div>
  )
}

export default UserAuthPage
