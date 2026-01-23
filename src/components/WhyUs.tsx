import FadeIn from "./FadeIn";

export default function WhyUs() {
  return (
    <section id="philosophy" className="bg-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <FadeIn>
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">
            The Habitaria Standard
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-700">
            A precise, client-centered approach delivering performance, aesthetics, and certainty.
          </p>
        </FadeIn>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <FadeIn className="rounded-xl border border-zinc-200 bg-white p-6">
            <h3 className="text-lg font-medium text-zinc-900">Customization</h3>
            <p className="mt-2 text-zinc-600">
              Tailored layouts, finishes, and systems—your home reflects your vision.
            </p>
          </FadeIn>
          <FadeIn className="rounded-xl border border-zinc-200 bg-white p-6">
            <h3 className="text-lg font-medium text-zinc-900">Fixed Budgets</h3>
            <p className="mt-2 text-zinc-600">
              Transparent costing with disciplined project controls—no surprises.
            </p>
          </FadeIn>
          <FadeIn className="rounded-xl border border-zinc-200 bg-white p-6">
            <h3 className="text-lg font-medium text-zinc-900">Timeline Guarantee</h3>
            <p className="mt-2 text-zinc-600">
              Optimized workflows and prefabrication ensure your home is delivered on schedule.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}