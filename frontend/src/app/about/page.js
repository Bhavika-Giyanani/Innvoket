"use client";
import Accordion from "../components/Accordion";
import BrandMarquee from "../components/BrandMarquee";
import TalkSection from "../components/TalkSection";
import FaqSection from "../components/FaqSection";
import ImageGallery from "../components/ImageGallery";
import TeamMembers from "../components/TeamMembers";
import { motion } from "framer-motion";
import FounderProfileCard from "../components/FounderProfileCard";
import config from "../config/config";
import parse from "html-react-parser";
import StageProcess from "../components/StageProcess";
const about = () => {
  const { about } = config;
  const { leftImages, rightImages } = about.imageGallery;

  return (
    <div className="bg-black overflow-hidden">
      <div className="wrapper pt-5 h-[50vh] lg:mb-[3rem] custom-break-1200:mb-[15rem] xl:mb-[40rem] 2xl:mb-[100rem] flex items-center justify-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 2, ease: "easeInOut" },
          }}
          className="celestial-solutions w-[95%] m-auto h-[171.6px] md:h-[263.12px] lg:h-[417.52px] xl:h-[965.68px] 2xl:h-[2061.36px] flex flex-col justify-center md:justify-end items-center rounded-[2rem]"
        >
          <motion.h1
            initial={{ y: -200 }}
            animate={{ y: 0, transition: { duration: 2, ease: "easeInOut" } }}
            className="text-center unbounded-400 md:mb-8 text-[1.688rem] custom-break-1200:text-[3.125rem] lg:text-[2.5rem] xl:text-[3.125rem] leading-[1.875rem] custom-break-1200:leading-[3.438rem] lg:leading-[2.75rem] xl:leading-[3.438rem] lg:px-[10rem] xl:px-[15rem] 2xl:px-[50rem]"
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
        <div className="flex flex-col justify-center items-center w-[95vw] custom-break-1200:w-[92vw] xl:w-[95vw] 2xl:w-[65vw] gap-9 md:gap-7 lg:gap-14 xl:gap-6 mx-auto">
          <p className="mt-5 xl:mb-[2rem]  flex flex-col custom-break-1200:flex-row xl:flex-row justify-center  custom-break-1200:self-start xl:self-start items-center gap-3">
            <span className="text-[#F58327] bg-[#232323] text-[0.75rem] xl:text-[0.688rem] text-nowrap leading-[1.5rem] xl:leading-[1.375rem] font-black inline rounded-full px-3 py-1 uppercase satoshi">
              WHO WE ARE
            </span>
            <h2 className="unbounded-400 text-center custom-break-1200:text-left xl:text-left text-white text-[1.75rem] lg:text-[2.25rem] xl:text-[2.5rem] leading-[1.938rem] lg:leading-[2.5rem] xl:leading-[2.75rem]">
              About our Company
            </h2>
          </p>
          <div className="bg-black w-[95vw] custom-break-1200:w-[92vw] xl:w-[95vw] 2xl:w-[65vw] h-fit text-gray-300 py-2 flex flex-col custom-break-1200:flex-row xl:flex-row gap-8 xl:gap-16">
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
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 2, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center my-16 lg:my-28 xl:my-36 2xl:my-40"
      >
        <p className="text-center">
          <span className="text-[#F58327] bg-[#232323] text-[0.75rem] xl:text-[0.688rem] leading-[1.5rem] xl:leading-[1.375rem] align-middle text-center font-black inline rounded-full p-2 uppercase satoshi">
            Brands
          </span>
          <h2 className="text-[1.75rem] lg:text-[2.25rem] xl:text-[2.5rem] leading-[1.938rem] lg:leading-[2.5rem] xl:leading-[2.75rem] unbounded-400 text-white mt-2">
            <span>Brands we have</span>
            <br className="hidden xl:block" />
            <span> worked with</span>
          </h2>
        </p>
        <div className="bg-black h-[30vh] md:h-[156px] flex items-center justify-center w-[90vw] md:w-[95vw] lg:w-[93vw] 2xl:w-[65vw] overflow-hidden border-[#232323] border rounded-[2rem] mx-auto mt-7">
          <BrandMarquee />
        </div>
      </motion.div>

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
      <TalkSection />
    </div>
  );
};

export default about;
