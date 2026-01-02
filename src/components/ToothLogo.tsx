interface ToothLogoProps {
  className?: string;
}

export default function ToothLogo({ className = "" }: ToothLogoProps) {
  return (
    <svg viewBox="0 0 40 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Elegant gradient for sophisticated look */}
        <linearGradient id="toothElegant" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.75" />
        </linearGradient>
        
        {/* Inner glow for depth */}
        <radialGradient id="innerGlow" cx="30%" cy="25%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>
      
      {/* Elegant tooth crown - orthodontic style with refined curves */}
      <path 
        d="M20 4
           C14 4 10 6 8 10
           C6 14 6 18 7 22
           L7 23
           C7 24 8 25 9 25
           L10 25
           C11 25 12 26 12 27
           L13 38
           C13 40 14 42 16 42
           C17.5 42 18 40 20 40
           C22 40 22.5 42 24 42
           C26 42 27 40 27 38
           L28 27
           C28 26 29 25 30 25
           L31 25
           C32 25 33 24 33 23
           L33 22
           C34 18 34 14 32 10
           C30 6 26 4 20 4Z" 
        fill="url(#toothElegant)"
      />
      
      {/* Inner glow overlay */}
      <path 
        d="M20 4
           C14 4 10 6 8 10
           C6 14 6 18 7 22
           L7 23
           C7 24 8 25 9 25
           L10 25
           C11 25 12 26 12 27
           L13 38
           C13 40 14 42 16 42
           C17.5 42 18 40 20 40
           C22 40 22.5 42 24 42
           C26 42 27 40 27 38
           L28 27
           C28 26 29 25 30 25
           L31 25
           C32 25 33 24 33 23
           L33 22
           C34 18 34 14 32 10
           C30 6 26 4 20 4Z" 
        fill="url(#innerGlow)"
      />
      
      {/* Orthodontic braces detail - elegant thin lines */}
      <line 
        x1="11" y1="16" x2="29" y2="16" 
        stroke="hsl(var(--background))" 
        strokeWidth="1.2" 
        strokeLinecap="round"
        opacity="0.6"
      />
      
      {/* Bracket accents */}
      <rect x="13" y="14.5" width="3" height="3" rx="0.5" fill="hsl(var(--background))" opacity="0.5" />
      <rect x="18.5" y="14.5" width="3" height="3" rx="0.5" fill="hsl(var(--background))" opacity="0.5" />
      <rect x="24" y="14.5" width="3" height="3" rx="0.5" fill="hsl(var(--background))" opacity="0.5" />
      
      {/* Refined outline for professional finish */}
      <path 
        d="M20 4
           C14 4 10 6 8 10
           C6 14 6 18 7 22
           L7 23
           C7 24 8 25 9 25
           L10 25
           C11 25 12 26 12 27
           L13 38
           C13 40 14 42 16 42
           C17.5 42 18 40 20 40
           C22 40 22.5 42 24 42
           C26 42 27 40 27 38
           L28 27
           C28 26 29 25 30 25
           L31 25
           C32 25 33 24 33 23
           L33 22
           C34 18 34 14 32 10
           C30 6 26 4 20 4Z" 
        stroke="hsl(var(--primary))"
        strokeWidth="0.75"
        strokeOpacity="0.4"
        fill="none"
      />
    </svg>
  );
}
