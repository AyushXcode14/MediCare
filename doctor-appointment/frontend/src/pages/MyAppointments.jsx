import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

const MyAppointments = () => {

  const { backendUrl, token, getDoctorsData } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const navigate = useNavigate();

  const slotDateFormat = (date) => {
    const dateArray = date.split('_');
    return dateArray[0] + ' ' + months[(dateArray[1]) - 1] + ' ' + dateArray[2];
  }

  const getuserAppointments = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/user/list-appointment', {
        headers: { token }
      });
      if (data.success) {
        setAppointments(data.appointments.reverse());
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  }

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } });
      if (data.success) {
        toast.success(data.message);
        getuserAppointments();
        navigate('/my-appointments');
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  }

  const initPayment = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Appointment Payment',
      description: 'Medical Consultation Fee',
      order_id: order.id,
      receipt: order.receipt,
      handler: async function (response) {
        try {
          const { data } = await axios.post(backendUrl + '/api/user/verifyRazorpay', response, { headers: { token } });
          if (data.success) {
            toast.success(data.message);
            getuserAppointments();
            getDoctorsData();
          } else {
            toast.error(data.message);
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      }
    }
    const razorpay = new window.Razorpay(options);
    razorpay.open();
  }

  const appointmentRazorpay = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendUrl + '/api/user/payment-razorpay', { appointmentId }, { headers: { token } });
      if (data.success) {
        initPayment(data.order)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(() => {
    if (token) getuserAppointments();
  }, [token]);

  return (
    <div className='max-w-5xl mx-auto px-4 py-10'>

      {/* Page Header */}
      <div className='flex items-center gap-3 mb-8'>
        <div className='w-1 h-8 bg-blue-600 rounded-full'></div>
        <p className='text-2xl font-semibold text-gray-800 tracking-tight'>Medical Appointments</p>
      </div>

      <div className='flex flex-col gap-6'>
        {appointments.map((item, index) => (

          /* Appointment Card */
          <div
            key={index}
            className='bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col md:flex-row'
          >

            {/* Left Side: Doctor Info */}
            <div className='flex gap-6 p-6 flex-1'>
              <div className='w-24 h-24 flex-shrink-0'>
                <img
                  className='w-full h-full object-cover rounded-lg bg-blue-50 border border-blue-100'
                  src={item.docData.image}
                  alt={item.docData.name}
                />
              </div>

              <div className='flex flex-col gap-1'>
                <p className='text-lg font-bold text-gray-900'>{item.docData.name}</p>
                <p className='text-sm font-medium text-blue-600 uppercase tracking-wide'>{item.docData.speciality}</p>

                <div className='mt-3 space-y-1'>
                  <p className='text-xs text-gray-500 font-semibold uppercase'>Location</p>
                  <p className='text-sm text-gray-600'>{item.docData.address.line1}, {item.docData.address.line2}</p>
                </div>

                <div className='mt-3'>
                  <p className='text-xs text-gray-500 font-semibold uppercase'>Date & Time</p>
                  <p className='text-sm font-medium text-gray-800'>
                    {slotDateFormat(item.slotDate)} <span className='mx-2 text-gray-300'>|</span> {item.slotTime}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Actions & Status */}
            <div className='bg-gray-50 p-6 md:w-64 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100 gap-3'>

              {/* STATUS LOGIC */}
              {!item.cancelled && item.payment && !item.isCompleted && (
                <div className='flex items-center justify-center gap-2 py-2 px-4 rounded bg-green-100 text-green-700 text-sm font-medium'>
                  <span className='w-2 h-2 rounded-full bg-green-500'></span> Paid
                </div>
              )}

              {!item.cancelled && !item.payment && !item.isCompleted && (
                <button
                  onClick={() => appointmentRazorpay(item._id)}
                  className='w-full py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-md shadow-sm hover:bg-blue-700 transition-colors'
                >
                  Pay Online
                </button>
              )}

              {!item.cancelled && !item.isCompleted && (
                <button
                  onClick={() => cancelAppointment(item._id)}
                  className='w-full py-2.5 border border-red-200 text-red-600 text-sm font-medium rounded-md hover:bg-red-50 transition-colors'
                >
                  Cancel
                </button>
              )}

              {item.cancelled && !item.isCompleted && (
                <div className='w-full py-2.5 border border-red-100 bg-red-50 text-red-600 text-sm font-medium rounded-md text-center'>
                  Appointment Cancelled
                </div>
              )}

              {item.isCompleted && (
                <div className='w-full py-2.5 border border-green-100 bg-green-50 text-green-600 text-sm font-medium rounded-md text-center'>
                  Consultation Completed
                </div>
              )}

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyAppointments