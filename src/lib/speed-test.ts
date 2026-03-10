// // High-Accuracy Speed Test Engine
// // Uses real external CDN sources for accurate internet speed measurement
// // Upload is simulated (slightly less than download) for fast results
// // Total test time: ~6 seconds

// export type SpeedTestPhase =
//   | "idle"
//   | "ping"
//   | "download"
//   | "upload"
//   | "complete";

// export interface SpeedTestResult {
//   city: string;
//   region: string;
//   country: string;
//   countryCode: string;
//   download: number;
//   upload: number;
//   ping: number;
//   jitter: number;
//   ip: string;
//   isp: string;
//   server: string;
//   timestamp: string;
//   calculationTime?: number;
// }

// export interface SpeedTestState {
//   phase: SpeedTestPhase;
//   progress: number;
//   currentSpeed: number;
//   result: SpeedTestResult | null;
//   error: string | null;
// }

// // ============================================
// // SPEED RATING FUNCTIONS
// // ============================================

// export function getSpeedRating(speed: number) {
//   if (speed < 5)
//     return {
//       label: "Very Slow",
//       color: "#ef4444",
//       description: "Not suitable for most online activities",
//     };

//   if (speed < 25)
//     return {
//       label: "Basic",
//       color: "#f59e0b",
//       description: "Suitable for browsing and SD video",
//     };

//   if (speed < 50)
//     return {
//       label: "Good",
//       color: "#10b981",
//       description: "Good for HD streaming and gaming",
//     };

//   if (speed < 100)
//     return {
//       label: "Fast",
//       color: "#3b82f6",
//       description: "Great for 4K streaming",
//     };

//   return {
//     label: "Very Fast",
//     color: "#6366f1",
//     description: "Excellent connection",
//   };
// }

// export function getPingRating(ping: number) {
//   if (ping < 20) return { label: "Excellent", color: "#10b981" };
//   if (ping < 50) return { label: "Good", color: "#3b82f6" };
//   if (ping < 100) return { label: "Average", color: "#f59e0b" };
//   return { label: "Poor", color: "#ef4444" };
// }

// // ============================================
// // IP CACHE WITH EXPIRATION (5 minutes)
// // ============================================

// interface CachedIP {
//   ip: string;
//   isp: string;
//   city: string;
//   region: string;
//   country: string;
//   countryCode: string;
//   expires: number;
// }

// let cachedIP: CachedIP | null = null;
// const IP_CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

// // ============================================
// // REAL CDN DOWNLOAD TEST URLS
// // These are real public test files from CDNs and ISP test servers.
// // Fetching these measures actual internet speed (not loopback).
// // ============================================
// const CDN_TEST_URLS = [
//   // Cloudflare speed test file (10MB)
//   "https://speed.cloudflare.com/__down?bytes=10000000",
//   // ThinkBroadband 10MB test file
//   "https://testmy.net/dl/random10000",
//   // Fallback to Cloudflare with cache busting
//   "https://speed.cloudflare.com/__down?bytes=5000000",
// ];

// // ============================================
// // PING ENDPOINT: Cloudflare is fastest globally
// // ============================================
// const PING_URL = "https://speed.cloudflare.com/__down?bytes=1";

// // ============================================
// // IP FETCH
// // ============================================
// async function fetchIPInfo(signal?: AbortSignal): Promise<CachedIP> {
//   // Use cached value if fresh
//   if (cachedIP && Date.now() < cachedIP.expires) {
//     return cachedIP;
//   }

//   // Try local Next.js API first
//   try {
//     const res = await fetch("/api/speed-test/ip", {
//       signal,
//       cache: "no-store",
//     });
//     if (res.ok) {
//       const data = await res.json();
//       cachedIP = {
//         ip: data.ip || "N/A",
//         isp:
//           (typeof data.isp === "string" && data.isp.trim()) ||
//           (typeof data.org === "string" && data.org.trim()) ||
//           "Unknown ISP",
//         city: data.city || "",
//         region: data.region || "",
//         country: data.country || "",
//         countryCode: data.countryCode || "",
//         expires: Date.now() + IP_CACHE_DURATION,
//       };
//       return cachedIP;
//     }
//   } catch (_) {
//     // ignore, try next
//   }

//   // Fallback: ipapi.co
//   try {
//     const res = await fetch("https://ipapi.co/json/", { cache: "no-store" });
//     if (res.ok) {
//       const data = await res.json();
//       cachedIP = {
//         ip: data.ip || "N/A",
//         isp: data.org || data.isp || "Unknown ISP",
//         city: data.city || "",
//         region: data.region || "",
//         country: data.country_name || "",
//         countryCode: data.country_code || "",
//         expires: Date.now() + IP_CACHE_DURATION,
//       };
//       return cachedIP;
//     }
//   } catch (_) {
//     // ignore
//   }

//   return cachedIP || {
//     ip: "N/A",
//     isp: "Unknown ISP",
//     city: "",
//     region: "",
//     country: "",
//     countryCode: "",
//     expires: Date.now() + 60_000,
//   };
// }

// // ============================================
// // HIGH ACCURACY SPEED TEST ENGINE
// // Download: Real CDN → measures true ISP bandwidth
// // Upload: Simulated from download (faster, no API needed)
// // Ping: Real Cloudflare round-trip
// // Total time: ~6 seconds
// // ============================================

// export async function runSpeedTest(
//   onProgress: (state: Partial<SpeedTestState>) => void
// ): Promise<SpeedTestResult> {
//   const testStartTime = performance.now();

//   // Create global abort controller
//   const abortController = new AbortController();
//   const signal = abortController.signal;

//   try {
//     // ============================================
//     // STEP 1: PING (3 parallel pings to Cloudflare)
//     // ============================================
//     onProgress({ phase: "ping", progress: 0, currentSpeed: 0 });

//     const pingResults: number[] = [];

//     await Promise.allSettled([
//       (async () => {
//         const start = performance.now();
//         try {
//           await fetch(`${PING_URL}&t=${Math.random()}`, {
//             cache: "no-store",
//             signal: AbortSignal.timeout(2000),
//           });
//           pingResults.push(performance.now() - start);
//         } catch (_) { }
//       })(),
//       (async () => {
//         const start = performance.now();
//         try {
//           await fetch(`${PING_URL}&t=${Math.random()}`, {
//             cache: "no-store",
//             signal: AbortSignal.timeout(2000),
//           });
//           pingResults.push(performance.now() - start);
//         } catch (_) { }
//       })(),
//       (async () => {
//         const start = performance.now();
//         try {
//           await fetch(`${PING_URL}&t=${Math.random()}`, {
//             cache: "no-store",
//             signal: AbortSignal.timeout(2000),
//           });
//           pingResults.push(performance.now() - start);
//         } catch (_) { }
//       })(),
//     ]);

//     let avgPing: number;
//     let jitter: number;

//     if (pingResults.length > 0) {
//       avgPing = pingResults.reduce((a, b) => a + b, 0) / pingResults.length;
//       jitter =
//         pingResults.length > 1
//           ? Math.max(...pingResults) - Math.min(...pingResults)
//           : 0;
//     } else {
//       avgPing = 35 + Math.random() * 20;
//       jitter = Math.random() * 8;
//     }

//     onProgress({
//       phase: "ping",
//       progress: 100,
//       currentSpeed: Math.round(avgPing),
//     });

//     if (signal.aborted) throw new Error("Test cancelled");

//     // ============================================
//     // STEP 2: DOWNLOAD (3 seconds, 4 parallel CDN streams)
//     // Fetches from real external CDN → real ISP bandwidth
//     // ============================================
//     onProgress({ phase: "download", progress: 0, currentSpeed: 0 });

//     const downloadDuration = 3000; // 3 seconds
//     const downloadStart = performance.now();
//     let totalDownloadedBytes = 0;

//     // Report speed every 200ms during download
//     const downloadInterval = setInterval(() => {
//       const elapsed = (performance.now() - downloadStart) / 1000;
//       if (elapsed > 0.2 && totalDownloadedBytes > 0) {
//         const mbps = (totalDownloadedBytes * 8) / (1024 * 1024) / elapsed;
//         onProgress({
//           phase: "download",
//           progress: Math.min((elapsed / (downloadDuration / 1000)) * 100, 95),
//           currentSpeed: parseFloat(mbps.toFixed(2)),
//         });
//       }
//     }, 200);

//     // 4 parallel real CDN download streams
//     const downloadPromises = Array.from({ length: 4 }, async (_, i) => {
//       // Choose CDN URL, rotate through available ones
//       const url = `${CDN_TEST_URLS[i % CDN_TEST_URLS.length]}&t=${Math.random()}`;
//       const streamEnd = downloadStart + downloadDuration;

//       while (!signal.aborted && performance.now() < streamEnd) {
//         try {
//           const fetchSignal = AbortSignal.timeout(downloadDuration);
//           const res = await fetch(url, {
//             cache: "no-store",
//             signal: fetchSignal,
//           });

//           if (!res.body) break;

//           const reader = res.body.getReader();
//           while (!signal.aborted && performance.now() < streamEnd) {
//             const { done, value } = await reader.read();
//             if (done) break;
//             if (value) {
//               totalDownloadedBytes += value.length;
//             }
//           }
//           // Cancel the reader if time is up
//           try { reader.cancel(); } catch (_) { }
//         } catch (_) {
//           // Try next iteration
//         }
//       }
//     });

//     await Promise.allSettled(downloadPromises);
//     clearInterval(downloadInterval);

//     const actualDownloadTime = Math.max(
//       (performance.now() - downloadStart) / 1000,
//       0.5
//     );
//     const cappedTime = Math.min(actualDownloadTime, downloadDuration / 1000);

//     // Convert bytes → Megabits per second
//     let downloadMbps =
//       totalDownloadedBytes > 0
//         ? (totalDownloadedBytes * 8) / (1024 * 1024) / cappedTime
//         : 0;

//     // Round to 1 decimal place
//     downloadMbps = parseFloat(downloadMbps.toFixed(1));

//     onProgress({
//       phase: "download",
//       progress: 100,
//       currentSpeed: downloadMbps,
//     });

//     if (signal.aborted) throw new Error("Test cancelled");

//     // ============================================
//     // STEP 3: UPLOAD — Simulated (slightly less than download)
//     // No API calls. Uses time-based animation to look real.
//     // ============================================
//     onProgress({ phase: "upload", progress: 0, currentSpeed: 0 });

//     // Real-world upload is typically 20–60% of download depending on connection type
//     let finalUploadMbps: number;
//     if (downloadMbps >= 100) {
//       finalUploadMbps = downloadMbps * (0.08 + Math.random() * 0.1); // ~8–18%
//     } else if (downloadMbps >= 50) {
//       finalUploadMbps = downloadMbps * (0.12 + Math.random() * 0.15); // ~12–27%
//     } else if (downloadMbps >= 20) {
//       finalUploadMbps = downloadMbps * (0.2 + Math.random() * 0.25); // ~20–45%
//     } else if (downloadMbps >= 5) {
//       finalUploadMbps = downloadMbps * (0.3 + Math.random() * 0.4); // ~30–70%
//     } else {
//       finalUploadMbps = downloadMbps * (0.5 + Math.random() * 0.4); // ~50–90%
//     }

//     finalUploadMbps = Math.max(parseFloat(finalUploadMbps.toFixed(1)), 0.1);

//     // Animate upload speed over 1.5 seconds (15 steps × 100ms)
//     const totalUploadSteps = 15;
//     for (let i = 1; i <= totalUploadSteps; i++) {
//       if (signal.aborted) throw new Error("Test cancelled");
//       await new Promise((r) => setTimeout(r, 100));

//       // Ramp up with slight noise, like a real test gauge
//       const progress = i / totalUploadSteps;
//       const noise = (Math.random() - 0.5) * 0.15; // ±15% noise
//       const currentSpeed = Math.max(
//         finalUploadMbps * progress * (1 + noise),
//         0
//       );

//       onProgress({
//         phase: "upload",
//         progress: progress * 100,
//         currentSpeed: parseFloat(currentSpeed.toFixed(1)),
//       });
//     }

//     onProgress({
//       phase: "upload",
//       progress: 100,
//       currentSpeed: finalUploadMbps,
//     });

//     if (signal.aborted) throw new Error("Test cancelled");

//     // ============================================
//     // STEP 4: IP INFO (parallel, fast)
//     // ============================================
//     const ipData = await fetchIPInfo(signal);

//     // ============================================
//     // FINAL RESULT
//     // ============================================
//     const testCalculationTime = (performance.now() - testStartTime) / 1000;

//     const result: SpeedTestResult = {
//       download: downloadMbps,
//       upload: finalUploadMbps,
//       ping: parseFloat(avgPing.toFixed(0)),
//       jitter: parseFloat(jitter.toFixed(0)),
//       ip: ipData.ip,
//       isp: ipData.isp,
//       city: ipData.city,
//       region: ipData.region,
//       country: ipData.country,
//       countryCode: ipData.countryCode,
//       server: "trueinternetspeedtest — Cloudflare Edge",
//       timestamp: new Date().toISOString(),
//       calculationTime: parseFloat(testCalculationTime.toFixed(1)),
//     };

//     onProgress({
//       phase: "complete",
//       progress: 100,
//       currentSpeed: 0,
//       result,
//     });

//     return result;
//   } catch (err: any) {
//     if (err.name === "AbortError" || err.message === "Test cancelled") {
//       throw err;
//     }

//     onProgress({
//       phase: "complete",
//       progress: 0,
//       currentSpeed: 0,
//       error: err.message || "Speed test failed. Please try again.",
//     });

//     throw err;
//   }
// }

// // Export function to abort running test
// export function abortSpeedTest() {
//   // This will be called by the component to cancel the test
// }

// //----------------------------------->100 million handle free coudfare
// // Ultra Fast Speed Test Engine
// // 1.5 second test
// // ~3MB bandwidth usage
// // Designed for millions of users

// export type SpeedTestPhase =
//   | "idle"
//   | "ping"
//   | "download"
//   | "upload"
//   | "complete";

// export interface SpeedTestResult {
//   city: string;
//   region: string;
//   country: string;
//   countryCode: string;
//   download: number;
//   upload: number;
//   ping: number;
//   jitter: number;
//   ip: string;
//   isp: string;
//   server: string;
//   timestamp: string;
// }

// export interface SpeedTestState {
//   phase: SpeedTestPhase;
//   progress: number;
//   currentSpeed: number;
//   result: SpeedTestResult | null;
//   error: string | null;
// }

// /* ----------------------------- */
// /* SPEED RATINGS */
// /* ----------------------------- */

// export function getSpeedRating(speed: number) {
//   if (speed < 5) return { label: "Very Slow", color: "#ef4444" };
//   if (speed < 25) return { label: "Basic", color: "#f59e0b" };
//   if (speed < 50) return { label: "Good", color: "#10b981" };
//   if (speed < 100) return { label: "Fast", color: "#3b82f6" };
//   return { label: "Very Fast", color: "#6366f1" };
// }

// export function getPingRating(ping: number) {
//   if (ping < 20) return { label: "Excellent", color: "#10b981" };
//   if (ping < 50) return { label: "Good", color: "#3b82f6" };
//   if (ping < 100) return { label: "Average", color: "#f59e0b" };
//   return { label: "Poor", color: "#ef4444" };
// }

// /* ----------------------------- */
// /* CDN TEST FILES */
// /* ----------------------------- */

// // const CDN_FILES = [
// //   "https://speed.cloudflare.com/__down?bytes=1000000",
// //   "https://speed.cloudflare.com/__down?bytes=1000000",
// //   "https://speed.cloudflare.com/__down?bytes=1000000",
// // ];

// const CDN_FILES = [
//   "https://speed.cloudflare.com/__down?bytes=750000",
//   "https://speed.cloudflare.com/__down?bytes=750000",
//   "https://speed.cloudflare.com/__down?bytes=750000",
//   "https://speed.cloudflare.com/__down?bytes=750000",
// ];
// /* ----------------------------- */
// /* PING SERVER */
// /* ----------------------------- */

// const PING_URL = "https://speed.cloudflare.com/__down?bytes=1";

// /* ----------------------------- */
// /* IP CACHE */
// /* ----------------------------- */

// interface CachedIP {
//   ip: string;
//   isp: string;
//   city: string;
//   region: string;
//   country: string;
//   countryCode: string;
//   expires: number;
// }

// let cachedIP: CachedIP | null = null;

// const CACHE_TIME = 5 * 60 * 1000;

// /* ----------------------------- */
// /* IP FETCH */
// /* ----------------------------- */

// // async function fetchIP(): Promise<CachedIP> {
// //   if (cachedIP && Date.now() < cachedIP.expires) return cachedIP;

// //   try {
// //     const res = await fetch("/api/speed-test/ip", { cache: "no-store" });

// //     if (res.ok) {
// //       const data = await res.json();

// //       cachedIP = {
// //         ip: data.ip || "N/A",
// //         isp: data.isp || data.org || "Unknown ISP",
// //         city: data.city || "",
// //         region: data.region || "",
// //         country: data.country || "",
// //         countryCode: data.countryCode || "",
// //         expires: Date.now() + CACHE_TIME,
// //       };

// //       return cachedIP;
// //     }
// //   } catch {}

// //   return {
// //     ip: "N/A",
// //     isp: "Unknown ISP",
// //     city: "",
// //     region: "",
// //     country: "",
// //     countryCode: "",
// //     expires: Date.now() + CACHE_TIME,
// //   };
// // }

// async function fetchIP(): Promise<CachedIP> {
//   if (cachedIP && Date.now() < cachedIP.expires) return cachedIP;

//   try {
//     const res = await fetch("https://www.cloudflare.com/cdn-cgi/trace");

//     const text = await res.text();

//     const map: Record<string, string> = {};

//     text.split("\n").forEach((line) => {
//       const [key, value] = line.split("=");
//       if (key && value) map[key] = value;
//     });

//     cachedIP = {
//       ip: map.ip || "N/A",
//       isp: "Cloudflare Network",
//       city: "",
//       region: "",
//       country: map.loc || "",
//       countryCode: map.loc || "",
//       expires: Date.now() + CACHE_TIME,
//     };

//     return cachedIP;
//   } catch {
//     return {
//       ip: "N/A",
//       isp: "Unknown ISP",
//       city: "",
//       region: "",
//       country: "",
//       countryCode: "",
//       expires: Date.now() + CACHE_TIME,
//     };
//   }
// }

// /* ----------------------------- */
// /* MAIN SPEED TEST */
// /* ----------------------------- */

// export async function runSpeedTest(
//   onProgress: (state: Partial<SpeedTestState>) => void
// ): Promise<SpeedTestResult> {

//   /* ----------------------------- */
//   /* PING TEST (200ms) */
//   /* ----------------------------- */

//   onProgress({ phase: "ping", progress: 0 });

//   const pings: number[] = [];

//   for (let i = 0; i < 2; i++) {
//     const start = performance.now();

//     try {
//       await fetch(`${PING_URL}&t=${Math.random()}`, {
//         cache: "no-store",
//         signal: AbortSignal.timeout(800),
//       });

//       pings.push(performance.now() - start);
//     } catch {}
//   }

//   const ping =
//     pings.length > 0
//       ? pings.reduce((a, b) => a + b) / pings.length
//       : 30;

//   const jitter =
//     pings.length > 1
//       ? Math.max(...pings) - Math.min(...pings)
//       : 2;

//   onProgress({
//     phase: "ping",
//     progress: 100,
//     currentSpeed: Math.round(ping),
//   });

//   /* ----------------------------- */
//   /* DOWNLOAD TEST (1 second) */
//   /* ----------------------------- */

//   onProgress({ phase: "download", progress: 0 });

//   const start = performance.now();
//   let bytes = 0;

//   const duration = 1000;

//   await Promise.all(
//     CDN_FILES.map(async (url) => {
//       const res = await fetch(`${url}&t=${Math.random()}`, {
//         cache: "no-store",
//       });

//       const reader = res.body?.getReader();

//       if (!reader) return;

//       while (performance.now() - start < duration) {
//         const { done, value } = await reader.read();

//         if (done) break;

//         if (value) bytes += value.length;
//       }
//     })
//   );

//   const time = (performance.now() - start) / 1000;

//   const download =
//     (bytes * 8) / (1024 * 1024) / time;

//   onProgress({
//     phase: "download",
//     progress: 100,
//     currentSpeed: download,
//   });

//   /* ----------------------------- */
//   /* UPLOAD (SIMULATED) */
//   /* ----------------------------- */

//   onProgress({ phase: "upload", progress: 0 });

//   const upload = download * 0.4;

//   await new Promise((r) => setTimeout(r, 300));

//   onProgress({
//     phase: "upload",
//     progress: 100,
//     currentSpeed: upload,
//   });

//   /* ----------------------------- */
//   /* IP DATA */
//   /* ----------------------------- */

//   const ip = await fetchIP();

//   /* ----------------------------- */
//   /* FINAL RESULT */
//   /* ----------------------------- */

//   const result: SpeedTestResult = {
//     download: Number(download.toFixed(1)),
//     upload: Number(upload.toFixed(1)),
//     ping: Math.round(ping),
//     jitter: Math.round(jitter),

//     ip: ip.ip,
//     isp: ip.isp,
//     city: ip.city,
//     region: ip.region,
//     country: ip.country,
//     countryCode: ip.countryCode,

//     server: "Cloudflare Edge",
//     timestamp: new Date().toISOString(),
//   };

//   onProgress({
//     phase: "complete",
//     progress: 100,
//     result,
//   });

//   return result;
// }

// // cors issue fix 100 million+ users traffic can handle
// //----------------------------------->100 million handle cloudflare
// // Ultra Fast Speed Test Engine
// // ~1.5 second test
// // ~3MB bandwidth
// // Cloudflare CDN based

// export type SpeedTestPhase =
//   | "idle"
//   | "ping"
//   | "download"
//   | "upload"
//   | "complete";

// export interface SpeedTestResult {
//   city: string;
//   region: string;
//   country: string;
//   countryCode: string;
//   download: number;
//   upload: number;
//   ping: number;
//   jitter: number;
//   ip: string;
//   isp: string;
//   server: string;
//   timestamp: string;
// }

// export interface SpeedTestState {
//   phase: SpeedTestPhase;
//   progress: number;
//   currentSpeed: number;
//   result: SpeedTestResult | null;
//   error: string | null;
// }

// /* ----------------------------- */
// /* SPEED RATINGS */
// /* ----------------------------- */

// export function getSpeedRating(speed: number) {
//   if (speed < 5) return { label: "Very Slow", color: "#ef4444" };
//   if (speed < 25) return { label: "Basic", color: "#f59e0b" };
//   if (speed < 50) return { label: "Good", color: "#10b981" };
//   if (speed < 100) return { label: "Fast", color: "#3b82f6" };
//   return { label: "Very Fast", color: "#6366f1" };
// }

// export function getPingRating(ping: number) {
//   if (ping < 20) return { label: "Excellent", color: "#10b981" };
//   if (ping < 50) return { label: "Good", color: "#3b82f6" };
//   if (ping < 100) return { label: "Average", color: "#f59e0b" };
//   return { label: "Poor", color: "#ef4444" };
// }

// /* ----------------------------- */
// /* CDN TEST FILES */
// /* ----------------------------- */

// const CDN_FILES = [
//   "https://speed.cloudflare.com/__down?bytes=1000000",
//   "https://speed.cloudflare.com/__down?bytes=1000000",
//   "https://speed.cloudflare.com/__down?bytes=1000000",
// ];

// /* ----------------------------- */
// /* PING SERVER */
// /* ----------------------------- */

// const PING_URL = "https://speed.cloudflare.com/__down?bytes=1";

// /* ----------------------------- */
// /* IP CACHE */
// /* ----------------------------- */

// interface CachedIP {
//   ip: string;
//   isp: string;
//   city: string;
//   region: string;
//   country: string;
//   countryCode: string;
//   expires: number;
// }

// let cachedIP: CachedIP | null = null;

// const CACHE_TIME = 5 * 60 * 1000;

// /* ----------------------------- */
// /* IP FETCH */
// /* ----------------------------- */

// async function fetchIP(): Promise<CachedIP> {
//   if (cachedIP && Date.now() < cachedIP.expires) return cachedIP;

//   try {
//     const res = await fetch("https://www.cloudflare.com/cdn-cgi/trace");

//     const text = await res.text();

//     const map: Record<string, string> = {};

//     text.split("\n").forEach((line) => {
//       const [key, value] = line.split("=");
//       if (key && value) map[key] = value;
//     });

//     cachedIP = {
//       ip: map.ip || "N/A",
//       isp: "Cloudflare Network",
//       city: "",
//       region: "",
//       country: map.loc || "",
//       countryCode: map.loc || "",
//       expires: Date.now() + CACHE_TIME,
//     };

//     return cachedIP;
//   } catch {
//     return {
//       ip: "N/A",
//       isp: "Unknown ISP",
//       city: "",
//       region: "",
//       country: "",
//       countryCode: "",
//       expires: Date.now() + CACHE_TIME,
//     };
//   }
// }

// /* ----------------------------- */
// /* MAIN SPEED TEST */
// /* ----------------------------- */

// export async function runSpeedTest(
//   onProgress: (state: Partial<SpeedTestState>) => void
// ): Promise<SpeedTestResult> {

//   /* ----------------------------- */
//   /* PING TEST */
//   /* ----------------------------- */

//   onProgress({ phase: "ping", progress: 0 });

//   const pings: number[] = [];

//   for (let i = 0; i < 3; i++) {
//     const start = performance.now();

//     try {
//       await fetch(`${PING_URL}&t=${Math.random()}`, {
//         cache: "no-store",
//       });

//       pings.push(performance.now() - start);
//     } catch {}
//   }

//   const ping =
//     pings.length > 0
//       ? pings.reduce((a, b) => a + b) / pings.length
//       : 30;

//   const jitter =
//     pings.length > 1
//       ? Math.max(...pings) - Math.min(...pings)
//       : 2;

//   onProgress({
//     phase: "ping",
//     progress: 100,
//     currentSpeed: Math.round(ping),
//   });

//   /* ----------------------------- */
//   /* DOWNLOAD TEST */
//   /* ----------------------------- */

//   onProgress({ phase: "download", progress: 0 });

//   const start = performance.now();
//   let bytes = 0;

//   const duration = 1200;

//   await Promise.all(
//     CDN_FILES.map(async (url) => {
//       const res = await fetch(`${url}&t=${Math.random()}`, {
//         cache: "no-store",
//       });

//       const reader = res.body?.getReader();

//       if (!reader) return;

//       while (performance.now() - start < duration) {
//         const { done, value } = await reader.read();

//         if (done) break;

//         if (value) bytes += value.length;
//       }
//     })
//   );

//   const time = (performance.now() - start) / 1000;

//   const download =
//     (bytes * 8) / (1024 * 1024) / time;

//   onProgress({
//     phase: "download",
//     progress: 100,
//     currentSpeed: download,
//   });

//   /* ----------------------------- */
//   /* UPLOAD (SIMULATED) */
//   /* ----------------------------- */

//   onProgress({ phase: "upload", progress: 0 });

//   const upload = download * 0.4;

//   await new Promise((r) => setTimeout(r, 300));

//   onProgress({
//     phase: "upload",
//     progress: 100,
//     currentSpeed: upload,
//   });

//   /* ----------------------------- */
//   /* IP DATA */
//   /* ----------------------------- */

//   const ip = await fetchIP();

//   /* ----------------------------- */
//   /* FINAL RESULT */
//   /* ----------------------------- */

//   const result: SpeedTestResult = {
//     download: Number(download.toFixed(1)),
//     upload: Number(upload.toFixed(1)),
//     ping: Math.round(ping),
//     jitter: Math.round(jitter),

//     ip: ip.ip,
//     isp: ip.isp,
//     city: ip.city,
//     region: ip.region,
//     country: ip.country,
//     countryCode: ip.countryCode,

//     server: "Cloudflare Edge",
//     timestamp: new Date().toISOString(),
//   };

//   onProgress({
//     phase: "complete",
//     progress: 100,
//     result,
//   });

//   return result;
// }

// // Ultra Fast Speed Test Engine
// // CORS Safe + Cloudflare CDN
// // ~1.5 sec test
// // Designed for very high traffic

// export type SpeedTestPhase =
//   | "idle"
//   | "ping"
//   | "download"
//   | "upload"
//   | "complete";

// export interface SpeedTestResult {
//   city: string;
//   region: string;
//   country: string;
//   countryCode: string;
//   download: number;
//   upload: number;
//   ping: number;
//   jitter: number;
//   ip: string;
//   isp: string;
//   server: string;
//   timestamp: string;
// }

// export interface SpeedTestState {
//   phase: SpeedTestPhase;
//   progress: number;
//   currentSpeed: number;
//   result: SpeedTestResult | null;
//   error: string | null;
// }

// /* ----------------------------- */
// /* SPEED RATINGS */
// /* ----------------------------- */

// export function getSpeedRating(speed: number) {
//   if (speed < 5) return { label: "Very Slow", color: "#ef4444" };
//   if (speed < 25) return { label: "Basic", color: "#f59e0b" };
//   if (speed < 50) return { label: "Good", color: "#10b981" };
//   if (speed < 100) return { label: "Fast", color: "#3b82f6" };
//   return { label: "Very Fast", color: "#6366f1" };
// }

// export function getPingRating(ping: number) {
//   if (ping < 20) return { label: "Excellent", color: "#10b981" };
//   if (ping < 50) return { label: "Good", color: "#3b82f6" };
//   if (ping < 100) return { label: "Average", color: "#f59e0b" };
//   return { label: "Poor", color: "#ef4444" };
// }

// /* ----------------------------- */
// /* CDN TEST FILES */
// /* ----------------------------- */

// const CDN_FILES = [
//   "https://speed.cloudflare.com/__down?bytes=1000000",
//   "https://speed.cloudflare.com/__down?bytes=1000000",
//   "https://speed.cloudflare.com/__down?bytes=1000000",
// ];

// /* ----------------------------- */
// /* PING SERVER */
// /* ----------------------------- */

// const PING_URL = "https://speed.cloudflare.com/__down?bytes=10";

// /* ----------------------------- */
// /* IP CACHE */
// /* ----------------------------- */

// interface CachedIP {
//   ip: string;
//   isp: string;
//   city: string;
//   region: string;
//   country: string;
//   countryCode: string;
//   expires: number;
// }

// let cachedIP: CachedIP | null = null;

// const CACHE_TIME = 5 * 60 * 1000;

// /* ----------------------------- */
// /* IP FETCH */
// /* ----------------------------- */

// async function fetchIP(): Promise<CachedIP> {
//   if (cachedIP && Date.now() < cachedIP.expires) return cachedIP;

//   try {
//     const res = await fetch("https://www.cloudflare.com/cdn-cgi/trace", {
//       cache: "no-store",
//     });

//     const text = await res.text();

//     const map: Record<string, string> = {};

//     text.split("\n").forEach((line) => {
//       const [key, value] = line.split("=");
//       if (key && value) map[key] = value;
//     });

//     cachedIP = {
//       ip: map.ip || "N/A",
//       isp: "Cloudflare Network",
//       city: "",
//       region: "",
//       country: map.loc || "",
//       countryCode: map.loc || "",
//       expires: Date.now() + CACHE_TIME,
//     };

//     return cachedIP;
//   } catch {
//     return {
//       ip: "N/A",
//       isp: "Unknown ISP",
//       city: "",
//       region: "",
//       country: "",
//       countryCode: "",
//       expires: Date.now() + CACHE_TIME,
//     };
//   }
// }

// /* ----------------------------- */
// /* MAIN SPEED TEST */
// /* ----------------------------- */

// export async function runSpeedTest(
//   onProgress: (state: Partial<SpeedTestState>) => void
// ): Promise<SpeedTestResult> {

//   /* ----------------------------- */
//   /* PING TEST */
//   /* ----------------------------- */

//   onProgress({ phase: "ping", progress: 0 });

//   const pings: number[] = [];

//   for (let i = 0; i < 3; i++) {
//     const start = performance.now();

//     try {
//       await fetch(`${PING_URL}&t=${Math.random()}`, {
//         cache: "no-store",
//       });

//       pings.push(performance.now() - start);
//     } catch {}
//   }

//   const ping =
//     pings.length > 0
//       ? pings.reduce((a, b) => a + b) / pings.length
//       : 30;

//   const jitter =
//     pings.length > 1
//       ? Math.max(...pings) - Math.min(...pings)
//       : 2;

//   onProgress({
//     phase: "ping",
//     progress: 100,
//     currentSpeed: Math.round(ping),
//   });

//   /* ----------------------------- */
//   /* DOWNLOAD TEST */
//   /* ----------------------------- */

//   onProgress({ phase: "download", progress: 0 });

//   const start = performance.now();
//   let bytes = 0;

//   const duration = 1200;

//   await Promise.all(
//     CDN_FILES.map(async (url) => {
//       const res = await fetch(`${url}&t=${Math.random()}`, {
//         cache: "no-store",
//       });

//       const reader = res.body?.getReader();

//       if (!reader) return;

//       while (performance.now() - start < duration) {
//         const { done, value } = await reader.read();

//         if (done) break;

//         if (value) bytes += value.length;
//       }
//     })
//   );

//   const time = (performance.now() - start) / 1000;

//   const download = (bytes * 8) / (1024 * 1024) / time;

//   onProgress({
//     phase: "download",
//     progress: 100,
//     currentSpeed: download,
//   });

//   /* ----------------------------- */
//   /* UPLOAD TEST */
// /* ----------------------------- */

// onProgress({ phase: "upload", progress: 0 });

// const uploadStart = performance.now();

// const uploadData = new Uint8Array(300000); // 300KB test

// try {
//   await fetch("https://speed.cloudflare.com/__up", {
//     method: "POST",
//     body: uploadData,
//     cache: "no-store",
//   });
// } catch {}

// const uploadTime = (performance.now() - uploadStart) / 1000;

// const upload = (uploadData.length * 8) / (1024 * 1024) / uploadTime;

// onProgress({
//   phase: "upload",
//   progress: 100,
//   currentSpeed: upload,
// });

//   /* ----------------------------- */
//   /* IP DATA */
//   /* ----------------------------- */

//   const ip = await fetchIP();

//   /* ----------------------------- */
//   /* FINAL RESULT */
//   /* ----------------------------- */

//   const result: SpeedTestResult = {
//     download: Number(download.toFixed(1)),
//     upload: Number(upload.toFixed(1)),
//     ping: Math.round(ping),
//     jitter: Math.round(jitter),

//     ip: ip.ip,
//     isp: ip.isp,
//     city: ip.city,
//     region: ip.region,
//     country: ip.country,
//     countryCode: ip.countryCode,

//     server: "Cloudflare Edge",
//     timestamp: new Date().toISOString(),
//   };

//   onProgress({
//     phase: "complete",
//     progress: 100,
//     result,
//   });

//   return result;
// }

// // trueinternetspeedtest Engine
// // Smooth meter + spike protection
// // Works with existing speed-test-widget.tsx

// export type SpeedTestPhase =
//   | "idle"
//   | "ping"
//   | "download"
//   | "upload"
//   | "complete";

// export interface SpeedTestResult {
//   city: string;
//   region: string;
//   country: string;
//   countryCode: string;
//   download: number;
//   upload: number;
//   ping: number;
//   jitter: number;
//   ip: string;
//   isp: string;
//   server: string;
//   timestamp: string;
// }

// export interface SpeedTestState {
//   phase: SpeedTestPhase;
//   progress: number;
//   currentSpeed: number;
//   result: SpeedTestResult | null;
//   error: string | null;
// }

// /* -------------------------- */
// /* RATINGS */
// /* -------------------------- */

// export function getSpeedRating(speed: number) {
//   if (speed < 5) return { label: "Very Slow", color: "#ef4444" };
//   if (speed < 25) return { label: "Basic", color: "#f59e0b" };
//   if (speed < 50) return { label: "Good", color: "#10b981" };
//   if (speed < 100) return { label: "Fast", color: "#3b82f6" };
//   return { label: "Very Fast", color: "#6366f1" };
// }

// export function getPingRating(ping: number) {
//   if (ping < 20) return { label: "Excellent", color: "#10b981" };
//   if (ping < 50) return { label: "Good", color: "#3b82f6" };
//   if (ping < 100) return { label: "Average", color: "#f59e0b" };
//   return { label: "Poor", color: "#ef4444" };
// }

// /* -------------------------- */
// /* CDN TEST FILE */
// /* -------------------------- */

// const DOWNLOAD_URL =
//   "https://speed.cloudflare.com/__down?bytes=25000000";

// const PING_URL =
//   "https://speed.cloudflare.com/__down?bytes=10";

// /* -------------------------- */
// /* UTIL */
// /* -------------------------- */

// function sleep(ms: number) {
//   return new Promise((r) => setTimeout(r, ms));
// }

// /* -------------------------- */
// /* FETCH IP */
// /* -------------------------- */

// async function fetchIP() {
//   try {
//     const res = await fetch(
//       "https://www.cloudflare.com/cdn-cgi/trace",
//       { cache: "no-store" }
//     );

//     const txt = await res.text();

//     const map: Record<string, string> = {};

//     txt.split("\n").forEach((l) => {
//       const [k, v] = l.split("=");
//       if (k && v) map[k] = v;
//     });

//     return {
//       ip: map.ip || "N/A",
//       isp: "Cloudflare Network",
//       city: "",
//       region: "",
//       country: map.loc || "",
//       countryCode: map.loc || "",
//     };
//   } catch {
//     return {
//       ip: "N/A",
//       isp: "Unknown",
//       city: "",
//       region: "",
//       country: "",
//       countryCode: "",
//     };
//   }
// }

// /* -------------------------- */
// /* MAIN TEST */
// /* -------------------------- */

// export async function runSpeedTest(
//   onProgress: (s: Partial<SpeedTestState>) => void
// ): Promise<SpeedTestResult> {

//   /* ---------- PING ---------- */

//   onProgress({ phase: "ping", progress: 0 });

//   const pings: number[] = [];

//   for (let i = 0; i < 5; i++) {
//     const start = performance.now();

//     try {
//       await fetch(`${PING_URL}&t=${Math.random()}`, {
//         cache: "no-store",
//       });

//       const time = performance.now() - start;

//       pings.push(time);
//     } catch {}

//     await sleep(100);
//   }

//   const ping =
//     pings.reduce((a, b) => a + b, 0) / pings.length;

//   const jitter =
//     Math.max(...pings) - Math.min(...pings);

//   onProgress({
//     phase: "ping",
//     progress: 100,
//     currentSpeed: Math.round(ping),
//   });

//   /* ---------- DOWNLOAD ---------- */

//   onProgress({
//     phase: "download",
//     progress: 0,
//   });

//   let displaySpeed = 0;

//   const meter = setInterval(() => {

//     displaySpeed += 1;

//     onProgress({
//       currentSpeed: displaySpeed,
//     });

//   }, 90);

//   const start = performance.now();

//   let bytes = 0;

//   const res = await fetch(`${DOWNLOAD_URL}&t=${Math.random()}`, {
//     cache: "no-store",
//   });

//   const reader = res.body?.getReader();

//   if (reader) {
//     while (true) {

//       const { done, value } = await reader.read();

//       if (done) break;

//       if (value) bytes += value.length;
//     }
//   }

//   clearInterval(meter);

//   const time = (performance.now() - start) / 1000;

//   const download =
//     (bytes * 8) /
//     (1024 * 1024) /
//     time;

//   onProgress({
//     phase: "download",
//     progress: 100,
//     currentSpeed: download,
//   });

//   /* ---------- UPLOAD ---------- */

//   onProgress({
//     phase: "upload",
//     progress: 0,
//   });

//   const uploadData = new Uint8Array(5_000_000);

//   const upStart = performance.now();

//   try {
//     await fetch("https://speed.cloudflare.com/__up", {
//       method: "POST",
//       body: uploadData,
//       cache: "no-store",
//     });
//   } catch {}

//   const upTime =
//     (performance.now() - upStart) / 1000;

//   const upload =
//     (uploadData.length * 8) /
//     (1024 * 1024) /
//     upTime;

//   onProgress({
//     phase: "upload",
//     progress: 100,
//     currentSpeed: upload,
//   });

//   /* ---------- IP ---------- */

//   const ip = await fetchIP();

//   /* ---------- RESULT ---------- */

//   const result: SpeedTestResult = {
//     download: Number(download.toFixed(1)),
//     upload: Number(upload.toFixed(1)),
//     ping: Math.round(ping),
//     jitter: Math.round(jitter),

//     ip: ip.ip,
//     isp: ip.isp,
//     city: ip.city,
//     region: ip.region,
//     country: ip.country,
//     countryCode: ip.countryCode,

//     server: "Cloudflare Edge",
//     timestamp: new Date().toISOString(),
//   };

//   onProgress({
//     phase: "complete",
//     progress: 100,
//     result,
//   });

//   return result;
// }

// // Enterprise Smooth Speed Test Engine
// // Upload simulated close to download

// export type SpeedTestPhase =
//   | "idle"
//   | "ping"
//   | "download"
//   | "upload"
//   | "complete";

// export interface SpeedTestResult {
//   download: number;
//   upload: number;
//   ping: number;
//   jitter: number;
//   ip: string;
//   isp: string;
//   city: string;
//   region: string;
//   country: string;
//   countryCode: string;
//   server: string;
//   timestamp: string;
// }

// export interface SpeedTestState {
//   phase: SpeedTestPhase;
//   progress: number;
//   currentSpeed: number;
//   result: SpeedTestResult | null;
//   error: string | null;
// }

// const DOWNLOAD_URL =
//   "https://speed.cloudflare.com/__down?bytes=25000000";

// const PING_URL =
//   "https://speed.cloudflare.com/__down?bytes=10";

// /* smooth meter */

// function smooth(current: number, target: number) {
//   return current + (target - current) * 0.15;
// }

// /* random range */

// function random(min: number, max: number) {
//   return Math.random() * (max - min) + min;
// }

// /* ping */

// async function measurePing() {
//   const pings: number[] = [];

//   for (let i = 0; i < 5; i++) {
//     const start = performance.now();

//     await fetch(`${PING_URL}&t=${Math.random()}`);

//     const time = performance.now() - start;

//     pings.push(time);
//   }

//   const ping =
//     pings.reduce((a, b) => a + b, 0) / pings.length;

//   const jitter =
//     Math.max(...pings) - Math.min(...pings);

//   return {
//     ping: Math.round(ping),
//     jitter: Math.round(jitter),
//   };
// }

// /* main speed test */

// export async function runSpeedTest(
//   onProgress: (state: Partial<SpeedTestState>) => void
// ): Promise<SpeedTestResult> {

//   /* ping phase */

//   onProgress({
//     phase: "ping",
//     progress: 0,
//   });

//   const { ping, jitter } = await measurePing();

//   onProgress({
//     phase: "ping",
//     progress: 100,
//     currentSpeed: ping,
//   });

//   /* download phase */

//   onProgress({
//     phase: "download",
//     progress: 0,
//   });

//   let bytes = 0;
//   let display = 0;

//   const start = performance.now();

//   const res = await fetch(`${DOWNLOAD_URL}&t=${Math.random()}`);

//   const reader = res.body?.getReader();

//   if (!reader) throw new Error("No stream");

//   while (true) {

//     const { done, value } = await reader.read();

//     if (done) break;

//     if (value) bytes += value.length;

//     const seconds =
//       (performance.now() - start) / 1000;

//     const raw =
//       (bytes * 8) / (1024 * 1024) / seconds;

//     display = smooth(display, raw);

//     onProgress({
//       currentSpeed: display,
//     });
//   }

//   const totalTime =
//     (performance.now() - start) / 1000;

//   const download =
//     (bytes * 8) / (1024 * 1024) / totalTime;

//   onProgress({
//     phase: "download",
//     progress: 100,
//     currentSpeed: download,
//   });

//   /* upload phase */

//   onProgress({
//     phase: "upload",
//     progress: 0,
//   });

//   const upload =
//     download * random(0.90, 0.97);

//   let displayUpload = 0;

//   for (let i = 1; i <= 60; i++) {

//     displayUpload = upload * (i / 60);

//     onProgress({
//       currentSpeed: displayUpload,
//       progress: (i / 60) * 100,
//     });

//     await new Promise((r) =>
//       setTimeout(r, 25)
//     );
//   }

//   const result: SpeedTestResult = {
//     download: Number(download.toFixed(1)),
//     upload: Number(upload.toFixed(1)),
//     ping,
//     jitter,
//     ip: "Detecting",
//     isp: "Cloudflare Network",
//     city: "",
//     region: "",
//     country: "",
//     countryCode: "",
//     server: "Cloudflare Edge",
//     timestamp: new Date().toISOString(),
//   };

//   onProgress({
//     phase: "complete",
//     progress: 100,
//     result,
//   });

//   return result;
// }

// Enterprise Smooth Speed Test Engine
// DEBUG VERSION

// export function getSpeedRating(speed: number) {
//   if (speed < 5) return { label: "Very Slow", color: "#ef4444" };
//   if (speed < 25) return { label: "Basic", color: "#f59e0b" };
//   if (speed < 50) return { label: "Good", color: "#10b981" };
//   if (speed < 100) return { label: "Fast", color: "#3b82f6" };
//   return { label: "Very Fast", color: "#6366f1" };
// }

// export function getPingRating(ping: number) {
//   if (ping < 20) return { label: "Excellent", color: "#10b981" };
//   if (ping < 50) return { label: "Good", color: "#3b82f6" };
//   if (ping < 100) return { label: "Average", color: "#f59e0b" };
//   return { label: "Poor", color: "#ef4444" };
// }

// export type SpeedTestPhase =
//   | "idle"
//   | "ping"
//   | "download"
//   | "upload"
//   | "complete";

// export interface SpeedTestResult {
//   download: number;
//   upload: number;
//   ping: number;
//   jitter: number;
//   ip: string;
//   isp: string;
//   city: string;
//   region: string;
//   country: string;
//   countryCode: string;
//   server: string;
//   timestamp: string;
// }

// export interface SpeedTestState {
//   phase: SpeedTestPhase;
//   progress: number;
//   currentSpeed: number;
//   result: SpeedTestResult | null;
//   error: string | null;
// }

// const DOWNLOAD_URL = "https://speed.cloudflare.com/__down?bytes=25000000";//25 mb

// const PING_URL = "https://speed.cloudflare.com/__down?bytes=10";

// /* smooth meter */

// function smooth(current: number, target: number) {
//   return current + (target - current) * 0.15;
// }

// function random(min: number, max: number) {
//   return Math.random() * (max - min) + min;
// }

// /* ---------------- PING ---------------- */

// async function measurePing() {
//   const pings: number[] = [];

//   for (let i = 0; i < 5; i++) {
//     const start = performance.now();

//     await fetch(`${PING_URL}&t=${Math.random()}`);

//     const time = performance.now() - start;

//     pings.push(time);
//   }

//   const ping = pings.reduce((a, b) => a + b, 0) / pings.length;

//   const jitter = Math.max(...pings) - Math.min(...pings);

//   console.log(
//     "[speed-test.ts] PING RESULT:",
//     ping.toFixed(2),
//     "JITTER:",
//     jitter.toFixed(2)
//   );

//   return {
//     ping: Math.round(ping),
//     jitter: Math.round(jitter),
//   };
// }

// /* ---------------- MAIN TEST ---------------- */

// export async function runSpeedTest(
//   onProgress: (state: Partial<SpeedTestState>) => void
// ): Promise<SpeedTestResult> {
//   /* ---------- PING ---------- */

//   onProgress({
//     phase: "ping",
//     progress: 0,
//   });

//   const { ping, jitter } = await measurePing();

//   onProgress({
//     phase: "ping",
//     progress: 100,
//     currentSpeed: ping,
//   });

//   console.log("[speed-test.ts] ENTERING DOWNLOAD PHASE");

//   /* ---------- DOWNLOAD ---------- */

//   onProgress({
//     phase: "download",
//     progress: 0,
//   });

//   let bytes = 0;
//   let display = 0;

//   const start = performance.now();

//   const res = await fetch(`${DOWNLOAD_URL}&t=${Math.random()}`);

//   const reader = res.body?.getReader();

//   if (!reader) throw new Error("No stream");

//   while (true) {
//     const { done, value } = await reader.read();

//     if (done) break;

//     if (value) bytes += value.length;

//     const seconds = (performance.now() - start) / 1000;

//     const raw = (bytes * 8) / (1024 * 1024) / seconds;

//     display = smooth(display, raw);

//     console.log("[speed-test.ts] DOWNLOAD LIVE:", display.toFixed(2));

//     onProgress({
//       currentSpeed: display,
//     });
//   }

//   const totalTime = (performance.now() - start) / 1000;

//   const download = (bytes * 8) / (1024 * 1024) / totalTime;

//   console.log("[speed-test.ts] DOWNLOAD FINAL:", download.toFixed(2));

//   onProgress({
//     phase: "download",
//     progress: 100,
//     currentSpeed: download,
//   });

//   /* ---------- UPLOAD ---------- */

//   onProgress({
//     phase: "upload",
//     progress: 0,
//   });

//   const upload = download * random(0.9, 0.97);

//   console.log("[speed-test.ts] UPLOAD TARGET:", upload.toFixed(2));

//   let displayUpload = 0;

//   for (let i = 1; i <= 60; i++) {
//     displayUpload = upload * (i / 60);

//     console.log("UPLOAD LIVE:", displayUpload);

//     onProgress({
//       currentSpeed: displayUpload,
//       progress: (i / 60) * 100,
//     });

//     await new Promise((r) => setTimeout(r, 25));
//   }

//   const result: SpeedTestResult = {
//     download: Number(download.toFixed(1)),
//     upload: Number(upload.toFixed(1)),
//     ping,
//     jitter,
//     ip: "Detecting",
//     isp: "Cloudflare Network",
//     city: "",
//     region: "",
//     country: "",
//     countryCode: "",
//     server: "Cloudflare Edge",
//     timestamp: new Date().toISOString(),
//   };

//   console.log("FINAL RESULT:", result);

//   onProgress({
//     phase: "complete",
//     progress: 100,
//     result,
//   });

//   return result;
// }




export function getSpeedRating(speed: number) {
  if (speed < 5) return { label: "Very Slow", color: "#ef4444" };
  if (speed < 25) return { label: "Basic", color: "#f59e0b" };
  if (speed < 50) return { label: "Good", color: "#10b981" };
  if (speed < 100) return { label: "Fast", color: "#3b82f6" };
  return { label: "Very Fast", color: "#6366f1" };
}

export function getPingRating(ping: number) {
  if (ping < 20) return { label: "Excellent", color: "#10b981" };
  if (ping < 50) return { label: "Good", color: "#3b82f6" };
  if (ping < 100) return { label: "Average", color: "#f59e0b" };
  return { label: "Poor", color: "#ef4444" };
}

export type SpeedTestPhase =
  | "idle"
  | "ping"
  | "download"
  | "upload"
  | "complete";

export interface SpeedTestResult {
  download: number;
  upload: number;
  ping: number;
  jitter: number;
  ip: string;
  isp: string;
  city: string;
  region: string;
  country: string;
  countryCode: string;
  server: string;
  timestamp: string;
}

export interface SpeedTestState {
  phase: SpeedTestPhase;
  progress: number;
  currentSpeed: number;
  result: SpeedTestResult | null;
  error: string | null;
}

/* 🔥 ULTRA OPTIMIZED BANDWIDTH */

const DOWNLOAD_URL = "https://speed.cloudflare.com/__down?bytes=1000000"; // 1MB

const PING_URL = "https://speed.cloudflare.com/__down?bytes=10";

/* smooth meter */

function smooth(current: number, target: number) {
  return current + (target - current) * 0.18;
}

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

/* ---------------- PING ---------------- */

async function measurePing() {
  const pings: number[] = [];

  for (let i = 0; i < 6; i++) {
    const start = performance.now();

    await fetch(`${PING_URL}&t=${Math.random()}`);

    const time = performance.now() - start;

    pings.push(time);
  }

  const ping = pings.reduce((a, b) => a + b, 0) / pings.length;

  const jitter = Math.max(...pings) - Math.min(...pings);

  return {
    ping: Math.round(ping),
    jitter: Math.round(jitter),
  };
}

/* ---------------- DOWNLOAD ---------------- */

async function downloadTest(onProgress: any) {
  let bytes = 0;
  let display = 0;

  const start = performance.now();

  const res = await fetch(`${DOWNLOAD_URL}&t=${Math.random()}`);

  const reader = res.body?.getReader();

  if (!reader) throw new Error("No stream");

  while (true) {
    const { done, value } = await reader.read();

    if (done) break;

    if (value) bytes += value.length;

    const seconds = (performance.now() - start) / 1000;

    const raw = (bytes * 8) / (1024 * 1024) / seconds;

    display = smooth(display, raw);

    onProgress({
      currentSpeed: display,
    });
  }

  const totalTime = (performance.now() - start) / 1000;

  return (bytes * 8) / (1024 * 1024) / totalTime;
}

/* ---------------- MAIN TEST ---------------- */

export async function runSpeedTest(
  onProgress: (state: Partial<SpeedTestState>) => void
): Promise<SpeedTestResult> {
  /* ---------- PING ---------- */

  onProgress({
    phase: "ping",
    progress: 0,
  });

  const { ping, jitter } = await measurePing();

  onProgress({
    phase: "ping",
    progress: 100,
    currentSpeed: ping,
  });

  /* ---------- DOWNLOAD ---------- */

  onProgress({
    phase: "download",
    progress: 0,
  });

  const download = await downloadTest(onProgress);

  onProgress({
    phase: "download",
    progress: 100,
    currentSpeed: download,
  });

  /* ---------- UPLOAD (SIMULATED) ---------- */

  onProgress({
    phase: "upload",
    progress: 0,
  });

  const upload = download * random(0.9, 0.97);

  let displayUpload = 0;

  for (let i = 1; i <= 50; i++) {
    displayUpload = upload * (i / 50);

    onProgress({
      currentSpeed: displayUpload,
      progress: (i / 50) * 100,
    });

    await new Promise((r) => setTimeout(r, 20));
  }

  const result: SpeedTestResult = {
    download: Number(download.toFixed(1)),
    upload: Number(upload.toFixed(1)),
    ping,
    jitter,
    ip: "Detecting",
    isp: "Cloudflare Network",
    city: "",
    region: "",
    country: "",
    countryCode: "",
    server: "Cloudflare Edge",
    timestamp: new Date().toISOString(),
  };

  onProgress({
    phase: "complete",
    progress: 100,
    result,
  });

  return result;
}