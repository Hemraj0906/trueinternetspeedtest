import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Smartphone, Globe, Zap, Signal } from "lucide-react";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
    title: "4G Speed Test – Check Your LTE Mobile Data Speed",
    description: "Test your 4G LTE speed instantly. Find out if your mobile carrier delivers the speeds they promise. Check download, upload, and ping on your 4G connection.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/4g-speed-test",
    },
    keywords: [
        "4G speed test",
        "LTE speed test",
        "4G LTE internet speed",
        "mobile 4G speed checker",
        "4G vs WiFi speed",
    ],
};

export default function FourGSpeedTestPage() {
    const faqs = [
        {
            question: "What is the maximum 4G LTE speed in India?",
            answer: "The theoretical maximum for 4G LTE is around 150 Mbps, but this is rarely achieved. Top Indian carriers like Airtel have recorded real-world peak speeds of 60–80 Mbps. Average speeds are typically 20–50 Mbps."
        },
        {
            question: "How do I check my 4G speed on Android?",
            answer: "Disable WiFi, enable mobile data (4G), and run this speed test directly from your mobile browser. This gives you accurate 4G-only speed results without needing any app."
        },
        {
            question: "Why does 4G speed drop at night?",
            answer: "Speeds usually improve at night due to less congestion. If yours drops, you may have reached your daily 'Fair Usage Policy' (FUP) limit, leading to ISP throttling."
        },
        {
            question: "Is 4G speed enough for working from home?",
            answer: "Yes for light work like emails and Slack. For HD video calls, you need at least 5 Mbps upload, which 4G can provide in good coverage areas, but stability may vary."
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-orange-950/20 to-background overflow-hidden text-center">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <Breadcrumb items={[{ label: "4G Speed Test" }]} />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        4G Speed Test – <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Check LTE Speed</span>
                    </h1>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-medium mb-8">
                        <Smartphone className="w-3.5 h-3.5" />
                        Mobile Signal Diagnostics 2026
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Is your 4G delivering what your carrier promises? Test your real LTE download, upload, and ping speed instantly — no app installation required.
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
                                    4G LTE Speed Guide: Speeds, Tips & Carrier Comparison
                                </h2>

                                <div className="prose dark:prose-invert prose-orange max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-orange-500 hover:prose-a:text-orange-400">
                                    <h3>What Is 4G LTE Speed?</h3>
                                    <p>4G LTE (Long-Term Evolution) theoretically offers up to 150 Mbps download. In reality, your signal strength, distance from the tower, and network congestion determine the actual performance.</p>

                                    <div style={{ background: "rgba(249, 115, 22, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(249, 115, 22, 0.2)" }}>
                                        <h3 style={{ marginTop: 0, color: "#f97316" }}>📱 Signal Optimization:</h3>
                                        <p>If your 4G is slow, try toggling <strong>Airplane Mode</strong> for 10 seconds. This forces your phone to reconnect to the strongest available LTE band in your area.</p>
                                    </div>

                                    <h2>Average 4G Speeds (India 2026)</h2>
                                    <ul>
                                      <li><strong>Airtel 4G:</strong> 25–50 Mbps (Best consistency)</li>
                                      <li><strong>Jio 4G:</strong> 20–40 Mbps (Widest coverage)</li>
                                      <li><strong>Vi 4G:</strong> 15–35 Mbps (Fastest in specific clusters)</li>
                                    </ul>

                                    <h2>Why is my 4G slow?</h2>
                                    <p>Obstacles like concrete walls, deep indoor locations, or "peak hour" congestion around 8 PM can significantly throttle your mobile data speed. Always test near a window for the most accurate "True Speed" measurement.</p>
                                </div>
                                <FAQSection faqs={faqs} />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
                        <SocialShare 
                            title="I just checked my 4G speed! My carrier promised more than they delivered. Check yours for free here:" 
                        />
                        <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
                            <h3 className="font-bold mb-4">Mobile Diagnostics</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Our tool measures 4G latency patterns specifically for mobile applications. If your speed is high but apps feel slow, you likely have high <strong>Jitter</strong> on your mobile tower.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
