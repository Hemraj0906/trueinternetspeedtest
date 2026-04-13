import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { CheckCircle, Zap, Globe, Timer, ShieldCheck } from "lucide-react";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
    title: "What Is a Good Download Speed? (Complete Guide 2026)",
    description: "Find out what counts as a good download speed for streaming, gaming, and working from home. Plus, instantly test your own speed and see how you compare.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/good-download-speed",
    },
    keywords: [
        "what is a good download speed",
        "good internet speed",
        "is 50 mbps good for gaming",
        "is 100 mbps fast",
        "good download speed for streaming",
        "is 25 mbps fast enough",
    ],
};

export default function GoodDownloadSpeedPage() {
    const faqs = [
        {
            question: "What is considered a fast internet speed?",
            answer: "Generally, speeds above 100 Mbps are considered fast for modern households. 500 Mbps+ is ultra-fast, and 1 Gbps is the current gold standard for fiber."
        },
        {
            question: "Is 50 Mbps good for Netflix 4K?",
            answer: "Yes. Netflix recommends 25 Mbps for 4K. 50 Mbps gives you enough headroom for one 4K stream plus other background activity."
        },
        {
            question: "How many Mbps do I need for working from home?",
            answer: "For video calls and cloud work, 25-50 Mbps dedicated bandwidth is sufficient. If you share a home, aim for 100 Mbps total."
        },
        {
            question: "Does weather affect download speed?",
            answer: "Mostly no for fiber and cable. Satellite and 5G Home Internet can be impacted by heavy storms ('rain fade')."
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-lime-950/20 to-background overflow-hidden text-center">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <Breadcrumb items={[{ label: "Good Download Speed Guide" }]} />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        What Is a Good Download Speed? – <span className="bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">Complete 2026 Guide</span>
                    </h1>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/20 text-lime-400 text-xs font-medium mb-8">
                        <CheckCircle className="w-3.5 h-3.5" />
                        Performance Benchmark Standards 2026
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Not sure if your internet is fast enough? Check your speed, then use our reference guide to know exactly what's good for streaming, gaming, and working from home.
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
                                    Reference Table: Good Speed by Online Activity
                                </h2>

                                <div className="prose dark:prose-invert prose-lime max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-lime-500 hover:prose-a:text-lime-400">
                                    <p>The honest answer: <strong>it depends on your behavior</strong>. A solo user browsing Reddit has very different needs from a family of five streaming 4K simultaneously. Here is how the numbers stack up in 2026:</p>

                                    <div style={{ background: "rgba(132, 204, 22, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(132, 204, 22, 0.2)" }}>
                                        <h3 style={{ marginTop: 0, color: "#84cc16" }}>🚀 Speed Benchmarks:</h3>
                                        <ul>
                                          <li><strong>25 Mbps:</strong> Good for 1 person streaming HD.</li>
                                          <li><strong>100 Mbps:</strong> Good for a typical family with multiple devices.</li>
                                          <li><strong>300 Mbps+:</strong> Good for power users and heavy gamers.</li>
                                        </ul>
                                    </div>

                                    <h2>Is 50 Mbps Good for Gaming?</h2>
                                    <p>Absolutely. Most online games only use 3-5 Mbps during active play. Higher download speeds are mainly useful for downloading 50GB+ patches in minutes rather than hours.</p>

                                    <h2>What About Upload Speed?</h2>
                                    <p>If you work from home or do video calls, upload is just as critical. Aim for at least <strong>10% of your download speed</strong> as a minimum upload benchmark.</p>
                                </div>
                                <FAQSection faqs={faqs} />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
                        <SocialShare 
                            title="What counts as a 'good' internet speed in 2026? I just audited my line here:" 
                        />
                        <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
                            <h3 className="font-bold mb-4">Quality Standard</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Our benchmark data is updated monthly against the latest <strong>Video Bitrate</strong> requirements of Netflix, YouTube, and Twitch.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
