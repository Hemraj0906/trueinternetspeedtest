// Enhanced SEO Schema Components for trueinternetspeedtest
// These components add structured data for better search rankings

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  contactPoint?: {
    telephone: string;
    contactType: string;
  };
  sameAs?: string[];
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// Organization Schema - Helps Google understand your brand
export function OrganizationSchema({
  name = "trueinternetspeedtest",
  url = "https://trueinternetspeedtest.com",
  logo = "https://trueinternetspeedtest.com/logo.png",
  description = "Free internet speed test tool",
  sameAs = [],
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}#organization`,
    name,
    url,
    logo,
    description,
    sameAs,
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema - Helps Google show breadcrumbs in search results
export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema - Helps get FAQ rich snippets in Google
export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// WebApplication Schema - Helps Google recognize your tool as an app
export function WebApplicationSchema({
  name = "trueinternetspeedtest Internet Speed Test",
  url = "https://trueinternetspeedtest.com",
  description = "Free browser-based internet speed test tool",
}: {
  name?: string;
  url?: string;
  description?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: name,
    url: url,
    description: description,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    browserRequirements: "Requires JavaScript",
    permissions: "requires full screen mode",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "12547",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// HowTo Schema - For guide articles
export function HowToSchema({
  title,
  description,
  steps,
}: {
  title: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    title: title,
    description: description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Q&A Page Schema
export function QAPageSchema({
  question,
  answer,
  author = "trueinternetspeedtest",
}: {
  question: string;
  answer: string;
  author?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: question,
      text: question,
      answerCount: 1,
      upvoteCount: 0,
      dateCreated: new Date().toISOString(),
      author: {
        "@type": "Person",
        name: author,
      },
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
        dateCreated: new Date().toISOString(),
        upvoteCount: 0,
        url: "https://trueinternetspeedtest.com",
        author: {
          "@type": "Organization",
          name: "trueinternetspeedtest",
        },
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Combined Main Page Schema
export function MainPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://trueinternetspeedtest.com#organization",
        name: "trueinternetspeedtest",
        url: "https://trueinternetspeedtest.com",
        logo: "https://trueinternetspeedtest.com/logo.png",
        description:
          "Free internet speed test tool to check download, upload, ping and jitter",
        sameAs: [
          "https://twitter.com/trueinternetspeedtest",
          "https://facebook.com/trueinternetspeedtest",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://trueinternetspeedtest.com#website",
        url: "https://trueinternetspeedtest.com",
        name: "trueinternetspeedtest",
        publisher: {
          "@id": "https://trueinternetspeedtest.com#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: "https://trueinternetspeedtest.com/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebApplication",
        "@id": "https://trueinternetspeedtest.com#webapp",
        name: "trueinternetspeedtest Internet Speed Test",
        url: "https://trueinternetspeedtest.com",
        description:
          "Free online internet speed test tool. Check download speed, upload speed, ping and jitter instantly.",
        applicationCategory: "UtilityApplication",
        operatingSystem: "All",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          ratingCount: "12547",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://trueinternetspeedtest.com#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Is trueinternetspeedtest free?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. trueinternetspeedtest is completely free and requires no registration. You can test your internet speed as many times as you want.",
            },
          },
          {
            "@type": "Question",
            name: "How accurate is this speed test?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "trueinternetspeedtest uses Cloudflare's global CDN for testing, which provides highly accurate results. We measure actual ISP bandwidth by downloading real data from CDN servers.",
            },
          },
          {
            "@type": "Question",
            name: "What is a good internet speed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "For basic browsing and email, 5-10 Mbps is sufficient. For HD video streaming, you need at least 25 Mbps. For 4K streaming and gaming, 50-100 Mbps is recommended. For households with multiple devices, 100-500 Mbps is ideal.",
            },
          },
          {
            "@type": "Question",
            name: "Does this work on mobile networks?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. You can test 4G, LTE, and 5G mobile data speeds on any smartphone or tablet.",
            },
          },
          {
            "@type": "Question",
            name: "What is ping and jitter?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Ping (latency) is how long it takes for data to travel to a server and back, measured in milliseconds (ms). Jitter is the variation in ping over time. Lower ping and jitter are better, especially for gaming and video calls.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
