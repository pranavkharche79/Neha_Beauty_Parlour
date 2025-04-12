"use client";
import React, { useState } from "react";
import GoogleTranslate from "./GoogleTranslate";
import servicesData from "./services.json";
import Image from "next/image";
import { motion } from "framer-motion";
import "./globals.css";
const testimonials = [
  { name: "Jane Doe", quote: "Amazing service and friendly staff!" },
  { name: "John Smith", quote: "I love the new look I got here." },
  { name: "Emily Clark", quote: "Best beauty parlor in town!" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1529230815964-592d9b61876f?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder image 2
    "https://images.unsplash.com/photo-1535657823029-0fe64c7b8efb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder image 
  ];
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}
    >
      {/* Enhanced Navigation Bar */}
      <nav
        className={`py-4 fixed top-0 w-full z-10 transition-colors duration-300 ${
          isDarkMode
            ? "bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg"
            : "bg-gradient-to-r from-white to-gray-100 shadow-md"
        }`}


        style={{
          backgroundImage: isDarkMode ? "linear-gradient(to right, #1a202c, #2d3748)" : "linear-gradient(to right, #ffffff, #f7fafc)"
        }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-xl font-bold text-pink-500">Neha Beauty Parlor</div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              <svg className={`h-6 w-6 ${isDarkMode ? "text-white" : "text-gray-600"}`}


                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round" className={`${isDarkMode ? "text-white" : "text-gray-600"}`}
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2" className={`${isDarkMode ? "text-white" : "text-gray-600"}`}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="flex items-center justify-end">
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {["Services", "About Us", "Testimonials", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "")}`}
                    className={`px-3 py-2 rounded-lg font-medium transition-colors duration-200
                      ${
                        isDarkMode
                          ? "text-gray-300 hover:text-white hover:bg-gray-700"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-200"
                      }
                      `}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>

           {/* Dark Mode Toggle Switch */}
           <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-pink-500" />
            <span className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
              {isDarkMode ? "Dark" : "Light"}
            </span>
          </label>












            <button >
              <GoogleTranslate />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full shadow-md ${menuOpen ? "block" : "hidden"
            } ${isDarkMode ? "bg-gray-800 bg-opacity-90 backdrop-filter backdrop-blur-lg" : "bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg"}`}
          >
            <ul className="px-4 py-2">
              <li>
                <a
                  href="#services"
                  className="block py-2 hover:text-pink-500"
                  onClick={toggleMenu}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#aboutus"
                  className="block py-2 hover:text-pink-500"
                  onClick={toggleMenu}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="block py-2 hover:text-pink-500"
                  onClick={toggleMenu}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 hover:text-pink-500"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          {/* </button> */}
        </div>
      </nav>

      {/* Carousel */}
      <section className="py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 ${
                  index === currentImage ? "block" : "hidden"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentImage ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Image
                  src={image}
                  alt={`Beauty Image ${index + 1}`}
                  width={200}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImage ? "bg-pink-500" : "bg-gray-300"
                  } focus:outline-none`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-colors duration-300"
          >
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg shadow-md ${
                  isDarkMode ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <div className="flex items-center">
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={150}
                    height={150}
                    className="rounded-lg mr-4"
                  />
                  <div>
                    <h3
                      className={`text-xl font-semibold mb-2 ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {service.name}
                    </h3>
                    <p
                      className={`${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {service.description}{" "}
                      <span className="text-lg font-semibold">
                        {service.price} Rs
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-16 transition-colors duration-300 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-colors duration-300">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg shadow-md ${isDarkMode ? "bg-gray-700 text-white" : "bg-white"
                  }`}
              >
                <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} italic mb-2`}>
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="aboutus" className={`py-16 transition-colors duration-300 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            About Us
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <Image
                src="https://images.unsplash.com/photo-1529230815964-592d9b61876f?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Website Owner"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
            <p className="text-lg ">
              We are a team of experienced professionals dedicated to providing
              high-quality beauty and cosmetic services. Our goal is to help you
              look and feel your best.
            </p>
          </div>
        </div >
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            Contact Us
          </h2>
          <div className={`max-w-2xl mx-auto p-8 rounded-lg shadow-md ${
              isDarkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className={`block text-sm font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-700"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="Name"
                  name="Name" // Google Form field ID for Name
                  className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                    isDarkMode
                      ? "bg-gray-700 text-white"
                      : "bg-white text-gray-700"
                  }`}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className={`block text-sm font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="Email" // Google Form field ID for Email
                  className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                    isDarkMode
                      ? "bg-gray-700 text-white"
                      : "bg-white text-gray-700"
                  }`}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className={`block text-sm font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <input
                  type="text"
                  id="Message"
                  name="Message"
                  className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                    isDarkMode
                      ? "bg-gray-700 text-white"
                      : "bg-white text-gray-700"
                  }`}
                  rows="5"
                  required
                />
              </div>{" "}
              {/* Change from textarea to input type="text" */}
              {/* Add Google Form URL Here */}
              {/* Replace with your actual Google Form URL */}
              <button type="submit" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer (Optional) */}
      <footer
        className={`py-4 text-center transition-colors duration-300 ${isDarkMode ? "bg-gray-900" : "bg-gray-200"}`}
      >
        <p className={`${isDarkMode ? "text-white" : "text-gray-600"}`}>
          &copy; 2023 Beauty & Cosmetics. All rights reserved.
        </p>
      </footer>
    </div>
  );
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
    console.log(formObject);

    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScX3Ctkfinvylg7AQzgiJz9I20JioFomlAd9rlTYn3Uhx9Njg/formResponse";
    const searchParams = new URLSearchParams(formObject);

    try {
      const response = await fetch(googleFormUrl, {
        method: "POST",
        mode: "no-cors",
        body: searchParams,
      });
      console.log("Form submitted successfully!", response);
      event.target.reset();
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  }
}
