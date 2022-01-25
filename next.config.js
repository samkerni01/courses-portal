module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/courses',
        basePath: false,
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['courses-top.ru']
  },
  reactStrictMode: true
};