import React from 'react'
import { Link } from '@tanstack/react-router';


export const NavBar = () => {
  return (
        <nav className="bg-[#1E1E1E] px-6 py-4 flex justify-between items-center sticky top-0 z-50">
            <h1 className="text-[#E0E0E0] text-xl font-semibold"> URL <span className="text-[#2979FF]">Shortener</span></h1>

            <Link to="/auth" className="bg-[#2979FF] hover:bg-[#1E63E6] text-white px-4 py-2 rounded-md font-medium transition-colors duration-200">Sign In</Link>
        </nav>
    )
}
