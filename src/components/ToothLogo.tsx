interface ToothLogoProps {
  className?: string;
}

export default function ToothLogo({ className = "" }: ToothLogoProps) {
  return (
    <svg viewBox="0 0 40 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Main tooth outline - elegant line art style */}
      <path 
        d="M20 4C13 4 8 8 7 14C6 20 7 26 9 34C11 42 13 44 15 44C17 44 18 40 20 40C22 40 23 44 25 44C27 44 29 42 31 34C33 26 34 20 33 14C32 8 27 4 20 4Z" 
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Crown detail - top cusps */}
      <path 
        d="M11 13C11 9 15 6 20 6C25 6 29 9 29 13" 
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Left cusp arc */}
      <path 
        d="M11 13C11 15 13 17 16 17" 
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Right cusp arc */}
      <path 
        d="M29 13C29 15 27 17 24 17" 
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Center groove */}
      <path 
        d="M20 17L20 28" 
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
        fill="none"
      />
      
      {/* Root split lines */}
      <path 
        d="M17 32C16 36 15 40 15 44" 
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
        fill="none"
      />
      
      <path 
        d="M23 32C24 36 25 40 25 44" 
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
        fill="none"
      />
      
      {/* Sparkle accent */}
      <g opacity="0.8">
        <line 
          x1="33" y1="8" x2="37" y2="4" 
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line 
          x1="35" y1="3" x2="35" y2="9" 
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line 
          x1="32" y1="6" x2="38" y2="6" 
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      
      {/* Small dot accents */}
      <circle 
        cx="38" 
        cy="11" 
        r="1" 
        fill="hsl(var(--primary))"
        opacity="0.6"
      />
    </svg>
  );
}
