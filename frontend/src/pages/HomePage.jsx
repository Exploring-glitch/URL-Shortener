import React from 'react'
import UrlForm from '../components/UrlForm'
import { Link } from '@tanstack/react-router';


const HomePage = () => {
  return (
    <div className='min-h-screen bg-[#171717] flex flex-col items-center justify-center text-[#E0E0E0] p-'>

      <div className="text-center mt-24">
        <h1 className="text-4xl font-bold mb-3">Welcome to URL <span className="text-[#2979FF]">Shortener</span></h1>
        <h2 className="text-xl text-blue-400 max-w-2xl mx-auto">Spark instant connections with your audience using trimmed, trustworthy, and trackable links</h2>
      </div>

      <div className='bg-[#1E1E1E] w-full max-w-md p-8 rounded-lg mt-10'>
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
        <UrlForm />
      </div>

      <div>
        <p className="text-gray-400 mt-6 text-sm">
          Want to customize and track your created URLs?
          <Link to="/auth" className="text-[#2979FF] hover:text-[#2168ec] font-medium transition"> Sign in now! </Link>
        </p>
      </div>

      <div className='bg-[#1E1E1E] w-full max-w-4xl p-10 mt-16 rounded-xl shadow-lg text-gray-300 mb-24'>
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">
          Why Use Our URL Shortener?
        </h2>

        <div className="space-y-6 text-gray-300">
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