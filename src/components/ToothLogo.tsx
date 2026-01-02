interface ToothLogoProps {
  className?: string;
}

export default function ToothLogo({ className = "" }: ToothLogoProps) {
  return (
    <svg viewBox="0 0 32 40" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M16 2C10 2 6 6 5 11C4 16 5 22 7 29C8 33 10 37 12 38C13.5 39 14.5 36 16 36C17.5 36 18.5 39 20 38C22 37 24 33 25 29C27 22 28 16 27 11C26 6 22 2 16 2Z" 
        fill="currentColor"
      />
    </svg>
  );
}
