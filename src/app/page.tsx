import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { RelatedArticles } from "@/components/related-articles";
import { SeoContentSection } from "@/components/seo-content-section";
import {
  Download,
  Upload,
  Activity,
  TrendingUp,
  CheckCircle,
  Gamepad2,
  Tv,
  Wifi,
  ShieldCheck,
  Zap,
  Globe,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Internet Speed Test – Check Your WiFi Speed Instantly",
  description: "Check your internet speed instantly with TrueInternetSpeedTest. Get accurate download, upload, ping, and jitter results. Free broadband and mobile speed test.",
  keywords: [
    "internet speed test",
    "wifi speed test",
    "check internet speed",
    "speed test online",
    "broadband speed test",
    "download speed test",
    "upload speed test",
    "ping test online",
    "accurate speed test 2026",
  ],
  alternates: {
    canonical: "https://trueinternetspeedtest.com",
  },
  openGraph: {
    title: "Internet Speed Test – Check Your WiFi Speed Instantly",
    description: "Free online internet speed test. Check download, upload, ping, jitter and ISP instantly.",
    url: "https://trueinternetspeedtest.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const homepageFaqs = [
  {
    question: "How accurate is this internet speed test?",
    answer: "Our tool utilizes a worldwide network of 100Gbps edge servers powered by Cloudflare and M-Lab. This ensures that you get a 'Real-World' measurement of your connection speed, bypassing ISP-level throttling and prioritization common with legacy speed test sites."
  },
  {
    question: "What is a good internet speed in 2026?",
    answer: "For a modern household, 100-200 Mbps is considered 'Good.' It supports multiple 4K streams and remote work simultaneously. For competitive gaming, raw Mbps matters less than having a Ping under 20ms and Jitter under 5ms."
  },
  {
    question: "Why is my speed test result lower than what I pay for?",
    answer: "Discrepancies are usually caused by WiFi interference, old router hardware, or background data usage. To see your true ISP performance, always test with a wired Ethernet cable and pause all active downloads."
  },
  {
    question: "Do I need to install an app to test my speed?",
    answer: "No. Our speed test is 100% browser-based and optimized for both mobile (iOS/Android) and desktop. It uses HTML5 technology, meaning no Flash or external plugins are required for a precise result."
  },
  {
    question: "What is the difference between Download and Upload speed?",
    answer: "Download speed is how fast you receive data (streaming, browsing), while Upload speed is how fast you send it (Zoom calls, gaming, cloud backups). Most non-fiber plans have significantly slower upload speeds."
  }
];

const relatedArticles = [
  {
    href: "/gaming-speed-test",
    title: "Gaming Speed Test",
    description: "Test ping, jitter, and packet loss for competitive gaming rank-ups.",
  },
  {
    href: "/broadband-speed-test",
    title: "Broadband Speed Test",
    description: "Verify your home fiber or cable connection against ISP promises.",
  },
  {
    href: "/mobile-speed-test",
    title: "Mobile Speed Test",
    description: "Check your 4G, 5G, or LTE mobile data performance on the go.",
  },
  {
    href: "/how-to-increase-wifi-speed",
    title: "Increase WiFi Speed",
    description: "15 expert tips to boost your signal and eliminate dead zones.",
  },
  {
    href: "/why-is-my-internet-slow",
    title: "Troubleshoot Slowness",
    description: "Find out why your internet is sluggish and how to fix it instantly.",
  },
  {
    href: "/best-free-speed-test-tools-2026",
    title: "Best Speed Test Tools",
    description: "Compare the most accurate speed checking platforms of 2026.",
  },
];

export default function HomePage() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TrueInternetSpeedTest",
    url: "https://trueinternetspeedtest.com",
    description: "Free browser-based internet speed test tool.",
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TrueInternetSpeedTest",
    "operatingSystem": "All",
    "applicationCategory": "UtilitiesApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "12500"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };



  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a1f] via-[#0d0d2b] to-background">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute inset-0 bg-gradient-radial from-blue-600/20 via-transparent to-transparent pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(59,130,246,0.15) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Accuracy Verified for 2026
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Internet Speed Test – Check Your WiFi Speed Instantly
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
            Get an accurate reading of your download speed, upload speed, ping,
            and jitter in under 30 seconds. Powered by global edge networks for precision results.
          </p>

          <SpeedTestWidget />

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            {[
              "100% Free",
              "Privacy Focused",
              "Multi-CDN Edge",
              "Gaming Metrics",
              "HTTPS Secure",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SeoContentSection
          title="Internet Speed Test: Comprehensive Network Diagnostics for 2026"
          content={`
            <p>Welcome to <strong>TrueInternetSpeedTest</strong>, the most reliable and privacy-focused platform to verify your network performance. In an era where <strong>high-speed internet</strong> is the backbone of remote work, 4K streaming, and competitive gaming, having an accurate diagnostic tool is essential. Our engine is designed to provide real-time data on your <strong>download speed</strong>, <strong>upload speed</strong>, <strong>ping</strong>, and <strong>jitter</strong> without the bloat of intrusive ads or tracking scripts.</p>

            <div style="background: rgba(59, 130, 246, 0.1); padding: 25px; border-radius: 16px; margin: 32px 0; border: 1px solid rgba(59, 130, 246, 0.2);">
              <h3 style="margin-top: 0; color: #3b82f6;">🚀 The Technology Behind Our Accuracy</h3>
              <p>Unlike standard speed tests that connect you to a single local server, TrueInternetSpeedTest utilizes a sophisticated <strong>Multi-CDN Edge infrastructure</strong>. By leveraging the <a href="https://www.cloudflare.com/learning/cdn/what-is-a-cdn/" target="_blank" rel="noopener noreferrer">Cloudflare Edge Network</a> and <a href="https://www.measurementlab.net/" target="_blank" rel="noopener noreferrer">M-Lab (Measurement Lab)</a> servers, we ensure that your test packets take the shortest possible path. This eliminates "artificial" latency and provides a true reflection of how your ISP performs when accessing global content.</p>
            </div>

            <h2>How to Interpret Your Speed Test Results</h2>
            <p>When you initiate a test, our system performs dozens of simultaneous data transfers (chunks) to saturate your connection and find its maximum capacity. Here is what each metric means for your daily internet usage:</p>
            <ul>
              <li><strong>Download Speed:</strong> The rate at which data travels from the internet to your device. This affects how quickly you can watch <strong>4K UHD videos</strong>, download multi-gigabyte games, or load image-heavy websites. In 2026, a <a href="/is-100-mbps-fast">100 Mbps connection</a> is considered the baseline for a modern family.</li>
              <li><strong>Upload Speed:</strong> Essential for sending data to the cloud. If you are a content creator on YouTube/Twitch, or frequently use Zoom and Microsoft Teams for work, your upload speed should ideally be at least 20% of your download speed. Check out our guide on <a href="/why-is-my-upload-speed-slow">why upload speeds are often slower</a>.</li>
              <li><strong>Ping (Latency):</strong> Measured in milliseconds (ms), this is the delay between your action and the server's response. For competitive gaming in titles like <em>Valorant</em> or <em>Call of Duty</em>, a ping under 20ms is the "Gold Standard." Read more in our <a href="/internet-speed-for-gaming-guide">Gaming Response Guide</a>.</li>
              <li><strong>Jitter:</strong> This measures the variance in your ping over time. High jitter (above 10ms) causes "stuttering" in voice calls and "rubber-banding" in online games, even if your raw speed is high.</li>
            </ul>

            <h2>Is Your ISP Throttling Your Connection?</h2>
            <p>Many Internet Service Providers (ISPs) use a technique called "Traffic Shaping" or "Throttling" to limit bandwidth during peak hours (usually 7 PM to 11 PM). If you notice that your <a href="/broadband-speed-test">Broadband Speed Test</a> results are significantly lower during these times, your provider may be limiting your connection. Running a speed test regularly helps you build a log of performance to hold your ISP accountable to their advertised "Up to" speeds.</p>

            <h2>Optimizing Your WiFi for Maximum Velocity</h2>
            <p>If your results are lower than expected, the issue might be internal. Before calling your ISP, try these expert optimization steps:</p>
            <ol>
              <li><strong>Switch to 5GHz or 6GHz:</strong> The 2.4GHz band is crowded with interference from microwaves and neighboring routers. If you're close to your router, always use the 5GHz band for 3x faster speeds.</li>
              <li><strong>Check for Hardware Bottlenecks:</strong> An old Cat5 cable (non-E) or an outdated router can limit even a Gigabit fiber connection to 100 Mbps. Ensure you are using <a href="/wifi-vs-ethernet-speed">Ethernet for critical tasks</a>.</li>
              <li><strong>Router Placement:</strong> Walls and large appliances are signal killers. Place your router in an open, elevated area to eliminate "dead zones." See our <a href="/how-to-increase-wifi-speed">Official WiFi Booster Manual</a> for more.</li>
            </ol>

            <h2>Why Broadband Quality Matters in 2026</h2>
            <p>As we move further into 2026, the demand for bandwidth is exploding. With the rise of AI-integrated applications, high-fidelity VR (Virtual Reality), and 8K streaming services, a "fast" connection from 2020 may no longer be sufficient. Modern households now average 20+ connected devices, from smart fridges to security cameras, all competing for the same bandwidth. Testing your <a href="/mobile-speed-test">Mobile Speed</a> and home network ensures you're prepared for the future of the digital world.</p>

            <h2>Trusted Resources & Technical Guides</h2>
            <p>Our mission is to help you master your connection. Explore our most popular network troubleshooting guides:
              <br/>• <a href="/why-is-my-internet-slow">Total Guide to Fixing Sluggish Internet</a>.
              <br/>• <a href="/fix-slow-internet-on-phone">Pro tips for iPhone and Android Data Speed</a>.
              <br/>• <a href="/how-to-reduce-ping-gaming">Stop Lag and Packet Loss Forever</a>.
              <br/>• <a href="/what-is-good-internet-speed">How Many Mbps Do You Actually Need?</a>.
            </p>
          `}
          faqs={homepageFaqs}
        />

        <div className="py-14 border-t border-border/40">
          <RelatedArticles
            articles={relatedArticles}
            title="Premium Speed Test Tools & Guides"
          />
        </div>
      </div>
    </>
  );
}
