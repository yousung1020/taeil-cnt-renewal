import type { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function AnimatedSection({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </div>
  );
}