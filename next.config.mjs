/** @type {import('next').NextConfig} */
const nextConfig = {
  // Showcase media often comes from IPFS/Arweave with gateway failover via <img>,
  // so the Image Optimization API stays off for those paths.
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/showcase",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/showcase/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          { key: "Cache-Control", value: "private, no-cache, no-store, max-age=0, must-revalidate" },
        ],
      },
    ]
  },
}

export default nextConfig
