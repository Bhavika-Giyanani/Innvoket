"use client";
import { motion } from "framer-motion";
import config from "../../config";

const TextSlider = () => {
  const message = config.textSlider.message;

  return (
    <div className="bg-gradient-to-b from-transparent via-orange-500 to-transparent h-[50vh] md:h-[80vh] flex items-center justify-center text-white overflow-hidden">
      <div className="flex space-x-0">
        {/* Duplicated text */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap flex"
        >
          <h1 className="text-3xl md:text-8xl font-unbounded">{message}</h1>
          <h1 className="text-3xl md:text-8xl font-unbounded">{message}</h1>
        </motion.div>
        
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap flex"
        >
          <h1 className="text-3xl md:text-8xl font-unbounded">{message}</h1>
          <h1 className="text-3xl md:text-8xl font-unbounded">{message}</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default TextSlider;
