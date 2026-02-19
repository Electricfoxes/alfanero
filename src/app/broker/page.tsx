import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContentSection from "@/components/content-section";
import FadeIn from "@/components/fade-in";

const CDN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591";

export const metadata: Metadata = {
  title: "Acquisition",
  description: "ALFA NERO is available for acquisition. Contact your broker representative for viewing arrangements and further information.",
};

export default function BrokerPage() {
  return (
    <div>
      <PageHero label="Acquisition" title="Available for Acquisition" subtitle="Contact your broker representative for more information" image={`${CDN}/kZTRjDHOrESFtISr.webp`} imageAlt="ALFA NERO - available for acquisition" />

      <ContentSection label="Available for Acquisition" title="A Vessel of Distinction">
        <p>ALFA NERO represents a rare opportunity to acquire one of the most recognised superyachts in the world. Built by Oceanco in 2007 and comprehensively refitted in 2024, she combines the design vision of Nuvolari Lenard with the interior artistry of Alberto Pinto – a collaboration that produced a vessel of enduring significance.</p>
        <p>At 82 metres, ALFA NERO accommodates 12 guests across 6 staterooms (plus a staff suite), supported by a crew of 28. Her pioneering infinity pool, seven international design awards, and distinctive black hull have made her an icon of modern superyacht design.</p>
      </ContentSection>

      <ContentSection label="Acquisition" title="The Acquisition Process">
        <p>The yacht is presented in operational condition, with full crew available to demonstrate her capabilities. Viewing appointments can be arranged at various Mediterranean locations, subject to the vessel&apos;s schedule.</p>
        <p>The acquisition process encompasses all aspects of the transaction, including arranging viewings, providing comprehensive documentation, facilitating surveys, and managing negotiations with the confidentiality that transactions of this nature require.</p>
      </ContentSection>

      <section className="section-padding bg-[#0a0a0a] text-white">
        <div className="container max-w-4xl">
          <FadeIn>
            <p className="text-red-500 text-xs tracking-[0.3em] uppercase mb-4 font-bold">Confidentiality</p>
            <h2 className="text-3xl md:text-4xl mb-8 text-white" style={{ fontFamily: "var(--font-display)" }}>
              Confidentiality
            </h2>
            <div className="text-lg leading-relaxed font-light text-white/70 space-y-6">
              <p>All enquiries are handled with complete discretion. Financial discussions, ownership structures, and transaction details remain strictly confidential. Non-disclosure agreements are available upon request for serious buyers requiring additional assurance.</p>
              <p>Whether you are an experienced yacht owner seeking to upgrade, a first-time buyer entering the superyacht market, or a representative acting on behalf of a principal, please contact your broker representative for more information.</p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
