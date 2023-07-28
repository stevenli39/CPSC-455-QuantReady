const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // Proxy requests to /api and /auth/google to the backend server
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      target: process.env.REACT_APP_API_ENDPOINT,
    })
  );

  // Proxy requests to https://quantready-app.onrender.com/auth/google to https://quantready.onrender.com/auth/google
  app.use(
    "https://quantready-app.onrender.com/auth/google",
    createProxyMiddleware({
      target: "https://quantready.onrender.com/auth/google",
    })
  );
};
