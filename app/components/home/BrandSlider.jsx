"use client";
import { motion } from "framer-motion";
import config from "../../config";

const BrandSlider = () => {
  return (
    <div className="mt-4 md:mt-40 px-8 text-center">
      <div className="text-orange-500 font-bold rounded-full bg-[#232323] inline-block p-2">
        <h2>{config.brandSlider.heading}</h2>
      </div>

      <div className="flex flex-col space-y-4 mt-4">
        <h2 className="text-white text-2xl md:text-4xl">{config.brandSlider.subheading}</h2>
      </div>

      <div className=" overflow-hidden rounded-3xl flex space-x-20 my-4">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 space-x-20"
        >
          {config.brandSlider.images.map((image, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-3xl p-4 w-[200px] flex justify-center items-center"
            >
              <img className="h-20" src={image.src} alt="" />
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 space-x-20"
        >
          {config.brandSlider.images.map((image, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-3xl p-4 w-[200px] flex justify-center items-center"
            >
              <img className="h-20" src={image.src} alt="" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandSlider;
