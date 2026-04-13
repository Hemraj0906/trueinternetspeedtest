import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Zap, Globe, Timer, ShieldCheck, Box } from "lucide-react";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
    title: "Fiber Speed Test – Check Your Fiber Optic Internet Speed",
    description: "Test your fiber optic internet speed. Verify if your fiber broadband plan delivers 100, 300, or 1 Gbps as promised. Free, accurate, instant results.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/fiber-speed-test",
    },
    keywords: [
        "fiber speed test",
        "fiber optic internet speed",
        "fiber broadband speed test",
        "Jio Fiber speed test",
        "FTTH speed test",
        "gigabit internet speed test",
    ],
};

export default function FiberSpeedTestPage() {
    const faqs = [
        {
            question: "What should my fiber internet speed be?",
            answer: "On a wired Ethernet connection, you should achieve 85–95% of your plan's advertised speed. On WiFi, expect 60–85% of the plan speed depending on your router's WiFi standard (WiFi 5 vs WiFi 6)."
        },
        {
            question: "Why does my 1 Gbps fiber show only 300 Mbps on WiFi?",
            answer: "Most older routers (WiFi 5) have a real-world maximum of 300–500 Mbps. To get closer to gigabit speeds wirelessly, you need a WiFi 6 router supporting 160 MHz channels."
        },
        {
            question: "Is fiber internet available in rural India?",
            answer: "Availability is expanding rapidly through projects like BharatNet. BSNL FTTH and Jio Fiber are currently the primary carriers extending fiber to smaller towns and villages."
        },
        {
            question: "How do I know if I'm getting true fiber?",
            answer: "Ask your ISP if their service is FTTH (Fiber to the Home). FTTH runs fiber all the way into your house, whereas FTTB (Building) uses copper for the final stretch, which can limit speeds."
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-sky-950/20 to-background overflow-hidden text-center">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <Breadcrumb items={[{ label: "Fiber Speed Test" }]} />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        Fiber Speed Test – <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">Check Your Gig Speed</span>
                    </h1>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium mb-8">
                        <Zap className="w-3.5 h-3.5" />
                        FTTH Optical Diagnostics 2026
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Verify your Jio Fiber, Airtel Xstream, or BSNL FTTH plan speed. Instantly measure real download, upload, and latency on your fiber connection.
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
                                    Fiber Optic Internet Speed Guide: What to Expect & How to Optimize
                                </h2>

                                <div className="prose dark:prose-invert prose-blue max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-sky-500 hover:prose-a:text-sky-400">
                                    <h3>What is Fiber (FTTH)?</h3>
                                    <p>Fiber optic internet transmits data using pulses of light through thin glass cables. Unlike copper-based DSL, fiber experiences zero signal degradation over long distances, offering the lowest latency in the industry.</p>

                                    <div style={{ background: "rgba(14, 165, 233, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(14, 165, 233, 0.2)" }}>
                                        <h3 style={{ marginTop: 0, color: "#0ea5e9" }}>🏢 Fiber Reality Check:</h3>
                                        <p>If your 1 Gbps plan is only showing 300 Mbps, your router's wireless standard is likely the bottleneck. Use a <strong>Cat6 Ethernet cable</strong> to test the "Source Speed" directly from your ONT/Modem.</p>
                                    </div>

                                    <h2>Fiber Speed Benchmarks</h2>
                                    <ul>
                                      <li><strong>100 Mbps Plan:</strong> Realistic result: 90–98 Mbps</li>
                                      <li><strong>300 Mbps Plan:</strong> Realistic result: 280–295 Mbps</li>
                                      <li><strong>1 Gbps Plan:</strong> Realistic result: 900–940 Mbps (Wired)</li>
                                    </ul>

                                    <h2>Why fiber speed drops?</h2>
                                    <p>The most common culprits are old Ethernet cables (Cat5 limit is 100 Mbps), poor router placement, or ISP congestion during local peak hours. Our <strong>Fiber Speed Test</strong> helps you isolate these issues.</p>
                                </div>
                                <FAQSection faqs={faqs} />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
                        <SocialShare 
                            title="I just checked my Fiber speed! Is your provider delivering what they promised? Check for free here:" 
                        />
                        <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
                            <h3 className="font-bold mb-4">Fiber Diagnostics</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Fiber connections should have symmetric speeds (equal download and upload). If your upload is significantly lower, your ONT might be misconfigured.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
