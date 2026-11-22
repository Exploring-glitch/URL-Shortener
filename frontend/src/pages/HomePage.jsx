import UrlForm from '../components/UrlForm'
import { Link } from '@tanstack/react-router';


const HomePage = () => {
  return (
    <div className='min-h-screen bg-[#0A0A0A] flex flex-col items-center text-[#FAFAFA] px-4 sm:px-6 py-12 sm:py-16'>

      <div className="text-center max-w-xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">Shorten a link, simply.</h1>
        <p className="text-sm sm:text-base text-[#A3A3A3] max-w-md mx-auto leading-relaxed">Paste a long URL and get a short one in seconds. Free, fast, and yours to keep.</p>
      </div>

      <div className='w-full max-w-lg mt-10 sm:mt-12 border border-[#262626] rounded-lg p-5 sm:p-7'>
        <h1 className="text-lg font-medium text-center mb-6">URL Shortener</h1>
        <UrlForm />
      </div>

      <div>
        <p className="text-gray-400 mt-4 sm:mt-6 text-balance text-center text-sm sm:text-md xl:text-lg ">
          Want to customize and track your created URLs?
          <Link to="/auth" className="text-[#2979FF] hover:text-[#2168ec] font-medium transition"> Sign in now! </Link>
        </p>
      </div>

      <div className='bg-[#1E1E1E] w-full max-w-4xl p-10 mt-10 sm:mt-16 rounded-xl shadow-lg text-gray-300 mb-24'>
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">
          Why Use Our URL Shortener?
        </h2>

        <div className="space-y-6 xl:space-y-10 xl:text-xl xl:mt-15 text-gray-300">
          <p>
            <span className="text-blue-400 font-medium">Effortless Link Shortening: </span> 
            Transform long URLs into short, easy-to-share links in seconds — perfect for social media, emails, or SMS.
          </p>
          <p>
            <span className="text-blue-400 font-medium">Powerful & Reliable: </span>
            Our system handles millions of clicks with lightning-fast response times — around 50 milliseconds.
          </p>
          <p>
            <span className="text-blue-400 font-medium">Free & Secure: </span>
            Enjoy a premium shortening service that's 100% free. Your shortened links never expire, giving you total control and trust.
          </p>
          <p>
            <span className="text-blue-400 font-medium">Developer Friendly: </span>
            Integrate our easy-to-use API into any app or system, and monitor click performance through our analytics dashboard.
          </p>
          <p>
            Shorten links for <span className="font-medium"> Google, Amazon, WhatsApp, YouTube, Facebook, Instagram, Twitter</span>, and many more — all from one place.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage