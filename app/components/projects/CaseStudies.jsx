"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const CaseStudies = ({ image, title, description }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      if (isHovering) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", updateCursorPosition);
    return () => window.removeEventListener("mousemove", updateCursorPosition);
  }, [isHovering]);

  return (
    <>
      {/* Custom Cursor */}
      <div
        className={`fixed pointer-events-none transition-opacity duration-200 ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: cursorPosition.x - 40,
          top: cursorPosition.y - 40,
          transform: "translate(-50%, -50%)",
          zIndex: 50,
        }}
      >
        <div className="flex items-center justify-center w-20 h-20 bg-[#f58327] rounded-full">
          <span className="text-black text-sm unbounded-600">VIEW</span>
        </div>
      </div>

      {/* Case Study Card */}
      <div
        className="relative flex flex-col items-center justify-center custom-break-1200:flex-row w-full text-white rounded-lg overflow-hidden shadow-lg gap-4 mb-8 group cursor-none"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Left Side: Image */}
        <div className="relative w-full xl:w-[404px] lg:w-full sm:w-full custom-break-1200:w-[404px] h-96 lg:h-[65vh] xl:h-[404px] custom-break-1200:h-[404px] rounded-3xl overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title || "Case study image"}
              fill
              style={{ objectFit: "cover" }}
              className="absolute inset-0"
            />
          ) : (
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">No image available</span>
            </div>
          )}
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col w-full xl:w-[946px] lg:w-full 2xl:w-[1026px] custom-break-1200:w-[719.44px] h-[322px] md:h-[273.2px] lg:h-[276px] xl:h-[404px]  custom-break-1200:h-[404px] p-4 lg:p-6 rounded-3xl bg-[#161616] border border-transparent transition-border group-hover:border-[#5d5d5d]">
          <div className="flex flex-col h-full justify-between">
            <div>
              <p className="uppercase mb-2">
                <span className="text-[#F58327] bg-[#222222] text-xs lg:text-[0.688rem] leading-[24px] lg:leading-[1.375rem] align-middle text-center font-[900] inline rounded-full p-1 lg:p-2 satoshi">
                  Case Study
                </span>
              </p>

              <h3 className="text-lg leading-[25px] lg:text-xl font-bold mb-4 unbounded-400">
                {title || "Untitled Case Study"}
              </h3>
              <p className="text-gray-300 text-[16px] lg:text-base satoshi font-normal">
                {description || "No description available"}
              </p>
            </div>
            <div className="flex flex-row justify-between items-center w-[18vw] md:w-[12vw] gap-2 text-[12px] leading-[24px]">
              {/* "Learn More" Text */}
              <div className="uppercase text-nowrap unbounded-400  custom-break-1200:hidden">
                Learn More
              </div>

              {/* Arrow */}
              {/* Arrow Container */}
              <div className="arrow align-middle rounded-full border border-[#5d5d5d] w-6 h-6 p-1 flex items-center justify-center  custom-break-1200:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  className="w-6 h-6"
                  style={{
                    fill: "currentColor", // Ensures color is inherited
                  }}
                >
                  <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
