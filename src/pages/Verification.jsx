import React from "react";
import mail from "../assets/mail.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Verification = () => {
  return (
    <div className="flex flex-col  ">
    <Navbar />
    <div className=" min-h-screen pt-32  lg:mx-96 flex flex-grow flex-col items-center">
      <div className="sm:text-center  text-justify px-4">
        <h1 className="font-bold text-2xl lg:text-4xl text-center">Please verify your email...</h1>
        <div className="flex justify-center">
          <img src={mail} className="h-24 w-auto" alt="Mail" />
        </div>
        <p className=" text-gray-500 lg:text-base text-sm pt-5">
          Please verify your email address. We've sent a confirmation email to{" "}
        </p>
        <h3 className="  pt-5 font-semibold text-center">accout@refero@gmail.com</h3>
        <p className=" text-gray-500 lg:text-base text-sm pt-5">
          Click the confirmation link in that email to begin using Dribble
        </p>
        <p className=" text-gray-500 lg:text-base text-sm pt-5">
          Didn't receive the email? Check your soam folder, it may have been
          caught by filter. If you still don't see it you can{" "}
          <a className="text-pink-600 font-medium lg:text-base text-sm" href="/">resend the confirmation email</a>
        </p>         

        <p className=" text-gray-500 lg:text-base text-sm  pt-5">
          Wrong email address. <a href="/" className="text-pink-600 font-medium">Change it.</a>
        </p>
      </div>

    </div>
    <Footer/>
    </div>
  );
};

export default Verification;
