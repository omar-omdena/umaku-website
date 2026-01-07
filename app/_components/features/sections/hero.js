import Button from "../../button";

export function Hero() {
  return (
    <section className="section bg-[linear-gradient(150.81deg,#654A5E_-0.41%,#D9C7CE_22.65%,#CDC1D0_46.61%)]">
      <div className="px-3 container mx-auto">
        <h1>Features built for AI product reality — not generic workflows</h1>
        <p>
          Umaku embeds intelligence directly into how AI products are planned,
          reviewed, tested, and governed — using context, not checklists.
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
