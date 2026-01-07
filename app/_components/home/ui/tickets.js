import Feature from "./feature";

export default function Tickets() {
  const features = [
    {
      text: "Create tasks, report bugs, assign owners, set priority, labels, due dates, and time estimates.",
      icon: "wpf:create-new",
    },
    {
      text: "Document requirements using rich text and attach supporting files.",
      icon: "mdi:file-outline",
    },
    {
      text: "Submit code commits, send comments and mention teammates.",
      icon: "mdi:code",
    },
    {
      text: "Invoke a dedicated AI agent to analyze and review a ticket.",
      icon: "mdi:face-agent",
    },
  ];
  return (
    <Feature
      title="Ticket Details"
      description="Create, update, and manage tickets in a focused workspace — from assignment and estimates to AI-assisted review."
      featureItems={features}
      image="/images/homepage/thin-border/tickets.png"
    />
  );
}
