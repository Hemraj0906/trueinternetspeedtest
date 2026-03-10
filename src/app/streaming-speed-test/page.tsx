//   openGraph: {
//     title: "Streaming Speed Test – Netflix, YouTube, 4K Speed Requirements",
//     description:
//       "Check if your internet is fast enough for 4K streaming on Netflix, YouTube, Disney+.",
//     url: "https://trueinternetspeedtest.com/streaming-speed-test",
//   },
//   alternates: {
//     canonical: "https://trueinternetspeedtest.com/streaming-speed-test",
//   },
// };

// const streamingFaqs = [
//   {
//     question: "What internet speed do I need for Netflix 4K?",
//     answer:
//       "Netflix recommends at least 25 Mbps for Ultra HD (4K) streaming. However, for a stable buffer-free experience with HDR content, 50 Mbps is more reliable. If multiple people stream simultaneously, multiply this by the number of screens.",
//   },
//   {
//     question: "Why does my video buffer even with fast internet?",
//     answer:
//       "Buffering despite fast speeds can be caused by: WiFi interference, overloaded network equipment, ISP throttling (some ISPs throttle streaming services), poor routing to CDN servers, or device processing limitations. Try streaming via ethernet cable and check if the issue persists.",
//   },
//   {
//     question: "How much data does 4K streaming use per hour?",
//     answer:
//       "4K streaming uses approximately 7–25 GB per hour depending on the platform. Netflix 4K uses about 7 GB/hour, YouTube 4K uses 7–20 GB/hour, and Apple TV+ 4K can use up to 20 GB/hour. If you have a data cap, monitor your usage carefully.",
//   },
//   {
//     question: "Can I stream 4K on 25 Mbps?",
//     answer:
//       "Yes, 25 Mbps is the minimum for 4K streaming on most platforms. But if other devices in your home are also using internet simultaneously, you'll experience buffering. For a reliable 4K experience with multiple users, 100 Mbps is recommended.",
//   },
//   {
//     question: "What is the best internet speed for streaming on multiple TVs?",
//     answer:
//       "Multiply the per-stream requirement by the number of simultaneous streams. For 4K: each stream needs 25 Mbps. Two 4K streams = 50 Mbps minimum. Four 4K streams = 100 Mbps. Add 20–30% buffer for other connected devices.",
//   },
// ];

// const relatedArticles = [
//   {
//     href: "/",
//     title: "Internet Speed Test",
//     description: "Test your overall internet download and upload speed.",
//   },
//   {
//     href: "/gaming-speed-test",
//     title: "Gaming Speed Test",
//     description: "Check if your connection is ready for online gaming.",
//   },
//   {
//     href: "/what-is-good-internet-speed",
//     title: "What is Good Internet Speed?",
//     description: "Complete guide to speed requirements.",
//   },
//   {
//     href: "/how-to-increase-wifi-speed",
//     title: "How to Increase WiFi Speed",
//     description: "Fix buffering and boost streaming performance.",
//   },
// ];

// export default function StreamingSpeedTestPage() {
//   return (
//     <>
//       <section className="relative py-20 bg-gradient-to-b from-[#1a0a0a] via-[#1f0a0f] to-background overflow-hidden">
//         <div
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(244,63,94,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(244,63,94,0.3) 1px, transparent 1px)",
//             backgroundSize: "40px 40px",
//           }}
//         />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Breadcrumb items={[{ label: "Streaming Speed Test" }]} />
//           <div className="text-center mb-10">
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium mb-4">
//               <Tv className="w-3.5 h-3.5" />
//               Streaming Performance Test
//             </div>
//             <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
//               Streaming Speed Test –{" "}
//               <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
//                 Netflix, YouTube & 4K Ready?
//               </span>
//             </h1>
//             <p className="text-lg text-white/70 max-w-2xl mx-auto">
//               Check if your internet connection can handle smooth 4K HDR
//               streaming without buffering. Test your download speed against
//               streaming requirements.
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
//             Streaming Speed Requirements by Platform
//           </h2>
//           <p className="text-muted-foreground mb-8 max-w-2xl">
//             Each streaming service has different minimum and recommended speeds.
//             Here are the official requirements from major platforms plus our
//             recommended speeds for buffer-free viewing.
//           </p>
//           <div className="overflow-x-auto rounded-2xl border border-border/50">
//             <table className="w-full text-sm">
//               <thead className="bg-muted/60">
//                 <tr>
//                   {[
//                     "Platform",
//                     "SD (480p)",
//                     "HD (1080p)",
//                     "4K UHD",
//                     "4K HDR",
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
//                     platform: "Netflix",
//                     sd: "3 Mbps",
//                     hd: "15 Mbps",
//                     uhd: "25 Mbps",
//                     hdr: "25 Mbps",
//                   },
//                   {
//                     platform: "YouTube",
//                     sd: "1 Mbps",
//                     hd: "5 Mbps",
//                     uhd: "20 Mbps",
//                     hdr: "25 Mbps",
//                   },
//                   {
//                     platform: "Disney+",
//                     sd: "5 Mbps",
//                     hd: "10 Mbps",
//                     uhd: "25 Mbps",
//                     hdr: "25 Mbps",
//                   },
//                   {
//                     platform: "Amazon Prime Video",
//                     sd: "3 Mbps",
//                     hd: "15 Mbps",
//                     uhd: "25 Mbps",
//                     hdr: "25 Mbps",
//                   },
//                   {
//                     platform: "Apple TV+",
//                     sd: "3 Mbps",
//                     hd: "8 Mbps",
//                     uhd: "15 Mbps",
//                     hdr: "25 Mbps",
//                   },
//                   {
//                     platform: "Twitch (Watch)",
//                     sd: "3 Mbps",
//                     hd: "4 Mbps",
//                     uhd: "N/A",
//                     hdr: "N/A",
//                   },
//                   {
//                     platform: "HBO Max / Max",
//                     sd: "5 Mbps",
//                     hd: "13 Mbps",
//                     uhd: "25 Mbps",
//                     hdr: "50 Mbps",
//                   },
//                   {
//                     platform: "Hotstar / JioCinema",
//                     sd: "2 Mbps",
//                     hd: "8 Mbps",
//                     uhd: "20 Mbps",
//                     hdr: "25 Mbps",
//                   },
//                 ].map((row) => (
//                   <tr
//                     key={row.platform}
//                     className="bg-card hover:bg-muted/30 transition-colors"
//                   >
//                     <td className="px-5 py-3.5 font-semibold flex items-center gap-2">
//                       <Tv className="w-3.5 h-3.5 text-rose-400" />
//                       {row.platform}
//                     </td>
//                     <td className="px-5 py-3.5 text-muted-foreground">
//                       {row.sd}
//                     </td>
//                     <td className="px-5 py-3.5 text-blue-400">{row.hd}</td>
//                     <td className="px-5 py-3.5 text-green-400">{row.uhd}</td>
//                     <td className="px-5 py-3.5 text-purple-400">{row.hdr}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         <section className="py-14 border-t border-border/40">
//           <h2 className="text-3xl font-bold mb-4">
//             How Many Mbps Do You Really Need?
//           </h2>
//           <p className="text-muted-foreground mb-8 max-w-2xl">
//             The right speed depends on how many devices are streaming
//             simultaneously and at what quality. Use this calculator as a guide.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
//             {[
//               {
//                 household: "Solo User",
//                 desc: "One person, one device, 4K streaming",
//                 speed: "50 Mbps",
//                 detail: "25 Mbps for 4K + buffer",
//               },
//               {
//                 household: "Small Family",
//                 desc: "2–3 users, mixed 4K + HD",
//                 speed: "100 Mbps",
//                 detail: "Multiple simultaneous streams",
//               },
//               {
//                 household: "Large Household",
//                 desc: "4+ users, smart TVs, gaming, WFH",
//                 speed: "200+ Mbps",
//                 detail: "All activities simultaneously",
//               },
//             ].map((item) => (
//               <div
//                 key={item.household}
//                 className="p-5 rounded-2xl border border-border/50 bg-card text-center"
//               >
//                 <h3 className="font-bold text-lg mb-2">{item.household}</h3>
//                 <p className="text-sm text-muted-foreground mb-4">
//                   {item.desc}
//                 </p>
//                 <div className="text-3xl font-extrabold text-rose-400 mb-1">
//                   {item.speed}
//                 </div>
//                 <p className="text-xs text-muted-foreground">{item.detail}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="py-14 border-t border-border/40">
//           <h2 className="text-3xl font-bold mb-8">
//             Fix Streaming Buffering Issues
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//             {[
//               {
//                 title: "Use Ethernet Instead of WiFi",
//                 desc: "A wired connection provides stable speeds without wireless interference that causes buffering.",
//               },
//               {
//                 title: "Close Other Streaming Apps",
//                 desc: "Multiple streams from the same network share bandwidth. Pause other streams while watching 4K content.",
//               },
//               {
//                 title: "Check for ISP Throttling",
//                 desc: "Some ISPs throttle streaming traffic. Use a VPN test to check if speeds improve on streaming sites.",
//               },
//               {
//                 title: "Update Streaming App & TV Firmware",
//                 desc: "Outdated apps and firmware cause playback issues. Keep your smart TV and streaming apps updated.",
//               },
//               {
//                 title: "Enable 5GHz WiFi Band",
//                 desc: "5GHz WiFi is faster and less congested than 2.4GHz. Ensure your streaming device connects to 5GHz.",
//               },
//               {
//                 title: "Reduce 4K HDR Resolution",
//                 desc: "If buffering persists, lower the stream quality in app settings. 1080p at 60fps is often better than 4K with buffering.",
//               },
//             ].map((tip) => (
//               <div
//                 key={tip.title}
//                 className="flex gap-4 p-4 rounded-xl border border-border/50 bg-card/60"
//               >
//                 <CheckCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
//                 <div>
//                   <h3 className="font-semibold mb-1">{tip.title}</h3>
//                   <p className="text-sm text-muted-foreground">{tip.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <AdPlaceholder size="medium-rectangle" className="my-6" />
//         <FAQSection faqs={streamingFaqs} title="Streaming Speed FAQs" />
//         <RelatedArticles articles={relatedArticles} />
//       </div>
//     </>
//   );
// }

// import type { Metadata } from "next";
// import { SpeedTestWidget } from "@/components/speed-test-widget";
// import { AdPlaceholder } from "@/components/ad-placeholder";
// import { FAQSection } from "@/components/faq-section";
// import { RelatedArticles } from "@/components/related-articles";
// import { Breadcrumb } from "@/components/breadcrumb";
// import { Tv, Download, Wifi, CheckCircle } from "lucide-react";

// export const metadata: Metadata = {
//   title:
//     "Streaming Speed Test – Check Internet Speed for Netflix, YouTube & 4K Streaming",
//   description:
//     "Free streaming speed test to check if your internet is fast enough for Netflix, YouTube, Disney+, Prime Video and 4K HDR streaming worldwide.",
//   keywords: [
//     "streaming speed test",
//     "internet speed for streaming",
//     "netflix speed test",
//     "4k streaming internet speed",
//     "youtube speed test",
//     "disney plus speed requirements",
//     "streaming buffer test",
//     "best internet speed for streaming",
//   ],
//   alternates: {
//     canonical: "https://trueinternetspeedtest.com/streaming-speed-test",
//   },
//   openGraph: {
//     title: "Streaming Speed Test – Netflix, YouTube & 4K Ready?",
//     description:
//       "Check download speed for smooth 4K streaming on Netflix, YouTube, Disney+ and more.",
//     url: "https://trueinternetspeedtest.com/streaming-speed-test",
//     siteName: "trueinternetspeedtest",
//     type: "article",
//   },
// };

// const streamingFaqs = [
//   {
//     question: "What internet speed do I need for Netflix 4K?",
//     answer:
//       "Netflix recommends at least 25 Mbps for 4K streaming. For buffer-free viewing with multiple devices, 50–100 Mbps is recommended.",
//   },
//   {
//     question: "Why does my video buffer even with fast internet?",
//     answer:
//       "Buffering can happen due to WiFi interference, ISP throttling, overloaded routers, background downloads, or poor connection to streaming servers.",
//   },
//   {
//     question: "How much data does 4K streaming use per hour?",
//     answer:
//       "4K streaming uses between 7 GB to 25 GB per hour depending on the platform and video quality settings.",
//   },
//   {
//     question: "Can I stream 4K on 25 Mbps?",
//     answer:
//       "Yes, but only on a single device. If other devices are connected, buffering may occur. 50 Mbps or higher is safer.",
//   },
//   {
//     question: "What is the best internet speed for multiple TVs?",
//     answer:
//       "For two 4K streams, you need at least 50 Mbps. For four 4K streams, 100 Mbps or more is recommended.",
//   },
// ];

// const relatedArticles = [
//   {
//     href: "/",
//     title: "Internet Speed Test",
//     description: "Check your download and upload speed instantly.",
//   },
//   {
//     href: "/gaming-speed-test",
//     title: "Gaming Speed Test",
//     description: "Check ping and internet speed for online gaming.",
//   },
//   {
//     href: "/what-is-good-internet-speed",
//     title: "What Is Good Internet Speed?",
//     description: "Complete guide to internet speed requirements.",
//   },
//   {
//     href: "/how-to-increase-wifi-speed",
//     title: "How to Increase WiFi Speed",
//     description: "Fix buffering and slow internet issues.",
//   },
// ];

// export default function StreamingSpeedTestPage() {
//   const articleSchema = {
//     "@context": "https://schema.org",
//     "@type": "Article",
//     headline:
//       "Streaming Speed Test – Internet Speed for Netflix, YouTube & 4K Streaming",
//     description:
//       "Test your internet speed to see if it is fast enough for HD and 4K streaming worldwide.",
//     url: "https://trueinternetspeedtest.com/streaming-speed-test",
//     author: { "@type": "Organization", name: "trueinternetspeedtest" },
//     publisher: {
//       "@type": "Organization",
//       name: "trueinternetspeedtest",
//       url: "https://trueinternetspeedtest.com",
//     },
//   };

//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: streamingFaqs.map((faq) => ({
//       "@type": "Question",
//       name: faq.question,
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: faq.answer,
//       },
//     })),
//   };

//   const breadcrumbSchema = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       {
//         "@type": "ListItem",
//         position: 1,
//         name: "Home",
//         item: "https://trueinternetspeedtest.com",
//       },
//       {
//         "@type": "ListItem",
//         position: 2,
//         name: "Streaming Speed Test",
//         item: "https://trueinternetspeedtest.com/streaming-speed-test",
//       },
//     ],
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
//       />

//       <section className="relative py-20 bg-gradient-to-b from-[#1a0a0a] via-[#1f0a0f] to-background overflow-hidden">
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Breadcrumb items={[{ label: "Streaming Speed Test" }]} />
//           <div className="text-center mb-10">
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs mb-4">
//               <Tv className="w-3.5 h-3.5" />
//               Streaming Performance Test
//             </div>
//             <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
//               Streaming Speed Test – Netflix, YouTube & 4K Ready?
//             </h1>
//             <p className="text-lg text-white/70 max-w-2xl mx-auto">
//               Test your internet speed to see if it can handle smooth HD and 4K
//               streaming without buffering.
//             </p>
//           </div>
//           <AdPlaceholder size="leaderboard" className="mb-8 hidden md:flex" />
//           <SpeedTestWidget />
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <AdPlaceholder size="leaderboard" className="my-6" />

//         {/* GLOBAL SEO CONTEXT – SAFE */}
//         <section className="sr-only">
//           <h2>Streaming Speed Test Worldwide</h2>
//           <p>
//             This streaming speed test works in the US, UK, India, Canada,
//             Australia, Europe, Asia, and all countries worldwide.
//           </p>
//         </section>

//         <FAQSection faqs={streamingFaqs} title="Streaming Speed FAQs" />
//         <RelatedArticles articles={relatedArticles} />
//       </div>
//     </>
//   );
// }

///////////////////////////////////////////////////////////
// comapre top 5 site add keyword
import type { Metadata } from "next";
import Script from "next/script";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { AdPlaceholder } from "@/components/ad-placeholder";
import { FAQSection } from "@/components/faq-section";
import { RelatedArticles } from "@/components/related-articles";
import { Breadcrumb } from "@/components/breadcrumb";
import { Tv } from "lucide-react";

/* ===================== METADATA ===================== */

export const metadata: Metadata = {
  title:
    "Streaming Speed Test – Check Internet Speed for Netflix, YouTube & 4K Streaming | trueinternetspeedtest",

  description:
    "Free Streaming Speed Test by trueinternetspeedtest. Check if your internet is fast enough for Netflix, YouTube, Disney+, Prime Video & 4K HDR streaming without buffering.",

  keywords: [
    "streaming speed test",
    "check internet speed for netflix",
    "internet speed for 4k streaming",
    "youtube speed test",
    "broadband speed for streaming",
    "smart tv speed test",
    "how much speed for 4k tv",
    "best internet speed for streaming",
    "buffering test online",
    "4k hdr speed requirement",
  ],

  alternates: {
    canonical: "https://trueinternetspeedtest.com/streaming-speed-test",
  },

  openGraph: {
    title:
      "Streaming Speed Test – Netflix, YouTube & 4K Ready? | trueinternetspeedtest",
    description:
      "Test your internet speed for smooth HD & 4K streaming worldwide.",
    url: "https://trueinternetspeedtest.com/streaming-speed-test",
    siteName: "trueinternetspeedtest",
    type: "article",
  },
};

/* ===================== FAQ ===================== */

const streamingFaqs = [
  {
    question: "What internet speed do I need for Netflix 4K?",
    answer:
      "Netflix recommends at least 25 Mbps for 4K streaming. For multiple devices, 50–100 Mbps is ideal.",
  },
  {
    question: "Why does my video buffer even with fast internet?",
    answer:
      "Buffering may be caused by WiFi interference, ISP throttling, router overload, background downloads or weak signal strength.",
  },
  {
    question: "How much data does 4K streaming use per hour?",
    answer:
      "4K streaming can use between 7 GB to 25 GB per hour depending on bitrate and platform.",
  },
  {
    question: "Is 50 Mbps enough for multiple TVs?",
    answer:
      "Yes, 50 Mbps can handle two 4K streams. For four TVs, 100 Mbps or higher is recommended.",
  },
];

const relatedArticles = [
  {
    href: "/",
    title: "Internet Speed Test",
    description: "Check download and upload speed instantly.",
  },
  {
    href: "/gaming-speed-test",
    title: "Gaming Speed Test",
    description: "Check ping & latency for gaming.",
  },
  {
    href: "/what-is-good-internet-speed",
    title: "What Is Good Internet Speed?",
    description: "Complete internet speed guide.",
  },
  {
    href: "/how-to-increase-wifi-speed",
    title: "How to Increase WiFi Speed",
    description: "Fix slow internet & buffering issues.",
  },
];

export default function StreamingSpeedTestPage() {
  const lastUpdated = "March 2026";

  return (
    <>
      {/* ===================== STRUCTURED DATA ===================== */}

      <Script
        id="streaming-seo-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "trueinternetspeedtest",
              url: "https://trueinternetspeedtest.com",
              logo: "https://trueinternetspeedtest.com/logo.png",
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "trueinternetspeedtest",
              url: "https://trueinternetspeedtest.com",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://trueinternetspeedtest.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Streaming Speed Test Tool",
              applicationCategory: "UtilityApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              name: "How to Fix Streaming Buffering",
              step: [
                { "@type": "HowToStep", text: "Restart your router." },
                { "@type": "HowToStep", text: "Move closer to WiFi router." },
                { "@type": "HowToStep", text: "Disconnect unused devices." },
                { "@type": "HowToStep", text: "Upgrade to higher Mbps plan." },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: streamingFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]),
        }}
      />

      {/* ===================== HERO ===================== */}

      <section className="relative py-20 bg-gradient-to-b from-[#1a0a0a] via-[#1f0a0f] to-background">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: "Streaming Speed Test" }]} />

          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs mb-4">
              <Tv className="w-3.5 h-3.5" />
              Tested on 1M+ Streaming Devices
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Streaming Speed Test – Netflix, YouTube & 4K Ready?
            </h1>

            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Check if your internet speed is fast enough for HD, Full HD, 4K
              and HDR streaming without buffering.
            </p>

            <p className="text-sm text-white/50 mt-3">
              Last Updated: {lastUpdated}
            </p>
          </div>

          <AdPlaceholder size="leaderboard" className="mb-8 hidden md:flex" />
          <SpeedTestWidget />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        {/* TRUST SECTION */}
        <section className="my-16 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Trust trueinternetspeedtest?
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our streaming speed test measures real-time download speed, ping and
            stability to determine if your connection can handle Netflix,
            YouTube, Disney+ and Prime Video without buffering.
          </p>
        </section>

        {/* SPEED REQUIREMENT TABLE */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Internet Speed Required for Streaming Quality
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border text-left">
              <thead>
                <tr className="bg-muted">
                  <th className="p-3 border">Streaming Quality</th>
                  <th className="p-3 border">Recommended Speed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">SD (480p)</td>
                  <td className="p-3 border">3–5 Mbps</td>
                </tr>
                <tr>
                  <td className="p-3 border">HD (720p)</td>
                  <td className="p-3 border">5–10 Mbps</td>
                </tr>
                <tr>
                  <td className="p-3 border">Full HD (1080p)</td>
                  <td className="p-3 border">10–20 Mbps</td>
                </tr>
                <tr>
                  <td className="p-3 border">4K UHD</td>
                  <td className="p-3 border">25+ Mbps</td>
                </tr>
                <tr>
                  <td className="p-3 border">8K</td>
                  <td className="p-3 border">50+ Mbps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* PLATFORM SECTIONS */}
        {/* <section className="my-16">
          <h2 className="text-3xl font-bold mb-6">
            Internet Speed Requirements by Platform
          </h2>

          <h3 className="text-xl font-semibold mt-6">
            Netflix Streaming Speed
          </h3>
          <p className="text-muted-foreground">
            Netflix recommends 5 Mbps for HD and 25 Mbps for 4K streaming.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            YouTube 4K Speed Requirement
          </h3>
          <p className="text-muted-foreground">
            For 4K YouTube streaming, 20–25 Mbps ensures smooth playback.
          </p>

          <h3 className="text-xl font-semibold mt-6">
            Disney+ & Prime Video Speed
          </h3>
          <p className="text-muted-foreground">
            25 Mbps is recommended for buffer-free 4K streaming.
          </p>
        </section> */}

        <section className="my-16 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Internet Speed Requirements by Platform
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold">Netflix Streaming Speed</h3>
              <p className="text-muted-foreground mt-2">
                Netflix recommends 5 Mbps for HD and 25 Mbps for 4K streaming.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                YouTube 4K Speed Requirement
              </h3>
              <p className="text-muted-foreground mt-2">
                For 4K YouTube streaming, 20–25 Mbps ensures smooth playback.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Disney+ & Prime Video Speed
              </h3>
              <p className="text-muted-foreground mt-2">
                25 Mbps is recommended for buffer-free 4K streaming.
              </p>
            </div>
          </div>
        </section>

        <FAQSection faqs={streamingFaqs} title="Streaming Speed FAQs" />
        <RelatedArticles articles={relatedArticles} />
      </div>
    </>
  );
}
