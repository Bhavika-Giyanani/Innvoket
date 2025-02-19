import React from "react";

const TechStackCategory = ({ title, technologies }) => {
  return (
    <div className="my-8 p-8 rounded-2xl shadow-lg"
      style={{
        backgroundColor: "#1F1F1F",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}>
      {/* Title */}
      <h3 className="text-2xl font-semibold mb-6 text-center text-white">{title}</h3>

      {/* Technology Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className=" p-6 rounded-xl text-center "
            style={{
              backgroundColor: "#141414",
              border: "1px solidrgba(255, 120, 48, 0.48)",
            }}
          >
            <img
              src={tech.image}
              alt={tech.name}
              className="mx-auto mb-4 w-16"
              style={{ borderRadius: "20px" }}
            />
            <p className="text-[#E17622] font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackCategory;
