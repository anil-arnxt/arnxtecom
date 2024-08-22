import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const signIn = async (e) => {
    e.preventDefault();
    console.log(formFields);

    try {
      if (formFields.email === "" || formFields.password === "") {
        setAlertMessage("Fill all the fields");
        return;
      }

      const res = await axios.post(
        `https://eozoyxa2xl.execute-api.ap-south-1.amazonaws.com/prod/register`,
        formFields
      );

      const token = res.data.token;
      if (!token) {
        setAlertMessage("Invalid Credentials");
      } else {
        verifyToken(token, res.data.role);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const verifyToken = async (token, role) => {
    try {
      const userInfo = {
        email: formFields.email,
        token: token,
        role: role,
      };

      const res = await axios.post(
        "https://eozoyxa2xl.execute-api.ap-south-1.amazonaws.com/prod/newsubmit",
        userInfo
      );

      if (res.data.message === "Verified" && res.data.item === undefined) {
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("email", userInfo.email);
        sessionStorage.setItem("isLogin", true);
      }

      if (res.data.message === "Verified" && res.data.item === "admin") {
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("email", userInfo.email);
        sessionStorage.setItem("isLogin", true);
        window.location.href = "/dashboard";
      } else {
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
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
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
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

              {alertMessage && (
                <p className="text-red-600 text-sm">{alertMessage}</p>
              )}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Sign in
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
