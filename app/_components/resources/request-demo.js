import { Icon } from "@iconify/react";
import Button from "../button";

export function RequestDemo() {
  const items = [
    "AI projects are growing beyond experimentation",
    "Teams are distributed across locations",
    "Leaders need visibility without slowing delivery",
    "Quality issues surface too late",
  ];
  return (
    <section className="section bg-background-soft">
      <div className="container mx-auto px-3">
        <div className="p-20 rounded-2xl lg:flex lg:justify-between bg-[linear-gradient(94.03deg,#62485D_0%,#8C798D_49.5%,#BAAFC1_102.96%)]">
          <div className="lg:w-2/5">
            <h2 className="text-white font-bold text-4xl mb-8">
              When Teams Turn to Umaku
            </h2>
            <Button
              type="secondary-fill"
              text="Request Demo"
              className="hidden lg:block"
            />
          </div>
          <ul className="flex flex-col  gap-4 lg:w-fit text-white">
            {items.map((item) => (
              <li className="flex items-center gap-1">
                <div>
                  <Icon
                    icon="mdi:check-circle-outline"
                    width={20}
                    className="text-white"
                  />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button
            type="secondary-fill"
            text="Request Demo"
            className="mt-8 lg:hidden"
          />
        </div>
      </div>
    </section>
  );
}
