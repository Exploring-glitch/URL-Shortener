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
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-muted"></div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="border border-line bg-surface text-ink px-4 py-3 rounded-md my-4 text-sm">
                Error loading your URLs: {error.message}
            </div>
        )
    }

    if (!data.urls || data.urls.length === 0) { //if user didn't create any short url
        return (
            <div className="text-center text-ink my-6 p-6 bg-field rounded-lg border border-line">
                <svg className="w-12 h-12 mx-auto text-muted mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                <p className="text-lg font-medium">No URLs yet</p>
                <p className="mt-1 text-sm text-muted">
                    Create your <span className="text-ink underline underline-offset-4">first short URL</span> to get started.
                </p>
            </div>
        );
    }




    return (
        <div className="p-2 mt-5">
            {/* visible below lg */}
            <div className="space-y-4 block lg:hidden">
                <h2 className="text-ink text-lg font-medium mt-8 mb-4 text-center lg:text-left">
                    Your generated URLs:
                </h2>

                {/* here we are using map func to take out a single url from urls object and naming it as 'url' */}
                {data.urls.reverse().map((url) => (
                    <div key={url._id} className="bg-field rounded-lg border border-line p-4 space-y-2">
                        <div>
                            <span className="text-muted text-xs font-medium uppercase tracking-wide">
                                Original URL:
                            </span>
                            <div className="text-sm text-ink truncate">{url.fullUrl}</div>
                        </div>

                        <div>
                            <span className="text-muted text-xs font-medium uppercase tracking-wide">
                                Short URL:
                            </span>
                            <div>
                                <a
                                    href={url.short_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-ink underline underline-offset-4 hover:text-ink/80 text-sm break-all"
                                >
                                    {url.short_url}
                                </a>
                            </div>
                        </div>

                        <div>
                            <span className="text-muted text-xs font-medium uppercase tracking-wide">
                                Clicks:
                            </span>
                            <span className="px-2 ml-2 inline-flex text-xs leading-5 font-medium rounded border border-line bg-surface text-ink">
                                {url.clicks} {url.clicks === 1 ? "click" : "clicks"}
                            </span>
                        </div>

                        <div>
                            <button
                                onClick={() => handleCopy(url.short_url, url._id)}
                                className={`mt-2 w-full inline-flex justify-center items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${copiedId === url._id
                                    ? "bg-surface text-muted border border-line"
                                    : "bg-field text-ink border border-line hover:bg-surface"
                                    } focus:outline-none`}
                            >
                                {copiedId === url._id ? "Copied" : "Copy URL"}
                            </button>

                            <button
                                onClick={() => handleDelete(url._id)}
                                className="mt-2 w-full inline-flex justify-center items-center px-3 py-2 border border-line text-ink hover:bg-surface text-sm font-medium rounded-md transition-colors duration-200"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* visible from lg and above */}
            <div className="hidden lg:block rounded-lg mt-5 overflow-hidden border border-line">
                <div className="overflow-x-auto h-56">
                    <table className="min-w-full divide-y divide-line">
                        {/* thead: table head, tr: table row, th: table heading */}
                        <thead className="bg-field">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wide">
                                    Original URL
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wide">
                                    Short URL
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wide">
                                    Clicks
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-muted uppercase tracking-wide">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-line text-ink">
                            {data.urls.map((url) => (
                                <tr key={url._id} className="hover:bg-surface/60 transition-colors duration-150">
                                    <td className="px-6 py-4">
                                        <div className="text-sm truncate max-w-xs">{url.fullUrl}</div>
                                    </td>

                                    <td className="px-6 py-4">
                                        <a
                                            href={url.short_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-ink underline underline-offset-4 hover:text-ink/80"
                                        >
                                            {url.short_url}
                                        </a>
                                    </td>

                                    <td className="px-2 py-2">
                                        <span className="px-3 py-1 flex w-fit text-xs leading-5 font-medium rounded border border-line bg-surface text-ink">
                                            {url.clicks} {url.clicks === 1 ? "click" : "clicks"}
                                        </span>
                                    </td>

                                    <td className="px-6 py-4 h-full text-sm font-medium flex gap-2 items-center">
                                        <button
                                            onClick={() => handleCopy(url.short_url, url._id)}
                                            className={`inline-flex items-center px-4 py-2 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors duration-200 ${copiedId === url._id
                                                ? "bg-surface text-muted border border-line"
                                                : "bg-field text-ink border border-line hover:bg-surface"
                                                } focus:outline-none`}
                                        >
                                            {copiedId === url._id ? "Copied" : "Copy URL"}
                                        </button>

                                        <button
                                            onClick={() => handleDelete(url._id)}
                                            className="flex items-center px-4 py-2 border border-line text-ink hover:bg-surface text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors duration-200"
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