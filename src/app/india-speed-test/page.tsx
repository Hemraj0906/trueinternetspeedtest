import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { MapPin, Globe, Zap, Signal } from "lucide-react";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
    title: "India Internet Speed Test – Check Jio, Airtel, BSNL & Vi Speeds",
    description: "Run a free internet speed test in India. Check your Jio Fiber, Airtel Xstream, BSNL Bharat Fiber, and Vi network speeds. Accurate ping, download, and upload results.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/india-speed-test",
    },
    keywords: [
        "india internet speed test",
        "check jio speed india",
        "airtel xstream speed test india",
        "bsnl bharat fiber speed test",
        "vi 5g speed test india",
        "fastest broadband india 2026",
    ],
};

export default function IndiaSpeedTestPage() {
    const faqs = [
        {
            question: "Which ISP has the best speed in India 2026?",
            answer: "Airtel Xstream Fiber and Jio Fiber currently lead the Indian market in speed and reliability. Airtel is often praised for lower latency (ping), while Jio Fiber is recognized for its massive distribution and high-value bundled plans."
        },
        {
            question: "Is 30 Mbps enough for streaming in India?",
            answer: "Yes, 30 Mbps is sufficient for two simultaneous 1080p HD streams on Netflix or Hotstar. However, if you want to stream in 4K or have 5+ devices connected, we recommend upgrading to at least a 100 Mbps plan."
        },
        {
            question: "Why does my Indian ISP speed drop at night?",
            answer: "This is usually due to 'network oversubscription.' During peak evening hours (8 PM – 11 PM), local nodes become congested as many users in your area are online simultaneously. Fiber connections (FTTH) suffer less from this than older cable or DSL lines."
        },
        {
            question: "Is BSNL Bharat Fiber better than private ISPs?",
            answer: "BSNL Bharat Fiber (FTTH) has improved tremendously and offers excellent value, especially in Tier 2 and Tier 3 cities where private players like Airtel/Jio may have limited reach. For metro cities, private ISPs still tend to offer faster resolution for technical issues."
        },
        {
            question: "Does weather affect fiber broadband in India?",
            answer: "Heavy rain or heat typically doesn't affect the light signals inside fiber optic cables. However, if your ISP has overhead cables, physical damage from wind or tree falling can cause outages. Check for a red 'LOS' light on your router during storms."
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-orange-950/20 to-background overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <Breadcrumb items={[{ label: "India Speed Test" }]} />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        India Internet Speed Test – <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Check Performance</span>
                    </h1>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-medium mb-8">
                        <MapPin className="w-3.5 h-3.5 text-orange-400" />
                        Optimized for Local Indian Servers
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Get accurate, real-time results for your Indian ISP. Measure your 5G, 4G, or fiber-optic broadband speed instantly from local servers in Mumbai, Delhi, Bangalore and more.
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
                                    India's Broadband Guide: Speed, Coverage & Troubleshooting
                                </h2>

                                <div className="prose dark:prose-invert prose-orange max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-orange-500 hover:prose-a:text-orange-400">
                                    <p>India is now one of the world's largest digital markets, with over 900 million active internet users. Whether you're in a metro city like <strong>Mumbai, Delhi, or Bangalore</strong>, or a Tier 3 town, getting the speed you pay for is critical. Our <strong>India Speed Test</strong> is optimized for local servers to provide the most accurate results for <strong>Jio, Airtel, BSNL, and Vodafone Idea (Vi)</strong>.</p>

                                    <div style={{ background: "rgba(249, 115, 22, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(249, 115, 22, 0.2)" }}>
                                        <h3 style={{ marginTop: 0, color: "#f97316" }}>🇮🇳 India Network Tip:</h3>
                                        <p>Most Indian ISPs like <strong>Jio Fiber</strong> and <strong>Airtel Xstream</strong> provide dual-band routers. If your speed test shows low results, ensure you are connected to the <strong>5GHz band</strong> (usually suffixed with _5G) rather than the slower, more congested 2.4GHz band.</p>
                                    </div>

                                    <h2>Average Internet Speeds in India (2026)</h2>
                                    <p>India's internet infrastructure has improved significantly. Fiber-to-the-Home (FTTH) is now common in most urban buildings, delivering averages between <strong>80 Mbps to 150 Mbps</strong>. Major cities with <strong>Airtel 5G Plus</strong> and <strong>Jio True 5G</strong> often see mobile speeds over 400 Mbps.</p>

                                    <h2>Top 5 Broadband Providers in India</h2>
                                    <div className="overflow-x-auto my-8">
                                        <table className="w-full text-left border-collapse">
                                            <thead>
                                                <tr className="border-bottom-2 border-border/40">
                                                    <th className="py-3 px-4 font-bold">Provider</th>
                                                    <th className="py-3 px-4 font-bold">Max Speed</th>
                                                    <th className="py-3 px-4 font-bold">Best For</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-bottom border-border/20">
                                                    <td className="py-3 px-4"><strong>Jio Fiber</strong></td>
                                                    <td className="py-3 px-4">1 Gbps</td>
                                                    <td className="py-3 px-4">Bundled OTT Value</td>
                                                </tr>
                                                <tr className="border-bottom border-border/20">
                                                    <td className="py-3 px-4"><strong>Airtel Xstream</strong></td>
                                                    <td className="py-3 px-4">1 Gbps</td>
                                                    <td className="py-3 px-4">Low Latency Gaming</td>
                                                </tr>
                                                <tr className="border-bottom border-border/20">
                                                    <td className="py-3 px-4"><strong>ACT Fibernet</strong></td>
                                                    <td className="py-3 px-4">1 Gbps</td>
                                                    <td className="py-3 px-4">Performance Hardcore</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <h2>Why is My Internet Speed Slow in India?</h2>
                                    <p>If your <strong>Indian internet speed test</strong> doesn't match your plan, check for worn-out fiber drops or local server congestion during peak hours (8 PM - 11 PM). Indian concrete walls are thick and can drop WiFi signals significantly, so use a mesh system for larger flats.</p>
                                </div>
                                <FAQSection faqs={faqs} />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
                        <SocialShare 
                            title="Are you getting the full speed your Indian ISP promised? I just checked mine here!" 
                        />
                        <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
                            <h3 className="font-bold mb-4">Indian Network Map</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                We are building the most accurate map of internet speeds across India. Your test results help millions of fellow Indians choose the right broadband or 5G provider in their specific pincode.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

