import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-8">
        <h1 className="text-6xl mb-4" style={{ fontFamily: "var(--font-display)" }}>404</h1>
        <p className="text-black/60 mb-8 font-light">Page not found</p>
        <Link href="/" className="btn-luxury">Return Home</Link>
      </div>
    </div>
  );
}
