import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Download, Globe, Zap, ArrowDownCircle } from "lucide-react";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
    title: "Download Speed Test – Check Your Real Download Speed",
    description: "Test your true download speed right now. Find out if your broadband delivers what your ISP promises. Free, accurate, no app needed.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/download-speed-test",
    },
    keywords: [
        "download speed test",
        "check download speed",
        "internet download speed",
        "test download speed online",
        "fast download speed test",
    ],
};

export default function DownloadSpeedTestPage() {
    const faqs = [
        {
            question: "What download speed do I need for Netflix 4K?",
            answer: "Netflix recommends at least 25 Mbps for 4K Ultra HD streaming on a single device. If multiple people watch 4K simultaneously, multiply that by the number of screens. A 100 Mbps connection handles four simultaneous 4K streams comfortably."
        },
        {
            question: "How fast should my download speed be for gaming?",
            answer: "Contrary to popular belief, gaming doesn't need a very high download speed. Most online games use less than 5 Mbps during gameplay. What matters much more for gaming is low ping (under 50ms) and stable jitter. However, game updates and downloads do benefit from higher speeds."
        },
        {
            question: "Why is my download speed different from my plan speed?",
            answer: "ISPs advertise 'up to' speeds measured under ideal conditions. Real-world speeds depend on your distance from the node, the time of day, the quality of your router, and your WiFi signal strength. A 10–20% difference is normal. A 50%+ difference usually indicates a fixable problem."
        },
        {
            question: "Does my plan's download speed affect all devices equally?",
            answer: "Your total plan speed is shared across all connected devices. If you have a 100 Mbps plan and 10 devices are connected, each device can potentially use up to 100 Mbps — but if multiple stream simultaneously, they share the total bandwidth. A device using 60 Mbps leaves only 40 Mbps for everything else."
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-blue-950/20 to-background overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <Breadcrumb items={[{ label: "Download Speed Test" }]} />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        Download Speed Test – <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Check Real Speed</span>
                    </h1>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
                        <ArrowDownCircle className="w-3.5 h-3.5 text-blue-400" />
                        Accurate Throughput Measurement 2026
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Is your broadband delivering what you pay for? Run a free download speed test and see the truth. No app. No ads. Just precision results.
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
                                    Download Speed Guide: What It Means & How to Improve It
                                </h2>

                                <div className="prose dark:prose-invert prose-blue max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-blue-500 hover:prose-a:text-blue-400">
                                    <h3>What Is Download Speed?</h3>
                                    <p>Download speed measures how fast your internet connection can pull data from the internet to your device. It's measured in <strong>Megabits per second (Mbps)</strong>. Almost everything you do online depends on download speed: streaming videos, loading web pages, downloading files, playing online games, and browsing social media.</p>
                                    <p>Hit the test button above to find your real download speed right now. Then compare it against the standards below.</p>

                                    <div style={{ background: "rgba(59, 130, 246, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(59, 130, 246, 0.2)" }}>
                                        <h3 style={{ marginTop: 0, color: "#3b82f6" }}>🚀 Speed Measurement Fact:</h3>
                                        <p>Download speed is the most critical metric for modern households. A "Good" speed in 2026 is at least <strong>100 Mbps</strong>, which comfortably supports multiple 4K streams and smart home devices simultaneously.</p>
                                    </div>

                                    <h2>What Is a Good Download Speed?</h2>
                                    <p>The "right" download speed depends on how many people are connected and what they're doing:</p>
                                    <ul>
                                      <li><strong>1–10 Mbps:</strong> Barely usable for basic browsing. Insufficient for HD video.</li>
                                      <li><strong>10–25 Mbps:</strong> Good for a single user streaming HD video.</li>
                                      <li><strong>25–100 Mbps:</strong> Comfortable for 2–3 users streaming HD simultaneously.</li>
                                      <li><strong>100–300 Mbps:</strong> Great for families with multiple 4K TVs + gaming.</li>
                                      <li><strong>300 Mbps+:</strong> Future-proof. Handles heavy game downloads and 8K content.</li>
                                    </ul>
                                    <p>Want to understand what these numbers mean for your specific situation? Read our <a href="/what-is-good-internet-speed">complete guide to good internet speed</a>.</p>

                                    <h2>Why Is My Download Speed Slow?</h2>
                                    <p>If your results are disappointing, the issue usually boils down to WiFi interference or hardware bottlenecks. Moving two rooms away from your router can cut your speeds by half. For a true check of your ISP's performance, always use an <strong>Ethernet cable</strong> during the test.</p>

                                    <h2>How to Boost Your Download Speed Today</h2>
                                    <p>Try these quick fixes before calling your ISP:</p>
                                    <ul>
                                      <li><strong>Connect via Ethernet:</strong> Bypasses all WiFi signal loss.</li>
                                      <li><strong>Reboot your equipment:</strong> Power cycle your modem and router.</li>
                                      <li><strong>Update Firmware:</strong> Ensure your router is running the latest software.</li>
                                    </ul>
                                </div>
                                <FAQSection faqs={faqs} />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
                        <SocialShare 
                            title="I just tested my real download speed and found something interesting! Check yours here:" 
                        />
                        <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
                            <h3 className="font-bold mb-4">ISP Transparency</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Most ISPs advertise "theoretical" speeds. Our tool uses real data bursts to show you exactly what's reaching your device. Sharing your results helps create a more transparent internet for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

