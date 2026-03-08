"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false }) as unknown as React.ComponentType<Record<string, unknown>>;

type GlobePoint = { lat: number; lng: number; size: number };
type GlobeArc = {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  altitude: number;
};

export default function GlobalGlobe() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState(320);

  const points = useMemo<GlobePoint[]>(
    () => [
      { lat: 40.7128, lng: -74.006, size: 0.22 },
      { lat: 19.4326, lng: -99.1332, size: 0.16 },
      { lat: -23.5505, lng: -46.6333, size: 0.14 },
      { lat: 51.5072, lng: -0.1276, size: 0.18 },
      { lat: 48.8566, lng: 2.3522, size: 0.12 },
      { lat: 6.5244, lng: 3.3792, size: 0.16 },
      { lat: 25.2048, lng: 55.2708, size: 0.14 },
      { lat: 28.6139, lng: 77.209, size: 0.2 },
      { lat: 1.3521, lng: 103.8198, size: 0.12 },
      { lat: 35.6762, lng: 139.6503, size: 0.18 },
      { lat: -33.8688, lng: 151.2093, size: 0.15 },
    ],
    []
  );

  const arcs = useMemo<GlobeArc[]>(
    () => [
      { startLat: 40.7128, startLng: -74.006, endLat: 51.5072, endLng: -0.1276, altitude: 0.22 },
      { startLat: 51.5072, startLng: -0.1276, endLat: 6.5244, endLng: 3.3792, altitude: 0.2 },
      { startLat: 6.5244, startLng: 3.3792, endLat: 28.6139, endLng: 77.209, altitude: 0.24 },
      { startLat: 28.6139, startLng: 77.209, endLat: 35.6762, endLng: 139.6503, altitude: 0.19 },
      { startLat: 35.6762, startLng: 139.6503, endLat: -33.8688, endLng: 151.2093, altitude: 0.23 },
      { startLat: 40.7128, startLng: -74.006, endLat: 19.4326, endLng: -99.1332, altitude: 0.16 },
      { startLat: 19.4326, startLng: -99.1332, endLat: -23.5505, endLng: -46.6333, altitude: 0.18 },
      { startLat: 25.2048, startLng: 55.2708, endLat: 1.3521, endLng: 103.8198, altitude: 0.21 },
    ],
    []
  );

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const updateSize = () => {
      const next = Math.max(260, Math.min(520, node.clientWidth));
      setSize(next);
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative mx-auto aspect-square w-full max-w-[560px] overflow-hidden rounded-3xl border border-purple-300/50 bg-gradient-to-b from-zinc-900 via-zinc-900 to-purple-950/40 shadow-[0_30px_80px_-42px_rgba(147,51,234,0.7)]"
    >
      <div className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-purple-500/20 blur-2xl" />
      <div className="pointer-events-none absolute bottom-2 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-2xl" />
      <Globe
        width={size}
        height={size}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        showAtmosphere
        atmosphereColor="#b794f4"
        atmosphereAltitude={0.12}
        pointsData={points}
        pointAltitude="size"
        pointRadius={0.65}
        pointColor={() => "#c084fc"}
        arcsData={arcs}
        arcColor={() => ["#a855f7", "#d8b4fe"]}
        arcAltitude="altitude"
        arcDashLength={0.4}
        arcDashGap={0.8}
        arcDashAnimateTime={2200}
        arcStroke={0.8}
        onGlobeReady={(g: { controls?: () => { autoRotate: boolean; autoRotateSpeed: number } } | undefined) => {
          const controls = g?.controls?.();
          if (!controls) return;
          controls.autoRotate = true;
          controls.autoRotateSpeed = 0.7;
        }}
      />
    </div>
  );
}
