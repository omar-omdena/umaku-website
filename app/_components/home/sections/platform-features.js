"use client";

import AgentsFeedback from "../ui/agents-feedback";
import Board from "../ui/board";
import Chatbot from "../ui/chatbot";
import ProjectOverview from "../ui/project-overview";
import Roadmap from "../ui/roadmap";
import Tabs from "../ui/tabs";
import Tickets from "../ui/tickets";

export function PlatfromFeatures() {
  const tabs = [
    {
      id: "overview",
      label: "Project Overview",
      component: ProjectOverview,
    },
    {
      id: "roadmap",
      label: "Roadmap & Sprints",
      component: Roadmap,
    },
    {
      id: "kanban",
      label: "Board & Backlog",
      component: Board,
    },
    {
      id: "ticket",
      label: "Tickets",
      component: Tickets,
    },
    {
      id: "feedback",
      label: "Agents Feedback",
      component: AgentsFeedback,
    },
    {
      id: "chatbot",
      label: "AI Chatbot",
      component: Chatbot,
    },
  ];

  return (
    <section className="section bg-[#F8F2F4] ">
      <div className="px-3 container mx-auto">
        <div className="text-center">
          <h2 className="text-center section-title">
            One System
            <br />
            One Source of Transparency
          </h2>
          <p className="section-description">
            Everything you need to manage the full development lifecycle
          </p>
        </div>
        <div className="mt-8">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
}
