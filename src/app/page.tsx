//   description:
//     "Check your internet speed instantly with trueinternetspeedtest. Get accurate download speed, upload speed, ping, jitter, and ISP info. Free broadband speed test — no signup required.",
//   keywords: [
//     "internet speed test",
//     "wifi speed test",
//     "check internet speed",
//     "speed test online",
//     "broadband speed test",
//     "download speed test",
//     "upload speed test",
//     "ping test online",
//   ],
//   openGraph: {
//     title: "Internet Speed Test – Check Your WiFi Speed Instantly",
//     description:
//       "Free online internet speed test. Check download, upload, ping, jitter and ISP instantly.",
//     url: "https://trueinternetspeedtest.com",
//     images: [{ url: "/og-image.png", width: 1200, height: 630 }],
//   },
//   alternates: { canonical: "https://trueinternetspeedtest.com" },
// };

// const homepageFaqs = [
//   {
//     question: "How does trueinternetspeedtest measure internet speed?",
//     answer:
//       "trueinternetspeedtest uses a server-side measurement engine based on LibreSpeed. It downloads and uploads test files of varying sizes to our CDN servers and measures throughput in Mbps. The test measures download speed, upload speed, ping (latency), and jitter — giving you a complete picture of your internet performance.",
//   },
//   {
//     question: "What is a good internet speed?",
//     answer:
//       "For basic browsing and email, 5–10 Mbps is sufficient. For HD video streaming (Netflix, YouTube), you need at least 25 Mbps. For 4K streaming and gaming, 50–100 Mbps is recommended. For households with multiple devices and users, 100–500 Mbps offers a smooth experience.",
//   },
//   {
//     question: "Why is my speed test result lower than my plan?",
//     answer:
//       "Several factors can reduce your measured speed: WiFi interference (use a wired connection for best results), distance from your router, network congestion, ISP throttling, or outdated router/modem hardware. Run the test multiple times at different hours to get an average.",
//   },
//   {
//     question: "What is ping and why does it matter?",
//     answer:
//       "Ping is the latency — how long it takes for a data packet to travel to a server and back, measured in milliseconds (ms). Lower ping is better. Under 20ms is excellent for gaming. Under 50ms is good for video calls. Over 100ms may cause noticeable delays in real-time applications.",
//   },
//   {
//     question: "What is jitter in an internet speed test?",
//     answer:
//       "Jitter measures the variation in ping over time. High jitter causes inconsistent performance — even if your average ping is low, high jitter can cause lag spikes in gaming and choppy audio/video in calls. Jitter under 10ms is excellent, 10–30ms is acceptable.",
//   },
//   {
//     question: "Should I use WiFi or ethernet for the speed test?",
//     answer:
//       "For the most accurate results, use a wired ethernet connection directly to your router or modem. WiFi can introduce interference and signal loss that affects test results. If you must test WiFi, stand close to the router and ensure no other devices are downloading or streaming.",
//   },
//   {
//     question: "How often should I test my internet speed?",
//     answer:
//       "Test your internet speed monthly to monitor consistency, or whenever you notice performance issues. Run tests at different times (morning, evening) to detect congestion patterns. Compare results with your ISP's advertised speeds — you're entitled to speeds close to what you pay for.",
//   },
// ];

// const relatedArticles = [
//   {
//     href: "/gaming-speed-test",
//     title: "Gaming Speed Test – What Internet Speed Do You Need?",
//     description:
//       "Find out if your connection is fast enough for online gaming without lag.",
//   },
//   {
//     href: "/streaming-speed-test",
//     title: "Streaming Speed Test – Speed Requirements for Netflix, YouTube",
//     description:
//       "Check if your internet speed supports 4K, HD, and SD video streaming.",
//   },
//   {
//     href: "/mobile-speed-test",
//     title: "Mobile Internet Speed Test – Test 4G & 5G Speed",
//     description: "Test your smartphone's LTE, 4G, or 5G mobile data speed.",
//   },
//   {
//     href: "/how-to-increase-wifi-speed",
//     title: "How to Increase WiFi Speed – 15 Proven Tips",
//     description:
//       "Boost your wireless network performance with these expert tips.",
//   },
//   {
//     href: "/what-is-good-internet-speed",
//     title: "What is a Good Internet Speed? Complete 2024 Guide",
//     description:
//       "Understand speed requirements for streaming, gaming, work from home.",
//   },
//   {
//     href: "/internet-speed-test-india",
//     title: "Internet Speed Test India – Check Airtel, Jio, BSNL Speed",
//     description:
//       "Test your broadband speed in India and compare with ISP averages.",
//   },
// ];

// export default function HomePage() {
//   const websiteSchema = {
//     "@context": "https://schema.org",
//     "@type": "WebSite",
//     name: "trueinternetspeedtest",
//     url: "https://trueinternetspeedtest.com",
//     description:
//       "Free internet speed test tool. Check download, upload, ping, jitter and ISP.",
//     potentialAction: {
//       "@type": "SearchAction",
//       target: "https://trueinternetspeedtest.com/?q={search_term_string}",
//       "query-input": "required name=search_term_string",
//     },
//   };

//   const softwareSchema = {
//     "@context": "https://schema.org",
//     "@type": "SoftwareApplication",
//     name: "trueinternetspeedtest Internet Speed Test",
//     applicationCategory: "UtilitiesApplication",
//     operatingSystem: "Web",
//     offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
//     aggregateRating: {
//       "@type": "AggregateRating",
//       ratingValue: "4.8",
//       ratingCount: "12547",
//     },
//     description:
//       "Free browser-based internet speed test measuring download, upload, ping, and jitter.",
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
//       />

//       {/* Hero Section */}
//       <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a1f] via-[#0d0d2b] to-background">
//         {/* Animated background grid */}
//         <div
//           className="absolute inset-0 opacity-20"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
//             backgroundSize: "40px 40px",
//           }}
//         />
//         {/* Radial glow */}
//         <div
//           className="absolute inset-0 bg-gradient-radial from-blue-600/20 via-transparent to-transparent pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(ellipse at 50% 40%, rgba(59,130,246,0.15) 0%, transparent 70%)",
//           }}
//         />

//         <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 text-center">
//           {/* Top Ad */}
//           <div className="mb-8 hidden md:block">
//             <AdPlaceholder size="leaderboard" />
//           </div>

//           {/* H1 */}
//           <div className="mb-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
//             <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
//             Servers Online — Accurate Results
//           </div>
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
//             Internet Speed Test –{" "}
//             <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
//               Check Your WiFi Speed
//             </span>{" "}
//             Instantly
//           </h1>
//           <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
//             Get an accurate reading of your download speed, upload speed, ping,
//             and jitter in under 30 seconds. No Flash, no app install — just
//             click and test.
//           </p>

//           {/* Speed Test Widget */}
//           <SpeedTestWidget />

//           {/* Trust badges */}
//           <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
//             {[
//               "100% Free",
//               "No Registration",
//               "No Flash Required",
//               "LibreSpeed Powered",
//               "HTTPS Secure",
//             ].map((badge) => (
//               <div key={badge} className="flex items-center gap-1.5">
//                 <CheckCircle className="w-3.5 h-3.5 text-green-400" />
//                 <span>{badge}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Mid-page Ad */}
//         <div className="py-6">
//           <AdPlaceholder size="leaderboard" />
//         </div>

//         {/* Understanding Your Results */}
//         <section className="py-14">
//           <h2 className="text-3xl font-bold text-center mb-4">
//             Understanding Your Speed Test Results
//           </h2>
//           <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
//             Your internet speed test results show four key metrics that
//             determine your online experience. Here's what each one means and
//             what values are considered good.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//             {[
//               {
//                 icon: <Download className="w-6 h-6" />,
//                 color: "from-blue-500 to-blue-600",
//                 title: "Download Speed",
//                 desc: "How fast data comes to your device. Affects streaming, browsing, downloads.",
//                 good: "25+ Mbps",
//                 great: "100+ Mbps",
//               },
//               {
//                 icon: <Upload className="w-6 h-6" />,
//                 color: "from-indigo-500 to-indigo-600",
//                 title: "Upload Speed",
//                 desc: "How fast you send data. Critical for video calls, cloud storage, and gaming.",
//                 good: "10+ Mbps",
//                 great: "50+ Mbps",
//               },
//               {
//                 icon: <Activity className="w-6 h-6" />,
//                 color: "from-purple-500 to-purple-600",
//                 title: "Ping / Latency",
//                 desc: "Round-trip time to our server. Lower is better for gaming and calls.",
//                 good: "< 50ms",
//                 great: "< 20ms",
//               },
//               {
//                 icon: <TrendingUp className="w-6 h-6" />,
//                 color: "from-cyan-500 to-cyan-600",
//                 title: "Jitter",
//                 desc: "Variation in ping. High jitter causes lag spikes and stuttering video.",
//                 good: "< 30ms",
//                 great: "< 10ms",
//               },
//             ].map((item) => (
//               <div
//                 key={item.title}
//                 className="rounded-2xl border border-border/50 bg-card p-5"
//               >
//                 <div
//                   className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4`}
//                 >
//                   {item.icon}
//                 </div>
//                 <h3 className="font-bold text-lg mb-2">{item.title}</h3>
//                 <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
//                   {item.desc}
//                 </p>
//                 <div className="flex gap-3 text-xs">
//                   <div className="flex-1 p-2 rounded-lg bg-muted/60">
//                     <div className="text-muted-foreground mb-0.5">Good</div>
//                     <div className="font-bold text-green-400">{item.good}</div>
//                   </div>
//                   <div className="flex-1 p-2 rounded-lg bg-muted/60">
//                     <div className="text-muted-foreground mb-0.5">Great</div>
//                     <div className="font-bold text-blue-400">{item.great}</div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Speed Requirements Table */}
//         <section className="py-14 border-t border-border/40">
//           <h2 className="text-3xl font-bold mb-4">
//             Internet Speed Requirements by Use Case
//           </h2>
//           <p className="text-muted-foreground mb-8 max-w-2xl">
//             Different online activities require different internet speeds. Use
//             this table to find out if your connection is fast enough for your
//             needs.
//           </p>
//           <div className="overflow-x-auto rounded-2xl border border-border/50">
//             <table className="w-full text-sm">
//               <thead className="bg-muted/60">
//                 <tr>
//                   {[
//                     "Activity",
//                     "Minimum Speed",
//                     "Recommended Speed",
//                     "Ideal Speed",
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
//                     activity: "Web Browsing",
//                     min: "1 Mbps",
//                     rec: "5 Mbps",
//                     ideal: "25 Mbps",
//                   },
//                   {
//                     activity: "SD Video Streaming",
//                     min: "3 Mbps",
//                     rec: "5 Mbps",
//                     ideal: "10 Mbps",
//                   },
//                   {
//                     activity: "HD Video Streaming",
//                     min: "5 Mbps",
//                     rec: "15 Mbps",
//                     ideal: "25 Mbps",
//                   },
//                   {
//                     activity: "4K UHD Streaming",
//                     min: "15 Mbps",
//                     rec: "25 Mbps",
//                     ideal: "50 Mbps",
//                   },
//                   {
//                     activity: "Video Calls (HD)",
//                     min: "3 Mbps",
//                     rec: "5 Mbps",
//                     ideal: "15 Mbps",
//                   },
//                   {
//                     activity: "Online Gaming",
//                     min: "3 Mbps",
//                     rec: "15 Mbps",
//                     ideal: "50 Mbps",
//                   },
//                   {
//                     activity: "Cloud Gaming (GeForce NOW)",
//                     min: "15 Mbps",
//                     rec: "25 Mbps",
//                     ideal: "50 Mbps",
//                   },
//                   {
//                     activity: "Multiple Devices (5+ users)",
//                     min: "50 Mbps",
//                     rec: "100 Mbps",
//                     ideal: "200+ Mbps",
//                   },
//                   {
//                     activity: "Work From Home",
//                     min: "10 Mbps",
//                     rec: "25 Mbps",
//                     ideal: "100 Mbps",
//                   },
//                   {
//                     activity: "Smart Home / IoT",
//                     min: "10 Mbps",
//                     rec: "25 Mbps",
//                     ideal: "50 Mbps",
//                   },
//                 ].map((row) => (
//                   <tr
//                     key={row.activity}
//                     className="bg-card hover:bg-muted/30 transition-colors"
//                   >
//                     <td className="px-5 py-3.5 font-medium">{row.activity}</td>
//                     <td className="px-5 py-3.5 text-red-400">{row.min}</td>
//                     <td className="px-5 py-3.5 text-yellow-400">{row.rec}</td>
//                     <td className="px-5 py-3.5 text-green-400">{row.ideal}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </section>

//         {/* Gaming Speed Section */}
//         <section className="py-14 border-t border-border/40">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-4">
//                 <Gamepad2 className="w-3.5 h-3.5" />
//                 Gaming Performance
//               </div>
//               <h2 className="text-3xl font-bold mb-4">
//                 Best Internet Speed for Online Gaming
//               </h2>
//               <p className="text-muted-foreground mb-4 leading-relaxed">
//                 Online gaming doesn't actually require the fastest download
//                 speeds — but it's extremely sensitive to{" "}
//                 <strong>ping (latency)</strong> and <strong>jitter</strong>. A
//                 connection with 10 Mbps download but 10ms ping will outperform a
//                 100 Mbps connection with 80ms ping every time.
//               </p>
//               <p className="text-muted-foreground mb-6 leading-relaxed">
//                 For competitive gaming (FPS, MOBA, battle royale), aim for:
//                 download 15+ Mbps, upload 5+ Mbps, ping under 30ms, jitter under
//                 10ms. Use a <strong>wired ethernet connection</strong> whenever
//                 possible — WiFi introduces inconsistent latency.
//               </p>
//               <div className="grid grid-cols-2 gap-3 mb-6">
//                 {[
//                   { game: "Call of Duty", ping: "< 30ms", speed: "15 Mbps" },
//                   { game: "Fortnite", ping: "< 40ms", speed: "10 Mbps" },
//                   {
//                     game: "League of Legends",
//                     ping: "< 50ms",
//                     speed: "5 Mbps",
//                   },
//                   {
//                     game: "FIFA / EA Sports",
//                     ping: "< 35ms",
//                     speed: "10 Mbps",
//                   },
//                 ].map((game) => (
//                   <div
//                     key={game.game}
//                     className="p-3 rounded-xl bg-muted/60 border border-border/40"
//                   >
//                     <div className="font-semibold text-sm">{game.game}</div>
//                     <div className="text-xs text-muted-foreground mt-1">
//                       Ping: <span className="text-green-400">{game.ping}</span>{" "}
//                       · Speed:{" "}
//                       <span className="text-blue-400">{game.speed}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <a
//                 href="/gaming-speed-test"
//                 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:opacity-90 transition-all"
//               >
//                 <Gamepad2 className="w-4 h-4" />
//                 Gaming Speed Test
//               </a>
//             </div>
//             <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-purple-500/20">
//               <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
//                 <Activity className="w-5 h-5 text-purple-400" />
//                 Gaming Latency Guide
//               </h3>
//               {[
//                 {
//                   range: "< 20ms",
//                   label: "Excellent",
//                   desc: "Professional-level, nearly undetectable",
//                   color: "bg-emerald-500",
//                 },
//                 {
//                   range: "20–50ms",
//                   label: "Good",
//                   desc: "Competitive gaming, smooth experience",
//                   color: "bg-green-500",
//                 },
//                 {
//                   range: "50–80ms",
//                   label: "Average",
//                   desc: "Casual gaming, slight delay noticeable",
//                   color: "bg-yellow-500",
//                 },
//                 {
//                   range: "80–120ms",
//                   label: "Poor",
//                   desc: "Noticeable lag, competitive play affected",
//                   color: "bg-orange-500",
//                 },
//                 {
//                   range: "> 120ms",
//                   label: "Unplayable",
//                   desc: "Severe lag, frustrating experience",
//                   color: "bg-red-500",
//                 },
//               ].map((item) => (
//                 <div key={item.label} className="flex items-center gap-3 mb-3">
//                   <div
//                     className={`w-3 h-3 rounded-full ${item.color} shrink-0`}
//                   />
//                   <div className="font-mono text-sm font-bold w-20">
//                     {item.range}
//                   </div>
//                   <div>
//                     <span className="font-semibold text-sm">{item.label}</span>
//                     <span className="text-xs text-muted-foreground ml-2">
//                       {item.desc}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Streaming Speed Section */}
//         <section className="py-14 border-t border-border/40">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-500/10 to-orange-500/10 border border-rose-500/20 order-2 lg:order-1">
//               <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
//                 <Tv className="w-5 h-5 text-rose-400" />
//                 Streaming Quality Guide
//               </h3>
//               {[
//                 {
//                   quality: "SD (480p)",
//                   speed: "3 Mbps",
//                   service: "All platforms",
//                   color: "text-muted-foreground",
//                 },
//                 {
//                   quality: "HD (720p)",
//                   speed: "5 Mbps",
//                   service: "YouTube, Netflix",
//                   color: "text-blue-400",
//                 },
//                 {
//                   quality: "Full HD (1080p)",
//                   speed: "10 Mbps",
//                   service: "Netflix, Disney+",
//                   color: "text-green-400",
//                 },
//                 {
//                   quality: "4K HDR",
//                   speed: "25 Mbps",
//                   service: "Netflix, Apple TV+",
//                   color: "text-purple-400",
//                 },
//                 {
//                   quality: "8K",
//                   speed: "80 Mbps",
//                   service: "YouTube 8K",
//                   color: "text-rose-400",
//                 },
//               ].map((item) => (
//                 <div
//                   key={item.quality}
//                   className="flex items-center justify-between py-3 border-b border-border/30 last:border-0"
//                 >
//                   <div>
//                     <span className="font-semibold text-sm">
//                       {item.quality}
//                     </span>
//                     <span className="text-xs text-muted-foreground ml-2">
//                       {item.service}
//                     </span>
//                   </div>
//                   <span className={`font-bold text-sm ${item.color}`}>
//                     {item.speed}
//                   </span>
//                 </div>
//               ))}
//             </div>
//             <div className="order-1 lg:order-2">
//               <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-medium mb-4">
//                 <Tv className="w-3.5 h-3.5" />
//                 Streaming Performance
//               </div>
//               <h2 className="text-3xl font-bold mb-4">
//                 Internet Speed for 4K Streaming
//               </h2>
//               <p className="text-muted-foreground mb-4 leading-relaxed">
//                 Streaming platforms like Netflix, YouTube, Disney+, and Prime
//                 Video have different bandwidth requirements depending on the
//                 video quality. For a smooth 4K HDR experience on Netflix, you
//                 need a minimum of <strong>25 Mbps per stream</strong>.
//               </p>
//               <p className="text-muted-foreground mb-6 leading-relaxed">
//                 If multiple people in your household stream simultaneously,
//                 multiply the requirement by the number of concurrent streams.
//                 Two people watching 4K Netflix need at least 50 Mbps. Add 10–20%
//                 buffer for other connected devices.
//               </p>
//               <a
//                 href="/streaming-speed-test"
//                 className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-rose-500 to-orange-500 text-white hover:opacity-90 transition-all"
//               >
//                 <Tv className="w-4 h-4" />
//                 Streaming Speed Test
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* How to improve speed tips */}
//         <section className="py-14 border-t border-border/40">
//           <h2 className="text-3xl font-bold text-center mb-4">
//             Tips to Improve Your Internet Speed
//           </h2>
//           <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
//             Before calling your ISP, try these quick fixes that can dramatically
//             improve your internet speed.
//           </p>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//             {[
//               {
//                 icon: <Wifi className="w-5 h-5" />,
//                 title: "Move Closer to Your Router",
//                 desc: "WiFi signal weakens with distance and obstacles. Position your router centrally and elevate it.",
//                 priority: "Quick Fix",
//               },
//               {
//                 icon: <Monitor className="w-5 h-5" />,
//                 title: "Use Ethernet Cable",
//                 desc: "Wired connections are faster, more stable, and have lower latency than WiFi. Use Cat6 or Cat7 cables.",
//                 priority: "Best Impact",
//               },
//               {
//                 icon: <Globe className="w-5 h-5" />,
//                 title: "Change DNS Servers",
//                 desc: "Switch to Google DNS (8.8.8.8) or Cloudflare DNS (1.1.1.1) for faster domain resolution.",
//                 priority: "Easy",
//               },
//               {
//                 icon: <Smartphone className="w-5 h-5" />,
//                 title: "Limit Background Apps",
//                 desc: "Background apps (Windows Update, cloud backups) consume bandwidth. Close unnecessary apps while testing.",
//                 priority: "Quick Fix",
//               },
//               {
//                 icon: <TrendingUp className="w-5 h-5" />,
//                 title: "Reboot Your Router",
//                 desc: "A simple router restart clears the cache and often improves speed significantly. Do it monthly.",
//                 priority: "Instant",
//               },
//               {
//                 icon: <Activity className="w-5 h-5" />,
//                 title: "Upgrade Your Plan",
//                 desc: "If you consistently get less than 80% of advertised speeds, contact your ISP or consider switching.",
//                 priority: "Long-term",
//               },
//             ].map((tip) => (
//               <div
//                 key={tip.title}
//                 className="p-5 rounded-2xl border border-border/50 bg-card hover:border-blue-500/30 transition-all group"
//               >
//                 <div className="flex items-start justify-between mb-3">
//                   <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
//                     {tip.icon}
//                   </div>
//                   <span className="text-xs font-medium px-2 py-1 rounded-full bg-muted text-muted-foreground">
//                     {tip.priority}
//                   </span>
//                 </div>
//                 <h3 className="font-bold mb-2">{tip.title}</h3>
//                 <p className="text-sm text-muted-foreground leading-relaxed">
//                   {tip.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-8">
//             <a
//               href="/how-to-increase-wifi-speed"
//               className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold"
//             >
//               Read the Complete WiFi Speed Guide →
//             </a>
//           </div>
//         </section>

//         {/* Bottom Ad */}
//         <div className="py-6">
//           <AdPlaceholder size="medium-rectangle" />
//         </div>

//         {/* FAQ */}
//         <FAQSection
//           faqs={homepageFaqs}
//           title="Frequently Asked Questions About Internet Speed Tests"
//         />

//         {/* Related Articles */}
//         <RelatedArticles
//           articles={relatedArticles}
//           title="More Speed Test Tools & Guides"
//         />
//       </div>
//     </>
//   );
// }

// my previous version of code
///////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////

// import type { Metadata } from "next";
// import { SpeedTestWidget } from "@/components/speed-test-widget";
// import { AdPlaceholder } from "@/components/ad-placeholder";
// import { FAQSection } from "@/components/faq-section";
// import { RelatedArticles } from "@/components/related-articles";
// import {
//   Download,
//   Upload,
//   Activity,
//   TrendingUp,
//   CheckCircle,
//   Globe,
// } from "lucide-react";

// /* =========================
//    GLOBAL SEO METADATA
// ========================= */
// export const metadata: Metadata = {
//   title: "Internet Speed Test – Check WiFi Speed Instantly (India, US, UK)",
//   description:
//     "Free internet speed test to check download speed, upload speed, ping, and jitter. Accurate results for India, United States, United Kingdom, and worldwide.",
//   keywords: [
//     "internet speed test",
//     "wifi speed test",
//     "speed test india",
//     "speed test usa",
//     "speed test uk",
//     "check internet speed",
//     "broadband speed test",
//     "download speed test",
//     "upload speed test",
//     "ping test online",
//   ],
//   alternates: {
//     canonical: "https://trueinternetspeedtest.com",
//   },
//   openGraph: {
//     title: "Internet Speed Test – Global WiFi Speed Checker",
//     description:
//       "Check your internet speed instantly. Works accurately in India, US, UK and worldwide.",
//     url: "https://trueinternetspeedtest.com",
//     siteName: "trueinternetspeedtest",
//     images: [
//       {
//         url: "/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Internet Speed Test Tool",
//       },
//     ],
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// /* =========================
//    PAGE
// ========================= */
// export default function HomePage() {
//   /* ---------- SCHEMA ---------- */
//   const schema = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "WebSite",
//         name: "trueinternetspeedtest",
//         url: "https://trueinternetspeedtest.com",
//       },
//       {
//         "@type": "SoftwareApplication",
//         name: "trueinternetspeedtest Internet Speed Test",
//         applicationCategory: "UtilitiesApplication",
//         operatingSystem: "Web",
//         offers: {
//           "@type": "Offer",
//           price: "0",
//           priceCurrency: "USD",
//         },
//         description:
//           "Free online internet speed test for India, US, UK and worldwide users.",
//       },
//       {
//         "@type": "FAQPage",
//         mainEntity: [
//           {
//             "@type": "Question",
//             name: "What is a good internet speed?",
//             acceptedAnswer: {
//               "@type": "Answer",
//               text: "A good internet speed is 25 Mbps for browsing and HD streaming, 50–100 Mbps for gaming and work from home, and 100+ Mbps for multiple users and 4K streaming.",
//             },
//           },
//           {
//             "@type": "Question",
//             name: "Is this speed test accurate in India, US and UK?",
//             acceptedAnswer: {
//               "@type": "Answer",
//               text: "Yes. trueinternetspeedtest uses globally distributed servers to provide accurate results in India, the United States, the United Kingdom, and other countries.",
//             },
//           },
//         ],
//       },
//     ],
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
//       />

//       {/* ================= HERO ================= */}
//       <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-slate-950 to-background">
//         <div className="max-w-5xl px-4 text-center">
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
//             <Globe className="w-3.5 h-3.5" />
//             Global Speed Test Servers Online
//           </div>

//           <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
//             Internet Speed Test
//           </h1>

//           <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
//             Test your internet speed instantly. Measure download speed, upload
//             speed, ping, and jitter — optimized for India, United States, United
//             Kingdom, and worldwide users.
//           </p>

//           <SpeedTestWidget />

//           {/* ✅ FIXED BADGES (LIGHT + DARK MODE) */}
//           <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-700 dark:text-white/70">
//             {[
//               "100% Free",
//               "No Signup",
//               "Works Worldwide",
//               "Accurate Results",
//             ].map((item) => (
//               <div
//                 key={item}
//                 className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
//                            bg-slate-100 text-slate-800
//                            dark:bg-white/10 dark:text-white/80"
//               >
//                 <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400" />
//                 <span>{item}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= MAIN CONTENT ================= */}
//       <main className="max-w-7xl mx-auto px-4 py-14">
//         <section className="mb-14">
//           <h2 className="text-3xl font-bold mb-4">
//             What Is a Good Internet Speed?
//           </h2>
//           <p className="text-muted-foreground max-w-3xl">
//             Internet speed requirements vary by country and usage. In India,
//             average broadband speeds range between 50–100 Mbps. In the US and
//             UK, households often require 100–300 Mbps for streaming, gaming, and
//             remote work.
//           </p>
//         </section>

//         <section className="grid md:grid-cols-3 gap-6 mb-14">
//           <div className="p-5 border rounded-xl bg-card">
//             <Download className="w-6 h-6 mb-3 text-blue-500" />
//             <h3 className="font-bold mb-2">Download Speed</h3>
//             <p className="text-sm text-muted-foreground">
//               Important for streaming and browsing. 25 Mbps is good, 100 Mbps is
//               excellent.
//             </p>
//           </div>
//           <div className="p-5 border rounded-xl bg-card">
//             <Upload className="w-6 h-6 mb-3 text-indigo-500" />
//             <h3 className="font-bold mb-2">Upload Speed</h3>
//             <p className="text-sm text-muted-foreground">
//               Needed for video calls, gaming, and cloud uploads. Aim for at
//               least 10 Mbps.
//             </p>
//           </div>
//           <div className="p-5 border rounded-xl bg-card">
//             <Activity className="w-6 h-6 mb-3 text-purple-500" />
//             <h3 className="font-bold mb-2">Ping & Jitter</h3>
//             <p className="text-sm text-muted-foreground">
//               Lower latency means smoother gaming and calls. Under 30ms ping is
//               ideal.
//             </p>
//           </div>
//         </section>

//         <AdPlaceholder size="leaderboard" />

//         <FAQSection
//           title="Internet Speed Test – FAQs"
//           faqs={[
//             {
//               question: "Is this speed test free?",
//               answer:
//                 "Yes. trueinternetspeedtest is completely free and requires no registration.",
//             },
//             {
//               question: "Does this work on mobile networks?",
//               answer:
//                 "Yes. You can test 4G, 5G, and WiFi speeds on any smartphone.",
//             },
//             {
//               question: "Is this speed test accurate worldwide?",
//               answer:
//                 "Yes. Our servers are optimized for users in India, US, UK, and other countries.",
//             },
//           ]}
//         />

//         <RelatedArticles
//           title="More Internet Speed Guides"
//           articles={[
//             {
//               href: "/what-is-good-internet-speed",
//               title: "What Is a Good Internet Speed?",
//               description:
//                 "Complete guide for streaming, gaming, and work from home.",
//             },
//             // {
//             //   href: "/internet-speed-test-india",
//             //   title: "Internet Speed Test India",
//             //   description: "Check Airtel, Jio, BSNL broadband speeds.",
//             // },
//             {
//               href: "/broadband-speed-test",
//               title: "Broadband Speed Test",
//               description:
//                 "Check your broadband internet speed worldwide. Test download, upload & ping instantly.",
//             },
//             {
//               href: "/gaming-speed-test",
//               title: "Gaming Speed Test",
//               description: "Check ping and latency for online gaming.",
//             },
//           ]}
//         />
//       </main>
//     </>
//   );
// }

///////////////////////////////////////////////////////////////////////////////////
//chatgpt comparison 5 site

// import type { Metadata } from "next";
// import { SpeedTestWidget } from "@/components/speed-test-widget";
// import { AdPlaceholder } from "@/components/ad-placeholder";
// import { FAQSection } from "@/components/faq-section";
// import { RelatedArticles } from "@/components/related-articles";
// import {
//   Download,
//   Upload,
//   Activity,
//   TrendingUp,
//   CheckCircle,
//   Globe,
//   ShieldCheck,
//   BarChart3,
// } from "lucide-react";

// /* =========================
//    GLOBAL SEO METADATA – trueinternetspeedtest
// ========================= */
// export const metadata: Metadata = {
//   title:
//     "trueinternetspeedtest™ – Free Internet Speed Test (India, USA, UK & Global)",
//   description:
//     "trueinternetspeedtest™ is a free global internet speed test tool to check download speed, upload speed, ping, jitter and broadband performance. Accurate results for India, USA, UK and worldwide users.",
//   keywords: [
//     "trueinternetspeedtest",
//     "internet speed test",
//     "speed test",
//     "wifi speed test",
//     "broadband speed test",
//     "check internet speed",
//     "download speed test",
//     "upload speed test",
//     "ping test",
//     "5G speed test",
//     "fiber internet speed test",
//     "mobile speed test",
//     "global speed test",
//     "internet speed test india",
//     "internet speed test usa",
//     "internet speed test uk",
//   ],
//   alternates: {
//     canonical: "https://trueinternetspeedtest.com",
//   },
//   metadataBase: new URL("https://trueinternetspeedtest.com"),
//   openGraph: {
//     title: "trueinternetspeedtest™ – Global Internet Speed Test Tool",
//     description:
//       "Test your internet speed instantly. Check download, upload, ping & jitter worldwide.",
//     url: "https://trueinternetspeedtest.com",
//     siteName: "trueinternetspeedtest",
//     images: [
//       {
//         url: "/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "trueinternetspeedtest Global Speed Test",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
// };

// /* =========================
//    PAGE
// ========================= */
// export default function HomePage() {
//   const schema = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "Organization",
//         name: "trueinternetspeedtest",
//         url: "https://trueinternetspeedtest.com",
//         logo: "https://trueinternetspeedtest.com/logo.png",
//         sameAs: [],
//       },
//       {
//         "@type": "WebSite",
//         name: "trueinternetspeedtest",
//         url: "https://trueinternetspeedtest.com",
//       },
//       {
//         "@type": "BreadcrumbList",
//         itemListElement: [
//           {
//             "@type": "ListItem",
//             position: 1,
//             name: "Home",
//             item: "https://trueinternetspeedtest.com",
//           },
//         ],
//       },
//       {
//         "@type": "SoftwareApplication",
//         name: "trueinternetspeedtest Speed Test",
//         applicationCategory: "UtilitiesApplication",
//         operatingSystem: "Web",
//         offers: {
//           "@type": "Offer",
//           price: "0",
//           priceCurrency: "USD",
//         },
//         aggregateRating: {
//           "@type": "AggregateRating",
//           ratingValue: "4.8",
//           reviewCount: "12850",
//         },
//         description:
//           "Free global internet speed test tool to measure download speed, upload speed, ping and jitter.",
//       },
//     ],
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
//       />

//       {/* ================= HERO ================= */}
//       <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-slate-950 to-background">
//         <div className="max-w-5xl px-4 text-center">
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
//             <Globe className="w-3.5 h-3.5" />
//             Trusted by Users Worldwide
//           </div>

//           <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
//             Free Internet Speed Test
//           </h1>

//           <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
//             Test your download speed, upload speed, ping and jitter instantly.
//             Accurate broadband & 5G speed test for India, USA, UK and global
//             users.
//           </p>

//           <SpeedTestWidget />

//           <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-700 dark:text-white/70">
//             {[
//               "100% Free",
//               "No Signup Required",
//               "Global Servers",
//               "Secure & Private",
//             ].map((item) => (
//               <div
//                 key={item}
//                 className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 text-slate-800 dark:bg-white/10 dark:text-white/80"
//               >
//                 <CheckCircle className="w-4 h-4 text-green-500" />
//                 <span>{item}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= GLOBAL COMPARISON SECTION ================= */}
//       <section className="py-16 text-center">
//         <h2 className="text-3xl font-bold mb-6">
//           Compare Your Speed With Global Average
//         </h2>
//         <p className="text-muted-foreground max-w-3xl mx-auto mb-10">
//           See how your internet speed compares across major countries.
//         </p>

//         <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
//           {[
//             { country: "India", avg: "85 Mbps" },
//             { country: "USA", avg: "210 Mbps" },
//             { country: "UK", avg: "150 Mbps" },
//             { country: "Global Avg", avg: "140 Mbps" },
//           ].map((item) => (
//             <div key={item.country} className="p-6 border rounded-xl bg-card">
//               <h3 className="text-xl font-semibold mb-2">{item.country}</h3>
//               <p className="text-2xl font-bold text-blue-500">{item.avg}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= FEATURES ================= */}
//       <main className="max-w-7xl mx-auto px-4 py-14">
//         <section className="grid md:grid-cols-4 gap-6 mb-14">
//           <div className="p-5 border rounded-xl bg-card">
//             <Download className="w-6 h-6 mb-3 text-blue-500" />
//             <h3 className="font-bold mb-2">Download Speed</h3>
//             <p className="text-sm text-muted-foreground">
//               Measure how fast data downloads from the internet to your device.
//             </p>
//           </div>

//           <div className="p-5 border rounded-xl bg-card">
//             <Upload className="w-6 h-6 mb-3 text-indigo-500" />
//             <h3 className="font-bold mb-2">Upload Speed</h3>
//             <p className="text-sm text-muted-foreground">
//               Check how quickly you can upload files and stream online.
//             </p>
//           </div>

//           <div className="p-5 border rounded-xl bg-card">
//             <Activity className="w-6 h-6 mb-3 text-purple-500" />
//             <h3 className="font-bold mb-2">Ping & Jitter</h3>
//             <p className="text-sm text-muted-foreground">
//               Lower ping ensures smoother gaming and video calls.
//             </p>
//           </div>

//           <div className="p-5 border rounded-xl bg-card">
//             <ShieldCheck className="w-6 h-6 mb-3 text-green-500" />
//             <h3 className="font-bold mb-2">Secure Testing</h3>
//             <p className="text-sm text-muted-foreground">
//               We never store personal browsing data.
//             </p>
//           </div>
//         </section>

//         <AdPlaceholder size="leaderboard" />

//         <FAQSection
//           title="Internet Speed Test – FAQs"
//           faqs={[
//             {
//               question: "Is trueinternetspeedtest free?",
//               answer:
//                 "Yes. trueinternetspeedtest™ is completely free with no signup required.",
//             },
//             {
//               question: "Does this work for 5G and fiber?",
//               answer:
//                 "Yes. You can test 4G, 5G, WiFi, broadband and fiber connections.",
//             },
//             {
//               question: "Is this speed test accurate worldwide?",
//               answer:
//                 "Our global server network ensures reliable results across countries.",
//             },
//           ]}
//         />

//         <RelatedArticles
//           title="More Speed Guides"
//           articles={[
//             {
//               href: "/what-is-good-internet-speed",
//               title: "What Is a Good Internet Speed?",
//               description:
//                 "Learn what speeds you need for gaming, streaming and remote work.",
//             },
//             {
//               href: "/broadband-speed-test",
//               title: "Broadband Speed Test",
//               description: "Test broadband speed with accurate global servers.",
//             },
//             {
//               href: "/5g-speed-test",
//               title: "5G Speed Test",
//               description:
//                 "Check your 5G mobile internet performance instantly.",
//             },
//           ]}
//         />
//       </main>
//     </>
//   );
// }

// ///---------------------------------------------->
// //compare +new 5 site keyword analysis
// import type { Metadata } from "next";
// import { SpeedTestWidget } from "@/components/speed-test-widget";
// import { AdPlaceholder } from "@/components/ad-placeholder";
// import { FAQSection } from "@/components/faq-section";
// import { RelatedArticles } from "@/components/related-articles";
// import {
//   Download,
//   Upload,
//   Activity,
//   CheckCircle,
//   Globe,
//   ShieldCheck,
// } from "lucide-react";

// const SITE_URL = "https://trueinternetspeedtest.com";

// export const metadata: Metadata = {
//   title:
//     "Internet Speed Test (2026) – Check WiFi, 5G & Broadband Speed | TrueInternetSpeedTest™",
//   description:
//     "Free Internet Speed Test by trueinternetspeedtest™. Check download speed, upload speed, ping & jitter instantly. Accurate broadband, fiber & 5G speed test worldwide.",
//   keywords: [
//     "internet speed test",
//     "wifi speed test",
//     "check my internet speed",
//     "how fast is my internet",
//     "broadband speed test",
//     "fiber speed test",
//     "5g speed test",
//     "ping test",
//     "low latency test",
//     "internet speed test india",
//     "internet speed test usa",
//     "internet speed test uk",
//   ],
//   alternates: { canonical: SITE_URL },
//   metadataBase: new URL(SITE_URL),
//   openGraph: {
//     title: "trueinternetspeedtest™ – Free Global Internet Speed Test",
//     description:
//       "Test your internet speed instantly. Measure download, upload, ping & jitter worldwide.",
//     url: SITE_URL,
//     siteName: "trueinternetspeedtest",
//     images: [
//       {
//         url: "/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "trueinternetspeedtest Global Speed Test",
//       },
//     ],
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// export default function HomePage() {
//   const schema = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "Organization",
//         "@id": `${SITE_URL}#organization`,
//         name: "trueinternetspeedtest",
//         url: SITE_URL,
//         logo: `${SITE_URL}/logo.png`,
//       },
//       {
//         "@type": "WebSite",
//         "@id": `${SITE_URL}#website`,
//         url: SITE_URL,
//         name: "trueinternetspeedtest",
//         publisher: { "@id": `${SITE_URL}#organization` },
//         potentialAction: {
//           "@type": "SearchAction",
//           target: `${SITE_URL}/?q={search_term_string}`,
//           "query-input": "required name=search_term_string",
//         },
//       },
//       {
//         "@type": "WebApplication",
//         name: "trueinternetspeedtest Internet Speed Test Tool",
//         url: SITE_URL,
//         applicationCategory: "Utility",
//         operatingSystem: "All",
//         offers: {
//           "@type": "Offer",
//           price: "0",
//           priceCurrency: "USD",
//         },
//       },
//       {
//         "@type": "FAQPage",
//         mainEntity: [
//           {
//             "@type": "Question",
//             name: "Is trueinternetspeedtest free?",
//             acceptedAnswer: {
//               "@type": "Answer",
//               text: "Yes. trueinternetspeedtest™ is completely free with no signup required.",
//             },
//           },
//           {
//             "@type": "Question",
//             name: "Does this speed test work for 5G and fiber?",
//             acceptedAnswer: {
//               "@type": "Answer",
//               text: "Yes. You can test broadband, WiFi, 4G, 5G and fiber internet connections.",
//             },
//           },
//           {
//             "@type": "Question",
//             name: "What is a good internet speed?",
//             acceptedAnswer: {
//               "@type": "Answer",
//               text: "For streaming and gaming, 25 Mbps or higher is recommended. Lower latency under 30ms ensures better performance.",
//             },
//           },
//         ],
//       },
//     ],
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
//       />

//       <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-slate-950 to-background">
//         <div className="max-w-5xl px-4 text-center">
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
//             <Globe className="w-3.5 h-3.5" />
//             Trusted Global Internet Speed Test
//           </div>

//           <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
//             Free Internet Speed Test – Check Your WiFi Speed Instantly
//           </h1>

//           <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
//             Measure download speed, upload speed, ping and jitter in seconds.
//             Accurate broadband, fiber and 5G speed test for India, USA, UK and
//             worldwide users.
//           </p>

//           <SpeedTestWidget />

//           <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-700 dark:text-white/70">
//             {[
//               "100% Free",
//               "No Signup Required",
//               "Secure & Private",
//               "Global Coverage",
//             ].map((item) => (
//               <div
//                 key={item}
//                 className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/10"
//               >
//                 <CheckCircle className="w-4 h-4 text-green-500" />
//                 <span>{item}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <main className="max-w-7xl mx-auto px-4 py-14">
//         <section className="grid md:grid-cols-3 gap-6 mb-14">
//           <div className="p-5 border rounded-xl bg-card">
//             <Download className="w-6 h-6 mb-3 text-blue-500" />
//             <h3 className="font-bold mb-2">Download Speed Test</h3>
//             <p className="text-sm text-muted-foreground">
//               Check how fast your internet downloads data.
//             </p>
//           </div>

//           <div className="p-5 border rounded-xl bg-card">
//             <Upload className="w-6 h-6 mb-3 text-indigo-500" />
//             <h3 className="font-bold mb-2">Upload Speed Test</h3>
//             <p className="text-sm text-muted-foreground">
//               Measure upload performance for streaming and video calls.
//             </p>
//           </div>

//           <div className="p-5 border rounded-xl bg-card">
//             <Activity className="w-6 h-6 mb-3 text-purple-500" />
//             <h3 className="font-bold mb-2">Ping & Latency Test</h3>
//             <p className="text-sm text-muted-foreground">
//               Lower ping means smoother gaming and real-time performance.
//             </p>
//           </div>
//         </section>

//         <AdPlaceholder size="leaderboard" />

//         <FAQSection
//           title="Internet Speed Test FAQs"
//           faqs={[
//             {
//               question: "How can I check my internet speed?",
//               answer:
//                 "Click start on the trueinternetspeedtest tool to instantly measure download speed, upload speed and ping.",
//             },
//             {
//               question: "What is a good speed for streaming?",
//               answer:
//                 "HD streaming requires 5 Mbps, while 4K streaming needs at least 25 Mbps.",
//             },
//             {
//               question: "Why is my internet slow?",
//               answer:
//                 "Slow internet may be caused by WiFi interference, ISP congestion, background downloads or outdated hardware.",
//             },
//           ]}
//         />

//         <RelatedArticles
//           title="More Internet Speed Guides"
//           articles={[
//             {
//               href: "/what-is-good-internet-speed",
//               title: "What Is a Good Internet Speed?",
//               description: "Learn ideal speeds for gaming, streaming and work.",
//             },
//             {
//               href: "/how-to-increase-wifi-speed",
//               title: "How to Increase WiFi Speed",
//               description: "Fix slow internet and reduce lag.",
//             },
//           ]}
//         />
//       </main>
//     </>
//   );
// }


//------------------------------->
///---------------------------------------------->
// compare +new 5 site keyword analysis
import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";

import { AdPlaceholder } from "@/components/ad-placeholder";
import { FAQSection } from "@/components/faq-section";
import { RelatedArticles } from "@/components/related-articles";
import {
  Download,
  Upload,
  Activity,
  CheckCircle,
  Globe,
} from "lucide-react";

const SITE_URL = "https://trueinternetspeedtest.com";

export const metadata: Metadata = {
  title: "Free Internet Speed Test",
  description:
    "Free Internet Speed Test. Check WiFi, broadband and 5G speed instantly. Measure download, upload, ping and jitter for gaming, streaming and browsing worldwide.",
  keywords: [
    "internet speed test",
    "wifi speed test",
    "check my internet speed",
    "how fast is my internet",
    "broadband speed test",
    "fiber speed test",
    "5g speed test",
    "ping test",
    "low latency test",
    "internet speed test india",
    "internet speed test usa",
    "internet speed test uk",
  ],
  alternates: { canonical: SITE_URL },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "trueinternetspeedtest™ – Free Global Internet Speed Test",
    description:
      "Test your internet speed instantly. Measure download, upload, ping & jitter worldwide.",
    url: SITE_URL,
    siteName: "trueinternetspeedtest",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "trueinternetspeedtest Global Speed Test",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        name: "trueinternetspeedtest",
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: "trueinternetspeedtest",
        publisher: { "@id": `${SITE_URL}#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}#webpage`,
        url: SITE_URL,
        name: "Internet Speed Test – Check WiFi Speed Instantly",
        description:
          "Test your internet speed instantly. Measure download speed, upload speed, ping and jitter worldwide.",
        isPartOf: {
          "@id": `${SITE_URL}#website`,
        },
      },
      {
        "@type": "WebApplication",
        name: "trueinternetspeedtest Internet Speed Test Tool",
        url: SITE_URL,
        applicationCategory: "Utility",
        operatingSystem: "All",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is trueinternetspeedtest free?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. trueinternetspeedtest™ is completely free with no signup required.",
            },
          },
          {
            "@type": "Question",
            name: "Does this speed test work for 5G and fiber?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. You can test broadband, WiFi, 4G, 5G and fiber internet connections.",
            },
          },
          {
            "@type": "Question",
            name: "What is a good internet speed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For streaming and gaming, 25 Mbps or higher is recommended. Lower latency under 30ms ensures better performance.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-b from-slate-950 to-background">
        <div className="max-w-5xl px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
            <Globe className="w-3.5 h-3.5" />
            Trusted Global Internet Speed Test
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Free Internet Speed Test
          </h1>

          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
            Measure download speed, upload speed, ping and jitter in seconds.
            Accurate broadband, fiber and 5G speed test for India, USA, UK and
            worldwide users.
          </p>

          <SpeedTestWidget />

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-700 dark:text-white/70">
            {[
              "100% Free",
              "No Signup Required",
              "Secure & Private",
              "Global Coverage",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/10"
              >
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-14">
        <section className="grid md:grid-cols-3 gap-6 mb-14">
          <div className="p-5 border rounded-xl bg-card">
            <Download className="w-6 h-6 mb-3 text-blue-500" />
            <h3 className="font-bold mb-2">Download Speed Test</h3>
            <p className="text-sm text-muted-foreground">
              Check how fast your internet downloads data.
            </p>
          </div>

          <div className="p-5 border rounded-xl bg-card">
            <Upload className="w-6 h-6 mb-3 text-indigo-500" />
            <h3 className="font-bold mb-2">Upload Speed Test</h3>
            <p className="text-sm text-muted-foreground">
              Measure upload performance for streaming and video calls.
            </p>
          </div>

          <div className="p-5 border rounded-xl bg-card">
            <Activity className="w-6 h-6 mb-3 text-purple-500" />
            <h3 className="font-bold mb-2">Ping & Latency Test</h3>
            <p className="text-sm text-muted-foreground">
              Lower ping means smoother gaming and real-time performance.
            </p>
          </div>
        </section>

        <AdPlaceholder size="leaderboard" />

        <FAQSection
          title="Internet Speed Test FAQs"
          faqs={[
            {
              question: "How can I check my internet speed?",
              answer:
                "Click start on the trueinternetspeedtest tool to instantly measure download speed, upload speed and ping.",
            },
            {
              question: "What is a good speed for streaming?",
              answer:
                "HD streaming requires 5 Mbps, while 4K streaming needs at least 25 Mbps.",
            },
            {
              question: "Why is my internet slow?",
              answer:
                "Slow internet may be caused by WiFi interference, ISP congestion, background downloads or outdated hardware.",
            },
          ]}
        />

        <RelatedArticles
          title="More Internet Speed Guides"
          articles={[
            {
              href: "/what-is-good-internet-speed",
              title: "What Is a Good Internet Speed?",
              description: "Learn ideal speeds for gaming, streaming and work.",
            },
            {
              href: "/how-to-increase-wifi-speed",
              title: "How to Increase WiFi Speed",
              description: "Fix slow internet and reduce lag.",
            },
          ]}
        />
      </main>
    </>
  );
}
