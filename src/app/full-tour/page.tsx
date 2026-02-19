import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/fade-in";
import VideoPlayer from "@/components/video-player";

const CDN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591";

export const metadata: Metadata = {
  title: "Full Video Tour",
  description: "Step onboard ALFA NERO. Experience the full tour of this iconic 82-metre Oceanco superyacht.",
};

export default function FullTourPage() {
  return (
    <div>
      {/* Hero with video */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <VideoPlayer
          src={`${CDN}/yhLbPaEAtdicwmVc.mp4`}
          poster={`${CDN}/kZTRjDHOrESFtISr.webp`}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-8">
          <FadeIn>
            <p className="text-red-500 text-xs tracking-[0.3em] uppercase mb-4 font-bold">Full Video Tour</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Step Onboard ALFA NERO
            </h1>
            <p className="text-xl font-light text-white/80 max-w-2xl mx-auto mb-12">
              Experience the full tour of this iconic 82-metre Oceanco superyacht. From the revolutionary infinity pool to the exquisite Alberto Pinto interiors, discover why ALFA NERO remains one of the most celebrated vessels ever built.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Continue Exploring */}
      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <FadeIn>
            <p className="text-red-600 text-xs tracking-[0.3em] uppercase mb-4 font-bold">Continue Exploring</p>
            <h2 className="text-3xl md:text-4xl mb-12" style={{ fontFamily: "var(--font-display)" }}>
              Discover More
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { href: "/master-cabin", label: "Accommodation", title: "Master Cabin", desc: "The owner's private sanctuary" },
                { href: "/deck-space", label: "Deck Spaces", title: "Outdoor Living", desc: "Infinity pool & outdoor living" },
                { href: "/wellness", label: "Wellness", title: "Spa & Gym", desc: "Spa, gym & relaxation" },
                { href: "/gallery", label: "Gallery", title: "Photography", desc: "Full photo collection" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="group block py-6 border-b border-black/10 hover:border-red-600 transition-colors">
                  <p className="text-red-600 text-xs tracking-[0.2em] uppercase mb-2">{item.label}</p>
                  <h3 className="text-xl mb-1 group-hover:text-red-600 transition-colors" style={{ fontFamily: "var(--font-display)" }}>{item.title}</h3>
                  <p className="text-black/50 font-light text-sm">{item.desc}</p>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
