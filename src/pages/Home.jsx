import React, { useState } from "react";

import HyeMeePark from "../assets/hyemeePark.pdf";

import { Banner } from "../components/Banner";
import { Contact } from "./Contact";
import { About } from "./About";
import { Project } from "./Project";
export const Home = () => {
  const handleMouseEnter = () => {
    setShowDiv(true);
  };
  const handleMouseLeave = () => {
    setShowDiv(false);
  };

  const handleDownloadClick = () => {
    window.open(HyeMeePark, "_blank");
  };

  return (
    <div className="w-[90%] mx-auto">
      {/* intro */}
      <About />
      {/* banner */}
      <Banner handleDownloadClick={handleDownloadClick} />

      {/* project */}
      <Project />
      {/* contact */}
      <Contact />
    </div>
  );
};
