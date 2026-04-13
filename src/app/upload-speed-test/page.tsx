import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { ArrowUpCircle } from "lucide-react";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
    title: "Upload Speed Test – Check Your Upload Speed Online Free",
    description: "Test your upload speed instantly. Find out if your connection is fast enough for video calls, live streaming, cloud backups, and remote work.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/upload-speed-test",
    },
    keywords: [
        "upload speed test",
        "check upload speed",
        "internet upload speed",
        "slow upload speed fix",
        "upload speed for video calls",
    ],
};

export default function UploadSpeedTestPage() {
    const faqs = [
        {
            question: "What upload speed do I need for Zoom video calls?",
            answer: "Zoom requires a minimum of 1.8 Mbps upload for HD (720p) video calls and 3.8 Mbps for 1080p Full HD. For group calls with multiple participants, Zoom recommends at least 3–5 Mbps upload for a stable experience."
        },
        {
            question: "Why is my upload speed much slower than download?",
            answer: "This is by design for most ISP plans. Cable, DSL, and many fiber plans are asymmetric, prioritizing downloads over uploads because most users consume far more data than they upload. If you need higher upload speeds, ask your ISP about symmetric fiber plans."
        },
        {
            question: "How can I check what is using my upload bandwidth?",
            answer: "On Windows, open Task Manager → Performance tab → Open Resource Monitor → Network tab. Sort by 'Send' to see which processes are uploading data. On Mac, use Activity Monitor → Network tab. Cloud sync apps are the most common culprit."
        },
        {
            question: "Is 10 Mbps upload speed enough for working from home?",
            answer: "Yes, 10 Mbps upload is sufficient for most remote workers doing standard video calls, file sharing, and cloud work. However, if you regularly join large video conferences (8+ participants), share very large files frequently, or work with video production, 20–50 Mbps upload is more comfortable."
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-emerald-950/20 to-background overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
                    <Breadcrumb items={[{ label: "Upload Speed Test" }]} />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        Upload Speed Test – <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Check Your Speed</span>
                    </h1>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-8">
                        <ArrowUpCircle className="w-3.5 h-3.5 text-emerald-400" />
                        Millisecond Precision Diagnostics
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Bad video calls? Slow file uploads? Check your upload speed now and discover exactly what's holding you back from a perfect online experience.
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
                                    Upload Speed Guide: What It Means & How to Fix It
                                </h2>

                                <div className="prose dark:prose-invert prose-emerald max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-emerald-500 hover:prose-a:text-emerald-400">
                                    <h3>What Is Upload Speed?</h3>
                                    <p>Upload speed measures how fast your device can send data TO the internet. It's measured in <strong>Megabits per second (Mbps)</strong>. While download speed handles incoming data (streaming, browsing), upload speed handles outgoing data — and it matters more than most people realize.</p>
                                    <p>Are you on video calls all day? Uploading files to the cloud? Streaming on YouTube or Twitch? Then your upload speed is just as critical as your download speed. Hit the test above to find your current upload speed.</p>

                                    <div style={{ background: "rgba(16, 185, 129, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                                        <h3 style={{ marginTop: 0, color: "#10b981" }}>🚀 Performance Fact:</h3>
                                        <p>Most home internet connections are <strong>asymmetric</strong>, meaning they give you 10x more download than upload. If you work from home or create content, you should check your <strong>upload baseline</strong> regularly to ensure 4K video calls aren't failing.</p>
                                    </div>

                                    <h2>What Is a Good Upload Speed?</h2>
                                    <p>Upload requirements vary by activity. Here's a practical guide:</p>
                                    <ul>
                                      <li><strong>1–5 Mbps:</strong> Enough for basic video calls. Not ideal for large file shares.</li>
                                      <li><strong>5–10 Mbps:</strong> Comfortable for HD video calls and cloud photo sync.</li>
                                      <li><strong>10–25 Mbps:</strong> Great for remote workers and 1080p live streaming.</li>
                                      <li><strong>25–50 Mbps+:</strong> Ideal for 4K streaming and professional cloud workflows.</li>
                                    </ul>

                                    <h2>Why Is My Upload Speed So Slow?</h2>
                                    <p>Slow upload is often caused by an <strong>asymmetric plan</strong>, background cloud sync services, or router queue congestion. WiFi also struggles more with upload traffic than Ethernet, as it's a half-duplex medium.</p>

                                    <h2>How to Improve Your Upload Speed</h2>
                                    <p>Try these proven steps before calling your ISP:</p>
                                    <ul>
                                      <li><strong>Pause Cloud Sync:</strong> Disable OneDrive, Google Drive, or Dropbox during important calls.</li>
                                      <li><strong>Switch to Ethernet:</strong> Instant boost in upload stability.</li>
                                      <li><strong>Enable QoS:</strong> Prioritize video traffic in your router settings.</li>
                                    </ul>
                                </div>
                                <FAQSection faqs={faqs} />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
                        <SocialShare 
                            title="Joining a meeting but the video is choppy? It might be your upload speed! Check yours for free here:" 
                        />
                        <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
                            <h3 className="font-bold mb-4">Remote Work Health</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Upload speed is the "hidden" metric of the modern office. A slow upload can make you look unprofessional on video calls. Regularly testing your <strong>Network Health</strong> ensures you're always performing at your best.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
