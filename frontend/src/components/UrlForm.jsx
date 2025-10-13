import { useState, useRef } from 'react'
import axios from 'axios';
import { getShortUrlFromBackend } from '../api/shortUrlApi.js';



const UrlForm = () => {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState()
  const [copied, setCopied] = useState(false);

  const inputRef = useRef(null);

  const handleSubmit = async()=> {
    inputRef.current.focus(); // Focus the input field when the button is clicked without an input
    const x = await getShortUrlFromBackend(url) //to call the backend api
    setShortUrl(x);;
  }

  const handleCopy =() =>{
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    
    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <div>
      <h2 className='text-[#B0B0B0]'>Enter the original URL :</h2>

      <input 
      ref={inputRef}
        value={url}
        onInput={(c)=>{setUrl(c.target.value)}} //changes the value of url to what user types
        type = "url" 
        placeholder='for example: https://example.com' 
        className='w-full p-2 mt-2 rounded border border-[#B0B0B0] bg-[#2C2C2C] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#448AFF] mb-4'
      />

      <button 
        onClick={handleSubmit} 
        className='bg-[#1f64fa] hover:bg-[#175ad6] text-[#E0E0E0] p-2 rounded w-full'> Click to Shorten
      </button>

      
      {shortUrl && (    //This div is shown only if shortUrl is prsent
        <div className="mt-6">
          <h2 className="mb-2 text-[#B0B0B0]">Shortened URL :</h2>

          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={shortUrl}
              className="flex-1 p-2 border border-[#00BFA5] rounded bg-[#1E1E1E] text-[#E0E0E0]"
            />

            <button 
              onClick={handleCopy} 
              className={`p-2 rounded ${copied ? 'bg-green-600' : 'bg-[#2467f8] hover:bg-[#175ad6]'}`
              }> {copied ? 'Yay! Copied' : 'Copy'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}


export default UrlForm