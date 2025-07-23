import React from "react";
import { useNavigate } from "react-router-dom";
import { AiToolsData, assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full flex-col items-center justify-start
    px-4 sm:px-20 xl:px-32 relative inline-flex bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen"
    >
      <div className="max-w-2xl flex flex-col items-center mt-20 text-center">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight">
          Create amazing content with{" "}
          <span className="text-[#6752f7]">AI tools</span>
        </h1>
        <p className="mt-4 text-gray-500 max-w-xl">
          Transform your content creation with our suite of premium AI tools.
          Write articles, generate images, and enhance your workflow.
        </p>
        <div className="flex gap-4 mt-8">
          <button
            onClick={() => navigate("/ai")}
            className="bg-[#6752f7] text-white px-8 py-3 rounded-lg font-semibold shadow hover:scale-105 transition"
          >
            Start creating now
          </button>
          <button className="bg-white border border-gray-300 text-[#23272e] px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
            Watch Demo
          </button>
        </div>
        <div className="flex items-center gap-4 mt-8 mx-auto text-gray-600">
          <img src={assets.user_group} alt="User Group" className="h-8" />
          Trusted by 10k+ people
        </div>
      </div>

      {/* AI Tools Section */}
      <section className="w-full bg-white mt-30 px-4 py-12 bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold text-3xl sm:text-4xl mb-3">
            Powerful AI Tools
          </h2>
          <p className="text-gray-500 mb-10">
            Everything you need to create, enhance, and optimize your content
            with cutting-edge AI technology.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {AiToolsData.map((tool, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition"
              >
                <tool.Icon
                  className="w-12 h-12 p-3 text-white rounded-xl"
                  style={{
                    background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
                  }}
                />
                <h2 className="mt-6 mb-3 text-lg font-semibold">
                  {tool.title}
                </h2>
                <p className="text-gray-400 text-sm max-w-[95%]">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
