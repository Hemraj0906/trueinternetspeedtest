import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { SeoContentSection } from "@/components/seo-content-section";
import { Breadcrumb } from "@/components/breadcrumb";

export const metadata: Metadata = {
    title: "Latency Test – Check Internet Latency, Jitter & Packet Loss",
    description: "Free latency test online. Measure your internet latency, jitter, and packet loss instantly. Learn what causes high latency and how to reduce it for gaming and video calls.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/latency-test",
    },
    keywords: [
        "latency test",
        "what is latency in internet",
        "jitter test",
        "packet loss test",
        "internet latency check",
        "high latency fix",
        "network latency test",
    ],
};

export default function LatencyTestPage() {
    const content = `
    <h2>What Is Internet Latency?</h2>
    <p>Latency is the time delay between sending a request and receiving a response. In plain terms: you click a link — how long until the page starts loading? You fire a shot in a game — how long until the server registers it? That delay is latency, measured in milliseconds (ms).</p>
    <p><strong>Low latency = fast, responsive connection. High latency = slow, laggy connection.</strong> Run the test above to measure your exact latency right now.</p>

    <h2>Latency vs Ping: Are They the Same?</h2>
    <p>Latency and ping are often used interchangeably, and in most contexts they mean the same thing: the round-trip time for a data packet. Technically:</p>
    <ul>
      <li><strong>Latency</strong> = the total time delay in a network path (one-way or round-trip)</li>
      <li><strong>Ping</strong> = a specific test that measures round-trip latency to a target server</li>
    </ul>
    <p>When gamers say "my ping is 30ms," they mean round-trip latency is 30 milliseconds. Both terms are valid and refer to the same measurement in everyday usage.</p>

    <h2>What Is Jitter?</h2>
    <p>Jitter measures the <em>variation</em> in latency over time. If your ping measures 20ms, then 50ms, then 18ms, then 80ms in rapid succession — that unpredictability is jitter.</p>
    <p>Jitter is often more disruptive than consistently high latency. A connection with 80ms ping but 2ms jitter is more playable than one with 30ms average ping but 40ms jitter. Here's why:</p>
    <ul>
      <li>Online games use jitter to calculate expected timing. High jitter causes rubber-banding and teleporting enemies in gameplay.</li>
      <li>VoIP calls (Zoom, Teams, phone calls) use jitter buffers to smooth variations. Very high jitter overwhelms these buffers, causing audio gaps and drops.</li>
      <li>Video streaming buffers enough data that jitter rarely affects the experience unless it's extremely high.</li>
    </ul>

    <h2>What Is Packet Loss?</h2>
    <p>Packet loss occurs when data packets sent across a network fail to reach their destination and must be retransmitted. Even 1–2% packet loss can cause noticeable degradation:</p>
    <ul>
      <li><strong>Gaming:</strong> 1% packet loss causes noticeable lag. 5%+ makes competitive play nearly impossible.</li>
      <li><strong>Video calls:</strong> Pixelated video, audio dropout, and call disconnects.</li>
      <li><strong>File transfers:</strong> Significantly slower downloads as TCP retransmits lost data.</li>
    </ul>
    <p>Packet loss above 0% outside of testing conditions indicates a hardware fault, congested network, or ISP issue.</p>

    <h2>Latency Benchmarks: What Numbers Are Good?</h2>
    <ul>
      <li><strong>Under 10ms:</strong> Exceptional. Typically local data center. Unmistakably fast.</li>
      <li><strong>10–30ms:</strong> Excellent for all activities including competitive gaming.</li>
      <li><strong>30–60ms:</strong> Good. Most users won't notice any delay in casual gaming or video calls.</li>
      <li><strong>60–100ms:</strong> Acceptable. Some lag noticeable in fast-paced games. Video calls may show slight audio delay.</li>
      <li><strong>100–200ms:</strong> Poor. Significant gaming lag. Video calls deteriorate noticeably.</li>
      <li><strong>200ms+:</strong> Unusable for gaming or real-time communication. Investigate immediately.</li>
    </ul>

    <h2>What Causes High Latency?</h2>
    <ul>
      <li><strong>Physical distance to server:</strong> Light travels fast, but it still takes time. From India to a US server, the minimum physical latency is ~120ms just from distance (speed of light).</li>
      <li><strong>WiFi overhead:</strong> Wireless protocols add protocol overhead and can double latency compared to a wired connection, especially in crowded WiFi environments.</li>
      <li><strong>Router processing delay:</strong> Overloaded or old routers with slow processors add queue processing time to every packet.</li>
      <li><strong>ISP routing inefficiency:</strong> Some ISPs send traffic through multiple hops across suboptimal routes, adding unnecessary latency.</li>
      <li><strong>Bufferbloat:</strong> When your connection is fully saturated (a download running), routers queue packets, causing massive latency spikes. This is "bufferbloat" and is very common and underdiagnosed.</li>
    </ul>

    <h2>How to Reduce Latency</h2>
    <ul>
      <li><strong>Use Ethernet:</strong> The single biggest latency reducer available. Eliminates WiFi overhead instantly.</li>
      <li><strong>Enable QoS/SQM on your router:</strong> Smart Queue Management eliminates bufferbloat by intelligently prioritizing small latency-sensitive packets over large bulk transfers.</li>
      <li><strong>Connect to the nearest server:</strong> In games and VPN services, always choose the server geographically closest to you.</li>
      <li><strong>Use a gaming router:</strong> Routers with dedicated QoS and gaming VPN modes (like ASUS, NETGEAR Nighthawk) can reduce latency by 20–40% through traffic prioritization.</li>
      <li><strong>Upgrade your router firmware:</strong> Manufacturers regularly release firmware that improves packet processing efficiency.</li>
    </ul>
    <p>For gaming-specific latency tips, see our <a href="/how-to-reduce-ping-gaming">how to reduce ping</a> guide, or run a full <a href="/gaming-speed-test">gaming speed test</a> for a comprehensive analysis.</p>
    `;

    const faqs = [
        {
            question: "What is a good latency for internet?",
            answer: "For general internet browsing and streaming, under 100ms latency is perfectly fine. For video calls, under 50ms is ideal. For online gaming — especially competitive multiplayer like FPS games — under 30ms is desired and under 20ms is excellent. Fiber internet in India typically delivers 5–15ms latency to local servers."
        },
        {
            question: "What causes jitter on my internet connection?",
            answer: "Jitter is caused by inconsistent routing, network congestion, WiFi interference, overloaded routers, and ISP instability. WiFi is the most common cause of high jitter in residential settings. Switching to a wired Ethernet connection typically reduces jitter from 20–50ms to 1–5ms instantly."
        },
        {
            question: "How do I check my packet loss?",
            answer: "You can test packet loss using our speed test (which also shows packet loss when significant loss is detected), or use the command prompt ping test: type 'ping -n 100 8.8.8.8' on Windows. If you see any 'Request timed out' responses, you have packet loss. Any loss above 0% in a home connection is unusual and should be investigated."
        },
        {
            question: "Does a VPN increase or decrease latency?",
            answer: "A VPN almost always increases latency because your traffic now travels an extra hop through the VPN server. Expect 5–30ms higher ping with a VPN. However, if your ISP routes traffic poorly (e.g., to a distant server), a VPN with a well-placed server can occasionally result in lower game server ping. Test empirically with and without the VPN."
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-yellow-950/20 to-background overflow-hidden">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <Breadcrumb items={[{ label: "Latency Test" }]} />

                    <div className="text-center mb-12">
                        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                            Latency Test – Measure Ping, Jitter & Packet Loss
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            High latency ruining your gaming or video calls? Test your exact latency, jitter, and packet loss right now and learn how to fix it.
                        </p>
                    </div>

                    <SpeedTestWidget />
                </div>
            </section>

            <SeoContentSection
                title="Complete Latency Guide: Ping, Jitter, and Packet Loss Explained"
                content={content}
                faqs={faqs}
            />
        </div>
    );
}
