import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageTransitionProps {
  children: React.ReactNode;
  pathname: string;
}

export default function PageTransition({
  children,
  pathname,
}: PageTransitionProps) {
  const animations = {
    fadeUp: {
      hidden: { opacity: 0.01, y: 20 },
      enter: { opacity: 1, y: 0 },
      exit: { opacity: 0.01, y: -20 },
    },
    fadeSlide: {
      hidden: { opacity: 0.01, x: -20 },
      enter: { opacity: 1, x: 0 },
      exit: { opacity: 0.01, x: 20 },
    },
    scale: {
      hidden: { opacity: 0.01, scale: 0.95 },
      enter: { opacity: 1, scale: 1 },
      exit: { opacity: 0.01, scale: 1.05 },
    },
  };

  const getAnimationVariant = (path: string) => {
    const pathHash = path
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const animationKeys = Object.keys(animations) as Array<
      keyof typeof animations
    >;
    const animationIndex = pathHash % animationKeys.length;
    return animations[animationKeys[animationIndex]];
  };

  const variants = getAnimationVariant(pathname);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full page-transition-container preserve-3d"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
