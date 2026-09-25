import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface IconPopProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** ícone/número que "estoura" com leve giro e overshoot ao entrar na viewport */
export function IconPop({ children, className, delay = 0.15 }: IconPopProps) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      className={className}
      initial={reduce ? false : { opacity: 0, scale: 0.4, rotate: -14 }}
      whileInView={reduce ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{ duration: 0.55, delay, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {children}
    </motion.span>
  );
}
