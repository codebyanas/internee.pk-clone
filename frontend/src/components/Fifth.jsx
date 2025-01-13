import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Fifth = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const [remarks] = useState([
    {
      name: 'Rabia Zain',
      location: 'Lahore, Pakistan',
      remark: 'This platform helps students to boost their career with hands-on practice with learning as well.',
    },
    {
      name: 'Kashan Soomro',
      location: 'Karachi, Pakistan',
      remark: 'Thanks to internee.pk, I grew up my skills here and now I am working as a Flutter Developer in a US company.',
    },
    {
      name: 'Mohammad Rafiq',
      location: 'Larkana, Pakistan',
      remark: 'I find internee.pk to be outstanding to get hands-on experience. Sometimes you have to spend to make a lot of projects.',
    },
  ]);

  return (
    <div className="bg-gray-50 py-10">
      <div className="text-center mb-10" data-aos="fade-up">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          What Students are saying about internee.pk
        </h1>
        <p className="text-gray-600 mt-2">
          Around 1500+ students have said how good internee.pk helped them in their career 👨‍💻
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {remarks.map((remark, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg border hover:shadow-xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-500 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12 17.75l-6.16 3.63 1.65-7.03L2 9.27l7.19-.61L12 2.5l2.81 6.16 7.19.61-5.49 5.08 1.65 7.03L12 17.75z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">"{remark.remark}"</p>
              <h3 className="text-lg font-semibold text-gray-800">{remark.name}</h3>
              <p className="text-sm text-gray-500">{remark.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fifth;
