import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"; // Import React Hot Toast
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {  useRouter } from "next/router";

const Index = () => {

  const router = useRouter()
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false); // isLoading for button

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const signIn = async (e) => {
    e.preventDefault();

    if (formFields.email === "" || formFields.password === "") {
      toast.error("Please fill all the fields");
      return;
    }

    setIsLoading(true); 
    try {
      const res = await axios.post(
        `https://eozoyxa2xl.execute-api.ap-south-1.amazonaws.com/prod/login_arnxtecom`,
        formFields
      );

      const token = res.data.token;
      if (!token) {
        toast.error("Invalid Credentials");
      } else {
        verifyToken(token);
      }
    } catch (error) {
      toast.error("An error occurred during login");
      console.error(error);
    } finally {
      setIsLoading(false); 
    }
  };

  const verifyToken = async (token) => {
    try {
      const userInfo = {
        email: formFields.email,
        token: token,
      };

      const res = await axios.post(
        "https://eozoyxa2xl.execute-api.ap-south-1.amazonaws.com/prod/login-arnxt-submit",
        userInfo
      );

      if (res.data.message === "Verified") {
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("email", formFields.email);
        sessionStorage.setItem("isLogin", true);
        toast.success("Login successful");
        router.push('/')
        
      } else {
        toast.error("Invalid Credentials");
      }
    } catch (error) {
      toast.error("Verification failed");
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <Toaster /> {/* Toast notification container */}
      <div className="container mx-auto">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://arnxtmodelstest.s3.ap-south-1.amazonaws.com/login.png"
              alt="Your Company"
            />

            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={signIn}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formFields.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={formFields.password}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading} // Disable button while loading
                  className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}>
                  {isLoading ? "Signing in..." : "Sign in"}{" "}
                  {/* Loading indicator */}
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Don’t have an account?
              <a
                href="/register"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2">
                Register Now
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
