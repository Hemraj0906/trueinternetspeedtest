import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Activity, Globe, Zap, Timer } from "lucide-react";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
    title: "Latency Test – Check Internet Latency, Jitter & Packet Loss",
    description: "Free latency test online. Measure your internet latency, jitter, and packet loss instantly. Learn what causes high latency and how to reduce it for gaming and video calls.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/latency-test",
    },
    keywords: [
        "latency test",
        "what is latency in internet",
        "jitter test",
        "packet loss test",
        "internet latency check",
        "high latency fix",
        "network latency test",
    ],
};

export default function LatencyTestPage() {
    const faqs = [
        {
            question: "What is a good latency for internet?",
            answer: "For general internet browsing and streaming, under 100ms latency is perfectly fine. For video calls, under 50ms is ideal. For online gaming — especially competitive multiplayer like FPS games — under 30ms is desired and under 20ms is excellent."
        },
        {
            question: "What causes jitter on my internet connection?",
            answer: "Jitter is caused by inconsistent routing, network congestion, WiFi interference, overloaded routers, and ISP instability. WiFi is the most common cause of high jitter in residential settings."
        },
        {
            question: "How do I check my packet loss?",
            answer: "You can test packet loss using our speed test (which also shows packet loss when significant loss is detected), or use the command prompt ping test: type 'ping -n 100 8.8.8.8' on Windows."
        },
        {
            question: "Does a VPN increase or decrease latency?",
            answer: "A VPN almost always increases latency because your traffic now travels an extra hop through the VPN server. Expect 5–30ms higher ping with a VPN."
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-yellow-950/20 to-background overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <Breadcrumb items={[{ label: "Latency Test" }]} />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        Latency Test – <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Measure Network Lag</span>
                    </h1>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-medium mb-8">
                        <Timer className="w-3.5 h-3.5" />
                        Millisecond Precision Diagnostics 2026
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        High latency ruining your gaming or video calls? Test your exact latency, jitter, and packet loss right now and discover the path to a faster connection.
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
                                    Complete Latency Guide: Ping, Jitter, and Packet Loss Explained
                                </h2>

                                <div className="prose dark:prose-invert prose-yellow max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-yellow-500 hover:prose-a:text-yellow-400">
                                    <h3>What Is Internet Latency?</h3>
                                    <p>Latency is the time delay between sending a request and receiving a response. In plain terms: you click a link — how long until the page starts loading? You fire a shot in a game — how long until the server registers it? That delay is latency, measured in milliseconds (ms).</p>
                                    <p><strong>Low latency = fast, responsive connection. High latency = slow, laggy connection.</strong></p>

                                    <div style={{ background: "rgba(234, 179, 8, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(234, 179, 8, 0.2)" }}>
                                        <h3 style={{ marginTop: 0, color: "#eab308" }}>💡 Network Logic:</h3>
                                        <p>Many users confuse "Speed" (bandwidth) with "Latency" (reaction time). For web browsing, high bandwidth is enough, but for <strong>Video Calls</strong> and <strong>Online Gaming</strong>, low latency is the most important metric for success.</p>
                                    </div>

                                    <h2>Latency vs Ping: Are They the Same?</h2>
                                    <p>Latency and ping are often used interchangeably. Technically, <strong>latency</strong> is the total time delay, while <strong>ping</strong> is the specific test tool used to measure it. Both refer to the same millisecond delay in everyday network troubleshooting.</p>

                                    <h2>What Is Jitter?</h2>
                                    <p>Jitter measures the <em>variation</em> in latency. If your ping jumps from 20ms to 80ms and back to 15ms in rapid succession — that unpredictability is jitter. High jitter causes "rubber-banding" in games and robotic audio in Zoom or Teams calls.</p>

                                    <h2>What Causes High Latency?</h2>
                                    <p>Latency is caused by physical distance to servers, WiFi signal interference, overloaded routers, or ISP-side routing inefficiencies. For the lowest possible latency, always use a **wired Ethernet** cable instead of WiFi.</p>

                                    <h2>How to Reduce Latency</h2>
                                    <ul>
                                      <li><strong>Use Ethernet:</strong> Eliminates WiFi signal overhead instantly.</li>
                                      <li><strong>Enable QoS:</strong> Prioritize small packets over large file downloads.</li>
                                      <li><strong>Restart Equipment:</strong> A fresh modem/router state often clears packet queues.</li>
                                    </ul>
                                </div>
                                <FAQSection faqs={faqs} />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
                        <SocialShare 
                            title="I just measured my network lag! My latency is much lower than I expected. Check your ping for free here:" 
                        />
                        <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
                            <h3 className="font-bold mb-4">Lag Diagnostics</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Most ISPs only advertise "Download Speed" because it sounds fast. But if you have high latency, that speed won't help you in a video meeting. Our test helps you hold your ISP accountable for <strong>Response Quality</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

