"use client";
import { useState, useEffect } from "react";

export const Typewriter = ({
  list,
  fontStyle,
  printSpeed = 200,
  deleteSpeed = 50,
  pauseTime = 2000,
}: {
  list: string[];
  fontStyle?: string;
  printSpeed?: number;
  deleteSpeed?: number;
  pauseTime?: number;
}) => {
  const [view, setView] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = list[currentIndex];

    if (!isDeleting && view === currentString) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && view === "") {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % list.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setView((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentString.slice(0, prev.length + 1)
        );
      },
      isDeleting ? deleteSpeed : printSpeed
    );
    return () => clearTimeout(timeout);
  }, [
    view,
    isDeleting,
    list,
    currentIndex,
    printSpeed,
    deleteSpeed,
    pauseTime,
  ]);

  return (
    <div className={`${fontStyle} px-4 min-h-[60px] flex items-center`}>
      <span className="animate-smooth-fade-in inline-block">
        {view}
        <span className="animate-blink inline-block h-[1em] w-px bg-current ml-1 align-middle" />
      </span>
    </div>
  );
};
