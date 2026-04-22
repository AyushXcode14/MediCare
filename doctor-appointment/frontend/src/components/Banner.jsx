import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary to-indigo-600 rounded-3xl mx-4 md:mx-10 my-24 px-6 md:px-14 py-12 md:py-16 shadow-xl">

      {/* SOFT GLOW */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl"></div>

      <div className="relative flex flex-col md:flex-row items-center">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-white">

          <p className="uppercase tracking-wider text-sm opacity-90">
            Your Health, Our Priority
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mt-3">
            Book Appointments <br /> with Trusted Specialists
          </h2>

          <p className="mt-4 text-white/90 max-w-lg text-sm md:text-base">
            Experience seamless healthcare with 100+ verified doctors,
            instant scheduling, and personalized medical support.
          </p>

          {/* TRUST STATS */}
          <div className="flex gap-6 mt-6 text-sm">
            <div>
              <p className="text-2xl font-bold">100+</p>
              <p className="opacity-80">Doctors</p>
            </div>
            <div>
              <p className="text-2xl font-bold">50k+</p>
              <p className="opacity-80">Patients</p>
            </div>
            <div>
              <p className="text-2xl font-bold">10+</p>
              <p className="opacity-80">Years</p>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => {
              navigate("/login");
              navigate('/login');
            }}
            className="mt-8 bg-white text-primary font-medium px-10 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            Create Account
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex flex-1 justify-end relative mt-10 md:mt-0">

          <img
            src={assets.appointment_img}
            alt=""
            className="w-[320px] lg:w-[420px] drop-shadow-2xl hover:scale-105 transition duration-500"
          />

        </div>
      </div>
    </div>
  );
};

export default Banner;
