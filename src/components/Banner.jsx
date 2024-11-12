import React from "react";
import photo from "../assets/np2.jpg";
export const Banner = ({ handleDownloadClick }) => {
  return (
    <div className=" w-[100%] bg-[rgb(254,243,199)] py-3 text-gray-700  rounded-tl-3xl rounded-br-3xl ">
      <div className=" text-center justify-center items-center  mx-auto flex flex-col  md:flex-row gap-8 w-[95%] m-1 border border-blue-600 rounded-tl-3xl rounded-br-3xl ">
        <div className="mt-14 flex flex-col items-center justify-center gap-4 md:mt-0  md:flex-col ">
          <h1 className="text-xl text-gray-800">Frontend Developer</h1>
          <p className="text-sm">
            React.js, Node.js, React-Redux,Tailwind.css, HTML, CSS
          </p>
          <button
            className="font-semibold  w-full bg-gradient-to-r from-indigo-500   via-purple-500 to-pink-500 text-white p-2 px-5 rounded-tl-3xl rounded-br-3xl shadow-md"
            onClick={handleDownloadClick}
          >
            My Resume
          </button>
        </div>

        <div className=" my-3 overflow-hidden w-48 h-48  md:w-60 md:h-60  rounded-full ">
          <img
            src={photo}
            className="w-full h-full  object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
