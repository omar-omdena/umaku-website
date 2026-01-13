"use client";

import { Icon } from "@iconify/react";
import { useState } from "react";

export function FAQs() {
  const faqs = [
    { text: "Who is Umaku designed for?", answer: "" },
    { text: "Is Umaku only for AI teams?", answer: "" },
    {
      text: "How is Umaku different from Jira with integrations?",
      answer: "",
    },
    { text: "Does Umaku replace managers or developers?", answer: "" },
    {
      text: "How does governance work without slowing teams down?",
      answer: "",
    },
    { text: "Can Umaku work alongside existing tools?", answer: "" },
  ];
  return (
    <section className="section bg-[#B1A4B6]">
      <div className="container mx-auto px-3">
        <h2 className="section-title text-center" style={{ color: "#FAF6F7" }}>
          Common Questions About Using Umaku
        </h2>
        <div className="mt-10 flex justify-center">
          <FAQsRaw
            faqs={faqs}
            color="#FAF6F7"
            iconColor="#62475C"
            answerColor="#5F4A52"
            borderColor="#00000014"
            className=" sm:4/5 md:w-3/5"
          />
        </div>
      </div>
    </section>
  );
}

function FAQsRaw({
  faqs,
  color = "",
  questionColor = "",
  answerColor = "",
  iconColor = "",
  borderColor = "",
  className = "",
}) {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <ul className={` ${className}`}>
      {faqs?.map((faq, index) => (
        <li
          className={`cursor-pointer px-4 py-4 border-(--faq-border) border-t ${
            index === faqs.length - 1 ? "border-b" : ""
          }`}
          onClick={() => setActiveItem(activeItem === index ? null : index)}
          style={{
            "--faq-text": questionColor || color,
            "--faq-answer": answerColor || color,
            "--faq-border": borderColor || color,
          }}
        >
          <div className={`flex justify-between gap-2`}>
            <span className="text-(--faq-text)">{faq.text}</span>
            <div>
              <Icon
                icon={
                  index === activeItem
                    ? "majesticons:minus"
                    : "majesticons:plus"
                }
                color={iconColor ? iconColor : color}
                width={18}
              />
            </div>
          </div>
          <div
            className={`grid transition-all duration-500 ease-in-out ${
              index === activeItem
                ? "grid-rows-[1fr] opacity-100 mt-2"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <p className="overflow-hidden text-(--faq-answer) pl-6 text-sm">
              {faq.answer}Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Ipsum impedit odit repellat molestias, laborum maxime
              incidunt nisi numquam nesciunt! Nemo sunt quibusdam quasi
              voluptatem quos omnis quod cumque possimus iste!
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
