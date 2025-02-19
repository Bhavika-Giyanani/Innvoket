import StageCard from "./StageCard";

const StageProcess = () => {
  return (
    <div>
      <p className="text-center mt-48">
        <span className="text-[#F58327] bg-[#232323] text-[0.7rem] align-middle text-center font-extrabold inline rounded-full p-2 satoshi uppercase">
          HOW WE WORK
        </span>
        <h2 className="text-[2.5rem] unbounded-400 text-white mt-2">
          Our 4 Stage Process
        </h2>
      </p>
      <div className="flex flex-col items-center max-w-[90vw] mx-auto">
        <StageCard
          stageNo="01"
          title="Discovery Phase"
          description="During this initial stage, we delve deep into understanding your business goals, target audience, and market landscape. We conduct thorough research and analysis to identify opportunities and challenges, laying the foundation for a successful campaign."
        />
        <StageCard
          stageNo="02"
          title="Strategy Development"
          description="With insights gathered from the discovery phase, we develop a customized strategy tailored to your specific needs and objectives. This comprehensive plan outlines the key tactics, channels, and timelines needed to achieve your business goals effectively."
        />
        <StageCard
          stageNo="03"
          title="Implementation and Execution"
          description="Once the strategy is finalized and approved, we roll up our sleeves and put the plan into action. Our expert team utilizes cutting-edge tools and techniques to execute each component of the strategy with precision and efficiency, whether it's optimizing your website for search engines, crafting engaging social media content, or designing captivating visuals."
        />
        <StageCard
          stageNo="04"
          title="Monitoring and Optimization"
          description="Continuous monitoring and optimization are essential to ensuring the success and effectiveness of our campaigns. We closely track key performance indicators (KPIs) and metrics, analyzing data to identify areas for improvement and making necessary adjustments to optimize results. This iterative process allows us to adapt to changes in the market and maximize the return on your investment."
        />
      </div>
    </div>
  );
};

export default StageProcess;
