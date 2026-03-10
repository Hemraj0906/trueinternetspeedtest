//Enhanced SEO Metadata Configuration for trueinternetspeedtest
//Comprehensive metadata for billion+ traffic ranking

// import { Metadata } from "next";

// type SEOKeywords = {
//   [key: string]: string[];
// };

// const BASE_URL = "https://trueinternetspeedtest.com";

// // Comprehensive keyword research for speed test niche
// const keywords: SEOKeywords = {
//   home: [
//     "internet speed test",
//     "speed test",
//     "wifi speed test",
//     "check internet speed",
//     "broadband speed test",
//     "download speed test",
//     "upload speed test",
//     "ping test",
//     "free speed test",
//     "online speed test",
//     "fiber speed test",
//     "5g speed test",
//     "mobile speed test",
//   ],
//   gaming: [
//     "gaming speed test",
//     "gaming latency test",
//     "online gaming speed requirements",
//     "ping test for gaming",
//     "low latency internet",
//     "best internet for gaming",
//     "fps gaming internet speed",
//     "competitive gaming internet",
//   ],
//   streaming: [
//     "streaming speed test",
//     "netflix speed test",
//     "4k streaming speed",
//     "hulu streaming speed",
//     "youtube streaming test",
//     "streaming requirements",
//     "hd streaming speed",
//     "video streaming bandwidth",
//   ],
//   mobile: [
//     "mobile speed test",
//     "4g speed test",
//     "5g speed test",
//     "lte speed test",
//     "mobile data speed",
//     "cell phone internet speed",
//     "at&t speed test",
//     "verizon speed test",
//     "t-mobile speed test",
//   ],
//   broadband: [
//     "broadband speed test",
//     "dsl speed test",
//     "cable internet speed",
//     "fiber optic speed test",
//     "home internet speed",
//     "residential internet speed",
//     "isp speed test",
//   ],
//   goodSpeed: [
//     "what is good internet speed",
//     "internet speed requirements",
//     "minimum internet speed",
//     "recommended internet speed",
//     "internet speed for streaming",
//     "internet speed for gaming",
//     "internet speed for work from home",
//   ],
//   increaseWifi: [
//     "how to increase wifi speed",
//     "boost wifi speed",
//     "improve internet speed",
//     "fix slow wifi",
//     "wifi speed tips",
//     "increase broadband speed",
//     "wifi optimization",
//   ],
// };

// // Generate dynamic metadata for each page
// export function generateHomeMetadata(): Metadata {
//   return {
//     metadataBase: new URL(BASE_URL),
//     title: {
//       default:
//         "Internet Speed Test - Check WiFi Speed Instantly | trueinternetspeedtest",
//       template: "%s | trueinternetspeedtest",
//     },
//     description:
//       "Free internet speed test to check download speed, upload speed, ping & jitter. Accurate broadband, fiber & 5G speed test. Works worldwide.",
//     keywords: keywords.home,
//     authors: [{ name: "trueinternetspeedtest" }],
//     creator: "trueinternetspeedtest",
//     publisher: "trueinternetspeedtest",
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         "max-video-preview": -1,
//         "max-image-preview": "large",
//         "max-snippet": -1,
//       },
//     },
//     openGraph: {
//       type: "website",
//       locale: "en_US",
//       url: BASE_URL,
//       siteName: "trueinternetspeedtest",
//       title: "Internet Speed Test - Check WiFi Speed Instantly",
//       description:
//         "Free internet speed test. Check download, upload, ping & jitter. Accurate results worldwide.",
//       images: [
//         {
//           url: `${BASE_URL}/og-image.png`,
//           width: 1200,
//           height: 630,
//           alt: "trueinternetspeedtest - Internet Speed Test",
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: "Internet Speed Test - trueinternetspeedtest",
//       description: "Check your WiFi speed instantly. Free online speed test.",
//       images: [`${BASE_URL}/og-image.png`],
//     },
//     alternates: {
//       canonical: BASE_URL,
//       languages: {
//         "en-US": BASE_URL,
//         "en-GB": BASE_URL,
//         "en-IN": BASE_URL,
//       },
//     },
//     verification: {
//       google: "your-google-site-verification-code",
//       yandex: "your-yandex-verification-code",
//     },
//     category: "technology",
//     classification: "Internet Speed Test",
//   };
// }

// export function generateGamingMetadata(): Metadata {
//   return {
//     metadataBase: new URL(BASE_URL),
//     title:
//       "Gaming Speed Test - Check Ping & Latency for Online Gaming | trueinternetspeedtest",
//     description:
//       "Test your internet connection for gaming. Check ping, latency, download & upload speed. Get accurate results for competitive gaming.",
//     keywords: keywords.gaming,
//     openGraph: {
//       type: "website",
//       locale: "en_US",
//       url: `${BASE_URL}/gaming-speed-test`,
//       siteName: "trueinternetspeedtest",
//       title: "Gaming Speed Test - Low Latency Internet Test",
//       description:
//         "Check if your internet is fast enough for online gaming. Test ping and latency.",
//       images: [`${BASE_URL}/og-image.png`],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: "Gaming Speed Test",
//       description: "Test your connection for online gaming",
//     },
//     alternates: {
//       canonical: `${BASE_URL}/gaming-speed-test`,
//     },
//   };
// }

// export function generateStreamingMetadata(): Metadata {
//   return {
//     metadataBase: new URL(BASE_URL),
//     title:
//       "Streaming Speed Test - Check Netflix, YouTube & HD Streaming | trueinternetspeedtest",
//     description:
//       "Test if your internet is fast enough for streaming. Check HD, 4K streaming requirements. Accurate speed test for Netflix, YouTube, Disney+.",
//     keywords: keywords.streaming,
//     openGraph: {
//       type: "website",
//       locale: "en_US",
//       url: `${BASE_URL}/streaming-speed-test`,
//       siteName: "trueinternetspeedtest",
//       title: "Streaming Speed Test - HD & 4K Streaming Requirements",
//       description: "Check if your internet supports HD and 4K streaming",
//       images: [`${BASE_URL}/og-image.png`],
//     },
//     alternates: {
//       canonical: `${BASE_URL}/streaming-speed-test`,
//     },
//   };
// }

// export function generateMobileMetadata(): Metadata {
//   return {
//     metadataBase: new URL(BASE_URL),
//     title: "Mobile Speed Test - Test 4G, LTE & 5G Speed | trueinternetspeedtest",
//     description:
//       "Test your mobile internet speed. Check 4G, LTE, and 5G data speeds. Accurate speed test for all mobile carriers.",
//     keywords: keywords.mobile,
//     openGraph: {
//       type: "website",
//       locale: "en_US",
//       url: `${BASE_URL}/mobile-speed-test`,
//       siteName: "trueinternetspeedtest",
//       title: "Mobile Speed Test - 4G, LTE & 5G Speed Test",
//       description: "Test your mobile data speed",
//       images: [`${BASE_URL}/og-image.png`],
//     },
//     alternates: {
//       canonical: `${BASE_URL}/mobile-speed-test`,
//     },
//   };
// }

// export function generateBroadbandMetadata(): Metadata {
//   return {
//     metadataBase: new URL(BASE_URL),
//     title:
//       "Broadband Speed Test - Check DSL, Cable & Fiber Speed | trueinternetspeedtest",
//     description:
//       "Test your broadband internet connection. Check DSL, cable, and fiber optic speeds. Accurate results for home internet.",
//     keywords: keywords.broadband,
//     openGraph: {
//       type: "website",
//       locale: "en_US",
//       url: `${BASE_URL}/broadband-speed-test`,
//       siteName: "trueinternetspeedtest",
//       title: "Broadband Speed Test",
//       description: "Test your broadband internet speed",
//       images: [`${BASE_URL}/og-image.png`],
//     },
//     alternates: {
//       canonical: `${BASE_URL}/broadband-speed-test`,
//     },
//   };
// }

// export function generateGoodSpeedMetadata(): Metadata {
//   return {
//     metadataBase: new URL(BASE_URL),
//     title: "What Is a Good Internet Speed? (2024 Guide) | trueinternetspeedtest",
//     description:
//       "Learn what internet speed you need for streaming, gaming, and work. Complete guide to internet speed requirements for all activities.",
//     keywords: keywords.goodSpeed,
//     openGraph: {
//       type: "article",
//       locale: "en_US",
//       url: `${BASE_URL}/what-is-good-internet-speed`,
//       siteName: "trueinternetspeedtest",
//       title: "What Is a Good Internet Speed? - Complete Guide",
//       description: "Complete guide to internet speed requirements",
//       images: [`${BASE_URL}/og-image.png`],
//     },
//     alternates: {
//       canonical: `${BASE_URL}/what-is-good-internet-speed`,
//     },
//   };
// }

// export function generateIncreaseWifiMetadata(): Metadata {
//   return {
//     metadataBase: new URL(BASE_URL),
//     title: "How to Increase WiFi Speed - 15 Proven Tips | trueinternetspeedtest",
//     description:
//       "Boost your WiFi speed with these proven tips. Learn how to improve internet speed, reduce lag, and optimize your network.",
//     keywords: keywords.increaseWifi,
//     openGraph: {
//       type: "article",
//       locale: "en_US",
//       url: `${BASE_URL}/how-to-increase-wifi-speed`,
//       siteName: "trueinternetspeedtest",
//       title: "How to Increase WiFi Speed - 15 Tips",
//       description: "Tips to boost your WiFi speed",
//       images: [`${BASE_URL}/og-image.png`],
//     },
//     alternates: {
//       canonical: `${BASE_URL}/how-to-increase-wifi-speed`,
//     },
//   };
// }

// Enhanced SEO Metadata Configuration for trueinternetspeedtest
// Ultra-Optimized for Global Ranking + LLM + Freshness Signals

import { Metadata } from "next";

type SEOKeywords = {
  [key: string]: string[];
};

const BASE_URL = "https://trueinternetspeedtest.com";

// 🔥 Dynamic Freshness Signals
const CURRENT_DATE = new Date().toISOString();
const GEO_REGION = "IN,US,GB,CA,AU,DE,FR,SG";
const CONTENT_LANGUAGE = "en";

// Comprehensive keyword research for speed test niche
const keywords: SEOKeywords = {
  home: [
    "internet speed test",
    "speed test",
    "wifi speed test",
    "check internet speed",
    "broadband speed test",
    "download speed test",
    "upload speed test",
    "ping test",
    "free speed test",
    "online speed test",
    "fiber speed test",
    "5g speed test",
    "mobile speed test",
  ],
  gaming: [
    "gaming speed test",
    "gaming latency test",
    "online gaming speed requirements",
    "ping test for gaming",
    "low latency internet",
    "best internet for gaming",
    "fps gaming internet speed",
    "competitive gaming internet",
  ],
  streaming: [
    "streaming speed test",
    "netflix speed test",
    "4k streaming speed",
    "youtube streaming test",
    "streaming requirements",
    "hd streaming speed",
    "video streaming bandwidth",
  ],
  mobile: [
    "mobile speed test",
    "4g speed test",
    "5g speed test",
    "lte speed test",
    "mobile data speed",
    "cell phone internet speed",
  ],
  broadband: [
    "broadband speed test",
    "dsl speed test",
    "cable internet speed",
    "fiber optic speed test",
    "home internet speed",
    "isp speed test",
  ],
  goodSpeed: [
    "what is good internet speed",
    "internet speed requirements",
    "minimum internet speed",
    "recommended internet speed",
  ],
  increaseWifi: [
    "how to increase wifi speed",
    "boost wifi speed",
    "improve internet speed",
    "fix slow wifi",
    "wifi speed tips",
  ],
};

// 🔥 Global Common Metadata Enhancer
function getCommonMetadata(path: string): Partial<Metadata> {
  return {
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}${path}`,
      languages: {
        "en-US": `${BASE_URL}${path}`,
        "en-GB": `${BASE_URL}${path}`,
        "en-IN": `${BASE_URL}${path}`,
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "geo.region": GEO_REGION,
      "content-language": CONTENT_LANGUAGE,
      "revisit-after": "1 days",
      distribution: "global",
      rating: "general",
      "theme-color": "#0f172a",
      "article:published_time": CURRENT_DATE,
      "article:modified_time": CURRENT_DATE,
      "og:updated_time": CURRENT_DATE,
    },
  };
}

//////////////////////////////////////////////////////////////
// HOME
//////////////////////////////////////////////////////////////

export function generateHomeMetadata(): Metadata {
  return {
    ...getCommonMetadata(""),
    title: {
      default:
        "Internet Speed Test - Check WiFi Speed Instantly | trueinternetspeedtest",
      template: "%s | trueinternetspeedtest",
    },
    description:
      "Free internet speed test to check download speed, upload speed, ping & jitter. Accurate broadband, fiber & 5G speed test worldwide.",
    keywords: keywords.home,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: BASE_URL,
      siteName: "trueinternetspeedtest",
      title: "Internet Speed Test - Check WiFi Speed Instantly",
      description:
        "Free internet speed test. Check download, upload, ping & jitter worldwide.",
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "trueinternetspeedtest - Internet Speed Test",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Internet Speed Test - trueinternetspeedtest",
      description: "Check your WiFi speed instantly. Free online speed test.",
      images: [`${BASE_URL}/og-image.png`],
    },
    category: "technology",
    classification: "Internet Speed Test",
  };
}

//////////////////////////////////////////////////////////////
// GAMING
//////////////////////////////////////////////////////////////

export function generateGamingMetadata(): Metadata {
  return {
    ...getCommonMetadata("/gaming-speed-test"),
    title:
      "Gaming Speed Test - Check Ping & Latency for Online Gaming | trueinternetspeedtest",
    description:
      "Test your internet for gaming. Check ping, latency, download & upload speed.",
    keywords: keywords.gaming,
    openGraph: {
      type: "website",
      url: `${BASE_URL}/gaming-speed-test`,
      title: "Gaming Speed Test - Low Latency Internet Test",
      description: "Check if your internet is fast enough for gaming.",
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}

//////////////////////////////////////////////////////////////
// STREAMING
//////////////////////////////////////////////////////////////

export function generateStreamingMetadata(): Metadata {
  return {
    ...getCommonMetadata("/streaming-speed-test"),
    title:
      "Streaming Speed Test - Check HD & 4K Streaming | trueinternetspeedtest",
    description:
      "Test if your internet supports HD and 4K streaming. Accurate speed test.",
    keywords: keywords.streaming,
    openGraph: {
      type: "website",
      url: `${BASE_URL}/streaming-speed-test`,
      title: "Streaming Speed Test",
      description: "Check streaming internet requirements.",
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}

//////////////////////////////////////////////////////////////
// MOBILE
//////////////////////////////////////////////////////////////

export function generateMobileMetadata(): Metadata {
  return {
    ...getCommonMetadata("/mobile-speed-test"),
    title: "Mobile Speed Test - 4G, LTE & 5G Speed | trueinternetspeedtest",
    description:
      "Test your mobile internet speed. Check 4G, LTE and 5G data speed.",
    keywords: keywords.mobile,
    openGraph: {
      type: "website",
      url: `${BASE_URL}/mobile-speed-test`,
      title: "Mobile Speed Test",
      description: "Check mobile data speed instantly.",
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}

//////////////////////////////////////////////////////////////
// BROADBAND
//////////////////////////////////////////////////////////////

export function generateBroadbandMetadata(): Metadata {
  return {
    ...getCommonMetadata("/broadband-speed-test"),
    title:
      "Broadband Speed Test - DSL, Cable & Fiber Speed | trueinternetspeedtest",
    description:
      "Check your broadband internet speed. Accurate DSL, cable & fiber test.",
    keywords: keywords.broadband,
    openGraph: {
      type: "website",
      url: `${BASE_URL}/broadband-speed-test`,
      title: "Broadband Speed Test",
      description: "Test your broadband internet speed.",
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}

//////////////////////////////////////////////////////////////
// 🔥 DYNAMIC ARTICLE GENERATOR (NEW)
//////////////////////////////////////////////////////////////

export function generateArticleMetadata(
  title: string,
  description: string,
  path: string,
  keywordGroup: string[]
): Metadata {
  return {
    ...getCommonMetadata(path),
    title: `${title} | trueinternetspeedtest`,
    description,
    keywords: keywordGroup,
    openGraph: {
      type: "article",
      url: `${BASE_URL}${path}`,
      title,
      description,
      images: [`${BASE_URL}/og-image.png`],
      publishedTime: CURRENT_DATE,
      modifiedTime: CURRENT_DATE,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${BASE_URL}/og-image.png`],
    },
  };
}
