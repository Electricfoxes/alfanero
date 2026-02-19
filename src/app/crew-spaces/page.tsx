import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContentSection from "@/components/content-section";
import QuoteBlock from "@/components/quote-block";

const CDN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591";

export const metadata: Metadata = {
  title: "Crew Spaces",
  description: "ALFA NERO accommodates up to 28 crew members in purpose-designed quarters that reflect the yacht's commitment to operational excellence.",
};

export default function CrewSpacesPage() {
  return (
    <div>
      <PageHero label="Living Spaces" title="Crew Spaces" subtitle="The Operational Heart · 28 Crew" description="Behind every seamless guest experience onboard ALFA NERO lies a meticulously organised crew operation." image={`${CDN}/kZTRjDHOrESFtISr.webp`} imageAlt="ALFA NERO crew operations" />

      <ContentSection label="Accommodations" title="Captain's Cabin">
        <p>The Captain&apos;s cabin is positioned on the bridge deck, providing immediate access to the wheelhouse and command centre. This generous suite includes a private bathroom, office space, and comfortable sleeping quarters, recognising that the captain&apos;s role demands both proximity to operations and adequate rest.</p>
      </ContentSection>

      <ContentSection label="Accommodations" title="Officer Quarters">
        <p>Senior officers, including the Chief Engineer, First Officer, and Chief Stewardess, occupy individual cabins with ensuite facilities. These quarters are designed to provide the comfort and privacy appropriate to their responsibilities, with dedicated workspace for administrative duties.</p>
      </ContentSection>

      <QuoteBlock quote="A yacht is only as good as her crew. ALFA NERO's crew spaces reflect the understanding that exceptional service requires exceptional working conditions." attribution="Superyacht Operations Manual" />

      <ContentSection label="Crew Facilities" title="Crew Mess & Galley">
        <p>The crew mess serves as the social heart of the crew quarters, a comfortable dining and relaxation space where off-duty crew can unwind. The area is equipped with entertainment systems, comfortable seating, and a dedicated pantry for crew meals.</p>
        <p>The crew galley operates independently of the main guest galley, allowing the chef to prepare crew meals without interrupting guest service.</p>
      </ContentSection>

      <ContentSection label="Crew Facilities" title="The Main Galley">
        <p>ALFA NERO&apos;s main galley is a professional kitchen capable of producing restaurant-quality cuisine for up to 12 guests. Equipped with commercial-grade appliances, extensive cold storage, and dedicated preparation areas, the galley supports extended voyages without resupply.</p>
      </ContentSection>

      <ContentSection label="Accommodations" title="Crew Cabins">
        <p>Standard crew cabins are configured as twin-berth rooms with shared bathroom facilities. Each cabin includes personal storage, reading lights, and climate control, providing the privacy and comfort necessary for crew working rotating shifts.</p>
        <p>The 2024 refit included updates to crew accommodation, with refreshed soft furnishings, improved ventilation, and modernised bathroom facilities throughout the crew areas.</p>
      </ContentSection>

      <ContentSection label="Privacy & Access" title="Laundry & Service Areas">
        <p>Industrial laundry facilities handle the considerable linen requirements of a yacht this size, from guest bedding and towels to crew uniforms and table linens. Additional service areas include dedicated storage for cleaning supplies, a flower preparation room, and staging areas for service to guest spaces.</p>
      </ContentSection>
    </div>
  );
}
