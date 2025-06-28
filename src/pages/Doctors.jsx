import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
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
    "Gastroenterologist"
  ];

  return (
    <div className="px-5 md:px-20 pb-10">
      <div className="text-center text-2xl font-semibold pt-10 text-gray-700">
        <p>
          OUR <span className="text-primary">DOCTORS</span>
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Browse through the doctor specialists.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-6 mt-10">
        {/* Filters Section */}
        <div className="w-full sm:w-auto">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className={`sm:hidden py-2 px-4 rounded-full border border-gray-300 text-sm mb-4 transition-all ${
              showFilter ? 'bg-primary text-white' : ''
            }`}
          >
            Filters
          </button>

          <div
            className={`flex-col gap-4 text-sm text-gray-700 font-medium ${
              showFilter ? 'flex' : 'hidden sm:flex'
            }`}
          >
            {specialities.map((spec) => (
              <p
                key={spec}
                onClick={() =>
                  speciality === spec ? navigate('/doctors') : navigate(`/doctors/${spec}`)
                }
                className={`w-full sm:w-auto py-2 px-5 border border-gray-300 rounded-full cursor-pointer hover:bg-primary hover:text-white transition-all ${
                  speciality === spec ? 'bg-primary text-white' : ''
                }`}
              >
                {spec}
              </p>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                scrollTo(0, 0);
              }}
              className="bg-white border border-[#C9D8FF] rounded-xl shadow-sm hover:shadow-md transition duration-300 cursor-pointer hover:-translate-y-2 overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover bg-[#EAEFFF]"
                src={item.image}
                alt={item.name}
              />
              <div className="p-4">
                <div
                  className={`flex items-center gap-2 text-sm ${
                    item.available ? 'text-green-500' : 'text-gray-500'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.available ? 'bg-green-500' : 'bg-gray-400'
                    }`}
                  ></span>
                  <p>{item.available ? 'Available' : 'Not Available'}</p>
                </div>
                <p className="text-lg font-semibold text-gray-800 mt-1">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
