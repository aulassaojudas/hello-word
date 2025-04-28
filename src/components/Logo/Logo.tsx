// components/Logo.tsx
import "./Logo.css"; // Importa o CSS separado

export function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="20" width="100" height="80" rx="10" fill="#2B6CB0" />
      <path d="M30 40H85" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <path d="M30 55H85" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <path d="M30 70H60" stroke="white" strokeWidth="4" strokeLinecap="round" />

      <circle cx="90" cy="70" r="12" fill="#48BB78" className="pulse" />
      <text
        x="84"
        y="76"
        fontFamily="Arial, 
        sans-serif" fontSize="16"
        fill="white"
        fontWeight="bold"
        className="zoom">$
      </text>
    </svg>
  );
}
