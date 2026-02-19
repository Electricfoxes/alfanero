import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContentSection from "@/components/content-section";

const CDN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591";

export const metadata: Metadata = {
  title: "Dining",
  description: "Experience exceptional dining onboard ALFA NERO. From formal dinners for 12 guests to intimate private dining and al fresco meals under the stars.",
};

export default function DiningPage() {
  return (
    <div>
      <PageHero label="Culinary Excellence" title="The Art of Dining" subtitle="Formal · Private · Al Fresco" description="Dining onboard ALFA NERO transcends mere sustenance—it becomes an experience." image={`${CDN}/kZTRjDHOrESFtISr.webp`} imageAlt="ALFA NERO dining" />

      <ContentSection label="Technical Systems" title="Formal Dining Room">
        <p>The formal dining room stands as a testament to Alberto Pinto&apos;s mastery of elegant entertaining. Accommodating up to 12 guests, the space features a custom-designed dining table surrounded by chairs upholstered in the finest materials. Museum-quality lighting creates an atmosphere of refined sophistication, while floor-to-ceiling windows frame ever-changing seascapes.</p>
        <p>Every detail has been considered—from the placement of the service areas to the acoustic properties of the room. The result is a space where conversation flows as freely as the wine, and where memorable dinners become the highlight of any voyage.</p>
      </ContentSection>

      <ContentSection label="Private Dining" title="Intimate Occasions">
        <p>For more intimate occasions, the private dining area offers a secluded alternative to the main dining room. Perfect for business discussions, romantic dinners, or small family gatherings, this space provides the same level of refinement in a more personal setting.</p>
      </ContentSection>

      <ContentSection label="Culinary Excellence" title="The Galley">
        <p>ALFA NERO&apos;s galley is equipped to the highest professional standards, capable of preparing cuisine ranging from Mediterranean classics to international fine dining. The yacht&apos;s experienced chef works with guests to create personalised menus, sourcing the finest local ingredients at each port of call.</p>
      </ContentSection>

      <ContentSection label="Outdoor Living" title="Al Fresco Dining">
        <p>The exterior dining areas offer an entirely different experience—the pleasure of fine dining combined with the beauty of the open sea. Multiple al fresco dining options are available throughout the yacht, from the formal exterior dining area on the main deck to casual seating on the sundeck.</p>
        <p>As the sun sets and the stars emerge, these outdoor spaces transform into magical settings for evening meals. The gentle sea breeze, the sound of water against the hull, and the vast canopy of stars overhead create an atmosphere impossible to replicate on land.</p>
      </ContentSection>

      <ContentSection label="Privacy & Access" title="Service & Hospitality">
        <p>ALFA NERO&apos;s crew are trained to deliver service at the highest level, anticipating needs before they arise. The yacht&apos;s wine cellar maintains a carefully curated selection of vintages, while the bar is stocked with premium spirits and champagnes. Every element of the dining experience has been considered to ensure that meals onboard ALFA NERO remain among the most memorable of any guest&apos;s life.</p>
      </ContentSection>
    </div>
  );
}
