import React from "react";
import { ProjectBox } from "../components/ProjectBox";

// project images
import projectImg from "../assets/project7.png";
import projectImg2 from "../assets/project5.png";
export const Project = () => {
  return (
    <div className=" mt-20 mx-auto flex flex-col items-center justify-center">
      <h1 className="font-bold  text-2xl my-10">My Projects</h1>
      <div className="flex flex-col sm:flex-row gap-8">
        {/* Using ProjectBox components */}
        <ProjectBox
          projectName="NeighborMC"
          projectDescription="Mongodb, NodeJS, React ,React-bootstrap, HTML"
          projectImg={projectImg}
          projectUrl="https://medical-center-frontend-delta.vercel.app/"
        />

        {/* 2 */}
        {/* Using ProjectBox components */}
        <ProjectBox
          projectName="Travel Management"
          projectDescription="Mongodb, NodeJS, React ,React-bootstrap, HTML"
          projectImg={projectImg2}
          projectUrl="https://tour-manager-frontend.vercel.app/home"
        />
      </div>
    </div>
  );
};
