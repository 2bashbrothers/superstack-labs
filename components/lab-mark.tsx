import { cn } from "@/lib/utils";

/**
 * Understated scientific mark: a precision aperture / analytical crosshair
 * inscribed in a hexagonal node. Not a molecule or DNA cliché.
 */
export function LabMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn(className)}
      aria-hidden="true"
    >
      <path
        d="M12 1.75 20.75 6.75V17L12 22L3.25 17V6.75L12 1.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 5.5V8.75M12 15.25V18.5M5.5 12H8.75M15.25 12H18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
