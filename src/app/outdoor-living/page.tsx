import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContentSection from "@/components/content-section";
import QuoteBlock from "@/components/quote-block";

const CDN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591";

export const metadata: Metadata = {
  title: "Outdoor Living",
  description: "Explore ALFA NERO's 1,250 square metres of outdoor living space - deck areas, al fresco dining, and the iconic infinity pool.",
};

export default function OutdoorLivingPage() {
  return (
    <div>
      <PageHero label="Exterior Spaces" title="Outdoor Living" subtitle="Deck Spaces · Dining · Pool" description="ALFA NERO's exterior spaces were conceived as outdoor rooms, extensions of the interior that offer the same attention to proportion, flow, and comfort." image={`${CDN}/kZTRjDHOrESFtISr.webp`} imageAlt="ALFA NERO outdoor living" />

      <ContentSection label="The Aft Deck" title="The Heart of Outdoor Living">
        <p>The aft deck entertainment area centres on the iconic infinity pool, but the surrounding space is equally considered. A full wet bar, generous banquette seating, and barbecue facilities create a complete outdoor living room capable of hosting anything from intimate dinners to larger gatherings.</p>
        <p>The bleached teak deck, sun pads, and chaise longues are arranged to maximise both socialising and privacy. Guests can gather around the pool, or retreat to quieter corners without feeling separated from the action.</p>
      </ContentSection>

      <ContentSection label="Design Philosophy" title="The Infinity Pool: A Design Revolution">
        <p>When ALFA NERO launched in 2007, her 3.7-by-11.6-metre infinity pool was the first of its kind on a superyacht. The pool floor rises via a precision spindle mechanism to varying depths, from full swimming depth to a shallow wading pool safe for children. When fully raised, the floor creates a flat deck surface that can serve as a full-beam entertainment space or, critically, as an emergency helipad certified for helicopter operations.</p>
        <p>A glass waterfall feature at the aft edge provides both visual drama and acoustic privacy, the sound of falling water masking conversation from the decks below. The infinity edge itself creates the illusion of water merging with the horizon—a design detail that has been copied countless times since but rarely matched.</p>
      </ContentSection>

      <QuoteBlock quote="The infinity pool wasn't just a feature, it was a statement that changed what owners expected from their yachts. ALFA NERO proved that superyachts could offer experiences previously thought impossible at sea." attribution="SuperYacht Times" />

      <ContentSection label="The Sundeck" title="The Highest Vantage Point">
        <p>The top deck offers the most elevated perspective onboard, with 180-degree views from the air-conditioned gym and direct access to the Jacuzzi pool. This deck serves as both wellness retreat and observation platform, a place to watch the sunset or spot dolphins from the highest vantage point.</p>
      </ContentSection>

      <ContentSection label="Dining Al Fresco" title="Three Distinct Dining Experiences">
        <p>ALFA NERO features three separate exterior dining areas, each offering a distinct experience. The aft deck dining with its elegant U-shaped banquette seats up to twelve guests in comfort, while the upper deck provides a more intimate setting with sweeping views.</p>
        <p>Whether breakfast on the owner&apos;s private deck, lunch by the pool, or a formal dinner under the stars, the yacht accommodates every preference.</p>
      </ContentSection>

      <ContentSection label="Water Level" title="The Beach Club">
        <p>At water level, the beach club provides the most direct connection to the sea. This space, with its fold-down platforms and abundant natural light, serves as the departure point for water sports and the return point for swimmers, divers, and explorers.</p>
      </ContentSection>
    </div>
  );
}
