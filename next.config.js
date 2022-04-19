/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
     // ssr and displayName are configured by default
     styledComponents: true,
  },
  presets: ["@babel/preset-react", "@babel/preset-env"],
  plugins: ["@emotion"],
};

module.exports = nextConfig;
