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

import { SocialShare } from "@/components/social-share";

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

      <main>
        <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a1f] via-[#0d0d2b] to-background pt-16">
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Internet Speed Test – Check Your WiFi Speed Instantly
            </h1>
            
            <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Real-World Connection Accuracy Verified for 2026
            </div>

            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
              Get an accurate reading of your download speed, upload speed, ping,
              and jitter in under 30 seconds. Powered by global edge networks for precision results.
            </p>

            <SpeedTestWidget />

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
              {[
                "100% Free Service",
                "Privacy First",
                "Edge Infrastructure",
                "Gaming Diagnostic",
                "SSL Encrypted",
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <section className="w-full mt-16 md:mt-24 pt-12 border-t border-border/40 pb-20">
                <div className="max-w-4xl">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground leading-tight">
                    Internet Speed Test: Comprehensive Network Diagnostics for 2026
                  </h2>

                  <div className="prose dark:prose-invert prose-blue max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-blue-500 hover:prose-a:text-blue-400">
                    <p>Welcome to <strong>TrueInternetSpeedTest</strong>, the most reliable and privacy-focused platform to verify your network performance. In an era where <strong>high-speed internet</strong> is the backbone of remote work, 4K streaming, and competitive gaming, having an accurate diagnostic tool is essential. Our engine is designed to provide real-time data on your <strong>download speed</strong>, <strong>upload speed</strong>, <strong>ping</strong>, and <strong>jitter</strong> without the bloat of intrusive ads or tracking scripts.</p>

                    <div style={{ background: "rgba(59, 130, 246, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(59, 130, 246, 0.2)" }}>
                      <h3 style={{ marginTop: 0, color: "#3b82f6" }}>🚀 The Technology Behind Our Accuracy</h3>
                      <p>Unlike standard speed tests that connect you to a single local server, TrueInternetSpeedTest utilizes a sophisticated <strong>Multi-CDN Edge infrastructure</strong>. By leveraging the <a href="https://www.cloudflare.com/learning/cdn/what-is-a-cdn/" target="_blank" rel="noopener noreferrer">Cloudflare Edge Network</a> and <a href="https://www.measurementlab.net/" target="_blank" rel="noopener noreferrer">M-Lab (Measurement Lab)</a> servers, we ensure that your test packets take the shortest possible path. This eliminates "artificial" latency and provides a true reflection of how your ISP performs when accessing global content.</p>
                    </div>

                    <h2>How to Interpret Your Speed Test Results</h2>
                    <p>When you initiate a test, our system performs dozens of simultaneous data transfers (chunks) to saturate your connection and find its maximum capacity. Each metric tells a story about your <strong>network health</strong>:</p>
                    <ul>
                      <li><strong>Download Speed:</strong> The rate data travels from the web to your device. Affects <strong>4K UHD streaming</strong> and game downloads. In 2026, 100 Mbps is the gold standard for households.</li>
                      <li><strong>Upload Speed:</strong> Affects video calls (Zoom/Teams) and cloud backups. Ideally, it should be 20% of your download speed. Check our guide on <a href="/why-is-my-upload-speed-slow">troubleshooting slow upload speeds</a>.</li>
                      <li><strong>Ping (Latency):</strong> The response time of your connection. Crucial for <strong>online gaming</strong>. Under 20ms is elite. Read more in our <a href="/internet-speed-for-gaming-guide">latency optimization guide</a>.</li>
                      <li><strong>Jitter:</strong> Consistency of your ping. High jitter causes "lag spikes" even on fast connections.</li>
                    </ul>

                    <h2>Is Your ISP Throttling Your Connection?</h2>
                    <p>Many providers use "Traffic Shaping" during peak hours (7 PM to 11 PM). If your <a href="/broadband-speed-test">home broadband test</a> fluctuates wildly, your ISP might be limiting your bandwidth. Regular testing helps you build a performance log to challenge "Up to" speed claims from your provider.</p>

                    <h2>Optimizing Your WiFi for Maximum Velocity</h2>
                    <p>Before buying new hardware, try these free signal optimization steps:</p>
                    <ol>
                      <li><strong>Use the 5GHz/6GHz Band:</strong> Far less interference than the old 2.4GHz band. 3x faster speeds in close range.</li>
                      <li><strong>Check Your Ethernet Cables:</strong> Ensure you aren't using an old Cat5 cable that caps you at 100 Mbps. Use Cat6 for <strong>Gigabit internet</strong>.</li>
                      <li><strong>Centralize Your Router:</strong> Elevate your router and keep it away from thick walls for a cleaner <strong>WiFi signal</strong>.</li>
                    </ol>

                    <h2>Future-Proofing Your Home Network</h2>
                    <p>As we head further into 2026, the bandwidth demand from AI, VR, and 8K video is skyrocketing. A "fast" connection from 2020 might feel slow today. With 20+ average connected devices per household, ensuring your <strong>mobile data</strong> and home fiber are performing at the highest levels is critical for a smooth digital life.</p>
                  </div>

                  <FAQSection faqs={homepageFaqs} />
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
              <SocialShare 
                title="I just checked my internet speed! It's fast and easy. Try it here:" 
              />
              <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
                <h3 className="font-bold mb-4">Why Freshness Matters</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Network conditions change hourly. We updated our testing engine in 2026 to account for modern peering agreements between global ISPs and cloud providers.
                </p>
              </div>
            </div>
          </div>

          <div className="py-14 border-t border-border/40">
            <RelatedArticles
              articles={relatedArticles}
              title="Expert Speed Testing Guides"
            />
          </div>
        </div>
      </main>
    </>
  );
}
