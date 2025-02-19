import FaqAccordion from "./FaqAccordion";
import config from "../../config";
import parse from "html-react-parser";
import { motion } from "framer-motion";
export default function FaqSection() {
  const { faqSection } = config.about;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="m-auto w-[95vw] lg:w-[90vw] xl:w-[70vw] 2xl:w-[40vw] mt-10 md:mt-20 custom-break-1200:mt-32 lg:mt-36 xl:mt-48"
    >
      <div className="flex flex-col">
        <div className="text-center flex flex-col justify-center items-center mb-12 lg:mb-16 xl:mb-20">
          <span className="text-[#F58327] uppercase bg-[#232323] text-[0.75rem] xl:text-[0.688rem] leading-[1.5rem] xl:leading-[1.375rem] align-middle text-center text-nowrap font-black inline rounded-full p-2 py-1 satoshi">
            Frequently Asked Questions
          </span>
          <h2 className="text-[1.75rem] lg:text-[2.25rem] xl:text-[2.5rem] leading-[1.938rem] lg:leading-[2.5rem] xl:leading-[2.75rem] unbounded-400 text-white mt-2">
            {parse(faqSection.heading)}
          </h2>
        </div>
        <div className="flex flex-col">
          {faqSection.faqData.map((faq, index) => (
            <FaqAccordion
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
