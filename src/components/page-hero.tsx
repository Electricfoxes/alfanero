import FadeIn from "./fade-in";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  imageAlt: string;
}

export default function PageHero({ label, title, subtitle, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden bg-black">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      <div className="relative z-10 text-white px-8 md:px-16 pb-16 max-w-5xl w-full mx-auto">
        <FadeIn>
          <p className="text-red-500 text-xs tracking-[0.3em] uppercase mb-4 font-bold">{label}</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-[0.95] mb-4" style={{ fontFamily: "var(--font-display)" }}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/60 text-sm tracking-[0.15em] uppercase mb-6">{subtitle}</p>
          )}
          {description && (
            <p className="text-xl text-white/80 font-light leading-relaxed max-w-2xl">{description}</p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
