import { Icon } from "@iconify/react";

export function WhyUmaku() {
  const items = [
    { icon: "carbon:watsonx-governance", text: "Centralized AI Governance" },
    { icon: "carbon:network-2", text: "Built for Federated Teams" },
    { icon: "iconoir:calendar-check", text: "Predictable Delivery" },
    { icon: "fluent:people-team-20-regular", text: "Integrated Collaboration" },
    {
      icon: "radix-icons:magnifying-glass",
      text: "Continuous Quality Oversight",
    },
  ];

  return (
    <section className="section bg-background-soft">
      <div className="px-3 container mx-auto">
        <h2 className="section-title text-center">Why Teams Choose Umaku</h2>
        <div className="grid mx-auto grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-16">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-background-muted pb-5 pl-5 pr-5 rounded-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-background-soft flex justify-center items-center mx-auto mb-3">
                <Icon icon={item.icon} width={30} className="text-primary" />
              </div>
              <h5 className="max-w-48 mx-auto text-center font-medium text-text-primary">
                {item.text}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
