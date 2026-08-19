import { cn } from "@/lib/utils";

/**
 * Superstack mark: an isometric stack of analytical layers. The top layer
 * carries a filled specimen node — the sample currently under analysis —
 * so the glyph reads as both a "stack" and a "test/measurement".
 */
export function LabMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={cn(className)}
      aria-hidden="true"
    >
      {/* top layer — the specimen plane */}
      <path
        d="M12 2.5 20.5 7 12 11.5 3.5 7 12 2.5Z"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* specimen node under analysis */}
      <circle cx="12" cy="7" r="1.35" fill="currentColor" />
      {/* stacked layers beneath */}
      <path
        d="M3.5 10.75 12 15.25 20.5 10.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 14.25 12 18.75 20.5 14.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
