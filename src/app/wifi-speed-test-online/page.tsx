import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Wifi, Globe, Zap, Timer, Signal } from "lucide-react";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
    title: "WiFi Speed Test Online – Check Wireless Internet Speed",
    description: "Test your WiFi speed online instantly. Check your router's wireless performance. Expert tips to boost your WiFi signal, fix dead zones, and increase speed.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/wifi-speed-test-online",
    },
    keywords: [
        "wifi speed test online",
        "check wifi performance",
        "router speed test",
        "increase wifi speed tips",
        "fix wifi dead zones",
        "best wifi speed checker 2026",
        "wifi latency test",
    ],
};

export default function WifiSpeedTestPage() {
    const faqs = [
        {
            question: "Why is 5GHz WiFi faster but has shorter range?",
            answer: "High-frequency waves (5GHz/6GHz) can carry more data in a shorter time, but they are physically weaker and get absorbed more easily by solid objects like walls and furniture compared to 2.4GHz waves."
        },
        {
            question: "Can weather affect my home WiFi speed?",
            answer: "No, home WiFi uses internal radio frequencies. However, if you have a 'Fixed Wireless' or 'Satellite' internet connection, extreme rain or snow can affect the speed *coming into* your router."
        },
        {
            question: "Is it safe to keep my WiFi router next to my bed?",
            answer: "Yes. WiFi routers use non-ionizing radiation, which is considered safe by global health organizations. However, for the best coverage, it's better to keep it in a central living area."
        },
        {
            question: "How many devices can a standard router handle?",
            answer: "A typical WiFi 6 router can handle 30–50 devices comfortably. However, if multiple devices are streaming 4K video simultaneously, you will notice a significant performance drop."
        },
        {
            question: "Why should I stand near the router during the test?",
            answer: "To test your router's 'Pure Speed.' Standing near the router eliminates the variable of distance and wall interference, showing you exactly what your internet service is providing wirelessly."
        },
        {
            question: "What is 'WiFi 7' and do I need it now?",
            answer: "WiFi 7 is the latest standard (802.11be) offering massive speeds up to 40 Gbps. While powerful, you only need it if you have a 2Gbps+ internet plan and devices that support the new standard."
        }
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-blue-950/20 to-background overflow-hidden text-center">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <Breadcrumb items={[{ label: "WiFi Speed Test" }]} />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        WiFi Speed Test – <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Check Performance</span> Instantly
                    </h1>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
                        <Wifi className="w-3.5 h-3.5" />
                        2026 Accurate Wireless Diagnostics
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Identify dead zones and optimize your wireless network. Get millisecond-accurate results for download, upload, and latency across all your rooms.
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
                                    WiFi Performance Hub: Routing, Interference & Signal Mastery
                                </h2>

                                <div className="prose dark:prose-invert prose-blue max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-blue-500 hover:prose-a:text-blue-400">
                                    <p>Is your <strong>WiFi signal</strong> dropping in the bedroom or lagging during important video calls? Our <strong>WiFi Speed Test</strong> is designed to help you identify the root cause of connectivity issues. We help you distinguish between a slow ISP connection and a poorly optimized wireless environment.</p>

                                    <div style={{ background: "rgba(59, 130, 246, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(59, 130, 246, 0.2)" }}>
                                        <h3 style={{ marginTop: 0, color: "#3b82f6" }}>📡 The "Wireless Tax":</h3>
                                        <p>In 2026, even with the latest routers, <strong>WiFi speeds</strong> are typically 30-50% slower than a direct Ethernet connection. This is caused by packet overhead and physical obstacles like concrete walls or glass. If your <a href="/broadband-speed-test">Gigabit plan</a> shows 600 Mbps on WiFi, you are actually in the top percentile of performance.</p>
                                    </div>

                                    <h2>How to Get an Accurate WiFi Reading</h2>
                                    <ul>
                                      <li><strong>Baseline:</strong> Stand near your router. This shows the maximum "Source Speed."</li>
                                      <li><strong>The Wall Factor:</strong> Move to another room. Concrete walls can cut 5GHz signals by half.</li>
                                      <li><strong>IoT Check:</strong> Run the test when smart TVs and cameras are active vs. when they are off.</li>
                                    </ul>

                                    <h2>WiFi Technology Table</h2>
                                    <div className="overflow-x-auto my-8">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="border-bottom-2 border-border/40">
                                                    <th className="py-3 px-4 font-bold">Standard</th>
                                                    <th className="py-3 px-4 font-bold">Real Peak</th>
                                                    <th className="py-3 px-4 font-bold">Best For</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-bottom border-border/20">
                                                    <td><strong>WiFi 7 (802.11be)</strong></td>
                                                    <td>5,000+ Mbps</td>
                                                    <td>8K & Cloud Gaming</td>
                                                </tr>
                                                <tr className="border-bottom border-border/20">
                                                    <td><strong>WiFi 6 (802.11ax)</strong></td>
                                                    <td>800+ Mbps</td>
                                                    <td>4K & Multi-Device</td>
                                                </tr>
                                                <tr className="border-bottom border-border/20">
                                                    <td><strong>WiFi 5 (802.11ac)</strong></td>
                                                    <td>400+ Mbps</td>
                                                    <td>Standard HD Browsing</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h2>Proven WiFi Boosters</h2>
                                    <p>Elevation is key—place your router on a high shelf rather than a cabinet. Keep it away from microwaves and Bluetooth devices that jam the 2.4GHz frequency. For homes larger than 2,000 sq ft, a <strong>Mesh System</strong> is the only way to maintain a full signal in every room.</p>
                                </div>
                                <FAQSection faqs={faqs} />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
                        <SocialShare 
                            title="Is your WiFi slow? I just used this tool to check my speed for free in every room! Check yours here:" 
                        />
                        <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
                            <h3 className="font-bold mb-4">Signal Reliability</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Our WiFi analyzer calculation includes signal-to-noise ratios. If your ping varies wildly, you may have local frequency interference. These results help you decide if it's time for a <strong>Mesh Network</strong> upgrade.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


