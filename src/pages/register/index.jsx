import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import toast, { Toaster } from "react-hot-toast";

const Index = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    Id: "", // email field
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
  };

  async function checkEmail(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validation before sending request
      if (
        formFields.name === "" ||
        formFields.Id === "" ||
        formFields.mobile === "" ||
        formFields.password === "" ||
        formFields.confirmPassword === ""
      ) {
        toast.error("All fields are required!");
        setIsLoading(false);
        return;
      }

      if (formFields.confirmPassword !== formFields.password) {
        toast.error("Passwords do not match!");
        setIsLoading(false);
        return;
      }

      const res = await axios.get(
        `https://eozoyxa2xl.execute-api.ap-south-1.amazonaws.com/prod/register-arnxtecom?email=${formFields.Id}`
      );

      if (res.data === formFields.Id) {
        toast.error("Email already exists!");
        setIsLoading(false);
      } else {
        signUp();
      }
    } catch (error) {
      console.error(error);
      toast.error("Error checking email. Try again later.");
      setIsLoading(false);
    }
  }

  const signUp = async () => {
    const { confirmPassword, ...dataToSend } = formFields;

    try {
      const res = await axios.post(
        "https://eozoyxa2xl.execute-api.ap-south-1.amazonaws.com/prod/register-arnxtecom",
        dataToSend
      );
      toast.success("Registration successful!");
    } catch (error) {
      console.error(error);
      toast.error("Error during registration. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="flex min-h-full flex-col justify-center px-6 py-1 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://arnxtmodelstest.s3.ap-south-1.amazonaws.com/register.png"
              alt="Your Company"
            />
            <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register yourself
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={checkEmail}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formFields.name}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Contact Number
                </label>
                <div className="mt-1">
                  <input
                    id="mobile"
                    name="mobile"
                    type="number"
                    required
                    value={formFields.mobile}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="Id"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="Id"
                    name="Id"
                    type="email"
                    required
                    value={formFields.Id}
                    onChange={handleInputChange}
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
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formFields.password}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={formFields.confirmPassword}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm ${
                    isLoading
                      ? "bg-gray-500"
                      : "bg-indigo-600 hover:bg-indigo-500"
                  }`}
                  disabled={isLoading}>
                  {isLoading ? "Registering..." : "Register"}
                </button>
              </div>
            </form>

            <p className="py-10 text-center text-sm text-gray-500">
              Already have an account?
              <a
                href="/login"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
