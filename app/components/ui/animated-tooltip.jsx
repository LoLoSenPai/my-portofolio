"use client";
import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const AnimatedTooltip = ({ text, children, positionContext }) => {
  const [isHovered, setIsHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const initialTranslateXOffset = positionContext === 'icon' ? -90 : positionContext === 'title' ? 160 : 0;
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50 + initialTranslateXOffset, 50 + initialTranslateXOffset]),
    springConfig
  );

  const handleMouseMove = (event) => {
    const targetRect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - targetRect.left;
    const relativeX = offsetX - targetRect.width / 2;
    x.set(relativeX);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center"
    >
      {children}
      <AnimatePresence mode="wait">
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
            className="absolute z-50 flex flex-col items-center justify-center px-4 py-2 text-xs translate-x-1/2 bg-black rounded-md shadow-xl -top-16 -left-1/2"
          >
            <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
            <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
            <div className="relative z-30 text-base font-bold text-white">
              {text}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { AnimatedTooltip };
