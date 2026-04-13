import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Zap, Globe, Timer, ShieldCheck, Box } from "lucide-react";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
    title: "Jio Speed Test – Check Jio Fiber & True 5G Speeds Online",
    description: "Run a free Jio speed test. Check your Jio Fiber, Jio True 5G, and AirFiber speeds instantly. Expert solutions for slow Jio internet and gaming lag.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/jio-speed-test",
    },
    keywords: [
        "jio speed test",
        "jio fiber speed test online",
        "jio true 5g speed test",
        "check jio internet speed",
        "jio airfiber speed test",
    ],
};

export default function JioSpeedTestPage() {
    const faqs = [
        {
            question: "Why is my Jio Fiber speed test lower than my plan?",
            answer: "Usually due to testing over 2.4GHz WiFi. To get full 100 Mbps or 300 Mbps speed, connect to the 5GHz WiFi band or use an Ethernet cable. Also check for background updates."
        },
        {
            question: "Is Jio 5G truly unlimited?",
            answer: "Check your plan terms; most plans above ₹239 offer unlimited 5G data. However, a hidden 'Fair Usage Policy' (FUP) may apply after very high usage (usually 300GB+)."
        },
        {
            question: "How do I clear my Jio router cache for better speed?",
            answer: "Perform a 'Power Cycle': unplug your Jio Home Gateway for 1 minute, then plug it back in. This refreshes your IP address and clears internal router congestion."
        },
        {
            question: "What is a good ping for gaming on Jio Fiber?",
            answer: "For Indian servers (Mumbai), a ping between 5ms and 25ms is excellent. International servers (Singapore) typically range from 40ms to 70ms."
        },
        {
            question: "How many devices can connect to one Jio Fiber router?",
            answer: "The router supports up to 32 devices, but for a 100 Mbps plan, we recommend keeping under 10 active devices to maintain high speed per user."
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-blue-950/20 to-background overflow-hidden text-center">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <Breadcrumb items={[{ label: "Jio Speed Test" }]} />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        Jio Speed Test – <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Check Fiber & 5G</span>
                    </h1>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
                        <Box className="w-3.5 h-3.5" />
                        Official Network Diagnostics 2026
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Is your Jio internet slow? Measure your download, upload, and ping instantly. Get highly accurate results for Jio Fiber, 5G, and AirFiber networks.
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
                                    Jio Network Performance Guide: Tips & Fixes
                                </h2>

                                <div className="prose dark:prose-invert prose-blue max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-blue-500 hover:prose-a:text-blue-400">
                                    <p>Is your <strong>Jio Fiber</strong> failing to stream 4K smoothly? Or is your <strong>Jio True 5G</strong> feeling like 4G? Use our <strong>Jio Speed Test</strong> to get precise results tailored for the Jio network.</p>

                                    <div style={{ background: "rgba(59, 130, 246, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(59, 130, 246, 0.2)" }}>
                                        <h3 style={{ marginTop: 0, color: "#3b82f6" }}>🔵 Jio Fiber Speed Tip:</h3>
                                        <p>Check your data balance in the <strong>MyJio App</strong>. If you cross the 3.3 TB FUP limit, your speed is throttled to 1 Mbps until the next billing cycle.</p>
                                    </div>

                                    <h2>Jio True 5G vs. Jio Fiber</h2>
                                    <p>Jio's <strong>True 5G</strong> uses Standalone (SA) architecture, which can deliver up to 1 Gbps. However, <strong>Jio Fiber</strong> is still superior for low-latency gaming (5-15ms) and consistent 24/7 heavy streaming.</p>

                                    <h2>Troubleshooting Jio Speed Drops</h2>
                                    <ul>
                                      <li><strong>5GHz Band:</strong> Always use the 5GHz WiFi signal for plans above 100 Mbps.</li>
                                      <li><strong>ONT Placement:</strong> Keep the Jio router in a central, elevated location.</li>
                                      <li><strong>DNS Optimization:</strong> Switch to <strong>8.8.8.8 (Google DNS)</strong> if browsing feels slugish despite fast speed tests.</li>
                                    </ul>
                                </div>
                                <FAQSection faqs={faqs} />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
                        <SocialShare 
                            title="I just checked my Jio Fiber speed! Is your 5G as fast as promised? Check for free here:" 
                        />
                        <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
                            <h3 className="font-bold mb-4">Jio Network Check</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Our tool detects if you are on <strong>Jio AirFiber</strong> or Broadband. This helps in diagnosing if your lag is due to tower congestion or local hardware.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

