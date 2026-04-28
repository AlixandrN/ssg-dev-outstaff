"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type State = "wide" | "narrow" | "mobile";

export const AdaptiveBox = () => {
  const [state, setState] = useState<State>("wide");

  useEffect(() => {
    const interval = setInterval(() => {
      setState((prev) => {
        if (prev === "wide") return "narrow";
        if (prev === "narrow") return "mobile";
        return "wide";
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const syncTransition = {
    duration: 0.4,
    ease: [0.4, 0, 0.2, 1] as const,
  };

  const getWidth = () => {
    switch (state) {
      case "mobile":
        return "clamp(100px, 40vw, 120px)";
      case "narrow":
        return "clamp(180px, 60vw, 280px)";
      default:
        return "clamp(280px, 85vw, 450px)";
    }
  };

  const getAspect = () => {
    if (state === "mobile") return "9 / 20";
    if (state === "narrow") return "18 / 16";
    return "16 / 10";
  };

  return (
    <motion.div
      layout
      transition={syncTransition}
      className="border-2 border-gray-300 p-2 rounded-2xl inline-block"
    >
      <motion.div
        layout
        transition={syncTransition}
        style={{ width: getWidth() }}
        className="bg-transparent p-2 rounded-xl shadow-2xl border-2 border-gray-300 relative overflow-hidden"
      >
        <motion.div
          layout
          transition={syncTransition}
          style={{ aspectRatio: getAspect() }}
          animate={{
            paddingTop: state === "wide" ? "12px" : "40px",
            paddingBottom: state === "wide" ? "12px" : "40px",
          }}
          className={`bg-white rounded-sm p-3 flex flex-col gap-3 overflow-hidden shadow-inner ${
            state === "mobile" ? "justify-center" : ""
          }`}
        >
          {[0, 1, 2].map((block) => (
            <motion.div
              key={block}
              layout
              transition={syncTransition}
              animate={{
                flex: state === "mobile" ? "0 0 6px" : "1 1 0%",
                padding: state === "mobile" ? "0px" : "8px",
                backgroundColor:
                  state === "mobile" ? "#6b46ff" : "rgba(255, 255, 255, 0)", // to do colors
                borderColor: "#6b46ff", // to do colors
              }}
              className="border-2 rounded-md flex flex-col justify-center overflow-hidden w-full mx-auto"
            >
              <AnimatePresence mode="wait">
                {state === "wide" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex flex-col gap-2 w-full p-2"
                  >
                    <div className="h-1.5 w-full bg-blue-100 rounded-full" />
                    <div className="h-1.5 w-5/6 bg-blue-100 rounded-full" />
                    <div className="h-1.5 w-4/6 bg-blue-100 rounded-full" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
