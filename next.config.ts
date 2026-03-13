// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   // Enable compression for better performance
//   compress: true,

//   // Image optimization configuration
//   images: {
//     formats: ["image/avif", "image/webp"],
//     minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "flagcdn.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "*.cloudflare.com",
//         pathname: "/**",
//       },
//     ],
//   },

//   // Experimental features for performance
//   experimental: {
//     optimizePackageImports: ["lucide-react", "recharts", "framer-motion", "next-themes"],
//   },

//   // Security headers
//   async headers() {
//     return [
//       {
//         source: "/(.*)",
//         headers: [
//           {
//             key: "X-Frame-Options",
//             value: "DENY",
//           },
//           {
//             key: "X-Content-Type-Options",
//             value: "nosniff",
//           },
//           {
//             key: "Referrer-Policy",
//             value: "origin-when-cross-origin",
//           },
//         ],
//       },
//       {
//         source: "/api/(.*)",
//         headers: [
//           {
//             key: "Cache-Control",
//             value: "no-store, no-cache, must-revalidate, proxy-revalidate",
//           },
//         ],
//       },
//     ];
//   },

//   // Redirects for SEO
//   async redirects() {
//     return [
//       {
//         source: "/speedtest",
//         destination: "/",
//         permanent: true,
//       },
//       {
//         source: "/test-speed",
//         destination: "/",
//         permanent: true,
//       },
//     ];
//   },

//   // Enable strict mode for better React behavior
//   reactStrictMode: true,

//   // Powered by header disabled
//   poweredByHeader: false,

//   // Ignore type errors and eslint during build (re-enabled for non-i18n related pre-existing issues)
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };

// export default nextConfig;




  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    compress: true,

    // Fix JS build issues
    // swcMinify: true,

    // compiler: {
    //   removeConsole: false,
    // },

    images: {
      formats: ["image/avif", "image/webp"],
      minimumCacheTTL: 60 * 60 * 24 * 30,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "flagcdn.com",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "*.cloudflare.com",
          pathname: "/**",
        },
      ],
    },

    experimental: {
      optimizePackageImports: [
        "lucide-react",
        "recharts",
        "framer-motion",
        "next-themes",
      ],
      optimizeCss: true,
    },

    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            { key: "X-Frame-Options", value: "DENY" },
            { key: "X-Content-Type-Options", value: "nosniff" },
            { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          ],
        },
        {
          source: "/api/(.*)",
          headers: [
            {
              key: "Cache-Control",
              value: "no-store, no-cache, must-revalidate, proxy-revalidate",
            },
          ],
        },
      ];
    },

    async redirects() {
      return [
        {
          source: "/speedtest",
          destination: "/",
          permanent: true,
        },
        {
          source: "/test-speed",
          destination: "/",
          permanent: true,
        },
      ];
    },

    reactStrictMode: true,
    poweredByHeader: false,

    typescript: {
      ignoreBuildErrors: true,
    },

    eslint: {
      ignoreDuringBuilds: true,
    },
  };  

  export default nextConfig;
