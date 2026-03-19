import React from 'react';

export interface FaqItem {
    question: string;
    answer: string;
}

export interface SeoContentSectionProps {
    title: string;
    content: string;
    faqs?: FaqItem[];
}

export function SeoContentSection({ title, content, faqs }: SeoContentSectionProps) {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 mt-16 md:mt-24 pt-12 border-t border-border/40 pb-20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground leading-tight">{title}</h2>

                <div
                    className="prose dark:prose-invert prose-blue max-w-none mb-16 text-muted-foreground prose-headings:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-a:text-blue-500 hover:prose-a:text-blue-400"
                    dangerouslySetInnerHTML={{ __html: content }}
                />

                {faqs && faqs.length > 0 && (
                    <div className="mt-16 pt-10 border-t border-border/20">
                        <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-card/50 p-6 rounded-2xl border border-border/50 hover:border-border transition-colors">
                                    <h4 className="font-semibold text-lg mb-3 text-foreground">{faq.question}</h4>
                                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify({
                                    "@context": "https://schema.org",
                                    "@type": "FAQPage",
                                    mainEntity: faqs.map(faq => ({
                                        "@type": "Question",
                                        name: faq.question,
                                        acceptedAnswer: {
                                            "@type": "Answer",
                                            text: faq.answer
                                        }
                                    }))
                                })
                            }}
                        />
                    </div>
                )}
            </div>
        </section>
    );
}
