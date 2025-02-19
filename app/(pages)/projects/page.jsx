"use client";
import CaseStudies from "../../components/projects/CaseStudies";
import { motion } from "framer-motion";
import config from "../../config";

const Projects = () => {
  const { heading, case_studies } = config.projects;

  return (
    <div className="bg-[#0A0A0A] align-middle h-full border">
      {/* Heading */}
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        className="flex items-center justify-center"
      >
        <h1 className="text-white text-center w-90% lg:w-[60%] md:w-[80%] xl:w-[50%] 2xl:w-[30%] py-10 px-4 unbounded-400 text-[1.688rem] sm:text-[1.688rem] lg:text-[3.125rem] xl:text-[3.125rem] leading-[1.875rem] lg:leading-[3.438rem] xl:leading-[3.438rem]">
          {heading}
        </h1>
      </motion.div>

      {/* Case Studies */}
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut" },
        }}
        className="bg-[#0A0A0A] min-h-screen w-full p-4 lg:p-8 flex flex-col items-center justify-center"
      >
        {case_studies.map((study, index) => (
          <CaseStudies
            key={index}
            image={study.image}
            title={study.title}
            description={study.description}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
