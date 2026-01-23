import Image from "next/image";
import FadeIn from "./FadeIn";

const projects = [
  {
    title: "Villa Madrid",
    desc: "Avant-garde design in the heart of the capital. High privacy and thermal comfort.",
    img: "https://source.unsplash.com/800x600/?modern,villa,madrid,concrete",
  },
  {
    title: "Villa Estepona",
    desc: "Mediterranean luxury with panoramic sea views. Open concept architecture.",
    img: "https://source.unsplash.com/800x600/?modern,villa,mediterranean,sea",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
            Current Projects
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-700">
            A curated selection of high-performance luxury homes.
          </p>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((p) => (
            <FadeIn key={p.title} className="overflow-hidden rounded-xl border border-zinc-200">
              <div className="relative h-64 w-full">
                <Image src={p.img} alt={p.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-zinc-900">{p.title}</h3>
                <p className="mt-2 text-zinc-600">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}