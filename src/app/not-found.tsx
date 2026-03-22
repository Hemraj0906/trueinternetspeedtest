import Link from "next/link";
import { Breadcrumb } from "@/components/breadcrumb";
import { Home, Search, AlertTriangle } from "lucide-react";

export default function NotFound() {
    return (
        <div className="bg-background min-h-[70vh] flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-yellow-500/10 flex items-center justify-center">
                    <AlertTriangle className="w-10 h-10 text-yellow-500" />
                </div>

                <h1 className="text-4xl font-extrabold mb-4">404 - Page Not Found</h1>
                <p className="text-muted-foreground mb-8">
                    The speed test guide or tool you are looking for has been moved or doesn't exist.
                    Use the links below to find your way back.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
                    >
                        <Home className="w-4 h-4" />
                        Back to Home
                    </Link>
                    <Link
                        href="/broadband-speed-test"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-all"
                    >
                        <Search className="w-4 h-4" />
                        Try Speed Test
                    </Link>
                </div>
            </div>
        </div>
    );
}
