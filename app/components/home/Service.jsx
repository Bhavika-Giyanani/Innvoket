"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import config from "../../config";
import {
  SeoSvg,
  ContentSvg,
  WebsiteDesignSvg,
  SocialMediaSvg,
} from "../../components/services/ServiceSvg";

export default function Service() {
  const ServiceCard = ({ Icon, title, description, link }) => (
    <div className="bg-[#1A1A1A] rounded-2xl p-6 flex flex-col justify-between space-y-20 md:space-y-36 shadow-lg group">
      <div className="flex flex-col space-y-4">
        <div className="bg-[#2A2A2A] w-12 h-12 flex items-center justify-center rounded-xl">
          <Icon className="text-orange-500" />
        </div>
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>
      <div>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );

  const iconMap = {
    Globe: SeoSvg,
    SquareMenu: ContentSvg,
    PanelTop: WebsiteDesignSvg,
    SocialMedia: SocialMediaSvg,
  };

  return (
    <section className="text-white px-4 py-10">
      <motion.div
        className="container mx-auto md:px-4"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex flex-col md:flex-row items-center md:space-x-4 my-10 md:my-20"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.span
            className="text-orange-500 font-bold rounded-full bg-[#232323] p-1 max-w-max mb-4 md:mb-0"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            {config.services.subheading}
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold font-unbounded text-center md:text-left"
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            {config.services.heading}
          </motion.h2>
        </motion.div>

        <motion.div
          className="text-center md:text-right mb-12"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <Link
            href="/services"
            className="bg-[#FF7A30] py-3 px-7 rounded-full transition-colors text-black text-sm md:text-base"
          >
            VIEW ALL SERVICES ↗
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-2"
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          {config.services.cards.map((card) => {
            const IconComponent = iconMap[card.icon];
            return (
              <motion.div
                key={card.id}
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1 }}
              >
                <ServiceCard
                  Icon={IconComponent}
                  title={card.title}
                  description={card.description}
                  link={card.link}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
