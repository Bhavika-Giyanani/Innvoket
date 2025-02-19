"use client";
import Accordion from "../../components/about/Accordion"; 
import BrandMarquee from "../../components/about/BrandMarquee";
import FaqSection from "../../components/about/FaqSection";
import ImageGallery from "../../components/about/ImageGallery";
import TeamMembers from "../../components/about/TeamMembers";
import { motion } from "framer-motion";
import FounderProfileCard from "../../components/about/FounderProfileCard";
import config from "../../config";
import parse from "html-react-parser";
import StageProcess from "../../components/about/StageProcess";
import BrandSlider from "../../components/home/BrandSlider";
const about = () => {
  const { about } = config;
  const { leftImages, rightImages } = about.imageGallery;

  return (
    <div className="overflow-hidden py-10">
      <div className="wrapper pt-5 h-[50vh] lg:mb-[3rem] custom-break-1200:mb-[15rem] xl:mb-[17rem] flex items-center justify-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut" },
          }}
          className="celestial-solutions w-[95%] m-auto h-[171.6px] md:h-[263.12px] lg:h-[417.52px] xl:h-[965.68px] 2xl:h-[70vh] flex flex-col justify-center md:justify-end items-center rounded-[2rem]"
        > 
          <motion.h1
            initial={{ y: -200 }}
            animate={{ y: 0, transition: { duration: 2, ease: "easeInOut" } }}
            className="text-center unbounded-400 md:mb-8 text-[1.688rem] custom-break-1200:text-[3.125rem] lg:text-[2.5rem] xl:text-[3.125rem] leading-[1.875rem] custom-break-1200:leading-[3.438rem] lg:leading-[2.75rem] xl:leading-[3.438rem] lg:px-[10rem] xl:px-[15rem] 2xl:px-[10rem]"
          >
            {parse(about.welcome)}
          </motion.h1>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="flex flex-col items-center justify-center"
      >
        <div className="flex flex-col justify-center items-center w-[95vw] custom-break-1200:w-[92vw] xl:w-[95vw] 2xl:w-[95vw] gap-9 md:gap-7 lg:gap-14 xl:gap-6 mx-auto">
          <p className="mt-5 xl:mb-[2rem]  flex flex-col custom-break-1200:flex-row xl:flex-row justify-center  custom-break-1200:self-start xl:self-start items-center gap-3">
            <span className="text-[#F58327] bg-[#232323] text-[0.75rem] xl:text-[0.688rem] text-nowrap leading-[1.5rem] xl:leading-[1.375rem] font-black inline rounded-full px-3 py-1 uppercase satoshi">
              WHO WE ARE
            </span>
            <h2 className="unbounded-400 text-center custom-break-1200:text-left xl:text-left text-white text-[1.75rem] lg:text-[2.25rem] xl:text-[2.5rem] leading-[1.938rem] lg:leading-[2.5rem] xl:leading-[2.75rem]">
              About our Company
            </h2>
          </p>
          <div className="w-[95vw] custom-break-1200:w-[92vw] xl:w-[95vw] 2xl:w-[95vw] h-fit text-gray-300 py-2 flex flex-col custom-break-1200:flex-row xl:flex-row gap-8 xl:gap-16">
            {/* Left Section */}
            <div className="w-[92vw] custom-break-1200:w-[50%] xl:w-[50%] mx-auto">
              <div>
                <h1 className="text-[#858585] font-normal text-[1.375rem] lg:text-[1.625rem] xl:text-[1.875rem] leading-[1.938rem] lg:leading-[2.25rem] xl:leading-[2.438rem] satoshi">
                  {parse(about.aboutContent)}
                </h1>
              </div>
            </div>
            {/* Accordion Section */}
            <div className="my-3 w-full custom-break-1200:w-[50%] xl:w-[50%] flex flex-col items-center">
              {about.Accordion.map((item) => (
                <Accordion
                  key={item.number}
                  number={item.number}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <BrandSlider />

      <FounderProfileCard />
      <div className="mx-auto">
        <h1 className="uppercase unbounded-400 text-white text-center leading-[6.125rem] mx-auto my-96 values-clamp">
          Values
        </h1>
      </div>

      {/* <StageProcess /> */}
      <TeamMembers />
      <ImageGallery leftImages={leftImages} rightImages={rightImages} />
      <FaqSection />
    </div>
  );
};

export default about;
