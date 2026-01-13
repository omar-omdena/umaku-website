import { Icon } from "@iconify/react";
import Image from "next/image";
import Button from "../button";

export function PlatformGuideBook() {
  const items = [
    "Board view & sprint governance",
    "Roadmap & delivery planning",
    "Backlog orchestration",
    "Team & contribution analytics",
    "Governance signals and visibility model",
  ];
  return (
    <section className="section">
      <div className="container mx-auto px-3">
        <div>
          <div className="text-center mb-8">
            <h2 className="section-title">Umaku Guide Book</h2>
            <p className="text-text-muted text-sm md:text-base">
              A practical walkthrough of how Umaku governs AI development — end
              to end.
            </p>
          </div>
          <div className="flex flex-col-reverse md:flex-row rounded-xl overflow-hidden">
            <div className="p-6 bg-[#F9FAFB] md:w-1/2 md:py-20 md:pl-16">
              <h3 className="text-text-primary text-lg md:text-xl font-semibold mb-4">
                Understanding the Umaku Platform
              </h3>
              <p className="text-text-secondary mb-8">
                A structured guide to how Umaku supports AI teams through
                intelligent governance — covering boards, roadmaps, backlogs,
                analytics, and development oversight.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {items.map((item) => (
                  <li className="flex items-center gap-1 text-text-secondary text-sm">
                    <Icon
                      icon="mdi:check-circle-outline"
                      width={18}
                      className="text-text-secondary"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                type="primary-fill"
                text="Read the Platform Guide"
                icon="solar:arrow-right-linear"
                size={2}
                to="/sign-up"
                right
              />
            </div>
            <div className="p-6 bg-[#EEF2FF]">
              <Image
                src="/kanban_board.png"
                alt="asd"
                width={600}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
