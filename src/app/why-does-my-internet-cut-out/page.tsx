import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { SeoContentSection } from "@/components/seo-content-section";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
  title: "Why Does My Internet Cut Out? 5 Proven Fixes Worldwide",
  description: "Internet keeps dropping? Find out exactly why your internet cuts out and apply 5 proven worldwide fixes for routers, modems, and ISP line issues.",
  alternates: {
    canonical: "https://trueinternetspeedtest.com/why-does-my-internet-cut-out",
  },
};

export default function WhyDoesMyInternetCutOutPage() {
  const content = `
    <h2>Why Does Internet Drop Randomly?</h2>
    <p>A connection that cuts out at random is far more frustrating than consistently slow internet. Whether you are on Xfinity in Chicago, BT in London, or Telstra in Sydney, your internet dropping repeatedly points to one of a small set of highly specific hardware or configuration problems. Run the test above to immediately check your <strong>ping jitter</strong> — high jitter is the first sign of an unstable connection about to cut out.</p>

    <h2>Global Drop Causes Diagnosis Table</h2>
    <p>Use this worldwide symptom-to-cause mapping to instantly narrow down the root of your disconnection issue:</p>

    <div class="overflow-x-auto my-8">
      <table class="w-full text-left border-collapse border border-border/50">
        <thead>
          <tr class="bg-muted">
            <th class="p-4 border border-border/50 font-bold">Symptom</th>
            <th class="p-4 border border-border/50 font-bold">Most Likely Cause</th>
            <th class="p-4 border border-border/50 font-bold">Fix Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-4 border border-border/50">Drops every 5 minutes exactly</td>
            <td class="p-4 border border-border/50 font-bold text-orange-400">Router overheating</td>
            <td class="p-4 border border-border/50 text-green-500 font-bold">2 mins</td>
          </tr>
          <tr class="bg-muted/30">
            <td class="p-4 border border-border/50">Drops only at night (8–11 PM)</td>
            <td class="p-4 border border-border/50 font-bold text-orange-400">Neighbor WiFi interference</td>
            <td class="p-4 border border-border/50 text-green-500 font-bold">5 mins</td>
          </tr>
          <tr>
            <td class="p-4 border border-border/50">Completely random drops, no pattern</td>
            <td class="p-4 border border-border/50 font-bold text-orange-400">Corrupted DNS cache</td>
            <td class="p-4 border border-border/50 text-green-500 font-bold">Instant</td>
          </tr>
          <tr class="bg-muted/30">
            <td class="p-4 border border-border/50">Drops during streaming or gaming only</td>
            <td class="p-4 border border-border/50 font-bold text-red-400">ISP bandwidth throttling</td>
            <td class="p-4 border border-border/50 text-yellow-400 font-bold">Call ISP</td>
          </tr>
          <tr>
            <td class="p-4 border border-border/50">Single device drops, others fine</td>
            <td class="p-4 border border-border/50 font-bold text-orange-400">Device WiFi adapter issue</td>
            <td class="p-4 border border-border/50 text-green-500 font-bold">10 mins</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h2>5 Proven Worldwide Solutions</h2>
    <ol>
      <li><strong>5GHz Channel Change:</strong> Log into your router admin page (usually 192.168.1.1) and switch the WiFi channel on 2.4GHz from "Auto" to channel 1, 6 or 11. These are the only three non-overlapping channels in the 2.4GHz band. This single fix eliminates neighbor router interference.</li>
      <li><strong>Full Power Cycle on Modem + Router:</strong> Unplug your modem first, wait 30 seconds, plug it back. Then unplug the separate router, wait 30 seconds, plug it back. This sequence allows the modem to correctly re-register on the ISP network before the router tries to get a new IP address.</li>
      <li><strong>Ethernet Test:</strong> Connect a laptop directly to the modem via Ethernet cable and run our <a href="/">Free Internet Speed Test</a>. If your connection stabilizes, the fault is isolated to your router's WiFi broadcast. If it still cuts out, the fault is the modem or the ISP's cable line itself.</li>
      <li><strong>Signal Mesh Extender:</strong> If your house is large and devices at distance frequently drop, your WiFi router's radio range is the bottleneck. A mesh WiFi system like TP-Link Deco M4 creates a seamless multi-node network, eliminating dead zones.</li>
      <li><strong>ISP Line Check:</strong> Contact your ISP and request a physical line quality test. In older buildings across the USA and UK, corroded coaxial cable connectors degrade signal quality over months and years, causing intermittent drops no router setting change can fix.</li>
    </ol>

    <h2>Related Diagnostics</h2>
    <p>If your connection is dropping, it may also be experiencing <a href="/why-is-my-upload-speed-slow">slow upload speeds</a> or general wireless weakness. Run the <a href="/wifi-speed-test-online">WiFi Speed Test</a> to check your wireless signal quality separately from your wired connection.</p>
  `;

  const faqs = [
    {
      question: "Why does my internet keep disconnecting every few minutes?",
      answer: "The most common reason for periodic disconnections is router overheating. Ensure your router is placed on a flat, ventilated surface, not inside a cabinet or on carpet."
    },
    {
      question: "Why does my internet cut out at night but not during the day?",
      answer: "Evening network congestion (8–11 PM) is when thousands of neighbors simultaneously stream video. This overloads your ISP's local node, causing scheduled slowdowns and intermittent drops."
    },
    {
      question: "Can a bad ethernet cable cause internet to cut out?",
      answer: "Yes. A kinked, damaged, or low-quality Cat5e cable can cause intermittent packet loss that is indistinguishable from a full connection drop. Replace it with a new Cat6 cable."
    },
    {
      question: "How do I stop my WiFi from dropping on my phone?",
      answer: "On iPhone, go to Settings → WiFi → tap your network → Forget This Network, then reconnect. On Android, go to WiFi settings and set your IP to static to prevent DHCP renewal disconnects."
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="relative py-20 bg-gradient-to-b from-red-950/20 to-background overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: "Internet Cutting Out" }]} />
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Why Does My Internet Cut Out?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Run a quick speed test to check your ping and jitter — high jitter often indicates an unstable line.
            </p>
          </div>
          <SpeedTestWidget />
        </div>
      </section>
      <SeoContentSection
        title="5 Proven Worldwide Fixes"
        content={content}
        faqs={faqs}
      />
    </div>
  );
}
