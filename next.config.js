/** @type {import('next').NextConfig} */

// Static media never changes name when it changes content, so it can be cached for a month.
// (Next serves /public files with max-age=0 by default, which re-checks every large video and photo.)
const longCache = [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }];

const nextConfig = {
  // lets a production build run beside the dev server: NEXT_DIST=.next-prod next build
  distDir: process.env.NEXT_DIST || ".next",
  reactStrictMode: true,
  images: {
    domains: ["travel-and-tourism.s3.amazonaws.com"],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000,
  },
  async headers() {
    return ["/vedios/:path*", "/frames/:path*", "/images/:path*", "/updated-images/:path*", "/json/:path*"].map((source) => ({
      source,
      headers: longCache,
    }));
  },
};

module.exports = nextConfig;
