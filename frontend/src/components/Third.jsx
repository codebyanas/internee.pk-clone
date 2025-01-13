import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LazyLoad from "react-lazyload";

import frontEndImg from "../assets/internship_array/FrontEnd.webp";
import backendImg from "../assets/internship_array/BackendDevelopment.jpg";
import mobileAppImg from "../assets/internship_array/Mobile App Developer.webp";
import logoDesignerImg from "../assets/internship_array/logo-design.jpg";
import cloudImg from "../assets/internship_array/cloud.webp";
import portraitWomanImg from "../assets/internship_array/IsGraphic_DesignAGoodCareerb.avif";
import chatbotImg from "../assets/internship_array/chatbotDevelopment.webp";
import figmaImg from "../assets/internship_array/figma.png";
import analysisImg from "../assets/internship_array/analysis.webp";

const Third = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const internships = [
    {
      img: frontEndImg,
      title: "Front End Development Internship",
      description:
        "Comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of front-end development.",
    },
    {
      img: backendImg,
      title: "Back End Development Internship",
      description:
        "Detailed backend development curriculum to prepare you for real-world challenges in server-side programming.",
    },
    {
      img: mobileAppImg,
      title: "Mobile App Development Internship",
      description:
        "Learn mobile application development with hands-on projects guided by industry professionals.",
    },
    {
      img: logoDesignerImg,
      title: "Logo Designing Internship",
      description:
        "Master the art of logo design with practical lessons and creative projects.",
    },
    {
      img: cloudImg,
      title: "Cloud Computing Internship",
      description:
        "Dive into cloud platforms with practical training and projects for an advanced learning experience.",
    },
    {
      img: portraitWomanImg,
      title: "Graphic Designing Internship",
      description:
        "Develop your graphic design skills with a structured and industry-relevant curriculum.",
    },
    {
      img: chatbotImg,
      title: "Chatbot Development Internship",
      description:
        "Build and deploy intelligent chatbots using the latest tools and techniques.",
    },
    {
      img: figmaImg,
      title: "Figma Internship",
      description:
        "Learn UI/UX design with Figma, creating user-friendly and visually appealing interfaces.",
    },
    {
      img: analysisImg,
      title: "Data Analytics Internship",
      description:
        "Analyze data effectively with a curriculum designed for aspiring data analysts.",
    },
  ];

  return (
    <div className="internships flex flex-col items-center gap-10 mt-10">
      <h1
        className="text-lg font-bold w-3/4 m-auto text-center"
        data-aos="fade-right"
      >
        👇 Click Below and grab your internship now 👇
      </h1>
      <div className="internship-container hidden lg:grid grid-cols-3 gap-6 bg-green-600 rounded-3xl p-6">
        {internships.map((internship, index) => (
          <div
            className="card flex flex-col items-center bg-white rounded-xl shadow-lg p-4"
            key={index}
            data-aos="zoom-in"
          >
            <LazyLoad height={200} offset={100}>
              <img
                src={internship.img}
                width="200px"
                className="m-auto rounded"
                alt={internship.title}
              />
            </LazyLoad>
            <h2 className="font-bold text-center mt-3">{internship.title}</h2>
            <p className="text-gray-700 text-center text-sm mt-2">
              {internship.description}
            </p>
            <button className="bg-green-600 text-white mt-4 px-4 py-2 rounded-lg hover:opacity-80">
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex flex-col gap-6 p-4">
        {internships.map((internship, index) => (
          <div
            className="card flex flex-col items-center bg-white rounded-xl shadow-lg p-4"
            key={index}
            data-aos="fade-up"
          >
            <LazyLoad height={200} offset={100}>
              <img
                src={internship.img}
                width="200px"
                className="m-auto rounded"
                alt={internship.title}
              />
            </LazyLoad>
            <h2 className="font-bold text-center mt-3">{internship.title}</h2>
            <p className="text-gray-700 text-center text-sm mt-2">
              {internship.description}
            </p>
            <button className="bg-green-600 text-white mt-4 px-4 py-2 rounded-lg hover:opacity-80">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Third;
