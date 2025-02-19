import React from "react";

const ServiceCard = ({ title, description, icon, learnMoreLink }) => {
  return (
    <div className="bg-[#1F1D1D] rounded-[30px] p-6 w-full group transition duration-300">
      {/* Icon */}
      <div className="flex flex-col gap-4">
        <div className="bg-[#333] rounded-[15px] p-2 flex items-center justify-center w-fit">
          {React.cloneElement(icon, {
            style: {
              width: "32px",
              height: "32px",
              color: "rgb(245, 131, 39)",
            },
          })}
        </div>
        {/* Title */}
        <h4 className="text-[1.125rem] lg:text-[1.25rem] leading-[1.563rem] lg:leading-[1.75rem] xl:leading-[1.625rem] font-semibold unbounded-400">
          {title}
        </h4>
      </div>

      {/* Description */}
      <div className="flex flex-col items-end justify-end h-[12rem] md:h-[11rem] lg:h-[10rem]">
        <p className="text-[#A5A4A4] text-[1rem] leading-[1.5rem] satoshi align-bottom">
          {description}
        </p>
      </div>

      {/* Learn More Link */}
      <a
        href={learnMoreLink}
        className="text-white font-semibold pt-5 text-[0.75rem] leading-[1.5rem] flex items-center gap-2 no-underline unbounded-400"
      >
        LEARN MORE
        <span className="w-7 h-7 rounded-full border-[#333] border p-1 flex justify-center items-center transition duration-900 bg-transparent group-hover:bg-[#F58327]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
            className="transition-transform duration-300 group-hover:rotate-[45deg]"
            style={{
              userSelect: "none",
              width: "100%",
              height: "100%",
              display: "inline-block",
              fill: "var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))",
              color:
                "var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))",
              flexShrink: 0,
            }}
          >
            <g
              color="var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))"
              weight="regular"
            >
              <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
            </g>
          </svg>
        </span>
      </a>
    </div>
  );
};

export default ServiceCard;
