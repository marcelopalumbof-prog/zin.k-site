import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  /** ex: "24+", "98", "4 sem" — número embutido em texto livre */
  value: string;
  className?: string;
}

interface ParsedValue {
  prefix: string;
  number: number;
  suffix: string;
}

function parseValue(value: string): ParsedValue | null {
  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  if (!match) return null;
  return { prefix: match[1], number: Number(match[2]), suffix: match[3] };
}

/** conta de 0 até o valor final ao entrar na viewport; estático se prefers-reduced-motion */
export function Counter({ value, className }: CounterProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });
  const parsed = parseValue(value);

  const [display, setDisplay] = useState(() =>
    !reduce && parsed ? `${parsed.prefix}0${parsed.suffix}` : value,
  );

  useEffect(() => {
    if (!parsed || reduce || !inView) return;

    const controls = animate(0, parsed.number, {
      duration: 1.4,
      ease: [0.21, 0.47, 0.32, 0.98],
      onUpdate(current) {
        setDisplay(`${parsed.prefix}${Math.round(current)}${parsed.suffix}`);
      },
    });

    return () => controls.stop();
  }, [inView, reduce, parsed]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
