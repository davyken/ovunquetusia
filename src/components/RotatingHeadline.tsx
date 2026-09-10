"use client";

import { useTypewriterCycle } from "@/hooks/useTypewriterCycle";

export function RotatingHeadline({
  phrases,
  className,
  cursorClassName,
}: {
  phrases: string[];
  className?: string;
  cursorClassName?: string;
}) {
  const { text } = useTypewriterCycle(phrases, { loop: true, startFullyTyped: true });

  return (
    <h1 className={className}>
      {text}
      <span className={cursorClassName} aria-hidden="true" />
    </h1>
  );
}
