"use client";

import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

const COLORS = ["#4aa8ff", "#8b78ff", "#d073eb", "#43d9d0"];

export function WavyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    const noise = createNoise3D();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let time = 0;
    let animationFrame = 0;
    let previousFrame = 0;

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * pixelRatio);
      canvas.height = Math.floor(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    const draw = (timestamp = 0) => {
      if (!reducedMotion && timestamp - previousFrame < 28) {
        animationFrame = requestAnimationFrame(draw);
        return;
      }

      previousFrame = timestamp;
      context.clearRect(0, 0, width, height);
      context.save();
      context.globalAlpha = 0.26;
      context.filter = "blur(11px)";
      time += reducedMotion ? 0 : 0.0021;

      COLORS.forEach((color, waveIndex) => {
        context.beginPath();
        context.lineWidth = 42 + waveIndex * 7;
        context.strokeStyle = color;

        for (let x = -20; x <= width + 20; x += 7) {
          const y = noise(x / 700, waveIndex * 0.34, time) * 82;
          const baseline = Math.min(height * 0.42, 420) + waveIndex * 17;

          if (x === -20) context.moveTo(x, y + baseline);
          else context.lineTo(x, y + baseline);
        }

        context.stroke();
      });

      context.restore();

      if (!reducedMotion) animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-80 [mask-image:linear-gradient(to_bottom,black_0%,black_50%,transparent_92%)]"
      aria-hidden="true"
    />
  );
}
