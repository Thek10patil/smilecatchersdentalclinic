interface ToothLogoProps {
  className?: string;
}

export default function ToothLogo({ className = "" }: ToothLogoProps) {
  return (
    <svg viewBox="0 0 36 44" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* 3D gradient effect */}
        <linearGradient id="toothGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
        </linearGradient>
        
        {/* Shine overlay */}
        <linearGradient id="shineOverlay" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="40%" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        
        {/* Drop shadow */}
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="hsl(var(--primary))" floodOpacity="0.3" />
        </filter>
      </defs>
      
      {/* Main tooth shape with gradient */}
      <path 
        d="M18 3C11 3 7 7 6 13C5 19 6 25 8 32C10 38 12 40 14 40C15.5 40 16.5 37 18 37C19.5 37 20.5 40 22 40C24 40 26 38 28 32C30 25 31 19 30 13C29 7 25 3 18 3Z" 
        fill="url(#toothGradient)"
        filter="url(#shadow)"
      />
      
      {/* 3D shine overlay */}
      <path 
        d="M18 3C11 3 7 7 6 13C5 19 6 25 8 32C10 38 12 40 14 40C15.5 40 16.5 37 18 37C19.5 37 20.5 40 22 40C24 40 26 38 28 32C30 25 31 19 30 13C29 7 25 3 18 3Z" 
        fill="url(#shineOverlay)"
      />
      
      {/* Crown highlight - gives 3D depth */}
      <ellipse 
        cx="15" 
        cy="10" 
        rx="5" 
        ry="3" 
        fill="#ffffff"
        opacity="0.4"
      />
      
      {/* Small accent highlight */}
      <ellipse 
        cx="12" 
        cy="18" 
        rx="2" 
        ry="4" 
        fill="#ffffff"
        opacity="0.2"
      />
      
      {/* Subtle outline for definition */}
      <path 
        d="M18 3C11 3 7 7 6 13C5 19 6 25 8 32C10 38 12 40 14 40C15.5 40 16.5 37 18 37C19.5 37 20.5 40 22 40C24 40 26 38 28 32C30 25 31 19 30 13C29 7 25 3 18 3Z" 
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
        strokeOpacity="0.3"
        fill="none"
      />
    </svg>
  );
}
