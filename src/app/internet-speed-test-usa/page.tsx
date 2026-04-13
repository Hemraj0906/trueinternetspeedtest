import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Flag, Globe, Zap, Timer, ShieldCheck } from "lucide-react";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
    title: "USA Internet Speed Test – Check Xfinity, AT&T, Verizon & Spectrum",
    description: "Run a free USA internet speed test. Check your Xfinity, AT&T Fiber, Verizon Fios, and Spectrum speeds instantly. Expert tips to fix slow US internet and lag.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/internet-speed-test-usa",
    },
    keywords: [
        "usa internet speed test",
        "check xfinity speed usa",
        "at&t fiber speed test",
        "verizon fios speed test",
        "spectrum internet speed test",
        "fastest isp usa 2026",
    ],
};

export default function USASpeedTestPage() {
    const faqs = [
        {
            question: "Which US internet provider is the fastest in 2026?",
            answer: "AT&T Fiber and Google Fiber consistently lead national tests with plans up to 5 Gbps. Verizon Fios is a top-tier fiber alternative on the East Coast."
        },
        {
            question: "Is 100 Mbps enough for a household in the USA?",
            answer: "For 2-3 people streaming HD and working from home, 100 Mbps is sufficient. For 4K streaming and simultaneous gaming, we recommend 300 Mbps or higher."
        },
        {
            question: "Why is my Spectrum or Xfinity upload speed so slow?",
            answer: "Cable technology (DOCSIS) allocates most bandwidth to downloads. For symmetric (equal) upload/download speeds, you need a fiber-to-the-home (FTTH) provider like AT&T or Fios."
        },
        {
            question: "Does weather affect my US internet connection?",
            answer: "Wired fiber and cable are mostly immune. However, satellite (Starlink) and 5G Home Internet can experience 'rain fade' during heavy storms."
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-blue-950/20 to-background overflow-hidden text-center">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <Breadcrumb items={[{ label: "USA Speed Test" }]} />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        USA Internet Speed Test – <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Check Your Performance</span>
                    </h1>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
                        <Flag className="w-3.5 h-3.5" />
                        North American Network Diagnostics 2026
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Get accurate, real-time results for your US ISP. Measure your Xfinity, AT&T, Verizon, or Spectrum speed instantly from local American servers.
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
                                    USA Broadband Guide: Top ISPs, Speed Tips & Troubleshooting
                                </h2>

                                <div className="prose dark:prose-invert prose-blue max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-blue-500 hover:prose-a:text-blue-400">
                                    <p>Is your <strong>Xfinity</strong> connection underperforming? Or is your <strong>AT&T Fiber</strong> not reaching gigabit speeds? Our <strong>USA Speed Test</strong> provides precise, real-time diagnostics using high-performance servers across the States.</p>

                                    <div style={{ background: "rgba(59, 130, 246, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(59, 130, 246, 0.2)" }}>
                                        <h3 style={{ marginTop: 0, color: "#3b82f6" }}>🇺🇸 Pro Tip: Data Caps</h3>
                                        <p>Major US cable providers often have <strong>1.2 TB data caps</strong>. If your speeds are suddenly throttled, check your monthly usage in your provider's app before calling support.</p>
                                    </div>

                                    <h2>Top US Internet Providers (2026)</h2>
                                    <ul>
                                      <li><strong>Verizon Fios:</strong> Best for latency and reliability on the East Coast.</li>
                                      <li><strong>AT&T Fiber:</strong> Widely available high-performance symmetric fiber.</li>
                                      <li><strong>Xfinity/Spectrum:</strong> High download speeds available via cable, but slower uploads.</li>
                                    </ul>

                                    <h2>How to Improve US Internet Speed</h2>
                                    <p>In large US homes, <strong>Mesh WiFi</strong> (like eero) is essential to spread gigabit speeds through multi-story layouts. Also, ensure your router supports <strong>WiFi 6</strong> if you are on a plan faster than 500 Mbps.</p>
                                </div>
                                <FAQSection faqs={faqs} />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
                        <SocialShare 
                            title="I just audited my US internet speed! Is your ISP delivering what you pay for? Check for free here:" 
                        />
                        <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
                            <h3 className="font-bold mb-4">Regional Nodes</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Our test automatically pings the closest US <strong>Data Center</strong> to your location (NY, Chicago, Dallas, SE, or SF) to ensure minimum server-side latency.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

