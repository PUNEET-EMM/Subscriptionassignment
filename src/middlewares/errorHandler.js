function errorHandler(err, req, res, next) {
  console.error("[ERROR]", err);
  if (res.headersSent) return next(err);
  const status = err.status || 500;
  const message = err.message || "Internal server error";
  res.status(status).json({ success: false, error: message });
}

module.exports = { errorHandler };
