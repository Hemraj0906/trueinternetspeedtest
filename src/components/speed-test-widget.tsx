"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import {
  runSpeedTest,
  getSpeedRating,
  getPingRating,
  type SpeedTestState,
} from "@/lib/speed-test";
import { SpeedGauge } from "./speed-gauge";
import { NoInternetAlert, useInternetConnection } from "./no-internet-alert";
import { HistorySection } from "./history-section";
import {
  Download,
  Upload,
  Activity,
  Zap,
  Globe,
  Wifi,
  RefreshCw,
  Share2,
  CheckCircle2,
  MapPin,
  Clock,
  Gauge,
  Smartphone
} from "lucide-react";

const initialState: SpeedTestState = {
  phase: "idle",
  progress: 0,
  currentSpeed: 0,
  result: null,
  error: null,
};

export function SpeedTestWidget() {
  const [state, setState] = useState<SpeedTestState>(initialState);
  const [testCount, setTestCount] = useState(0);
  const [showNoInternet, setShowNoInternet] = useState(false);
  const isRunning = state.phase !== "idle" && state.phase !== "complete";
  const abortRef = useRef<AbortController | null>(null);
  const testInProgressRef = useRef(false);
  const [geoData, setGeoData] = useState<any>(null);

  const { isOnline } = useInternetConnection();

  useEffect(() => {
    if (!isOnline && state.phase === "idle") {
      setShowNoInternet(true);
    }
  }, [isOnline, state.phase]);

  // Load geo info once on mount
  useEffect(() => {
    const loadGeo = async () => {
      try {
        const cached = localStorage.getItem("geoData");
        if (cached) {
          const parsed = JSON.parse(cached);
          if (parsed.country && parsed.city) {
            setGeoData(parsed);
            return;
          }
        }
        const res = await fetch("https://geo-api.hemrajdeshmukh0906.workers.dev/");
        const data = await res.json();
        if (data.country && data.city) {
          setGeoData(data);
          localStorage.setItem("geoData", JSON.stringify(data));
        }
      } catch (err) {
        console.log("Error loading geo", err);
      }
    };
    loadGeo();
  }, []);

  const handleRetry = useCallback(() => {
    setShowNoInternet(false);
    setTimeout(() => {
      if (navigator.onLine) setShowNoInternet(false);
    }, 1000);
  }, []);

  const updateState = useCallback((update: Partial<SpeedTestState>) => {
    setState((prev) => ({ ...prev, ...update }));
  }, []);

  const startTest = useCallback(async () => {
    if (testInProgressRef.current) return;

    testInProgressRef.current = true;
    setTestCount((prev) => prev + 1);

    if (abortRef.current) abortRef.current.abort();
    abortRef.current = new AbortController();

    setState(initialState);

    try {
      await runSpeedTest(updateState, abortRef.current.signal);
    } catch (err: any) {
      if (err.name !== "AbortError") {
        setState((prev) => ({
          ...prev,
          phase: "complete",
          error: "Test failed. Please check your connection and try again.",
        }));
      }
    } finally {
      testInProgressRef.current = false;
    }
  }, [updateState]);

  const reset = useCallback(() => {
    if (abortRef.current) abortRef.current.abort();
    testInProgressRef.current = false;
    setState(initialState);
  }, []);

  const phaseLabel = {
    idle: "Ready to test your internet speed",
    ping: "Measuring latency...",
    download: "Testing download speed...",
    upload: "Testing upload speed...",
    complete: state.error ? "Test Failed" : "Speed test complete!",
  }[state.phase];

  const gaugeMax = state.phase === "upload" ? 100 : 200;
  const displayValue = (state.phase === "complete" && state.result)
    ? state.result.download
    : state.currentSpeed;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Main gauge area */}
      <div className="relative flex flex-col items-center">
        <div className="relative">
          <SpeedGauge
            value={displayValue}
            max={gaugeMax}
            phase={state.phase}
            size={280}
          />
        </div>

        <div className="mt-4 text-center">
          <p className={`text-sm ${state.error ? 'text-red-400 font-medium' : 'text-muted-foreground'}`}>
            {state.error || phaseLabel}
          </p>
          {isRunning && (
            <div className="mt-2 w-48 h-1.5 bg-muted rounded-full overflow-hidden mx-auto">
              <div
                className="h-full w-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-transform duration-300 origin-left"
                style={{ transform: `scaleX(${state.progress / 100})` }}
              />
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-col items-center gap-4">
          {state.phase === "idle" ? (
            <button
              onClick={startTest}
              className="cursor-pointer relative group px-10 py-4 rounded-full font-bold text-lg text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap className="w-5 h-5 fill-current" />
                Start Speed Test
              </span>
              <span className="absolute inset-0 rounded-full border-2 border-blue-400/40 animate-ping pointer-events-none" />
            </button>
          ) : state.phase === "complete" ? (
            <div className="flex items-center gap-3">
              <button
                onClick={reset}
                className="cursor-pointer flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90 transition-all shadow-lg"
              >
                <RefreshCw className="w-4 h-4" />
                Test Again
              </button>

              <button
                onClick={() => {
                  if (navigator.share && state.result) {
                    navigator.share({
                      title: "My Speed Test Result",
                      text: `Download: ${state.result.download} Mbps | Upload: ${state.result.upload} Mbps | Ping: ${state.result.ping} ms | ISP: ${state.result.isp}`,
                      url: window.location.href,
                    }).catch(() => { });
                  }
                }}
                className="cursor-pointer p-3 rounded-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-all"
                title="Share results"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3 text-muted-foreground p-3">
              <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
              <span className="text-sm font-medium">Measuring...</span>
            </div>
          )}
        </div>
      </div>

      {/* Results Grid */}
      {state.phase !== "idle" && (
        <div className="mt-10 space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <ResultCard
              icon={<Download className="w-4 h-4" />}
              label="Download"
              value={state.result ? state.result.download.toFixed(1) : state.phase === "download" ? state.currentSpeed.toFixed(1) : "--"}
              unit="Mbps"
              active={state.phase === "download"}
              done={!!state.result || state.phase === "upload" || state.phase === "complete"}
              rating={state.result ? getSpeedRating(state.result.download) : undefined}
            />
            <ResultCard
              icon={<Upload className="w-4 h-4" />}
              label="Upload"
              value={state.result ? state.result.upload.toFixed(1) : state.phase === "upload" ? state.currentSpeed.toFixed(1) : "--"}
              unit="Mbps"
              active={state.phase === "upload"}
              done={!!state.result}
              rating={state.result ? getSpeedRating(state.result.upload) : undefined}
            />
            <ResultCard
              icon={<Activity className="w-4 h-4" />}
              label="Ping (Idle)"
              value={state.result ? state.result.ping.toFixed(0) : state.phase === "ping" ? state.currentSpeed.toFixed(0) : "--"}
              unit="ms"
              active={state.phase === "ping"}
              done={state.phase !== "ping"}
              rating={state.result ? getPingRating(state.result.ping) : undefined}
            />
            <ResultCard
              icon={<Gauge className="w-4 h-4" />}
              label="Loaded Latency"
              value={state.result ? state.result.loadedPing.toFixed(0) : "--"}
              unit="ms"
              active={state.phase === "download" || state.phase === "upload"}
              done={!!state.result}
              tooltip="Your ping while the connection is under load (Bufferbloat)."
            />
          </div>

          {/* Advanced Stats Row */}
          {state.result && (
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-2xl bg-card/60 border border-border/50 flex flex-col items-center">
                <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mb-1">Jitter</span>
                <span className="text-lg font-bold tabular-nums">{state.result.jitter} ms</span>
              </div>
              <div className="p-3 rounded-2xl bg-card/60 border border-border/50 flex flex-col items-center">
                <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider mb-1">Bufferbloat</span>
                <span className="text-lg font-bold tabular-nums">+{state.result.bufferbloat} ms</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Connection Info Card */}
      {state.result && (
        <div className="mt-6 p-5 rounded-3xl bg-card border border-border/50 shadow-inner">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <InfoItem icon={<Globe className="w-4 h-4 text-blue-400" />} label="IP Address" value={state.result.ip} />
              <InfoItem icon={<Wifi className="w-4 h-4 text-indigo-400" />} label="Service Provider" value={state.result.isp} />
            </div>
            <div className="space-y-4">
              <InfoItem
                icon={<MapPin className="w-4 h-4 text-red-400" />}
                label="Location"
                value={`${state.result.city}${state.result.region ? `, ${state.result.region}` : ""}, ${state.result.country}`}
                flag={state.result.countryCode}
              />
              <InfoItem icon={<CheckCircle2 className="w-4 h-4 text-green-400" />} label="Test Server" value={state.result.server} />
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Tested at {new Date(state.result.timestamp).toLocaleTimeString()}
            </div>
            <div className="flex items-center gap-1">
              <Smartphone className="w-3 h-3" />
              HTML5 Browser Test
            </div>
          </div>
        </div>
      )}

      {/* PERSISTENT HISTORY */}
      <HistorySection />

      <NoInternetAlert
        isOpen={showNoInternet}
        onClose={() => setShowNoInternet(false)}
        onRetry={handleRetry}
      />
    </div>
  );
}

function ResultCard({ icon, label, value, unit, active, done, rating, tooltip }: any) {
  return (
    <div className={`relative p-3 rounded-2xl border transition-all duration-300 ${active ? "border-blue-500/60 bg-blue-500/10 shadow-lg" : "border-border/50 bg-card/60"}`}>
      <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
        {icon}
        <span className="text-[10px] font-bold uppercase tracking-tight">{label}</span>
      </div>
      <div className="text-xl font-bold tabular-nums">
        {value === "--" ? <span className="text-muted-foreground opacity-30">--</span> : <span className={done ? "" : "text-blue-400"}>{value}</span>}
      </div>
      <div className="flex items-center justify-between mt-0.5">
        <span className="text-[10px] text-muted-foreground">{unit}</span>
        {rating && <span className="text-[10px] font-bold" style={{ color: rating.color }}>{rating.label}</span>}
      </div>
    </div>
  );
}

function InfoItem({ icon, label, value, flag }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">{label}</div>
        <div className="font-medium text-sm truncate flex items-center gap-2">
          {value}
          {flag && (
            <img
              src={`https://flagcdn.com/w160/${flag.toLowerCase()}.png`}
              alt={flag}
              className="w-8 h-auto rounded-[3px] border border-border/40 shadow-md"
            />
          )}
        </div>
      </div>
    </div>
  );
}
