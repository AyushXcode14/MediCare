import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoctor, setFilterDoctor] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoctor(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoctor(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const specialities = [
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  return (
    <div className="bg-gradient-to-b from-white to-slate-50 px-4 md:px-10 py-10">

      {/* ===== HEADER ===== */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Find Your Specialist
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          Connect with top certified doctors and book appointments instantly.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* ===== FILTER SIDEBAR ===== */}
        <div className="lg:w-1/4">

          <button
            onClick={() => setShowFilter(!showFilter)}
            className="lg:hidden mb-4 bg-primary text-white px-4 py-2 rounded-lg shadow"
          >
            Filters
          </button>

          <div
            className={`bg-white rounded-2xl shadow-md p-6 space-y-3 text-sm transition-all duration-300
            ${showFilter ? "block" : "hidden lg:block"}`}
          >
            <h3 className="font-semibold text-gray-800 mb-2">
              Specialities
            </h3>

            {specialities.map((item, index) => (
              <p
                key={index}
                onClick={() =>
                  speciality === item
                    ? navigate("/doctors")
                    : navigate(`/doctors/${item}`)
                }
                className={`cursor-pointer px-3 py-2 rounded-lg transition-all
                ${speciality === item
                    ? "bg-primary text-white shadow"
                    : "hover:bg-gray-100 text-gray-600"
                  }`}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* ===== DOCTOR GRID ===== */}
        <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filterDoctor.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 cursor-pointer overflow-hidden"
            >

              {/* IMAGE */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />

                <span
                  className={`absolute top-4 left-4 text-xs px-3 py-1 rounded-full font-medium
                  ${item.available
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                    }`}
                >
                  {item.available ? "Available" : "Not Available"}
                </span>
              </div>

              {/* DETAILS */}
              <div className="p-5">

                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>

                <p className="text-primary text-sm font-medium mt-1">
                  {item.speciality}
                </p>

                <div className="mt-4 flex items-center justify-between text-sm">
                  <p className="text-gray-500">Book Appointment</p>

                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                    →
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Doctors;
