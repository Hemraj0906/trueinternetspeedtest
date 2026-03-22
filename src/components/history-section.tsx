"use client";

import { useEffect, useState } from "react";
import { SpeedTestResult } from "@/lib/speed-test";
import {
    History,
    Trash2,
    ArrowDown,
    ArrowUp,
    Activity,
    Download,
    Calendar
} from "lucide-react";

export function HistorySection() {
    const [history, setHistory] = useState<SpeedTestResult[]>([]);

    useEffect(() => {
        const loadHistory = () => {
            const saved = localStorage.getItem("speed_test_history");
            if (saved) {
                try {
                    setHistory(JSON.parse(saved));
                } catch (e) {
                    console.error(e);
                }
            }
        };
        loadHistory();

        // Listen for storage changes (if user has multiple tabs open)
        window.addEventListener('storage', loadHistory);
        return () => window.removeEventListener('storage', loadHistory);
    }, []);

    const clearHistory = () => {
        if (confirm("Are you sure you want to clear your local test history?")) {
            localStorage.removeItem("speed_test_history");
            setHistory([]);
        }
    };

    if (history.length === 0) return null;

    return (
        <div className="w-full mt-12 bg-card/40 border border-border/50 rounded-3xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <History className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg font-bold">Your Recent Tests</h3>
                </div>
                <button
                    onClick={clearHistory}
                    className="text-xs text-muted-foreground hover:text-red-400 flex items-center gap-1 transition-colors cursor-pointer"
                >
                    <Trash2 className="w-3.5 h-3.5" />
                    Clear History
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-xs text-muted-foreground border-b border-border/40">
                            <th className="pb-3 font-medium">Date</th>
                            <th className="pb-3 font-medium">Download</th>
                            <th className="pb-3 font-medium">Upload</th>
                            <th className="pb-3 font-medium">Ping</th>
                            <th className="pb-3 font-medium hidden sm:table-cell">ISP</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/20">
                        {history.map((item, i) => (
                            <tr key={i} className="group hover:bg-white/5 transition-colors">
                                <td className="py-4 text-xs tabular-nums">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-3.5 h-3.5 text-muted-foreground opacity-50 group-hover:opacity-100" />
                                        {new Date(item.timestamp).toLocaleDateString([], {
                                            month: 'short',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </div>
                                </td>
                                <td className="py-4 font-bold text-blue-400">
                                    <span className="flex items-center gap-1">
                                        {item.download.toFixed(1)}
                                        <span className="text-[10px] font-normal text-muted-foreground">Mbps</span>
                                    </span>
                                </td>
                                <td className="py-4 font-bold text-indigo-400">
                                    <span className="flex items-center gap-1">
                                        {item.upload.toFixed(1)}
                                        <span className="text-[10px] font-normal text-muted-foreground">Mbps</span>
                                    </span>
                                </td>
                                <td className="py-4 text-sm tabular-nums text-white/80">
                                    <span className="flex items-center gap-1">
                                        {item.ping}
                                        <span className="text-[10px] font-normal text-muted-foreground">ms</span>
                                    </span>
                                </td>
                                <td className="py-4 text-xs text-muted-foreground hidden sm:table-cell truncate max-w-[120px]">
                                    {item.isp}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
