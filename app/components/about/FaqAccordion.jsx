"use client";
import { useState } from "react";

const FaqAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-3xl mb-4 transition-all duration-300 text-white ${
        isOpen ? "bg-[#161616]" : "bg-[#161616] hover:bg-[#232323]"
      }`}
    >
      {/* Question Section */}
      <div
        className={`flex justify-between items-center p-4 md:p-6 cursor-pointer transition-all duration-300 ${
          isOpen ? "" : "hover:pl-6 md:hover:pl-10"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Question Text */}
        <h3 className="text-sm md:text-[1rem] font-light unbounded-300 flex-1 mr-4">
          {question}
        </h3>

        {/* Expand/Collapse Button */}
        <button className="w-8 h-8 flex-shrink-0 bg-[#F58327] text-white flex justify-center items-center rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            style={{
              userSelect: "none",
              width: "50%",
              height: "50%",
              display: "inline-block",
              fill: "rgb(13, 13, 13)",
              flexShrink: 0,
            }}
          >
            <g>
              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
            </g>
          </svg>
        </button>
      </div>

      {/* Answer Section */}
      {isOpen && (
        <div className="px-6 md:px-20 pb-4 text-[#A2A2A2]">
          <p className="text-sm md:text-[1rem] leading-relaxed satoshi">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqAccordion;
