"use client";

import { useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

type TiltStyle = CSSProperties & { "--x"?: string; "--y"?: string };

export function TiltCard({
  children,
  className,
  maxTilt = 7,
}: TiltCardProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<TiltStyle>({});

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(1000px) rotateX(${(-py * maxTilt).toFixed(2)}deg) rotateY(${(px * maxTilt).toFixed(2)}deg) translateZ(0)`,
      "--x": `${((e.clientX - rect.left) / rect.width) * 100}%`,
      "--y": `${((e.clientY - rect.top) / rect.height) * 100}%`,
    });
  }

  function handleLeave() {
    setStyle({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      className={`h-full transition-transform duration-200 will-change-transform ${className ?? ""}`}
    >
      {children}
    </div>
  );
}