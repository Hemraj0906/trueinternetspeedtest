export const seoPrefixes = [
  "free internet",
  "free wifi",
  "ultimate broadband",
  "ultimate mobile data",
  "ultimate fiber",
  "ultimate 4g",
  "ultimate 5g"
];

// Use slugs for URLs, map to highly readable names
export const seoActivities = [
  { slug: "gaming", name: "gaming" },
  { slug: "streaming", name: "streaming" },
  { slug: "zoom-calls", name: "zoom calls" },
  { slug: "video-calls", name: "video calls" },
  { slug: "youtube-upload", name: "youtube upload" },
  { slug: "work-from-home", name: "work from home" },
  { slug: "online-meetings", name: "online meetings" },
  { slug: "cloud-gaming", name: "cloud gaming" }
];

export const seoLocations = [
  { slug: "usa", name: "USA" },
  { slug: "uk", name: "UK" },
  { slug: "canada", name: "Canada" },
  { slug: "australia", name: "Australia" },
  { slug: "new-york", name: "New York" },
  { slug: "california", name: "California" },
  { slug: "london", name: "London" },
  { slug: "texas", name: "Texas" },
  { slug: "sydney", name: "Sydney" },
  { slug: "toronto", name: "Toronto" }
];

export const seoFeatures = [
  "without ads",
  "no login",
  "no download",
  "online free",
  "instant result",
  "fast result",
  "real time",
  "live checker"
];

/**
 * Utility to generate a randomized but deterministic variation of the 50k keyword list 
 * so that each generated physical page looks totally unique.
 */
export function generateLongTailKeyword(activityName: string, locationName: string, feature: string, prefixVariant: number = 0) {
  const prefix = seoPrefixes[prefixVariant % seoPrefixes.length];
  return `${prefix} speed test for ${activityName} ${feature} ${locationName}`;
}
