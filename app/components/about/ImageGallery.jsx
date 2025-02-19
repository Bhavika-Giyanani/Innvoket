"use client";
import { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
const ImageGallery = ({ leftImages, rightImages }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col w-[80vw] md:w-[88vw] custom-break-1200:w-[95vw] xl:w-[95vw] 2xl:w-[65vw] mx-auto mb-10 gap-3">
        <div className="mx-auto custom-break-1200:mx-0 xl:mx-0 w-[80vw] flex flex-col custom-break-1200:flex-row xl:flex-row items-center justify-center custom-break-1200:justify-start xl:justify-start gap-3">
          <div className="wrapper">
            <span className="text-[#F58327] bg-[#232323] text-[0.75rem] xl:text-[0.688rem] leading-[1.5rem] xl:leading-[1.375rem] align-middle text-center font-black inline rounded-full p-2 uppercase satoshi">
              Gallery
            </span>
          </div>

          <h2 className="unbounded-400 text-white text-[1.75rem] lg:text-[2.25rem] custom-break-1200:text-[2.5rem] xl:text-[2.5rem] text-center leading-[1.938rem] lg:leading-[2.5rem] custom-break-1200:leading-[2.75rem] xl:leading-[2.75rem]">
            Our Agency Snaps
          </h2>
        </div>

        <div className="flex justify-center items-center gap-2 w-90">
          <div className="right w-[60%] 2xl:w-[70%] hidden custom-break-1200:block xl:block"></div>
          <div className="left text-[#9D9D9D] text-center custom-break-1200:text-left xl:text-left w-full custom-break-1200:w-[40%] xl:w-[40%] 2xl:w-[30%] mx-auto text-[1.063rem] xl:text-[1.125rem] leading-[1.625rem] xl:leading[1.688rem] md:px-20 lg:px-44 custom-break-1200:px-0 xl:px-0 satoshi">
            <p>
              From team outings and office shenanigans to special events and
              celebrations, these photos capture the essence of our vibrant
              culture and the bonds that unite us.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full 2xl:w-[95vw] gap-4 p-4 mx-auto">
        {leftImages.map((leftImage, index) => {
          const isEvenRow = index % 2 === 1;

          return (
            <div
              key={`row-${index}`}
              className={`flex ${"custom-break-1200:flex-row flex-col h-[75vh] md:h-[70vh] lg:h-[85vh] xl:h-[35vh] 2xl:h-[70vh] w-full gap-4"}`}
            >
              {/* Left Image Div */}
              <div
                className={`rounded-3xl overflow-hidden transition-[width] duration-500 ease-in-out ${
                  isEvenRow
                    ? hoveredIndex === index
                      ? "custom-break-1200:w-1/3"
                      : "custom-break-1200:w-2/3"
                    : hoveredIndex === index
                    ? "custom-break-1200:w-2/3"
                    : "custom-break-1200:w-1/3"
                }`}
                onMouseEnter={() => !isEvenRow && setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={leftImage}
                  alt={`Left ${index}`}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    isEvenRow
                      ? hoveredIndex === index
                        ? "custom-break-1200:grayscale"
                        : "custom-break-1200:grayscale-0"
                      : hoveredIndex === index
                      ? "custom-break-1200:grayscale-0"
                      : "custom-break-1200:grayscale"
                  }`}
                />
              </div>

              {/* Right Image Div */}
              <div
                className={`rounded-3xl overflow-hidden transition-[width] duration-500 ease-in-out ${
                  isEvenRow
                    ? hoveredIndex === index
                      ? "custom-break-1200:w-2/3"
                      : "custom-break-1200:w-1/3"
                    : hoveredIndex === index
                    ? "custom-break-1200:w-1/3"
                    : "custom-break-1200:w-2/3"
                }`}
                onMouseEnter={() => isEvenRow && setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={rightImages[index]}
                  alt={`Right ${index}`}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    isEvenRow
                      ? hoveredIndex === index
                        ? "custom-break-1200:grayscale-0"
                        : "custom-break-1200:grayscale"
                      : hoveredIndex === index
                      ? "custom-break-1200:grayscale"
                      : "custom-break-1200:grayscale-0"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

ImageGallery.propTypes = {
  leftImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  rightImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageGallery;
