import { Metadata } from "next";
import {
    Smartphone,
    Monitor,
    Download,
    Apple,
    Chrome,
    Laptop,
    Zap,
    ShieldCheck,
    Globe,
    Cpu,
    Wifi,
    Gauge,
    History,
    Activity,
    Video,
    Map
} from "lucide-react";
import { InstallButton } from "@/components/install-button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Get Our Official App – Fast Speed Test for Android, iOS, Windows, Mac & Apple TV",
    description: "Install the official TrueInternetSpeedTest app on your Android, iPhone, Mac, Windows, Linux, or Apple TV for the fastest and most accurate speed testing experience in 2026.",
};

export default function GetAppPage() {
    const platforms = [
        {
            id: "android",
            name: "Android",
            icon: <Smartphone className="w-8 h-8 text-green-500" />,
            browser: "Google Chrome",
            steps: [
                "Open this website in Google Chrome on your Android phone.",
                "Wait for the 'Add to Home Screen' banner or tap the three dots (⋮) menu.",
                "Select 'Install App' from the menu.",
                "Confirm the installation and enjoy the native experience."
            ]
        },
        {
            id: "ios",
            name: "iPhone & iPad",
            icon: <Apple className="w-8 h-8 text-blue-400" />,
            browser: "Safari",
            steps: [
                "Open this website in Safari on your iOS device.",
                "Tap the 'Share' icon (a square with an upward arrow) at the bottom.",
                "Scroll down and tap 'Add to Home Screen'.",
                "Tap 'Add' in the top right corner to finish."
            ]
        },
        {
            id: "windows",
            name: "Windows PC",
            icon: <Monitor className="w-8 h-8 text-blue-600" />,
            browser: "Chrome or Edge",
            steps: [
                "Open this site in Chrome or Microsoft Edge on your PC.",
                "Look for the 'Install' icon in the address bar (right side).",
                "Click 'Install' and confirm the prompt.",
                "The app will now be available in your Start Menu and Desktop."
            ]
        },
        {
            id: "macos",
            name: "macOS",
            icon: <Laptop className="w-8 h-8 text-slate-300" />,
            browser: "Chrome, Edge or Safari",
            steps: [
                "Using Chrome/Edge: Click the 'Install' icon in the URL bar.",
                "Using Safari: Go to File > Add to Dock.",
                "The app will appear in your Launchpad and Dock.",
                "Enjoy lightning-fast speeds directly from your desktop."
            ]
        },
        {
            id: "linux",
            name: "Linux Desktop",
            icon: <Cpu className="w-8 h-8 text-orange-500" />,
            browser: "Chrome or Chromium",
            steps: [
                "Open Chrome/Chromium on your Linux distribution.",
                "Click the three dots (⋮) menu in the top right corner.",
                "Navigate to 'Save and Share' -> 'Install page as app'.",
                "Accept the prompt to add it to your Application Menu."
            ]
        },
        {
            id: "appletv",
            name: "Apple TV & Smart TVs",
            icon: <Monitor className="w-8 h-8 text-indigo-400" />,
            browser: "Built-in Browser / AirPlay",
            steps: [
                "Smart TVs: Open the built-in web browser and visit this URL.",
                "Apple TV: Use AirPlay to mirror your iPhone/iPad speed test to the big screen.",
                "Shortcut: Bookmark this page in your TV's browser for quick access.",
                "Experience: Full-screen optimized UI for the best TV testing experience."
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <section className="relative pt-20 pb-16 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-bold mb-8 animate-pulse">
                        <Zap className="w-4 h-4" />
                        <span>NEW 2026 EDITION</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        Get Our <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Official App</span>
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Experience the world's fastest speed testing tool as a native app on your favorite devices. No downloads required, just instant installation.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6 mt-12">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-14 h-14 rounded-2xl bg-muted/40 dark:bg-white/5 border border-border dark:border-white/10 flex items-center justify-center hover:bg-muted dark:hover:bg-white/10 transition-colors cursor-pointer group">
                                <Apple className="w-7 h-7 text-black dark:text-white animate-in zoom-in duration-500" />
                            </div>
                            <span className="text-[10px] uppercase font-bold tracking-tighter text-muted-foreground">App Store</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-14 h-14 rounded-2xl bg-muted/40 dark:bg-white/5 border border-border dark:border-white/10 flex items-center justify-center hover:bg-muted dark:hover:bg-white/10 transition-colors cursor-pointer group">
                                <Smartphone className="w-7 h-7 text-green-600 dark:text-green-500 animate-in zoom-in duration-700" />
                            </div>
                            <span className="text-[10px] uppercase font-bold tracking-tighter text-muted-foreground">Play Store</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-14 h-14 rounded-2xl bg-muted/40 dark:bg-white/5 border border-border dark:border-white/10 flex items-center justify-center hover:bg-muted dark:hover:bg-white/10 transition-colors cursor-pointer group">
                                <Monitor className="w-7 h-7 text-blue-600 dark:text-blue-500 animate-in zoom-in duration-1000" />
                            </div>
                            <span className="text-[10px] uppercase font-bold tracking-tighter text-muted-foreground">Windows</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why App Section */}
            <section className="py-20 border-y border-border/40 bg-muted/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Why use the TrueSpeed App?</h2>
                        <p className="text-muted-foreground">The most powerful way to measure your connection</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-8 rounded-[2rem] bg-card border border-border/50 hover:border-blue-500/30 transition-all group">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <History className="text-blue-500 w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-black mb-3 italic uppercase tracking-tighter">Unlimited History</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed italic">Keep track of every test you've ever taken with detailed logs and trends over time.</p>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-card border border-border/50 hover:border-blue-500/30 transition-all group">
                            <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Activity className="text-indigo-500 w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-black mb-3 italic uppercase tracking-tighter">Advanced Metrics</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed italic">Get deeper insights into Jitter, Packet Loss, and Bufferbloat for professional diagnostics.</p>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-card border border-border/50 hover:border-blue-500/30 transition-all group">
                            <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Video className="text-green-500 w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-black mb-3 italic uppercase tracking-tighter">Video Testing</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed italic">Measure your streaming quality and see exactly which resolution your network can handle.</p>
                        </div>
                        <div className="p-8 rounded-[2rem] bg-card border border-border/50 hover:border-blue-500/30 transition-all group">
                            <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Map className="text-orange-500 w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-black mb-3 italic uppercase tracking-tighter">Global Coverage</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed italic">Access our massive network of 10,000+ servers worldwide for the most local results.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 italic uppercase tracking-tighter">Web vs App</h2>
                        <p className="text-muted-foreground">Compare the features and choose your experience</p>
                    </div>

                    <div className="rounded-[2.5rem] overflow-hidden border border-border/50 bg-card/30 backdrop-blur-xl shadow-2xl shadow-blue-500/5 transition-all">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-border/50 bg-muted/50">
                                    <th className="p-6 text-sm font-black uppercase tracking-widest text-muted-foreground">Feature</th>
                                    <th className="p-6 text-sm font-black uppercase tracking-widest">Web</th>
                                    <th className="p-6 text-sm font-black uppercase tracking-widest text-blue-500">TrueSpeed App</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border/50">
                                <tr className="hover:bg-muted/30 transition-colors">
                                    <td className="p-6 font-bold text-sm">Instant Testing</td>
                                    <td className="p-6 text-green-500">✔</td>
                                    <td className="p-6 text-green-500 font-bold italic underline">ULTRA-FAST ✔</td>
                                </tr>
                                <tr className="hover:bg-muted/30 transition-colors">
                                    <td className="p-6 font-bold text-sm">Download & Upload</td>
                                    <td className="p-6 text-green-500">✔</td>
                                    <td className="p-6 text-green-500">✔</td>
                                </tr>
                                <tr className="hover:bg-muted/30 transition-colors">
                                    <td className="p-6 font-bold text-sm">Latency & Jitter</td>
                                    <td className="p-6 text-muted-foreground">Basic</td>
                                    <td className="p-6 text-blue-400 font-bold italic">ADVANCED + GRAPHING</td>
                                </tr>
                                <tr className="hover:bg-muted/30 transition-colors">
                                    <td className="p-6 font-bold text-sm">Test History</td>
                                    <td className="p-6 text-muted-foreground">Limited</td>
                                    <td className="p-6 text-blue-400 font-bold italic">UNLIMITED (Cloud Sync)</td>
                                </tr>
                                <tr className="hover:bg-muted/30 transition-colors">
                                    <td className="p-6 font-bold text-sm">Video Quality Test</td>
                                    <td className="p-6 text-red-500/50">✖</td>
                                    <td className="p-6 text-green-500">FULL 4K/8K TEST ✔</td>
                                </tr>
                                <tr className="hover:bg-muted/30 transition-colors">
                                    <td className="p-6 font-bold text-sm">No Ads Experience</td>
                                    <td className="p-6 text-muted-foreground">Standard</td>
                                    <td className="p-6 text-blue-400 font-bold italic">PURE AD-FREE UI ✔</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Platform Instructions */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Installation Guide</h2>
                        <p className="text-muted-foreground">Follow these simple steps for your specific platform</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {platforms.map((p) => (
                            <div key={p.id} className="group relative p-8 rounded-[2.5rem] bg-card border border-border hover:border-blue-500/40 transition-all duration-500">
                                <div className="absolute top-6 right-8 opacity-20 group-hover:opacity-40 transition-opacity">
                                    {p.icon}
                                </div>
                                <div className="mb-6">
                                    <h3 className="text-2xl font-black mb-1">{p.name}</h3>
                                    <div className="flex items-center gap-1.5 text-xs font-bold text-blue-500 uppercase tracking-widest">
                                        <Chrome className="w-3 h-3" />
                                        <span>Best on {p.browser}</span>
                                    </div>
                                </div>

                                <ul className="space-y-4">
                                    {p.steps.map((step, i) => (
                                        <li key={i} className="flex gap-4">
                                            <span className="flex-none w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold flex items-center justify-center leading-none">
                                                {i + 1}
                                            </span>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {step}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="p-12 rounded-[3rem] bg-gradient-to-br from-indigo-600 to-blue-700 text-white text-center shadow-2xl shadow-blue-500/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                        <Download className="w-64 h-64" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-4 relative z-10">Ready for the Fastest Experience?</h2>
                    <p className="text-blue-100 mb-10 max-w-xl mx-auto relative z-10 font-medium">
                        Join over 1M+ users who trust TrueInternetSpeedTest for their daily speed checks on Desktop and Mobile.
                    </p>
                    <div className="inline-block relative z-10">
                        <InstallButton />
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-8 items-center text-blue-200/60 relative z-10">
                        <div className="flex items-center gap-2">
                            <Smartphone className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-wider">Mobile Optimized</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Monitor className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-wider">Desktop Integration</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe className="w-5 h-5" />
                            <span className="text-xs font-bold uppercase tracking-wider">Global Nodes</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
