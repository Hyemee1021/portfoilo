import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/mqakpgog", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json(); // Get the response data once

    if (response.ok) {
      toast.success("Message sent successfully.");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } else {
      const errorMessage = responseData.errors
        .map((err) => err.message)
        .join(", ");
      toast.error(`Error: ${errorMessage}`);
      console.error("Error details:", responseData);
    }
  };

  return (
    <div className="my-32 mx-auto flex flex-col justify-center items-center">
      <h1 className="mb-8 text-2xl font-bold">Contact</h1>
      <p className="text-center mb-8">
        Please reach out to me regarding any topics in web development when you
        want to connect.
      </p>
      <div className="w-[90%] sm:w-[60%] md:w-[40%]">
        <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex flex-row gap-3">
            <label htmlFor="name">Name : </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              className="w-[80%] pl-2 shadow-sm"
              onChange={handleFormData}
              required
            />
          </div>
          <div className="flex flex-row gap-3">
            <label htmlFor="email">Email : </label>
            <input
              className="w-[80%] pl-2 shadow-sm"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleFormData}
              required
            />
          </div>
          <div className="flex flex-row gap-3">
            <label htmlFor="message">Message : </label>
            <textarea
              className="w-[75%] pl-2 shadow-sm"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleFormData}
              required
            />
          </div>
          <button
            className=" mt-5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl text-white font-bold text-xl py-1 px-2 shadow-md"
            type="submit"
          >
            Send
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};
