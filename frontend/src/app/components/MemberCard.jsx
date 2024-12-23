"use client";

import Image from "next/image";

export function MemberCard({
  orangeText,
  whiteText,
  name,
  designation,
  imageSrc,
}) {
  return (
    <div className="w-full sm:w-[95vw] md:w-[70vw] lg:w-[30vw] 2xl:w-full mx-auto">
      {/* First div with image and text overlay */}
      <div className="relative overflow-hidden h-[82vh] md:h-[85vh] custom-break-1200:h-[73vh] lg:h-[65vh] xl:h-[52vh] 2xl:h-[30vh] rounded-t-3xl shadow-inner bg-[#161616] group custom-bottom-shadow">
        <div className="relative inset-0 py-4 flex flex-col justify-start transition-transform duration-300 group-hover:-translate-y-8 mt-6">
          <h2 className="text-[#F38227] text-4xl md:text-5xl font-bold unbounded-600 text-left ">
            {orangeText}
          </h2>
          <p className="text-white text-lg text-nowrap md:text-xl lg:text-[0.75rem] xl:text-xl tracking-wider unbounded-400 leading-[0.1] text-right">
            {whiteText}
          </p>
        </div>
        {/* Image container */}
        <div className="absolute bottom-1 w-full flex justify-center items-end h-[300px] md:h-[450px] transition-transform duration-300 group-hover:translate-y-8 mt-10">
          <Image
            src={imageSrc}
            alt={name}
            className="object-contain object-center grayscale z-30"
            width={280}
            height={280}
          />
        </div>

        {/* Plus button */}
        <div className="relative h-full">
          <button className="absolute bottom-32 md:bottom-36 lg:bottom-50 left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-xl flex items-center justify-center z-40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              focusable="false"
              color="var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(38, 48, 22))"
              style={{
                userSelect: "none",
                width: "90%",
                height: "90%",
                display: "inline-block",
                fill: "var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(38, 48, 22))",
                flexShrink: 0,
              }}
            >
              <g
                color="var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(38, 48, 22))"
                weight="regular"
              >
                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z" />
              </g>
            </svg>
          </button>
        </div>
      </div>

      {/* Second div with name and designation */}
      <div className="bg-[#161616] p-4 md:p-6 lg:px-2 rounded-3xl text-center">
        <h3 className="text-white text-xl md:text-2xl font-bold unbounded-400">
          {name}
        </h3>
        <p className="text-[#D1D1D1] text-sm md:text-base satoshi">
          {designation}
        </p>
      </div>
    </div>
  );
}
