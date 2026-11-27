const IS_GD_ENDPOINT = "https://is.gd/create.php";
const TIMEOUT_MS = 5000;


// Returns a shorter is.gd link for our own short URL, or null when unavailable.
export const shortenWithIsGd = async (longUrl) => {
    try {
        const endpoint = `${IS_GD_ENDPOINT}?format=json&url=${encodeURIComponent(longUrl)}`;
        const response = await fetch(endpoint, { signal: AbortSignal.timeout(TIMEOUT_MS) });

        if (!response.ok) return null;

        const data = await response.json();
        if (data.errorcode || typeof data.shorturl !== 'string' || !data.shorturl.startsWith("https://is.gd/")) {
            return null;
        }

        return data.shorturl;
    } catch (error) {
        console.error("is.gd shortening failed:", error.message);
        return null;
    }
}
