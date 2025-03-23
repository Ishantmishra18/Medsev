import React from "react";

const Article = () => {
  const art = Array(10).fill(12); // Simpler way to create an array

  return (
    <div className="flex flex-wrap w-screen p-6 h-auto gap-8 justify-center overflow-hidden">
      {art.map((val, ind) => (
        <div
          key={ind}
          className="card h-[40vh] w-[30vw] bg-amber-600 rounded-2xl flex items-center justify-center text-white text-2xl font-semibold shadow-lg"
        >
          Article {ind + 1}
        </div>
      ))}
    </div>
  );
};

export default Article;
