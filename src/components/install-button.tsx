"use client";

import { useEffect, useState } from "react";
import { Download, Smartphone, Monitor, ShieldCheck, X } from "lucide-react";

export function InstallButton() {
    const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
    const [isInstallable, setIsInstallable] = useState(false);
    const [platform, setPlatform] = useState<"ios" | "android" | "desktop" | "other">("other");
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // 1. Detect Platform
        const ua = navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(ua)) {
            setPlatform("ios");
            setIsInstallable(true); // Always "installable" on iOS via share menu
        } else if (/android/.test(ua)) {
            setPlatform("android");
        } else {
            setPlatform("desktop");
        }

        // 2. Listen for BeforeInstallPrompt (Chrome/Edge/Android)
        const handler = (e: any) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setIsInstallable(true);
        };

        window.addEventListener("beforeinstallprompt", handler);
        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const handleInstallClick = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === "accepted") {
                setDeferredPrompt(null);
                setIsInstallable(false);
            }
        } else {
            // For iOS or cases where prompt isn't fired yet, show a helpful modal
            setShowModal(true);
        }
    };

    if (!isInstallable && platform !== "ios") return null;

    return (
        <>
            <button
                onClick={handleInstallClick}
                className="cursor-pointer flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-blue-500/40 group active:scale-95"
            >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Install App
            </button>

            {/* Manual Installation Guide Modal */}
            {showModal && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                    <div className="bg-card border border-border w-full max-w-md rounded-3xl p-8 relative animate-in fade-in zoom-in duration-300">
                        <button
                            onClick={() => setShowModal(false)}
                            className="cursor-pointer absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                                {platform === "ios" || platform === "android" ? <Smartphone className="text-blue-400 w-8 h-8" /> : <Monitor className="text-blue-400 w-8 h-8" />}
                            </div>

                            <h3 className="text-2xl font-bold mb-2">Install App</h3>
                            <p className="text-muted-foreground text-sm mb-8">
                                Get the fastest testing experience by adding this tool to your device.
                            </p>

                            <div className="w-full space-y-4 text-left">
                                {platform === "ios" ? (
                                    <div className="p-4 rounded-2xl bg-white/5 border border-border/50">
                                        <p className="font-semibold text-sm mb-2">On iPhone/iPad:</p>
                                        <ol className="text-sm text-muted-foreground list-decimal pl-4 space-y-2">
                                            <li>Tap the <span className="text-white font-bold">Share</span> button in Safari</li>
                                            <li>Scroll down and select <span className="text-white font-bold">"Add to Home Screen"</span></li>
                                        </ol>
                                    </div>
                                ) : (
                                    <div className="p-4 rounded-2xl bg-white/5 border border-border/50">
                                        <p className="font-semibold text-sm mb-2">Action Required:</p>
                                        <p className="text-sm text-muted-foreground">
                                            Click the **"Install"** button in your browser's address bar to save this tool as an app.
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="mt-8 flex items-center gap-2 text-[10px] text-muted-foreground uppercase font-bold tracking-widest border-t border-border/40 pt-6 w-full justify-center">
                                <ShieldCheck className="w-3 h-3 text-green-500" />
                                Verified Secure for 2026
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
