//   {
//     question: "What is a good ping for gaming?",
//     answer:
//       "A ping under 20ms is excellent and suitable for professional competitive gaming. Under 50ms is good for most online games. 50–100ms is acceptable for casual gaming. Above 100ms will cause noticeable input delay and poor gaming experience.",
//   },
//   {
//     question: "Why is my ping high even with fast internet?",
//     answer:
//       "High ping despite fast internet usually means: (1) you're connecting via WiFi — switch to ethernet; (2) game servers are geographically far from you; (3) your ISP routes traffic inefficiently; (4) your router has high processing latency; or (5) other devices on your network are consuming bandwidth.",
//   },
//   {
//     question: "Does upload speed matter for gaming?",
//     answer:
//       "Yes, upload speed matters for online gaming but less than download speed. Most games send small data packets requiring only 1–5 Mbps upload. However, if you stream on Twitch while gaming, you'll need 5–10 Mbps upload simultaneously.",
//   },
//   {
//     question: "What is jitter and does it affect gaming?",
//     answer:
//       "Jitter is the inconsistency in your ping over time. Even if your average ping is low, high jitter causes unpredictable lag spikes. Jitter under 10ms is excellent. Over 30ms will cause noticeable issues in fast-paced competitive games.",
//   },
//   {
//     question: "WiFi vs ethernet for gaming — which is better?",
//     answer:
//       "Ethernet is significantly better for gaming. A wired connection eliminates WiFi interference, provides consistent latency, and reduces jitter. If you must use WiFi, use 5GHz band instead of 2.4GHz, and place your gaming device close to the router.",
//   },
// ];

// const relatedArticles = [
//   {
//     href: "/",
//     title: "Internet Speed Test",
//     description: "Test your overall internet download and upload speed.",
//   },
//   {
//     href: "/streaming-speed-test",
//     title: "Streaming Speed Test",
//     description: "Check if your speed supports 4K streaming.",
//   },
//   {
//     href: "/what-is-good-internet-speed",
//     title: "What is Good Internet Speed?",
//     description: "Complete guide to internet speed requirements.",
//   },
//   {
//     href: "/how-to-increase-wifi-speed",
//     title: "How to Increase WiFi Speed",
//     description: "Tips to reduce ping and boost gaming performance.",
//   },
// ];

// export default function GamingSpeedTestPage() {
//   const schema = {
//     "@context": "https://schema.org",
//     "@type": "Article",
//     headline: "Gaming Speed Test – Best Internet Speed for Online Gaming",
//     description:
//       "Complete guide to gaming internet speed requirements with live speed test tool.",
//     url: "https://trueinternetspeedtest.com/gaming-speed-test",
//     author: { "@type": "Organization", name: "trueinternetspeedtest" },
//     publisher: {
//       "@type": "Organization",
//       name: "trueinternetspeedtest",
//       url: "https://trueinternetspeedtest.com",
//     },
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
//       />
//       <section className="relative py-20 bg-gradient-to-b from-[#0a0a1f] via-[#100a2b] to-background overflow-hidden">
//         <div
//           className="absolute inset-0 opacity-10"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(147,51,234,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.3) 1px, transparent 1px)",
//             backgroundSize: "40px 40px",
//           }}
//         />
//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Breadcrumb items={[{ label: "Gaming Speed Test" }]} />
//           <div className="text-center mb-10">
//             <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-4">
//               <Gamepad2 className="w-3.5 h-3.5" />
//               Optimized for Gamers
//             </div>
//             <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
//               Gaming Speed Test –{" "}
//               <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
//                 Is Your Internet Ready?
//               </span>
//             </h1>
//             <p className="text-lg text-white/70 max-w-2xl mx-auto">
//               Test your ping, jitter, download and upload speed for competitive
//               online gaming. Low latency is the key to winning.
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
//             What Gaming Metrics Matter Most?
//           </h2>
//           <p className="text-muted-foreground mb-8 max-w-2xl leading-relaxed">
//             Gaming does not require massive bandwidth. What determines your
//             experience is
//             <strong> latency (ping)</strong>, <strong>jitter</strong>, and{" "}
//             <strong>packet loss</strong>.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
//             {[
//               {
//                 icon: <Activity className="w-6 h-6" />,
//                 metric: "Ping",
//                 ideal: "< 20ms",
//                 good: "< 50ms",
//                 bad: "> 100ms",
//                 color: "from-purple-500 to-purple-600",
//                 desc: "Round-trip time to game server. The most important gaming metric.",
//               },
//               {
//                 icon: <Wifi className="w-6 h-6" />,
//                 metric: "Jitter",
//                 ideal: "< 5ms",
//                 good: "< 15ms",
//                 bad: "> 30ms",
//                 color: "from-blue-500 to-blue-600",
//                 desc: "Ping variation. High jitter causes unpredictable lag spikes.",
//               },
//               {
//                 icon: <Zap className="w-6 h-6" />,
//                 metric: "Download",
//                 ideal: "50+ Mbps",
//                 good: "15 Mbps",
//                 bad: "< 5 Mbps",
//                 color: "from-green-500 to-green-600",
//                 desc: "Needed for game downloads and updates. Less critical during gameplay.",
//               },
//             ].map((item) => (
//               <div
//                 key={item.metric}
//                 className="p-5 rounded-2xl border border-border/50 bg-card"
//               >
//                 <div
//                   className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4`}
//                 >
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{item.metric}</h3>
//                 <p className="text-sm text-muted-foreground mb-4">
//                   {item.desc}
//                 </p>
//                 <div className="space-y-2 text-sm">
//                   <div className="flex justify-between">
//                     <span className="text-muted-foreground">Ideal</span>
//                     <span className="text-emerald-400 font-bold">
//                       {item.ideal}
//                     </span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-muted-foreground">Good</span>
//                     <span className="text-blue-400 font-bold">{item.good}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-muted-foreground">Poor</span>
//                     <span className="text-red-400 font-bold">{item.bad}</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="py-14 border-t border-border/40">
//           <h2 className="text-3xl font-bold mb-4">
//             Internet Speed Requirements by Game
//           </h2>
//           <p className="text-muted-foreground mb-8">
//             Recommended speeds for the most popular online games in 2024–2025.
//           </p>
//           <div className="overflow-x-auto rounded-2xl border border-border/50">
//             <table className="w-full text-sm">
//               <thead className="bg-muted/60">
//                 <tr>
//                   {[
//                     "Game",
//                     "Download",
//                     "Upload",
//                     "Ping",
//                     "Best Connection",
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
//                     game: "Call of Duty (Warzone)",
//                     dl: "15 Mbps",
//                     ul: "5 Mbps",
//                     ping: "< 30ms",
//                     conn: "Ethernet",
//                   },
//                   {
//                     game: "Fortnite",
//                     dl: "10 Mbps",
//                     ul: "3 Mbps",
//                     ping: "< 40ms",
//                     conn: "Ethernet/WiFi 6",
//                   },
//                   {
//                     game: "League of Legends",
//                     dl: "5 Mbps",
//                     ul: "1 Mbps",
//                     ping: "< 50ms",
//                     conn: "Any stable",
//                   },
//                   {
//                     game: "FIFA / EA FC",
//                     dl: "10 Mbps",
//                     ul: "5 Mbps",
//                     ping: "< 35ms",
//                     conn: "Ethernet",
//                   },
//                   {
//                     game: "Apex Legends",
//                     dl: "15 Mbps",
//                     ul: "5 Mbps",
//                     ping: "< 30ms",
//                     conn: "Ethernet",
//                   },
//                   {
//                     game: "Minecraft (Multiplayer)",
//                     dl: "5 Mbps",
//                     ul: "2 Mbps",
//                     ping: "< 80ms",
//                     conn: "WiFi OK",
//                   },
//                   {
//                     game: "PUBG / BGMI",
//                     dl: "10 Mbps",
//                     ul: "3 Mbps",
//                     ping: "< 50ms",
//                     conn: "Ethernet",
//                   },
//                   {
//                     game: "Valorant",
//                     dl: "10 Mbps",
//                     ul: "5 Mbps",
//                     ping: "< 30ms",
//                     conn: "Ethernet",
//                   },
//                 ].map((row) => (
//                   <tr
//                     key={row.game}
//                     className="bg-card hover:bg-muted/30 transition-colors"
//                   >
//                     <td className="px-5 py-3.5 font-medium">
//                       <span className="flex items-center gap-2">
//                         <Trophy className="w-3.5 h-3.5 text-purple-400" />
//                         {row.game}
//                       </span>
//                     </td>
//                     <td className="px-5 py-3.5 text-blue-400">{row.dl}</td>
//                     <td className="px-5 py-3.5 text-indigo-400">{row.ul}</td>
//                     <td className="px-5 py-3.5 text-green-400">{row.ping}</td>
//                     <td className="px-5 py-3.5 text-muted-foreground">
//                       {row.conn}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         <section className="py-14 border-t border-border/40">
//           <h2 className="text-3xl font-bold mb-8">
//             How to Reduce Ping for Gaming
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//             {[
//               {
//                 title: "Use Wired Ethernet",
//                 desc: "The single biggest improvement. Ethernet eliminates WiFi interference and dramatically reduces jitter.",
//               },
//               {
//                 title: "Connect to Nearest Server",
//                 desc: "Always select game servers closest to your location. Physical distance determines minimum possible ping.",
//               },
//               {
//                 title: "Enable QoS on Router",
//                 desc: "Quality of Service prioritizes gaming traffic over other household usage, ensuring consistent low latency.",
//               },
//               {
//                 title: "Use Gaming DNS",
//                 desc: "Switch to 1.1.1.1 (Cloudflare) or 8.8.8.8 (Google). Faster DNS resolution reduces connection times.",
//               },
//               {
//                 title: "Close Background Apps",
//                 desc: "Windows Update, Dropbox, OneDrive — all consume bandwidth. Close them before gaming sessions.",
//               },
//               {
//                 title: "Upgrade Your Router",
//                 desc: "A modern WiFi 6 router with gaming features (ASUS ROG, Netgear Nighthawk) makes a real difference.",
//               },
//             ].map((tip) => (
//               <div
//                 key={tip.title}
//                 className="flex gap-4 p-4 rounded-xl border border-border/50 bg-card/60"
//               >
//                 <Monitor className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
//                 <div>
//                   <h3 className="font-semibold mb-1">{tip.title}</h3>
//                   <p className="text-sm text-muted-foreground">{tip.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <AdPlaceholder size="medium-rectangle" className="my-6" />
//         <FAQSection faqs={gamingFaqs} title="Gaming Internet Speed FAQs" />
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
// import { Gamepad2, Activity, Wifi, Monitor, Zap, Trophy } from "lucide-react";

// export const metadata: Metadata = {
//   title:
//     "Gaming Speed Test – Check If Your Internet Is Fast Enough for Online Gaming",
//   description:
//     "Free gaming speed test to check ping, jitter, download & upload speed. Find out if your internet is good for online gaming in India, US, UK & worldwide.",
//   keywords: [
//     "gaming speed test",
//     "best internet speed for gaming",
//     "ping test for gaming",
//     "online gaming internet speed",
//     "gaming latency test",
//     "low ping internet test",
//     "internet speed for gaming india",
//     "pc gaming speed test",
//     "ps5 gaming internet speed",
//   ],
//   alternates: {
//     canonical: "https://trueinternetspeedtest.com/gaming-speed-test",
//   },
//   openGraph: {
//     title: "Gaming Speed Test – Is Your Internet Fast Enough?",
//     description:
//       "Test ping, jitter, download & upload speed for online gaming. Works worldwide.",
//     url: "https://trueinternetspeedtest.com/gaming-speed-test",
//     siteName: "trueinternetspeedtest",
//     type: "article",
//   },
// };

// const gamingFaqs = [
//   {
//     question: "What internet speed do I need for online gaming?",
//     answer:
//       "Most online games work smoothly with 15–25 Mbps download and 5–10 Mbps upload. Ping matters more than speed — under 50ms is good, under 20ms is excellent.",
//   },
//   {
//     question: "What is a good ping for gaming?",
//     answer:
//       "Ping below 20ms is ideal for competitive gaming. 20–50ms is good for most players. Above 100ms causes noticeable lag.",
//   },
//   {
//     question: "Why is my ping high even with fast internet?",
//     answer:
//       "High ping can be caused by WiFi interference, distant game servers, ISP routing issues, background downloads, or low-quality routers.",
//   },
//   {
//     question: "Does upload speed matter for gaming?",
//     answer:
//       "Upload speed matters less than ping. Most games need only 1–5 Mbps upload, but streaming while gaming requires more.",
//   },
//   {
//     question: "WiFi or ethernet — which is better for gaming?",
//     answer:
//       "Ethernet is always better for gaming. It reduces latency, jitter, and packet loss compared to WiFi.",
//   },
// ];

// const relatedArticles = [
//   {
//     href: "/",
//     title: "Internet Speed Test",
//     description: "Test your download and upload speed instantly.",
//   },
//   {
//     href: "/streaming-speed-test",
//     title: "Streaming Speed Test",
//     description: "Check if your internet supports HD and 4K streaming.",
//   },
//   {
//     href: "/what-is-good-internet-speed",
//     title: "What Is Good Internet Speed?",
//     description: "Complete guide to internet speed requirements.",
//   },
//   {
//     href: "/how-to-increase-wifi-speed",
//     title: "How to Increase WiFi Speed",
//     description: "Reduce lag and boost internet performance.",
//   },
// ];

// export default function GamingSpeedTestPage() {
//   const articleSchema = {
//     "@context": "https://schema.org",
//     "@type": "Article",
//     headline: "Gaming Speed Test – Best Internet Speed for Online Gaming",
//     description:
//       "Check ping, jitter, and internet speed for online gaming worldwide.",
//     url: "https://trueinternetspeedtest.com/gaming-speed-test",
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
//     mainEntity: gamingFaqs.map((faq) => ({
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
//         name: "Gaming Speed Test",
//         item: "https://trueinternetspeedtest.com/gaming-speed-test",
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

//       <section className="relative py-20 bg-gradient-to-b from-[#0a0a1f] via-[#100a2b] to-background">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <Breadcrumb items={[{ label: "Gaming Speed Test" }]} />
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs mb-4">
//             <Gamepad2 className="w-4 h-4" />
//             Optimized for Gamers
//           </div>
//           <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
//             Gaming Speed Test
//           </h1>
//           <p className="text-lg text-white/70 max-w-2xl mx-auto">
//             Check ping, jitter, download and upload speed for online gaming in
//             India, US, UK and worldwide.
//           </p>
//           <div className="mt-8">
//             <SpeedTestWidget />
//           </div>
//         </div>
//       </section>

//       <div className="max-w-7xl mx-auto px-4">
//         <AdPlaceholder size="leaderboard" className="my-6" />

//         {/* GLOBAL SEO CONTENT (SAFE) */}
//         <section className="sr-only">
//           <h2>Gaming Speed Test for Global Players</h2>
//           <p>
//             This gaming speed test is designed for players in the United States,
//             United Kingdom, India, Canada, Australia, Europe, and Asia.
//           </p>
//           <p>
//             Test your internet speed for PC, console, and mobile gaming on
//             fiber, broadband, 4G, and 5G networks.
//           </p>
//         </section>

//         <FAQSection faqs={gamingFaqs} title="Gaming Internet Speed FAQs" />
//         <RelatedArticles articles={relatedArticles} />
//       </div>
//     </>
//   );
// }

/////////////////////////////////////
// compare 5 site adding
import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { AdPlaceholder } from "@/components/ad-placeholder";
import { FAQSection } from "@/components/faq-section";
import { RelatedArticles } from "@/components/related-articles";
import { Breadcrumb } from "@/components/breadcrumb";
import { Gamepad2 } from "lucide-react";

const SITE_URL = "https://trueinternetspeedtest.com";
const PAGE_URL = `${SITE_URL}/gaming-speed-test`;

export const metadata: Metadata = {
  title:
    "Gaming Speed Test (2026) – Check Ping, Jitter & Internet Speed for Gaming",
  description:
    "Free Gaming Speed Test by trueinternetspeedtest. Check ping, jitter, download & upload speed for Fortnite, PUBG, Valorant, Warzone, PS5 & PC gaming worldwide.",
  keywords: [
    "gaming speed test",
    "best internet speed for gaming",
    "good ping for gaming",
    "low latency internet test",
    "fortnite ping test",
    "valorant ping test",
    "warzone internet speed",
    "ps5 internet speed",
    "pc gaming internet speed",
    "online gaming speed requirements",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Gaming Speed Test – Check Ping & Internet Speed for Online Gaming",
    description:
      "Test your internet speed for Fortnite, PUBG, Valorant & more. Instant ping, jitter & gaming latency analysis.",
    url: PAGE_URL,
    siteName: "trueinternetspeedtest",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaming Speed Test – Check Your Ping Instantly",
    description:
      "Measure ping, jitter, download & upload speed for competitive gaming.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const gamingFaqs = [
  {
    question: "What is the best internet speed for gaming?",
    answer:
      "For smooth online gaming, 25–50 Mbps download and 5–10 Mbps upload is enough. However, ping under 30ms is more important than raw speed.",
  },
  {
    question: "Is 100 Mbps good for gaming?",
    answer:
      "Yes. 100 Mbps is more than enough for gaming. Low latency and stable connection matter more than high download speed.",
  },
  {
    question: "What is a good ping for Fortnite or Valorant?",
    answer:
      "Ping under 20ms is excellent for competitive gaming. 20–50ms is good. Above 80ms may cause noticeable lag.",
  },
  {
    question: "Why is my gaming lagging even with fast internet?",
    answer:
      "Gaming lag can be caused by WiFi interference, ISP routing issues, distant servers, background downloads, or outdated routers.",
  },
  {
    question: "Is Ethernet better than WiFi for gaming?",
    answer:
      "Yes. Ethernet provides lower latency, reduced jitter, and more stable performance compared to WiFi.",
  },
];

const relatedArticles = [
  {
    href: "/",
    title: "Internet Speed Test",
    description: "Test your real download and upload speed instantly.",
  },
  {
    href: "/what-is-good-internet-speed",
    title: "What Is a Good Internet Speed?",
    description: "Complete internet speed guide for all activities.",
  },
  {
    href: "/how-to-increase-wifi-speed",
    title: "How to Increase WiFi Speed",
    description: "Reduce lag and improve WiFi performance.",
  },
  {
    href: "/streaming-speed-test",
    title: "Streaming Speed Test",
    description: "Check if your internet supports 4K streaming.",
  },
];

export default function GamingSpeedTestPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "trueinternetspeedtest",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Gaming Speed Test Tool",
    url: PAGE_URL,
    applicationCategory: "Utility",
    operatingSystem: "All",
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Gaming Speed Test – Best Internet Speed for Online Gaming",
    description:
      "Check ping, jitter and internet speed for Fortnite, PUBG, Valorant, Warzone & more.",
    url: PAGE_URL,
    author: {
      "@type": "Organization",
      name: "trueinternetspeedtest Research Team",
    },
    publisher: {
      "@type": "Organization",
      name: "trueinternetspeedtest",
      url: SITE_URL,
    },
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: gamingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gaming Speed Test",
        item: PAGE_URL,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative py-20 bg-gradient-to-b from-[#0a0a1f] via-[#100a2b] to-background">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Breadcrumb items={[{ label: "Gaming Speed Test" }]} />

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs mb-4">
            <Gamepad2 className="w-4 h-4" />
            Competitive Gaming Optimized
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Gaming Speed Test – Check Ping & Internet Speed
          </h1>

          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Test your internet speed for Fortnite, PUBG, Valorant, Warzone, Apex
            Legends, CS2 and other online games. Measure ping, jitter, download
            & upload instantly worldwide.
          </p>

          <div className="mt-8">
            <SpeedTestWidget />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <AdPlaceholder size="leaderboard" className="my-6" />

        <section className="prose prose-invert max-w-4xl mx-auto py-10 text-center">
          <h2>What Is a Good Internet Speed for Gaming?</h2>
          <ul className="list-disc list-inside inline-block text-left">
            <li>Ping: Under 30ms</li>
            <li>Jitter: Under 5ms</li>
            <li>Download: 25+ Mbps</li>
            <li>Upload: 5+ Mbps</li>
          </ul>

          <h2>How to Reduce Gaming Lag</h2>
          <ul className="list-disc list-inside inline-block text-left">
            <li>Use Ethernet instead of WiFi</li>
            <li>Close background downloads</li>
            <li>Restart your router before gaming</li>
            <li>Select the nearest game server</li>
          </ul>
        </section>

        <FAQSection faqs={gamingFaqs} title="Gaming Internet Speed FAQs" />
        <RelatedArticles articles={relatedArticles} />
      </div>
    </>
  );
}
