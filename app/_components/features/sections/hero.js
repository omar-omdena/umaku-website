import Button from "../../button";
// linear-gradient(150.81deg, rgb(101, 74, 94) -1.41%
// -0.41%
// , rgb(217, 199, 206) 70.65%, rgb(205, 193, 208) 99.61%)
export function Hero() {
  return (
    <section className="section bg-[linear-gradient(150.81deg,rgb(101,74,94)_-1.41%,rgb(217,199,206)_47.65%,rgb(205,193,208)_99.61%)]">
      <div className="px-3 container mx-auto flex flex-col items-center py-20">
        <h1 className="mb-8 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-center md:leading-10 lg:leading-14 w-fit max-w-162.5">
          Features built for AI product reality — not generic workflows
        </h1>
        <p className="mb-10 text-text-muted max-w-137.5 text-center">
          Umaku embeds intelligence directly into how AI products move from
          notebooks to production — planning, reviewing, and governing with real
          context, not checklists.
        </p>
        <div className="flex gap-2 items-center">
          <Button
            type="secondary-fill"
            text="Request a Demo"
            size={3}
            to="/demo"
          />
          <Button
            type="secondary-outline"
            text="See How it Works"
            size={3}
            to="/demo"
          />
        </div>
      </div>
    </section>
  );
}
