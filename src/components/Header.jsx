import React, { useEffect, useRef, useState } from "react";
// icons
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
// redux
import { useDispatch, useSelector } from "react-redux";
import { toggleLight } from "../store.js";
// file
import { searchResult } from "../assets/searchData.js";
import { ShowResult } from "./ShowResult.jsx";
export const Header = () => {
  const [showInput, setShowInput] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [inputString, setInputString] = useState("");
  const [showSearchResult, setShowSearchResult] = useState([]);

  const searchRef = useRef(null);
  // redux
  const dispatch = useDispatch();
  const light = useSelector((state) => state.light.value);

  const toggleMode = () => {
    dispatch(toggleLight(!light));
  };

  const toggleInput = () => {
    setShowInput(!showInput);
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleSubmit = (inputString) => {
    const trimmed = inputString.trim();
    const filteredResult = Object.keys(searchResult).filter((key) =>
      key.toLowerCase().includes(trimmed)
    );
    setInputString("");
    setShowSearchResult(filteredResult);
    // Clear the input after submitting
    setShowInput(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearchResult([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const intervalID = setTimeout(() => {
      if (inputString) {
        handleSubmit(inputString);
      }
    }, 2000);

    return () => clearTimeout(intervalID);
  }, [inputString]);

  return (
    <div
      className={`border w-full shadow-sm z-50  sticky top-0 left-0 ${
        light ? "bg-gray-50" : "bg-gray-900"
      }`}
    >
      <div
        className={`w-[90%] sm:w-4/5 mx-auto flex flex-row justify-between items-center py-2 `}
      >
        {/* logo */}
        <div className=" flex gap-2 items-center">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-white font-bold text-xl py-1 px-2 ">
            Hyemee's
          </div>
          <div>space</div>
        </div>
        {/* search bar */}
        <div className="flex gap-2 items-center">
          <AiOutlineSearch onClick={toggleInput} />
          <input
            type="text"
            className="hidden pl-2 text-gray-600 md:block bg-slate-100"
            onChange={(e) => setInputString(e.target.value)}
            value={inputString}
          />
          <input
            onChange={(e) => setInputString(e.target.value)}
            value={inputString}
            type="text"
            className={`${
              showInput ? " absolute top-10 left-0 w-full md:block " : "hidden"
            }    rounded-md pl-3 py-1
               bg-slate-100 md:hidden text-gray-600`}
            placeholder="Search.."
          />
        </div>
        <div className="hidden sm:block">
          <ul className="flex gap-5 items-center ">
            <li className="cursor-pointer hover:text-purple-700">Home</li>
            <li className="cursor-pointer hover:text-purple-700">About</li>
            <li className="cursor-pointer hover:text-purple-700">Projects</li>
            <li className="cursor-pointer hover:text-purple-700">Contact</li>
          </ul>
        </div>
        <div className="sm:hidden">
          <IoMenuSharp className="cursor-pointer" onClick={toggleMenu} />
        </div>
        {showMenu && (
          <div
            className={`w-[50%]  absolute top-[100%] right-0 shadow-lg ${
              light ? "bg-slate-50 " : "bg-gray-900 text-white"
            }`}
          >
            <div className="pl-2 pt-2">
              <IoMdClose
                onClick={closeMenu}
                className="cursor-pointer"
                size={20}
              />
            </div>
            <ul
              className={`flex flex-col  w-[50%]  min-h-full py-5 gap-5 items-center  mx-auto ${
                light ? "bg-slate-50 " : "bg-gray-900 text-white"
              }`}
            >
              <li className="cursor-pointer hover:text-purple-700">Home</li>
              <li className="cursor-pointer hover:text-purple-700">About</li>
              <li className="cursor-pointer  hover:text-purple-700">
                Projects
              </li>
              <li className="cursor-pointer hover:text-purple-700">Contact</li>
            </ul>
          </div>
        )}

        <div>
          {light ? (
            <FaMoon onClick={toggleMode} />
          ) : (
            <FaSun onClick={toggleMode} />
          )}
        </div>
      </div>
      {showSearchResult.length > 0 && (
        <div ref={searchRef}>
          <ShowResult showSearchResult={showSearchResult} />
        </div>
      )}
    </div>
  );
};
