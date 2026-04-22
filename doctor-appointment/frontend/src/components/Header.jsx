import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='px-4 mx-auto mt-4'>
      <div className='flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-blue-900 to-indigo-800 rounded-3xl px-6 md:px-14 lg:px-20 overflow-hidden shadow-2xl relative'>

        {/* Background Decorative Element (Optional subtle circle for depth) */}
        <div className='absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 pointer-events-none'></div>

        {/* -------- Left Side: Content -------- */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 py-12 md:py-24 relative z-10'>

          {/* Trust Badge */}
          <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20'>
            <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse'></span>
            <p className='text-xs font-medium text-white tracking-wide uppercase'>24/7 Verified Specialists</p>
          </div>

          <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight md:leading-tight'>
            Book Appointment <br />
            <span className='text-blue-200 font-serif italic'>With Trusted Doctors</span>
          </h1>

          <div className='flex flex-col md:flex-row items-center gap-4 text-white text-sm font-light opacity-90'>
            <img className='w-28' src={assets.group_profiles} alt="Doctor Profiles" />
            <p className='max-w-sm'>
              Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />
              schedule your appointment hassle-free.
            </p>
          </div>

          <a
            className='flex items-center gap-3 bg-white px-8 py-4 rounded-full text-blue-900 text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group'
            href="#speciality"
          >
            Book Appointment
            <img className='w-3 group-hover:translate-x-1 transition-transform duration-300' src={assets.arrow_icon} alt="" />
          </a>
        </div>

        {/* --------- Right Side: Image --------- */}
        <div className='md:w-1/2 relative z-10 flex items-end justify-end'>
          {/* Ensure the image is cut out (transparent bg) for best effect */}
          <img
            className='w-full md:w-[90%] lg:w-[85%] h-auto object-cover rounded-lg md:absolute md:bottom-0 md:right-0 transform translate-y-2 md:translate-y-0'
            src={assets.header_img}
            alt="Medical Team"
          />
        </div>
      </div>
    </div>
  )
}

export default Header