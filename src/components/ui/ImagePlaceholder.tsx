interface ImagePlaceholderProps {
  className?: string;
  label?: string;
  variant?: "dark" | "light";
}

export function ImagePlaceholder({ className = "", label = "Imagem", variant = "dark" }: ImagePlaceholderProps) {
  const isLight = variant === "light";
  return (
    <div
      className={`${isLight ? "bg-[#13181E]/5 border-[#13181E]/15" : "bg-white/5 border-white/20"} flex flex-col items-center justify-center gap-3 border-2 border-dashed ${className}`}
    >
      <svg
        className={`w-10 h-10 ${isLight ? "text-[#13181E]/25" : "text-white/25"}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <span className={`${isLight ? "text-[#13181E]/40" : "text-white/35"} text-xs font-medium text-center px-4`}>{label}</span>
    </div>
  );
}
