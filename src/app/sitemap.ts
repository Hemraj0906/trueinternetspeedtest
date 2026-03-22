import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://trueinternetspeedtest.com";
  const now = new Date();

  return [
    // Core Tool (Priority 1.0)
    { url: baseUrl, lastModified: now, changeFrequency: "daily", priority: 1 },

    // ── NEW: High-Volume Tool Pages (Priority 0.95) ──────────────────────────
    { url: `${baseUrl}/check-internet-speed`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/download-speed-test`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/upload-speed-test`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/ping-test-online`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/network-speed-test`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/latency-test`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/5g-speed-test`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/4g-speed-test`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/fiber-speed-test`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },

    // ── NEW: ISP-Specific Pages (Priority 0.88) ──────────────────────────────
    { url: `${baseUrl}/vi-speed-test`, lastModified: now, changeFrequency: "weekly", priority: 0.88 },
    { url: `${baseUrl}/bsnl-speed-test`, lastModified: now, changeFrequency: "weekly", priority: 0.88 },

    // ── NEW: Informational Pages (Priority 0.82) ─────────────────────────────
    { url: `${baseUrl}/good-download-speed`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },
    { url: `${baseUrl}/is-my-internet-fast-enough`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },

    // ── NEW: Comparison Pages (Priority 0.78) ────────────────────────────────
    { url: `${baseUrl}/jio-fiber-vs-airtel-xstream`, lastModified: now, changeFrequency: "monthly", priority: 0.78 },
    { url: `${baseUrl}/bsnl-vs-jio-speed-comparison`, lastModified: now, changeFrequency: "monthly", priority: 0.78 },

    // Existing Speed Test Pages (Priority 0.9)
    { url: `${baseUrl}/gaming-speed-test`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/streaming-speed-test`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/mobile-speed-test`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/broadband-speed-test`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/wifi-speed-test-online`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/test-my-internet-speed`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },

    // Country & ISP Pages (Priority 0.85)
    { url: `${baseUrl}/india-speed-test`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/jio-speed-test`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/airtel-speed-test`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/internet-speed-test-usa`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${baseUrl}/internet-speed-test-uk`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },

    // Informational / Troubleshooting Pages (Priority 0.8)
    { url: `${baseUrl}/why-is-my-internet-slow`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/why-is-my-upload-speed-slow`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/why-does-my-internet-cut-out`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/how-come-my-wifi-is-so-slow`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/how-to-reduce-ping-gaming`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/fix-slow-internet-on-phone`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/what-is-good-internet-speed`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/how-to-increase-wifi-speed`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/internet-speed-for-gaming-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Comparison Pages (Priority 0.75)
    { url: `${baseUrl}/wifi-vs-ethernet-speed`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/is-100-mbps-fast`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/best-free-speed-test-tools-2026`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },

    // Blog Hub (Priority 0.8)
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

    // Company Pages (Priority 0.6)
    { url: `${baseUrl}/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact-us`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/terms-conditions`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/disclaimer`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}

