"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 900,
  height: 900,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    // location of all the tracks, static markers
    { location: [14.5995, 120.9842], size: 0.1 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
    { location: [39.9343616, -75.0485504], size: 0.07 },
    { location: [37.85, 6.10], size: 0.06 },
  ],
};

export default function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // persist mutable values:
  const widthRef = useRef(0);
  const phiRef = useRef(0);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);

  // `r` drives the user-drag rotation offset
  const [r, setR] = useState(0);

  // Measure canvas width on mount + resize
  const onResize = useCallback(() => {
    if (canvasRef.current) {
      widthRef.current = canvasRef.current.offsetWidth;
    }
  }, []);

  // This matches COBEOptions.onRender exactly
  const onRender: COBEOptions["onRender"] = useCallback(
    (state) => {
      if (!draggingRef.current) {
        phiRef.current += 0.003;
      }
      state.phi = phiRef.current + r;
      state.width = widthRef.current * 2;
      state.height = widthRef.current * 2;
    },
    [r]
  );

  // Initialize & clean up the globe
  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender,
    });

    if (canvasRef.current) {
      canvasRef.current.style.opacity = "1";
      canvasRef.current.style.cursor = "grab";
    }

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [config, onRender, onResize]);

  // Pointer event handlers
  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLCanvasElement>) => {
    draggingRef.current = true;
    startXRef.current = e.clientX;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grabbing";
    }
  }, []);

  const handlePointerUpOrOut = useCallback(() => {
    draggingRef.current = false;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = "grab";
    }
    setR(0);
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (draggingRef.current) {
      const delta = clientX - startXRef.current;
      startXRef.current = clientX;
      setR(delta / 200);
    }
  }, []);

  return (
    <div className={cn(className)}>
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-0 transition-opacity duration-500"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUpOrOut}
        onPointerOut={handlePointerUpOrOut}
        onPointerMove={(e) => handleMove(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && handleMove(e.touches[0].clientX)
        }
      />
    </div>
  );
}
