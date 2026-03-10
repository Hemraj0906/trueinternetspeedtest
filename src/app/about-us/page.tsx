


// import type { Metadata } from "next";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "About Us - TrueInternetSpeedTest | Free Internet Speed Test Tool",
//   description:
//     "TrueInternetSpeedTest.com is a free online internet speed test tool to check download speed, upload speed, ping latency, WiFi speed and broadband network performance instantly worldwide.",
//   keywords:
//     "internet speed test, wifi speed test, broadband speed test, gaming speed test, streaming speed test, mobile speed test online, internet performance test",
//   alternates: {
//     canonical: "https://trueinternetspeedtest.com/about-us",
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
//   openGraph: {
//     title: "About TrueInternetSpeedTest – Free Internet Speed Test Tool",
//     description:
//       "TrueInternetSpeedTest is a free online platform to measure internet speed, WiFi performance and broadband quality instantly.",
//     url: "https://trueinternetspeedtest.com/about-us",
//     siteName: "TrueInternetSpeedTest",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "About TrueInternetSpeedTest",
//     description:
//       "Check your internet speed, WiFi speed and network performance instantly with TrueInternetSpeedTest.",
//   },
// };

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:to-gray-900">
//       <div className="max-w-5xl mx-auto px-6 py-16">
//         {/* Header */}

//         <header className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
//             About TrueInternetSpeedTest – Free Internet Speed Test Tool
//           </h1>

//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
//             <strong>TrueInternetSpeedTest.com</strong> is a free online internet
//             speed test tool that allows users to check their internet speed
//             instantly. Our platform measures download speed, upload speed, and
//             latency (ping) to help users understand their real network
//             performance. You can easily run a{" "}
//             <Link href="/" className="text-blue-600 font-medium">
//               WiFi speed test
//             </Link>
//             , a{" "}
//             <Link
//               href="/broadband-speed-test"
//               className="text-blue-600 font-medium"
//             >
//               broadband internet speed test
//             </Link>
//             ,{" "}
//             <Link
//               href="/mobile-speed-test"
//               className="text-blue-600 font-medium"
//             >
//               mobile data speed test
//             </Link>
//             ,{" "}
//             <Link
//               href="/gaming-speed-test"
//               className="text-blue-600 font-medium"
//             >
//               gaming speed test
//             </Link>
//             , and{" "}
//             <Link
//               href="/streaming-speed-test"
//               className="text-blue-600 font-medium"
//             >
//               streaming speed test
//             </Link>{" "}
//             to analyze how well your internet connection performs for browsing,
//             online gaming, video streaming, video calls, and everyday internet
//             use. TrueInternetSpeedTest uses fast global testing servers to
//             deliver accurate and reliable speed test results across WiFi
//             networks, mobile internet, and broadband connections worldwide.
//           </p>

//           <p className="text-gray-500 mt-4">Last Updated: March 9, 2026</p>
//         </header>

//         {/* Our Platform */}

//         <section className="mb-14">
//           <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
//             Our Platform
//           </h2>

//           <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
//             TrueInternetSpeedTest was created to provide a simple and reliable
//             way for users around the world to measure their internet connection
//             performance. Many users experience slow browsing, buffering videos,
//             or poor video calls without knowing their real network speed.
//           </p>

//           <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
//             Our platform helps identify internet performance by measuring
//             download speed, upload speed, latency (ping), and network stability.
//             The tool works instantly on desktop computers, laptops, tablets, and
//             smartphones without installing any applications.
//           </p>

//           <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//             TrueInternetSpeedTest uses Cloudflare’s global edge network to
//             measure internet download speed, upload speed, latency (ping), and
//             overall network performance across WiFi, mobile data, and broadband
//             connections to deliver fast and reliable speed test results
//             worldwide.
//           </p>
//         </section>

//         {/* What We Measure */}

//         <section className="mb-14">
//           <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
//             What Our Internet Speed Test Measures
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
//               <h3 className="font-semibold text-lg mb-2 text-blue-600">
//                 Download Speed
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300">
//                 Download speed measures how quickly data is transferred from the
//                 internet to your device. This affects streaming, browsing, and
//                 downloading files.
//               </p>
//             </div>

//             <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
//               <h3 className="font-semibold text-lg mb-2 text-green-600">
//                 Upload Speed
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300">
//                 Upload speed measures how fast your device can send data to
//                 servers on the internet. This is important for video calls,
//                 uploading files, and cloud storage.
//               </p>
//             </div>

//             <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
//               <h3 className="font-semibold text-lg mb-2 text-purple-600">
//                 Ping / Latency
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300">
//                 Ping measures the response time between your device and internet
//                 servers. Lower latency improves gaming, video calls, and
//                 real-time communication.
//               </p>
//             </div>

//             <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
//               <h3 className="font-semibold text-lg mb-2 text-indigo-600">
//                 Connection Stability
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300">
//                 Network stability determines how consistent your internet
//                 connection is during streaming, gaming, remote work, and
//                 browsing.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Types of Speed Tests */}

//         <section className="mb-14">
//           <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
//             Types of Speed Tests Available
//           </h2>

//           <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//             TrueInternetSpeedTest allows users to perform multiple internet
//             performance tests including internet speed tests, WiFi speed tests,
//             broadband speed tests, gaming speed tests, streaming speed tests,
//             and mobile network speed tests. These tests help determine whether
//             your internet connection is fast enough for activities like HD
//             streaming, online gaming, remote work, and video conferencing.
//           </p>
//         </section>

//         {/* Supported Connections */}

//         <section className="mb-14">
//           <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
//             Supported Internet Connections
//           </h2>

//           <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//             TrueInternetSpeedTest works with all types of internet connections
//             including fiber broadband, DSL, cable internet, WiFi networks, and
//             mobile networks such as 4G LTE and 5G. Our speed test platform is
//             designed to provide accurate network performance analysis for users
//             worldwide.
//           </p>
//         </section>

//         {/* Mission */}

//         <section className="mb-14 bg-blue-50 dark:bg-blue-900/20 p-10 rounded-2xl text-center">
//           <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
//             Our Mission
//           </h2>

//           <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
//             Our mission is to provide a free, simple, and accurate internet
//             speed testing tool that helps users understand their network
//             performance and improve their online experience.
//           </p>
//         </section>

//         {/* CTA */}

//         <section className="text-center mb-14">
//           <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
//             Test Your Internet Speed Now
//           </h2>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/"
//               className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
//             >
//               Start Internet Speed Test
//             </Link>

//             <Link
//               href="/streaming-speed-test"
//               className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition"
//             >
//               Check Internet Speed for YouTube
//             </Link>
//           </div>
//         </section>
//       </div>

//       {/* Structured Data */}

//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "Organization",
//             name: "TrueInternetSpeedTest",
//             url: "https://trueinternetspeedtest.com",
//             logo: "https://trueinternetspeedtest.com/logo.png",
//           }),
//         }}
//       />
//     </div>
//   );
// }



import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - TrueInternetSpeedTest | Free Internet Speed Test Tool",
  description:
    "TrueInternetSpeedTest.com is a free online internet speed test tool to check download speed, upload speed, ping latency, WiFi speed and broadband network performance instantly worldwide.",
  keywords:
    "internet speed test, wifi speed test, broadband speed test, gaming speed test, streaming speed test, mobile speed test online, internet performance test",
  alternates: {
    canonical: "https://trueinternetspeedtest.com/about-us",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About TrueInternetSpeedTest – Free Internet Speed Test Tool",
    description:
      "TrueInternetSpeedTest is a free online platform to measure internet speed, WiFi performance and broadband quality instantly.",
    url: "https://trueinternetspeedtest.com/about-us",
    siteName: "TrueInternetSpeedTest",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About TrueInternetSpeedTest",
    description:
      "Check your internet speed, WiFi speed and network performance instantly with TrueInternetSpeedTest.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-black">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About TrueInternetSpeedTest – Free Internet Speed Test Tool
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            <strong>TrueInternetSpeedTest.com</strong> is a free online internet
            speed test tool that allows users to check their internet speed
            instantly. Our platform measures download speed, upload speed, and
            latency (ping) to help users understand their real network
            performance. You can easily run a{" "}
            <Link
              href="/"
              className="text-blue-600 dark:text-blue-400 font-medium"
            >
              WiFi speed test
            </Link>
            , a{" "}
            <Link
              href="/broadband-speed-test"
              className="text-blue-600 dark:text-blue-400 font-medium"
            >
              broadband internet speed test
            </Link>
            ,{" "}
            <Link
              href="/mobile-speed-test"
              className="text-blue-600 dark:text-blue-400 font-medium"
            >
              mobile data speed test
            </Link>
            ,{" "}
            <Link
              href="/gaming-speed-test"
              className="text-blue-600 dark:text-blue-400 font-medium"
            >
              gaming speed test
            </Link>
            , and{" "}
            <Link
              href="/streaming-speed-test"
              className="text-blue-600 dark:text-blue-400 font-medium"
            >
              streaming speed test
            </Link>{" "}
            to analyze how well your internet connection performs for browsing,
            online gaming, video streaming, video calls, and everyday internet
            use.
          </p>

          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Last Updated: March 9, 2026
          </p>
        </header>

        {/* Our Platform */}

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Platform
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            TrueInternetSpeedTest was created to provide a simple and reliable
            way for users around the world to measure their internet connection
            performance.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Our platform helps identify internet performance by measuring
            download speed, upload speed, latency (ping), and network stability.
          </p>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            TrueInternetSpeedTest uses Cloudflare global edge infrastructure to
            deliver accurate internet speed test results worldwide.
          </p>
        </section>

        {/* What We Measure */}

        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            What Our Internet Speed Test Measures
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-2 text-blue-600 dark:text-blue-400">
                Download Speed
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Download speed measures how quickly data is transferred from the
                internet to your device.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-2 text-green-600 dark:text-green-400">
                Upload Speed
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Upload speed measures how fast your device can send data to
                servers on the internet.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-2 text-purple-600 dark:text-purple-400">
                Ping / Latency
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ping measures the response time between your device and servers.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-2 text-indigo-600 dark:text-indigo-400">
                Connection Stability
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Stability determines how consistent your internet connection is.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}

        <section className="mb-14 bg-blue-50 dark:bg-blue-900/20 p-10 rounded-2xl text-center border border-blue-100 dark:border-blue-900">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Mission
          </h2>

          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Our mission is to provide a fast, reliable, and free internet speed
            testing platform for users worldwide.
          </p>
        </section>

        {/* CTA */}

        <section className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Test Your Internet Speed Now
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Start Internet Speed Test
            </Link>

            <Link
              href="/streaming-speed-test"
              className="border border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition"
            >
              Check Internet Speed for YouTube
            </Link>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "TrueInternetSpeedTest",
            url: "https://trueinternetspeedtest.com",
            logo: "https://trueinternetspeedtest.com/logo.png",
          }),
        }}
      />
    </div>
  );
}