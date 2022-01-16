/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  future: { strictPostcssConfiguration: true },
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  // experimental: { concurrentFeatures: true, serverComponents: true },
};

export default nextConfig;
