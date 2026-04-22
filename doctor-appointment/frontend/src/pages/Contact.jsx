import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='container mx-auto px-4 pt-14 pb-20'>

      {/* Section Header */}
      <div className='text-center mb-16'>
        <p className='text-gray-500 text-sm tracking-widest uppercase mb-2'>Get in touch</p>
        <h2 className='text-4xl text-gray-900 font-medium'>
          CONTACT <span className='text-blue-900 font-bold'>US</span>
        </h2>
        {/* Subtle decorative line */}
        <div className='w-12 h-1 bg-blue-900 mx-auto mt-4 rounded-full'></div>
      </div>

      {/* Main Content Container */}
      <div className='flex flex-col md:flex-row gap-16 max-w-6xl mx-auto items-center'>

        {/* Image Section with styling */}
        <div className='w-full md:w-1/2'>
          <img
            className='w-full h-auto object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500'
            src={assets.contact_image}
            alt="Hospital Reception"
          />
        </div>

        {/* Details Section */}
        <div className='w-full md:w-1/2 flex flex-col gap-8'>

          {/* Hospital Address */}
          <div className='flex flex-col gap-2'>
            <h3 className='text-lg font-bold text-gray-800 uppercase tracking-wide border-b border-gray-200 pb-2 w-fit'>
              Our Location
            </h3>
            <div className='text-gray-600 leading-relaxed mt-2'>
              <p className='font-medium text-blue-900'>Riims Hospital</p>
              <p>Bariatu, Ranchi</p>
              <p>Jharkhand, India 834001</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className='flex flex-col gap-2'>
            <h3 className='text-lg font-bold text-gray-800 uppercase tracking-wide border-b border-gray-200 pb-2 w-fit'>
              Contact Desk
            </h3>
            <div className='text-gray-600 mt-2 space-y-1'>
              <p>
                <span className='font-semibold text-gray-800'>Tel:</span> (+0316) 222-222
              </p>
              <p>
                <span className='font-semibold text-gray-800'>Email:</span> riims@gmail.com
              </p>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}

export default Contact