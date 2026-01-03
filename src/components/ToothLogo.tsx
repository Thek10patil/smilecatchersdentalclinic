interface ToothLogoProps {
  className?: string;
}

export default function ToothLogo({ className = "" }: ToothLogoProps) {
  return (
    <svg viewBox="0 0 48 56" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Tooth shape */}
      <path 
        d="M24 4C16 4 10 9 8 16C6 23 7 32 10 42C11.5 47 14 52 17 53C19 54 20.5 50 24 50C27.5 50 29 54 31 53C34 52 36.5 47 38 42C41 32 42 23 40 16C38 9 32 4 24 4Z" 
        fill="currentColor"
      />
      {/* Smile curve inside the tooth */}
      <path
        d="M16 26C18 30 21 32 24 32C27 32 30 30 32 26"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Left eye dot */}
      <circle cx="18" cy="20" r="2" fill="white" />
      {/* Right eye dot */}
      <circle cx="30" cy="20" r="2" fill="white" />
    </svg>
  );
}
