import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContentSection from "@/components/content-section";
import QuoteBlock from "@/components/quote-block";
import ImageSection from "@/components/image-section";
import FadeIn from "@/components/fade-in";

const CDN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591";

export const metadata: Metadata = {
  title: "Nuvolari Lenard - Exterior Designer",
  description: "Discover the Venice-based studio Nuvolari Lenard, whose revolutionary exterior design for ALFA NERO earned the World Superyacht Award for Best Exterior Styling.",
};

export default function ExteriorDesignerPage() {
  return (
    <div>
      <PageHero
        label="Design & Build"
        title="The Studio Behind the Silhouette"
        subtitle="Nuvolari Lenard · Exterior Design"
        image={`${CDN}/kZTRjDHOrESFtISr.webp`}
        imageAlt="ALFA NERO exterior by Nuvolari Lenard"
      />

      <ContentSection label="The Studio" title="A Studio Built on Water">
        <p>
          Venice survives because its founders understood water. Carlo Nuvolari grew up with this understanding embedded in his consciousness, born into a family whose name echoes through Italian automotive and maritime history (Tazio Nuvolari, the legendary racing driver, was a relative), and after training as an architect he turned his attention to yacht design, partnering with Dan Lenard in 1998 to establish a studio in Venice itself, near the Arsenale where the Venetian Republic once constructed the fleets that dominated Mediterranean trade for centuries.
        </p>
      </ContentSection>

      <ContentSection label="Design Challenge" title="A Different Kind of Question">
        <p>
          From the beginning, Nuvolari Lenard approached yacht design with a question that most of their contemporaries never thought to ask: what is this vessel actually for? Not what does a yacht look like, but what does the owner actually want to do onboard – how do they want to live, what experiences matter to them, and how can architecture and engineering serve those desires rather than constraining them?
        </p>
        <p>
          The answers they discovered rarely aligned with conventional yacht design, because owners wanted outdoor living in climates that rewarded it, connection to the water rather than isolation from it, and spaces that could transform from formal to casual, from private to social, from operational to leisurely – yachts that felt less like boats and more like floating estates with the sea as their garden.
        </p>
      </ContentSection>

      <ImageSection src={`${CDN}/cMjDvuvncDCVqukW.webp`} alt="The revolutionary infinity pool, first of its kind on a superyacht" caption="The revolutionary infinity pool, first of its kind on a superyacht" />

      <ContentSection label="The Masterwork" title="ALFA NERO – The Fullest Expression">
        <p>
          ALFA NERO became the purest expression of this philosophy. The owner&apos;s brief aligned seamlessly with Nuvolari Lenard&apos;s conviction about what a superyacht could be. The black hull was chosen not merely for its drama, though dramatic it certainly is, but to provide the visual weight needed to anchor the revolutionary stern. The low profile was no stylistic affectation; it was a functional imperative, drawing every living space closer to the sea.
        </p>
        <p>
          Carlo Nuvolari conceived the beach club as an actual outdoor room rather than a service area with aspirations, positioned the infinity pool where it could achieve maximum visual impact – cantilevered over the stern with water flowing over glass into the sea below – and designed deck arrangements that flowed rather than segmented, creating outdoor spaces that invited sustained use rather than merely permitting brief visits between air-conditioned rooms. Nuvolari Lenard also developed the interior spatial layout and functional planning, with Alberto Pinto creating the decorative scheme and artistic direction that would bring these spaces to life.
        </p>
      </ContentSection>

      <QuoteBlock
        quote="Begin with how the owner wants to live, then design the yacht that enables it, treating convention as useful reference rather than binding constraint."
        attribution="Nuvolari Lenard Studio Philosophy"
      />

      <ContentSection label="After ALFA NERO" title="A Venetian Legacy">
        <p>
          In the years since her launch, Nuvolari Lenard has designed over 120 superyachts – including the Lürssen AHPO, the Lürssen NORD, and the Oceanco BRAVO EUGENIA – with an approach that remains entirely consistent: begin with how the owner wants to live, then design the yacht that enables it, treating convention as useful reference rather than binding constraint.
        </p>
        <p>
          Every beach club built since owes her a debt, and every infinity pool afloat exists because Nuvolari Lenard demonstrated, in a Venetian tradition stretching back fifteen centuries, that building beautifully on water is not impossible but inevitable.
        </p>
      </ContentSection>

      <section className="section-padding bg-[#0a0a0a] text-white">
        <div className="container max-w-4xl">
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Founded</p>
                <p className="text-2xl font-light">1998, Venice</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Projects Completed</p>
                <p className="text-2xl font-light">Over 120 superyachts</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Notable Projects</p>
                <p className="text-2xl font-light">AHPO, NORD, BRAVO EUGENIA</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
