import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Smartphone, Globe, Zap, Timer, Activity } from "lucide-react";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
    title: "5G Speed Test – Check Jio 5G & Airtel 5G Speed 2026",
    description: "Test your 5G internet speed right now. Compare Jio True 5G vs Airtel 5G speeds. Find real-world 5G download, upload, and latency results in India.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/5g-speed-test",
    },
    keywords: [
        "5G speed test",
        "Jio 5G speed",
        "Airtel 5G speed",
        "5G internet speed India",
        "5G vs 4G speed comparison",
        "True 5G speed test",
    ],
};

export default function FiveGSpeedTestPage() {
    const faqs = [
        {
            question: "Does 5G use more battery than 4G?",
            answer: "Yes, especially in areas with weak 5G signals. Modern phones have 'Smart 5G' settings to switch to 4G automatically when high speed isn't needed to preserve battery."
        },
        {
            question: "Why does my phone show 5G but the speed is slow?",
            answer: "This often happens with '5G Low Band' where 5G shares the same frequency as 4G. It provides the 5G icon but only 4G-level speeds. Indoor signal blockage is also a major factor."
        },
        {
            question: "What is the 'Ping' I should expect on 5G?",
            answer: "On 5G Standalone (SA), expect a ping between 8ms and 20ms. On 5G Non-Standalone (NSA), ping is usually between 25ms and 45ms."
        },
        {
            question: "Is 5G safe for my health?",
            answer: "Yes. According to the WHO and global health agencies, 5G uses non-ionizing radio waves that are well within safety limits. There is no evidence that 5G frequencies cause health issues."
        },
        {
            question: "Do I need a new SIM card for 5G in India?",
            answer: "For most users, existing 4G SIM cards work with 5G networks. Airtel and Jio SIM cards issued in the last few years are already 5G-ready."
        },
        {
            question: "Can 5G replace my home WiFi?",
            answer: "Yes, through '5G Fixed Wireless' (FWA) like JioAirFiber. It's often faster than basic cable broadband, though fiber remains the most stable option for professional use."
        }
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-purple-950/20 to-background overflow-hidden text-center">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <Breadcrumb items={[{ label: "5G Speed Test" }]} />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        5G Speed Test – <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Check True Performance</span>
                    </h1>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        Live 5G Spectrum Analysis 2026
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Experience the real power of 5G. Accurate download, upload, and sub-10ms latency testing for Jio, Airtel, and global carriers — no apps required.
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
                                    5G Mastery: Spectrum, Architecture, and Performance Optimization
                                </h2>

                                <div className="prose dark:prose-invert prose-purple max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-purple-500 hover:prose-a:text-purple-400">
                                    <p>Are you getting the speeds your carrier promised? our <strong>5G Speed Test</strong> is a precision diagnostic tool built for the next generation of mobile connectivity. Whether you are testing <strong>Jio True 5G</strong>, <strong>Airtel 5G Plus</strong>, or global networks, our engine provides millisecond-accurate latency and gigabit-ready throughput measurements.</p>

                                    <div style={{ background: "rgba(147, 51, 234, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(147, 51, 234, 0.2)" }}>
                                        <h3 style={{ marginTop: 0, color: "#a855f7" }}>🚀 The "Gigabit" Reality Check:</h3>
                                        <p>Global 5G speeds in 2026 range between 150 Mbps and 800 Mbps. Your actual result is influenced by your distance from the tower, the spectrum band (Sub-6GHz vs mmWave), and whether your network is <strong>Standalone (SA)</strong>.</p>
                                    </div>

                                    <h2>SA vs. NSA 5G: Why it Matters</h2>
                                    <ul>
                                      <li><strong>5G Standalone (SA):</strong> Used by Jio True 5G. Offers lowest latency (under 10ms) because it doesn't rely on 4G core.</li>
                                      <li><strong>5G Non-Standalone (NSA):</strong> Used by Airtel 5G. Uses 4G for control signaling. Downloads are fast but latency is slightly higher.</li>
                                    </ul>

                                    <h2>Common Reasons for Poor 5G Speed</h2>
                                    <ol>
                                      <li><strong>Network Congestion:</strong> High traffic density can saturate localized 5G bands.</li>
                                      <li><strong>Indoor Attenuation:</strong> Concrete and Low-E glass block high-frequency mmWave signals.</li>
                                      <li><strong>Heat Throttling:</strong> 5G modems draw significant power; if the phone is hot, it throttles speed.</li>
                                    </ol>
                                </div>
                                <FAQSection faqs={faqs} />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
                        <SocialShare 
                            title="I just hit gigabit speeds on 5G! Test your network for free here:" 
                        />
                        <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
                            <h3 className="font-bold mb-4">5G SA Detected</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Our test detects if your device is using Standalone (SA) or Non-Standalone (NSA) 5G. SA networks typically show 30% lower latency during our diagnostic check—ideal for <strong>Cloud Gaming</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

