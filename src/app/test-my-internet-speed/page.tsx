import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Search, ShieldCheck, Zap, Globe, Timer } from "lucide-react";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
  title: "Test My Internet Speed – Free, Accurate Speed Check (2026)",
  description: "Want to test your internet speed? Run our free, ad-free speed checker to see your real-world download, upload, and ping results instantly. No app required.",
  alternates: {
    canonical: "https://trueinternetspeedtest.com/test-my-internet-speed",
  },
  keywords: [
    "test my internet speed online",
    "free internet speed check",
    "check my wifi speed instantly",
    "accurate speed test 2026",
    "test broadband performance free",
    "mobile data speed test online",
    "real time speed test tool",
  ],
};

export default function TestMyInternetSpeedPage() {
  const faqs = [
    {
      question: "Is this speed test free?",
      answer: "Yes, 100% free and ad-free. We believe internet accuracy should be accessible to everyone without being bombarded by banner ads and tracking scripts."
    },
    {
      question: "Why is my speed test different every time?",
      answer: "Internet traffic is dynamic. Your speed changes based on local neighborhood usage, server load, and even the temperature of your router hardware."
    },
    {
      question: "Which browser is best for testing speed?",
      answer: "For Gigabit connections (1,000 Mbps+), we recommend using Microsoft Edge or Safari, as they typically have lower CPU overhead for high-speed packet processing."
    },
    {
      question: "Does this test show my 5G speed?",
      answer: "Absolutely. Our tool is fully optimized for 5G mmWave and Sub-6 mobile connections, as well as the latest WiFi 6 and 7 home routers."
    },
    {
      question: "How long does the test take?",
      answer: "A standard test takes roughly 15-20 seconds. It performs a warm-up phase followed by sustained download and upload measurements for maximum stability."
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="relative py-20 bg-gradient-to-b from-blue-950/20 to-background overflow-hidden text-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: "Test My Speed" }]} />

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Test My Internet Speed – <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Get The Truth Today</span>
          </h1>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
            <Search className="w-3.5 h-3.5" />
            Instant Professional Diagnostics 2026
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Get the truth about your connection. Fast, free, and accurate speed check powered by the global edge network. No app or registration required.
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
                  Speed Check Guide: How to Get Real-World Accuracy
                </h2>

                <div className="prose dark:prose-invert prose-blue max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-blue-500 hover:prose-a:text-blue-400">
                  <p>Are you getting the speed you pay for? Before you call your ISP to complain, you need a precise <strong>network diagnostic</strong>. Our "Test My Internet Speed" tool uses local edge servers to provide a zero-buffer measurement of your line.</p>

                  <div style={{ background: "rgba(37, 99, 235, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(37, 99, 235, 0.2)" }}>
                    <h3 style={{ marginTop: 0, color: "#2563eb" }}>📊 Why Most Tests Lie:</h3>
                    <p>Many ISPs prioritize traffic to popular speed test sites. Our tool is <strong>unbiased</strong> and uses randomized nodes, ensuring you see the **actual speed** you get when streaming or gaming.</p>
                  </div>

                  <h2>Three Rules for Accurate Testing</h2>
                  <ul>
                    <li><strong>Wired is King:</strong> Always test with an Ethernet cable if you want to see your true ISP performance without WiFi interference.</li>
                    <li><strong>Pause Activity:</strong> Ensure no other phones or TVs are streaming 4K video during the 20-second test window.</li>
                    <li><strong>Temporal Average:</strong> Internet loads vary by the hour. Test in the morning, afternoon, and night to find your true average.</li>
                  </ul>

                  <h2>Deciphering the Results</h2>
                  <p>A good ping (under 30ms) is just as important as high download numbers. If your download speed is 500+ Mbps but your ping is 150ms, your "fast" internet will still feel laggy during video calls and gaming.</p>
                </div>
                <FAQSection faqs={faqs} />
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
            <SocialShare 
              title="I just audited my internet speed! Is your line as fast as promised? Check for free here:" 
            />
            <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
              <h3 className="font-bold mb-4">Diagnostics Result</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If your results are consistently low, our tool helps isolate if the issue is your <strong>Hardware (Router)</strong> or the <strong>ISP Infrastructure</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

