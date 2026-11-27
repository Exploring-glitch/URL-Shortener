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
  const [loading, setLoading] = useState(false);

  const { isAuthenticated } = useSelector((state) => state.auth) //to take out data from the store. 

  const inputRef = useRef(null);

  const handleSubmit = async () => {
    if (loading) return; // Ignore clicks while a URL is already being shortened

    setError('');
    setLoading(true);
    inputRef.current.focus(); // Focus the input field when the button is clicked without an input
    try {
      const resultShortUrl = await getShortUrlFromBackend(url, customSlug) //to call the backend api
      setShortUrl(resultShortUrl);

      queryClient.invalidateQueries({ queryKey: ['userUrls'] }) //so that the urls are visible on the screen immedietly after any updation

      setError(null);
      setUrl("")

    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false);
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
        <div className="mb-4 p-3 border border-line bg-surface text-ink rounded-md text-sm">
          {error}
        </div>
      )}

      <label
        htmlFor='originalUrl'
        className='block text-sm text-muted'>Enter the original URL
      </label>
      <div>
        <input
          id='originalUrl'
          ref={inputRef}
          value={url}
          onInput={(c) => { setUrl(c.target.value) }} //changes the value of url to what user types
          type="url"
          placeholder='https://example.com'
          className='w-full p-2.5 mt-2 rounded-md border border-line bg-field text-ink placeholder:text-muted/70 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent mb-4 text-sm'
        />
      </div>

      {isAuthenticated && (
        <div>
          <label htmlFor="customSlug" className="block text-sm text-muted mb-1">
            Custom URL (optional)
          </label>
          <div>
            <input
              type="text"
              id="customSlug"
              value={customSlug}
              onChange={(c) => setCustomSlug(c.target.value)}
              placeholder="your-custom-slug"
              className='w-full p-2.5 mt-2 rounded-md border border-line bg-field text-ink placeholder:text-muted/70 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent mb-4 text-sm'
            />
          </div>
        </div>
      )}

      <button
        onClick={handleSubmit}
        className='w-full mt-2 bg-accent hover:bg-accent-strong text-white p-2.5 rounded-md font-medium text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-strong'>Shorten URL
      </button>

      {shortUrl && (    //This div is shown only if shortUrl is prsent
        <div className="mt-6">
          <h2 className="mb-2 text-sm text-muted">Shortened URL</h2>

          <div className="flex gap-2">
            <input
              type="text"
              readOnly
              value={shortUrl}
              className="flex-1 min-w-0 p-2 border border-line rounded-md bg-field text-ink text-sm"
            />

            <button
              onClick={handleCopy}
              className={`px-3 p-2 rounded-md text-sm font-medium transition-colors duration-200 ${copied ? 'bg-surface text-ink border border-line' : 'border border-line text-ink hover:bg-surface'}`
              }> {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}


export default UrlForm