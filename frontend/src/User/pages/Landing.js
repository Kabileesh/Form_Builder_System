import React from "react";
import { Link, Navigate } from "react-router-dom";
import LandingHeader from "../layouts/LandingHeader";
import Footer from "../layouts/Footer";

const Landing = () => {
  if (window.sessionStorage.getItem("accessToken"))
    return <Navigate to="/forms" />;

  return (
    <div className="bg-white">
      <LandingHeader />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-28 sm:py-28 lg:py-28">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Beyond forms, we build Experiences
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Design. Capture. Connect. Elevate your business with our forms.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to={"/login"}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        ></div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
