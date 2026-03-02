// import type { Metadata } from "next";
// import { SpeedTestWidget } from "@/components/speed-test-widget";
// import { AdPlaceholder } from "@/components/ad-placeholder";
// import { FAQSection } from "@/components/faq-section";
// import { RelatedArticles } from "@/components/related-articles";
// import { Breadcrumb } from "@/components/breadcrumb";
// import { Globe, Wifi, TrendingUp } from "lucide-react";

// export const metadata: Metadata = {
//   title: "Internet Speed Test India – Check Airtel, Jio, BSNL & ACT Speed",
//   description:
//     "Free internet speed test for India. Check your Airtel, Jio, BSNL, ACT, Hathway, or Excitel broadband speed. Compare your ISP speed against India's average broadband speed.",
//   keywords: [
//     "internet speed test india",
//     "broadband speed test india",
//     "jio speed test",
//     "airtel speed test",
//     "bsnl speed test",
//     "act fibernet speed test",
//     "india broadband test",
//     "wifi speed test india",
//     "check internet speed india",
//   ],
//   openGraph: {
//     title: "Internet Speed Test India – Jio, Airtel, BSNL Speed Check",
//     description:
//       "Free broadband speed test for India. Compare your ISP speed with national averages.",
//     url: "https://fastspeedchecker.com/internet-speed-test-india",
//   },
//   alternates: {
//     canonical: "https://fastspeedchecker.com/internet-speed-test-india",
//   },
// };

// const indiaFaqs = [
//   {
//     question: "What is the average internet speed in India?",
//     answer:
//       "As of 2024, India's average fixed broadband speed is approximately 90–120 Mbps download and 80–100 Mbps upload, thanks to widespread fiber rollout by Jio, Airtel, and ACT. Mobile internet average is around 20–40 Mbps on 4G/5G. India ranks among the world's fastest improvers in broadband speed.",
//   },
//   {
//     question: "Which is the fastest ISP in India?",
//     answer:
//       "Based on Ookla and TRAI data, ACT Fibernet and Airtel Xstream Fiber consistently rank as the fastest fixed broadband ISPs in India with average speeds of 100–300 Mbps. For mobile, Jio and Airtel lead on 5G speeds in supported cities. BSNL's FTTH service is also competitive in select areas.",
//   },
//   {
//     question: "How to check Jio fiber speed?",
//     answer:
//       "Use FastSpeedChecker.com to test your Jio Fiber speed. Connect your device to JioFiber WiFi, click 'Start Speed Test', and you'll get accurate download, upload, ping, and jitter readings. For best results, use a wired connection to the JioFiber ONT device.",
//   },
//   {
//     question: "What broadband speed should I get from Airtel Xstream?",
//     answer:
//       "Airtel Xstream Fiber plans range from 40 Mbps to 1 Gbps. By law, ISPs in India must deliver at least 70% of advertised speed. If you're on a 100 Mbps plan, you should get at least 70 Mbps. If consistently below this, contact Airtel support or file a complaint with TRAI.",
//   },
//   {
//     question: "Why is BSNL internet slow?",
//     answer:
//       "BSNL internet can be slow due to aging copper infrastructure in many areas, network congestion, outdated DSL technology, or limited fiber rollout in your area. If available, BSNL FTTH (fiber) is significantly faster. Check if BSNL fiber is available in your area or consider switching to a private ISP.",
//   },
//   {
//     question: "How to complain about slow internet to TRAI?",
//     answer:
//       "In India, you can complain about slow internet to TRAI via the Sanchar Saathi portal or call 1800-11-0420 (toll-free). First, document your speed test results over multiple days at different times. Contact your ISP first — they must resolve within 3 days. If unresolved, escalate to TRAI.",
//   },
// ];

// const relatedArticles = [
//   {
//     href: "/",
//     title: "Internet Speed Test",
//     description: "Test your overall broadband speed.",
//   },
//   {
//     href: "/mobile-speed-test",
//     title: "Mobile Speed Test",
//     description: "Test your Jio, Airtel 4G/5G mobile speed.",
//   },
//   {
//     href: "/what-is-good-internet-speed",
//     title: "What is Good Internet Speed?",
//     description: "Speed guide for Indian broadband users.",
//   },
//   {
//     href: "/how-to-increase-wifi-speed",
//     title: "How to Increase WiFi Speed",
//     description: "Improve your home WiFi in India.",
//   },
// ];

// export default function IndiaSpeedTestPage() {
//   return (
//     <>
//       <section className="relative py-20 bg-gradient-to-b from-[#0a0f05] via-[#080f12] to-background overflow-hidden">
//         <div
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(34,197,94,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)",
//             backgroundSize: "40px 40px",
//           }}
//         />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Breadcrumb items={[{ label: "Internet Speed Test India" }]} />
//           <div className="text-center mb-10">
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium mb-4">
//               <Globe className="w-3.5 h-3.5" />
//               India Broadband Test
//             </div>
//             <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
//               Internet Speed Test India –{" "}
//               <span className="bg-gradient-to-r from-orange-400 via-green-400 to-blue-400 bg-clip-text text-transparent">
//                 Check Airtel, Jio & BSNL
//               </span>
//             </h1>
//             <p className="text-lg text-white/70 max-w-2xl mx-auto">
//               Test your Indian broadband or mobile internet speed and compare
//               with national average speeds. Works with Jio Fiber, Airtel
//               Xstream, BSNL, ACT, and all Indian ISPs.
//             </p>
//           </div>
//           <AdPlaceholder size="leaderboard" className="mb-8 hidden md:flex" />
//           <SpeedTestWidget />
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <AdPlaceholder size="leaderboard" className="my-6" />

//         <section className="py-14">
//           <h2 className="text-3xl font-bold mb-4">
//             India ISP Speed Comparison 2024–2025
//           </h2>
//           <p className="text-muted-foreground mb-8 max-w-2xl">
//             Compare your speed with the average speeds of major Indian ISPs.
//             Data based on millions of speed tests from TRAI reports and Ookla
//             data.
//           </p>
//           <div className="overflow-x-auto rounded-2xl border border-border/50">
//             <table className="w-full text-sm">
//               <thead className="bg-muted/60">
//                 <tr>
//                   {[
//                     "ISP / Operator",
//                     "Type",
//                     "Avg. Download",
//                     "Avg. Upload",
//                     "Avg. Ping",
//                     "Rating",
//                   ].map((h) => (
//                     <th
//                       key={h}
//                       className="text-left px-5 py-3.5 font-semibold text-muted-foreground"
//                     >
//                       {h}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-border/40">
//                 {[
//                   {
//                     isp: "Jio Fiber",
//                     type: "FTTH",
//                     dl: "150 Mbps",
//                     ul: "130 Mbps",
//                     ping: "8ms",
//                     rating: "Excellent",
//                   },
//                   {
//                     isp: "Airtel Xstream Fiber",
//                     type: "FTTH",
//                     dl: "180 Mbps",
//                     ul: "160 Mbps",
//                     ping: "7ms",
//                     rating: "Excellent",
//                   },
//                   {
//                     isp: "ACT Fibernet",
//                     type: "FTTH",
//                     dl: "200 Mbps",
//                     ul: "180 Mbps",
//                     ping: "6ms",
//                     rating: "Excellent",
//                   },
//                   {
//                     isp: "BSNL FTTH",
//                     type: "FTTH",
//                     dl: "80 Mbps",
//                     ul: "70 Mbps",
//                     ping: "15ms",
//                     rating: "Good",
//                   },
//                   {
//                     isp: "Hathway",
//                     type: "Cable/FTTH",
//                     dl: "100 Mbps",
//                     ul: "80 Mbps",
//                     ping: "12ms",
//                     rating: "Good",
//                   },
//                   {
//                     isp: "Excitel",
//                     type: "FTTH",
//                     dl: "120 Mbps",
//                     ul: "100 Mbps",
//                     ping: "9ms",
//                     rating: "Very Good",
//                   },
//                   {
//                     isp: "Jio 5G",
//                     type: "Mobile 5G",
//                     dl: "200 Mbps",
//                     ul: "30 Mbps",
//                     ping: "15ms",
//                     rating: "Excellent",
//                   },
//                   {
//                     isp: "Airtel 5G",
//                     type: "Mobile 5G",
//                     dl: "220 Mbps",
//                     ul: "25 Mbps",
//                     ping: "12ms",
//                     rating: "Excellent",
//                   },
//                 ].map((row) => (
//                   <tr
//                     key={row.isp}
//                     className="bg-card hover:bg-muted/30 transition-colors"
//                   >
//                     <td className="px-5 py-3.5 font-semibold">{row.isp}</td>
//                     <td className="px-5 py-3.5 text-muted-foreground text-xs">
//                       {row.type}
//                     </td>
//                     <td className="px-5 py-3.5 text-blue-400 font-medium">
//                       {row.dl}
//                     </td>
//                     <td className="px-5 py-3.5 text-indigo-400 font-medium">
//                       {row.ul}
//                     </td>
//                     <td className="px-5 py-3.5 text-green-400 font-medium">
//                       {row.ping}
//                     </td>
//                     <td className="px-5 py-3.5">
//                       <span
//                         className={`text-xs font-semibold px-2 py-1 rounded-full ${
//                           row.rating === "Excellent"
//                             ? "bg-green-500/20 text-green-400"
//                             : row.rating === "Very Good"
//                             ? "bg-blue-500/20 text-blue-400"
//                             : "bg-yellow-500/20 text-yellow-400"
//                         }`}
//                       >
//                         {row.rating}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           <p className="text-xs text-muted-foreground mt-3">
//             *Data based on aggregated speed test results. Actual speeds vary by
//             plan, location, and time.
//           </p>
//         </section>

//         <section className="py-14 border-t border-border/40">
//           <h2 className="text-3xl font-bold mb-8">
//             TRAI Broadband Speed Standards in India
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
//             {[
//               {
//                 label: "Basic Broadband",
//                 speed: "2 Mbps",
//                 desc: "TRAI minimum classification for broadband service in India.",
//               },
//               {
//                 label: "Standard Broadband",
//                 speed: "25 Mbps",
//                 desc: "Suitable for HD streaming and video calls for a small family.",
//               },
//               {
//                 label: "High-Speed Broadband",
//                 speed: "100+ Mbps",
//                 desc: "Recommended for modern households with multiple devices.",
//               },
//             ].map((item) => (
//               <div
//                 key={item.label}
//                 className="p-5 rounded-2xl border border-border/50 bg-card text-center"
//               >
//                 <div className="text-3xl font-extrabold text-orange-400 mb-2">
//                   {item.speed}
//                 </div>
//                 <h3 className="font-bold mb-2">{item.label}</h3>
//                 <p className="text-sm text-muted-foreground">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <AdPlaceholder size="medium-rectangle" className="my-6" />
//         <FAQSection faqs={indiaFaqs} title="India Broadband Speed FAQs" />
//         <RelatedArticles articles={relatedArticles} />
//       </div>
//     </>
//   );
// }



import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { AdPlaceholder } from "@/components/ad-placeholder";
import { FAQSection } from "@/components/faq-section";
import { RelatedArticles } from "@/components/related-articles";
import { Breadcrumb } from "@/components/breadcrumb";
import { Globe, Wifi } from "lucide-react";

export const metadata: Metadata = {
  title: "Broadband Speed Test – Worldwide Internet Speed Check",
  description:
    "Free broadband speed test to check your internet speed worldwide. Measure download speed, upload speed, ping, and WiFi performance for fiber, cable, DSL, and mobile networks in any country.",
  keywords: [
    "broadband speed test",
    "internet speed test",
    "wifi speed test",
    "check internet speed",
    "global internet speed test",
    "worldwide broadband test",
    "online speed test",
  ],
  openGraph: {
    title: "Broadband Speed Test – Worldwide Internet Speed Check",
    description:
      "Test your internet speed online anywhere in the world. Accurate broadband and WiFi speed test for all networks.",
    url: "https://fastspeedchecker.com/broadband-speed-test",
    siteName: "FastSpeedChecker",
    type: "website",
  },
  alternates: {
    canonical: "https://fastspeedchecker.com/broadband-speed-test",
  },
};

const faqs = [
  {
    question: "What is a broadband speed test?",
    answer:
      "A broadband speed test measures how fast your internet connection is by checking download speed, upload speed, ping, and network stability. It works for fiber, cable, DSL, WiFi, and mobile networks worldwide.",
  },
  {
    question: "What is a good internet speed?",
    answer:
      "For basic browsing, 10–25 Mbps is sufficient. HD streaming and video calls require 25–50 Mbps. For 4K streaming, gaming, and work-from-home, 100 Mbps or higher is recommended.",
  },
  {
    question: "Does this speed test work worldwide?",
    answer:
      "Yes. This broadband speed test works globally and supports users in the USA, UK, India, Europe, Asia, Africa, and all other regions.",
  },
  {
    question: "Why is my WiFi speed slower than my broadband plan?",
    answer:
      "WiFi speeds may be slower due to router limitations, distance from the router, interference, older devices, or network congestion. A wired Ethernet connection usually gives the most accurate result.",
  },
  {
    question: "How often should I test my internet speed?",
    answer:
      "You should test your internet speed at different times of the day, especially during peak hours, to understand your real-world connection performance.",
  },
];

const relatedArticles = [
  {
    href: "/",
    title: "Internet Speed Test",
    description: "Check your overall internet speed online.",
  },
  {
    href: "/mobile-speed-test",
    title: "Mobile Speed Test",
    description: "Test your 4G and 5G mobile internet speed.",
  },
  {
    href: "/what-is-good-internet-speed",
    title: "What Is a Good Internet Speed?",
    description: "Learn how much speed you really need.",
  },
  {
    href: "/how-to-increase-wifi-speed",
    title: "How to Increase WiFi Speed",
    description: "Improve your WiFi performance at home.",
  },
];

export default function BroadbandSpeedTestPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative py-20 bg-gradient-to-b from-slate-50 to-background dark:from-[#0a0f05] dark:via-[#080f12] overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Broadband Speed Test" }]} />

          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-medium mb-4">
              <Globe className="w-3.5 h-3.5" />
              Worldwide Internet Test
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
              Broadband Speed Test –{" "}
              <span className="bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 bg-clip-text text-transparent">
                Worldwide Internet Check
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-white/70 max-w-3xl mx-auto">
              Instantly test your broadband or WiFi internet speed anywhere in
              the world. Measure download speed, upload speed, ping, and network
              stability for fiber, cable, DSL, and mobile connections.
            </p>
          </div>

          <AdPlaceholder size="leaderboard" className="mb-8 hidden md:flex" />

          <SpeedTestWidget />

          {/* SEO SUPPORTING PARAGRAPH */}
          <p className="mt-8 text-slate-700 dark:text-muted-foreground max-w-3xl mx-auto text-center">
            This global broadband speed test helps users worldwide check real
            internet performance. Whether you are in the United States, United
            Kingdom, India, Europe, or any other country, you can accurately
            measure your internet speed online in seconds.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdPlaceholder size="leaderboard" className="my-6" />

        {/* WHAT IS GOOD SPEED */}
        <section className="py-14">
          <h2 className="text-3xl font-bold mb-4">
            What Is a Good Broadband Speed?
          </h2>
          <p className="text-muted-foreground max-w-3xl mb-8">
            Internet speed requirements vary depending on usage, number of
            devices, and country infrastructure.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Basic Usage",
                speed: "10–25 Mbps",
                desc: "Web browsing, email, social media, and SD streaming.",
              },
              {
                title: "Streaming & Work",
                speed: "25–50 Mbps",
                desc: "HD streaming, video calls, and online work.",
              },
              {
                title: "Advanced Users",
                speed: "100+ Mbps",
                desc: "4K streaming, gaming, cloud work, and multiple devices.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-border/50 bg-card text-center"
              >
                <div className="text-3xl font-extrabold text-blue-500 mb-2">
                  {item.speed}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <AdPlaceholder size="medium-rectangle" className="my-6" />

        <FAQSection faqs={faqs} title="Broadband Speed Test FAQs" />
        <RelatedArticles articles={relatedArticles} />
      </div>
    </>
  );
}