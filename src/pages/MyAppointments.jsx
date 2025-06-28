import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyAppointments = () => {
  const { backendUrl, token } = useContext(AppContext)
  const navigate = useNavigate()

  const [appointments, setAppointments] = useState([])
  const [payment, setPayment] = useState('')

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return `${dateArray[0]} ${months[+dateArray[1] - 1]} ${dateArray[2]}`
  }

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/appointments`, { headers: { token } })
      setAppointments(data.appointments.reverse())
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/cancel-appointment`, { appointmentId }, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        getUserAppointments()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  }

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Appointment Payment',
      description: "Appointment Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(`${backendUrl}/api/user/verifyRazorpay`, response, { headers: { token } })
          if (data.success) {
            navigate('/my-appointments')
            getUserAppointments()
          }
        } catch (error) {
          toast.error(error.message)
        }
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const appointmentRazorpay = async (appointmentId) => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/payment-razorpay`, { appointmentId }, { headers: { token } })
      if (data.success) {
        initPay(data.order)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const appointmentStripe = async (appointmentId) => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/payment-stripe`, { appointmentId }, { headers: { token } })
      if (data.success) {
        window.location.replace(data.session_url)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token) getUserAppointments()
  }, [token])

  return (
    <div className="px-4">
      <h2 className="text-xl font-semibold text-gray-700 mt-12 border-b pb-2 mb-6">My Appointments</h2>

      {appointments.length === 0 ? (
        <p className="text-gray-500">You have no appointments yet.</p>
      ) : (
        <div className="space-y-8">
          {appointments.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-6 border rounded-xl p-4 shadow-sm bg-white"
            >
              <img
                src={item.docData.image}
                alt="doctor"
                className="w-full sm:w-40 h-40 object-cover rounded-md bg-gray-100"
              />
              <div className="flex-1 space-y-1 text-sm text-gray-700">
                <h3 className="text-lg font-semibold">{item.docData.name}</h3>
                <p className="text-primary">{item.docData.speciality}</p>
                <p className="font-medium mt-2">Address:</p>
                <p>{item.docData.address.line1}</p>
                <p>{item.docData.address.line2}</p>
                <p className="mt-2 text-sm">
                  <span className="font-semibold">Date & Time:</span>{" "}
                  {slotDateFormat(item.slotDate)} | {item.slotTime}
                </p>
              </div>

              <div className="flex flex-col gap-2 justify-end text-sm text-center min-w-[160px]">
                {!item.cancelled && !item.payment && !item.isCompleted && payment !== item._id && (
                  <button
                    onClick={() => setPayment(item._id)}
                    className="border py-2 rounded hover:bg-primary hover:text-white transition"
                  >
                    Pay Online
                  </button>
                )}
                {!item.cancelled && !item.payment && !item.isCompleted && payment === item._id && (
                  <>
                    <button
                      onClick={() => appointmentStripe(item._id)}
                      className="border py-2 rounded flex justify-center items-center bg-white hover:bg-gray-100"
                    >
                      <img src={assets.stripe_logo} alt="stripe" className="h-5" />
                    </button>
                    <button
                      onClick={() => appointmentRazorpay(item._id)}
                      className="border py-2 rounded flex justify-center items-center bg-white hover:bg-gray-100"
                    >
                      <img src={assets.razorpay_logo} alt="razorpay" className="h-5" />
                    </button>
                  </>
                )}
                {!item.cancelled && item.payment && !item.isCompleted && (
                  <button className="border py-2 rounded bg-green-100 text-green-700 cursor-default">
                    Paid
                  </button>
                )}
                {item.isCompleted && (
                  <button className="border border-green-600 text-green-600 py-2 rounded cursor-default">
                    Completed
                  </button>
                )}
                {!item.cancelled && !item.isCompleted && (
                  <button
                    onClick={() => cancelAppointment(item._id)}
                    className="border py-2 rounded text-red-600 hover:bg-red-600 hover:text-white transition"
                  >
                    Cancel Appointment
                  </button>
                )}
                {item.cancelled && !item.isCompleted && (
                  <button className="border border-red-500 text-red-500 py-2 rounded cursor-default">
                    Appointment Cancelled
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MyAppointments
