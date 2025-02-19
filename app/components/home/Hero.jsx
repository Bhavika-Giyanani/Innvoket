"use client"

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <motion.section
      className="text-white mt-20 md:py-20 md:px-10 flex flex-col justify-center items-center text-center"
      initial={{ y: -100, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 25,
        opacity: { duration: 1 },
        y: { duration: 0.8 }, 
      }}
    >
      <h1 className="text-xl md:text-7xl mb-4">
        Empowering <span className="bg-[#FF7A30] text-black rotate-3 inline-block">Digital</span> <br />
        Transformation
        <br />
        with <br />
        <span className="w-10 md:w-16 inline-block rounded-full bg-[#FF7A30] -rotate-[20deg]">
          <img src="/hero.avif" alt="" />
        </span> Innvoket
      </h1>

      <p className="text-md text-gray-400 mb-8 max-w-3xl mx-auto">
        We believe in combining innovative design, sustainable practices, and exceptional craftsmanship to bring your vision to life.
      </p>

      <Link
        href="/contact"
        className="bg-[#FF7A30] py-3 px-7 rounded-full transition-colors text-black"
      >
        CONTACT US ↗
      </Link>
    </motion.section>
  );
};

export default Hero;
