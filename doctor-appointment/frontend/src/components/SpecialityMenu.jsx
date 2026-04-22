import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-6 py-20 bg-gradient-to-b from-white to-blue-50 text-gray-800' id='speciality'>

      {/* Section Title */}
      <div className='text-center space-y-2 mb-4'>
        <h1 className='text-4xl font-bold text-slate-900 tracking-tight'>Clinical Departments</h1>
        <div className='w-16 h-1 bg-blue-600 mx-auto rounded-full'></div>
      </div>

      {/* Section Description */}
      <p className='sm:w-1/2 text-center text-slate-600 text-sm leading-relaxed max-w-2xl px-4'>
        Explore our Centers of Excellence. Browse through our extensive list of trusted specialists
        and schedule your consultation with industry-leading experts.
      </p>

      {/* Horizontal Scroll Container */}
      <div className='flex sm:justify-center gap-8 pt-10 w-full overflow-x-auto px-6 pb-8 scroll-smooth no-scrollbar'>
        {specialityData.map((item, index) => (
          <Link
            onClick={() => { }}
            className='group flex flex-col items-center text-xs cursor-pointer flex-shrink-0 min-w-[100px] hover:translate-y-[-10px] transition-all duration-300'
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            {/* Icon Container with Shadow & Ring Effect */}
            <div className='w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:ring-4 group-hover:ring-blue-100 transition-all duration-300 ease-out'>
              <img
                className='w-10 sm:w-12 object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-300'
                src={item.image}
                alt={item.speciality}
              />
            </div>

            {/* Text Label */}
            <p className='mt-4 font-semibold text-slate-600 group-hover:text-blue-700 text-sm tracking-wide transition-colors'>
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu