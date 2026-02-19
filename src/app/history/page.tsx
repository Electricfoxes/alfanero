import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContentSection from "@/components/content-section";
import FadeIn from "@/components/fade-in";

const CDN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591";

export const metadata: Metadata = {
  title: "History & Provenance",
  description: "The story of ALFA NERO: from her commissioning by Theodore Angelopoulos through her award-winning launch to her comprehensive 2024 refit.",
};

const awards = [
  { title: "Best Interior Design", org: "World Superyacht Awards", desc: "Alberto Pinto's fusion of Pop Art and Art Deco was recognised as the finest yacht interior of the year." },
  { title: "Best Exterior Styling", org: "World Superyacht Awards", desc: "Nuvolari Lenard's dramatic black hull and low-stern profile redefined what a superyacht could look like." },
  { title: "Motor Yacht of the Year", org: "ShowBoats International", desc: "The industry's most coveted prize, recognising the single most outstanding motor yacht delivered that year worldwide." },
  { title: "Best Motor Yacht Over 45 Metres", org: "ISS Design & Leadership Awards", desc: "Recognised for exceptional design innovation and engineering achievement among the world's largest motor yachts." },
  { title: "Best Naval Architecture", org: "International Yacht & Aviation Awards", desc: "Oceanco's naval architecture praised for the innovative pool-to-helipad transformation and structural engineering." },
];

const timeline = [
  { year: "2002", title: "Oceanco Acquisition", desc: "Theodore Angelopoulos acquires Oceanco, steering the Dutch yard toward 80m+ custom builds." },
  { year: "2003", title: "Project Y702 Begins", desc: "Construction commences at Oceanco's Alblasserdam facility. Steel hull fabrication starts." },
  { year: "2004", title: "Design Finalisation", desc: "Nuvolari Lenard completes exterior design. Alberto Pinto begins interior specifications." },
  { year: "2005", title: "Hull Completion", desc: "Steel hull and aluminium superstructure joined. Complex stern section takes shape." },
  { year: "2006", title: "Systems Integration", desc: "Twin MTU engines installed. Hydraulic pool floor system engineering begins." },
  { year: "2007", title: "Delivery", desc: "ALFA NERO delivered. Immediately recognised as a landmark vessel." },
  { year: "2008", title: "Award Season", desc: "Seven major international awards in a single year, including Best Interior Design and Best Exterior Styling." },
  { year: "2024", title: "Comprehensive Refit", desc: "A full mechanical and cosmetic refit brought every system to current standards while preserving the original design vision." },
];

export default function HistoryPage() {
  return (
    <div>
      <PageHero
        label="History & Provenance"
        title="An Oceanco Icon"
        subtitle="Built 2007 · Refitted 2024"
        image={`${CDN}/kZTRjDHOrESFtISr.webp`}
        imageAlt="ALFA NERO 82m Oceanco superyacht"
      />

      <ContentSection label="The Vessel" title="A Multi-Award-Winning Superyacht">
        <p>
          A multi-award-winning 82-metre superyacht built by Oceanco and originally commissioned by Greek shipping magnate Theodore Angelopoulos, ALFA NERO remains a benchmark in her class almost two decades after launch. Comprehensively refitted in 2024, she is presented today in strong technical and operational condition.
        </p>
      </ContentSection>

      {/* Awards */}
      <section className="section-padding bg-[#0a0a0a] text-white">
        <div className="container max-w-5xl">
          <FadeIn>
            <p className="text-red-500 text-xs tracking-[0.3em] uppercase mb-4 font-bold">Recognition & Legacy</p>
            <h2 className="text-4xl md:text-5xl mb-4 text-white" style={{ fontFamily: "var(--font-display)" }}>
              Every Major Award
            </h2>
            <p className="text-white/60 mb-12 text-lg font-light">
              ALFA NERO swept the industry&apos;s most prestigious prizes in 2008, establishing herself as one of the most celebrated superyachts ever built.
            </p>
            <div className="space-y-8">
              {awards.map((award) => (
                <div key={award.title} className="border-b border-white/10 pb-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-1/3">
                      <h3 className="text-xl text-white" style={{ fontFamily: "var(--font-display)" }}>{award.title}</h3>
                      <p className="text-red-500 text-xs tracking-[0.2em] uppercase mt-1">{award.org}</p>
                    </div>
                    <p className="md:w-2/3 text-white/60 font-light leading-relaxed">{award.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <FadeIn>
            <p className="text-red-600 text-xs tracking-[0.3em] uppercase mb-4 font-bold">Timeline</p>
            <h2 className="text-4xl md:text-5xl mb-12" style={{ fontFamily: "var(--font-display)" }}>
              The Journey
            </h2>
            <div className="space-y-12">
              {timeline.map((event) => (
                <div key={event.year} className="flex gap-8 items-start">
                  <div className="w-20 shrink-0">
                    <p className="text-2xl font-light text-red-600" style={{ fontFamily: "var(--font-display)" }}>{event.year}</p>
                  </div>
                  <div className="border-l border-black/10 pl-8">
                    <h3 className="text-xl mb-2" style={{ fontFamily: "var(--font-display)" }}>{event.title}</h3>
                    <p className="text-black/60 font-light leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
