"use client";

import { useState } from "react";

// import ProjectOverview from "./project-overview";
// import Roadmap from "./roadmap";
// import Board from "./board";
// import Tickets from "./tickets";
// import AgentsFeedback from "./agents-feedback";
// import Chatbot from "./chatbot";

// const TAB_COMPONENTS = {
//   overview: ProjectOverview,
//   roadmap: Roadmap,
//   kanban: Board,
//   ticket: Tickets,
//   feedback: AgentsFeedback,
//   chatbot: Chatbot,
// };

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;
  // const ActiveComponent = activeTab ? TAB_COMPONENTS[activeTab] : null;

  return (
    <>
      <nav className="flex gap-6 border-b border-neutral-200 overflow-x-auto whitespace-nowrap">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 cursor-pointer flex-1 font-medium text-xs sm:text-sm md:text-base transition-colors ${
                isActive
                  ? "border-b-2 border-primary text-primary"
                  : "border-b-2 border-transparent text-neutral-500 hover:text-[#62475C]"
              }`}
            >
              <div className="whitespace-normal">{tab.label}</div>
            </button>
          );
        })}
      </nav>
      <div className="w-full py-6 text-secondary">
        {ActiveComponent ? <ActiveComponent /> : null}
      </div>
    </>
  );
}
