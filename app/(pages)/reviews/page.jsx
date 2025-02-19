"use client";


import { motion } from "framer-motion";
import config from "../../config"

const Reviews = () => {
  
    const {reviews} = config;

  return (
    <section className="py-4 md:py-10">
      <motion.h2
        className="text-xl md:text-6xl text-white text-center mb-8"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Check Our Works With <br /> Real Results
      </motion.h2>

      <div className="text-white py-10 md:px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-2"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#1d1d1d] rounded-3xl p-6 shadow-lg flex flex-col space-y-8"
            >
              <div className="flex">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <span key={i} className="text-orange-500 text-xl">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-xs md:text-sm">{review.text}</p>

              <div className="flex items-center space-x-4">
                <img
                  src={review.image}
                  alt={review.author}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-bold">{review.author}</p>
                  <p className="text-gray-400 text-xs md:text-sm">
                    {review.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
