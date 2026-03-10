





// import type { Metadata } from "next";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Contact Us - TrueInternetSpeedTest Support",
//   description:
//     "Contact TrueInternetSpeedTest for help with internet speed test issues, WiFi speed test results, slow network troubleshooting and general support.",

//   keywords:
//     "contact internet speed test support, wifi speed test help, broadband speed test issues, speed test support",

//   alternates: {
//     canonical: "https://trueinternetspeedtest.com/contact-us",
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },

//   openGraph: {
//     title: "Contact TrueInternetSpeedTest Support",
//     description:
//       "Need help with internet speed test results or WiFi speed issues? Contact TrueInternetSpeedTest support.",
//     url: "https://trueinternetspeedtest.com/contact-us",
//     siteName: "TrueInternetSpeedTest",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Contact TrueInternetSpeedTest",
//     description:
//       "Get help with internet speed test issues, WiFi speed results and troubleshooting slow internet.",
//   },
// };

// export default function ContactUsPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:to-gray-900">
//       <div className="max-w-5xl mx-auto px-6 py-16">
//         {/* HEADER */}

//         <header className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
//             Contact TrueInternetSpeedTest
//           </h1>

//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//             Need help with our{" "}
//             <Link href="/" className="text-blue-600 font-medium">
//               internet speed test
//             </Link>{" "}
//             or want to understand your{" "}
//             <Link
//               href="/mobile-speed-test"
//               className="text-blue-600 font-medium"
//             >
//               WiFi speed test or Mobile
//             </Link>{" "}
//             results? Our team is here to help with troubleshooting slow internet
//             connections and technical questions.
//           </p>

//           <p className="text-gray-500 mt-4">Last Updated: March 9, 2026</p>
//         </header>

//         {/* EMAIL SUPPORT */}

//         <section className="text-center mb-16 bg-white dark:bg-gray-800 rounded-2xl p-10 shadow">
//           <div className="text-5xl mb-6">📧</div>

//           <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//             Email Support
//           </h2>

//           <p className="text-gray-600 dark:text-gray-300 mb-6">
//             For technical support, feedback, partnership requests, or general
//             questions about our speed test service, please contact us via email.
//           </p>

//           <div className="bg-blue-600 text-white p-6 rounded-xl text-xl font-semibold mb-6">
//             trueinternetspeedtest@gmail.com
//           </div>

//           <a
//             href="mailto:trueinternetspeedtest@gmail.com"
//             className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
//           >
//             Send Email
//           </a>

//           <p className="text-sm text-gray-500 mt-4">
//             We typically respond within 24–48 hours.
//           </p>
//         </section>

//         {/* COMMON ISSUES */}

//         <section className="mb-16">
//           <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
//             Common Internet Speed Test Issues
//           </h2>

//           <div className="grid md:grid-cols-2 gap-6">
//             <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
//               <h3 className="font-semibold text-lg mb-2 text-blue-600">
//                 Speed Test Not Working
//               </h3>

//               <p className="text-gray-600 dark:text-gray-300">
//                 If the speed test does not start, try disabling ad blockers, VPN
//                 services, or browser extensions that may interfere with the test
//                 connection.
//               </p>
//             </div>

//             <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
//               <h3 className="font-semibold text-lg mb-2 text-green-600">
//                 Slow WiFi Speed
//               </h3>

//               <p className="text-gray-600 dark:text-gray-300">
//                 WiFi speed can be affected by router placement, signal
//                 interference, and distance from your device.
//               </p>
//             </div>

//             <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
//               <h3 className="font-semibold text-lg mb-2 text-purple-600">
//                 Low Download Speed
//               </h3>

//               <p className="text-gray-600 dark:text-gray-300">
//                 Download speed may decrease during peak usage hours when many
//                 users share the same network infrastructure.
//               </p>
//             </div>

//             <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
//               <h3 className="font-semibold text-lg mb-2 text-indigo-600">
//                 High Ping / Latency
//               </h3>

//               <p className="text-gray-600 dark:text-gray-300">
//                 High latency affects gaming and video calls. Running the speed
//                 test with a closer server can improve ping results.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* FAQ SECTION (SEO GOLD) */}

//         <section className="mb-16">
//           <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
//             Frequently Asked Questions
//           </h2>

//           <div className="space-y-6">
//             <div>
//               <h3 className="font-semibold text-lg text-blue-600">
//                 Why is my internet speed slower than my plan?
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300">
//                 Many factors affect speed including WiFi interference,
//                 background downloads, router quality, and peak network usage.
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold text-lg text-blue-600">
//                 How accurate is this internet speed test?
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300">
//                 Our speed test measures download speed, upload speed and latency
//                 using optimized testing servers to provide reliable results.
//               </p>
//             </div>

//             <div>
//               <h3 className="font-semibold text-lg text-blue-600">
//                 Should I test using WiFi or Ethernet?
//               </h3>
//               <p className="text-gray-600 dark:text-gray-300">
//                 Ethernet tests usually give more accurate results because WiFi
//                 signals can be affected by distance and interference.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* CTA */}

//         <section className="text-center mb-10">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
//             Run a New Speed Test
//           </h2>

//           <p className="text-gray-600 dark:text-gray-300 mb-8">
//             If you're experiencing slow internet, run a fresh test to measure
//             your current connection speed.
//           </p>

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
//               Netflix Internet Speed Test
//             </Link>
//           </div>
//         </section>
//       </div>

//       {/* STRUCTURED DATA */}

//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "ContactPage",
//             name: "TrueInternetSpeedTest Contact",
//             url: "https://trueinternetspeedtest.com/contact-us",
//             contactPoint: {
//               "@type": "ContactPoint",
//               contactType: "customer support",
//               email: "trueinternetspeedtest@gmail.com",
//               availableLanguage: ["English"],
//             },
//           }),
//         }}
//       />
//     </div>
//   );
// }



import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us - TrueInternetSpeedTest Support",
  description:
    "Contact TrueInternetSpeedTest for help with internet speed test issues, WiFi speed test results, slow network troubleshooting and general support.",

  keywords:
    "contact internet speed test support, wifi speed test help, broadband speed test issues, speed test support",

  alternates: {
    canonical: "https://trueinternetspeedtest.com/contact-us",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Contact TrueInternetSpeedTest Support",
    description:
      "Need help with internet speed test results or WiFi speed issues? Contact TrueInternetSpeedTest support.",
    url: "https://trueinternetspeedtest.com/contact-us",
    siteName: "TrueInternetSpeedTest",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact TrueInternetSpeedTest",
    description:
      "Get help with internet speed test issues, WiFi speed results and troubleshooting slow internet.",
  },
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-black">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* HEADER */}

        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contact TrueInternetSpeedTest
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Need help with our{" "}
            <Link
              href="/"
              className="text-blue-600 dark:text-blue-400 font-medium"
            >
              internet speed test
            </Link>{" "}
            or want to understand your{" "}
            <Link
              href="/mobile-speed-test"
              className="text-blue-600 dark:text-blue-400 font-medium"
            >
              WiFi speed test or Mobile
            </Link>{" "}
            results? Our team is here to help with troubleshooting slow internet
            connections and technical questions.
          </p>

          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Last Updated: March 9, 2026
          </p>
        </header>

        {/* EMAIL SUPPORT */}

        <section className="text-center mb-16 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-10 shadow-lg">
          <div className="text-5xl mb-6">📧</div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Email Support
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            For technical support, feedback, partnership requests, or general
            questions about our speed test service, please contact us via email.
          </p>

          <div className="bg-blue-600 text-white p-6 rounded-xl text-xl font-semibold mb-6">
            trueinternetspeedtest@gmail.com
          </div>

          <a
            href="mailto:trueinternetspeedtest@gmail.com"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Send Email
          </a>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            We typically respond within 24–48 hours.
          </p>
        </section>

        {/* COMMON ISSUES */}

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Common Internet Speed Test Issues
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-lg">
              <h3 className="font-semibold text-lg mb-2 text-blue-600 dark:text-blue-400">
                Speed Test Not Working
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                If the speed test does not start, try disabling ad blockers, VPN
                services, or browser extensions.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-lg">
              <h3 className="font-semibold text-lg mb-2 text-green-600 dark:text-green-400">
                Slow WiFi Speed
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                WiFi speed can be affected by router placement, signal
                interference, and distance.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-lg">
              <h3 className="font-semibold text-lg mb-2 text-purple-600 dark:text-purple-400">
                Low Download Speed
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                Download speed may decrease during peak usage hours.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-lg">
              <h3 className="font-semibold text-lg mb-2 text-indigo-600 dark:text-indigo-400">
                High Ping / Latency
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                High latency affects gaming and video calls.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                Why is my internet speed slower than my plan?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                WiFi interference, background downloads and router quality can
                affect your speed.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                How accurate is this internet speed test?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our tool measures download speed, upload speed and latency using
                optimized testing servers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-blue-600 dark:text-blue-400">
                Should I test using WiFi or Ethernet?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ethernet usually gives more accurate results than WiFi.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}

        <section className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Run a New Speed Test
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            If you're experiencing slow internet, run a fresh test to measure
            your connection speed.
          </p>

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
              Netflix Internet Speed Test
            </Link>
          </div>
        </section>
      </div>

      {/* STRUCTURED DATA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "TrueInternetSpeedTest Contact",
            url: "https://trueinternetspeedtest.com/contact-us",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              email: "trueinternetspeedtest@gmail.com",
              availableLanguage: ["English"],
            },
          }),
        }}
      />
    </div>
  );
}


//form include support direct to email include here code 

// import type { Metadata } from "next";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Contact Us - TrueInternetSpeedTest Support",
//   description:
//     "Contact TrueInternetSpeedTest for help with internet speed test issues, WiFi speed test results, slow internet troubleshooting and technical support.",
//   keywords:
//     "contact internet speed test support, wifi speed test help, slow internet support, broadband speed test issues",

//   alternates: {
//     canonical: "https://trueinternetspeedtest.com/contact-us",
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },

//   openGraph: {
//     title: "Contact TrueInternetSpeedTest",
//     description:
//       "Need help with internet speed test results or slow WiFi? Contact our support team.",
//     url: "https://trueinternetspeedtest.com/contact-us",
//     siteName: "TrueInternetSpeedTest",
//     type: "website",
//   },
// };

// export default function ContactUsPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:to-gray-900">
//       <div className="max-w-5xl mx-auto px-6 py-16">
//         {/* Header */}

//         <header className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
//             Contact TrueInternetSpeedTest
//           </h1>

//           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//             Need help with our{" "}
//             <Link href="/speed-test" className="text-blue-600 font-medium">
//               internet speed test
//             </Link>{" "}
//             or checking your{" "}
//             <Link href="/wifi-speed-test" className="text-blue-600 font-medium">
//               WiFi speed test
//             </Link>{" "}
//             results? Our team is ready to help you solve slow internet issues.
//           </p>
//         </header>

//         {/* Email Support */}

//         <section className="text-center mb-16 bg-white dark:bg-gray-800 rounded-2xl p-10 shadow">
//           <div className="text-5xl mb-6">📧</div>

//           <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
//             Email Support
//           </h2>

//           <p className="text-gray-600 dark:text-gray-300 mb-6">
//             For questions, technical support, or feedback about our internet
//             speed test service, contact us via Gmail.
//           </p>

//           <div className="bg-blue-600 text-white p-6 rounded-xl text-xl font-semibold mb-6">
//             trueinternetspeedtest@gmail.com
//           </div>

//           <a
//             href="https://mail.google.com/mail/?view=cm&fs=1&to=trueinternetspeedtest@gmail.com&su=Speed%20Test%20Support"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition"
//           >
//             Send Email via Gmail
//           </a>

//           <p className="text-sm text-gray-500 mt-4">
//             We usually reply within 24–48 hours.
//           </p>
//         </section>

//         {/* Contact Form */}

//         <section className="mb-16 bg-white dark:bg-gray-800 rounded-2xl p-10 shadow">
//           <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
//             Send Us a Message
//           </h2>

//           <form
//             action="https://formsubmit.co/trueinternetspeedtest@gmail.com"
//             method="POST"
//             className="space-y-6"
//           >
//             <input type="hidden" name="_captcha" value="false" />

//             <div>
//               <label className="block text-gray-700 dark:text-gray-300 mb-2">
//                 Name
//               </label>

//               <input
//                 type="text"
//                 name="name"
//                 required
//                 className="w-full border rounded-lg px-4 py-3 dark:bg-gray-700 dark:border-gray-600"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 dark:text-gray-300 mb-2">
//                 Email
//               </label>

//               <input
//                 type="email"
//                 name="email"
//                 required
//                 className="w-full border rounded-lg px-4 py-3 dark:bg-gray-700 dark:border-gray-600"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 dark:text-gray-300 mb-2">
//                 Message
//               </label>

//               <textarea
//                 name="message"
//                 rows={5}
//                 required
//                 className="w-full border rounded-lg px-4 py-3 dark:bg-gray-700 dark:border-gray-600"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold"
//             >
//               Send Message
//             </button>
//           </form>
//         </section>

//         {/* CTA */}

//         <section className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
//             Test Your Internet Speed
//           </h2>

//           <p className="text-gray-600 dark:text-gray-300 mb-8">
//             If you are experiencing slow internet, run a quick speed test now.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/speed-test"
//               className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
//             >
//               Start Internet Speed Test
//             </Link>

//             <Link
//               href="/wifi-speed-test"
//               className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition"
//             >
//               Test WiFi Speed
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
//             "@type": "ContactPage",
//             name: "TrueInternetSpeedTest Contact",
//             url: "https://trueinternetspeedtest.com/contact-us",
//             contactPoint: {
//               "@type": "ContactPoint",
//               contactType: "customer support",
//               email: "trueinternetspeedtest@gmail.com",
//               availableLanguage: ["English"],
//             },
//           }),
//         }}
//       />
//     </div>
//   );
// }