import Link from "next/link";
import FadeIn from "@/components/fade-in";
import VideoPlayer from "@/components/video-player";

const CDN = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663300921591";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden bg-black">
        <VideoPlayer
          src={`${CDN}/yhLbPaEAtdicwmVc.mp4`}
          poster={`${CDN}/kZTRjDHOrESFtISr.webp`}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        <div className="relative z-10 text-white px-8 md:px-16 pb-24 max-w-7xl w-full mx-auto text-center">
          <FadeIn>
            <h1
              className="text-7xl md:text-8xl lg:text-[10rem] font-normal leading-[0.85] mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ALFA NERO
            </h1>
            <div className="mb-8 text-white/80 font-light uppercase tracking-[0.2em] text-sm">
              <span>BUILT BY </span>
              <Link href="/oceanco" className="hover:text-red-400 transition-colors">OCEANCO</Link>
              <span> · DESIGNED BY </span>
              <Link href="/exterior-designer" className="hover:text-red-400 transition-colors">NUVOLARI LENARD</Link>
              <span> · INTERIOR BY </span>
              <Link href="/interior-designer" className="hover:text-red-400 transition-colors">ALBERTO PINTO</Link>
            </div>
            <p className="tracking-[0.2em] text-white/60 text-xs uppercase mb-10">
              YEAR 2007 · REFIT 2024
            </p>
            <Link href="/history" className="btn-luxury-outline text-base px-12 py-4 text-white border-white">
              Discover
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* About */}
      <section className="section-padding">
        <div className="container max-w-7xl">
          <FadeIn>
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-5">
                <p className="section-label mb-4">The Vessel</p>
                <h2 className="text-4xl md:text-5xl mb-8 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                  An Oceanco Icon
                </h2>
                <p className="text-lg leading-relaxed mb-6 font-light text-black/70">
                  A multi-award-winning 82-metre superyacht built by Oceanco and originally commissioned by Greek shipping magnate Theodore Angelopoulos, ALFA NERO remains a benchmark in her class almost two decades after launch. Comprehensively refitted in 2024, she is presented today in strong technical and operational condition.
                </p>
                <p className="text-base leading-relaxed text-black/60 font-light">
                  Winner of seven major industry awards including Best Interior Design and Best Exterior Styling at the World Superyacht Awards, ALFA NERO offers proven charter capability and a layout suited to both private ownership and commercial use. She represents a rare opportunity to acquire a vessel of genuine pedigree at her strongest point since delivery.
                </p>
                <div className="mt-10">
                  <Link href="/history" className="link-elegant text-black hover:text-red-600 uppercase text-xs tracking-[0.2em] transition-colors duration-300">
                    Explore The Yacht
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="image-frame overflow-hidden">
                  <VideoPlayer
                    src={`${CDN}/FEhBZRqIoMCAPrMv.mp4`}
                    poster={`${CDN}/tdiSoERkjbuufbfY.webp`}
                    className="w-full aspect-video object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Three Feature Cards */}
      <section className="section-padding bg-[#0a0a0a] text-white">
        <div className="container max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-16">
            {[
              {
                image: `${CDN}/eNJnPZWeGRATLlPP.webp`,
                label: "Accommodation",
                title: "Master Cabin",
                text: "The full-beam upper deck suite where Alberto Pinto traded his signature exuberance for quiet restraint, with panoramic windows and a private terrace with Jacuzzi.",
                href: "/master-cabin",
              },
              {
                image: `${CDN}/AA_0536.jpg`,
                label: "Accommodation",
                title: "Guest Cabins",
                text: "Six individually designed staterooms across three decks, each with its own colour palette and character, connected by a glass-enclosed elevator that rises past illuminated crystal sculptures.",
                href: "/guest-accommodations",
              },
              {
                image: `${CDN}/cMjDvuvncDCVqukW.webp`,
                label: "Lifestyle",
                title: "Wellness & Amenities",
                text: "A dedicated spa with sauna and treatment room, a gym with 180-degree sea views, and a beach club that opens directly to the water.",
                href: "/wellness",
              },
            ].map((card) => (
              <FadeIn key={card.title}>
                <div className="block">
                  <div className="image-frame aspect-[3/4] mb-8 overflow-hidden">
                    <img src={card.image} alt={card.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <p className="text-red-600 text-xs tracking-[0.3em] uppercase mb-3 font-bold">{card.label}</p>
                  <h3 className="mb-4 text-white text-2xl" style={{ fontFamily: "var(--font-display)" }}>{card.title}</h3>
                  <p className="text-white/70 leading-relaxed font-light text-sm mb-6">{card.text}</p>
                  <Link
                    href={card.href}
                    className="inline-block border border-white text-white text-xs uppercase tracking-[0.15em] px-6 py-3 hover:bg-red-600 hover:border-red-600 transition-all duration-300"
                  >
                    Explore
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pool-to-Helipad */}
      <section>
        <div className="relative">
          <div className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/8] relative overflow-hidden">
            <VideoPlayer
              src={`${CDN}/hiCbFoBlCNcIHhCI.mp4`}
              poster={`${CDN}/cMjDvuvncDCVqukW.webp`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </div>
        <div className="bg-white py-16 md:py-20 -mt-12 relative z-10">
          <div className="container max-w-4xl">
            <FadeIn>
              <div className="text-center">
                <p className="text-red-600 text-xs tracking-[0.3em] uppercase mb-4 font-bold">Engineering Marvel</p>
                <h2 className="text-4xl md:text-5xl mb-6" style={{ fontFamily: "var(--font-display)" }}>
                  Pool to Helipad in Minutes
                </h2>
                <p className="text-black/70 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                  The pool floor rises via a precision spindle mechanism to create a certified helipad in under 90 seconds. The first convertible pool-to-helipad system in superyacht history, it was engineered with a spindle drive rather than hydraulics specifically so the platform cannot lower under load.
                </p>
                <div className="mt-8 flex justify-center gap-8 text-center">
                  <div>
                    <p className="text-2xl md:text-3xl font-light" style={{ fontFamily: "var(--font-display)" }}>90</p>
                    <p className="text-xs tracking-[0.2em] uppercase text-black/50">Seconds</p>
                  </div>
                  <div className="w-px bg-black/20" />
                  <div>
                    <p className="text-2xl md:text-3xl font-light" style={{ fontFamily: "var(--font-display)" }}>First</p>
                    <p className="text-xs tracking-[0.2em] uppercase text-black/50">Of Its Kind</p>
                  </div>
                  <div className="w-px bg-black/20" />
                  <div>
                    <p className="text-2xl md:text-3xl font-light" style={{ fontFamily: "var(--font-display)" }}>5</p>
                    <p className="text-xs tracking-[0.2em] uppercase text-black/50">On Board</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Specifications Overview */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="container max-w-7xl">
          <FadeIn>
            <div className="text-center mb-12">
              <p className="text-red-600 text-xs tracking-[0.3em] uppercase mb-4 font-bold">Specifications</p>
              <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>Technical Excellence</h2>
            </div>
            <div className="mx-auto max-w-5xl">
              <div className="flex justify-between items-end mb-6 px-4">
                <div className="text-left">
                  <p className="text-base md:text-2xl font-light">12 Guests</p>
                  <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-black/50 font-bold">6 Staterooms</p>
                </div>
                <div className="text-right">
                  <p className="text-base md:text-2xl font-light">20 kts</p>
                  <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-black/50 font-bold">Max Speed</p>
                </div>
              </div>
              <div className="flex items-center gap-2 md:gap-8">
                <div className="flex flex-col gap-8 md:gap-12 min-w-[60px] md:min-w-[100px]">
                  <div className="text-left">
                    <p className="text-sm md:text-2xl font-light">14.20m</p>
                    <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-black/50 font-bold">Beam</p>
                  </div>
                  <div className="text-left">
                    <p className="text-sm md:text-2xl font-light">3.90m</p>
                    <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-black/50 font-bold">Draft</p>
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    src={`${CDN}/YoxdiNMevOMQgkXZ.webp`}
                    alt="ALFA NERO superyacht profile"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-8 md:gap-12 min-w-[60px] md:min-w-[100px]">
                  <div className="text-right">
                    <p className="text-sm md:text-2xl font-light">2,159 GT</p>
                    <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-black/50 font-bold">Gross Tonnage</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm md:text-2xl font-light">5,500nm</p>
                    <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-black/50 font-bold">Range</p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-6">
                <div className="flex items-center gap-2 justify-center mb-1">
                  <div className="w-16 md:w-24 h-px bg-black/30" />
                  <span className="text-base md:text-3xl font-light">82m (269 ft)</span>
                  <div className="w-16 md:w-24 h-px bg-black/30" />
                </div>
                <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-black/50 font-bold">Length Overall</p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link href="/technical" className="btn-luxury">Full Specifications</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Life On Deck */}
      <section className="py-24 md:py-32 bg-white overflow-hidden">
        <div className="container max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="section-label mb-4">Life On Deck</p>
              <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>Outdoor & Adventure</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <Link href="/outdoor-living" className="group block">
                <div className="image-frame aspect-[4/3] overflow-hidden relative mb-6">
                  <img src={`${CDN}/kZTRjDHOrESFtISr.webp`} alt="ALFA NERO outdoor living" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-3 group-hover:text-red-600 transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                  Outdoor Living
                </h3>
                <p className="text-black/60 leading-relaxed mb-4 font-light">
                  Three distinct outdoor dining areas, dedicated sun decks on two levels, and the infinity pool that redefined aft deck design.
                </p>
                <span className="inline-block border border-black text-black text-xs uppercase tracking-[0.15em] px-6 py-3 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all duration-300">
                  Explore
                </span>
              </Link>
              <Link href="/water-toys" className="group block">
                <div className="image-frame aspect-[4/3] overflow-hidden relative mb-6">
                  <img src={`${CDN}/tdiSoERkjbuufbfY.webp`} alt="ALFA NERO water toys" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h3 className="text-xl md:text-2xl font-light mb-3 group-hover:text-red-600 transition-colors" style={{ fontFamily: "var(--font-display)" }}>
                  Water Toys & Tenders
                </h3>
                <p className="text-black/60 leading-relaxed mb-4 font-light">
                  Led by a Vanquish VQ45 chase boat, ALFA NERO carries one of the most comprehensive toy inventories in her class, from WaveRunners and Jetboards to a jellyfish-protected sea pool.
                </p>
                <span className="inline-block border border-black text-black text-xs uppercase tracking-[0.15em] px-6 py-3 group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all duration-300">
                  Explore
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative h-[70vh] bg-black flex items-center justify-center">
        <img
          src={`${CDN}/kZTRjDHOrESFtISr.webp`}
          alt="ALFA NERO"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/50" />
        <FadeIn>
          <div className="relative z-10 text-center text-white px-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal mb-8" style={{ fontFamily: "var(--font-display)" }}>
              Available for<br />Acquisition
            </h2>
            <p className="text-xl font-light mb-12 text-white/80 max-w-2xl mx-auto">
              82 metres of award-winning design. Comprehensively refitted 2024.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/broker" className="bg-white text-black px-12 py-5 text-xs font-heading tracking-wider uppercase hover:bg-red-600 hover:text-white transition-all duration-300 inline-block">
                Enquire
              </Link>
              <Link href="/gallery" className="border border-white text-white px-12 py-5 text-xs font-heading tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300 inline-block">
                View Gallery
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
