import type { Metadata } from "next";
import PageHero from "@/components/page-hero";
import FadeIn from "@/components/fade-in";
import Link from "next/link";

const CDN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591";

export const metadata: Metadata = {
  title: "Technical Specifications",
  description: "Complete technical specifications for ALFA NERO: 82m length, 2,159 GT, twin MTU engines, 20 knot max speed, 5,500nm range, 12 guests in 7 staterooms.",
};

const specs = {
  "Principal Dimensions": [
    { label: "Length Overall", value: "82m (269 ft)" },
    { label: "Beam", value: "14.20m (46 ft)" },
    { label: "Draft", value: "3.90m (12.1 ft)" },
    { label: "Gross Tonnage", value: "2,159 GT" },
    { label: "Living Space", value: "1,250 sq m" },
  ],
  "Build Details": [
    { label: "Builder", value: "Oceanco, Netherlands" },
    { label: "Year of Delivery", value: "2007" },
    { label: "Year of Refit", value: "2024" },
    { label: "Project Code", value: "Y702" },
    { label: "Classification", value: "Lloyd's Register" },
    { label: "Hull Material", value: "Steel" },
    { label: "Superstructure", value: "Aluminium" },
  ],
  "Propulsion & Performance": [
    { label: "Engines", value: "Twin MTU Diesels" },
    { label: "Total Power", value: "4,680 HP" },
    { label: "Max Speed", value: "20 knots" },
    { label: "Cruising Speed", value: "15 knots" },
    { label: "Range at Cruise", value: "5,500 nm" },
  ],
  "Accommodation": [
    { label: "Guests", value: "12" },
    { label: "Staterooms", value: "7 (incl. staff suite)" },
    { label: "Master Suite", value: "Full-beam, upper deck" },
    { label: "VIP / Double Cabins", value: "4" },
    { label: "Twin Cabins", value: "2" },
    { label: "Staff Suite", value: "1 (flexible)" },
    { label: "Crew", value: "28" },
  ],
  "Design Team": [
    { label: "Exterior Design", value: "Nuvolari Lenard" },
    { label: "Interior Design", value: "Alberto Pinto" },
    { label: "Naval Architecture", value: "Azure Yacht Design" },
  ],
};

export default function TechnicalPage() {
  return (
    <div>
      <PageHero
        label="Specifications"
        title="The Numbers Behind Alfa Nero"
        subtitle="Technical · Reference"
        image={`${CDN}/YoxdiNMevOMQgkXZ.webp`}
        imageAlt="ALFA NERO technical profile"
      />

      <section className="section-padding bg-white">
        <div className="container max-w-5xl">
          {Object.entries(specs).map(([category, items]) => (
            <FadeIn key={category} className="mb-16 last:mb-0">
              <h2 className="text-2xl md:text-3xl mb-8 pb-4 border-b border-black/10" style={{ fontFamily: "var(--font-display)" }}>
                {category}
              </h2>
              <div className="space-y-0">
                {items.map((item) => (
                  <div key={item.label} className="flex justify-between items-baseline py-4 border-b border-black/5">
                    <span className="text-black/60 text-sm font-light">{item.label}</span>
                    <span className="text-black font-light">{item.value}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
          <div className="text-center mt-16">
            <Link href="/broker" className="btn-luxury">Enquire About Acquisition</Link>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "What is the length of ALFA NERO?", acceptedAnswer: { "@type": "Answer", text: "ALFA NERO has a length overall (LOA) of 82 metres (269 feet)." } },
              { "@type": "Question", name: "What engines power ALFA NERO?", acceptedAnswer: { "@type": "Answer", text: "Twin MTU diesel engines with a total output of 4,680 horsepower, delivering a maximum speed of 20 knots." } },
              { "@type": "Question", name: "How many guests can ALFA NERO accommodate?", acceptedAnswer: { "@type": "Answer", text: "ALFA NERO accommodates up to 12 guests in 7 staterooms, all designed by Alberto Pinto." } },
              { "@type": "Question", name: "What is the range of ALFA NERO?", acceptedAnswer: { "@type": "Answer", text: "5,500 nautical miles at 15 knots cruising speed." } },
            ],
          }),
        }}
      />
    </div>
  );
}
