"use client";
import React from "react";
import parse from "html-react-parser";
import ServiceCard from "../components/ServiceCard";
import FeaturesCard from "../components/FeaturesCard";
import TalkSection from "../components/TalkSection";
import config from "../config/config";
import { motion } from "framer-motion";
import {
  SeoSvg,
  WebsiteDesignSvg,
  ContentSvg,
  SocialMediaSvg,
} from "../components/ServiceSvg";
import {
  RocketSVG,
  ClientSVG,
  CommunicationSVG,
  SupportSVG,
  ExpertiseSVG,
  NetworkSVG,
} from "../components/FeaturesSvg";

const iconMap = {
  SeoSvg: <SeoSvg />,
  WebsiteDesignSvg: <WebsiteDesignSvg />,
  ContentSvg: <ContentSvg />,
  SocialMediaSvg: <SocialMediaSvg />,
  RocketSVG: <RocketSVG />,
  ClientSVG: <ClientSVG />,
  CommunicationSVG: <CommunicationSVG />,
  SupportSVG: <SupportSVG />,
  ExpertiseSVG: <ExpertiseSVG />,
  NetworkSVG: <NetworkSVG />,
};

const Services = () => {
  const { heading, service_cards, feature_cards } = config.servicesPage;

  return (
    <div className="bg-[#0A0A0A] text-white py-20">
      {/* Title */}
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 2, ease: "easeInOut" },
        }}
        className="text-center mb-8 text-[1.688rem] md:text-[1.688rem] lg:text-[2.5rem] xl:text-[3.125rem] leading-[1.875rem] lg:leading-[2.75rem] xl:leading-[3.438rem] unbounded-400"
      >
        {parse(heading)}
      </motion.div>

      {/* Services Cards */}
      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 2, ease: "easeInOut" },
        }}
        className="grid grid-cols-1 custom-break-1200:grid-cols-2 gap-2 mx-auto w-[92vw] md:w-[97vw] lg:w-[92vw] xl:w-[95vw] 2xl:w-[60vw]"
      >
        {service_cards.map((card, index) => (
          <ServiceCard
            key={index}
            title={card.title}
            description={card.description}
            icon={iconMap[card.icon]}
            learnMoreLink={card.learn_more_link}
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <p className="text-center mt-48 uppercase">
          <span className="text-[#F58327] bg-[#232323] text-[0.75rem] xl:text-[0.688rem] leading-[1.5rem] xl:leading-[1.375rem] align-middle text-center font-[900] inline rounded-full p-2 satoshi">
            WHY CHOOSE US
          </span>
        </p>
        <div className="flex justify-center items-center">
          <h1 className="text-center mt-4 text-white unbounded-400 text-[1.75rem] lg:text-[2.25rem] xl:text-[2.5rem] leading-[1.938rem] lg:leading-[2.5rem] xl:leading-[2.75rem] lg:w-[50vw] xl:w-[40vw] 2xl:w-[25vw] p-1">
            Why we are your best choice
          </h1>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 custom-break-1200:grid-cols-3 gap-8 w-90 2xl:w-[60vw] mx-3 2xl:mx-auto my-14 2xl:my-20">
          {feature_cards.map((card, index) => (
            <FeaturesCard
              key={index}
              icon={iconMap[card.icon]}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </motion.div>

      <TalkSection />
    </div>
  );
};

export default Services;
