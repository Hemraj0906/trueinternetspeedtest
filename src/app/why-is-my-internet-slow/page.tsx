import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertCircle, HelpCircle, Activity, Settings, Globe, Zap, Timer, ShieldCheck } from "lucide-react";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
    title: "Why Is My Internet So Slow? – 10 Quick Fixes (2026)",
    description: "Asking 'why is my internet so slow'? Get 10 expert fixes for slow WiFi and broadband. Troubleshoot ISP throttling, router lag, and background data drain instantly.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/why-is-my-internet-slow",
    },
    keywords: [
        "why is my internet so slow all of a sudden",
        "fix slow internet speed online",
        "troubleshoot sluggish wifi",
        "isp speed check troubleshooting",
        "boost slow broadband connection",
        "why is my download speed slow",
        "internet lag fixes 2026",
    ],
};

export default function WhyIsInternetSlowPage() {
    const faqs = [
        {
            question: "Is 100 Mbps considered slow in 2026?",
            answer: "No, 100 Mbps is 'Good' for a small family. It allows for two 4K Netflix streams and several web browsing sessions simultaneously."
        },
        {
            question: "Can weather make my internet slow?",
            answer: "Humidity can impact old copper lines, and high winds can cause overhead fiber cables to sway, causing micro-disconnects."
        },
        {
            question: "Why is my speed fast on tests but websites load slow?",
            answer: "This is usually a DNS or latency issue. Switching to a faster DNS like Cloudflare (1.1.1.1) often fixes this instantly."
        },
        {
            question: "Does having my router near a TV slow down WiFi?",
            answer: "Yes. Electrical components and metal shielding in large TVs reflect and block WiFi signals. Keep your router 3 feet away."
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-blue-950/20 to-background overflow-hidden text-center">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <Breadcrumb items={[{ label: "Internet Troubleshooting" }]} />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        Why Is My Internet So Slow? – <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">10 Expert Fixes</span>
                    </h1>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium mb-8">
                        <AlertCircle className="w-3.5 h-3.5" />
                        Comprehensive Network Audit 2026
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Stop the buffering. Uncover the 10 most common causes of slow internet and learn exactly how to fix your WiFi and broadband connections.
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
                                    Internet Speed Guide: Troubleshooting Slowness & Optimization Tips
                                </h2>

                                <div className="prose dark:prose-invert prose-blue max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-blue-500 hover:prose-a:text-blue-400">
                                    <p>Is your <strong>internet speed</strong> lagging behind your needs? Whether you're working from home or trying to stream 4K video, slowness is often fixable without calling your ISP.</p>

                                    <div style={{ background: "rgba(239, 68, 68, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(239, 68, 68, 0.2)" }}>
                                        <h3 style={{ marginTop: 0, color: "#dc2626" }}>🔍 Baseline Check:</h3>
                                        <p>First, test your speed above. If you get less than <strong>70% of your plan's speed</strong> while on an Ethernet cable, the issue is likely a physical line fault outside your home.</p>
                                    </div>

                                    <h2>Common Bottlenecks</h2>
                                    <ul>
                                      <li><strong>Router Overheating:</strong> Electronic fatigue can throttle your speed by 50% or more. Ensure your router has 6 inches of clearance on all sides.</li>
                                      <li><strong>Background Hogs:</strong> Cloud backups and OS updates are the silent killers of home bandwidth.</li>
                                      <li><strong>Old DNS:</strong> ISP defaults are often slow. Modern DNS servers like 1.1.1.1 resolve web requests much faster.</li>
                                    </ul>

                                    <h2>Instant Fix Checklist</h2>
                                    <ol>
                                      <li>The <strong>30-Second Reboot</strong>: Clears RAM and forces a clean channel re-sync.</li>
                                      <li>Switch to <strong>5GHz</strong>: Dramatically faster than the congested 2.4GHz band.</li>
                                      <li>Move the Router: Elevation and central placement are the easiest ways to kill dead spots.</li>
                                    </ol>
                                </div>
                                <FAQSection faqs={faqs} />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
                        <SocialShare 
                            title="My internet was lagging, so I followed this guide to fix it! Check your line for free here:" 
                        />
                        <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
                            <h3 className="font-bold mb-4">Diagnostic Result</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Our tool detects if you are suffering from <strong>packet loss</strong> or high <strong>jitter</strong>, which are the main causes of "slow-feeling" internet even when Mbps numbers are high.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
