import FadeIn from "./fade-in";

interface QuoteBlockProps {
  quote: string;
  attribution: string;
  source?: string;
}

export default function QuoteBlock({ quote, attribution, source }: QuoteBlockProps) {
  return (
    <FadeIn className="container max-w-3xl py-16">
      <div className="border-l border-red-600 pl-8">
        <blockquote className="text-xl md:text-2xl font-light leading-relaxed italic text-black/80 mb-6">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <p className="text-xs tracking-[0.2em] uppercase text-black/40">
          {attribution}
          {source && <span className="block mt-1">{source}</span>}
        </p>
      </div>
    </FadeIn>
  );
}
