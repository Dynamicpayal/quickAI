import React, { useState } from "react";

const WriteArticle = () => {
  const [articleLength, setArticleLength] = useState("long");
  const [topic, setTopic] = useState("");
  const [generated, setGenerated] = useState("");

  const handleGenerate = () => {
  setGenerated(`Sample article about "${topic}" will appear here.`);
};

return (
  <div className="flex bg-[#f8f9fc] min-h-screen font-sans">
    {/* Sidebar */}
    <aside className="w-[220px] bg-white border-r border-[#ecedf2] flex flex-col justify-between items-center pt-6">
      <div className="flex flex-col items-center">
        <div className="bg-[#ececec] w-14 h-14 rounded-full mb-2" />
        <div className="font-semibold mb-5">I LOVE William Mark</div>
      </div>
      <nav className="flex flex-col w-full mb-28">
        <a
          href="#"
          className="text-[#6752f7] font-medium px-8 py-3 border-l-4 border-[#6752f7] bg-[#eef2fa]"
        >
          Write Article
        </a>
        <a
          href="#"
          className="text-[#444] px-8 py-3 border-l-4 border-transparent hover:bg-[#eef2fa] hover:text-[#6752f7] hover:border-[#6752f7]"
        >
          Blog Titles
        </a>
        <a
          href="#"
          className="text-[#444] px-8 py-3 border-l-4 border-transparent hover:bg-[#eef2fa] hover:text-[#6752f7] hover:border-[#6752f7]"
        >
          Generate Images
        </a>
        <a
          href="#"
          className="text-[#444] px-8 py-3 border-l-4 border-transparent hover:bg-[#eef2fa] hover:text-[#6752f7] hover:border-[#6752f7]"
        >
          Remove Background
        </a>
        <a
          href="#"
          className="text-[#444] px-8 py-3 border-l-4 border-transparent hover:bg-[#eef2fa] hover:text-[#6752f7] hover:border-[#6752f7]"
        >
          Remove Object
        </a>
        <a
          href="#"
          className="text-[#444] px-8 py-3 border-l-4 border-transparent hover:bg-[#eef2fa] hover:text-[#6752f7] hover:border-[#6752f7]"
        >
          Review Resume
        </a>
      </nav>
      <div className="text-xs text-[#777] text-center mb-6">
        William Mark
        <br />
        Premium Plan
      </div>
    </aside>
    {/* Main Content */}
    <div className="flex gap-6 p-12 flex-1">
      {/* Writer Section */}
      <div className="bg-white border border-[#e1e8f6] rounded-xl p-8 w-[460px] flex flex-col gap-4 h-fit">
        <h2 className="text-xl font-semibold mb-1">AI Article Writer</h2>
        <label className="text-sm text-[#4d566d] mb-1">Article Topic</label>
        <input
          type="text"
          placeholder="The future of artificial intelligence"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="p-2.5 border border-[#dbe3fa] rounded-[7px] text-base w-full mb-2 outline-none focus:border-[#6752f7]"
        />
        <label className="text-sm text-[#4d566d] mb-1">Article Length</label>
        <div className="flex gap-2 mb-2">
          <button
            className={`px-4 py-2 rounded-[7px] border ${
              articleLength === "short"
                ? "bg-[#edf0fc] border-[#6752f7] text-[#6752f7]"
                : "bg-[#f3f6fc] border-[#dbe3fa] text-[#16234c] hover:bg-[#edf0fc] hover:text-[#6752f7] hover:border-[#6752f7]"
            }`}
            onClick={() => setArticleLength("short")}
          >
            Short (200 - 400 word)
          </button>
          <button
            className={`px-4 py-2 rounded-[7px] border ${
              articleLength === "long"
                ? "bg-[#edf0fc] border-[#6752f7] text-[#6752f7]"
                : "bg-[#f3f6fc] border-[#dbe3fa] text-[#16234c] hover:bg-[#edf0fc] hover:text-[#6752f7] hover:border-[#6752f7]"
            }`}
            onClick={() => setArticleLength("long")}
          >
            Long (400 - 800 word)
          </button>
        </div>
        <button
          className="mt-3 py-2.5 w-full bg-[#4465f7] hover:bg-[#364dcf] text-white font-semibold rounded-[7px] text-lg transition"
          onClick={handleGenerate}
        >
          Generate article
        </button>
      </div>

      <div className="bg-white border border-[#e1e8f6] rounded-xl p-8 w-[507px] flex flex-col">
        <h2 className="text-xl font-semibold mb-3">Generated article</h2>
        <div className="mt-2 min-h-[310px] h-[437px] border border-dashed border-[#c9d8fa] rounded-xl flex items-center justify-center text-[#a8b2ca] bg-[#f6f8fe] text-center">
          {generated ? (
            <div>{generated}</div>
          ) : (
            <div className="text-base">
              <span role="img" aria-label="edit">
                &#9998;
              </span>
              <br />
              Enter a topic and click "Generate article" to get started
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
};

export default WriteArticle;
