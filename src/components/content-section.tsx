import FadeIn from "./fade-in";

interface ContentSectionProps {
  label?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function ContentSection({ label, title, children, className = "", dark = false }: ContentSectionProps) {
  return (
    <section className={`section-padding ${dark ? "bg-[#0a0a0a] text-white" : "bg-white"} ${className}`}>
      <div className="container max-w-4xl">
        <FadeIn>
          {label && (
            <p className={`text-xs tracking-[0.3em] uppercase mb-4 font-bold ${dark ? "text-red-500" : "text-red-600"}`}>
              {label}
            </p>
          )}
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight ${dark ? "text-white" : "text-black"}`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h2>
          <div className={`text-lg leading-relaxed font-light space-y-6 ${dark ? "text-white/70" : "text-black/70"}`}>
            {children}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
