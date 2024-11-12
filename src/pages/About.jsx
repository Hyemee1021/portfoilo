import React from "react";

export const About = () => {
  return (
    <div className="mt-20 mb-40">
      <h1 className="font-bold  text-5xl">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-white font-bold text-xl py-1 px-2 ">
          Hyemee's
        </span>{" "}
        space
      </h1>
      <p className="my-12 text-sm">
        This is my space to showcase my projects and share highlights from my
        development journey. From responsive designs to interactive interfaces,
        each project reflects my dedication to building user-friendly and
        visually appealing web experiences.
      </p>
    </div>
  );
};
