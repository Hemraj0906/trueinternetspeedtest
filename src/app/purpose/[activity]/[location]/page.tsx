import type { Metadata } from "next";
import { SpeedTestWidget } from "@/components/speed-test-widget";
import { FAQSection } from "@/components/faq-section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Activity, Globe, CheckCircle, Zap } from "lucide-react";
import { SocialShare } from "@/components/social-share";
import { 
    seoActivities, 
    seoLocations, 
    seoFeatures, 
    generateLongTailKeyword 
} from "@/lib/seo-keywords";

interface PageProps {
    params: {
        activity: string;
        location: string;
    };
}

export function generateStaticParams() {
    const params = [];
    for (const activity of seoActivities) {
        for (const loc of seoLocations) {
            params.push({
                activity: activity.slug,
                location: loc.slug,
            });
        }
    }
    return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const activityData = seoActivities.find(a => a.slug === params.activity) || seoActivities[0];
    const locationData = seoLocations.find(l => l.slug === params.location) || seoLocations[0];
    
    // exact match for volume/KD targets
    const primaryKeyword = generateLongTailKeyword(activityData.name, locationData.name, "without ads", 0);

    return {
        title: `${primaryKeyword} | TrueInternetSpeedTest`,
        description: `Looking for a ${primaryKeyword}? Run our highly accurate, ad-free diagnostic tool specifically optimized for ${activityData.name} in ${locationData.name}.`,
        alternates: {
            canonical: `https://trueinternetspeedtest.com/purpose/${params.activity}/${params.location}`,
        },
        keywords: seoFeatures.map(feat => generateLongTailKeyword(activityData.name, locationData.name, feat, Math.floor(Math.random() * 5))),
    };
}

export default function DynamicSeoPage({ params }: PageProps) {
    const activityData = seoActivities.find(a => a.slug === params.activity) || seoActivities[0];
    const locationData = seoLocations.find(l => l.slug === params.location) || seoLocations[0];

    // Capitalize helpers
    const ActivityName = activityData.name.replace(/\b\w/g, l => l.toUpperCase());
    const LocationName = locationData.name.replace(/\b\w/g, l => l.toUpperCase());

    const faqs = seoFeatures.map((feat, index) => {
        const keyword = generateLongTailKeyword(activityData.name, locationData.name, feat, index);
        return {
            question: `Where can I find a ${keyword}?`,
            answer: `You are in exactly the right place. Our platform is exclusively designed to provide a ${feat} experience for users doing ${activityData.name} in ${locationData.name}. We utilize multi-CDN edge nodes to ensure maximum relevance and latency accuracy.`
        };
    });

    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-indigo-950/20 to-background overflow-hidden text-center">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <Breadcrumb items={[
                        { label: "Purpose", href: "/purpose" },
                        { label: ActivityName, href: `/purpose/${params.activity}` },
                        { label: LocationName }
                    ]} />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight capitalize">
                        Free Internet Speed Test For {ActivityName} – <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">{LocationName}</span>
                    </h1>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-8">
                        <Activity className="w-3.5 h-3.5" />
                        Optimized for {ActivityName} Connections
                    </div>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Stop buffering while {activityData.name}. Test your exact ping, jitter, and download bandwidth locally in {LocationName} to diagnose your latency instantly.
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
                                    Diagnostic Guide: The Best Connection for {ActivityName} in {LocationName}
                                </h2>

                                <div className="prose dark:prose-invert prose-indigo max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-indigo-500 hover:prose-a:text-indigo-400">
                                    <p>When you are relying on your home network for <strong>{activityData.name}</strong>, raw download speeds are only half the battle. In areas like {LocationName}, localized ISP routing can severely throttle your packets causing high latency and jitter.</p>

                                    <div style={{ background: "rgba(99, 102, 241, 0.1)", padding: "25px", borderRadius: "16px", margin: "32px 0", border: "1px solid rgba(99, 102, 241, 0.2)" }}>
                                        <h3 style={{ marginTop: 0, color: "#6366f1", display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <Zap size={20}/> 50k Keyword Combinations Detected
                                        </h3>
                                        <p>Whether you're looking for a <em>{generateLongTailKeyword(activityData.name, locationData.name, "live checker", 1)}</em> or an <em>{generateLongTailKeyword(activityData.name, locationData.name, "instant result", 2)}</em>, our engine uses pure HTML5 logic to bypass ISP bottlenecks.</p>
                                    </div>

                                    <h2>Why Quality Matters in {LocationName}</h2>
                                    <p>Standard ISP speed checks automatically route you to their internal servers. This makes your speed look phenomenal artificially. If you demand a <strong>{generateLongTailKeyword(activityData.name, locationData.name, "without ads", 4)}</strong>, you need true Edge Node testing.</p>

                                    <ul>
                                        {seoFeatures.slice(0, 4).map((feat, i) => (
                                            <li key={i}><strong>{feat.toUpperCase()}:</strong> Experience a {generateLongTailKeyword(activityData.name, locationData.name, feat, i)} instantly at no cost.</li>
                                        ))}
                                    </ul>
                                </div>
                                <FAQSection faqs={faqs} />
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-4 py-20 lg:sticky lg:top-24 h-fit">
                        <SocialShare 
                            title={`I just audited my local connection in ${LocationName} for ${ActivityName} quality! Check yours here:`} 
                        />
                        <div className="bg-card/50 p-6 rounded-2xl border border-border/50 mt-8">
                            <h3 className="font-bold mb-4 flex items-center gap-2">
                                <Globe className="text-indigo-400" size={18}/> 
                                Local Routing: {LocationName}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Our diagnostic servers route directly through high-capacity CDN nodes local to {LocationName}, ensuring you bypass artificial ISP prioritization meant to fake speed results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
