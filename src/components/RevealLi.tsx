"use client";

import { useEffect, useRef, useState } from "react";

export function RevealLi({
  index = 0,
  className = "",
  children,
}: {
  index?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const direction = index % 2 === 0 ? "reveal-left" : "reveal-right";

  return (
    <li
      ref={ref}
      className={`${className} reveal ${direction} ${visible ? "reveal-visible" : ""}`}
      style={{ transitionDelay: `${(index % 4) * 70}ms` }}
    >
      {children}
    </li>
  );
}
