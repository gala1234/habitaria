import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative h-[100svh] w-full">
      <Image
        src="https://source.unsplash.com/1600x900/?modern,villa,concrete,dusk"
        alt="Modern concrete villa at dusk"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Building the Future of Living.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/80 md:text-xl">
          Exclusive single-family homes in Spain utilizing advanced SISMO building technology.
        </p>
      </div>
    </section>
  );
}