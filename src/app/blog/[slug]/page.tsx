import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Zap } from "lucide-react";

export function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://trueinternetspeedtest.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: `https://trueinternetspeedtest.com/blog/${post.slug}`,
    }
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  } : null;

  return (
    <article className="max-w-3xl mx-auto p-6 md:p-8 mt-6">
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Guides
      </Link>

      <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
        {post.title}
      </h1>

      <div
        className="prose dark:prose-invert prose-blue max-w-none prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {post.faqs && post.faqs.length > 0 && (
        <div className="mt-16 pt-10 border-t border-border/40">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {post.faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-card border border-border/50 rounded-2xl">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-16 p-8 md:p-10 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl text-center border border-blue-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:16px_16px]" />
        <div className="relative z-10">
          <div className="mx-auto w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mb-6">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Check Your Current Speed</h3>
          <p className="mb-8 text-muted-foreground max-w-md mx-auto">
            Stop guessing your internet speed. Test your exact Ping, Download, and Upload bandwidth right now.
          </p>
          <Link
            href="/"
            className="inline-flex px-8 py-3.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-500/25"
          >
            Run Free Speed Test
          </Link>
        </div>
      </div>
    </article>
  );
}
