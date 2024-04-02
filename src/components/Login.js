import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background-image"
        />
      </div>
      <form className="absolute w-96 my-36 mx-auto left-0 right-0 p-12 bg-black text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold my-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="bg-gray-700 p-4 my-4 w-full   bg-opacity-60"
            type="text"
            placeholder="Full Name "
          />
        )}
        <input
          className="bg-gray-700 p-4 my-4 w-full   bg-opacity-60"
          type="email"
          placeholder="Email or Phone Number"
        />
        <input
          className="bg-gray-700 p-4 my-4 w-full bg-opacity-60"
          type="password"
          placeholder="Password"
        />

        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="cursor-pointer py-4" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already a User? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
