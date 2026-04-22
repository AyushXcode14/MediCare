import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className='flex flex-col items-center gap-4 my-20 text-gray-800 md:mx-10'>

      {/* Section Header */}
      <div className='text-center space-y-2 mb-8'>
        <h1 className='text-4xl font-bold text-slate-900 tracking-tight'>Our Medical Specialists</h1>
        <div className='w-20 h-1.5 bg-blue-600 mx-auto rounded-full'></div>
        <p className='sm:w-1/2 mx-auto text-center text-slate-500 text-sm mt-4'>
          Consult with our highly qualified doctors across various specializations.
          Committed to providing world-class healthcare.
        </p>
      </div>

      {/* Doctors Grid */}
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-5 px-4 sm:px-0'>
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => { navigate(`/appointment/${item._id}`); }}
            key={index}
            className='bg-white border border-slate-100 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group'
          >
            {/* Image Container with Status Badge */}
            <div className='relative bg-gradient-to-b from-blue-50 to-white'>
              <img className='w-full object-cover object-top h-60 group-hover:scale-105 transition-transform duration-500' src={item.image} alt={item.name} />

              {/* Availability Badge (Floating) */}
              <div className='absolute top-3 left-3'>
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full shadow-sm text-xs font-semibold backdrop-blur-md ${item.available ? 'bg-green-100/90 text-green-700 border border-green-200' : 'bg-red-100/90 text-red-600 border border-red-200'}`}>
                  <span className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
                  {item.available ? 'Available Now' : 'Not Available'}
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className='p-6'>
              <p className='text-sm text-blue-600 font-bold uppercase tracking-wide mb-1'>{item.speciality}</p>
              <h3 className='text-gray-900 text-xl font-bold mb-1 group-hover:text-blue-700 transition-colors'>{item.name}</h3>
              <p className='text-slate-500 text-sm line-clamp-2'>Expert in {item.speciality} with years of experience in clinical excellence.</p>

              {/* CTA Link inside Card */}
              <div className='mt-4 pt-4 border-t border-slate-100 flex items-center justify-between'>
                <span className='text-sm font-medium text-slate-800'>Book Consultation</span>
                <svg className="w-4 h-4 text-blue-600 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button
        onClick={() => { navigate('/doctors'); }}
        className='mt-12 bg-white text-slate-700 border border-slate-300 px-12 py-3 rounded-full font-medium hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 transition-all duration-300 shadow-sm'
      >
        View All Specialists
      </button>
    </div>
  )
}

export default TopDoctors