import React, { useState } from 'react'
import { GetAllUrls_User, DeleteUser_Url } from '../api/userApi'
import { useQuery } from '@tanstack/react-query'
import { queryClient } from '../main'


const UserUrl = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['userUrls'],
        queryFn: GetAllUrls_User,
        refetchInterval: 30000, // Refetch every 30 seconds to update click counts
        staleTime: 0, // Consider data state immediately so it refetches when invalidated
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

    const handleDelete = async (id) => {
        try {
            await DeleteUser_Url(id) ;

            queryClient.invalidateQueries({ queryKey: ['userUrls'] }) //so that the urls are visible on the screen immedietly after any updation
        } catch (e) {
            console.log("Failed to delete URL:", e)
        }
    }

    if (isLoading) {
        return (
            <div className="flex justify-center my-8">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#A3A3A3]"></div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="border border-[#404040] text-[#FAFAFA] px-4 py-3 rounded-md my-4 text-sm">
                Error loading your URLs: {error.message}
            </div>
        )
    }

    if (!data.urls || data.urls.length === 0) { //if user didn't create any short url
        return (
            <div className="text-center text-[#FAFAFA] my-6 p-6 bg-[#111111] rounded-lg border border-[#262626]">
                <svg className="w-12 h-12 mx-auto text-[#A3A3A3] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <p className="text-lg font-medium">No URLs yet</p>
                <p className="mt-1 text-sm text-[#A3A3A3]">
                    Create your <span className="text-[#FAFAFA] underline underline-offset-4">first short URL</span> to get started.
                </p>
            </div>
        );
    }




    return (
        <div className="p-2 mt-5">
            {/* visible below lg */}
            <div className="space-y-4 block lg:hidden">
                <h2 className="text-[#FAFAFA] text-lg font-medium mt-8 mb-4 text-center lg:text-left">
                    Your generated URLs:
                </h2>

                {/* here we are using map func to take out a single url from urls object and naming it as 'url' */}
                {data.urls.reverse().map((url) => (
                    <div key={url._id} className="bg-[#111111] rounded-lg border border-[#262626] p-4 space-y-2">
                        <div>
                            <span className="text-[#A3A3A3] text-xs font-medium uppercase tracking-wide">
                                Original URL:
                            </span>
                            <div className="text-sm text-[#FAFAFA] truncate">{url.fullUrl}</div>
                        </div>

                        <div>
                            <span className="text-[#A3A3A3] text-xs font-medium uppercase tracking-wide">
                                Short URL:
                            </span>
                            <div>
                                <a
                                    href={url.short_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#FAFAFA] underline underline-offset-4 hover:text-[#D4D4D4] text-sm break-all"
                                >
                                    {url.short_url}
                                </a>
                            </div>
                        </div>

                        <div>
                            <span className="text-[#A3A3A3] text-xs font-medium uppercase tracking-wide">
                                Clicks:
                            </span>
                            <span className="px-2 ml-2 inline-flex text-xs leading-5 font-medium rounded border border-[#333333] bg-[#1A1A1A] text-[#FAFAFA]">
                                {url.clicks} {url.clicks === 1 ? "click" : "clicks"}
                            </span>
                        </div>

                        <div>
                            <button
                                onClick={() => handleCopy(url.short_url, url._id)}
                                className={`mt-2 w-full inline-flex justify-center items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${copiedId === url._id
                                    ? "bg-[#1A1A1A] text-[#FAFAFA] border border-[#404040]"
                                    : "bg-[#FAFAFA] hover:bg-[#D4D4D4] text-[#0A0A0A]"
                                    } focus:outline-none`}
                            >
                                {copiedId === url._id ? "Copied" : "Copy URL"}
                            </button>

                            <button
                                onClick={() => handleDelete(url._id)}
                                className="mt-2 w-full inline-flex justify-center items-center px-3 py-2 border border-[#404040] text-[#FAFAFA] hover:bg-[#1A1A1A] text-sm font-medium rounded-md transition-colors duration-200"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* visible from lg and above */}
            <div className="hidden lg:block rounded-lg mt-5 overflow-hidden border border-[#262626]">
                <div className="overflow-x-auto h-56">
                    <table className="min-w-full divide-y divide-[#262626]">
                        {/* thead: table head, tr: table row, th: table heading */}
                        <thead className="bg-[#111111]">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-[#A3A3A3] uppercase tracking-wide">
                                    Original URL
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-[#A3A3A3] uppercase tracking-wide">
                                    Short URL
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-[#A3A3A3] uppercase tracking-wide">
                                    Clicks
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-[#A3A3A3] uppercase tracking-wide">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-[#262626] bg-[#1E1E1E] text-[#E0E0E0]">
                            {data.urls.map((url) => (
                                <tr key={url._id} className="hover:bg-[#2A2A2A] transition-colors duration-150">
                                    <td className="px-6 py-4">
                                        <div className="text-sm truncate max-w-xs">{url.fullUrl}</div>
                                    </td>

                                    <td className="px-6 py-4">
                                        <a
                                            href={url.short_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#2979FF] hover:text-[#82B1FF] hover:underline"
                                        >
                                            {url.short_url}
                                        </a>
                                    </td>

                                    <td className="px-2 py-2">
                                        <span className="px-4 py-2 flex text-xs leading-5 font-semibold rounded-full bg-[#1B263B] text-[#82B1FF]">
                                            {url.clicks} {url.clicks === 1 ? "click" : "clicks"}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 h-full text-sm font-medium flex gap-2 items-center">
                                        <button
                                            onClick={() => handleCopy(url.short_url, url._id)}
                                            className={`inline-flex items-center px-4 py-2 border border-transparent text-xs font-medium rounded-lg shadow-sm whitespace-nowrap shrink-0 ${copiedId === url._id
                                                ? "bg-green-600 hover:bg-green-700"
                                                : "bg-[#2979FF] hover:bg-[#1565C0]"
                                                } text-white focus:outline-none`}
                                        >
                                            {copiedId === url._id ? "Copied" : "Copy URL"}
                                        </button>

                                        <button
                                            onClick={() => handleDelete(url._id)}
                                            className="flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-medium rounded-lg whitespace-nowrap shrink-0"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserUrl;