"use client";

import React, { useRef, useEffect, useState } from "react";
import { useScroll, useVelocity, useSpring, useTransform } from "framer-motion";

const FRAGMENTS = [
  "useState()",
  "useEffect(() => {})",
  "const [data, setData] =",
  "export default function",
  "async function handler(req, res)",
  "app.use(express.json())",
  "getServerSideProps",
  "useRouter()",
  "Promise.all()",
  "await fetch()",
  "<Component />",
  "{ data.map() }",
  "const { props } = useStaticProps",
  "next/image",
  "framer-motion",
  "tailwind.config.ts",
  "type Props = {}",
  "interface State {}",
];

const COLORS = ["#06b6d4", "#8b5cf6", "#6366f1"]; // Cyan, Violet, Blue

interface Fragment {
  text: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  driftSpeed: number;
  depth: number;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  speed: number;
  size: number;
  opacity: number;
  pathIndex: number;
  progress: number;
}

interface Path {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const ComputationalBackground = ({ isMobile }: { isMobile: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 🔹 3. Scroll-Speed Reactive Calculations
  const { scrollYProgress } = useScroll();
  const scrollVelocity = useVelocity(scrollYProgress);
  const smoothVelocity = useSpring(scrollVelocity, {
    stiffness: 100,
    damping: 30,
  });

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const fragments = useRef<Fragment[]>([]);
  const paths = useRef<Path[]>([]);
  const particles = useRef<Particle[]>([]);
  const lastPulseTime = useRef(0);
  const pulseIntensity = useRef(0);

  // Initialize objects
  const init = (w: number, h: number) => {
    // Fragments
    fragments.current = Array.from({ length: isMobile ? 8 : 15 }, () => ({
      text: FRAGMENTS[Math.floor(Math.random() * FRAGMENTS.length)],
      x: Math.random() * w,
      y: Math.random() * h,
      size: 10 + Math.random() * 6,
      opacity: 0.08 + Math.random() * 0.06,
      driftSpeed: 0.2 + Math.random() * 0.4,
      depth: 0.5 + Math.random() * 1.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    // Paths for data flow
    paths.current = Array.from({ length: isMobile ? 5 : 12 }, () => ({
      x1: Math.random() * w,
      y1: Math.random() * h,
      x2: Math.random() * w,
      y2: Math.random() * h,
    }));

    // Particles along paths
    particles.current = Array.from({ length: isMobile ? 10 : 25 }, () => ({
      x: 0,
      y: 0,
      speed: 0.0008 + Math.random() * 0.0015,
      size: 1 + Math.random() * 1.5,
      opacity: 0.3 + Math.random() * 0.3,
      pathIndex: Math.floor(Math.random() * paths.current.length),
      progress: Math.random(),
    }));
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setDimensions({ width: clientWidth, height: clientHeight });
        if (canvasRef.current) {
          canvasRef.current.width = clientWidth;
          canvasRef.current.height = clientHeight;
          init(clientWidth, clientHeight);
        }
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [isMobile]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrame: number;

    const render = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 🔹 3. Scroll-Speed Reactive Calculations
      let velocity = Math.abs(smoothVelocity.get());
      if (isMobile) velocity = 0; // Auto-disable boost on mobile/low-performance devices
      const speedMult = 1 + Math.min(velocity * 8, 0.4); // max 1.4x
      const brightnessBoost = Math.min(velocity * 0.4, 0.05); // max 5%

      // Velocity-triggered pulse
      if (velocity > 0.01) {
        pulseIntensity.current = Math.max(
          pulseIntensity.current,
          Math.min(velocity * 2, 1),
        );
      }

      // System Pulse Logic (Periodic)
      if (time - lastPulseTime.current > 15000) {
        lastPulseTime.current = time;
        pulseIntensity.current = 1;
      }

      // Decay pulse intensity
      if (pulseIntensity.current > 0) {
        pulseIntensity.current -= 0.012;
      }

      // 🔹 4. Computational Data Flow Network
      ctx.shadowBlur = 0;
      paths.current.forEach((path) => {
        ctx.beginPath();
        ctx.moveTo(path.x1, path.y1);
        ctx.lineTo(path.x2, path.y2);
        const pathAlpha = 0.03 + pulseIntensity.current * 0.06;
        ctx.strokeStyle = `rgba(139, 92, 246, ${pathAlpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Nodes at endpoints
        ctx.beginPath();
        ctx.arc(path.x1, path.y1, 1.5, 0, Math.PI * 2);
        ctx.arc(path.x2, path.y2, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(6, 182, 212, ${pathAlpha * 2})`;
        ctx.fill();
      });

      particles.current.forEach((p) => {
        const path = paths.current[p.pathIndex];
        const pSpeed = p.speed * speedMult;
        p.progress += pSpeed;
        if (p.progress > 1) p.progress = 0;

        p.x = path.x1 + (path.x2 - path.x1) * p.progress;
        p.y = path.y1 + (path.y2 - path.y1) * p.progress;

        // Small glowing packets
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        const pAlpha = p.opacity * (1 + pulseIntensity.current);
        ctx.fillStyle = `rgba(6, 182, 212, ${pAlpha})`;
        ctx.shadowBlur = velocity > 0.005 ? 8 : 2;
        ctx.shadowColor = "#06b6d4";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // 🔹 1. Code Fragments
      ctx.font = "italic 11px monospace";
      fragments.current.forEach((f, i) => {
        // Slow vertical drift (20–40px over ~10s)
        f.y -= f.driftSpeed * 0.15 * speedMult;
        if (f.y < -50) f.y = canvas.height + 50;

        // Slight horizontal randomness
        f.x += Math.sin(time * 0.0008 + i) * 0.15;

        const alpha =
          (f.opacity + brightnessBoost + pulseIntensity.current * 0.04) *
          (isMobile ? 0.7 : 1);
        ctx.fillStyle = f.color;
        ctx.globalAlpha = alpha;
        ctx.fillText(f.text, f.x, f.y);

        // Dynamic Swap Logic (Computational aura)
        if (Math.random() < 0.0005) {
          f.text = FRAGMENTS[Math.floor(Math.random() * FRAGMENTS.length)];
        }
      });
      ctx.globalAlpha = 1;

      // 🔹 5. System Refresh Pulse / Ripple Wave
      if (pulseIntensity.current > 0.1) {
        // Horizontal energy sweep
        const sweepProgress = 1 - Math.pow(pulseIntensity.current, 1.5);
        const sweepX = sweepProgress * canvas.width * 1.5 - canvas.width * 0.25;

        const grad = ctx.createLinearGradient(sweepX - 150, 0, sweepX, 0);
        grad.addColorStop(0, "rgba(99, 102, 241, 0)");
        grad.addColorStop(
          0.5,
          `rgba(6, 182, 212, ${pulseIntensity.current * 0.12})`,
        );
        grad.addColorStop(1, "rgba(99, 102, 241, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Recalculation flicker (Tiny numbers)
        if (pulseIntensity.current > 0.8) {
          ctx.font = "8px monospace";
          ctx.fillStyle = "rgba(6, 182, 212, 0.3)";
          for (let j = 0; j < 5; j++) {
            ctx.fillText(
              Math.random().toString(16).substring(2, 6),
              Math.random() * canvas.width,
              Math.random() * canvas.height,
            );
          }
        }
      }

      animationFrame = requestAnimationFrame(render);
    };

    animationFrame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animationFrame);
  }, [dimensions, isMobile, smoothVelocity]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-0"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default ComputationalBackground;
