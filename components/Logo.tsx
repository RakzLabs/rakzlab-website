export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="0.5" y="0.5" width="27" height="27" rx="7" fill="#1F6F5C" />
        <path
          d="M8 20V8h5.2c2.4 0 4 1.4 4 3.6 0 1.6-.9 2.8-2.3 3.3L18 20h-2.6l-2.7-4.6H10.4V20H8Zm2.4-6.6h2.6c1.2 0 2-.6 2-1.8s-.8-1.8-2-1.8h-2.6v3.6Z"
          fill="#F7F5F0"
        />
      </svg>
      <span className="font-display text-lg tracking-tight text-ink">
        Rakzlab
      </span>
    </span>
  );
}
