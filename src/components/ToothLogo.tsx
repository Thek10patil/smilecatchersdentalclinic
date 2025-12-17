interface ToothLogoProps {
  className?: string;
}

export default function ToothLogo({ className = "" }: ToothLogoProps) {
  return (
    <svg viewBox="0 0 48 56" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Main tooth shape with gradient */}
      <defs>
        <linearGradient id="toothGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.7" />
        </linearGradient>
        <filter id="toothGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Tooth body */}
      <path 
        d="M24 4C14 4 8 11 8 18C8 25 10 30 12 37C14 44 16 50 18 52C19 53 21 53 24 50C27 53 29 53 30 52C32 50 34 44 36 37C38 30 40 25 40 18C40 11 34 4 24 4Z" 
        fill="url(#toothGradient)"
        stroke="currentColor"
        strokeWidth="2"
        filter="url(#toothGlow)"
      />
      
      {/* Crown detail - top curves */}
      <path 
        d="M14 16C14 16 17 19 24 19C31 19 34 16 34 16" 
        stroke="hsl(var(--card))"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Left root */}
      <path 
        d="M18 34C17 40 16 46 17 50" 
        stroke="hsl(var(--card))"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
        fill="none"
      />
      
      {/* Right root */}
      <path 
        d="M30 34C31 40 32 46 31 50" 
        stroke="hsl(var(--card))"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
        fill="none"
      />
      
      {/* Sparkle accent */}
      <circle cx="32" cy="12" r="2" fill="hsl(var(--card))" opacity="0.8" />
      <circle cx="35" cy="9" r="1" fill="hsl(var(--card))" opacity="0.5" />
    </svg>
  );
}
