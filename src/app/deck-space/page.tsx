import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContentSection from "@/components/content-section";
import QuoteBlock from "@/components/quote-block";

const CDN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591";

export const metadata: Metadata = {
  title: "Deck Spaces",
  description: "Explore ALFA NERO's deck spaces including the aft deck, sundeck, and beach club.",
};

export default function DeckSpacePage() {
  return (
    <div>
      <PageHero label="Exterior Spaces" title="Outdoor Living" subtitle="Deck Spaces · Toys & Tenders · Dining" description="ALFA NERO's exterior spaces were conceived as outdoor rooms, extensions of the interior that offer the same attention to proportion, flow, and comfort." image={`${CDN}/kZTRjDHOrESFtISr.webp`} imageAlt="ALFA NERO aft deck" />

      <ContentSection label="The Aft Deck" title="Infinity Pool & Entertainment">
        <p>The aft deck entertainment area centres on the iconic infinity pool, but the surrounding space is equally considered. A full wet bar, generous banquette seating, and barbecue facilities create a complete outdoor living room capable of hosting anything from intimate dinners to larger gatherings.</p>
      </ContentSection>

      <ContentSection label="Design Philosophy" title="The Infinity Pool: A Design Revolution">
        <p>When ALFA NERO launched in 2007, her 3.7-by-11.6-metre infinity pool was the first of its kind on a superyacht. The pool floor rises via a precision spindle mechanism to varying depths, from full swimming depth to a shallow wading pool safe for children. When fully raised, the floor creates a flat deck surface that can serve as a full-beam entertainment space or, critically, as an emergency helipad certified for helicopter operations.</p>
      </ContentSection>

      <QuoteBlock quote="The pool is surrounded by sun pads, chaise longues, and a full wet bar, creating a complete outdoor living environment. Whether for morning laps, afternoon lounging, or evening aperitifs, this space remains the heart of ALFA NERO's outdoor life and her most photographed feature." attribution="SuperYacht Times" />

      <ContentSection label="The Sundeck" title="360-Degree Views">
        <p>The top deck offers the most elevated perspective onboard, with 180-degree views from the air-conditioned gym and direct access to the Jacuzzi pool. This deck serves as both wellness retreat and observation platform.</p>
      </ContentSection>

      <ContentSection label="Dining Al Fresco" title="Three Exterior Dining Areas">
        <p>ALFA NERO features three separate exterior dining areas, each offering a distinct experience. The aft deck dining with its elegant U-shaped banquette seats up to twelve guests in comfort, while the upper deck provides a more intimate setting with sweeping views.</p>
      </ContentSection>

      <ContentSection label="Water Level" title="The Beach Club">
        <p>At water level, the beach club provides the most direct connection to the sea. This space, with its fold-down platforms and abundant natural light, serves as the departure point for water sports and the return point for swimmers, divers, and explorers.</p>
      </ContentSection>
    </div>
  );
}
