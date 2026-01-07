import Feature from "./feature";

export default function Roadmap() {
  const features = [
    {
      text: "Create and schedule sprints with clear goals and timeline.",
      icon: "mdi:calendar-outline",
    },
    {
      text: "Review finished sprints and delivered work at a glance.",
      icon: "fluent:checkmark-square-24-regular",
    },
    {
      text: "Preview planned sprints and prepare work ahead of time.",
      icon: "mdi:clock-outline",
    },
    {
      text: "Sprint's timeline displayed on a clear, interactive timeline chart.",
      icon: "bi:bar-chart-steps",
    },
  ];
  return (
    <Feature
      title="Sprint Timeline"
      description="Plan, track, and visualize sprints across your project timeline —
            from upcoming work to completed deliveries."
      featureItems={features}
      image="/images/homepage/thin-border/roadmap.png"
    />
  );
}
