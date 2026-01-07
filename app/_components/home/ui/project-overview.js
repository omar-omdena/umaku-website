import Feature from "./feature";

export default function ProjectOverview() {
  const features = [
    {
      text: "Key project details, timeline, members, and overall progress in one view.",
      icon: "mdi:information-box-outline",
    },
    {
      text: "Sprint-by-sprint AI evaluation to track performance and improvement.",
      icon: "mdi:chart-line",
    },
    {
      text: "Ticket distribution across workflow stages for instant clarity.",
      icon: "mdi:chart-donut",
    },
    {
      text: "AI-flagged tasks that may fall outside the project scope.",
      icon: "humbleicons:ai",
    },
  ];
  return (
    <Feature
      title="The Project at a Glance"
      description=" A centralized snapshot of your project’s health, goals, and progress
            — combining operational insights with AI-driven evaluation to keep
            teams aligned and focused."
      featureItems={features}
      image="/images/homepage/thin-border/project-overview.png"
    />
  );
}
