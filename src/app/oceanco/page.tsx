import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import ContentSection from "@/components/content-section";
import QuoteBlock from "@/components/quote-block";

const CDN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591";

export const metadata: Metadata = {
  title: "Oceanco - Builder",
  description: "Oceanco: the Dutch shipyard behind ALFA NERO. Founded in 1987, Oceanco has delivered over 30 superyachts exceeding 80 metres.",
};

export default function OceancoPage() {
  return (
    <div>
      <PageHero
        label="Design & Build"
        title="The Dutch Who Built It"
        subtitle="Oceanco · Alblasserdam, Netherlands"
        image={`${CDN}/kZTRjDHOrESFtISr.webp`}
        imageAlt="ALFA NERO by Oceanco"
      />

      <ContentSection label="The Builder" title="A Shipyard Built on Ambition">
        <p>
          Oceanco was founded in 1987 in Alblasserdam, a small town in the Dutch province of South Holland where the Noord and Lek rivers meet, a location chosen because the Netherlands has been building ships for five hundred years and the infrastructure – the skilled workforce, the supplier networks, the institutional knowledge – exists nowhere else in quite the same concentration.
        </p>
        <p>
          The shipyard&apos;s ambition from the beginning was to build the largest and most complex superyachts in the world, not by competing on price but by competing on capability – taking on projects that other yards could not execute, solving engineering problems that other yards would not attempt, and delivering vessels that justified their cost through excellence rather than mere adequacy.
        </p>
      </ContentSection>

      <ContentSection label="The Y702 Project" title="Project ALFA NERO">
        <p>
          ALFA NERO was delivered in 2007 as project Y702, the second yacht in the Y Generation programme that Theodore Angelopoulos launched after acquiring Oceanco in 2002. She was conceived not as an evolution of existing conventions but as a departure from them – the brief was clear: create a vessel that would win awards, influence the industry, and remain relevant for decades.
        </p>
        <p>
          The result exceeded expectations. ALFA NERO collected seven major awards in a single year, a sweep that validated the Y Generation approach and established Oceanco as the builder of choice for owners seeking the extraordinary.
        </p>
      </ContentSection>

      <ContentSection label="Naval Architecture" title="Azure Yacht Design">
        <p>
          The naval architecture for ALFA NERO was developed by Azure Yacht Design & Naval Architecture. The collaboration between Azure&apos;s naval architects and Nuvolari Lenard&apos;s design studio was essential to realising the ambitious vision. Azure solved the complex engineering challenges: the structural reinforcement required for the infinity pool and helipad conversion, the hull form optimisation that delivers a 5,500 nautical mile range at cruising speed, and the integration of the spindle mechanism that raises the pool floor to create a certified helicopter landing area.
        </p>
      </ContentSection>

      <ContentSection label="Design Philosophy" title="Engineering That Enables Design">
        <p>
          Oceanco&apos;s contribution to ALFA NERO was not merely construction but enablement – taking the ambitious designs of Nuvolari Lenard and Alberto Pinto and solving the engineering problems that made them possible. The infinity pool required a spindle mechanism that could raise and lower a swimming pool full of water while maintaining structural integrity in sea conditions. The beach club required fold-down platforms that could withstand repeated cycling without degradation. The helicopter landing capability required structural reinforcement that did not compromise the aesthetic intent.
        </p>
      </ContentSection>

      <QuoteBlock
        quote="The helipad was one of the most challenging elements. We had to design a system that could transform a swimming pool into a certified helicopter landing area in minutes, while maintaining the aesthetic vision of the designers."
        attribution="Jeroen Mulder"
        source="Project Manager, Oceanco"
      />

      <ContentSection label="After ALFA NERO" title="Continuing the Legacy">
        <p>
          In the years since ALFA NERO&apos;s launch, Oceanco has continued to build yachts that push boundaries – the 106-metre sailing yacht BLACK PEARL with her DynaRig propulsion system, the 109-metre BRAVO EUGENIA with her LIFE design for reduced environmental impact, the 127-metre KAOS with her dramatic exterior styling – each project building on the lessons learned from previous builds, including the lessons learned from Y702.
        </p>
        <p>
          The shipyard remains headquartered in Alblasserdam, where a workforce of several hundred continues to build yachts that other shipyards cannot, solving problems that other shipyards will not, and delivering vessels that justify their existence through excellence.
        </p>
      </ContentSection>
    </div>
  );
}
