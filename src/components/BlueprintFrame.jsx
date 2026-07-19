/**
 * BlueprintFrame
 * Reusable panel wrapper that draws the corner-bracket "technical drawing"
 * motif used across the page. Single responsibility: layout chrome only —
 * it never knows about the content it wraps.
 */
export default function BlueprintFrame({ children, className = "" }) {
  return (
    <div className={`relative border border-gridStrong ${className}`}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-px -top-px h-6 w-6 border-l-2 border-t-2 border-green-500"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-px -right-px h-3.5 w-3.5 border-b-2 border-r-2 border-green-500"
      />
      {children}
    </div>
  );
}
