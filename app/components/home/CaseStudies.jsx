"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import config from "../../config";

const CaseStudies = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      if (isHovering) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", updateCursorPosition);
    return () => window.removeEventListener("mousemove", updateCursorPosition);
  }, [isHovering]);
  const { caseStudies } = config;

  return (
    <>
      {/* Custom Cursor */}
      <div
        className={`fixed pointer-events-none transition-opacity duration-200 ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: cursorPosition.x - 40,
          top: cursorPosition.y - 40,
          transform: "translate(-50%, -50%)",
          zIndex: 50,
        }}
      >
        <div className="flex items-center justify-center w-20 h-20 bg-[#f58327] rounded-full">
          <span className="text-black text-sm unbounded-600">VIEW</span>
        </div>
      </div>
      <motion.div
        className="py-20 px-4 md:px-8 flex flex-col items-center justify-center"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-orange-500 text-sm font-bold rounded-full bg-[#232323] p-2">
          WORKS
        </span>

        <h2 className="text-white text-2xl md:text-3xl my-4">Case Studies</h2>

        <motion.div
          className="my-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 cursor-none"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="md:min-h-[75vh]">
                <img
                  src={study.img}
                  alt={study.title}
                  className="w-full h-full object-cover rounded-3xl hover:scale-105 transition duration-200"
                />
              </div>
              <div className="rounded-3xl px-4 py-8 bg-[#1d1d1d]">
                <span className="text-orange-500 font-bold rounded-full bg-[#424141] p-2 text-sm">
                  Case Study
                </span>
                <h2 className="text-lg text-white mt-2">{study.title}</h2>
                <p className="text-sm text-gray-400 mt-2">{study.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link
            href="/projects"
            className="bg-[#FF7A30] py-3 px-7 rounded-full transition-colors text-black"
          >
            VIEW ALL PROJECTS ↗
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
};

export default CaseStudies;
