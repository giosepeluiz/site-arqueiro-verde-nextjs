module.exports = {
  reactStrictMode: true,
  env: {
    YT_KEY: process.env.YT_KEY,
    YT_ID: process.env.YT_ID,
  },
  async redirects() {
    return [
      {
        source: "epic.*/:id",
        destination: "loja.*/epic/:id",
        permanent: true,
      },
      {
        source: "loja.*/:slug/:id",
        destination: "/:slug/:id",
        permanent: true,
      },
    ];
  },
};
