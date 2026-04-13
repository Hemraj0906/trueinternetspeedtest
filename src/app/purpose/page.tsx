import { seoActivities, seoLocations } from "@/lib/seo-keywords";
import { Breadcrumb } from "@/components/breadcrumb";
import Link from "next/link";
import type { Metadata } from "next";
import { Activity, Globe } from "lucide-react";

export const metadata: Metadata = {
    title: "Internet Speed Test by Specific Purpose | Programmatic Hub",
    description: "Find the highly accurate, ad-free diagnostic speed test optimized for your specific online activity and local region.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/purpose",
    }
};

export default function PurposeIndex() {
    return (
        <div className="bg-background min-h-screen">
            <section className="relative py-20 bg-gradient-to-b from-indigo-950/20 to-background overflow-hidden text-center">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <Breadcrumb items={[{ label: "Diagnostic Network Hubs" }]} />

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        Speed Optimization by <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Purpose & Region</span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                        Different online activities require vastly different connection metrics. Select your primary connection purpose below to access our specialized diagnostic tools tailored for your state or country.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {seoActivities.map(activity => (
                        <div key={activity.slug} className="mb-8">
                            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-indigo-400 capitalize">
                                <Activity size={20}/> {activity.name} Network Hub
                            </h2>
                            <ul className="space-y-2 pl-6 border-l border-indigo-900/30">
                                {seoLocations.map(location => (
                                    <li key={location.slug}>
                                        <Link 
                                            href={`/purpose/${activity.slug}/${location.slug}`}
                                            className="text-muted-foreground hover:text-indigo-400 hover:translate-x-1 inline-block transition-transform duration-200"
                                        >
                                            {activity.name.replace(/\b\w/g, l => l.toUpperCase())} in {location.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
