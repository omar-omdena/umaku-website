import { Icon } from "@iconify/react";
import Image from "next/image";
import Card from "./card";

export default function Feature({ title, description, featureItems, image }) {
  return (
    <Card>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-10">
        <div className="flex flex-col">
          <h3 className="text-text-primary text-3xl font-medium mb-3">
            {title}
          </h3>
          <p className="text-text-muted mb-10">{description}</p>
          <ul className="flex flex-col gap-5 text-base text-text-secondary font-normal">
            {featureItems.map((feat, index) => (
              <li key={index} className="flex gap-2">
                <Icon icon={feat.icon} width={25} />
                <span>{feat.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Image src={image} width={550} height={200} alt="asd" />
        </div>
      </div>
    </Card>
  );
}
