import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Globe, Zap, Timer, ShieldCheck, Box } from "lucide-react";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
    title: "UK Internet Speed Test – Check BT, Virgin Media, Sky & TalkTalk",
    description: "Run a free UK internet speed test. Check your BT, Virgin Media, Sky Broadband, and TalkTalk speeds instantly. Expert tips to fix slow UK broadband and lag.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/internet-speed-test-uk",
    },
    keywords: [
        "uk internet speed test",
        "check bt speed uk",
        "virgin media speed test online",
        "sky broadband speed test",
        "talktalk speed test uk",
        "fastest broadband uk 2026",
    ],
};

export default function UKSpeedTestPage() {
    const faqs = [
        {
            question: "Which UK broadband provider is the fastest in 2026?",
            answer: "Virgin Media's 'Gig1' is widely available. However, AltNets like Community Fibre and Hyperoptic offer up to 3 Gbps symmetric speeds in specific urban areas."
        },
        {
            question: "Is 70 Mbps fast enough for a UK household?",
            answer: "70 Mbps (Standard Superfast) is sufficient for two simultaneous 4K streams. For households with multiple gamers, a 500+ Mbps plan is recommended."
        },
        {
            question: "What is the difference between FTTC and FTTP in the UK?",
            answer: "FTTC uses fiber to the cabinet and copper to your home (max 80 Mbps). FTTP (Full Fiber) uses fiber all the way, allowing for speeds of 1,000 Mbps and beyond."
        },
        {
            question: "Why does my UK internet speed drop at night?",
            answer: "Peak-time congestion between 8 PM and 10 PM is common. Modern Full-Fiber (FTTP) or Cable (Virgin) connections are less susceptible to this than old copper lines."
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-indigo-950/20 to-background overflow-hidden text-center">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <Breadcrumb items={[{ label: "UK Speed Test" }]} />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        UK Internet Speed Test – <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Check Your Performance</span>
                    </h1>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-8">
                        <Globe className="w-3.5 h-3.5" />
                        British Network Diagnostics 2026
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Get accurate, real-time results for your UK ISP. Measure your BT, Virgin Media, Sky, or TalkTalk speed instantly from local British servers.
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
                                    UK Broadband Guide: Top ISPs, Speed Tips & Troubleshooting
                                </h2>

                                <div className="prose dark:prose-invert prose-indigo max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-indigo-500 hover:prose-a:text-indigo-400">
                                    <p>Is your <strong>Virgin Media</strong> hub struggling during peak hours? Or is your <strong>BT Superfast</strong> not feeling so fast? Our <strong>UK Speed Test</strong> provides precise, real-time results whether you are in London, Birmingham, or Glasgow.</p>

                                    <div style={{ background: "rgba(79, 70, 229, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(79, 70, 229, 0.2)" }}>
                                        <h3 style={{ marginTop: 0, color: "#4f46e5" }}>🇬🇧 UK Network Tip:</h3>
                                        <p>Most UK households use the <strong>Openreach</strong> network (BT, Sky). Ensure your "master socket" is the newer NTE5C model; older sockets can degrade FTTC speeds by up to 20 Mbps.</p>
                                    </div>

                                    <h2>UK Internet Technology Overview</h2>
                                    <ul>
                                      <li><strong>Full Fiber (FTTP):</strong> The gold standard. Zero copper, offering up to 1-3 Gbps.</li>
                                      <li><strong>G.fast / FTTC:</strong> Uses existing copper lines for the final stretch; capped at 80-330 Mbps.</li>
                                      <li><strong>Cable (DOCSIS):</strong> Virgin Media's dedicated network, capable of extremely high download speeds.</li>
                                    </ul>

                                    <h2>Troubleshooting Slow UK Internet</h2>
                                    <p>If your results are low, check for Victorian-era brick wall interference — a common issue in UK terraced homes. A <strong>weekly router reboot</strong> for Virgin hubs often clears packet loss and high latency issues instantly.</p>
                                </div>
                                <FAQSection faqs={faqs} />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
                        <SocialShare 
                            title="I just checked my UK broadband speed! Is your provider delivering what you pay for? Check for free here:" 
                        />
                        <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
                            <h3 className="font-bold mb-4">UK Provider Check</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Our tool detects if you are on <strong>BT, Sky, or Virgin</strong> routes. This helps isolate if lag is due to local wiring or national exchange congestion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

