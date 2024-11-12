import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
// redux
import { useSelector } from "react-redux";
export const Layout = () => {
  const light = useSelector((state) => state.light.value);
  return (
    <div
      className={`w-full mx-auto ${
        light ? "bg-slate-50 text-gray-500" : "bg-gray-800 text-white"
      }`}
    >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
