"use client";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    rating: "★★★★★",
    text: "Innovket’s expertise in creating tailored management systems has taken our business to the next level. From inventory management to workforce solutions, every tool they’ve delivered has been perfectly aligned with our needs. Their professionalism and innovative approach truly set them apart. It’s been a pleasure working with them!",
    name: "Atul Sharda",
    company: "BLUESKY VENTURES",
  },
  {
    rating: "★★★★★",
    text: "Partnering with Innvoket has completely transformed our operations. Their custom ERP and CRM solutions have streamlined our workflows and improved efficiency across the board. Their team's attention to detail and constant support have made them an invaluable partner in our growth journey. Highly recommended!",
    name: "Divyank Vyas",
    company: "M.D. BrightStar Technologies",
  },
  {
    rating: "★★★★★",
    text: "The team at Innvoket exceeded all our expectations! Their customized solutions have not only optimized our processes but also given us better insights into our business performance. Their proactive communication and commitment to delivering excellence have been exceptional. Innvoket has been a game-changer for us!",
    name: "Nishit Malvani",
    company: "CEO, Brightsun",
  },
];

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center justify-center my-4 md:my-16 overflow-hidden relative px-4">
      <div className="text-gray-500 text-3xl md:text-9xl font-bold mb-12 z-0">
        TESTIMONIAL
      </div>

      <div className="-mt-40 z-100 h-[80vh] overflow-hidden flex flex-col my-4">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex flex-col space-y-4"
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-transparent backdrop-blur-sm text-white text-sm md:text-base p-6 rounded-xl md:rounded-3xl border md:w-[600px] md:h-[340px] shadow-lg mb-4" 
            >
              <div className="flex items-start space-x-4">
                <div className="text-orange-400 text-2xl">
                  <span>{testimonial.rating}</span>
                </div>
              </div>
              <blockquote className="mt-4 text-gray-300">
                <p className="font-medium leading-relaxed">
                  {testimonial.text}
                </p>
              </blockquote>
              <div className="mt-4 border-t border-gray-700 pt-4">
                <p className="text-md">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex flex-col space-y-4 mt-4"
        >
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-transparent backdrop-blur-sm text-white text-sm md:text-base p-6 rounded-xl md:rounded-3xl border md:w-[600px] md:h-[340px] shadow-lg mb-4" // Added mb-4 to reduce margin between cards
            >
              <div className="flex items-start space-x-4">
                <div className="text-orange-400 text-2xl">
                  <span>{testimonial.rating}</span>
                </div>
              </div>
              <blockquote className="mt-4 text-gray-300">
                <p className="font-medium leading-relaxed">
                  {testimonial.text}
                </p>
              </blockquote>
              <div className="mt-4 border-t border-gray-700 pt-4">
                <p className="text-md">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
