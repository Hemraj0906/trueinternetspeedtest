"use client";

import Link from "next/link";
import { Zap, Twitter, Facebook, Globe } from "lucide-react";
import { InstallButton } from "./install-button";

const footerLinks = {
  "Main Tools": [
    { href: "/", label: "Internet Speed Test" },
    { href: "/purpose", label: "Speed Test by Purpose" },
    { href: "/check-internet-speed", label: "Check Internet Speed" },
    { href: "/download-speed-test", label: "Download Speed Test" },
    { href: "/upload-speed-test", label: "Upload Speed Test" },
    { href: "/ping-test-online", label: "Ping Test Online" },
    { href: "/latency-test", label: "Latency Test" },
    { href: "/network-speed-test", label: "Network Speed Test" },
    { href: "/wifi-speed-test-online", label: "WiFi Speed Test" },
    { href: "/gaming-speed-test", label: "Gaming Speed Test" },
    { href: "/streaming-speed-test", label: "Streaming Speed Test" },
  ],
  "Carrier Speed": [
    { href: "/5g-speed-test", label: "5G Speed Test" },
    { href: "/4g-speed-test", label: "4G Speed Test" },
    { href: "/fiber-speed-test", label: "Fiber Speed Test" },
    { href: "/jio-speed-test", label: "Jio Speed Test" },
    { href: "/airtel-speed-test", label: "Airtel Speed Test" },
    { href: "/vi-speed-test", label: "Vi Speed Test" },
    { href: "/bsnl-speed-test", label: "BSNL Speed Test" },
    { href: "/mobile-speed-test", label: "Mobile Speed Test" },
    { href: "/broadband-speed-test", label: "Broadband Speed Test" },
    { href: "/india-speed-test", label: "India Speed Test" },
  ],
  "Guides & Compare": [
    { href: "/good-download-speed", label: "Good Download Speed?" },
    { href: "/is-my-internet-fast-enough", label: "Is My Internet Fast?" },
    { href: "/jio-fiber-vs-airtel-xstream", label: "Jio vs Airtel Fiber" },
    { href: "/bsnl-vs-jio-speed-comparison", label: "BSNL vs Jio Speed" },
    { href: "/wifi-vs-ethernet-speed", label: "WiFi vs Ethernet" },
    { href: "/is-100-mbps-fast", label: "Is 100 Mbps Fast?" },
    { href: "/how-to-increase-wifi-speed", label: "Increase WiFi Speed" },
    { href: "/why-is-my-internet-slow", label: "Why Is My Internet Slow?" },
    { href: "/why-is-my-upload-speed-slow", label: "Why Is My Upload Slow?" },
    { href: "/why-does-my-internet-cut-out", label: "Why Does Internet Cut Out?" },
  ],
  "Learn More": [
    { href: "/test-my-internet-speed", label: "Test My Internet Speed" },
    { href: "/how-come-my-wifi-is-so-slow", label: "How Come My WiFi Is Slow?" },
    { href: "/blog", label: "SEO Guides & Tips" },
    { href: "/best-free-speed-test-tools-2026", label: "Best Speed Test Tools" },
    { href: "/internet-speed-for-gaming-guide", label: "Gaming Speed Guide" },
    { href: "/how-to-reduce-ping-gaming", label: "How to Reduce Ping" },
    { href: "/fix-slow-internet-on-phone", label: "Fix Slow Phone Internet" },
    { href: "/internet-speed-test-usa", label: "USA Speed Test" },
    { href: "/internet-speed-test-uk", label: "UK Speed Test" },
  ],
  Company: [
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-conditions", label: "Terms & Conditions" },
    { href: "/disclaimer", label: "Disclaimer" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* BRAND */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-lg mb-3"
            >
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" fill="currentColor" />
              </div>
              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                TrueInternetSpeedTest
              </span>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              Fast and reliable internet speed test tool for download speed, upload speed, ping, and jitter. Test WiFi, 5G, 4G, and broadband instantly.
            </p>

            <p className="text-xs text-muted-foreground mt-6">
              © {new Date().getFullYear()} TrueInternetSpeedTest.com — All rights reserved.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <Link href="https://twitter.com" target="_blank" className="p-2 rounded-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="https://facebook.com" target="_blank" className="p-2 rounded-full bg-blue-600/10 hover:bg-blue-600/20 text-blue-500 transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="p-2 rounded-full bg-blue-700/10 hover:bg-blue-700/20 text-blue-600 transition-colors">
                <Globe className="w-4 h-4" />
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-border/20">
              <h4 className="text-sm font-bold mb-4 uppercase tracking-wider text-blue-400">Get Our App</h4>
              <p className="text-xs text-muted-foreground mb-4">
                Install our official 2026 app for the fastest speed testing experience on Android, iOS, Windows, macOS, and Linux.
              </p>
              <div className="flex flex-col gap-4 items-start">
                <InstallButton />
                <Link
                  href="/get-app"
                  className="text-xs font-bold text-blue-500 hover:text-blue-400 transition-colors uppercase tracking-widest flex items-center gap-1.5"
                >
                  Detailed Setup Guide →
                </Link>
              </div>
              
            </div>
          </div>

          {/* DYNAMIC LINKS */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h3 className="font-bold text-sm mb-5 text-foreground uppercase tracking-wider">{category}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-blue-500 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-4xl text-center lg:text-left leading-relaxed">
            TrueInternetSpeedTest uses optimized nodes to
            measure internet download speed, latency (ping), and overall network
            performance across WiFi, mobile data (5G/4G), and broadband fiber connections,
            including streaming speed test and gaming speed test analysis.
          </p>
          <div className="flex flex-col items-center lg:items-end gap-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground bg-background/50 px-3 py-1.5 rounded-full border border-border/40">
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
              All servers operational
            </div>
            <div className="text-[10px] text-muted-foreground/60 uppercase tracking-widest font-medium">
              Sitemap Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
