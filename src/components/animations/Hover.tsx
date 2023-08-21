'use client'
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "gsap-trial/SplitText";

interface HoverProps {
  children: React.ReactNode;
}

export default function Hover({ children }: HoverProps) {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref.current) return; // used early return to avoid unnecessary nesting of if statements and to avoid else statement

    const element = gsap.utils.selector(ref.current);
    gsap.registerPlugin(SplitText);
    const splitText = new SplitText(ref.current, {
      type: "chars",
      charsClass: "char",
    });

    const animate = (direction: "in" | "out") => {
      const ease = direction === "in" ? "power4.easeOut" : "power4.easeInOut";
      const staggerEach = direction === "in" ? 0.015 : 0.024;

      gsap.to(splitText.chars, {
        y: direction === "in" ? "-100%" : "0%",
        ease,
        stagger: { each: staggerEach, from: direction === "out" ? "end" : "start" },
      });
    };

    ref.current.addEventListener("mouseenter", () => animate("in"));
    ref.current.addEventListener("mouseleave", () => animate("out"));
  }, []);

  return (
    <span
      ref={ref}
      className="relative leading-none inline-flex overflow-hidden cursor-pointer"
    >
      <span className="first">{children}</span>
      <span className="second absolute top-0 left-0 translate-y-full">
        {children}
      </span>
    </span>
  );
}
