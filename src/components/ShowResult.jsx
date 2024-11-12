import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
export const ShowResult = ({ showSearchResult }) => {
  const light = useSelector((state) => state.light.value);
  console.log(showSearchResult);
  return (
    <div
      className={`absolute z-10  w-[50%] shadow-md  p-10 ${
        light ? "bg-gray-50" : "bg-gray-900"
      }`}
    >
      <h1 className="font-bold">Search Research</h1>
      <ul>
        <li className="cursor-pointer">
          <Link to={`/${showSearchResult}`}>{showSearchResult}</Link>
        </li>
      </ul>
    </div>
  );
};
