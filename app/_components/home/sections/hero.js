import { Icon } from "@iconify/react";
import Button from "../../button";
import Image from "next/image";

export function Hero() {
  const items = [
    "Track delivery readiness in real time",
    "Analyze code consistency with business logic",
    "Monitor development progress across teams",
    "Review code and surface improvement signals",
    "Generate and validate test cases",
    "Continuously assess quality and risk",
  ];
  return (
    <section className="section bg-[linear-gradient(105.38deg,#62475C_1.9%,#E1D0D6_56.36%,#C1B9CC_118.69%)]">
      <div className="px-3 container mx-auto flex gap-5 ">
        <div className="lg:w-[45%]">
          <h1 className="mb-5 font-medium text-white text-3xl sm:text-4xl md:text-5xl leading-10 sm:leading12 md:leading-14">
            <span className="block">One Platform</span>
            Mastered for AI Product Development
          </h1>
          <div className="text-sm sm:text-base text-white">
            <p className="mb-2 text-white">
              Unlike generic project management tools, Umaku is purpose-built
              for AI teams to —
            </p>
            <ul className="pl-4 text-white font-normal">
              {items.map((item, index) => (
                <li key={index} className="flex items-center gap-3 mb-2.5">
                  <Icon
                    icon="mdi:check-circle-outline"
                    width={20}
                    className="text-white"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-2 duration-100 font-medium mt-10">
              <Button
                type="secondary-fill"
                text="Read the Guide"
                size={3}
                to="/guide"
                className="px-12"
              />
              <Button
                type="secondary-outline"
                text="Explore the Platform"
                size={3}
                to="/sign-up"
                icon="solar:arrow-right-linear"
                right
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:items-center">
          <div className="[perspective:1200px]">
            {/* <Image
              src="/hero_gif_2.gif"
              alt="Kanban board"
              width={1000}
              height={500}
              // className="rounded-2xl p-5 bg-[#d5c7d2]"
              className="rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.35)] [transform:rotateY(-18deg)_rotateX(6deg)] [transform-style:preserve-3d]"
            /> */}
            <Image
              src="/kanban_board.png"
              alt="Kanban board"
              width={600}
              height={10}
              // className="rounded-2xl p-5 bg-[#d5c7d2]"
              className="rounded-2xl"
            />
            {/* <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="min-w-150 min-h-96 w-full h-auto pointer-events-none block rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.35)] [transform:rotateY(-18deg)_rotateX(6deg)] [transform-style:preserve-3d]"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video> */}
          </div>
        </div>
      </div>
    </section>
  );
}
