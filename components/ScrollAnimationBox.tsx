"use client";
import { useEffect, useRef, useState } from "react";

type AnimationType = "fade" | "slide-up" | "slide-down" | "zoom" | "flip";

interface ScrollAnimationProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  animationType?: AnimationType;
  delay?: number;
  triggerOnce?: boolean;
}

const getAnimationClasses = (type: AnimationType, isVisible: boolean) => {
  const baseClasses = "transition-all duration-500 ease-in-out";

  switch (type) {
    case "fade":
      return `${baseClasses} ${isVisible ? "opacity-100" : "opacity-0"}`;
    case "slide-up":
      return `${baseClasses} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`;
    case "slide-down":
      return `${baseClasses} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`;
    case "zoom":
      return `${baseClasses} ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`;
    case "flip":
      return `${baseClasses} ${
        isVisible ? "opacity-100 rotate-0" : "opacity-0 rotate-12"
      }`;
    default:
      return baseClasses;
  }
};

export const ScrollAnimationBox = ({
  children,
  threshold = 0.5,
  rootMargin = "0px",
  className = "",
  animationType = "fade",
  delay = 0,
  triggerOnce = false,
}: ScrollAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasBeenVisible = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (triggerOnce && hasBeenVisible.current) return;

        if (entry.isIntersecting) {
          hasBeenVisible.current = true;
        }

        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  const animationClasses = getAnimationClasses(animationType, isVisible);

  return (
    <div
      ref={elementRef}
      className={`${animationClasses} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
