import Brands from "./Brands";
import config from "../../config";

const BrandMarquee = () => {
  const { brandMarqueeLogos } = config.about.brandsSection;
  const duplicatedLogos = [...brandMarqueeLogos, ...brandMarqueeLogos];

  return (
    <div>
      {/* Upper Marquee*/}
      <div className="marquee">
        <div className="marquee-content">
          {duplicatedLogos.map((logo, index) => (
            <Brands key={`upper-${index}`} imagePath={logo} />
          ))}
        </div>
      </div>

      {/* Lower Marquee */}
      <div className="marquee mt-4">
        <div className="marquee-content reverse">
          {duplicatedLogos.map((logo, index) => (
            <Brands key={`lower-${index}`} imagePath={logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandMarquee;
