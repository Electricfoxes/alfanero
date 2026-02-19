import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContentSection from "@/components/content-section";
import QuoteBlock from "@/components/quote-block";

const CDN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591";

export const metadata: Metadata = {
  title: "Water Toys & Garage",
  description: "Explore ALFA NERO's comprehensive collection of water toys including the 13.5m Vanquish VQ45 chase boat, Yamaha WaveRunners, SeaBobs, and diving equipment.",
};

export default function WaterToysPage() {
  return (
    <div>
      <PageHero label="Onboard Adventure" title="Adventure Awaits" subtitle="Water Toys · Tenders · Garage" description="ALFA NERO carries one of the most comprehensive collections of water toys in her class, stored within a purpose-built garage that transforms the stern into a gateway for adventure." image={`${CDN}/tdiSoERkjbuufbfY.webp`} imageAlt="ALFA NERO water toys" />

      <ContentSection label="The Fleet" title="The Vanquish VQ45 Chase Boat">
        <p>The VQ45 comfortably accommodates all twelve guests for shore excursions, restaurant transfers, or extended coastal explorations. With her powerful engines, she can keep pace with the mother yacht during repositioning or venture independently for day trips to distant anchorages. The crew maintains her in immaculate condition, ready for deployment at a moment&apos;s notice.</p>
      </ContentSection>

      <QuoteBlock quote="The Vanquish VQ45 is not merely transport – it's an extension of the yacht experience, allowing guests to explore coastlines inaccessible to the mother ship in considerable style." attribution="Captain's Log" />

      <ContentSection label="Water Sports" title="Personal Watercraft">
        <p>Four Yamaha WaveRunners provide the thrill of high-speed water exploration. For a more immersive underwater experience, ALFA NERO carries SeaBob underwater scooters – remarkable devices that allow guests to glide effortlessly beneath the surface, exploring marine life and underwater landscapes with minimal effort and maximum exhilaration.</p>
      </ContentSection>

      <ContentSection label="Water Sports" title="Watersports Equipment">
        <p>The watersports inventory extends well beyond motorised craft. Wakeboards and six sets of waterskis cater to those who prefer being towed behind the tender. Jetboards offer an electrifying alternative for experienced riders seeking the latest in water sports technology.</p>
        <p>Inflatable towables including banana boats and donuts offer family-friendly fun, while an extensive collection of inflatable water toys transforms any anchorage into a private water park. Stand-up paddleboards and kayaks provide quieter alternatives.</p>
      </ContentSection>

      <ContentSection label="Diving & Swimming" title="Underwater Exploration">
        <p>Comprehensive snorkelling equipment is available for all guests, with masks, fins, and wetsuits in various sizes. The yacht carries full scuba diving equipment for certified divers, with the crew able to arrange professional dive guides at most destinations.</p>
      </ContentSection>

      <ContentSection label="The Garage" title="Purpose-Built Stern Garage">
        <p>All equipment is housed within ALFA NERO&apos;s purpose-built stern garage, a space engineered for both storage efficiency and rapid deployment. The stern platform lowers to water level, creating a seamless launch and recovery system for the tenders and all water toys.</p>
      </ContentSection>

      <QuoteBlock quote="The garage was designed not as storage but as a gateway – the threshold between the comfort of the yacht and the adventure of the sea." attribution="Nuvolari Lenard" source="Design Notes" />

      <ContentSection label="Fishing & Beach" title="Fishing & Beach Setups">
        <p>For guests interested in fishing, ALFA NERO carries quality tackle suitable for both casual line fishing and more serious sport fishing expeditions. Beach setups represent another dimension – the crew can arrange complete shore installations including gazebos, sun loungers, tables, and even barbecue equipment, transforming a secluded beach into a private extension of the yacht for the day.</p>
      </ContentSection>
    </div>
  );
}
