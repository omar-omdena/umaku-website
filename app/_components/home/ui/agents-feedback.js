import Feature from "./feature";

export default function AgentsFeedback() {
  const features = [
    {
      text: "Measures how well sprint work aligns with goals, scope, and planned outcomes.",
      icon: "mdi:target-arrow",
    },
    {
      text: "Evaluates CI/CD practices, automation, and operational readiness.",
      icon: "mdi:settings-outline",
    },
    {
      text: "Assesses maintainability, readability, structure, and best practices.",
      icon: "mdi:code",
    },
    {
      text: "Analyzes defect detection, resolution speed, and production risk.",
      icon: "mdi:shield-alert-outline",
    },
  ];
  return (
    <Feature
      title="AI Sprint Review"
      description="AI-generated sprint evaluations covering quality, compliance, risks, and delivery performance."
      featureItems={features}
      image="/images/homepage/thin-border/agents-feedback.png"
    />
  );
}
