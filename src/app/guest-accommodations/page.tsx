import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContentSection from "@/components/content-section";
import QuoteBlock from "@/components/quote-block";
import FadeIn from "@/components/fade-in";

const CDN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591";

export const metadata: Metadata = {
  title: "Guest Accommodations",
  description: "Seven individually designed staterooms across three decks onboard ALFA NERO, each featuring Alberto Pinto's signature design.",
};

const cabins = [
  { name: "Master Suite", detail: "Upper Deck Forward • Full-beam" },
  { name: "Double Cabin #1", detail: "Main Deck • His & Her Bathrooms" },
  { name: "Double Cabin #2", detail: "Lower Deck • Spa Access & Sea Terrace" },
  { name: "Double Cabin #3", detail: "Lower Deck • Queen Bed" },
  { name: "Double Cabin #4", detail: "Lower Deck • Queen Bed" },
  { name: "Twin Cabin #1", detail: "Lower Deck • Convertible to Double" },
  { name: "Twin Cabin #2", detail: "Lower Deck • Convertible to Double" },
  { name: "Staff Suite", detail: "Flexible • Security / Nanny / Crew" },
];

export default function GuestAccommodationsPage() {
  return (
    <div>
      <PageHero
        label="Accommodation"
        title="Guest Accommodations"
        subtitle="Seven staterooms (1 Master, 4 Double, 2 Twin + staff suite)"
        image={`${CDN}/AA_0536.jpg`}
        imageAlt="ALFA NERO guest stateroom"
      />

      <ContentSection label="Design Philosophy" title="Designed for Individuals, Not Replicated">
        <p>
          Seven staterooms across three decks (1 Master, 4 Double, 2 Twin, plus 1 staff suite), each individually designed by Alberto Pinto. The art collection includes original works by Roy Lichtenstein, Joan Miro, Takashi Murakami, Andy Warhol, Frank Stella, and Marc Chagall, displayed throughout the yacht from the guest cabins to the main salon.
        </p>
        <p>
          From coral and blue colour schemes to soft neutrals, each cabin offers its own distinct character alongside the comfort and privacy expected of a vessel in this class. An additional staff suite provides flexible accommodation for security, childcare, or visiting crew.
        </p>
      </ContentSection>

      {/* Cabin Configuration */}
      <section className="section-padding bg-[#0a0a0a] text-white">
        <div className="container max-w-4xl">
          <FadeIn>
            <p className="text-red-500 text-xs tracking-[0.3em] uppercase mb-4 font-bold">Configuration</p>
            <h2 className="text-3xl md:text-4xl mb-8 text-white" style={{ fontFamily: "var(--font-display)" }}>
              Cabin Configuration
            </h2>
            <div className="space-y-0">
              {cabins.map((cabin) => (
                <div key={cabin.name} className="flex justify-between items-baseline py-4 border-b border-white/10">
                  <span className="text-white font-light">{cabin.name}</span>
                  <span className="text-white/50 text-sm font-light">{cabin.detail}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <ContentSection label="Accommodations" title="The Double Cabins">
        <p>
          Four double cabins offer generous guest accommodations after the master suite. The main deck double cabin features his and her bathrooms, while the lower deck doubles include one with direct spa access and a sea-level terrace. Each features a king-size or queen-size bed, full en-suite bathroom with marble finishes, and wardrobe space for extended cruising.
        </p>
        <p>
          Pinto&apos;s attention to detail extended to elements guests might never consciously register: door handles weighted for perfect feel in the hand, drawer mechanisms engineered for silent operation, lighting systems calibrated for morning, afternoon, evening, and night, and storage solutions that accommodate actual wardrobes rather than theoretical ones.
        </p>
      </ContentSection>

      <ContentSection label="Accommodations" title="The Twin Cabins">
        <p>
          The lower deck accommodations – two additional double cabins and two twin cabins – provide comfortable quarters for additional guests, staff, or children. While more compact than the main deck double cabin, these cabins maintain the same material quality and design attention. Each features its own en-suite bathroom, climate control, and entertainment systems.
        </p>
      </ContentSection>

      <QuoteBlock
        quote="The guest cabins each received individual design treatment, sharing the same aesthetic vocabulary but expressing it differently, so that guests feel they are staying in accommodations designed specifically for them."
        attribution="Alberto Pinto"
        source="Alberto Pinto Design Philosophy"
      />

      <ContentSection label="Craftsmanship" title="Materials & Craftsmanship">
        <p>
          Throughout all guest accommodations, the materials tell their own story. Dark African wenge provides visual weight and acoustic warmth, scalloped white lacquer panels create texture that catches light differently throughout the day, leathers sourced from Italian tanneries, fabrics woven specifically for the yacht, and marbles selected individually for each bathroom based on colour, veining, and how they would age over decades of use.
        </p>
        <p>
          The 2024 refit refreshed soft furnishings and updated technology throughout the guest cabins while preserving Pinto&apos;s original design intent. New mattresses, linens, and bathroom amenities ensure contemporary comfort, while the fundamental architecture and material palette remain faithful to the 2007 vision.
        </p>
      </ContentSection>
    </div>
  );
}
