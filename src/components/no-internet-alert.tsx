"use client";

import { useState, useEffect } from "react";
import { AlertTriangle, Wifi, WifiOff, RefreshCw, X } from "lucide-react";

interface NoInternetAlertProps {
  isOpen: boolean;
  onClose: () => void;
  onRetry: () => void;
}

export function NoInternetAlert({
  isOpen,
  onClose,
  onRetry,
}: NoInternetAlertProps) {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (isOpen && countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, countdown]);

  useEffect(() => {
    if (countdown === 0 && isOpen) {
      onRetry();
      setCountdown(5);
    }
  }, [countdown, isOpen, onRetry]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md mx-4 bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl border border-red-500/30 p-6 shadow-2xl shadow-red-500/20">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/10 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-white/60" />
        </button>

        {/* Icon */}
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
          <WifiOff className="w-8 h-8 text-red-500" />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-white text-center mb-2">
          No Internet Connection
        </h2>

        {/* Description */}
        <p className="text-white/60 text-center mb-4">
          We couldn't detect an active internet connection. Please check your
          network settings and try again.
        </p>

        {/* Suggestions */}
        <div className="bg-white/5 rounded-xl p-4 mb-4">
          <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-yellow-500" />
            Quick Fixes:
          </h3>
          <ul className="text-sm text-white/60 space-y-1">
            <li>• Check if WiFi is enabled</li>
            <li>• Restart your router/modem</li>
            <li>• Move closer to the router</li>
            <li>• Try a different network</li>
          </ul>
        </div>

        {/* Auto retry countdown */}
        <p className="text-center text-white/40 text-sm mb-4">
          Auto-retrying in {countdown} seconds...
        </p>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 rounded-full font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setCountdown(5);
              onRetry();
            }}
            className="flex-1 px-4 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 transition-all flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

// Hook to detect internet connection
export function useInternetConnection() {
  const [isOnline, setIsOnline] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Check initial connection
    const checkConnection = () => {
      setIsOnline(navigator.onLine);
      setIsChecking(false);
    };

    checkConnection();

    // Listen for online/offline events
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Also poll periodically
    const interval = setInterval(() => {
      setIsOnline(navigator.onLine);
    }, 5000);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      clearInterval(interval);
    };
  }, []);

  return { isOnline, isChecking };
}

// Network error types
export type NetworkErrorType =
  | "no-internet"
  | "timeout"
  | "server-error"
  | "cors-error"
  | "unknown";

export interface NetworkError {
  type: NetworkErrorType;
  message: string;
  suggestion: string;
}

export function getNetworkErrorMessage(error: unknown): NetworkError {
  if (!navigator.onLine) {
    return {
      type: "no-internet",
      message: "No internet connection detected",
      suggestion: "Please check your network settings and try again",
    };
  }

  const err = error as { name?: string; message?: string } | undefined;

  if (err?.name === "AbortError" || err?.name === "TimeoutError") {
    return {
      type: "timeout",
      message: "Connection timed out",
      suggestion: "The server took too long to respond. Please try again.",
    };
  }

  if (
    err?.message?.includes("Failed to fetch") ||
    err?.message?.includes("NetworkError")
  ) {
    return {
      type: "no-internet",
      message: "Unable to connect to server",
      suggestion: "Please check your internet connection and try again.",
    };
  }

  return {
    type: "unknown",
    message: err?.message || "An unexpected error occurred",
    suggestion: "Please try again later.",
  };
}
