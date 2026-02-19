import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/10">
      <div className="container mx-auto py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl tracking-[0.1em] mb-4" style={{ fontFamily: "var(--font-display)" }}>
              ALFA NERO
            </h3>
            <p className="text-black/60 text-sm leading-relaxed font-light">
              82-metre Oceanco superyacht. Built 2007, comprehensively refitted 2024. Available for acquisition.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase font-medium mb-4">Explore</h4>
            <nav className="space-y-2">
              {[
                { href: "/history", label: "History & Provenance" },
                { href: "/technical", label: "Technical Specifications" },
                { href: "/gallery", label: "Gallery" },
                { href: "/exterior-designer", label: "Nuvolari Lenard" },
                { href: "/interior-designer", label: "Alberto Pinto" },
                { href: "/oceanco", label: "Oceanco" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-black/60 hover:text-red-600 transition-colors text-sm font-light">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase font-medium mb-4">Specifications</h4>
            <ul className="space-y-2 text-sm text-black/60 font-light">
              <li>Length: 82m (269ft)</li>
              <li>Builder: Oceanco</li>
              <li>Year: 2007 / Refit 2024</li>
              <li>Guests: 12</li>
              <li>Staterooms: 6 + Staff</li>
              <li>Crew: 28</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.15em] uppercase font-medium mb-4">Enquire</h4>
            <p className="text-black/60 text-sm font-light mb-4">
              For viewing arrangements and acquisition details, please refer to your yacht broker.
            </p>
            <Link
              href="/broker"
              className="inline-block border border-black text-black text-xs uppercase tracking-[0.15em] px-6 py-3 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300"
            >
              Enquire
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-black/40 text-xs">
            &copy; {new Date().getFullYear()} ALFA NERO. All rights reserved.
          </p>
          <p className="text-black/40 text-xs">
            YEAR 2007 · REFIT 2024
          </p>
        </div>
      </div>
    </footer>
  );
}
