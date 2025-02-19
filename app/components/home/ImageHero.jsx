"use client";

import { motion } from "framer-motion";
import { Atom } from "lucide-react";
import config from "../../config";

const ImageHero = () => {
  const { values, additionalValues, backgroundImage } = config.heroSection;

  const IconRenderer = ({ icon }) => {
    const IconComponent = require("lucide-react")[icon];
    return <IconComponent className="w-8 h-8 text-yellow-500" />;
  };

  return (
    <motion.div
      className="relative w-full h-[300vh] md:h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,102,0,0.4),rgba(0,0,0,1))]"></div>

      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex flex-col md:flex-row items-center justify-center">
        <div className="bg-[rgba(168,132,132,0.5)] backdrop-blur-sm rounded-full w-40 h-40 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-xl md:text-3xl font-bold">5+</h2>
            <p className="text-sm">Years of Experience</p>
          </div>
        </div>

        <div className="bg-[rgba(168,132,132,0.5)] backdrop-blur-sm rounded-full w-40 h-40 flex items-center justify-center -ml-16 -my-8 md:-ml-4">
          <div className="text-white text-center">
            <h2 className="text-xl md:text-3xl font-bold">50+</h2>
            <p className="text-sm">Successful Projects</p>
          </div>
        </div>

        <div className="bg-[rgba(168,132,132,0.5)] backdrop-blur-sm rounded-full w-40 h-40 flex items-center justify-center -ml-4">
          <div className="text-white text-center">
            <h2 className="text-xl md:text-3xl font-bold">20</h2>
            <p className="text-sm">5 Star Reviews</p>
          </div>
        </div>
      </div>

      <div className="absolute p-8 bottom-0">
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-transparent backdrop-blur-lg text-white p-6 rounded-3xl shadow-lg text-center"
            >
              <span className="rounded-3xl border-2 border-orange-400 inline-block p-3 mb-4">
                <IconRenderer icon={value.icon} />
              </span>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </div>
          ))}
        </div>
        <div className="md:max-w-[75%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          {additionalValues.map((val, index) => (
            <span
              key={index}
              className="bg-neutral-700 text-white rounded-3xl py-2 text-center text-xs backdrop-blur-sm"
            >
              <Atom className="inline-block mx-1 text-orange-500" />
              {val}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ImageHero;
