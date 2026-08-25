"use client";

import { useEffect, useRef, useState } from "react";

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

type NavigatorWithConnection = Navigator & {
  connection?: { saveData?: boolean };
};

export default function HeroVideo() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const savesData = (navigator as NavigatorWithConnection).connection?.saveData;

    if (prefersReducedMotion || savesData) return;

    const idleWindow = window as IdleWindow;
    if (idleWindow.requestIdleCallback) {
      const handle = idleWindow.requestIdleCallback(() => setShouldLoad(true), { timeout: 1500 });
      return () => idleWindow.cancelIdleCallback?.(handle);
    }

    const timeout = window.setTimeout(() => setShouldLoad(true), 700);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!shouldLoad || !videoRef.current) return;
    videoRef.current.load();
    void videoRef.current.play().catch(() => undefined);
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      poster="/visual/imagenes/hero-poster.webp"
      aria-hidden="true"
      className="h-full w-full object-contain lg:object-cover"
    >
      {shouldLoad && (
        <>
          <source src="/videos/hero-optimized.webm" type="video/webm" />
          <source src="/videos/hero-optimized.mp4" type="video/mp4" />
        </>
      )}
    </video>
  );
}
