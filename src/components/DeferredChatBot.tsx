"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ChatBot = dynamic(() => import("./ChatBot"), { ssr: false });

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export default function DeferredChatBot() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const idleWindow = window as IdleWindow;

    if (idleWindow.requestIdleCallback) {
      const handle = idleWindow.requestIdleCallback(() => setReady(true), { timeout: 2500 });
      return () => idleWindow.cancelIdleCallback?.(handle);
    }

    const timeout = window.setTimeout(() => setReady(true), 1800);
    return () => window.clearTimeout(timeout);
  }, []);

  return ready ? <ChatBot visible={true} /> : null;
}
