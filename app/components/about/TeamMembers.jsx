import { MemberCard } from "./MemberCard";
import config from "../../config";
import { motion } from "framer-motion";
const TeamMembers = () => {
  const { teamMemberSection } = config.about;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="my-52 w-[95vw] lg:w-[95vw] mx-auto"
    >
      {/* Header Section */}
      <div className="text-center mt-12 md:mt-24 px-4 md:px-[15vw] xl:w-[67vw] 2xl:w-[50vw] mx-auto">
        <span className="text-[#F58327] bg-[#232323] text-[0.75rem] xl:text-[0.688rem] leading-[1.5rem] xl:leading-[1.375rem] align-middle text-center font-black inline rounded-full p-2 uppercase satoshi">
          Team Members
        </span>
        <h2 className="text-[1.75rem] lg:text-[2.25rem] xl:text-[2.5rem] leading-[1.938rem] lg:leading-[2.5rem] xl:leading-[2.75rem] unbounded-400 text-white mt-2">
          {teamMemberSection.heading}
        </h2>
        <p className="satoshi text-[1rem] md:text-[1.2rem] text-[#8B8B8B] mt-4">
          {teamMemberSection.description}
        </p>
      </div>

      {/* Cards Section */}
      <div className="mx-auto sm:w-[90vw] lg:w-[95vw] 2xl:w-[65vw] mt-10 md:mt-14 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-6 2xl:gap-10 mx-auto justify-items-center overflow-hidden">
          {teamMemberSection.teamMembers.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMembers;
