import React from "react";
import { useSelector } from "react-redux";
export const Footer = () => {
  const theme = useSelector((state) => state.light.value);

  return (
    <div
      className={`w-full p-8 mt-20   border-t-4 border-purple-600 rounded-t-lg ${
        theme ? "bg-gray-100" : "bg-gray-900"
      }`}
    >
      <div className=" w-[90%] grid gap-5 md:grid-cols-2 mx-auto">
        {/* first col */}
        <div className=" ">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-white font-bold text-xl py-1 px-2 mr-3 ">
            Hyemee's
          </span>
          <span>space</span>
        </div>
        {/* menu second*/}
        <div className=" flex flex-col gap-5 justify-end md:flex-row">
          <div>
            <h1 className="font-bold">Menu</h1>
            <ul className="flex gap-5 items-center ">
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
            </ul>
          </div>

          <div className="">
            <h1 className="font-bold">Follow Me</h1>
            <ul className="flex gap-5 items-center ">
              <li>Github</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full mt-5 pt-3  border-t-2 md: text-center">
        <p>Hyemee's space is made by Hyemee Park</p>
      </div>
    </div>
  );
};
