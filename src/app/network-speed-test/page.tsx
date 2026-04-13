import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Activity, Globe, Timer, ShieldCheck, Wifi } from "lucide-react";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
    title: "Network Speed Test – Check Local Network & LAN Speed",
    description: "Test your network speed online. Measure internet throughput, LAN performance, and diagnose network bottlenecks. Free, no app required.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/network-speed-test",
    },
    keywords: [
        "network speed test",
        "LAN speed test",
        "internet network speed",
        "local network speed",
        "check network speed",
    ],
};

export default function NetworkSpeedTestPage() {
    const faqs = [
        {
            question: "What is a good network speed for home use?",
            answer: "For a typical household of 4, 200 Mbps download and 20 Mbps upload is comfortable. A 100 Mbps connection handles 3–4 simultaneous HD streams easily."
        },
        {
            question: "Why does my network speed test vary each time?",
            answer: "Results fluctuate due to changing traffic conditions on your ISP's network, server load at the endpoint, and minor WiFi interference. Average 3 tests for a reliable baseline."
        },
        {
            question: "How do I test local network (LAN) speed?",
            answer: "To test speed between devices in your home (e.g. PC to NAS), use tools like iPerf. This measures internal throughput without going through the internet."
        },
        {
            question: "Is a VPN speed test different?",
            answer: "Yes. Testing with a VPN reflects the encrypted tunnel's bandwidth, usually 10-50% slower than your true ISP capacity due to overhead."
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-indigo-950/20 to-background overflow-hidden text-center">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <Breadcrumb items={[{ label: "Network Speed Test" }]} />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        Network Speed Test – <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Check Your Total Throughput</span>
                    </h1>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-8">
                        <Activity className="w-3.5 h-3.5" />
                        Live Network Infrastructure Diagnostics 2026
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Diagnose your network performance in seconds. Measure real throughput, identify bottlenecks, and get actionable fixes for your home or office setup.
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
                                    Network Speed Testing Guide: How to Test & Troubleshoot
                                </h2>

                                <div className="prose dark:prose-invert prose-indigo max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-indigo-500 hover:prose-a:text-indigo-400">
                                    <p>A network speed test measures the performance of your entire data path — from your device through your router, into the ISP's node, and finally to the destination server. It's the most comprehensive way to check if your internet connection is healthy.</p>

                                    <div style={{ background: "rgba(99, 102, 241, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(99, 102, 241, 0.2)" }}>
                                        <h3 style={{ marginTop: 0, color: "#6366f1" }}>⚙️ The "Weakest Link" Rule:</h3>
                                        <p>Your network speed is only as fast as its slowest component. Often, an old <strong>Cat5 cable</strong> (capped at 100 Mbps) or a 2.4GHz WiFi signal is what's holding back your Gigabit Internet subscription.</p>
                                    </div>

                                    <h2>Key Network Metrics</h2>
                                    <ul>
                                      <li><strong>Throughput:</strong> The actual volume of data moved per second.</li>
                                      <li><strong>Latency (ms):</strong> Round-trip response time; critical for real-time apps.</li>
                                      <li><strong>Packet Loss:</strong> Percentage of data lost during transit; causes severe stutter in video calls.</li>
                                    </ul>

                                    <h2>How to Get Accurate Results</h2>
                                    <p>Ensure no other devices are streaming 4K video or running large updates during the test. For the absolute baseline, connect via <strong>Cat6 Ethernet</strong> to bypass WiFi interference entirely.</p>
                                </div>
                                <FAQSection faqs={faqs} />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
                        <SocialShare 
                            title="I just audited my network speed! Is your internet performing at 100%? Check for free here:" 
                        />
                        <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
                            <h3 className="font-bold mb-4">Infrastructure Check</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Our test detects IP routing efficiency. If your speed is high but browsing feels slow, your <strong>DNS resolvers</strong> might be the bottleneck.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

