interface ToothLogoProps {
  className?: string;
}

export default function ToothLogo({ className = "" }: ToothLogoProps) {
  return (
    <svg viewBox="0 0 36 44" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Geometric modern tooth - clean angular shapes */}
      
      {/* Main tooth body - hexagonal inspired shape */}
      <path 
        d="M18 2L28 8L30 20L26 32L22 42L18 36L14 42L10 32L6 20L8 8L18 2Z" 
        fill="hsl(var(--primary))"
        opacity="0.15"
      />
      
      {/* Outer geometric frame */}
      <path 
        d="M18 2L28 8L30 20L26 32L22 42L18 36L14 42L10 32L6 20L8 8L18 2Z" 
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Crown top - angular detail */}
      <path 
        d="M12 10L18 6L24 10" 
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Inner geometric accent lines */}
      <path 
        d="M14 14L18 12L22 14" 
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
      />
      
      {/* Center vertical line */}
      <line 
        x1="18" y1="16" x2="18" y2="28" 
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
      
      {/* Root division lines */}
      <line 
        x1="14" y1="32" x2="14" y2="42" 
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      <line 
        x1="22" y1="32" x2="22" y2="42" 
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.4"
      />
      
      {/* Geometric sparkle - diamond shape */}
      <path 
        d="M32 4L34 6L32 8L30 6Z" 
        fill="hsl(var(--primary))"
      />
    </svg>
  );
}
