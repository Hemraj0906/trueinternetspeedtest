// import type { Metadata } from "next";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title:
//     "Terms & Conditions - TrueInternetSpeedTest | Internet Speed Test Service Agreement",

//   description:
//     "Terms and Conditions for using TrueInternetSpeedTest free internet speed test tool. Includes rules for WiFi speed test, broadband speed test, mobile internet testing and service limitations.",

//   keywords:
//     "internet speed test terms, wifi speed test conditions, broadband speed test agreement, network speed test policy",

//   alternates: {
//     canonical: "https://trueinternetspeedtest.com/terms",
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },

//   openGraph: {
//     title:
//       "Terms & Conditions - TrueInternetSpeedTest Internet Speed Test Service",
//     description:
//       "Official service agreement for using the TrueInternetSpeedTest internet speed test platform.",
//     url: "https://trueinternetspeedtest.com/terms",
//     siteName: "TrueInternetSpeedTest",
//     type: "website",
//     images: [
//       {
//         url: "https://trueinternetspeedtest.com/og-terms.jpg",
//         width: 1200,
//         height: 630,
//         alt: "TrueInternetSpeedTest Terms",
//       },
//     ],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "TrueInternetSpeedTest Terms & Conditions",
//     description:
//       "Read the official service agreement and usage policy for the TrueInternetSpeedTest internet speed test tool.",
//   },
// };

// export default function TermsConditionsPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
//       <div className="container mx-auto px-4 py-12 lg:py-20">
//         <div className="max-w-5xl mx-auto">
//           {/* HERO */}

//           <div className="text-center mb-16">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent">
//               Terms & Conditions
//             </h1>

//             <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
//               <Link href="/" className="text-orange-600 font-semibold">
//                 {" "}
//                 Internet Speed Test
//               </Link>{" "}
//               and{" "}
//               <Link
//                 href="/streaming-speed-test"
//                 className="text-orange-600 font-semibold"
//               >
//                 {" "}
//                 Streaming Speed Test
//               </Link>{" "}
//               tools along with the{" "}
//               <Link href="/" className="text-orange-600 font-semibold">
//                 {" "}
//                 WiFi Speed Test
//               </Link>
//               ,{" "}
//               <Link
//                 href="/mobile-speed-test"
//                 className="text-orange-600 font-semibold"
//               >
//                 {" "}
//                 Mobile Speed Test
//               </Link>
//               ,{" "}
//               <Link
//                 href="/broadband-speed-test"
//                 className="text-orange-600 font-semibold"
//               >
//                 {" "}
//                 Broadband Speed Test
//               </Link>
//               , and{" "}
//               <Link
//                 href="/gaming-speed-test"
//                 className="text-orange-600 font-semibold"
//               >
//                 {" "}
//                 Gaming Speed Test
//               </Link>{" "}
//               tools provided by TrueInternetSpeedTest.
//             </p>

//             <p className="text-gray-500 mt-4">Last Updated: March 8, 2026</p>
//           </div>

//           {/* CONTENT */}

//           <section className="mb-16">
//             <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
//               1. Acceptance of Terms
//             </h2>

//             <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//               By accessing and using TrueInternetSpeedTest.com you agree to
//               comply with these Terms & Conditions and all applicable laws. If
//               you do not agree, you should discontinue using this website.
//             </p>
//           </section>

//           <section className="mb-16">
//             <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
//               2. Service Description
//             </h2>

//             <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
//               TrueInternetSpeedTest provides free tools for measuring internet
//               connection performance including download speed, upload speed,
//               latency (ping), and network stability.
//             </p>

//             <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-lg">
//               <li>• Internet Speed Test</li>
//               <li>• WiFi Speed Test</li>
//               <li>• Broadband Speed Test</li>
//               <li>• Mobile Network Speed Test</li>
//               <li>• Streaming speed Test</li>
//               <li>• Gaming Speed Test</li>
              
//             </ul>
//           </section>

//           <section className="mb-16">
//             <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
//               3. Acceptable Use
//             </h2>

//             <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//               Users must not misuse the service by performing automated testing,
//               scraping data, launching attacks, or attempting to disrupt the
//               service infrastructure.
//             </p>
//           </section>

//           <section className="mb-16">
//             <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
//               4. Accuracy Disclaimer
//             </h2>

//             <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//               Speed test results are estimates based on current network
//               conditions and should not be considered guaranteed measurements.
//               Performance may vary due to network congestion, device capability,
//               WiFi signal strength, and ISP policies.
//             </p>
//           </section>

//           <section className="mb-16">
//             <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
//               5. Limitation of Liability
//             </h2>

//             <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
//               TrueInternetSpeedTest is provided on an “AS IS” basis without
//               warranties. We are not responsible for damages or disputes
//               resulting from interpretation or use of test results.
//             </p>
//           </section>

//           {/* CTA */}

//           <section className="text-center mb-16">
//             <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
//               Test Your Internet Speed
//             </h2>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link
//                 href="/"
//                 className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition"
//               >
//                 Wifi Speed Test
//               </Link>

//               <Link
//                 href="/gaming-speed-test"
//                 className="border border-orange-600 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transition"
//               >
//                 gaming speed test
//               </Link>

//               <Link
//                 href="/streaming-speed-test"
//                 className="border border-orange-600 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transition"
//               >
//                 streaming speed test
//               </Link>
//             </div>
//           </section>

//           {/* FOOTER */}
//         </div>
//       </div>

//       {/* SCHEMA */}

//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             name: "TrueInternetSpeedTest Terms & Conditions",
//             url: "https://trueinternetspeedtest.com/terms",
//           }),
//         }}
//       />
//     </div>
//   );
// }




import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Terms & Conditions - TrueInternetSpeedTest | Internet Speed Test Service Agreement",

  description:
    "Terms and Conditions for using the TrueInternetSpeedTest free internet speed test tool including WiFi speed test, mobile speed test, gaming speed test and broadband testing services.",

  keywords:
    "internet speed test terms, wifi speed test conditions, broadband speed test agreement, network speed test policy",

  alternates: {
    canonical: "https://trueinternetspeedtest.com/terms",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Terms & Conditions - TrueInternetSpeedTest Internet Speed Test Service",
    description:
      "Official service agreement for using the TrueInternetSpeedTest internet speed testing platform.",
    url: "https://trueinternetspeedtest.com/terms",
    siteName: "TrueInternetSpeedTest",
    type: "website",
    images: [
      {
        url: "https://trueinternetspeedtest.com/og-terms.jpg",
        width: 1200,
        height: 630,
        alt: "TrueInternetSpeedTest Terms",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "TrueInternetSpeedTest Terms & Conditions",
    description:
      "Read the official service agreement and usage policy for the TrueInternetSpeedTest internet speed test tool.",
  },
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-5xl mx-auto">

          {/* HEADER */}

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent">
              Terms & Conditions
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These terms apply to the use of the{" "}
              <Link href="/" className="text-orange-600 font-semibold">
                Internet Speed Test
              </Link>{" "}
              and{" "}
              <Link href="/" className="text-orange-600 font-semibold">
                WiFi Speed Test
              </Link>{" "}
              tools along with additional testing pages such as{" "}
              <Link href="/mobile-speed-test" className="text-orange-600 font-semibold">
                Mobile Speed Test
              </Link>
              ,{" "}
              <Link href="/broadband-speed-test" className="text-orange-600 font-semibold">
                Broadband Speed Test
              </Link>
              ,{" "}
              <Link href="/gaming-speed-test" className="text-orange-600 font-semibold">
                Gaming Speed Test
              </Link>
              , and{" "}
              <Link href="/streaming-speed-test" className="text-orange-600 font-semibold">
                Streaming Speed Test
              </Link>{" "}
              services provided by TrueInternetSpeedTest.
            </p>

            <p className="text-gray-500 mt-4">Last Updated: March 9, 2026</p>
          </div>

          {/* SECTION 1 */}

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              1. Acceptance of Terms
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              By accessing and using TrueInternetSpeedTest.com you agree to
              comply with these Terms & Conditions and all applicable laws. If
              you do not agree with these terms you should discontinue using
              this website.
            </p>
          </section>

          {/* SECTION 2 */}

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              2. Service Description
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              TrueInternetSpeedTest provides free tools for measuring internet
              connection performance including download speed, upload speed,
              latency (ping) and network stability.
            </p>

            <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-lg">
              <li>• Internet Speed Test</li>
              <li>• WiFi Speed Test</li>
              <li>• Broadband Speed Test</li>
              <li>• Mobile Network Speed Test</li>
              <li>• Streaming Speed Test</li>
              <li>• Gaming Speed Test</li>
            </ul>
          </section>

          {/* SECTION 3 */}

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              3. Acceptable Use
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Users must not misuse the service by performing automated testing,
              scraping data, launching attacks, or attempting to disrupt the
              service infrastructure.
            </p>
          </section>

          {/* SECTION 4 */}

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              4. Accuracy Disclaimer
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Speed test results are estimates based on current network
              conditions and should not be considered guaranteed measurements.
              Performance may vary due to network congestion, device capability,
              WiFi signal strength, and ISP policies.
            </p>
          </section>

          {/* SECTION 5 */}

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              5. Limitation of Liability
            </h2>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              TrueInternetSpeedTest is provided on an “AS IS” basis without
              warranties. We are not responsible for damages or disputes
              resulting from interpretation or use of speed test results.
            </p>
          </section>

          {/* CTA */}

          <section className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Test Your Internet Speed
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Link
                href="/"
                className="bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-700 transition"
              >
                Internet Speed Test
              </Link>

              <Link
                href="/streaming-speed-test"
                className="border border-orange-600 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transition"
              >
                Internet Speed Check For YouTube
              </Link>

              <Link
                href="/gaming-speed-test"
                className="border border-orange-600 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 hover:text-white transition"
              >
                Gaming Speed Test
              </Link>

            </div>
          </section>

        </div>
      </div>

      {/* STRUCTURED DATA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "TrueInternetSpeedTest Terms & Conditions",
            url: "https://trueinternetspeedtest.com/terms",
          }),
        }}
      />

    </div>
  );
}

