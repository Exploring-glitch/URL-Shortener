

// middleware/errorHandler.js from chatgpt

export const errorHandler = (err, req, res, next) => {
  console.error("Error caught:", err);

  // If you manually set a statusCode (like 404 or 400), use it
  const statusCode = err.statusCode || 500;

  // Use your custom message or fallback to a default one
  const message = err.message || "Internal Server Error";

  // Optional: You can also log stack trace for debugging
  if (process.env.NODE_ENV !== "production") {
    console.error(err.stack);
  }

  // Send a clean JSON response to the client
  res.status(statusCode).json({
    success: false,
    message,
    // Include stack only in development mode (for debugging)
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  });
};
