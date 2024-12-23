const StageCard = ({ stageNo, title, description }) => {
  return (
    <div className="flex my-36">
      <div className="flex flex-col justify-center items-start">
        <div className="unbounded-400 text-[#191709] text-[4.125rem]">
          {stageNo}
        </div>
        {/* Timeline Line */}
        <div className="line w-1 h-20 bg-white mx-auto"></div>
      </div>
      <div className="rounded-3xl flex flex-col px-8 py-6 bg-[#161616] w-[50vw] mx-12 text-justify">
        <div className="">
          <span className="text-[#F58327] bg-[#232323] text-[0.7rem] align-middle text-center font-extrabold inline rounded-full p-2 satoshi uppercase">
            Step {stageNo}
          </span>
          <h1 className="unbounded-400 text-white text-size text-[1.25rem] mt-4">
            {title}
          </h1>
          <p className="satoshi text-[1rem] mt-5 text-[#A2A2A2]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StageCard;
