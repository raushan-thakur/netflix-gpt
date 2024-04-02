import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrormessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    //Validate the Form Data
    const message = checkValidData(email.current.value, password.current.value);
    setErrormessage(message);
    if (message) return;

    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage("User Not Found");
        });
    }
  };
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute w-96 my-32 mx-auto left-0 right-0 p-12 bg-black text-white rounded-lg bg-opacity-80"
      >
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
          ref={email}
          className="bg-gray-700 p-4 my-4 w-full   bg-opacity-60"
          type="text"
          placeholder="Email or Phone Number"
        />
        <input
          ref={password}
          className="bg-gray-700 p-4 my-4 w-full bg-opacity-60"
          type="password"
          placeholder="Password"
        />
        <p className="text-xl text-red-600 p-2  ">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
