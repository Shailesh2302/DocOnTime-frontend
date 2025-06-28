import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className="px-5 md:px-20">

      <div className="text-center text-3xl font-semibold pt-10 text-gray-700">
        <p>
          CONTACT <span className="text-primary">US</span>
        </p>
      </div>

      <div className="my-14 flex flex-col-reverse md:flex-row items-center gap-12 mb-28 text-sm">
        <div className="flex flex-col justify-center items-start gap-6 text-gray-600 max-w-lg">
          <p className="font-semibold text-lg text-gray-700">OUR OFFICE</p>
          <p className="text-gray-500">
            54709 Willms Station <br /> Suite 350, Washington, USA
          </p>

          <p className="text-gray-500">
            Tel: (415) 555-0132 <br /> Email: rushikeshkanfade123@gmail.com
          </p>

          <p className="font-semibold text-lg text-gray-700">CAREERS AT DOCONTIME</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>

          <button className="border border-gray-800 text-gray-800 px-6 py-3 text-sm rounded-full hover:bg-primary hover:text-white transition-all duration-300">
            Explore Jobs
          </button>
        </div>

        <img
          className="w-full md:max-w-[380px] rounded-lg shadow-md"
          src={assets.contact_image}
          alt="Contact illustration"
        />
      </div>

    </div>
  )
}

export default Contact
