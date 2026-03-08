"use client";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  // Use native browser scrolling for reliability across desktop and mobile.
  return <>{children}</>;
}
