import Feature from "./feature";

export default function Board() {
  const features = [
    {
      text: "Add, rename, and organize custom columns to match your workflow.",
      icon: "bi:kanban",
    },
    {
      text: "Move tickets smoothly between columns as work progresses.",
      icon: "proicons:square-drag",
    },
    {
      text: "Sort tickets by last update to surface the most recent work.",
      icon: "iconoir:sort",
    },
    {
      text: "Filter tickets using natural language instead of complex rules.",
      icon: "mdi:magic",
    },
  ];
  return (
    <Feature
      title="Workflow Control"
      description="Manage, prioritize, and move work seamlessly across customizable workflows with AI-assisted filtering."
      featureItems={features}
      image="/images/homepage/thin-border/boards.png"
    />
  );
}
