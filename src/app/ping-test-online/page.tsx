import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Activity, Globe, Zap, Timer } from "lucide-react";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
    title: "Ping Test Online – Check Your Latency & Jitter Free",
    description: "Run a free ping test online to check your network latency, jitter, and packet loss. Essential for gaming, video calls, and diagnosing slow connections.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/ping-test-online",
    },
    keywords: [
        "ping test online",
        "latency test",
        "ms ping test",
        "network latency check",
        "jitter test online",
        "packet loss test",
    ],
};

export default function PingTestOnlinePage() {
    const faqs = [
        {
            question: "What is a normal ping for home internet?",
            answer: "A typical home broadband connection pings between 10–50ms to nearby servers. Fiber connections often achieve under 5ms ping, while 4G mobile connections average 30–60ms."
        },
        {
            question: "Does high ping affect video streaming?",
            answer: "For streaming services like Netflix or YouTube, ping has almost no visible impact because content is heavily buffered. Ping matters most for real-time applications: gaming, video calls (Zoom, Teams, Google Meet), and online trading platforms."
        },
        {
            question: "Why does my ping spike randomly?",
            answer: "Random ping spikes are usually caused by background network activity (downloads, updates), WiFi interference from neighboring networks, or ISP-side congestion. Running the test after disabling background apps narrows down the cause quickly."
        },
        {
            question: "Can a VPN improve my ping?",
            answer: "In most cases, a VPN increases ping because data takes a longer, encrypted path. However, in rare cases where an ISP is routing traffic inefficiently, a VPN can actually improve ping by using a better routing path. Test both with and without VPN to compare."
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-violet-950/20 to-background overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <Breadcrumb items={[{ label: "Ping Test Online" }]} />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        Ping Test Online – <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Check Latency</span> Now
                    </h1>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium mb-8">
                        <Timer className="w-3.5 h-3.5 text-violet-400" />
                        Millisecond Precision Diagnostics
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Measure your network ping, jitter, and latency in real time. Find out if lag is ruining your gaming, video calls, or professional work.
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
                                    Complete Guide to Ping, Latency & Jitter
                                </h2>

                                <div className="prose dark:prose-invert prose-violet max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-violet-500 hover:prose-a:text-violet-400">
                                    <h3>What Is Ping and Why Does It Matter?</h3>
                                    <p>You've probably heard the word "ping" tossed around in gaming discussions or during video calls. But what exactly is it? <strong>Ping (measured in milliseconds, or ms)</strong> is the time it takes for a data packet to travel from your device to a server and come back. Think of it as your connection's reaction time.</p>
                                    <p>A lower ping means faster responses. A higher ping means lag, delayed button clicks in games, and choppy video calls.</p>

                                    <div style={{ background: "rgba(139, 92, 246, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(139, 92, 246, 0.2)" }}>
                                        <h3 style={{ marginTop: 0, color: "#8b5cf6" }}>🎮 Gaming Fact:</h3>
                                        <p>Professional esports players generally require a ping of <strong>under 20ms</strong> to stay competitive. Anything above 100ms creates a visible disadvantage in fast-paced games like Valorant or Apex Legends.</p>
                                    </div>

                                    <h2>What Is a Good Ping?</h2>
                                    <p>Ping quality depends entirely on what you are doing online. Here's a practical breakdown:</p>
                                    <ul>
                                      <li><strong>Under 20ms – Excellent:</strong> Near-perfect for competitive gaming and 4K video calls.</li>
                                      <li><strong>20–50ms – Good:</strong> Smooth experience for most activities.</li>
                                      <li><strong>50–100ms – Acceptable:</strong> Fine for basic streaming and browsing.</li>
                                      <li><strong>Above 200ms – Bad:</strong> Severe lag, often caused by routing issues.</li>
                                    </ul>

                                    <h2>What Is Jitter?</h2>
                                    <p>Jitter is the <em>consistency</em> of your ping. If your ping jumps from 15ms to 120ms every second, you have high jitter. This causes audio to cut out and "rubber-banding" in games. Our test measures jitter automatically so you can see your <strong>connection stability</strong>.</p>

                                    <h2>How to Reduce Your Ping (Proven Fixes)</h2>
                                    <p>You can often reduce your ping significantly without upgrading your plan:</p>
                                    <ul>
                                      <li><strong>Switch to Ethernet:</strong> Instant reduction in latency and jitter.</li>
                                      <li><strong>Close Background Apps:</strong> Pause Steam, torrents, or cloud backups.</li>
                                      <li><strong>Restart Router:</strong> Clears memory caches that can cause processing lag.</li>
                                    </ul>
                                </div>
                                <FAQSection faqs={faqs} />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
                        <SocialShare 
                            title="I just checked my network latency for free! My ping is much lower than I thought. Check yours:" 
                        />
                        <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
                            <h3 className="font-bold mb-4">Lag Diagnostics</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Most ISPs only tell you your "speed" (bandwidth), but they hide your "ping" (latency). For real-time work and play, ping is the only metric that truly reflects your <strong>quality of service</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

