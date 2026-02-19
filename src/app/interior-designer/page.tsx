import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContentSection from "@/components/content-section";
import QuoteBlock from "@/components/quote-block";
import ImageSection from "@/components/image-section";

const CDN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591";

export const metadata: Metadata = {
  title: "Alberto Pinto - Interior Designer",
  description: "Discover the legendary Parisian interior architect Alberto Pinto, whose four-decade career culminated in ALFA NERO's award-winning interior design.",
};

export default function InteriorDesignerPage() {
  return (
    <div>
      <PageHero
        label="Design & Build"
        title="The Parisian Who Understood Scale"
        subtitle="Alberto Pinto · Interior Design"
        image={`${CDN}/eNJnPZWeGRATLlPP.webp`}
        imageAlt="ALFA NERO main salon by Alberto Pinto"
      />

      <ContentSection label="The Designer" title="A Moroccan Beginning">
        <p>
          Alberto Pinto was born in Casablanca in 1943. He studied at the École du Louvre in Paris, trained his eye through photography, and by the 1970s had established Cabinet Alberto Pinto in a 17th-century hôtel particulier on Place des Victoires, where a team that would eventually number sixty worked on projects ranging from corporate headquarters to royal palaces across multiple continents.
        </p>
      </ContentSection>

      <ContentSection label="Design Principles" title="Understanding Scale">
        <p>
          Pinto understood something that many interior designers never grasp: large spaces require different thinking than small ones, and the challenge is not to fill them but to make them feel inhabited, to create intimacy within grandeur, to ensure that human beings feel comfortable rather than diminished by the architecture surrounding them.
        </p>
      </ContentSection>

      <QuoteBlock
        quote="I pride myself on knowing how to bring together immensity and comfort. Most people are afraid of houses on a grand scale, but I've always been completely at home in them."
        attribution="Alberto Pinto"
        source="AD Magazine, October 1992"
      />

      <ContentSection label="The ALFA NERO Interior" title="Pop Art Meets Art Deco">
        <p>
          The interior of ALFA NERO was conceived through a collaboration between Nuvolari Lenard, who developed the spatial layout and functional planning, and Alberto Pinto, who created the decorative scheme, material palette, and artistic direction. Pinto&apos;s vision draws on pop art and Art Deco influences, incorporating a monochrome base accented by coordinated colour, modern art, and intricate textures throughout 1,250 square metres of living space.
        </p>
        <p>
          ALFA NERO&apos;s interior is home to an impressive collection of modern and contemporary art, with original works by Roy Lichtenstein, Joan Miro, Takashi Murakami, Andy Warhol, Frank Stella, and Marc Chagall. These are not merely decorative additions but integral to the yacht&apos;s identity, selected to complement Pinto&apos;s design language and positioned throughout the main salon, upper salon, guest corridors, and VIP suites.
        </p>
        <p>
          The main salon features a grand Pleyel piano, finished in black lacquer with an intricate white wave pattern etched across its surface. Scalloped wall panels lacquered in white create a mother-of-pearl effect, while zig-zag woodwork and bold striped flooring carry graphic motifs throughout the vessel.
        </p>
      </ContentSection>

      <ImageSection src={`${CDN}/AA_0536.jpg`} alt="ALFA NERO guest cabin by Alberto Pinto" caption="Each guest cabin features unique colour coordination and decorative elements" />

      <ContentSection label="Design Philosophy" title="A Unifying Vision">
        <p>
          Each of the six guest cabins was conceived as a unique environment, with individually coordinated colours, materials, and decorative elements. A unifying coral theme connects the spaces: sea creatures appear on coverlets and cushions, sconces are wrapped with branches of coral, and bathroom floors are finished in mosaics of black slate and marble.
        </p>
        <p>
          A glass-enclosed elevator glides from lower to upper decks, passing tall crystal sculptures and a circular wraparound staircase lined with leather mosaic. The vertical journey through the yacht is itself a designed experience.
        </p>
      </ContentSection>

      <ContentSection label="Legacy" title="A Lasting Influence">
        <p>
          Alberto Pinto passed away in 2012 at the age of 69. Alberto Pinto Interior Design, under Linda Pinto&apos;s management, strong of a team of 80 employees, rigorously perpetuates what made the Master&apos;s success, carrying forward his vision from their Paris headquarters across ongoing yacht, aviation, and residential commissions.
        </p>
        <p>
          On board ALFA NERO, his sensibility translates into spaces that feel composed and deliberate, prioritising volume, light, and proportion over decoration or short-term fashion. His work onboard ALFA NERO earned the yacht recognition for Best Interior Design at the World Superyacht Awards 2008.
        </p>
      </ContentSection>
    </div>
  );
}
