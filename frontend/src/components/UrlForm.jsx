import { useState } from 'react'
import axios from 'axios';



const UrlForm = () => {
  const [url, setUrl] = useState("https://www.google.com")
  const [shortUrl, setShortUrl] = useState()


  const submitForm = async()=> {
    const {data} = await axios.post("http://localhost:3000/api/create", {url}) //to call the backend api
    console.log(data);
    setShortUrl(data);
    alert("Your short url is: " + data)
  }

  return (
    <div>
      <h2 className='text-[#B0B0B0]'>Enter the original URL :</h2>

      <input 
        value={url}
        onInput={(c)=>{setUrl(c.target.value)}} //changes the value of url to what user types
        type = "url" 
        placeholder='for example: https://example.com' 
        className='w-full p-2 mt-2 rounded border border-[#B0B0B0] bg-[#2C2C2C] text-[#E0E0E0] focus:outline-none focus:ring-2 focus:ring-[#448AFF] mb-4'
      />

      <button 
        onClick={submitForm} 
        className='bg-[#1f64fa] text-[#E0E0E0] p-2 rounded w-45 block mx-auto'> Click to Shorten
      </button>
    </div>

  )
}


export default UrlForm