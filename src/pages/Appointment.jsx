import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";
import axios from "axios";
import { toast } from "react-toastify";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol, backendUrl, token, getDoctosData } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const navigate = useNavigate();

  const fetchDocInfo = () => {
    const doc = doctors.find((doc) => doc._id === docId);
    setDocInfo(doc);
  };

  const getAvailableSolts = () => {
    setDocSlots([]);
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        const slotDate = `${currentDate.getDate()}_${currentDate.getMonth() + 1}_${currentDate.getFullYear()}`;
        const isAvailable = !(docInfo?.slots_booked?.[slotDate]?.includes(formattedTime));

        if (isAvailable) {
          timeSlots.push({ datetime: new Date(currentDate), time: formattedTime });
        }

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  const bookAppointment = async () => {
    if (!token) {
      toast.warning("Login to book appointment");
      return navigate("/login");
    }

    const date = docSlots[slotIndex][0]?.datetime;
    if (!date || !slotTime) return toast.error("Select a valid slot");

    const slotDate = `${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}`;

    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/book-appointment`,
        { docId, slotDate, slotTime },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        getDoctosData();
        navigate("/my-appointments");
      } else toast.error(data.message);
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    if (doctors.length > 0) fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) getAvailableSolts();
  }, [docInfo]);

  if (!docInfo) return null;

  return (
    <div className="p-6 md:p-12">
      {/* Doctor Profile */}
      <div className="flex flex-col sm:flex-row gap-8">
        <img className="rounded-xl w-full sm:w-72 object-cover shadow-md" src={docInfo.image} alt="Doctor" />
        <div className="flex-1 bg-white border border-gray-300 rounded-xl p-6 shadow-sm">
          <div className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            {docInfo.name}
            <img className="w-5" src={assets.verified_icon} alt="Verified" />
          </div>
          <div className="text-sm text-gray-600 mt-1">
            {docInfo.degree} - {docInfo.speciality} <span className="ml-2 px-2 py-0.5 border text-xs rounded-full">{docInfo.experience}</span>
          </div>
          <div className="mt-4">
            <p className="font-medium text-gray-700 flex items-center gap-1 mb-1">
              About <img className="w-3" src={assets.info_icon} alt="Info" />
            </p>
            <p className="text-sm text-gray-600">{docInfo.about}</p>
          </div>
          <div className="mt-4 font-medium text-gray-700">
            Appointment fee: <span className="text-black">{currencySymbol}{docInfo.fees}</span>
          </div>
        </div>
      </div>

      {/* Booking Slots */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Book a Slot</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {docSlots.map((slots, i) => (
            <button
              key={i}
              onClick={() => setSlotIndex(i)}
              className={`min-w-[70px] rounded-full py-3 px-2 text-center text-sm font-medium ${
                slotIndex === i ? "bg-green-500 text-white" : "bg-white border border-gray-300"
              }`}
            >
              <div>{daysOfWeek[slots[0]?.datetime.getDay()]}</div>
              <div>{slots[0]?.datetime.getDate()}</div>
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          {docSlots[slotIndex]?.map((slot, i) => (
            <button
              key={i}
              onClick={() => setSlotTime(slot.time)}
              className={`px-4 py-2 rounded-full text-sm ${
                slot.time === slotTime
                  ? "bg-green-500 text-white"
                  : "bg-white border border-gray-300 text-gray-600"
              }`}
            >
              {slot.time.toLowerCase()}
            </button>
          ))}
        </div>

        <button
          onClick={bookAppointment}
          className="mt-6 bg-green-600 text-white px-8 py-3 rounded-full text-sm shadow hover:bg-green-700 transition"
        >
          Book Appointment
        </button>
      </div>

      {/* Related Doctors */}
      <div className="mt-12">
        <RelatedDoctors speciality={docInfo.speciality} docId={docId} />
      </div>
    </div>
  );
};

export default Appointment;
