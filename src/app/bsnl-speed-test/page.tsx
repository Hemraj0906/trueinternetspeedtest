import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Smartphone, Globe, Zap, Timer, Signal } from "lucide-react";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
    title: "BSNL Speed Test – Check BSNL Broadband & 4G Speed",
    description: "Run a free BSNL speed test. Check your BSNL broadband, FTTH, and 4G mobile data speeds. Compare real BSNL performance and fix slow speeds.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/bsnl-speed-test",
    },
    keywords: [
        "BSNL speed test",
        "BSNL broadband speed test",
        "BSNL 4G speed",
        "BSNL FTTH speed",
        "BSNL internet speed check",
    ],
};

export default function BsnlSpeedTestPage() {
    const faqs = [
        {
            question: "What is good BSNL broadband speed?",
            answer: "For BSNL Bharat Fiber (FTTH), expect 85–95% of your plan speed on a wired connection. For older ADSL copper lines, 5–15 Mbps is typical if you're over 2km from the exchange."
        },
        {
            question: "How can I check my BSNL 4G data balance?",
            answer: "Dial *123*6# from your BSNL SIM. Alternatively, use the BSNL Self Care app or portal to see your remaining high-speed data quota."
        },
        {
            question: "Is BSNL Bharat Fiber available in my area?",
            answer: "Check the BSNL portal or call 1800-345-1500. BSNL FTTH is rapidly expanding through the BharatNet project to over 700 cities."
        },
        {
            question: "Why is BSNL internet slow at night?",
            answer: "Older ADSL nodes are often shared. Peak-hour streaming (8–11 PM) can congest these legacy nodes. Upgrading to Bharat Fiber (FTTH) eliminates this issue."
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-teal-950/20 to-background overflow-hidden text-center">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <Breadcrumb items={[{ label: "BSNL Speed Test" }]} />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        BSNL Speed Test – <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Check Bharat Fiber & 4G</span>
                    </h1>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-medium mb-8">
                        <Signal className="w-3.5 h-3.5" />
                        National Network Diagnostics 2026
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Test your real BSNL internet speed — broadband, FTTH, or 4G. Find out if your connection matches what your plan promises.
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
                                    BSNL Internet Speed Guide: Performance, Plans & Fixes
                                </h2>

                                <div className="prose dark:prose-invert prose-teal max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-teal-500 hover:prose-a:text-teal-400">
                                    <p>BSNL is India's government-owned provider with nationwide coverage. Since 2024, BSNL has been revamping its infrastructure with indigenous 4G technology. Run the <strong>BSNL Speed Test</strong> above for a real-time health check.</p>

                                    <div style={{ background: "rgba(20, 184, 166, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(20, 184, 166, 0.2)" }}>
                                        <h3 style={{ marginTop: 0, color: "#14b8a6" }}>📡 Upgrade Alert:</h3>
                                        <p>If you are still on a legacy BSNL ADSL copper line, you are likely missing out on <strong>Bharat Fiber (FTTH)</strong> speeds which are 10x faster for the same price.</p>
                                    </div>

                                    <h2>BSNL 4G Network Performance</h2>
                                    <p>BSNL 4G is expanding into rural interiors where private carriers are absent. Typical 4G speeds range from <strong>10 Mbps to 30 Mbps</strong>. While urban speeds may be lower than competitors, BSNL leads in connectivity for Tier-3 cities.</p>

                                    <h2>Common BSNL Fixes</h2>
                                    <ul>
                                      <li><strong>Refresh Modem:</strong> Power cycle your modem daily to clear stale IP routes.</li>
                                      <li><strong>DNS Change:</strong> Switch to <strong>8.8.8.8 (Google)</strong> to improve browsing response times on BSNL lines.</li>
                                      <li><strong>Check Plan FUP:</strong> Many BSNL plans have strict data limits. Check via *123# or the BSNL portal.</li>
                                    </ul>
                                </div>
                                <FAQSection faqs={faqs} />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
                        <SocialShare 
                            title="I just checked my BSNL speed! Is Bharat Fiber live in your area? Check for free here:" 
                        />
                        <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
                            <h3 className="font-bold mb-4">BSNL Network Status</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                BSNL latency often varies based on regional exchange load. If your ping is above 100ms, your local exchange might be over-provisioned.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
