import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
export const ShowResult = ({ showSearchResult }) => {
  const light = useSelector((state) => state.light.value);

  return (
    <div
      className={`fixed inset-0 z-10 w-[50%] h-screen shadow-md p-10 ${
        light ? "bg-gray-50" : "bg-gray-900"
      }`}
    >
      <h1 className="font-bold">Search Research</h1>
      <ul className="mt-5">
        <li className="cursor-pointer hover:text-purple-700">
          <Link to={`/${showSearchResult}`}>{showSearchResult}</Link>
        </li>
      </ul>
    </div>
  );
};
