import { cn } from "@/lib/utils";

/**
 * Decorative chromatogram-style trace. Purely illustrative UI.
 */
export function Chromatogram({
  className,
  animate = false,
  showBaseline = true,
}: {
  className?: string;
  animate?: boolean;
  showBaseline?: boolean;
}) {
  // A representative RP-HPLC trace: flat baseline with a few resolved peaks.
  const path =
    "M0,90 L60,90 L90,89 C110,89 112,40 128,40 C144,40 150,88 168,88 " +
    "L210,88 C226,88 230,20 246,20 C262,20 268,86 286,87 " +
    "L330,87 C346,87 350,58 362,58 C374,58 380,86 396,87 " +
    "L440,87 C456,87 460,74 470,74 C480,74 486,88 500,88 L600,89";

  return (
    <svg
      viewBox="0 0 600 100"
      preserveAspectRatio="none"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label="Illustrative chromatogram trace"
    >
      {showBaseline && (
        <line
          x1="0"
          y1="90"
          x2="600"
          y2="90"
          stroke="var(--border)"
          strokeWidth="1"
        />
      )}
      <path
        d={path}
        fill="none"
        stroke="var(--primary)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        className={cn(animate && "animate-chromatogram")}
      />
    </svg>
  );
}
