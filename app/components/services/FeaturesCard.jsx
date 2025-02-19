const FeaturesCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center bg-[#0A0A0A] rounded-2xl p-8 custom-break-1200:p-6 shadow-lg border-[1px] border-[#171717]">
      {/* Icon */}
      <div className="bg-[#191919] p-2 rounded-[22px] mb-4 flex items-center justify-center w-[60px] xs:w-[90vw] h-[60px] border-[#F58327] border-[1px]">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-white text-[1.125rem] lg:text-[1.25rem] leading-[1.563rem] lg:leading-[1.75rem] xl:leading-[1.625rem] mb-2 unbounded-400">
        {title}
      </h3>

      {/* Description */}
      <p className="text-neutral-400 satoshi">{description}</p>
    </div>
  );
};

export default FeaturesCard;
