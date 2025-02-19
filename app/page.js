import Staffing from "./(pages)/staffing/page";
import BrandSlider from "./components/home/BrandSlider";
import CaseStudies from "./components/home/CaseStudies";
import Hero from "./components/home/Hero";
import ImageHero from "./components/home/ImageHero";
import Service from "./components/home/Service";
import SpecialService from "./components/home/SpecialService";
import Specialties from "./components/home/Specialties";
import Testimonials from "./components/home/Testimonials";

import TextSlider from "./components/home/TextSlider";

const Home = () => {
  return (
    <div>
      <Hero />
      <TextSlider />
      <Service />
      <BrandSlider />
      <SpecialService />
      <ImageHero />
      <CaseStudies />
      <Testimonials />
      <Specialties />
    </div>
  );
};

export default Home;
