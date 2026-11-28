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

const features = [
  {
    title: 'Click tracking',
    description: 'See how each link performs.',
    path: 'M4 19V10m5 9V5m5 14v-7m5 7V8',
  },
  {
    title: 'Custom names',
    description: 'Make links easy to remember.',
    path: 'M10 13.5l4-4M8.5 11.5L7 13a3.5 3.5 0 0 0 5 5l1.5-1.5M15.5 12.5L17 11a3.5 3.5 0 0 0-5-5l-1.5 1.5',
  },
  {
    title: 'One tidy dashboard',
    description: 'All your URLs in one place.',
    path: 'M4 6h16M4 12h16M4 18h10',
  },
]

const UserAuthPage = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="min-h-screen bg-page text-ink">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col lg:flex-row">
        <aside className="auth-rise relative hidden lg:flex lg:w-[46%] shrink-0 flex-col justify-between overflow-hidden border-r border-line bg-surface px-10 py-12 xl:px-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 18% 12%, rgba(76,124,184,0.22), transparent 55%), radial-gradient(circle at 90% 85%, rgba(76,124,184,0.10), transparent 50%)',
            }}
          />

          <div className="relative">
            <div className="flex items-center gap-3">
              <BrandMark />
              <span className="text-sm font-medium tracking-tight">URL Shortener</span>
            </div>

            <div className="mt-16 xl:mt-20">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent-strong">Made for sharing</p>
              <h1 className="mt-4 max-w-sm text-3xl font-semibold leading-tight tracking-tight xl:text-4xl">
                Short links,<br />clear history.
              </h1>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                Turn long URLs into tidy links and keep every click in one place.
              </p>
            </div>
          </div>

          <div className="relative mt-12 space-y-6">
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg border border-line bg-field text-accent-strong">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      className="size-4"
                      aria-hidden="true"
                    >
                      <path d={feature.path} />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-medium">{feature.title}</p>
                    <p className="mt-0.5 text-xs text-muted">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-line bg-page/80 p-4 shadow-lg shadow-black/20">
              <div className="flex items-center gap-2 text-[11px] text-muted">
                <span className="size-1.5 rounded-full bg-accent-strong" />
                your link is ready
              </div>
              <p className="mt-2 font-mono text-sm text-ink">sho.rt/<span className="text-accent-strong">campaign</span></p>
              <div className="mt-3 flex gap-1.5">
                <span className="h-1 w-16 rounded-full bg-line" />
                <span className="h-1 w-10 rounded-full bg-line/70" />
              </div>
            </div>
          </div>
        </aside>

        <main className="flex flex-1 flex-col justify-center px-4 py-10 sm:px-8 sm:py-14 lg:px-12">
          <div className="mx-auto mb-7 w-full max-w-md lg:hidden">
            <div className="flex items-center gap-3">
              <BrandMark />
              <span className="text-sm font-medium tracking-tight">URL Shortener</span>
            </div>
          </div>

          <div className="auth-rise relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-[0_24px_70px_-36px_rgba(0,0,0,0.85)] sm:p-8">
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-strong/70 to-transparent"
            />
            {login ? <LoginUser state={setLogin} /> : <SignupUser state={setLogin} />}
          </div>

          <p className="mx-auto mt-6 text-center text-xs text-muted/70">Simple links. No noise.</p>
        </main>
      </div>
    </div>
  )
}

export default UserAuthPage
