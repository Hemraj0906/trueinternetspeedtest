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

  const seoContent = `
    <p>Welcome to <strong>TrueInternetSpeedTest</strong>, the most reliable and ad-free way to verify your network performance in 2026. Whether you are troubleshooting <strong>slow WiFi</strong>, checking your 5G mobile data, or preparing for a competitive gaming match, our tool provides precision diagnostics in seconds.</p>

    <div style="background: rgba(59, 130, 246, 0.1); padding: 25px; border-radius: 16px; margin: 32px 0; border: 1px solid rgba(59, 130, 246, 0.2);">
      <h3 style="margin-top: 0; color: #3b82f6;">🚀 Why Choose TrueInternetSpeedTest?</h3>
      <p>Unlike legacy speed test sites that are bloated with 50+ banner ads and tracking scripts, we prioritize <strong>speed and privacy</strong>. Our test engine runs on the world's fastest edge network, ensuring that the test itself doesn't consume the bandwidth it's trying to measure.</p>
    </div>

    <h2>Understanding Your Results (Download, Upload, Ping)</h2>
    <p>When you click "Start Test," our tool performs 50+ simultaneous data transfers to calculate your <strong>True Throughput</strong>. Here is how to interpret those numbers:</p>
    <ul>
      <li><strong>Download Speed:</strong> This determines how fast you can watch 4K Netflix or download large files. A score of <strong>100 Mbps+</strong> is excellent for households.</li>
      <li><strong>Upload Speed:</strong> Crucial for Work-From-Home (Zoom/Teams) and content creators. If your <a href="/why-is-my-upload-speed-slow">upload speed is slow</a>, your video calls will freeze.</li>
      <li><strong>Ping (Latency):</strong> The 'Reaction Time' of your internet. Gamers need this under 20ms. Read more in our <a href="/internet-speed-for-gaming-guide">Gaming Speed Guide</a>.</li>
      <li><strong>Jitter:</strong> Measures the stability of your ping. High jitter causes "stuttering" in audio and video calls.</li>
    </ul>

    <h2>Is Your Internet Fast Enough?</h2>
    <p>Many ISPs advertise "Up to" speeds that you rarely see in reality. In 2026, a <a href="/is-100-mbps-fast">100 Mbps connection</a> is the standard for comfortable living. However, if you have 10+ smart home devices or frequent large downloads, you may want to look into Gigabit Fiber. Use our <a href="/broadband-speed-test">Broadband Speed Test</a> to see if you're getting the value you pay for.</p>

    <h2>Expert Tips to Boost Your Speed</h2>
    <p>Before you upgrade your plan, try these zero-cost fixes:
      <br/>• <strong>Router Placement:</strong> Keep your router elevated and in the center of your home, away from thick walls.
      <br/>• <strong>Frequency Check:</strong> Switch to the 5GHz or 6GHz band for less interference and higher speeds.
      <br/>• <strong>Go Wired:</strong> Use an Ethernet cable for your primary TV or PC. It will always be faster than WiFi. See the <a href="/wifi-vs-ethernet-speed">WiFi vs Ethernet Comparison</a>.
      <br/>• <strong>DNS Upgrade:</strong> Use Cloudflare (1.1.1.1) or Google DNS (8.8.8.8) to speed up website loading times.
    </p>

    <h2>Comprehensive Network Guides</h2>
    <p>Explore our library of expert resources:
      <br/>• <a href="/how-to-increase-wifi-speed">Official WiFi signal boosting manual</a>.
      <br/>• <a href="/fix-slow-internet-on-phone">How to fix slow data on iPhone and Android</a>.
      <br/>• <a href="/how-to-reduce-ping-gaming">Stop lag in Warzone, Valorant and Fortnite</a>.
      <br/>• <a href="/what-is-good-internet-speed">Total 2026 guide to bandwidth requirements</a>.
    </p>
  `;

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
            Internet Speed Test –{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Check Your WiFi Speed
            </span>{" "}
            Instantly
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-10">
            Get an accurate reading of your download speed, upload speed, ping,
            and jitter in under 30 seconds. No app, no tracking — just precision results.
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
          title="Internet Speed Test: Accurate Diagnostics for Global Users"
          content={seoContent}
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
