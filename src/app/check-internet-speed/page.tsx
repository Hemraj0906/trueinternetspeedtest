import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Activity, Globe, Zap, Search } from "lucide-react";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
    title: "Check Internet Speed – Instant Free Speed Test Online",
    description: "Check your internet speed in seconds. Get real-time download speed, upload speed, ping, and jitter readings. Free, accurate, no app needed.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/check-internet-speed",
    },
    keywords: [
        "check internet speed",
        "internet speed test app",
        "free internet speed test no download",
        "check my internet speed",
        "test internet speed online",
    ],
};

export default function CheckInternetSpeedPage() {
    const faqs = [
        {
            question: "How do I check my internet speed for free?",
            answer: "Simply visit this page and click 'Start Test'. Our tool measures your download speed, upload speed, ping, and jitter in under 30 seconds — completely free with no app or account required."
        },
        {
            question: "What is a good internet speed to have?",
            answer: "For a typical household with 2–4 people streaming, gaming, and working from home, 100–200 Mbps download speed is considered good. For single users doing basic browsing, 25–50 Mbps is plenty."
        },
        {
            question: "Why does my speed test show fast speeds but my internet feels slow?",
            answer: "This usually means the bottleneck is not your internet connection, but your WiFi signal, device hardware, or a specific server being slow. Try connecting via Ethernet to rule out WiFi issues. Also check that no background apps are consuming bandwidth."
        },
        {
            question: "Can I check internet speed on my phone without an app?",
            answer: "Yes. Open this page in your phone's browser (Chrome, Safari, etc.) and tap 'Start Test'. No app download is required. Our speed test is fully optimized for mobile browsers."
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-blue-950/20 to-background overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <Breadcrumb items={[{ label: "Check Internet Speed" }]} />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        Check Internet Speed – <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Free Online Test</span>
                    </h1>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
                        <Activity className="w-3.5 h-3.5 text-blue-400" />
                        Instant Network Performance Check
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Is your internet living up to what you pay for? Find out in seconds. Get real download, upload, ping, and jitter readings instantly.
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
                                    Everything You Need to Know About Checking Your Internet Speed
                                </h2>

                                <div className="prose dark:prose-invert prose-blue max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-blue-500 hover:prose-a:text-blue-400">
                                    <h3>How to Check Your Internet Speed (The Right Way)</h3>
                                    <p>Is your internet fast enough? Most people never actually check — they just assume their plan delivers what they pay for. The reality? <strong>Studies show ISPs deliver only 70–90% of advertised speeds</strong> during peak hours. Taking a proper speed test is the only way to know for sure.</p>
                                    <p>You are already in the right place. Hit the button above and get your real download speed, upload speed, ping, and jitter in under 30 seconds. No app, no signup, no hassle.</p>

                                    <h2>What Does "Check Internet Speed" Actually Measure?</h2>
                                    <p>A speed test measures four critical metrics that together define your actual internet experience:</p>
                                    <ul>
                                      <li><strong>Download Speed (Mbps):</strong> How fast data flows FROM the internet TO your device. This affects streaming, browsing, and downloads.</li>
                                      <li><strong>Upload Speed (Mbps):</strong> How fast data flows FROM your device TO the internet. Critical for video calls, cloud backups, and sending files.</li>
                                      <li><strong>Ping (ms):</strong> The reaction time of your connection. Lower is better. Under 20ms is excellent for gaming.</li>
                                      <li><strong>Jitter (ms):</strong> The consistency of your ping. High jitter causes choppy video calls and lag spikes in games.</li>
                                    </ul>

                                    <div style={{ background: "rgba(59, 130, 246, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(59, 130, 246, 0.2)" }}>
                                        <h3 style={{ marginTop: 0, color: "#3b82f6" }}>🚀 Speed Verification Tip:</h3>
                                        <p>Always check your speed at different times of the day. ISPs often face <strong>peak-hour congestion</strong> between 7 PM and 11 PM, which can cause your performance to drop by up to 50%.</p>
                                    </div>

                                    <h2>What Speed Do You Actually Need?</h2>
                                    <p>Not all activities require the same bandwidth. Here's a quick reference:</p>
                                    <ul>
                                      <li><strong>Basic Browsing & Email:</strong> 5–10 Mbps is enough</li>
                                      <li><strong>HD Video Streaming (Netflix/YouTube):</strong> 10–25 Mbps per stream</li>
                                      <li><strong>4K UHD Streaming:</strong> 25–50 Mbps per stream</li>
                                      <li><strong>Online Gaming:</strong> 15–25 Mbps download + low ping (under 50ms)</li>
                                      <li><strong>Video Calls (Zoom/Teams):</strong> 3–5 Mbps upload minimum</li>
                                    </ul>
                                    <p>Run the <a href="/">internet speed test</a> above, then compare your numbers to this table. If you fall short, the fix may be simpler than you think.</p>

                                    <h2>Why Is My Internet Slower Than My Plan?</h2>
                                    <p>Your ISP sells you an "up to X Mbps" package. That word "up to" is doing a lot of heavy lifting. Your actual speed depends on WiFi interference, router hardware, and even the type of <strong>Ethernet cables</strong> you use. For a true check, always use a wired connection.</p>
                                </div>
                                <FAQSection faqs={faqs} />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
                        <SocialShare 
                            title="I just checked my internet speed for free! Want to know yours? Try it here:" 
                        />
                        <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
                            <h3 className="font-bold mb-4">Precision Global Testing</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Our tool connects you to the closest edge node among 1,500+ global data centers. This ensures your <strong>Internet Speed Check</strong> isn't bottlenecked by distance, giving you a laboratory-grade reading.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

