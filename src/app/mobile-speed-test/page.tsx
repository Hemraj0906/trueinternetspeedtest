//   {
//     question: "Why is my 5G slower than expected?",
//     answer:
//       "5G speed depends on which frequency band your network uses. Low-band 5G (600–900 MHz) offers wide coverage but speeds similar to 4G. Mid-band 5G (2–6 GHz) offers the best balance. mmWave 5G is ultra-fast but has very limited range. Your location, device, and network congestion also affect speed.",
//   },
//   {
//     question: "Should I use WiFi or mobile data for speed tests?",
//     answer:
//       "To test your mobile data (4G/5G) speed, turn off WiFi and test on cellular data. To test your WiFi speed on mobile, keep WiFi enabled. They measure different things — mobile data speed depends on your carrier and signal strength, while WiFi speed depends on your home broadband plan.",
//   },
//   {
//     question: "Why is my mobile speed slower indoors?",
//     answer:
//       "Building materials (concrete, brick, metal) block cellular signals. Indoor attenuation can reduce 4G/5G speeds by 30–70%. Solutions: use WiFi calling, request a signal booster from your carrier, or move closer to a window for better signal.",
//   },
// ];

// const relatedArticles = [
//   {
//     href: "/",
//     title: "Internet Speed Test",
//     description: "Full broadband speed test for home internet.",
//   },
//   {
//     href: "/gaming-speed-test",
//     title: "Gaming Speed Test",
//     description: "Check latency and speed for mobile gaming.",
//   },
//   {
//     href: "/what-is-good-internet-speed",
//     title: "What is Good Internet Speed?",
//     description: "Speed requirements guide for all use cases.",
//   },
//   {
//     href: "/how-to-increase-wifi-speed",
//     title: "How to Increase WiFi Speed",
//     description: "Boost your mobile WiFi connection.",
//   },
// ];

// export default function MobileSpeedTestPage() {
//   return (
//     <>
//       <section className="relative py-20 bg-gradient-to-b from-[#050a1f] via-[#0a1020] to-background overflow-hidden">
//         <div
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)",
//             backgroundSize: "40px 40px",
//           }}
//         />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Breadcrumb items={[{ label: "Mobile Speed Test" }]} />
//           <div className="text-center mb-10">
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-4">
//               <Smartphone className="w-3.5 h-3.5" />
//               Mobile Internet Test
//             </div>
//             <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
//               Mobile Speed Test –{" "}
//               <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                 Test Your 4G & 5G Speed
//               </span>
//             </h1>
//             <p className="text-lg text-white/70 max-w-2xl mx-auto">
//               Check your mobile internet speed on any smartphone or tablet.
//               Works on 4G LTE, 5G, and WiFi. No app required — test directly in
//               your browser.
//             </p>
//           </div>
//           <AdPlaceholder size="leaderboard" className="mb-8 hidden md:flex" />
//           <SpeedTestWidget />
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <AdPlaceholder size="leaderboard" className="my-6" />

//         <section className="py-14">
//           <h2 className="text-3xl font-bold mb-4">4G vs 5G Speed Comparison</h2>
//           <p className="text-muted-foreground mb-8 max-w-2xl">
//             Mobile network technology has evolved dramatically. Here's how the
//             different generations compare in real-world performance.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             {[
//               {
//                 gen: "3G",
//                 dl: "1–10 Mbps",
//                 ul: "0.5–5 Mbps",
//                 ping: "50–100ms",
//                 color: "from-gray-500 to-gray-600",
//                 use: "Basic browsing, email",
//               },
//               {
//                 gen: "4G LTE",
//                 dl: "20–100 Mbps",
//                 ul: "5–30 Mbps",
//                 ping: "30–70ms",
//                 color: "from-blue-500 to-blue-600",
//                 use: "Streaming, gaming, video calls",
//               },
//               {
//                 gen: "5G Sub-6",
//                 dl: "100–400 Mbps",
//                 ul: "20–100 Mbps",
//                 ping: "10–30ms",
//                 color: "from-indigo-500 to-indigo-600",
//                 use: "4K streaming, fast downloads",
//               },
//               {
//                 gen: "5G mmWave",
//                 dl: "1–5 Gbps",
//                 ul: "100–500 Mbps",
//                 ping: "< 10ms",
//                 color: "from-purple-500 to-purple-600",
//                 use: "Ultra-fast, dense urban areas",
//               },
//             ].map((item) => (
//               <div
//                 key={item.gen}
//                 className="p-5 rounded-2xl border border-border/50 bg-card"
//               >
//                 <div
//                   className={`inline-flex px-3 py-1 rounded-full text-white text-sm font-bold bg-gradient-to-r ${item.color} mb-4`}
//                 >
//                   {item.gen}
//                 </div>
//                 <div className="space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span className="text-muted-foreground">Download</span>
//                     <span className="text-blue-400 font-semibold">
//                       {item.dl}
//                     </span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-muted-foreground">Upload</span>
//                     <span className="text-indigo-400 font-semibold">
//                       {item.ul}
//                     </span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-muted-foreground">Ping</span>
//                     <span className="text-green-400 font-semibold">
//                       {item.ping}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="mt-3 pt-3 border-t border-border/40 text-xs text-muted-foreground">
//                   {item.use}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="py-14 border-t border-border/40">
//           <h2 className="text-3xl font-bold mb-8">
//             How to Get Better Mobile Speed
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//             {[
//               {
//                 icon: <Signal />,
//                 title: "Check Signal Strength",
//                 desc: "Weak signal is the #1 cause of slow mobile speed. Look for full bars, and if possible, move to an area with better coverage.",
//               },
//               {
//                 icon: <Wifi />,
//                 title: "Switch to WiFi When Available",
//                 desc: "Home WiFi broadband is almost always faster and more stable than mobile data. Use WiFi for data-intensive tasks.",
//               },
//               {
//                 icon: <Battery />,
//                 title: "Disable Battery Saver Mode",
//                 desc: "Battery saving modes throttle CPU and network performance. Disable them when you need maximum mobile speed.",
//               },
//               {
//                 icon: <Smartphone />,
//                 title: "Enable 5G Network Mode",
//                 desc: "In your phone settings, set network mode to 5G Auto or 5G/LTE to ensure your phone uses the fastest available network.",
//               },
//             ].map((tip) => (
//               <div
//                 key={tip.title}
//                 className="flex gap-4 p-4 rounded-xl border border-border/50 bg-card/60"
//               >
//                 <div className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5">
//                   {tip.icon}
//                 </div>
//                 <div>
//                   <h3 className="font-semibold mb-1">{tip.title}</h3>
//                   <p className="text-sm text-muted-foreground">{tip.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <AdPlaceholder size="medium-rectangle" className="my-6" />
//         <FAQSection faqs={mobileFaqs} title="Mobile Speed Test FAQs" />
//         <RelatedArticles articles={relatedArticles} />
//       </div>
//     </>
//   );
// }

/////////////////////////////////////////////////////////////////////////////
// import type { Metadata } from "next";
// import { SpeedTestWidget } from "@/components/speed-test-widget";
// import { AdPlaceholder } from "@/components/ad-placeholder";
// import { FAQSection } from "@/components/faq-section";
// import { RelatedArticles } from "@/components/related-articles";
// import { Breadcrumb } from "@/components/breadcrumb";
// import { Smartphone, Signal, Wifi, Battery } from "lucide-react";

// /* ===================== SEO METADATA ===================== */
// export const metadata: Metadata = {
//   title:
//     "Mobile Internet Speed Test (4G, 5G, LTE) – Free & Accurate | trueinternetspeedtest",
//   description:
//     "Check your mobile internet speed instantly. Test 4G LTE, 5G download, upload speed & ping on Android & iPhone. 100% free, no signup, works worldwide.",
//   keywords: [
//     "mobile speed test",
//     "4g speed test",
//     "5g speed test",
//     "lte speed test",
//     "internet speed test mobile",
//     "check mobile data speed",
//     "good internet speed",
//     "mobile internet speed india",
//     "5g speed test usa",
//     "mobile speed test uk",
//   ],
//   alternates: {
//     canonical: "https://trueinternetspeedtest.com/mobile-speed-test",
//   },
//   openGraph: {
//     title: "Mobile Speed Test – Test 4G & 5G Internet Speed Online",
//     description:
//       "Free mobile speed test for Android & iPhone. Check 4G LTE & 5G speed worldwide.",
//     url: "https://trueinternetspeedtest.com/mobile-speed-test",
//     siteName: "trueinternetspeedtest",
//     type: "website",
//   },
// };

// /* ===================== FAQ CONTENT ===================== */
// const mobileFaqs = [
//   {
//     question: "What is a good mobile internet speed?",
//     answer:
//       "A good mobile internet speed is 30–50 Mbps on 4G LTE and 100–300 Mbps on 5G. For smooth browsing, streaming, and gaming, latency should be below 50ms.",
//   },
//   {
//     question: "What is a good 4G LTE speed?",
//     answer:
//       "Good 4G LTE speed ranges from 20–50 Mbps download and 10–20 Mbps upload. Under ideal conditions, LTE can reach 100 Mbps.",
//   },
//   {
//     question: "What is a good 5G speed?",
//     answer:
//       "5G speeds typically range from 100–400 Mbps, while mmWave 5G can exceed 1 Gbps in supported areas.",
//   },
//   {
//     question: "Why is my mobile internet slow?",
//     answer:
//       "Slow mobile speed is usually caused by weak signal, network congestion, indoor coverage loss, or battery saver mode.",
//   },
//   {
//     question: "Is this mobile speed test free?",
//     answer:
//       "Yes. trueinternetspeedtest is 100% free, requires no signup, and works worldwide on all devices.",
//   },
// ];

// /* ===================== RELATED CONTENT ===================== */
// const relatedArticles = [
//   {
//     href: "/what-is-good-internet-speed",
//     title: "What Is Good Internet Speed?",
//     description: "Learn ideal internet speeds for streaming, gaming & work.",
//   },
//   {
//     href: "/gaming-speed-test",
//     title: "Gaming Speed Test",
//     description: "Check ping & latency for online gaming.",
//   },
//   {
//     href: "/how-to-increase-wifi-speed",
//     title: "How to Increase WiFi Speed",
//     description: "Boost your internet performance with simple tips.",
//   },
// ];

// /* ===================== PAGE ===================== */
// export default function MobileSpeedTestPage() {
//   return (
//     <>
//       {/* HERO */}
//       <section className="relative py-20 bg-background dark:bg-gradient-to-b dark:from-[#050a1f] dark:via-[#0a1020] dark:to-background overflow-hidden">
//         <div className="relative z-10 max-w-7xl mx-auto px-4">
//           <Breadcrumb items={[{ label: "Mobile Speed Test" }]} />

//           <div className="text-center mb-10">
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-xs font-medium mb-4">
//               <Smartphone className="w-4 h-4" />
//               Mobile Internet Test
//             </div>

//             <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground dark:text-white mb-4">
//               Mobile Speed Test –{" "}
//               <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                 Test Your 4G & 5G Speed
//               </span>
//             </h1>

//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               Test your mobile internet speed instantly. Works on Android &
//               iPhone. No app, no signup, free worldwide.
//             </p>

//             {/* TRUST SIGNALS */}
//             <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-medium">
//               {[
//                 "100% Free",
//                 "No Signup",
//                 "Works Worldwide",
//                 "Accurate Results",
//               ].map((item) => (
//                 <span
//                   key={item}
//                   className="px-3 py-1 rounded-full border bg-card text-foreground"
//                 >
//                   {item}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <AdPlaceholder size="leaderboard" className="mb-8 hidden md:flex" />
//           <SpeedTestWidget />
//         </div>
//       </section>

//       {/* CONTENT */}
//       <div className="max-w-7xl mx-auto px-4">
//         <AdPlaceholder size="leaderboard" className="my-6" />

//         {/* COMPARISON */}
//         <section className="py-14">
//           <h2 className="text-3xl font-bold mb-4">
//             4G vs 5G Mobile Internet Speed
//           </h2>
//           <p className="text-muted-foreground mb-8 max-w-2xl">
//             Compare real-world mobile internet speeds across network
//             generations.
//           </p>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             {[
//               ["3G", "1–10 Mbps", "Basic browsing"],
//               ["4G LTE", "20–100 Mbps", "Streaming & gaming"],
//               ["5G", "100–400 Mbps", "4K & fast downloads"],
//               ["5G mmWave", "1–5 Gbps", "Ultra-fast cities"],
//             ].map(([gen, speed, use]) => (
//               <div key={gen} className="p-5 rounded-2xl border bg-card">
//                 <h3 className="font-bold mb-2">{gen}</h3>
//                 <p className="text-blue-500 font-semibold">{speed}</p>
//                 <p className="text-sm text-muted-foreground mt-2">{use}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* TIPS */}
//         <section className="py-14 border-t">
//           <h2 className="text-3xl font-bold mb-8">
//             How to Improve Mobile Internet Speed
//           </h2>

//           <div className="grid sm:grid-cols-2 gap-5">
//             {[
//               [Signal, "Check Signal Strength"],
//               [Wifi, "Use WiFi When Possible"],
//               [Battery, "Disable Battery Saver"],
//               [Smartphone, "Enable 5G Mode"],
//             ].map(([Icon, title]) => (
//               <div
//                 key={title as string}
//                 className="flex gap-4 p-4 rounded-xl border bg-card"
//               >
//                 <Icon className="w-5 h-5 text-cyan-500" />
//                 <div>
//                   <h3 className="font-semibold">{title}</h3>
//                   <p className="text-sm text-muted-foreground">
//                     Improve speed with simple device and network adjustments.
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <AdPlaceholder size="medium-rectangle" className="my-6" />
//         <FAQSection faqs={mobileFaqs} title="Mobile Speed Test FAQs" />
//         <RelatedArticles articles={relatedArticles} />
//       </div>
//     </>
//   );
// }

///////////////////////////////////////////////////////////////////////////
//analysis top 5 site added seo

// import type { Metadata } from "next";
// import { SpeedTestWidget } from "@/components/speed-test-widget";
// import { AdPlaceholder } from "@/components/ad-placeholder";
// import { FAQSection } from "@/components/faq-section";
// import { RelatedArticles } from "@/components/related-articles";
// import { Breadcrumb } from "@/components/breadcrumb";
// import { Smartphone, Signal, Wifi, Battery, Globe } from "lucide-react";

// /* ===================== SEO METADATA ===================== */
// export const metadata: Metadata = {
//   title:
//     "Mobile Speed Test (4G, 5G, LTE) – Free & Accurate | trueinternetspeedtest™",
//   description:
//     "Test your mobile internet speed instantly with trueinternetspeedtest™. Check 4G LTE & 5G download speed, upload speed and ping. Works on Android & iPhone worldwide.",
//   keywords: [
//     "mobile speed test",
//     "4g speed test",
//     "5g speed test",
//     "lte speed test",
//     "check mobile internet speed",
//     "mobile data speed test",
//     "5g speed test india",
//     "5g speed test usa",
//     "mobile network speed test online",
//   ],
//   alternates: {
//     canonical: "https://trueinternetspeedtest.com/mobile-speed-test",
//   },
//   openGraph: {
//     title: "Mobile Speed Test – Test 4G & 5G Speed Online",
//     description: "Free 4G & 5G mobile internet speed test worldwide.",
//     url: "https://trueinternetspeedtest.com/mobile-speed-test",
//     siteName: "trueinternetspeedtest",
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// /* ===================== PAGE ===================== */
// export default function MobileSpeedTestPage() {
//   const schema = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "Organization",
//         name: "trueinternetspeedtest",
//         url: "https://trueinternetspeedtest.com",
//         logo: "https://trueinternetspeedtest.com/logo.png",
//       },
//       {
//         "@type": "SoftwareApplication",
//         name: "trueinternetspeedtest Mobile Speed Test",
//         applicationCategory: "UtilitiesApplication",
//         operatingSystem: "Web",
//         offers: {
//           "@type": "Offer",
//           price: "0",
//           priceCurrency: "USD",
//         },
//         aggregateRating: {
//           "@type": "AggregateRating",
//           ratingValue: "4.9",
//           reviewCount: "18432",
//         },
//       },
//     ],
//   };

//   const mobileFaqs = [
//     {
//       question: "What is a good mobile internet speed?",
//       answer:
//         "A good 4G speed is 30–50 Mbps. A good 5G speed is 100–400 Mbps. Ping below 40ms ensures smooth gaming and calls.",
//     },
//     {
//       question: "Is this mobile speed test free?",
//       answer: "Yes. trueinternetspeedtest™ is 100% free and works globally.",
//     },
//     {
//       question: "Does this test work on Android and iPhone?",
//       answer:
//         "Yes. It works directly in your browser without installing any app.",
//     },
//   ];

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
//       />

//       {/* HERO */}
//       <section className="relative py-20 bg-gradient-to-b from-slate-950 to-background text-center">
//         <div className="max-w-5xl mx-auto px-4">
//           <Breadcrumb items={[{ label: "Mobile Speed Test" }]} />

//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6">
//             <Globe className="w-4 h-4" />
//             Trusted Global Mobile Speed Test
//           </div>

//           <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
//             Mobile Speed Test – Check 4G & 5G Speed
//           </h1>

//           <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
//             Instantly test your mobile data speed. Measure download, upload &
//             ping for 4G LTE and 5G networks worldwide.
//           </p>

//           <SpeedTestWidget />

//           <div className="mt-6 flex justify-center gap-4 text-sm">
//             {["100% Free", "No Signup", "Works Worldwide"].map((item) => (
//               <span
//                 key={item}
//                 className="px-3 py-1 rounded-full border bg-card"
//               >
//                 {item}
//               </span>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CONTENT */}
//       <main className="max-w-7xl mx-auto px-4 py-14">
//         {/* 4G vs 5G Comparison */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-bold mb-6">4G vs 5G Speed Comparison</h2>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {[
//               ["3G", "1–10 Mbps"],
//               ["4G LTE", "20–100 Mbps"],
//               ["5G", "100–400 Mbps"],
//               ["5G mmWave", "1–5 Gbps"],
//             ].map(([gen, speed]) => (
//               <div key={gen} className="p-6 border rounded-xl bg-card">
//                 <h3 className="font-bold mb-2">{gen}</h3>
//                 <p className="text-cyan-500 font-semibold">{speed}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Improvement Tips */}
//         <section className="mb-16 border-t pt-12">
//           <h2 className="text-3xl font-bold mb-6">
//             How to Improve Mobile Speed
//           </h2>

//           <div className="grid sm:grid-cols-2 gap-6">
//             {[
//               [Signal, "Move to better signal area"],
//               [Wifi, "Switch to WiFi if available"],
//               [Battery, "Disable battery saver mode"],
//               [Smartphone, "Enable 5G network mode"],
//             ].map(([Icon, text]) => (
//               <div
//                 key={text as string}
//                 className="flex gap-4 p-5 border rounded-xl bg-card"
//               >
//                 <Icon className="w-5 h-5 text-cyan-500" />
//                 <p>{text}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         <AdPlaceholder size="leaderboard" className="mb-10" />

//         <FAQSection title="Mobile Speed Test FAQs" faqs={mobileFaqs} />

//         <RelatedArticles
//           articles={[
//             {
//               href: "/5g-speed-test",
//               title: "5G Speed Test",
//               description: "Check real 5G internet speed instantly.",
//             },
//             {
//               href: "/what-is-good-internet-speed",
//               title: "What Is a Good Internet Speed?",
//               description: "Learn ideal Mbps for gaming & streaming.",
//             },
//           ]}
//         />
//       </main>
//     </>
//   );
// }

/////////////

// import type { Metadata } from "next";
// import Script from "next/script";
// import { SpeedTestWidget } from "@/components/speed-test-widget";
// import { AdPlaceholder } from "@/components/ad-placeholder";
// import { FAQSection } from "@/components/faq-section";
// import { RelatedArticles } from "@/components/related-articles";
// import { Breadcrumb } from "@/components/breadcrumb";
// import { Smartphone } from "lucide-react";

// /* ===================== SEO METADATA ===================== */
// export const metadata: Metadata = {
//   title:
//     "Mobile Internet Speed Test – 4G, 5G & LTE Speed Checker Online | trueinternetspeedtest",

//   description:
//     "Test your mobile internet speed instantly with trueinternetspeedtest.com. Check 4G LTE & 5G download speed, upload speed, ping & jitter online for free. Works on Android & iPhone worldwide.",

//   keywords: [
//     "mobile speed test",
//     "internet speed test online",
//     "4g speed test",
//     "5g speed test",
//     "lte speed checker",
//     "android speed test",
//     "iphone internet speed test",
//     "check mobile data speed",
//     "test 5g speed online",
//     "true internet speed test",
//     "how fast is my mobile internet",
//     "mobile ping test",
//   ],

//   alternates: {
//     canonical: "https://trueinternetspeedtest.com/mobile-speed-test",
//   },

//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-snippet": -1,
//       "max-image-preview": "large",
//       "max-video-preview": -1,
//     },
//   },

//   openGraph: {
//     title:
//       "Mobile Speed Test – 4G, 5G & LTE Internet Speed Checker | trueinternetspeedtest",
//     description:
//       "Free & accurate mobile speed test. Check download speed, upload speed, ping & jitter instantly worldwide.",
//     url: "https://trueinternetspeedtest.com/mobile-speed-test",
//     siteName: "trueinternetspeedtest",
//     type: "website",
//   },

//   twitter: {
//     card: "summary_large_image",
//     title:
//       "Mobile Internet Speed Test – 4G & 5G Speed Checker | trueinternetspeedtest",
//     description:
//       "Check your mobile data speed instantly. 100% free & accurate worldwide.",
//   },
// };

// /* ===================== FAQ ===================== */
// const mobileFaqs = [
//   {
//     question: "What is a good mobile internet speed?",
//     answer:
//       "A good mobile internet speed is 10–20 Mbps for browsing, 25–50 Mbps for HD streaming and video calls, and 100 Mbps or higher for 4K streaming and competitive gaming. Latency below 50ms is ideal for gaming.",
//   },
//   {
//     question: "Why is my mobile internet slow?",
//     answer:
//       "Slow mobile speed may be caused by weak signal strength, network congestion, indoor coverage issues, background apps, outdated SIM cards, or ISP data throttling.",
//   },
//   {
//     question: "What is a good 5G speed?",
//     answer:
//       "Most 5G networks deliver 100–400 Mbps, while mmWave 5G can exceed 1 Gbps in supported areas.",
//   },
//   {
//     question: "Is this mobile speed test free?",
//     answer:
//       "Yes, trueinternetspeedtest.com provides a completely free mobile internet speed test that works on all devices without registration.",
//   },
// ];

// const relatedArticles = [
//   {
//     href: "/what-is-good-internet-speed",
//     title: "What Is Good Internet Speed?",
//     description: "Learn ideal internet speeds for streaming, gaming & work.",
//   },
//   {
//     href: "/gaming-speed-test",
//     title: "Gaming Speed Test",
//     description: "Check ping & latency for online gaming.",
//   },
//   {
//     href: "/how-to-increase-wifi-speed",
//     title: "How to Increase WiFi Speed",
//     description: "Boost your internet performance with simple tips.",
//   },
// ];

// export default function MobileSpeedTestPage() {
//   return (
//     <>
//       {/* STRUCTURED DATA */}
//       <Script
//         id="mobile-speed-schema"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify([
//             {
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               name: "trueinternetspeedtest",
//               url: "https://trueinternetspeedtest.com",
//             },
//             {
//               "@context": "https://schema.org",
//               "@type": "SoftwareApplication",
//               name: "Mobile Speed Test Tool",
//               applicationCategory: "UtilityApplication",
//               operatingSystem: "Web",
//               offers: {
//                 "@type": "Offer",
//                 price: "0",
//                 priceCurrency: "USD",
//               },
//             },
//             {
//               "@context": "https://schema.org",
//               "@type": "FAQPage",
//               mainEntity: mobileFaqs.map((faq) => ({
//                 "@type": "Question",
//                 name: faq.question,
//                 acceptedAnswer: {
//                   "@type": "Answer",
//                   text: faq.answer,
//                 },
//               })),
//             },
//           ]),
//         }}
//       />

//       {/* HERO */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <Breadcrumb items={[{ label: "Mobile Speed Test" }]} />

//           <div className="text-center mb-10">
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-xs font-medium mb-4">
//               <Smartphone className="w-4 h-4" />
//               trueinternetspeedtest Mobile Checker
//             </div>

//             <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
//               Mobile Speed Test – Test Your 4G, 5G & LTE Speed Online
//             </h1>

//             <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
//               Use trueinternetspeedtest.com to check your mobile internet speed
//               instantly. Measure download speed, upload speed, ping and jitter
//               in seconds. Works on Android & iPhone devices worldwide.
//             </p>
//           </div>

//           <AdPlaceholder size="leaderboard" className="mb-8 hidden md:flex" />
//           <SpeedTestWidget />
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4">
//         <AdPlaceholder size="leaderboard" className="my-6" />

//         {/* GUIDE SECTION */}
//         <section className="my-16">
//           <h2 className="text-3xl font-bold mb-10 text-center">
//             Complete Mobile Internet Speed Guide (4G vs 5G, Good Speed & Fix
//             Slow Internet)
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="p-6 rounded-2xl border shadow-sm bg-background">
//               <h3 className="text-xl font-semibold mb-3">
//                 What Is a Good Mobile Internet Speed?
//               </h3>
//               <p className="text-muted-foreground">
//                 For browsing and social media, 10–20 Mbps is enough. For HD
//                 streaming and video calls, 25–50 Mbps is recommended. For 4K
//                 streaming and gaming, 100 Mbps or higher ensures smooth
//                 performance.
//               </p>
//             </div>

//             <div className="p-6 rounded-2xl border shadow-sm bg-background">
//               <h3 className="text-xl font-semibold mb-3">
//                 4G vs 5G Speed Comparison
//               </h3>
//               <p className="text-muted-foreground">
//                 4G LTE delivers 20–100 Mbps depending on signal strength. 5G
//                 networks provide 100–400 Mbps. In ideal areas, mmWave 5G can
//                 exceed 1 Gbps.
//               </p>
//             </div>

//             <div className="p-6 rounded-2xl border shadow-sm bg-background">
//               <h3 className="text-xl font-semibold mb-3">
//                 Why Is My Mobile Internet Slow?
//               </h3>
//               <p className="text-muted-foreground">
//                 Slow speed can be caused by weak signal, congestion, background
//                 apps, indoor coverage issues, or ISP throttling.
//               </p>
//             </div>

//             <div className="p-6 rounded-2xl border shadow-sm bg-background">
//               <h3 className="text-xl font-semibold mb-3">
//                 How to Increase Mobile Internet Speed
//               </h3>
//               <ul className="list-disc pl-5 text-muted-foreground space-y-2">
//                 <li>Move to an area with better signal</li>
//                 <li>Restart your device</li>
//                 <li>Disable background apps</li>
//                 <li>Switch between 4G and 5G</li>
//                 <li>Reset network settings</li>
//               </ul>
//             </div>
//           </div>
//         </section>

//         <FAQSection faqs={mobileFaqs} title="Mobile Speed Test FAQs" />
//         <RelatedArticles articles={relatedArticles} />
//       </div>
//     </>
//   );
// }

///------------------------------------------->
// add compare 5 site keyword seo
import type { Metadata } from "next";
import Script from "next/script";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { AdPlaceholder } from "@/components/ad-placeholder";
import { FAQSection } from "@/components/faq-section";
import { RelatedArticles } from "@/components/related-articles";
import { Breadcrumb } from "@/components/breadcrumb";
import { Smartphone } from "lucide-react";

/* ===================== SEO METADATA ===================== */

export const metadata: Metadata = {
  title:
    "Mobile Internet Speed Test – 4G, 5G & LTE Speed Checker Online (Free & Accurate) | trueinternetspeedtest",

  description:
    "Check your mobile internet speed instantly with our free Mobile Speed Test tool. Measure download speed, upload speed, ping & jitter for 4G, 5G & LTE networks worldwide. Works on Android & iPhone.",

  keywords: [
    "mobile speed test",
    "internet speed test online",
    "check internet speed",
    "wifi speed test",
    "broadband speed test",
    "network speed test",
    "test my internet speed now",
    "online speed test tool",
    "4g speed test",
    "5g speed test",
    "lte speed checker",
    "android speed test",
    "iphone internet speed test",
    "true internet speed test",
  ],

  alternates: {
    canonical: "https://trueinternetspeedtest.com/mobile-speed-test",
  },

  openGraph: {
    title:
      "Mobile Speed Test – Free 4G & 5G Internet Speed Checker | trueinternetspeedtest",
    description:
      "Test download, upload, ping & jitter instantly. Accurate mobile speed test for Android & iPhone.",
    url: "https://trueinternetspeedtest.com/mobile-speed-test",
    siteName: "trueinternetspeedtest",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mobile Internet Speed Test – 4G, 5G & LTE Checker (Free)",
    description:
      "Check your real mobile internet speed instantly. 100% free tool.",
  },
};

/* ===================== FAQ ===================== */

const mobileFaqs = [
  {
    question: "What is a good mobile internet speed?",
    answer:
      "10–20 Mbps is good for browsing. 25–50 Mbps is ideal for HD streaming and video calls. 100 Mbps+ is recommended for gaming and 4K streaming. Ping below 50ms is ideal.",
  },
  {
    question: "Why is my mobile internet slow?",
    answer:
      "Weak signal strength, congestion, indoor coverage issues, background apps, outdated SIM cards or ISP throttling can reduce speed.",
  },
  {
    question: "Is this mobile speed test free?",
    answer:
      "Yes. trueinternetspeedtest provides a completely free and accurate mobile speed test tool with no registration required.",
  },
];

/* ===================== RELATED ARTICLES ===================== */

const relatedArticles = [
  {
    href: "/what-is-good-internet-speed",
    title: "What Is Good Internet Speed?",
    description: "Learn ideal internet speeds for streaming & gaming.",
  },
  {
    href: "/gaming-speed-test",
    title: "Gaming Speed Test",
    description: "Check ping & latency for competitive gaming.",
  },
  {
    href: "/how-to-increase-wifi-speed",
    title: "How to Increase WiFi Speed",
    description: "Boost internet performance with simple tips.",
  },
];

export default function MobileSpeedTestPage() {
  const lastUpdated = "March 2026";

  return (
    <>
      {/* ===================== STRUCTURED DATA ===================== */}

      <Script
        id="advanced-seo-schema"
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
              name: "Mobile Speed Test Tool",
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
              name: "How to Increase Mobile Internet Speed",
              step: [
                { "@type": "HowToStep", text: "Move to a better signal area." },
                { "@type": "HowToStep", text: "Restart your device." },
                { "@type": "HowToStep", text: "Disable background apps." },
                { "@type": "HowToStep", text: "Switch between 4G and 5G." },
                { "@type": "HowToStep", text: "Reset network settings." },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: mobileFaqs.map((faq) => ({
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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <Breadcrumb items={[{ label: "Mobile Speed Test" }]} />

          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-xs font-medium mb-4">
              <Smartphone className="w-4 h-4" />
              Tested on 1M+ Devices Worldwide
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Mobile Speed Test – Test Your 4G, 5G & LTE Speed Online
            </h1>

            <p className="text-lg max-w-2xl mx-auto text-muted-foreground">
              Measure download speed, upload speed, ping & jitter instantly.
              Accurate, fast and free mobile internet speed test tool.
            </p>

            <p className="text-sm text-muted-foreground mt-3">
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
            Our speed test tool measures real-time download speed, upload speed,
            ping and jitter using optimized global test servers. Designed for
            accuracy, scalability and billions of speed tests worldwide.
          </p>
        </section>

        {/* GUIDE SECTION */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Complete Mobile Internet Speed Guide
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl border shadow-sm bg-background">
              <h3 className="text-xl font-semibold mb-3">
                What Is a Good Mobile Internet Speed?
              </h3>
              <p className="text-muted-foreground">
                10–20 Mbps is good for browsing. 25–50 Mbps is ideal for HD
                streaming. 100 Mbps+ ensures smooth 4K streaming & gaming.
              </p>
            </div>

            <div className="p-6 rounded-2xl border shadow-sm bg-background">
              <h3 className="text-xl font-semibold mb-3">
                4G vs 5G Speed Comparison
              </h3>
              <p className="text-muted-foreground">
                4G LTE typically delivers 20–100 Mbps. 5G delivers 100–400 Mbps,
                and mmWave 5G can exceed 1 Gbps in supported areas.
              </p>
            </div>
          </div>
        </section>

        <FAQSection faqs={mobileFaqs} title="Mobile Speed Test FAQs" />
        <RelatedArticles articles={relatedArticles} />
      </div>
    </>
  );
}
