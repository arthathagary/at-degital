import React from "react";
import Accordian from "@/components/ui/Accordian";

const FaqSection = () => {
  const faqs = [
    {
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
    {
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
    },
  ];
  return (
    <section className="flex flex-col justify-center px-5 mt-6 md:my-16 w-full items-stretch md:max-w-[896px] md:mx-auto">
      <div>
        <h2 className="text-primary-color text-xl font-semibold text-center mb-6  md:text-[27px] md:flex md:items-center md:justify-center md:gap-2">
          Frequently asked
          <span className="block md:flex text-center">questions</span>
        </h2>
        <div className="w-full">
          {faqs.map((faq, index) => (
            <Accordian
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
