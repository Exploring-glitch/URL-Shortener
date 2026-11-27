import UrlForm from '../components/UrlForm'
import { Link } from '@tanstack/react-router';


const HomePage = () => {
  return (
    <div className='min-h-screen bg-page flex flex-col items-center text-ink px-4 sm:px-6 py-12 sm:py-16'>

      <div className="text-center max-w-xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">Shorten a link, simply.</h1>
        <p className="text-sm sm:text-base text-muted max-w-md mx-auto leading-relaxed">Paste a long URL and get a short one in seconds. Free, fast, and yours to keep.</p>
      </div>

      <div className='w-full max-w-lg mt-10 sm:mt-12 border border-line rounded-lg p-5 sm:p-7'>
        <UrlForm />
      </div>

      <div>
        <p className="text-muted mt-5 text-center text-sm">
          Want to customize and track your links?{' '}
          <Link to="/auth" className="text-ink underline underline-offset-4 hover:text-ink/80 transition-colors">Sign in</Link>
        </p>
      </div>

      <div className='w-full max-w-2xl mt-16 sm:mt-20 pb-8'>
        <div className='grid gap-6 sm:grid-cols-3 sm:gap-8'>
          <div className='border-t border-line pt-4'>
            <h2 className='text-sm font-medium'>Fast</h2>
            <p className='text-sm text-muted mt-1'>Short links in seconds.</p>
          </div>
          <div className='border-t border-line pt-4'>
            <h2 className='text-sm font-medium'>Free</h2>
            <p className='text-sm text-muted mt-1'>No signup needed to shorten.</p>
          </div>
          <div className='border-t border-line pt-4'>
            <h2 className='text-sm font-medium'>Trackable</h2>
            <p className='text-sm text-muted mt-1'>Sign in for clicks and link management.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage