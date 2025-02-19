import Image from "next/image";
import config from "../../config";
import parse from "html-react-parser";
import { motion } from "framer-motion";
export default function FounderProfileCard() {
  const { FounderSection } = config.about;

  const upperName = (FounderSection.name || "").toUpperCase();
  const upperSurname = (FounderSection.surname || "").toUpperCase();

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { duration: 2, ease: "easeInOut" },
      }}
      viewport={{ once: true }}
      className="min-h-screen w-[95vw] 2xl:w-[90vw] text-white mx-auto flex flex-col gap-10 lg:gap-[3.75rem] "
    >
      <p className=" xl:mb-[2rem]  flex flex-col custom-break-1200:flex-row xl:flex-row justify-center custom-break-1200:self-start xl:self-start items-center gap-3">
        <span className="text-[#F58327] bg-[#232323] text-[0.75rem] xl:text-[0.688rem] text-nowrap leading-[1.5rem] xl:leading-[1.375rem] font-black inline rounded-full px-3 py-1 uppercase satoshi">
          About Founder
        </span>
      </p>
      <h2 className="unbounded-400 text-center custom-break-1200:text-left xl:text-left text-white text-[1.75rem] lg:text-[2.25rem] xl:text-[2.5rem] leading-[1.938rem] lg:leading-[2.5rem] xl:leading-[2.75rem]">
        Meet The Founder
      </h2>

      <p className="text-[#858585] text-[1.375rem] lg:text-[1.625rem] xl:text-[1.875rem] font-normal m-1 leading-[1.938rem] lg:leading-[2.25rem] xl:leading-[2.438rem]">
        {parse(FounderSection.firstPara)}
      </p>
      <div className="2xl:w-[65vw] mx-auto">
        <div className="flex flex-wrap gap-8 lg:gap-12">
          {/* Left Column - Image and Name */}
          <div className="relative mx-auto founder-profile overflow-hidden h-[70vh] w-[90vw] lg:flex-[2]">
            {/* Orange Half Ellipse */}
            <div className="absolute bottom-0 inset-0 mx-auto w-[95%] md:w-[50%] lg:w-[100%] xl:w-[90%] 2xl:w-[100%] h-[70%] lg:h-[100%] xl:h-[100%] 2xl:h-[60%] bg-[#F58327] rounded-t-full lg:top-[60%] lg:translate-y-[-40%] top-[50%] translate-y-[-30%]"></div>

            {/* Profile Image */}
            <div className="absolute flex flex-col justify-end items-center mx-auto w-full h-full">
              <Image
                src={FounderSection.founderImage}
                alt={`Profile picture of ${FounderSection.name} ${FounderSection.surname}`}
                width={10000}
                height={10000}
                className="grayscale founder-profile lg:w-auto lg:h-[70vh] w-60 md:w-[40vw] 2xl:w-[60vw] h-90 md:h-[50vh] 2xl:h-[50vh]"
                priority
              />
            </div>

            {/* Shadow */}
            <div className="absolute inset-x-0 top-[85%] left-[-5%] w-[100vw] h-[30%] bg-black blur-lg z-10 shadow-custom"></div>

            {/* Founder Name */}
            <div className="absolute bottom-4 w-full text-[2rem] leading-[2.25rem] md:text-2xl lg:text-[3.125rem] text-center lg:text-left xl:ml-8 lg:leading-[2.5rem] z-20 unbounded-600">
              <h1 className="font-bold tracking-tighter text-[#E37924]">
                {upperName}
              </h1>
              <h1 className="font-bold tracking-tighter text-white ">
                {upperSurname}
              </h1>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col flex-[3] justify-center ">
            {/* Bio */}
            <div className=" text-[1rem] leading-relaxed text-[#CECECE] satoshi">
              {FounderSection.secondPara ? (
                parse(FounderSection.secondPara)
              ) : (
                <p>No biography available.</p>
              )}
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3 my-10">
              {FounderSection.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center rounded-3xl bg-[#232323] px-4 py-1 text-base satoshi backdrop-blur-sm"
                >
                  <span className="mr-2 text-[#FF8533] w-10 h-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      focusable="false"
                      color="var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(217, 76, 0))"
                      style={{
                        userSelect: "none",
                        width: "100%",
                        height: "100%",
                        display: "inline-block",
                        fill: "#F58327",
                        flexShrink: 0,
                      }}
                    >
                      <g
                        color="var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(217, 76, 0))"
                        weight="duotone"
                      >
                        <path
                          d="M210.26,210.26c-17.23,17.23-68-5.63-113.46-51.06S28.51,63,45.74,45.74s68,5.63,113.46,51.06S227.49,193,210.26,210.26Z"
                          opacity={0.2}
                        />
                        <path d="M196.12,128c24.65-34.61,37.22-70.38,19.74-87.86S162.61,35.23,128,59.88C93.39,35.23,57.62,22.66,40.14,40.14S35.23,93.39,59.88,128c-24.65,34.61-37.22,70.38-19.74,87.86h0c5.63,5.63,13.15,8.14,21.91,8.14,18.48,0,42.48-11.17,66-27.88C151.47,212.83,175.47,224,194,224c8.76,0,16.29-2.52,21.91-8.14h0C233.34,198.38,220.77,162.61,196.12,128Zm8.43-76.55c7.64,7.64,2.48,32.4-18.52,63.28a300.33,300.33,0,0,0-21.19-23.57A300.33,300.33,0,0,0,141.27,70C172.15,49,196.91,43.8,204.55,51.45ZM176.29,128a289.14,289.14,0,0,1-22.76,25.53A289.14,289.14,0,0,1,128,176.29a289.14,289.14,0,0,1-25.53-22.76A289.14,289.14,0,0,1,79.71,128,298.62,298.62,0,0,1,128,79.71a289.14,289.14,0,0,1,25.53,22.76A289.14,289.14,0,0,1,176.29,128ZM51.45,51.45c2.2-2.21,5.83-3.35,10.62-3.35C73.89,48.1,92.76,55,114.72,70A304,304,0,0,0,91.16,91.16,300.33,300.33,0,0,0,70,114.73C49,83.85,43.81,59.09,51.45,51.45Zm0,153.1C43.81,196.91,49,172.15,70,141.27a300.33,300.33,0,0,0,21.19,23.57A304.18,304.18,0,0,0,114.73,186C83.85,207,59.09,212.2,51.45,204.55Zm153.1,0c-7.64,7.65-32.4,2.48-63.28-18.52a304.18,304.18,0,0,0,23.57-21.19A300.33,300.33,0,0,0,186,141.27C207,172.15,212.19,196.91,204.55,204.55ZM140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z" />
                      </g>
                    </svg>
                  </span>
                  {skill.name}
                </div>
              ))}
            </div>

            {/* Featured Section */}
            <div className="space-y-6">
              <h2 className="text-base unbounded-300">Featured In:</h2>
              <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                {FounderSection.feturedInLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center rounded-2xl bg-[#232323] p-3 backdrop-blur-sm"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={100}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
