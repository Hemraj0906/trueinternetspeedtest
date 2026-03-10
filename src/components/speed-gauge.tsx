"use client";

import { useRef, useEffect } from "react";

interface SpeedGaugeProps {
  value: number;
  max?: number;
  phase?: string;
  size?: number;
}

export function SpeedGauge({
  value,
  max = 200,
  phase = "idle",
  size = 280,
}: SpeedGaugeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animatedValueRef = useRef(0);
  const requestRef = useRef<number>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const radius = size * 0.42;
    const startAngle = (210 * Math.PI) / 180;
    const endAngle = (330 * Math.PI) / 180;
    const totalAngle = (300 * Math.PI) / 180;

    const drawFrame = (val: number) => {
      const normalizedValue = Math.min(val / max, 1);

      // Clear
      ctx.clearRect(0, 0, size, size);

      // 1. Background Glow & Circle
      ctx.beginPath();
      ctx.arc(cx, cy, radius + 8, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0,0,0,0.4)";
      ctx.fill();

      const glow = ctx.createRadialGradient(
        cx,
        cy,
        radius - 15,
        cx,
        cy,
        radius + 20
      );
      glow.addColorStop(0, "rgba(59,130,246,0.0)");
      glow.addColorStop(1, "rgba(59,130,246,0.1)");
      ctx.beginPath();
      ctx.arc(cx, cy, radius + 20, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // 2. Track & Segments
      ctx.beginPath();
      ctx.arc(cx, cy, radius, startAngle, startAngle + totalAngle);
      ctx.strokeStyle = "rgba(255,255,255,0.05)";
      ctx.lineWidth = 14;
      ctx.lineCap = "round";
      ctx.stroke();

      const segments = [
        { from: 0, to: 0.15, color: "#ef4444" },
        { from: 0.15, to: 0.35, color: "#f59e0b" },
        { from: 0.35, to: 0.65, color: "#10b981" },
        { from: 0.65, to: 1.0, color: "#3b82f6" },
      ];

      segments.forEach(({ from, to, color }) => {
        ctx.beginPath();
        ctx.arc(
          cx,
          cy,
          radius,
          startAngle + totalAngle * from,
          startAngle + totalAngle * to
        );
        ctx.strokeStyle = color + "20";
        ctx.lineWidth = 14;
        ctx.stroke();
      });

      // 3. Active Progress Arc
      if (normalizedValue > 0) {
        const activeEnd = startAngle + totalAngle * normalizedValue;
        const grad = ctx.createLinearGradient(cx - radius, cy, cx + radius, cy);
        grad.addColorStop(0, "#3b82f6");
        grad.addColorStop(1, "#8b5cf6");

        ctx.beginPath();
        ctx.arc(cx, cy, radius, startAngle, activeEnd);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 14;
        ctx.lineCap = "round";
        ctx.stroke();

        // Tip Flare
        const tx = cx + radius * Math.cos(activeEnd);
        const ty = cy + radius * Math.sin(activeEnd);
        const tipG = ctx.createRadialGradient(tx, ty, 0, tx, ty, 15);
        tipG.addColorStop(0, "rgba(139,92,246,0.6)");
        tipG.addColorStop(1, "rgba(139,92,246,0)");
        ctx.beginPath();
        ctx.arc(tx, ty, 15, 0, Math.PI * 2);
        ctx.fillStyle = tipG;
        ctx.fill();
      }

      // 4. Tick Marks & Labels
      for (let i = 0; i <= 20; i++) {
        const t = i / 20;
        const angle = startAngle + totalAngle * t;
        const isMajor = i % 5 === 0;
        const inner = isMajor ? radius - 20 : radius - 14;
        const outer = radius - 4;

        ctx.beginPath();
        ctx.moveTo(cx + inner * Math.cos(angle), cy + inner * Math.sin(angle));
        ctx.lineTo(cx + outer * Math.cos(angle), cy + outer * Math.sin(angle));
        ctx.strokeStyle = isMajor
          ? "rgba(255,255,255,0.6)"
          : "rgba(255,255,255,0.2)";
        ctx.lineWidth = isMajor ? 2.5 : 1;
        ctx.stroke();

        if (isMajor) {
          const lRadius = radius - 45; // Moved inside the circle as per photo
          const lx = cx + lRadius * Math.cos(angle);
          const ly = cy + lRadius * Math.sin(angle);

          ctx.fillStyle = "rgba(255,255,255,0.4)";
          ctx.font = `600 ${size * 0.045}px Inter, sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText((t * max).toString(), lx, ly);
        }
      }

      // 5. THE PREMIUM NEEDLE
      const needleAngle = startAngle + totalAngle * normalizedValue;
      const needleLength = radius - 15;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(needleAngle);

      // Shadow for depth
      ctx.shadowColor = "rgba(0,0,0,0.5)";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 4;

      // Draw tapered needle body
      ctx.beginPath();
      ctx.moveTo(-15, 0); // Tail
      ctx.lineTo(0, -4); // Base top
      ctx.lineTo(needleLength, -1); // Tip top
      ctx.lineTo(needleLength, 1); // Tip bottom
      ctx.lineTo(0, 4); // Base bottom
      ctx.closePath();

      const nGrad = ctx.createLinearGradient(0, 0, needleLength, 0);
      nGrad.addColorStop(0, "#ffffff");
      nGrad.addColorStop(0.5, "#e0e7ff");
      nGrad.addColorStop(1, "#818cf8");

      ctx.fillStyle = nGrad;
      ctx.fill();

      // Sharp line detail on needle
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(needleLength - 2, 0);
      ctx.strokeStyle = "rgba(255,255,255,0.5)";
      ctx.lineWidth = 0.5;
      ctx.stroke();

      ctx.restore();

      // 6. Hub (Multi-layer)
      // Outer Hub Ring
      ctx.beginPath();
      ctx.arc(cx, cy, 18, 0, Math.PI * 2);
      ctx.fillStyle = "#1e293b";
      ctx.fill();
      ctx.strokeStyle = "rgba(255,255,255,0.1)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Main Hub Button
      const hGrad = ctx.createRadialGradient(cx - 4, cy - 4, 0, cx, cy, 14);
      hGrad.addColorStop(0, "#6366f1");
      hGrad.addColorStop(1, "#3730a3");
      ctx.beginPath();
      ctx.arc(cx, cy, 14, 0, Math.PI * 2);
      ctx.fillStyle = hGrad;
      ctx.fill();

      // Center Pin
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.fill();

      // 7. Center Value Display (High Contrast)
      // Background circle for text readability
      ctx.beginPath();
      ctx.arc(cx, cy, 50, 0, Math.PI * 2);
      const bgGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 50);
      bgGrad.addColorStop(0, "rgba(15, 23, 42, 0.85)");
      bgGrad.addColorStop(1, "rgba(15, 23, 42, 0.95)");
      ctx.fillStyle = bgGrad;
      ctx.fill();
      ctx.strokeStyle = "rgba(59, 130, 246, 0.3)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Numeric Value - Large and High Contrast
      const displayValue = val > 0 ? val.toFixed(1) : "0.0";
      ctx.fillStyle = "#ffffff";
      ctx.font = `800 ${
        size * 0.14
      }px Inter, -apple-system, BlinkMacSystemFont, sans-serif`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Blue glow effect for the text
      ctx.shadowColor = "rgba(59, 130, 246, 0.8)";
      ctx.shadowBlur = 20;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      ctx.fillText(displayValue, cx, cy - 8);

      // Reset shadow for unit text
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;

      // Unit Label (Mbps)
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.font = `500 ${
        size * 0.045
      }px Inter, -apple-system, BlinkMacSystemFont, sans-serif`;
      ctx.fillText("Mbps", cx, cy + 22);
    };

    // Initial frame synchronous draw to eliminate blank flash
    drawFrame(animatedValueRef.current);

    const animate = () => {
      const targetValue = value;
      const smoothingSpeed = 0.15;
      animatedValueRef.current +=
        (targetValue - animatedValueRef.current) * smoothingSpeed;

      drawFrame(animatedValueRef.current);
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [value, max, size]);

  return (
    <div className="relative group" style={{ width: size, height: size }}>
      {/* SSR Static Placeholder SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 transition-opacity duration-700"
        style={{ zIndex: 0 }}
        viewBox="0 0 280 280"
      >
        <circle
          cx="140"
          cy="140"
          r="118"
          fill="rgba(0,0,0,0.2)"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="14"
        />
        <path
          d="M51 199 A 118 118 0 1 1 229 199"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="14"
          strokeLinecap="round"
        />
      </svg>

      <canvas
        ref={canvasRef}
        style={{ width: size, height: size, position: "relative", zIndex: 1 }}
        className="drop-shadow-2xl"
        aria-label={`Speed gauge showing ${value} Mbps`}
      />
    </div>
  );
}
