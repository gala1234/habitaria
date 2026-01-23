import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-14 text-white">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Habitaria</h3>
            <p className="mt-2 text-sm text-white/70">High-performance luxury homes.</p>
          </div>
          <div className="text-sm">
            <p>
              Contact: <a href="mailto:info@habitaria.co" className="underline">info@habitaria.co</a>
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-sm text-white/60">
          <Link href="#" className="hover:text-white/90">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}