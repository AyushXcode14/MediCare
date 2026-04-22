import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white to-slate-50">

      {/* ===== HEADER ===== */}
      <div className="text-center pt-16 px-4">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 tracking-wide">
          About <span className="text-primary">Riims</span>
        </h1>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Precision in Medicine, Warmth in Care.
        </p>
      </div>

      {/* ===== MAIN SECTION ===== */}
      <div className="max-w-6xl mx-auto my-16 px-6 flex flex-col md:flex-row items-center gap-12">

        <div className="relative">
          <img
            className="w-full md:max-w-[420px] rounded-2xl shadow-xl object-cover"
            src={assets.about_image}
            alt="hospital"
          />
          <div className="absolute -bottom-6 -right-6 bg-white shadow-lg rounded-xl px-6 py-4 hidden md:block">
            <p className="text-gray-800 font-semibold text-lg">10+ Years</p>
            <p className="text-gray-500 text-sm">of Trusted Care</p>
          </div>
        </div>

        <div className="md:w-1/2 text-gray-600 space-y-6 leading-relaxed">
          <p>
            Welcome to <span className="font-semibold text-gray-800">RIIMS</span>, where modern healthcare meets clinical excellence and compassionate service. We are committed to providing high-quality, patient-centric medical care through a strong team of experienced doctors, advanced diagnostic facilities, and a seamless digital appointment experience.
          </p>

          <p>
            At RIIMS, we understand that every patient is unique. Our multidisciplinary specialists work together to deliver accurate diagnosis, personalized treatment plans, and continuous medical support — ensuring comfort, safety, and faster recovery at every step of the healthcare journey.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Vision
            </h3>
            <p>
              Our vision is to become a trusted healthcare destination known for medical expertise, ethical practices, and innovation. We aim to bridge the gap between patients and the right specialists by combining world-class infrastructure with smart technology, making healthcare more accessible, efficient, and reliable for our community.
            </p>
          </div>
        </div>
      </div>

      {/* ===== WHY CHOOSE US ===== */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl p-8 transition duration-300 border-t-4 border-primary">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Smart Scheduling
            </h3>
            <p className="text-sm text-gray-600">
              Book appointments in seconds with our intelligent and
              hassle-free scheduling system.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl p-8 transition duration-300 border-t-4 border-primary">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Trusted Specialists
            </h3>
            <p className="text-sm text-gray-600">
              Access a curated network of highly qualified and experienced
              healthcare professionals.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl p-8 transition duration-300 border-t-4 border-primary">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Personalized Care
            </h3>
            <p className="text-sm text-gray-600">
              Smart health reminders, tailored recommendations, and continuous
              care tracking.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
