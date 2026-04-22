import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-32">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* LEFT — BRAND */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={assets.riims_logo} className="w-12" alt="" />
              <p className="text-2xl font-bold text-blue-900">
                Riims
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed max-w-md">
              where modern healthcare meets clinical excellence and compassionate service. We are committed to providing high-quality, patient-centric medical care through a strong team of experienced doctors, advanced diagnostic facilities, and a seamless digital appointment experience.
            </p>

            <p className="mt-6 text-sm text-gray-400">
              Compassion • Expertise • Technology
            </p>
          </div>

          {/* CENTER — NAVIGATION */}
          <div>
            <p className="text-gray-900 font-semibold text-lg mb-6">
              Navigation
            </p>

            <ul className="space-y-3 text-gray-600">

              <li>
                <NavLink to="/" onClick={() => scrollTo(0, 0)} className="hover:text-primary transition">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/doctors" onClick={() => scrollTo(0, 0)} className="hover:text-primary transition">
                  Find a Doctor
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" onClick={() => scrollTo(0, 0)} className="hover:text-primary transition">
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" onClick={() => scrollTo(0, 0)} className="hover:text-primary transition">
                  Contact
                </NavLink>
              </li>

              <li className="hover:text-primary cursor-pointer transition">
                Privacy Policy
              </li>

            </ul>
          </div>

          {/* RIGHT — CONTACT */}
          <div>
            <p className="text-gray-900 font-semibold text-lg mb-6">
              Contact
            </p>

            <div className="space-y-3 text-gray-600">

              <p>📍 Riims Hospital, Bariatu, Ranchi 834001</p>
              <p>📞 +91 292939392</p>
              <p>✉️ riims@gmail.com</p>

            </div>

            {/* EMERGENCY */}
            <div className="mt-6 border-l-4 border-red-500 pl-4">
              <p className="text-sm text-gray-500">Emergency Support</p>
              <p className="text-red-600 font-semibold text-lg">
                24×7 Helpline
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Riims • Designed & Developed by
        <span className="text-gray-700 font-medium"> Ayush Srivastava</span>
      </div>

    </footer>
  );
};

export default Footer;
