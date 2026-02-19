import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContentSection from "@/components/content-section";
import QuoteBlock from "@/components/quote-block";

const CDN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591";

export const metadata: Metadata = {
  title: "Master Cabin",
  description: "The master suite onboard ALFA NERO occupies the entire forward section of the upper deck, a private residence within the vessel.",
};

export default function MasterCabinPage() {
  return (
    <div>
      <PageHero
        label="Accommodation"
        title="A Private Domain"
        subtitle="The Owner's Suite"
        description="ALFA NERO's master suite occupies the entire forward section of the upper deck, a private residence within a residence, entirely separate from guest areas and accessible only via a dedicated corridor."
        image={`${CDN}/eNJnPZWeGRATLlPP.webp`}
        imageAlt="ALFA NERO master suite"
      />

      <ContentSection label="Spatial Design" title="Full-Beam Luxury">
        <p>
          The suite extends across the full beam of the yacht, offering generous living space organised around views of the sea. The bedroom itself is positioned for morning light, with a super king-sized bed and hand-crafted furniture, and opens onto a private terrace accessed via a starboard pantograph door. The terrace is equipped with a Jacuzzi pool, wing-shaped sunpads, and a dining area.
        </p>
        <p>
          A substantial walk-in wardrobe with dressing table accommodates extended voyages, while a private office with its own ensuite bathroom provides a working environment for owners who cannot entirely disconnect from their responsibilities ashore. Twin bathrooms finished in grey flannel marble and cherrywood feature steam showers and Jacuzzi baths.
        </p>
      </ContentSection>

      <ContentSection label="Design Philosophy" title="A Residence, Not a Cabin">
        <p>
          Alberto Pinto approached the owner&apos;s suite not as a yacht cabin but as a private residence that happens to float. The colour palette and decorative elements are unique to this cabin, distinct from the guest accommodations below. This is a space designed for a specific sensibility: someone who values both privacy and the ability to entertain with ease.
        </p>
      </ContentSection>

      <ContentSection label="Craftsmanship" title="The Art of Materials">
        <p>
          Every surface tells a story of careful selection. The master suite&apos;s seamless blend of luxury and comfort reflects Alberto Pinto&apos;s dedication to materials that age gracefully while maintaining their beauty.
        </p>
      </ContentSection>

      <ContentSection label="Natural Elements" title="Light and View">
        <p>
          Full-height windows wrap the forward section, offering panoramic views of the sea ahead. The placement was deliberate: waking in the owner&apos;s suite means greeting each day with an unobstructed horizon. Automated blinds allow precise control of light and privacy, while the window positioning ensures the cabin remains bright without sacrificing intimacy.
        </p>
      </ContentSection>

      <QuoteBlock
        quote="The owner's suite onboard ALFA NERO represents the pinnacle of residential yacht design, a space where the sea becomes a backdrop to exceptional living."
        attribution="Boat International"
      />

      <ContentSection label="Outdoor Living" title="The Private Deck">
        <p>
          The owner&apos;s private deck is perhaps the most valuable real estate onboard ALFA NERO. Shielded from the main entertaining areas, it offers uninterrupted views and direct access to the sea via the private Jacuzzi. This Jacuzzi operates independently of the main pool, ensuring the owner&apos;s routine is never compromised by the activities of guests.
        </p>
      </ContentSection>
    </div>
  );
}
