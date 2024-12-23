const TalkSection = () => {
  return (
    <section className="flex flex-col  custom-break-1200:flex-row items-center justify-between bg-[#0A0A0A] text-white mx-auto px-5 md:px-5 lg:px-10 py-10 md:py-20 2xl:w-[60vw]">
      <div className="md:w-1/2 xl:w-2/5 unbounded-400 flex flex-col justify-evenly items-center mb-16">
        <h1 className="text-[100px] md:text-[15rem] lg:text-[20rem] xl:text-[10rem] custom-break-1200:text-[9rem] leading-[0.7]">
          Let&apos;s <br />
          <span className="text-[#F58327] ml-3">Talk!</span>
        </h1>
      </div>

      <div className="md:w-full xl:w-[50%] w-full custom-break-1200:w-[55%] mt-8 md:mt-0 bg-[#161616] py-8 xl:py-12 px-3 lg:px-6 xl:px-8 rounded-3xl shadow-lg">
        <form className="flex flex-col space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-[12px] leading-[14px] font-medium mb-2 text-[#888888] inter-500"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Jane Smith"
              className="w-full px-4 py-5 rounded-2xl bg-[#2F2F2F] text-white text-[14px] leading-[17px] focus:outline-none focus:ring-2 focus:ring-orange-500 backdrop-blur-lg inter-400"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-[12px] leading-[14px] font-medium mb-2 text-[#888888] inter-500"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="jane@framer.com"
              className="w-full px-4 py-5 rounded-2xl bg-[#2F2F2F] text-white text-[14px] leading-[17px] focus:outline-none focus:ring-2 focus:ring-orange-500 inter-400 backdrop-blur-lg"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-[12px] leading-[14px] font-medium text-[#888888] mb-2 inter-500"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message"
              rows="5"
              className="w-full px-4 py-3 rounded-3xl bg-[#2F2F2F] text-white text-[14px] leading-[17px] backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none inter-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#F58327] text-black font-normal py-3 rounded-xl hover:bg-white transition duration-300 unbounded-400"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default TalkSection;
