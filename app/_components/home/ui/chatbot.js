import Feature from "./feature";

export default function Chatbot() {
  const features = [
    {
      text: "Understands project goals, charter, tech stack, and documentation.",
      icon: "mdi:brain",
    },
    {
      text: "Answers questions directly from the project’s source code.",
      icon: "mdi:code",
    },
    {
      text: "All discussions are saved and can be continued anytime.",
      icon: "mdi:clock-outline",
    },
  ];
  return (
    <Feature
      title="Project-Aware AI Assistant"
      description="A dedicated AI assistant for each project, with full awareness of its context, codebase, and history."
      featureItems={features}
      image="/images/homepage/thin-border/chatbot.png"
    />
  );
}
