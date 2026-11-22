import { useState, useRef } from 'react'
import { getShortUrlFromBackend } from '../api/shortUrlApi.js';
import { useSelector } from 'react-redux';
import { queryClient } from "../main.jsx"

const UrlForm = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState();
  const [copied, setCopied] = useState(false);
  const [customSlug, setCustomSlug] = useState("");
  const [error, setError] = useState("");

  const { isAuthenticated } = useSelector((state) => state.auth) //to take out data from the store. 

  const inputRef = useRef(null);

  const handleSubmit = async () => {
    setError('');
    inputRef.current.focus(); // Focus the input field when the button is clicked without an input
    try {
      const resultShortUrl = await getShortUrlFromBackend(url, customSlug) //to call the backend api
      setShortUrl(resultShortUrl);

      queryClient.invalidateQueries({ queryKey: ['userUrls'] }) //so that the urls are visible on the screen immedietly after any updation

      setError(null);
      setUrl("")

    } catch (e) {
      setError(e.message)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <div>
      {error && (
        <div className="mb-4 p-3 border border-[#404040] text-[#FAFAFA] rounded-md text-sm">
          {error}
        </div>
      )}

      <label
        htmlFor='originalUrl'
        className='block text-sm text-[#A3A3A3]'>Enter the original URL
      </label>
      <div>
        <input
          id='originalUrl'
          ref={inputRef}
          value={url}
          onInput={(c) => { setUrl(c.target.value) }} //changes the value of url to what user types
          type="url"
          placeholder='https://example.com'
          className='w-full p-2.5 mt-2 rounded-md border border-[#333333] bg-[#111111] text-[#FAFAFA] placeholder:text-[#666666] focus:outline-none focus:ring-1 focus:ring-[#FAFAFA] focus:border-[#FAFAFA] mb-4 text-sm'
        />
      </div>

      {isAuthenticated && (
        <div>
          <label htmlFor="customSlug" className="block text-sm text-[#A3A3A3] mb-1">
            Custom URL (optional)
          </label>
          <div>
            <input
              type="text"
              id="customSlug"
              value={customSlug}
              onChange={(c) => setCustomSlug(c.target.value)}
              placeholder="your-custom-slug"
              className='w-full p-2.5 mt-2 rounded-md border border-[#333333] bg-[#111111] text-[#FAFAFA] placeholder:text-[#666666] focus:outline-none focus:ring-1 focus:ring-[#FAFAFA] focus:border-[#FAFAFA] mb-4 text-sm'
            />
          </div>
        </div>
      )}

      <button
        onClick={handleSubmit}
        className='w-full mt-2 bg-[#FAFAFA] hover:bg-[#D4D4D4] text-[#0A0A0A] p-2.5 rounded-md font-medium text-sm transition-colors duration-200'>Shorten URL
      </button>

      {shortUrl && (    //This div is shown only if shortUrl is prsent
        <div className="mt-6">
          <h2 className="mb-2 text-sm text-[#A3A3A3]">Shortened URL</h2>

          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={shortUrl}
              className="flex-1 min-w-0 p-2 border border-[#333333] rounded-md bg-[#111111] text-[#FAFAFA] text-sm"
            />

            <button
              onClick={handleCopy}
              className={`px-3 p-2 rounded-md text-sm font-medium transition-colors duration-200 ${copied ? 'bg-[#FAFAFA] text-[#0A0A0A]' : 'border border-[#FAFAFA] text-[#FAFAFA] hover:bg-[#1A1A1A]'}`
              }> {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}


export default UrlForm