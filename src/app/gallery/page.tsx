import type { Metadata } from "next";
import FadeIn from "@/components/fade-in";

const CDN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery of ALFA NERO 82m Oceanco superyacht. Exterior, interior, and aerial views of one of the world's most awarded superyachts.",
};

const images = [
  { src: `${CDN}/kZTRjDHOrESFtISr.webp`, alt: "ALFA NERO 82m Oceanco superyacht at sea", category: "Exterior" },
  { src: `${CDN}/eNJnPZWeGRATLlPP.webp`, alt: "ALFA NERO master cabin by Alberto Pinto", category: "Interior" },
  { src: `${CDN}/cMjDvuvncDCVqukW.webp`, alt: "ALFA NERO infinity pool and aft deck", category: "Exterior" },
  { src: `${CDN}/tdiSoERkjbuufbfY.webp`, alt: "ALFA NERO stern deck with water toys", category: "Exterior" },
  { src: `${CDN}/urzFiYPfYZgNPzER.webp`, alt: "ALFA NERO aerial view", category: "Exterior" },
  { src: `${CDN}/lKOYgjLgvGpANyub.webp`, alt: "ALFA NERO interior detail", category: "Interior" },
  { src: `${CDN}/YoxdiNMevOMQgkXZ.webp`, alt: "ALFA NERO profile rendering", category: "Technical" },
  { src: `${CDN}/EvCHUxOoIhWYmUDw.webp`, alt: "ALFA NERO design detail", category: "Interior" },
  { src: `${CDN}/AA_0536.jpg`, alt: "ALFA NERO guest accommodation", category: "Interior" },
];

export default function GalleryPage() {
  return (
    <div>
      <section className="pt-32 pb-8">
        <div className="container max-w-7xl">
          <FadeIn>
            <p className="text-red-600 text-xs tracking-[0.3em] uppercase mb-4 font-bold">Gallery</p>
            <h1 className="text-5xl md:text-6xl mb-4" style={{ fontFamily: "var(--font-display)" }}>
              ALFA NERO
            </h1>
            <p className="text-black/60 text-lg font-light">
              82m Oceanco Superyacht · Photography Collection
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="pb-24">
        <div className="container max-w-7xl">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
            {images.map((image, i) => (
              <FadeIn key={i} delay={i * 0.05} className="mb-4 break-inside-avoid">
                <div className="overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs text-black/40 mt-2">{image.alt}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
