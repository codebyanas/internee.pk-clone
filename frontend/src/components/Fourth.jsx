import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Fourth = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
   }, [])  
  return (
    <div className="mt-20">
      <div className="task-portal flex flex-col-reverse lg:flex-row gap-6 max-w-screen">
        <div className="left lg:max-w-[40%] max-w-full lg:min-h-[100vh] lg:flex flex-col justify-center my-6 lg:my-0">
          <img src="https://i.postimg.cc/tJ8RLywM/task.png" alt="portal" data-aos = "fade-right"/>
        </div>
        <div className="right lg:max-w-[60%] max-w-full">
          <p className="font-bold text-xl w-3/4 m-auto text-center lg:w-full lg:m-0 lg:text-left">Our own task portal</p>
          <h1 className="text-6xl font-bold w-3/4 m-auto text-center lg:w-full lg:m-0 lg:text-left">
            Manage Project Via Own Task Portal
          </h1>
          <p className="text-2xl text-gray-500 mt-3 w-3/4 m-auto text-center lg:w-full lg:m-0 lg:text-left">
            Welcome to internee.pk task portal. Where Tasks Transform Into
            Skills
          </p>
          <div className="flex flex-wrap w-full mt-6">
            <div className="flex gap-6 w-[45%] items-start mt-3" data-aos = "fade-left">
              <img
                src="src\assets\portal\presentation-play.svg"
                alt="..."
                className="mt-4"
              />
              <p className="text-gray-500 text-lg">
                <span className="text-black font-bold">Hands on Projects </span>{" "}
                we believe in learning by doing. Dive into hands-on projects
                that simulate real-world scenarios. From coding challenges to
                creative projects, every task is crafted to impart practical
                skills that resonate in professional environments.
              </p>
            </div>

            <div className="flex gap-6 w-[45%] items-start  mt-3" data-aos = "fade-left">
              <img
                src="src\assets\portal\playlist-check.svg"
                alt="..."
                className="mt-4"
              />
              <p className="text-gray-500 text-lg">
                <span className="text-black font-bold">How to represent yourself </span>
                More than just completing tasks, It empowers you to showcase your journey. Every completed task contributes to your digital portfolio, a dynamic representation of your skills and accomplishments. Let your work speak volumes about your capabilities.
              </p>
            </div>

            <div className="flex gap-6 w-[45%] items-start  mt-3" data-aos = "fade-left">
              <img
                src="src\assets\portal\cellphone-link.svg"
                alt="..."
                className="mt-4"
              />
              <p className="text-gray-500 text-lg">
                <span className="text-black font-bold">SDLC Techniques </span>
                Understanding the Software Development Life Cycle (SDLC) is pivotal in the tech world. Acquire skills that align with industry standards and boost your project management proficiency.
              </p>
            </div>

            <div className="flex gap-6 w-[45%] items-start  mt-3" data-aos = "fade-left">
              <img
                src="src\assets\portal\account-multiple-plus-outline.svg"
                alt="..."
                className="mt-4"
              />
              <p className="text-gray-500 text-lg">
                <span className="text-black font-bold">Easy to understand </span>
                Learning shouldn't be complicated. Our tasks are designed to be easily comprehensible, ensuring a smooth learning experience for everyone. Whether you're a seasoned professional or a beginner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
