import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className="px-6 md:px-16 lg:px-32 py-16 bg-white text-gray-700">

      {/* Heading */}
      <div className="text-center text-3xl font-semibold text-[#707070] mb-12">
        <p>ABOUT <span className="text-gray-700">US</span></p>
      </div>

      {/* About Section */}
      <div className="my-10 flex flex-col md:flex-row items-center gap-12">
        <img className="w-full md:max-w-sm rounded-lg shadow-md" src={assets.about_image} alt="About" />
        
        <div className="flex flex-col gap-6 md:w-2/3 text-sm text-gray-600">
          <p>
            Welcome to <span className="font-medium text-gray-800">DocOnTime</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. At DocOnTime, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>
            DocOnTime is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, DocOnTime is here to support you every step of the way.
          </p>
          <b className="text-gray-800 text-base">Our Vision</b>
          <p>
            Our vision at DocOnTime is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="text-xl font-semibold mb-6">
        <p>WHY <span className="text-gray-700">CHOOSE US</span></p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mb-20">
        {[
          {
            title: "EFFICIENCY",
            desc: "Streamlined appointment scheduling that fits into your busy lifestyle."
          },
          {
            title: "CONVENIENCE",
            desc: "Access to a network of trusted healthcare professionals in your area."
          },
          {
            title: "PERSONALIZATION",
            desc: "Tailored recommendations and reminders to help you stay on top of your health."
          }
        ].map((item, index) => (
          <div
            key={index}
            className="flex-1 border border-gray-200 rounded-lg p-6 hover:bg-green-500 hover:text-white transition-all duration-300 cursor-pointer shadow-sm"
          >
            <b className="block text-base mb-2">{item.title}:</b>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
