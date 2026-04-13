import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Gamepad2, Globe, Zap, Timer } from "lucide-react";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
  title: "Gaming Speed Test Online – Check Ping, Jitter & Gaming Lag",
  description: "Test your internet speed for gaming. Check ping, jitter, and latency for Fortnite, Valorant, PUBG, and Warzone. Expert tips to reduce gaming lag and lower ping.",
  alternates: {
    canonical: "https://trueinternetspeedtest.com/gaming-speed-test",
  },
  keywords: [
    "gaming speed test online",
    "check ping for gaming",
    "fortnite ping test",
    "valorant latency test",
    "reduce gaming lag tips",
    "best gaming internet speed 2026",
  ],
};

export default function GamingSpeedTestPage() {
  const faqs = [
    {
      question: "What is a 'Perfect' ping for competitive gaming?",
      answer: "In a professional setting, anything under 15ms is considered perfect. For casual competitive play, under 40ms is standard. Once you exceed 80ms, you will notice a significant disadvantage against faster players."
    },
    {
      question: "Can I use WiFi for professional gaming in 2026?",
      answer: "While WiFi 7 (802.11be) offers impressive speeds and Lower Latency (MLO), it is still susceptible to external interference. For the absolute lowest jitter and zero packet loss, a physical Ethernet cable remains the gold standard."
    },
    {
      question: "How does upload speed affect my gaming performance?",
      answer: "Upload speed is critical in multiplayer games because your PC is constantly 'uploading' your character's position and actions to the server. If your upload is throttled (under 2 Mbps), your movements will appear jerky to other players."
    },
    {
      question: "Does 'Gaming VPN' actually work?",
      answer: "A VPN can only lower your ping if your ISP has poor routing to the game server. By using a VPN, you might find a more direct path. However, for 90% of users, a VPN will actually increase ping because it adds another server 'hop'."
    },
    {
      question: "What should I do if my jitter is over 10ms?",
      answer: "High jitter is usually caused by network congestion or a failing router. Try restarting your modem, switching to a wired connection, and ensuring no other large downloads are active on your network."
    },
    {
      question: "Is fiber internet better than cable for gaming?",
      answer: "Yes. Fiber optics use light to transmit data, which inherently has lower latency than the electrical signals used in traditional copper/coaxial cable. Fiber also offers symmetrical speeds (same upload/download), which is great for streamers."
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="relative py-20 bg-gradient-to-b from-purple-950/20 to-background overflow-hidden text-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: "Gaming Speed Test" }]} />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Gaming Speed Test – Analyze <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Ping & Jitter</span>
          </h1>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-8">
            <Gamepad2 className="w-3.5 h-3.5" />
            Accuracy Verified for 2026 Competitive Play
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Test your network performance for Valorant, Fortnite, and Warzone. Get millisecond-precision ping results from our global gaming-edge servers.
          </p>

          <SpeedTestWidget />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <section className="w-full mt-16 md:mt-24 pt-12 border-t border-border/40 pb-20">
              <div className="max-w-4xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground leading-tight">
                  Gamer's Guide: Optimizing for Zero Lag and Low Latency
                </h2>

                <div className="prose dark:prose-invert prose-purple max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-purple-500 hover:prose-a:text-purple-400">
                  <p>Are you experiencing <strong>high ping</strong> in your favorite online matches? Whether you're a Fortnite pro, a Valorant strategist, or a CoD veteran, our <strong>Gaming Speed Test</strong> is designed specifically for competitive players. We don't just measure raw bandwidth; we analyze the metrics that actually determine your rank: <strong>ping</strong>, <strong>jitter</strong>, and <strong>packet loss</strong>.</p>

                  <div style={{ background: "rgba(147, 51, 234, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(147, 51, 234, 0.2)" }}>
                    <h3 style={{ marginTop: 0, color: "#a855f7" }}>🎮 The eSports Standard 2026:</h3>
                    <p>In the world of professional eSports, <strong>Ping is King</strong>. While most users focus on download speed, competitive gamers know that a 1 Gbps connection is useless if your ping is over 100ms. The industry standard for "Low Latency" is now under 15ms.</p>
                  </div>

                  <h2>Top Gaming Metrics: Why They Matter</h2>
                  <ul>
                    <li><strong>Ping (Latency):</strong> The 'Round Trip Time' (RTT) of a data packet. A duel is won by the player whose click registers first.</li>
                    <li><strong>Jitter:</strong> Consistency of your latency. High jitter (ping spikes) makes enemies "teleport" or "rubber-band."</li>
                    <li><strong>Packet Loss:</strong> The "Silent Killer." 1% loss causes ghost bullets; 5% makes matches unplayable.</li>
                  </ul>

                  <h2>How to Lower Your Ping Instantly</h2>
                  <ol>
                    <li><strong>Use Ethernet:</strong> Single most important step. Bypasses WiFi signal interference.</li>
                    <li><strong>Optimize DNS:</strong> Switching to 1.1.1.1 (Cloudflare) can shave 5-10ms off route resolution.</li>
                    <li><strong>Enable Game Mode:</strong> Prevents background Windows Updates from stealing your bandwidth.</li>
                  </ol>
                </div>
                <FAQSection faqs={faqs} />
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
            <SocialShare 
              title="I just tested my gaming ping and it's perfect! Check your network performance for free here:" 
            />
            <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
              <h3 className="font-bold mb-4">Pro Gaming Accuracy</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Most general speed tests connect to a single web server. Our tool connects to specialized eSports-ready nodes, mimicking the exact network path of your favorite competitive titles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


