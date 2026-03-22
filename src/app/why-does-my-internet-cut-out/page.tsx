import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { SeoContentSection } from "@/components/seo-content-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { AlertTriangle, PowerOff, Zap, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Does My Internet Keep Cutting Out? – 10 Fixes (2026)",
  description: "Wondering 'why does my internet keep cutting out'? Learn how to fix dropping WiFi and intermittent connections. 10 expert tips for router, ISP, and cable troubleshooting.",
  alternates: {
    canonical: "https://trueinternetspeedtest.com/why-does-my-internet-cut-out",
  },
  keywords: [
    "why does my internet keep cutting out",
    "fix dropping wifi connection",
    "intermittent internet troubleshooting",
    "router keeps disconnecting fix",
    "isp line noise troubleshooting",
    "wifi signal drops randomly",
    "stop internet disconnects 2026",
  ],
};

export default function InternetCutsOutPage() {
  const content = `
    <p>Is your internet dropping during critical <strong>Zoom calls</strong> or in the middle of a movie? Asking "<strong>Why does my internet keep cutting out?</strong>" is incredibly common. Intermittent connectivity is often more frustrating than slow speeds because it's harder to diagnose. This guide helps you identify if the issue is your <strong>WiFi signal</strong>, your <strong>router hardware</strong>, or your <strong>ISP line</strong>.</p>

    <div style="background: rgba(239, 68, 68, 0.1); padding: 20px; border-radius: 12px; margin: 24px 0; border: 1px solid rgba(239, 68, 68, 0.2);">
      <h3 style="margin-top: 0; color: #dc2626;">🚨 Critical Check:</h3>
      <p>Does the internet cut out for EVERYONE, or just one phone? If it's everyone, your <strong>Router or ISP</strong> is failing. If it's just one device, that device's <strong>WiFi antenna or software cache</strong> is the culprit.</p>
    </div>

    <h2>I. Identifying the Root Cause of Disconnects</h2>
    <p>To fix <strong>dropping internet</strong>, you first need to categorize the failure using our <a href="/">Internet Speed Test</a> tool during an outage:</p>
    <ul>
      <li><strong>Router Hard-Crash:</strong> If all the lights on your router turn red or go out, your hardware is likely overheating or has a failing power supply.</li>
      <li><strong>Wireless Interference:</strong> If you lose connection only when someone uses the microwave or a cordless phone, your <strong>2.4GHz WiFi band</strong> is being jammed.</li>
      <li><strong>ISP Line Noise:</strong> If your router lights stay green but you have "No Internet," the physical fiber or copper line outside your house might have a 'Micro-break' or water damage.</li>
    </ul>

    <h2>II. Top 5 Proven Fixes for Intermittent Internet</h2>
    <ol>
      <li><strong>The 60-Second Power Cycle:</strong> Unplug both your Modem and Router. Wait a full 60 seconds (this clears the internal capacitors). Plug the Modem in first, wait for a green signal, then plug in the Router.</li>
      <li><strong>Check Your Cable Fittings:</strong> A loose <strong>Coaxial or Ethernet cable</strong> is the #1 cause of random disconnects. Ensure all 'F-type' connectors are finger-tight and that Ethernet cables 'Click' into place.</li>
      <li><strong>Separate Your WiFi Bands:</strong> If your router combines 2.4GHz and 5GHz into one name, your phone might be 'Bouncing' between them. Rename them to 'MyWiFi_2.4' and 'MyWiFi_5' to force stability.</li>
      <li><strong>Disable IPV6:</strong> Many older ISP infrastructures have poor IPv6 implementation, leading to "DNS Probes" and random timeouts. Try disabling IPv6 in your PC or Router settings.</li>
      <li><strong>Update Router Firmware:</strong> Manufacturers release patches specifically to fix <strong>connection dropping bugs</strong>. Login to your router (usually 192.168.1.1) and check for updates.</li>
    </ol>

    <div style="text-align: center; margin: 40px 0;">
      <a href="/" style="background: #dc2626; color: white; padding: 15px 30px; border-radius: 8px; font-weight: bold; text-decoration: none; display: inline-block;">Verify Connection Stability</a>
    </div>

    <h2>III. When to Call Your ISP</h2>
    <p>If you have replaced your cables and rebooted your router, but the <strong>internet still cuts out</strong> 5 times a day, the problem is 'Upstream.' Call your provider (Xfinity, Spectrum, BT, etc.) and ask them to check your <strong>'SnR' (Signal-to-Noise Ratio)</strong>. If this number is too low, they must send a technician to repair the outdoor line.</p>

    <h2>Advanced Troubleshooting Scenarios</h2>
    <p>Sometimes the cause is surprisingly specific:
      <br/>• <strong>DHCP Lease Time:</strong> If your disconnects happen exactly every 24 hours, your router's lease time is improperly configured.
      <br/>• <strong>Old Splitters:</strong> If you use a cable splitter for both TV and Internet, that 20-year-old metal box might be leaking <strong>Ingress Noise</strong> into your line.
      <br/>• <strong>Phone-Specific Drops:</strong> See our guide on <a href="/fix-slow-internet-on-phone">fixing slow internet on phone</a> or <a href="/how-come-my-wifi-is-so-slow">why WiFi is slow on iPhone</a>.
    </p>

    <h2>The Role of Overheating</h2>
    <p>Routers are small computers. If yours is in a closed cabinet or near a heater, it will throttle and eventually "Trip" a safety shutdown. Ensure your <strong>wireless router</strong> has at least 4 inches of clear space on all sides for airflow. If it feels hot to the touch, it’s already suffering <strong>thermal instability</strong>.</p>
  `;

  const faqs = [
    {
      question: "Why does my WiFi cut out only in certain rooms?",
      answer: "This is likely a 'Physical Dead Zone.' Structural materials like steel beams or brick fireplaces can block the signal completely as you move. A <a href='/wifi-speed-test-online'>Mesh WiFi system</a> can bridge these gaps."
    },
    {
      question: "Can weather make my internet drop out?",
      answer: "Major storms can cause 'Line Sway' in overhead cables, leading to physical micro-fractures in the wire. High humidity can also worsen existing corrosion in outdoor junction boxes."
    },
    {
      question: "Why does my internet cut out during video calls?",
      answer: "Video calls use a constant stream of both upload and download data. If your <a href='/why-is-my-upload-speed-slow'>upload speed is low</a>, the router might drop the session entirely if it cannot maintain the stream."
    },
    {
      question: "Will a new router stop my disconnects?",
      answer: "Only if your current router is failing. If the issue is with the physical wire coming into your house from the street, a new $500 router will not help—you must contact your ISP."
    },
    {
      question: "What is a 'Power Cycle' vs a 'Reset'?",
      answer: "A Power Cycle (turning it off/on) clears glitches but keeps your settings. A 'Reset' (the tiny pinhole button) erases everything and returns the router to factory settings. Always try a Power Cycle first."
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="relative py-20 bg-gradient-to-b from-red-950/20 to-background overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: "Internet Cutting Out" }]} />

          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium mb-4">
              <PowerOff className="w-3.5 h-3.5" />
              Connectivity Failure Diagnosis
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Why Does My Internet Keep Cutting Out?
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stop the drops. A complete guide to troubleshooting intermittent internet connections, from router placement to ISP line signal noise.
            </p>
          </div>

          <SpeedTestWidget />
        </div>
      </section>

      <SeoContentSection
        title="Stop Intermittent Drops: Fix Your Interrupted WiFi and Internet Line"
        content={content}
        faqs={faqs}
      />
    </div>
  );
}
