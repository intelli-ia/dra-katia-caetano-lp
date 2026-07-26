"use client";

import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";

function MovingBorder({ duration = 2400 }: { duration?: number }) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x ?? 0);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y ?? 0);
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
      >
        <rect fill="none" width="100%" height="100%" rx="9999" ry="9999" ref={pathRef} />
      </svg>
      <motion.div
        style={{ position: "absolute", top: 0, left: 0, display: "inline-block", transform }}
      >
        <div className="h-16 w-16 opacity-90 bg-[radial-gradient(#FFC800_40%,transparent_60%)]" />
      </motion.div>
    </>
  );
}

export function MovingBorderWrapper({
  children,
  duration,
}: {
  children: React.ReactNode;
  duration?: number;
}) {
  return (
    <div className="relative inline-flex overflow-hidden rounded-full p-[2px]">
      <div className="absolute inset-0">
        <MovingBorder duration={duration} />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
