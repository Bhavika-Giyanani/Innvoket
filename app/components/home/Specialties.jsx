import config from "../../config";

const Specialties = () => {
  const { header, largeImageSection, gridItems } = config.specialties;

  return (
    <section className="text-white px-4 py-20">
      <div className="md:px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-4 md:my-14">
          <span className="text-orange-500 text-xs font-bold rounded-full bg-[#232323] p-2 max-w-max">
            {header.title}
          </span>
          <h2 className="md:text-4xl">Our Specialities</h2>
        </div>

        <div className="flex md:justify-end">
          <p className="satoshi text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
            {header.description}
          </p>
        </div>
      </div>

      <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-white md:px-10">
        <div className="col-span-2 relative rounded-3xl overflow-hidden">
          <img
            src={largeImageSection.image}
            alt="Specialties"
            className="w-full h-[70vh] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent"></div>
          <div className="absolute bottom-8 left-8 transform z-10">
            <h1 className="text-7xl font-extrabold">
              {largeImageSection.efficiencyBoostPercentage}
            </h1>
            <h2 className="text-2xl font-semibold">
              {largeImageSection.efficiencyBoostTitle}
            </h2>
            <p className="text-gray-300 mt-8 bg-transparent rounded-3xl p-1 backdrop-blur">
              {largeImageSection.efficiencyBoostDescription}
            </p>
          </div>
        </div>

        {gridItems.map((item, index) => (
          <div
            key={index}
            className={
              index === 0
                ? "h-[60vh]"
                : "bg-[#F58327] h-[60vh] rounded-3xl md:p-12 flex flex-col text-black space-y-10 relative"
            }
          >
            {item.image && (
              <img
                src={item.image}
                alt="Grid Item"
                className="w-full h-full object-cover rounded-3xl"
              />
            )}
            {item.title && (
              <div className="flex flex-col items-end">
                <h2 className="text-2xl">{item.title}</h2>
                <h2 className="text-5xl">{item.percentage}</h2>
              </div>
            )}
            {item.description && (
              <div className="absolute bottom-4 text-xs">
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialties;
