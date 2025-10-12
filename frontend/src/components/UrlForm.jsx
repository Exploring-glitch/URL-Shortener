import React from 'react'
import { useState } from 'react'

const UrlForm = () => {
  const [url, setUrl] = useState()


  return (
    <div>
      <h2 className='text-[#B0B0B0]'>Enter the original URL :</h2>
      <input onInput={ (c)=>{ setUrl(c.target.value)} } type = "url" placeholder='for example: https://example.com' className='w-full p-2 mt-2 rounded border border-[#B0B0B0] bg-[#2C2C2C] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#448AFF] mb-4'/>
      <button className='bg-[#1f64fa] text-[#E0E0E0] p-2 rounded w-45 block mx-auto hover:bg-[#105ee5] hover:transition-colors hover:duration-100'> Click to Shorten</button>
    </div>
  )
}

export default UrlForm