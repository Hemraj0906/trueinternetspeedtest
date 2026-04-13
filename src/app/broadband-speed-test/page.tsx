import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Zap, Globe, Smartphone, Signal } from "lucide-react";
import { Breadcrumb } from "@/components/breadcrumb";
import { SocialShare } from "@/components/social-share";

export const metadata: Metadata = {
  title: "Broadband Speed Test – Check Internet Speed Worldwide",
  description: "Run an accurate broadband speed test online. Check your fiber, cable, or DSL speed instantly. Get expert tips to improve your internet performance and reduce lag.",
  alternates: {
    canonical: "https://trueinternetspeedtest.com/broadband-speed-test",
  },
  keywords: [
    "broadband speed test online",
    "check internet speed worldwide",
    "fiber speed test online",
    "wifi speed test broadband",
    "cable internet speed test",
    "best broadband speed test 2026",
  ],
};

export default function BroadbandSpeedTestPage() {
  const faqs = [
    {
      question: "What is a good broadband speed in 2026?",
      answer: "A 'good' speed depends on your needs. For a modern household, 100 Mbps is the gold standard for reliable 4K streaming and remote work. Families with multiple gamers or content creators should aim for 500 Mbps or higher."
    },
    {
      question: "Will this speed test work on my phone?",
      answer: "Yes! Our broadband speed test is fully responsive and works on all Android and iOS devices. For mobile testing, ensure you are connected to your home WiFi to test your broadband line, or use cellular data to test your 4G/5G provider."
    },
    {
      question: "Does the time of day affect my speed test results?",
      answer: "Absolutely. During 'peak hours' (usually evenings), more people are online, which can congest local ISP networks. Testing late at night or early in the morning will show you the maximum theoretical speed of your line."
    },
    {
      question: "Why is upload speed usually slower than download?",
      answer: "Most consumer broadband (Cable/DSL) is 'asymmetric,' prioritizing download bandwidth for most user activities. Fiber-optic providers increasingly offer 'symmetric' plans where download and upload speeds are identical."
    },
    {
      question: "What is 'jitter' in a speed test?",
      answer: "Jitter measures the variation in your ping over time. High jitter indicates an unstable connection, which causes 'stuttering' in video calls and lag spikes in online games, even if your download speed is fast."
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="relative py-20 bg-gradient-to-b from-blue-950/20 to-background overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: "Broadband Speed Test" }]} />

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
              <Globe className="w-3.5 h-3.5" />
              Global Broadband Diagnostics
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
              Broadband Speed Test – <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Check Connection</span> Instantly
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Accurately measure your fiber, cable, or DSL performance. Get real-time download and upload results from local servers worldwide.
            </p>
          </div>

          <SpeedTestWidget />
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <section className="w-full mt-16 md:mt-24 pt-12 border-t border-border/40 pb-20">
              <div className="max-w-4xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground leading-tight">
                  Broadband Performance Guide: Fiber, Cable & Speed Optimization
                </h2>

                <div className="prose dark:prose-invert prose-blue max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-blue-500 hover:prose-a:text-blue-400">
                  <p>Is your <strong>broadband connection</strong> performing as promised? Whether you're using <strong>fiber-to-the-home (FTTH)</strong>, high-speed cable, or traditional DSL, our <strong>Broadband Speed Test</strong> provides laboratory-grade accuracy. We measure your <strong>download speed</strong>, <strong>upload speed</strong>, and <strong>ping latency</strong> against high-performance servers distributed worldwide.</p>

                  <div style={{ background: "rgba(37, 99, 235, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(37, 99, 235, 0.2)" }}>
                    <h3 style={{ marginTop: 0, color: "#2563eb" }}>🚀 Quick Fact:</h3>
                    <p>A "broadband" connection is officially defined by the FCC and other global regulators as having a minimum download speed of <strong>25 Mbps</strong> and an upload speed of <strong>3 Mbps</strong>. If your test results are lower than this, you may not be receiving true broadband service.</p>
                  </div>

                  <h2>How to Run a Professional Broadband Speed Test</h2>
                  <p>To get the most accurate baseline for your <strong>ISP's performance</strong>, follow these expert calibration steps:</p>
                  <ul>
                    <li><strong>Use a Hardwired Connection:</strong> WiFi is prone to interference from walls and other electronics. For a true test of your <strong>broadband line</strong>, connect via a Cat6 or Cat7 Ethernet cable.</li>
                    <li><strong>Pause Background Activity:</strong> Ensure no other devices are running cloud backups (like iCloud or Google Photos), system updates, or 4K streams during the 10-second test window.</li>
                    <li><strong>Test Multiple Times:</strong> Broadband speeds can fluctuate based on local network congestion. Run one test in the morning and one during <strong>peak hours</strong> (7 PM - 10 PM) to see your true average.</li>
                  </ul>

                  <h2>Understanding Your Broadband Results</h2>
                  <p>Our tool provides three critical metrics that define your internet quality:</p>
                  <ol>
                    <li><strong>Download Speed:</strong> Measured in Mbps (Megabits per second). This determines how quickly you can pull data from the internet—essential for <strong>4K streaming</strong> and large file downloads.</li>
                    <li><strong>Upload Speed:</strong> Crucial for <strong>video conferencing</strong> (Zoom, Teams), gaming, and sending large attachments. Fiber plans often offer <strong>symmetric speeds</strong> (equal up/down).</li>
                    <li><strong>Ping (Latency):</strong> Measured in milliseconds (ms). This is the "reaction time" of your connection. Lower is better, especially for <strong>online gaming</strong> and real-time interaction.</li>
                  </ol>

                  <h2>Broadband Technology: Which is Fastest?</h2>
                  <div className="overflow-x-auto my-8">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-bottom-2 border-border/40">
                          <th className="py-3 px-4 font-bold">Technology</th>
                          <th className="py-3 px-4 font-bold">Typical Speed Range</th>
                          <th className="py-3 px-4 font-bold">Best For</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-bottom border-border/20">
                          <td className="py-3 px-4"><strong>Fiber (FTTH)</strong></td>
                          <td className="py-3 px-4">100 Mbps – 10 Gbps</td>
                          <td className="py-3 px-4">Hardcore gaming, 8K streaming</td>
                        </tr>
                        <tr className="border-bottom border-border/20">
                          <td className="py-3 px-4"><strong>Cable (HFC)</strong></td>
                          <td className="py-3 px-4">50 Mbps – 2 Gbps</td>
                          <td className="py-3 px-4">HD streaming, Working from home</td>
                        </tr>
                        <tr className="border-bottom border-border/20">
                          <td className="py-3 px-4"><strong>5G Home Internet</strong></td>
                          <td className="py-3 px-4">30 Mbps – 500 Mbps</td>
                          <td className="py-3 px-4">Renters, Quick setup</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div style={{ background: "rgba(249, 115, 22, 0.05)", padding: "25px", borderRadius: "16px", margin: "30px 0", borderLeft: "4px solid #f97316" }}>
                    <h3 style={{ color: "#f97316", marginTop: 0 }}>⚠️ Is Your Speed Lower Than Expected?</h3>
                    <p>If your <strong>broadband provider</strong> (like Xfinity, AT&T, BT, or Jio) is delivering less than 70% of your plan's advertised speed, you should perform a "Power Cycle." Unplug your router for 60 seconds, plug it back in, and run our speed test again.</p>
                  </div>

                  <h2>Why is My Broadband Speed Slower Than Advertised?</h2>
                  <p>ISPs often advertise "up to" speeds which are theoretical maximums. If your <strong>broadband speed test</strong> is consistently low, check for these 3 common bottlenecks:</p>
                  <ol>
                    <li><strong>Router Age:</strong> If your router is more than 3 years old, it likely doesn't support <strong>WiFi 6 (802.11ax)</strong>, which is required to deliver speeds over 500 Mbps wirelessly.</li>
                    <li><strong>Network Congestion:</strong> Standard cable broadband is a "shared medium." If all your neighbors are streaming at once, your local node may become saturated.</li>
                    <li><strong>Device Hardware:</strong> Older laptops or smartphones may have limited <strong>network interface cards (NICs)</strong> that physically cannot process gigabit speeds.</li>
                  </ol>

                  <h2>Improving Your Broadband Performance</h2>
                  <p>If you're unhappy with your results, try these fixes:
                    <br/>• Read our guide on <a href="/how-to-increase-wifi-speed">how to increase WiFi speed</a>.
                    <br/>• Check if your speed is <a href="/is-100-mbps-fast">fast enough for your needs</a>.
                    <br/>• If your internet is cutting out, see our <a href="/why-does-my-internet-cut-out">troubleshooting guide</a>.
                  </p>
                </div>
                <FAQSection faqs={faqs} />
              </div>
            </section>
          </div>

          <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
            <SocialShare 
              title="Is your broadband delivering what you pay for? I just tested mine here!" 
            />
            <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
              <h3 className="font-bold mb-4">ISP Accuracy Monitor</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We maintain a global database of ISP performance. Your test contributes to a transparent map of internet quality, helping users worldwide choose the best providers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

