import FadeIn from "./fade-in";

interface ImageSectionProps {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "video" | "square" | "wide" | "tall";
  fullWidth?: boolean;
}

export default function ImageSection({ src, alt, caption, aspect = "video", fullWidth = false }: ImageSectionProps) {
  const aspectClass = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[21/9]",
    tall: "aspect-[3/4]",
  }[aspect];

  return (
    <FadeIn className={fullWidth ? "" : "container max-w-5xl py-8"}>
      <div className={`relative overflow-hidden ${aspectClass}`}>
        <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
      </div>
      {caption && (
        <p className="text-xs text-black/40 mt-3 tracking-wide">{caption}</p>
      )}
    </FadeIn>
  );
}
