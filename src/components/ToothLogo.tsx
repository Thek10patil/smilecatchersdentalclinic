interface ToothLogoProps {
  className?: string;
}

export default function ToothLogo({ className = "" }: ToothLogoProps) {
  return (
    <svg viewBox="0 0 56 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Main gradient for tooth */}
        <linearGradient id="toothMainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
        </linearGradient>
        
        {/* Shine gradient */}
        <linearGradient id="shineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
        </linearGradient>
        
        {/* Soft glow filter */}
        <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Drop shadow */}
        <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="hsl(var(--primary))" floodOpacity="0.3" />
        </filter>
      </defs>
      
      {/* Outer glow ring */}
      <ellipse 
        cx="28" 
        cy="24" 
        rx="18" 
        ry="16" 
        fill="none" 
        stroke="url(#toothMainGradient)" 
        strokeWidth="1" 
        opacity="0.3"
      />
      
      {/* Main tooth body - stylized molar shape */}
      <path 
        d="M28 6C20 6 14 10 12 16C10 22 11 28 13 36C15 44 17 52 20 56C21 58 24 58 26 54C27 52 28 50 28 50C28 50 29 52 30 54C32 58 35 58 36 56C39 52 41 44 43 36C45 28 46 22 44 16C42 10 36 6 28 6Z" 
        fill="url(#toothMainGradient)"
        filter="url(#dropShadow)"
      />
      
      {/* Crown cusps - top bumps */}
      <path 
        d="M16 15C16 11 20 8 24 8C26 8 28 9 28 9C28 9 30 8 32 8C36 8 40 11 40 15C40 17 39 19 37 20C35 21 32 21 28 21C24 21 21 21 19 20C17 19 16 17 16 15Z" 
        fill="url(#toothMainGradient)"
      />
      
      {/* Left cusp highlight */}
      <ellipse 
        cx="22" 
        cy="12" 
        rx="4" 
        ry="3" 
        fill="url(#shineGradient)"
        opacity="0.6"
      />
      
      {/* Right cusp highlight */}
      <ellipse 
        cx="34" 
        cy="12" 
        rx="4" 
        ry="3" 
        fill="url(#shineGradient)"
        opacity="0.4"
      />
      
      {/* Main shine reflection */}
      <path 
        d="M18 18C18 18 22 22 28 22C34 22 38 18 38 18C38 20 35 24 28 24C21 24 18 20 18 18Z" 
        fill="url(#shineGradient)"
        opacity="0.5"
      />
      
      {/* Central groove line */}
      <path 
        d="M28 22C28 22 27 28 27 34C27 40 26 46 26 50" 
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
        fill="none"
      />
      
      <path 
        d="M28 22C28 22 29 28 29 34C29 40 30 46 30 50" 
        stroke="hsl(var(--primary))"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.3"
        fill="none"
      />
      
      {/* Sparkle elements */}
      <g filter="url(#softGlow)">
        {/* Main sparkle */}
        <path 
          d="M42 10L44 8L46 10L44 12Z" 
          fill="#ffffff"
        />
        <path 
          d="M44 6L44 14M40 10L48 10" 
          stroke="#ffffff" 
          strokeWidth="1.5" 
          strokeLinecap="round"
          opacity="0.8"
        />
        
        {/* Small sparkle */}
        <circle cx="48" cy="16" r="1.5" fill="#ffffff" opacity="0.6" />
        <circle cx="12" cy="18" r="1" fill="#ffffff" opacity="0.4" />
      </g>
      
      {/* Smile curve under the tooth */}
      <path 
        d="M18 58C18 58 23 62 28 62C33 62 38 58 38 58" 
        stroke="url(#toothMainGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}
