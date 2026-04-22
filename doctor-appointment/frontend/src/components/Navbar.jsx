import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  const navLinkStyle =
    "relative py-2 px-1 text-gray-600 hover:text-primary transition";

  return (
    <div className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200">

      <div className="flex items-center justify-between px-6 md:px-12 py-3">

        {/* LOGO */}
        <div onClick={() => navigate("/")} className="cursor-pointer flex items-center gap-2">
          <img src={assets.riims_logo} className="w-10" alt="" />
          <p className="text-3xl font-bold text-blue-900 border-gray-500">
            Riims
          </p>
          <span className="hidden md:block text-xs text-gray-500 mt-2">
            Trusted Healthcare
          </span>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 font-medium">

          <NavLink to="/" className={navLinkStyle}>
            HOME
          </NavLink>

          <NavLink to="/doctors" className={navLinkStyle}>
            ALL DOCTORS
          </NavLink>

          <NavLink to="/about" className={navLinkStyle}>
            ABOUT
          </NavLink>

          <NavLink to="/contact" className={navLinkStyle}>
            CONTACT
          </NavLink>

        </ul>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4">

          {/* USER DROPDOWN */}
          {token && userData ? (
            <div className="relative group cursor-pointer">

              <div className="flex items-center gap-2">
                <img
                  className="w-9 h-9 rounded-full border-2 border-primary object-cover"
                  src={userData.image}
                  alt=""
                />
              </div>

              <div className="absolute right-0 mt-4 w-56 bg-white rounded-2xl shadow-xl p-4 text-sm text-gray-600 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition">

                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-primary cursor-pointer py-2"
                >
                  My Profile
                </p>

                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-primary cursor-pointer py-2"
                >
                  My Appointments
                </p>

                <hr />

                <p
                  onClick={logout}
                  className="hover:text-red-500 cursor-pointer py-2"
                >
                  Logout
                </p>
              </div>
            </div>
          ) : (
            !location.pathname.includes("login") &&
            !location.pathname.includes("register") && (
              <button
                onClick={() => navigate("/login")}
                className="hidden md:block bg-gradient-to-r from-primary to-indigo-500 text-white px-8 py-2.5 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition"
              >
                Create Account
              </button>
            )
          )}

          {/* MOBILE MENU ICON */}
          <img
            onClick={() => setShowMenu(true)}
            className="w-6 md:hidden cursor-pointer"
            src={assets.menu_icon}
            alt=""
          />
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-[75%] shadow-2xl transform ${showMenu ? "translate-x-0" : "translate-x-full"
          } transition duration-300 md:hidden`}
      >
        <div className="flex items-center justify-between px-5 py-5 border-b">
          <div className="flex items-center gap-2">
            <img src={assets.riims_logo} className="w-10" alt="" />
            <p className="text-3xl font-bold text-blue-900 border-gray-500">
              Riims
            </p>
          </div>
          <img
            onClick={() => setShowMenu(false)}
            className="w-6 cursor-pointer"
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <ul className="flex flex-col gap-4 mt-8 px-6 text-lg font-medium text-gray-700">

          <NavLink onClick={() => setShowMenu(false)} to="/">
            Home
          </NavLink>

          <NavLink onClick={() => setShowMenu(false)} to="/doctors">
            All Doctors
          </NavLink>

          <NavLink onClick={() => setShowMenu(false)} to="/about">
            About
          </NavLink>

          <NavLink onClick={() => setShowMenu(false)} to="/contact">
            Contact
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
