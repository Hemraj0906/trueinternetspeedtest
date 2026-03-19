import Link from "next/link";
import { getBlogPosts } from "@/lib/blog-data";
import type { Metadata } from "next";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
    title: "Internet Speed Guides & Tips | TrueInternetSpeedTest",
    description:
        "Read the latest guides, tips, and troubleshooting steps to fix slow internet, lower ping, and increase your WiFi speed permanently.",
    alternates: {
        canonical: "https://trueinternetspeedtest.com/blog",
    },
};

export default function BlogListing() {
    const posts = getBlogPosts();

    return (
        <div className="max-w-4xl mx-auto p-6 md:p-8 mt-10">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500">
                    <BookOpen className="w-6 h-6" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                    Internet Speed Guides
                </h1>
            </div>

            <p className="text-muted-foreground mb-10 text-lg">
                Master your network with our step-by-step troubleshooting guides, latency fixes, and WiFi optimization strategies.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
                {posts.map((post) => (
                    <Link
                        href={`/blog/${post.slug}`}
                        key={post.slug}
                        className="flex flex-col p-6 bg-card border border-border/50 rounded-2xl hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 group"
                    >
                        <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors leading-tight">
                            {post.title}
                        </h2>
                        <p className="text-muted-foreground text-sm flex-1">
                            {post.description}
                        </p>
                        <div className="mt-6 text-sm font-semibold text-blue-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                            Read Guide &rarr;
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
