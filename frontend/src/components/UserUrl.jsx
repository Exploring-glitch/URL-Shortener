import React, { useState } from 'react'
import { GetAllUrls_User } from '../api/userApi'
import { useQuery } from '@tanstack/react-query'

const UserUrl = () => {
    const { data: urls, isLoading, isError, error } = useQuery({
        queryKey: ['userUrls'],
        queryFn: GetAllUrls_User,
        refetchInterval: 30000, // Refetch every 30 seconds to update click counts
        staleTime: 0, // Consider data stale immediately so it refetches when invalidated
    })
    const [copiedId, setCopiedId] = useState(null)

    const handleCopy = (url, id) => {
        navigator.clipboard.writeText(url)
        setCopiedId(id)

        // Reset the copied state after 2 seconds
        setTimeout(() => {
            setCopiedId(null)
        }, 2000)
    }

    if (isLoading) {
        return (
            <div className="flex justify-center my-8">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="bg-[#2B0D0D] text-[#FF6B6B] px-4 py-3 rounded my-4">
                Error loading your URLs: {error.message}
            </div>
        )
    }

    if (!urls.urls || urls.urls.length === 0) {
        return (
            <div className="text-center text-[#E0E0E0] my-6 p-6 bg-[#1E1E1E] rounded-lg border border-[#2979FF]/30">
                <svg className="w-12 h-12 mx-auto text-[#E0E0E0] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <p className="text-lg font-semibold">No URLs yet!</p>
                <p className="mt-1 text-[#B0B0B0]">
                    Create your <span className="text-[#2979FF] font-medium">first short URL</span> to get started.
                </p>
            </div>
        );
    }




    return (
        <div className="bg-[#1E1E1E] rounded-lg mt-5 shadow-md overflow-hidden border border-[#2C2C2C]">
            <div className="overflow-x-auto h-56">
                <table className="min-w-full divide-y divide-[#2C2C2C]">
                    <thead className="bg-[#2A2A2A]">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#B0B0B0] uppercase tracking-wider">
                                Original URL
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#B0B0B0] uppercase tracking-wider">
                                Short URL
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#B0B0B0] uppercase tracking-wider">
                                Clicks
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-[#B0B0B0] uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#2C2C2C] bg-[#1E1E1E] text-[#E0E0E0]">
                        {urls.urls.reverse().map((url) => (
                            <tr key={url._id} className="hover:bg-[#2A2A2A] transition-colors duration-150">
                                <td className="px-6 py-4">
                                    <div className="text-sm truncate max-w-xs">{url.fullUrl}</div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm">
                                        <a
                                            href={`http://localhost:3000/${url.shortUrl}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#2979FF] hover:text-[#82B1FF] hover:underline"
                                        >
                                            {`localhost:3000/${url.shortUrl}`}
                                        </a>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#1B263B] text-[#82B1FF]">
                                        {url.clicks} {url.clicks === 1 ? 'click' : 'clicks'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium">
                                    <button
                                        onClick={() => handleCopy(`http://localhost:3000/${url.shortUrl}`, url._id)}
                                        className={`inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm ${copiedId === url._id
                                            ? 'bg-green-600 hover:bg-green-700'
                                            : 'bg-[#2979FF] hover:bg-[#1565C0]'
                                            } text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2979FF] transition-colors duration-200`}
                                    >
                                        {copiedId === url._id ? (
                                            <>
                                                ✅ Copied!
                                            </>
                                        ) : (
                                            <>
                                                📋 Copy URL
                                            </>
                                        )}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

}

export default UserUrl