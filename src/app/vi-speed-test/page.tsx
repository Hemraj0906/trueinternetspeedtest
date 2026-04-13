import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Smartphone, Globe, Zap, Timer, Activity } from "lucide-react";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
    title: "Vi Speed Test – Check Vodafone Idea 4G & 5G Speed",
    description: "Run a free Vi (Vodafone Idea) speed test. Check your Vi 4G and 5G download, upload, and ping speeds instantly. Is your Vi network performing well?",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/vi-speed-test",
    },
    keywords: [
        "vi speed test",
        "Vodafone Idea speed test",
        "Vi 4G speed test",
        "Vi 5G speed test",
        "Vi internet speed check",
    ],
};

export default function ViSpeedTestPage() {
    const faqs = [
        {
            question: "What is a good Vi speed test result?",
            answer: "For Vi 4G, a good result is 15+ Mbps download and 5+ Mbps upload. For Vi 5G, expect 100–350 Mbps. If you're consistently getting under 5 Mbps on 4G, consider toggling airplane mode or checking your data balance."
        },
        {
            question: "Why is my Vi network so slow compared to Jio?",
            answer: "Vi has fewer towers per area in many regions compared to Jio. However, Vi is actively upgrading its infrastructure in 2026, especially in metro areas like Mumbai and Delhi."
        },
        {
            question: "How do I check my Vi data balance?",
            answer: "Open the Vi app or dial *199#. If your high-speed quota is exhausted, your speed will be throttled to 64 Kbps or 1 Mbps."
        },
        {
            question: "Does Vi throttle speeds after certain usage?",
            answer: "Yes. Most Vi prepaid plans have a daily limit (e.g., 1.5GB/day). Once you cross this, speeds drop to an extremely low level until midnight."
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-red-950/20 to-background overflow-hidden text-center">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <Breadcrumb items={[{ label: "Vi Speed Test" }]} />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        Vi Speed Test – <span className="bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent">Check Vodafone Idea Status</span>
                    </h1>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium mb-8">
                        <Smartphone className="w-3.5 h-3.5" />
                        Network Diagnostic Live 2026
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Test your real Vi 4G and 5G internet speed instantly. Find out if your network is performing well — and how to improve it if not.
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
                                    Vi Speed Guide: 4G & 5G Performance & Troubleshooting
                                </h2>

                                <div className="prose dark:prose-invert prose-red max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-red-500 hover:prose-a:text-red-400">
                                    <p>Vi (Vodafone Idea) has been investing heavily in network upgrades through 2025 and 2026. While coverage varies by region, our <strong>Vi Speed Test</strong> helps you verify if you're getting the throughput you paid for.</p>

                                    <div style={{ background: "rgba(239, 68, 68, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(239, 68, 68, 0.2)" }}>
                                        <h3 style={{ marginTop: 0, color: "#ef4444" }}>🚩 Vi Reality Check:</h3>
                                        <p>If your speeds are below 2 Mbps on 4G, your SIM might be outdated. Visit a Vi store for a <strong>free USIM upgrade</strong> to unlock the latest carrier aggregation bands.</p>
                                    </div>

                                    <h2>What to expect from Vi 5G</h2>
                                    <p>Vi's 5G rollout primarily targets metro corridors. In covered areas, customers can expect <strong>100–350 Mbps</strong> download speeds. If you're on a 5G phone but seeing 4G speeds, check your network settings or ensure you have a 5G-enabled plan.</p>

                                    <h2>Vi Troubleshooting Tips</h2>
                                    <ul>
                                      <li><strong>APN Settings:</strong> Ensure your APN is set to "internet" (all lowercase).</li>
                                      <li><strong>Airplane Mode:</strong> Toggling this off and on for 10 seconds restores the optimal tower connection.</li>
                                      <li><strong>Check FUP:</strong> Many Vi plans throttle significantly after the daily high-speed quota (e.g. 1.5GB) is reached.</li>
                                    </ul>
                                </div>
                                <FAQSection faqs={faqs} />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
                        <SocialShare 
                            title="I just checked my Vi network speed! Is your data as fast as promised? Check for free here:" 
                        />
                        <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
                            <h3 className="font-bold mb-4">Vodafone Idea Diagnostics</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Vi uses a mix of L900 and L2100 spectrum for 4G. Our tool helps identify if your connection is hampered by signal interference or network load.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

