import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateUserProfileData = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);

      if (image) {
        formData.append("image", image);
      }

      const res = await axios.post(
        `${backendUrl}/api/user/update-profile`,
        formData,
        { headers: { token } }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        if (image) {
          setUserData((prev) => ({
            ...prev,
            image: URL.createObjectURL(image),
          }));
        }
        setIsEdit(false);
        setImage(false);
        await loadUserProfileData();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    userData && (
      <div className="max-w-4xl mx-auto mt-10 pb-20">

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-100">

          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 border-b border-slate-100 flex flex-col md:flex-row items-center gap-8">

            {/* Image Upload / Display */}
            <div className="relative group">
              {isEdit ? (
                <label htmlFor="image" className="cursor-pointer block relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img
                      className="w-full h-full object-cover opacity-80"
                      src={image ? URL.createObjectURL(image) : userData.image}
                      alt="Profile"
                    />
                  </div>
                  {/* Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-full group-hover:bg-black/30 transition-all">
                    <img className="w-8 h-8 filter invert opacity-80" src={assets.upload_icon} alt="Upload" />
                  </div>
                  <input
                    onChange={(e) => setImage(e.target.files[0])}
                    type="file"
                    id="image"
                    hidden
                  />
                </label>
              ) : (
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img className="w-full h-full object-cover" src={userData.image} alt="Profile" />
                </div>
              )}
            </div>

            {/* Name and Role */}
            <div className="text-center md:text-left flex-1">
              {isEdit ? (
                <input
                  className="bg-white border border-slate-300 rounded px-3 py-2 text-3xl font-semibold text-slate-800 focus:outline-none focus:border-blue-500 w-full max-w-md"
                  type="text"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
              ) : (
                <h1 className="text-3xl font-bold text-slate-800">{userData.name}</h1>
              )}
              <p className="text-slate-500 mt-1 font-medium">Patient ID: #UD-{userData._id ? userData._id.slice(-6).toUpperCase() : '0000'}</p>
            </div>

            {/* Edit/Save Buttons (Top Right for Desktop) */}
            <div className="hidden md:block">
              {isEdit ? (
                <button
                  disabled={loading}
                  onClick={updateUserProfileData}
                  className="bg-blue-600 text-white px-8 py-2.5 rounded-lg shadow-sm hover:bg-blue-700 transition-all font-medium"
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              ) : (
                <button
                  onClick={() => setIsEdit(true)}
                  className="border border-slate-300 text-slate-700 px-8 py-2.5 rounded-lg hover:bg-slate-50 transition-all font-medium bg-white shadow-sm"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          {/* Details Grid */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Left Column: Contact Info */}
            <div className="space-y-6">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-[100px_1fr] items-center">
                  <span className="text-slate-500 font-medium text-sm">Email</span>
                  <span className="text-slate-800 text-sm truncate">{userData.email}</span>
                </div>

                <div className="grid grid-cols-[100px_1fr] items-start">
                  <span className="text-slate-500 font-medium text-sm mt-2">Phone</span>
                  {isEdit ? (
                    <input
                      type="text"
                      value={userData.phone}
                      onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    />
                  ) : (
                    <span className="text-blue-600 text-sm mt-2">{userData.phone}</span>
                  )}
                </div>

                <div className="grid grid-cols-[100px_1fr] items-start">
                  <span className="text-slate-500 font-medium text-sm mt-2">Address</span>
                  {isEdit ? (
                    <div className="space-y-2">
                      <input
                        className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                        onChange={(e) => setUserData((prev) => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                        value={userData.address.line1}
                        placeholder="Address Line 1"
                        type="text"
                      />
                      <input
                        className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                        onChange={(e) => setUserData((prev) => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                        value={userData.address.line2}
                        placeholder="Address Line 2"
                        type="text"
                      />
                    </div>
                  ) : (
                    <span className="text-slate-700 text-sm leading-relaxed mt-2">
                      {userData.address.line1} <br /> {userData.address.line2}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Basic Info */}
            <div className="space-y-6">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
                Personal Information
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-[100px_1fr] items-center">
                  <span className="text-slate-500 font-medium text-sm">Gender</span>
                  {isEdit ? (
                    <select
                      className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                      onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
                      value={userData.gender}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  ) : (
                    <span className="text-slate-700 text-sm">{userData.gender}</span>
                  )}
                </div>

                <div className="grid grid-cols-[100px_1fr] items-center">
                  <span className="text-slate-500 font-medium text-sm">Date of Birth</span>
                  {isEdit ? (
                    <input
                      className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                      type="date"
                      onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
                      value={userData.dob}
                    />
                  ) : (
                    <span className="text-slate-700 text-sm">{userData.dob}</span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Action Button (Visible only on small screens) */}
          <div className="md:hidden p-6 border-t border-slate-100 flex justify-end">
            {isEdit ? (
              <button
                disabled={loading}
                onClick={updateUserProfileData}
                className="w-full bg-blue-600 text-white px-8 py-2.5 rounded-lg shadow-sm hover:bg-blue-700 transition-all font-medium"
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            ) : (
              <button
                onClick={() => setIsEdit(true)}
                className="w-full border border-slate-300 text-slate-700 px-8 py-2.5 rounded-lg hover:bg-slate-50 transition-all font-medium bg-white shadow-sm"
              >
                Edit Profile
              </button>
            )}
          </div>

        </div>
      </div>
    )
  );
};

export default MyProfile;