import FadeIn from "./FadeIn";
import { Zap, Waves, Timer, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Zap,
    title: "Energy Efficiency (A+)",
    desc: "Superior thermal envelope with SISMO insulating forms reduces energy consumption.",
  },
  {
    icon: Waves,
    title: "Acoustic Insulation",
    desc: "Dense, layered construction significantly dampens exterior and interior noise.",
  },
  {
    icon: Timer,
    title: "Speed of Construction",
    desc: "Prefabricated panels streamline on-site work, accelerating delivery timelines.",
  },
  {
    icon: ShieldCheck,
    title: "Earthquake Resistance",
    desc: "Monolithic, reinforced structure offers excellent seismic performance and stability.",
  },
];

export default function Technology() {
  return (
    <section id="technology" className="bg-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
            The SISMO Building System
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-700">
            Insulating concrete forms engineered for performance, comfort, and precision.
          </p>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map(({ icon: Icon, title, desc }) => (
            <FadeIn key={title} className="rounded-xl border border-zinc-200 bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-gold/10 p-3 text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-zinc-900">{title}</h3>
                  <p className="mt-1 text-zinc-600">{desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}