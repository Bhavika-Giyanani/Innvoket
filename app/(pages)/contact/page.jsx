"use client";

import { motion } from "framer-motion";
import config from "../../config";

const Contact = () => {
  const { hotline, address, email, openingHours, socialMedia } = config.contact;

  return (
    <section className="max-w-[90vw] mx-auto">
      <motion.h2
        className="py-20 font-unbounded text-white text-2xl md:text-5xl text-center"
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        LET'S WORK TOGETHER
      </motion.h2>

      <motion.div
        className="bg-[#1f1f1fc4] rounded-3xl text-white grid grid-cols-1 md:grid-cols-3 gap-2 p-4 h-full md:text-xl font-unbounded"
        initial={{ y: -100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="p-6 bg-[#292929] rounded-3xl flex flex-col space-y-4">
          <h2>Hotline:</h2>
          <h2>{hotline}</h2>
        </div>
        <div className="p-6 bg-[#292929] rounded-3xl flex flex-col space-y-4">
          <h2>Address:</h2>
          <h2>{address}</h2>
        </div>
        <div className="p-6 bg-[#292929] rounded-3xl flex flex-col space-y-4">
          <h2>Email:</h2>
          <h2>{email}</h2>
        </div>
        <div className="p-6 md:col-span-2 bg-[#292929] rounded-3xl flex flex-col space-y-4">
          <h2>Opening Hours:</h2>
          {openingHours.map((entry, index) => (
            <h2 key={index}>
              {entry.days}: {entry.hours}
            </h2>
          ))}
        </div>
        <div className="p-6 bg-[#292929] rounded-3xl flex flex-col space-y-4">
          <h2>Follow Us:</h2>
          <ul className="space-y-1">
            {socialMedia.map((platform, index) => (
              <li key={index}>{platform}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
