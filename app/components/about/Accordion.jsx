"use client";
import { useState } from "react";

const Accordion = ({ number, title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const contentWithBreaks = content.split("<br/><br/>").map((text, index) => (
    <p key={index} className=" text-[1rem] leading-relaxed mb-4">
      {text}
    </p>
  ));

  return (
    <div
      className={`group w-[92vw] custom-break-1200:w-[100%] xl:w-[100%] mb-3 rounded-[1.8rem] border-[#444444] border overflow-hidden text-white transition-all duration-300 ${
        isOpen ? "bg-[#161616]" : "bg-[#232323]"
      }`}
    >
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center px-6 py-5 text-left rounded-[1.8rem] transition-all duration-300 ${
          isOpen
            ? "pl-6 text-[#F58327] cursor-default"
            : "hover:text-[#F58327] hover:pl-10"
        }`}
      >
        <span className="text-[0.875rem] lg:text-[1rem] leading-[1.313rem] lg:leading-[1.5rem] unbounded-300">
          {number}. {title}
        </span>

        <span
          className={`px-3 py-[0.20rem] rounded-lg flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-[#F58327]" : "bg-[#444444] group-hover:bg-[#F58327]"
          }`}
        >
          <span
            className={`inline-block transform text-[1.3rem] transition-transform duration-300 ${
              isOpen
                ? "text-[#444444] rotate-[-135deg]"
                : "text-white rotate-0 group-hover:text-[#444444]"
            }`}
          >
            +
          </span>
        </span>
      </button>

      {/* Accordion Content */}
      <div
        className={`transition-all duration-500 px-6 ${
          isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        {/* Render content as separate paragraphs with <br /> equivalent */}
        {contentWithBreaks}
      </div>
    </div>
  );
};

export default Accordion;
