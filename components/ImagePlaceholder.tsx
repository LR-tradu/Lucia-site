import clsx from "clsx";

/**
 * Stands in for real photography until Lucía's own shoot is available.
 * Per the photography direction: warm, documentary, no stock imagery —
 * so rather than fake a stock photo, this renders an honest placeholder
 * (label + aspect box) that's easy to find-and-replace in the codebase.
 */
export function ImagePlaceholder({
  label,
  ratio = "landscape",
  className,
}: {
  label: string;
  ratio?: "landscape" | "portrait" | "square";
  className?: string;
}) {
  const ratios = {
    landscape: "aspect-[3/2]",
    portrait: "aspect-[4/5]",
    square: "aspect-square",
  };

  return (
    <div
      className={clsx(
        "relative flex items-center justify-center overflow-hidden bg-[#EAE3D4] dark:bg-[#2A2620]",
        ratios[ratio],
        className
      )}
      role="img"
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(34,32,28,0.04) 0px, rgba(34,32,28,0.04) 1px, transparent 1px, transparent 12px)",
        }}
      />
      <span className="relative px-6 text-center text-body-s text-ink-muted dark:text-ink-muted-dark">
        {label}
      </span>
    </div>
  );
}
