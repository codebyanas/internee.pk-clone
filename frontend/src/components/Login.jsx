import React, { useState,useRef } from "react";
import { Link } from "react-router-dom";
const Login = () => {
  const [pass, setpass] = useState("");
  const [email, setemail] = useState("");
  const [show, setShow] = useState(false);
  const ref = useRef();
  const clicked = useRef();
  const handleClick = () => {
     setShow(!show)
}

  const handleSubmit = (e) => {
    if(email==="" || pass===""){ 
      alert("Please fill all the fields")
    }
    else if(!email.includes("@"))
    {
      alert("Invalid Email format!")
    }
    else if( pass.length<=5)
      {
        alert("Short Password!")
      }
     else{
      clicked.current.click();
     }
  }  

  return (
    <div className="min-h-[100vh] flex items-center justify-center w-screen">
      <div className="login w-3/4 md:w-1/3 m-auto p-3 rounded-2xl flex flex-col items-center justify-center shadow-2xl shadow-black">
        <img src="src/assets/logo.webp" width={"200px"} alt="logo" className="mb-3"/>
        <form className="flex flex-col items-center justify-center">
          <div className="flex justify-between border border-gray-400 px-2 max-h-10 min-w-5/6 rounded-lg mb-3">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e)=>{setemail(e.target.value)}}
              className="input w-2/3 h-8 m-1 outline-none"
            />
            <img src="src\assets\envalop.svg" className="cursor-pointer" />
          </div>
          <div className="flex justify-between border border-gray-400 px-2 max-h-10 min-w-5/6 rounded-lg mb-3">
            <input
              type={show?"text":"password"}
              placeholder="Password"
              value={pass}
              required
              maxLength={10}
              minLength={6}
              className="input w-2/3 m-1 h-8 outline-none "
              onChange={(e)=>{setpass(e.target.value)}}
            />
            <img src={show?"src\\assets\\closed-eye.svg":"src\\assets\\eye.svg"} ref={ref} className="cursor-pointer" onClick={handleClick}/>
          </div> 
          <div className="lower flex justify-between gap-3">
            <div className="remember flex items-center gap-2 justify-start">
            <input type="checkbox" className="form-checkbox cursor-pointer w-6 h-6 text-green-700 border-green-700 focus:ring-green-500"/>
            <span className="font-bold text-md text-gray-600">Remember Me</span>
            </div>
             <button className="bg-green-600 font-bold p-2 text-white cursor-pointer rounded-xl min-w-24" onClick={handleSubmit}>Sign in</button>
             <Link to="/" className="hidden" ref={clicked}>Sign Up</Link>
          </div>
          <span className="text-green-600 mt-2 cursor-pointer">Forgot Password?</span>
        </form>
      </div>
    </div>
  );
};

export default Login;
