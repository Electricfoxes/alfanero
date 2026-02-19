import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContentSection from "@/components/content-section";

const CDN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591";

export const metadata: Metadata = {
  title: "Entertainment Areas",
  description: "Discover ALFA NERO's exceptional entertainment spaces including the main salon, sundeck lounge, Bösendorfer piano, and cinema room.",
};

export default function EntertainmentPage() {
  return (
    <div>
      <PageHero label="Living Spaces" title="Where Memories Are Made" subtitle="Lounges · Piano · Cinema" image={`${CDN}/lKOYgjLgvGpANyub.webp`} imageAlt="ALFA NERO entertainment spaces" />

      <ContentSection label="Entertainment" title="The Main Salon">
        <p>The main salon serves as the social heart of ALFA NERO, a space where Alberto Pinto&apos;s vision of understated luxury reaches its fullest expression. Rich sycamore panelling frames the room, while carefully curated art pieces and custom furnishings create an atmosphere of refined sophistication.</p>
        <p>Floor-to-ceiling windows flood the space with natural light during the day, while the evening transforms it into an intimate venue for cocktails and conversation. The layout accommodates both large gatherings and quiet moments, adapting effortlessly to the rhythm of yacht life.</p>
      </ContentSection>

      <ContentSection label="Entertainment" title="The Bösendorfer Piano">
        <p>At the heart of the main salon stands a Bösendorfer grand piano, one of the world&apos;s most prestigious instruments. Handcrafted in Vienna since 1828, Bösendorfer pianos are renowned for their exceptional tonal quality and craftsmanship—a fitting centrepiece for a yacht of ALFA NERO&apos;s calibre.</p>
        <p>Founded in 1828 by Ignaz Bösendorfer in Vienna, the company has produced instruments for composers including Franz Liszt, Johannes Brahms, and Johann Strauss II. Each piano requires up to four years to complete, with master craftsmen hand-selecting materials and voicing each instrument individually.</p>
      </ContentSection>

      <ContentSection label="Outdoor Living" title="Sundeck Entertainment">
        <p>The sundeck offers an entirely different entertainment experience—open-air luxury with 360-degree views. A built-in bar, comfortable seating areas, and proximity to the Jacuzzi create the perfect environment for daytime relaxation or sunset celebrations.</p>
        <p>During the 2024 refit, the sundeck soft furnishings were completely refreshed, maintaining the classic black-and-white aesthetic that has become ALFA NERO&apos;s signature.</p>
      </ContentSection>

      <ContentSection label="Cinema & Media" title="Cinema Room">
        <p>For quieter evenings, ALFA NERO offers dedicated cinema facilities with a curated film library and state-of-the-art audio-visual equipment. The sky lounge doubles as a screening room, its comfortable seating and blackout capabilities creating an intimate theatre experience at sea.</p>
        <p>Throughout the yacht, integrated entertainment systems allow guests to access music, films, and media from any location—whether relaxing in their cabin, dining al fresco, or lounging by the pool.</p>
      </ContentSection>

      <ContentSection label="Entertainment" title="The Sky Lounge">
        <p>The sky lounge provides an elevated retreat with commanding views and a more relaxed atmosphere than the main salon. This versatile space serves equally well for morning coffee, afternoon games, or evening entertainment.</p>
        <p>With its own bar and direct access to the exterior decks, the sky lounge offers guests the flexibility to move seamlessly between indoor comfort and outdoor enjoyment throughout the day.</p>
      </ContentSection>
    </div>
  );
}
