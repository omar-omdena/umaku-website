import Image from "next/image";

export function OurProcess() {
  const steps = [
    {
      title: "AI Project Creation & Discovery",
      description: "Define goals, scope, backlog seeds, KPIs.",
    },
    {
      title: "Workspace & Team Formation",
      description:
        "Add members, assign roles, set permissions, connect GitHub.",
    },
    {
      title: "Delivery with Umaku Agents",
      description: "Kanban boards, backlog triage, sprints, checklists, bugs.",
    },
    {
      title: "Deployment, Monitoring & Continuous Improvement",
      description:
        "AI Score trends, risk detection, inactivity detection, automated alignment checks.",
    },
  ];

  return (
    <section className="section bg-[#E3D2D8]">
      <div className="px-3 container mx-auto">
        <div className="text-center">
          <h2 className="section-title">The Umaku Process</h2>
          <p className="section-description">
            How we help you build better software, step by step.
          </p>
        </div>
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row">
          <div className={`flex flex-col gap-[50px] flex-1`}>
            {steps.map((step, index, arr) => (
              <div key={index} className={`flex gap-10 items-stretch`}>
                <div
                  className={`relative z-10 ${
                    index != arr.length - 1
                      ? `before:absolute before:w-0.5 before:h-[calc(100%+50px)] before:bg-background-soft before:left-4.5`
                      : ""
                  }`}
                >
                  <span className="relative z-10 h-9 w-9 rounded-full bg-[#ddcbdb] inline-flex justify-center items-center text-text-secondary text-lg font-medium">
                    {index + 1}
                  </span>
                </div>
                <div className="shrink">
                  <h4 className="text-text-primary font-medium text-xl mb-1">
                    {step.title}
                  </h4>
                  <p className="font-normal text-text-secondary text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <Image
              src="/images/homepage/process.png"
              alt="Kanban board"
              width={550}
              height={100}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
