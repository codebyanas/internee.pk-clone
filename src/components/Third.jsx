import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import LazyLoad from 'react-lazyload';

import frontEndImg from '../assets/internship_array/FrontEnd.webp';
import backendImg from '../assets/internship_array/BackendDevelopment.webp';
import mobileAppImg from '../assets/internship_array/Mobile App Developer.webp';
import logoDesignerImg from '../assets/internship_array/logo-designer-working-computer-desktop.webp';
import cloudImg from '../assets/internship_array/cloud.webp';
import portraitWomanImg from '../assets/internship_array/portrait-woman-customer-service-worker.webp';
import chatbotImg from '../assets/internship_array/chatbotDevelopment.webp';
import figmaImg from '../assets/internship_array/figma.png';
import analysisImg from '../assets/internship_array/analysis.webp';

const Third = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  const [internships, setInternships] = useState([
    {
      img: frontEndImg,
      title: 'Front End Development Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: backendImg,
      title: 'Back End Development Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: mobileAppImg,
      title: 'Mobile App Development Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: logoDesignerImg,
      title: 'Logo Designing Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: cloudImg,
      title: 'Cloud Computing Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: mobileAppImg,
      title: 'Mobile App Development Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: logoDesignerImg,
      title: 'Logo Designing Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: portraitWomanImg,
      title: 'Graphic Designing Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: chatbotImg,
      title: 'Chatbot Development Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: figmaImg,
      title: 'Figma Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: analysisImg,
      title: 'Data Analytics Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    },
    {
      img: logoDesignerImg,
      title: 'Logo Designing Internship',
      description:
        "Internee.pk for your Cloud Computing journey? We offer a comprehensive curriculum crafted by industry experts, ensuring you grasp the intricacies of cloud platforms and services.",
    }
  ]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImage = src => new Promise(resolve => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve();
    });

    Promise.all(internships.map(internship => loadImage(internship.img)))
      .then(() => setIsLoading(false));
  }, [internships]);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "transparent" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "transparent" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="internships flex flex-col items-center gap-10 mt-10">
      <h1 className="text-lg font-bold w-3/4 m-auto text-center" data-aos="fade-right">👇 Click Below and grab your internship now 👇</h1>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <>
          <div className="lg:block hidden internship-container bg-green-600 rounded-3xl min-h-[100vh] max-w-[90vw] m-auto p-4" data-aos="zoom-in-down">
            <Slider {...settings}>
              {internships.map((internship, index) => (
                <div
                  className="card flex flex-col items-center gap-10 rounded-xl min-h-[85vh] bg-white p-3"
                  key={index}
                >
                  <LazyLoad height={200} offset={100}>
                    <img src={internship.img} width={'300px'} className="m-auto" />
                  </LazyLoad>
                  <div className="internship-info min-h-[60%] my-3">
                    <h1 className="font-bold text-center">{internship.title}</h1>
                    <p className="text-gray-700 text-center">{internship.description}</p>
                  </div>
                  <div className='flex justify-center'>
                    <button className="bg-green-600 text-white min-w-24 p-3 mt-3 rounded-xl text-center hover:opacity-80">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
            <p className='text-2xl text-white text-center mt-10' data-aos="fade-right">Learn skills,<span className='font-bold'>Market will be yours.</span></p>
          </div>

          <div className="block lg:hidden internship-container bg-green-600 rounded-3xl min-h-[70vh] max-w-[90vw] m-auto p-4" data-aos="zoom-in-down">
            <Slider {...settings2}>
              {internships.map((internship, index) => (
                <div
                  className="card flex flex-col items-center gap-10 rounded-xl min-h-[60vh] bg-white p-3 mb-10"
                  key={index}
                >
                  <LazyLoad height={200} offset={100}>
                    <img src={internship.img} width={'500px'} className="m-auto" />
                  </LazyLoad>
                  <div className="internship-info min-h-[60%] my-3">
                    <h1 className="font-bold text-center">{internship.title}</h1>
                    <p className="text-gray-700 text-center">{internship.description}</p>
                  </div>
                  <div className='flex justify-center'>
                    <button className="bg-green-600 text-white min-w-24 p-3 mt-3 rounded-xl text-center hover:opacity-80">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
            <p className='text-2xl text-white text-center mt-10'>Learn skills,<span className='font-bold'>Market will be yours.</span></p>
          </div>
        </>
      )}
    </div>
  );
};

export default Third;
