import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContentSection from "@/components/content-section";
import QuoteBlock from "@/components/quote-block";

const CDN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591";

export const metadata: Metadata = {
  title: "Wellness Areas",
  description: "Discover ALFA NERO's comprehensive wellness facilities including the world's first superyacht infinity pool, spa, gym, beach club, and multiple Jacuzzi pools.",
};

export default function WellnessPage() {
  return (
    <div>
      <PageHero label="Onboard Experience" title="Where Recovery Meets the Horizon" subtitle="Wellness · Spa · Gym · Beach Club" description="ALFA NERO was conceived at a moment when the superyacht industry was beginning to recognise wellness as essential rather than optional." image={`${CDN}/cMjDvuvncDCVqukW.webp`} imageAlt="ALFA NERO wellness facilities" />

      <ContentSection label="Wellness" title="Spa & Sauna">
        <p>The lower deck houses a dedicated spa area. A main deck sauna provides an alternative to the lower spa, while a steam room adjacent to the upper deck gym offers post-workout relief with panoramic views. The spa treatment room opens directly onto the sea terrace.</p>
      </ContentSection>

      <ContentSection label="Wellness" title="The Gym">
        <p>Located on the top deck, the air-conditioned gymnasium offers 180-degree views of the surrounding seascape. Equipment includes cardiovascular machines and free weights, with the crew available to assist with health and fitness assessments.</p>
        <p>The gym opens directly onto the deck, where guests can move from a workout to the adjacent Jacuzzi pool without transition. Exercise and leisure flow together here, as they should.</p>
      </ContentSection>

      <ContentSection label="Wellness" title="The Beach Club">
        <p>The beach club at water level provides direct access to the sea. This generous space, with its fold-down platforms and abundant natural light, has become a favourite gathering point for guests seeking connection with the water.</p>
        <p>Beach setups including chairs, tables, gazebos, and beanbags can be arranged on nearby shores, extending the yacht&apos;s living space onto the coastline itself.</p>
      </ContentSection>

      <ContentSection label="Wellness" title="The Infinity Pool">
        <p>The defining feature of ALFA NERO&apos;s wellness offering is the 3.7-by-11.6-metre infinity pool on the aft deck, the first of its kind on a superyacht. The pool floor rises via a precision spindle mechanism to varying depths for safety or preference, transforming into either a full-beam entertainment space or an emergency helipad. The spindle system was specifically chosen to prevent accidental lowering under helicopter weight.</p>
        <p>A glass waterfall feature at the aft adds visual drama while maintaining the pool&apos;s status as a place for quiet reflection and exercise. Whether for morning laps or evening aperitifs, this space remains the heart of ALFA NERO&apos;s outdoor life.</p>
      </ContentSection>

      <QuoteBlock quote="The infinity pool wasn't just a feature, it was a statement that changed what owners expected from their yachts." attribution="SuperYacht Times" />

      <ContentSection label="Wellness" title="The Jacuzzi Pools">
        <p>In addition to the main infinity pool, ALFA NERO features Jacuzzi pools on multiple decks. The master suite includes a private Jacuzzi on its dedicated deck, while the top deck gym area offers another for guest use.</p>
      </ContentSection>
    </div>
  );
}
