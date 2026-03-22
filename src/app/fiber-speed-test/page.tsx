import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { SeoContentSection } from "@/components/seo-content-section";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
    title: "Fiber Speed Test – Check Your Fiber Optic Internet Speed",
    description: "Test your fiber optic internet speed. Verify if your fiber broadband plan delivers 100, 300, or 1 Gbps as promised. Free, accurate, instant results.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/fiber-speed-test",
    },
    keywords: [
        "fiber speed test",
        "fiber optic internet speed",
        "fiber broadband speed test",
        "Jio Fiber speed test",
        "FTTH speed test",
        "gigabit internet speed test",
    ],
};

export default function FiberSpeedTestPage() {
    const content = `
    <h2>What Is Fiber Optic Internet?</h2>
    <p>Fiber optic internet transmits data as pulses of light through thin glass or plastic cables. Unlike copper DSL or cable internet which transmits electrical signals, fiber has virtually no signal degradation over distance. This is why fiber is the fastest and most reliable type of home broadband available today.</p>
    <p>Providers like <strong>Jio Fiber, Airtel Xstream Fiber, ACT Broadband, and BSNL FTTH</strong> deliver fiber to millions of Indian homes. But are you actually getting the speeds you're paying for? Run the test above to find out.</p>

    <h2>What Speed Should Fiber Deliver?</h2>
    <p>Fiber plans typically offer much higher speeds than cable or DSL. Here's what to expect:</p>
    <ul>
      <li><strong>30–100 Mbps fiber plan:</strong> Basic fiber. You should see 25–95 Mbps consistently. If you see under 20 Mbps, investigate WiFi quality.</li>
      <li><strong>200–300 Mbps plan:</strong> Mid-tier fiber. Perfect for families. Expect 180–280 Mbps on a wired connection.</li>
      <li><strong>500 Mbps plan:</strong> Premium fiber. A wired device should see 450–500 Mbps. WiFi may show 200–400 Mbps depending on router quality.</li>
      <li><strong>1 Gbps (1000 Mbps) plan:</strong> Gigabit fiber. Wired speeds of 700–950 Mbps are realistic. Most home WiFi routers cannot deliver the full gigabit wirelessly.</li>
    </ul>

    <h2>Why Is My Fiber Speed Lower Than My Plan?</h2>
    <p>Fiber to the home (FTTH) is the gold standard, but several factors can still slow things down:</p>
    <ul>
      <li><strong>WiFi Bottleneck:</strong> This is the #1 reason fiber users don't see their full plan speed on WiFi. An old WiFi 5 router caps at 200–400 Mbps and can't push gigabit wirelessly. Upgrade to a WiFi 6 or WiFi 6E router to eliminate this bottleneck.</li>
      <li><strong>Ethernet Cable Category:</strong> To test full gigabit speeds, you need a Cat5e or Cat6 cable. Older Cat5 cables max out at 100 Mbps!</li>
      <li><strong>ONT (Optical Network Terminal) Issues:</strong> The small white box installed by the technician converts fiber light signals to Ethernet. If it's malfunctioning, speeds drop. Restart it by unplugging for 30 seconds.</li>
      <li><strong>Internal Home Wiring:</strong> In MDU apartments (multi-dwelling units), fiber may arrive at the building's distribution point and then travel to your unit over older copper wiring — negating much of fiber's advantage.</li>
      <li><strong>ISP Oversubscription:</strong> During peak hours, even fiber networks can get congested if the ISP has oversold capacity in your area.</li>
    </ul>

    <h2>How to Test Your Fiber Speed Accurately</h2>
    <p>For the most accurate fiber speed test readings, follow this procedure:</p>
    <ul>
      <li><strong>Use a wired Ethernet connection:</strong> Connect your laptop or PC directly to the router/ONT with a Cat6 cable for the baseline reading.</li>
      <li><strong>Test at the ONT:</strong> If your laptop can connect directly to the ONT (optical modem), bypass the router entirely. This isolates the speed to just your ISP's network.</li>
      <li><strong>Run 3 tests, average the result:</strong> Single tests can be skewed by temporary traffic. Three consecutive tests give a reliable picture.</li>
      <li><strong>Test at different times:</strong> Morning and evening results help reveal peak-hour congestion.</li>
    </ul>

    <h2>Fiber vs Cable vs DSL: Speed Comparison</h2>
    <ul>
      <li><strong>Fiber (FTTH):</strong> Download: 50 Mbps – 10 Gbps | Upload: Often symmetric | Latency: 1–5ms</li>
      <li><strong>Cable (DOCSIS):</strong> Download: 50–1200 Mbps | Upload: 10–50 Mbps (asymmetric) | Latency: 5–15ms</li>
      <li><strong>DSL/VDSL:</strong> Download: 5–100 Mbps | Upload: 1–20 Mbps | Latency: 10–40ms</li>
      <li><strong>4G Mobile:</strong> Download: 10–80 Mbps | Upload: 5–30 Mbps | Latency: 30–60ms</li>
    </ul>
    <p>Fiber wins on every metric, which is why the Indian government's BharatNet and private operators are rapidly expanding fiber coverage. Also compare: <a href="/broadband-speed-test">broadband speed test</a> and <a href="/wifi-speed-test-online">WiFi speed test</a>.</p>

    <h2>Getting the Best From Jio Fiber and Airtel Xstream Fiber</h2>
    <p>Both carriers offer excellent fiber plans, but each has quirks to know:</p>
    <ul>
      <li><strong>Jio Fiber:</strong> The Jio Home Gateway router is WiFi 5. For gigabit plans, replace or add a WiFi 6 access point. Enable 5GHz band on all your primary devices.</li>
      <li><strong>Airtel Xstream Fiber:</strong> Airtel often provides more stable latency during peak hours. Their router supports WiFi 5/6 depending on the model. Ensure DHCP lease is renewed after plan upgrades.</li>
    </ul>
    `;

    const faqs = [
        {
            question: "What should my fiber internet speed be?",
            answer: "On a wired Ethernet connection, you should achieve 85–95% of your plan's advertised speed. On WiFi, expect 60–85% of the plan speed depending on your router's WiFi standard (WiFi 5 vs WiFi 6) and distance from the router. Anything below 50% of your plan speed on Ethernet warrants a call to your ISP."
        },
        {
            question: "Why does my 1 Gbps fiber show only 300 Mbps on WiFi?",
            answer: "This is normal if you're using an older router. Most WiFi 5 (802.11ac) routers have a real-world maximum of 300–500 Mbps on a single stream. To get closer to gigabit speeds over WiFi, you need a WiFi 6 or WiFi 6E router supporting 160 MHz channels. A wired Ethernet connection will immediately show much higher speeds."
        },
        {
            question: "Is fiber internet available in rural India?",
            answer: "Fiber availability in rural India is expanding rapidly through the BharatNet project, which aims to connect all 600,000+ gram panchayats with optical fiber. However, actual last-mile consumer connections remain limited in many areas. BSNL FTTH and Jio Fiber are the primary carriers expanding to smaller towns."
        },
        {
            question: "How do I know if I'm getting true fiber or a mixed copper connection?",
            answer: "Ask your ISP if their service is FTTH (Fiber to the Home) or FTTB (Fiber to the Building/Cabinet). FTTH runs fiber all the way to your wall plug. FTTB delivers fiber to your building but uses copper for the final stretch to your unit, limiting speeds. True FTTH gives you the best possible speeds."
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-sky-950/20 to-background overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <Breadcrumb items={[{ label: "Fiber Speed Test" }]} />

                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                            Fiber Speed Test – Is Your Fiber Delivering?
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Verify your Jio Fiber, Airtel Xstream, or BSNL FTTH plan speed. Instantly measure real download, upload, and latency on your fiber connection.
                        </p>
                    </div>

                    <SpeedTestWidget />
                </div>
            </section>

            <SeoContentSection
                title="Fiber Optic Internet Speed Guide: What to Expect & How to Optimize"
                content={content}
                faqs={faqs}
            />
        </div>
    );
}
