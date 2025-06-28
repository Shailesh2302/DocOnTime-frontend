import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [image, setImage] = useState(false)

  const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext)

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData()
      formData.append('name', userData.name)
      formData.append('phone', userData.phone)
      formData.append('address', JSON.stringify(userData.address))
      formData.append('gender', userData.gender)
      formData.append('dob', userData.dob)
      if (image) formData.append('image', image)

      const { data } = await axios.post(`${backendUrl}/api/user/update-profile`, formData, {
        headers: { token }
      })

      if (data.success) {
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(false)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return userData ? (
    <div className="max-w-3xl mx-auto mt-10 px-4 sm:px-8 py-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center gap-6">
        {isEdit ? (
          <label htmlFor="image" className="relative cursor-pointer group">
            <img
              src={image ? URL.createObjectURL(image) : userData.image}
              alt="profile"
              className="w-32 h-32 rounded-full object-cover opacity-80"
            />
            {!image && (
              <img
                src={assets.upload_icon}
                alt="upload"
                className="w-8 absolute bottom-2 right-2 opacity-70 group-hover:opacity-100 transition"
              />
            )}
            <input type="file" id="image" hidden onChange={(e) => setImage(e.target.files[0])} />
          </label>
        ) : (
          <img
            src={userData.image}
            alt="profile"
            className="w-32 h-32 rounded-full object-cover"
          />
        )}

        {isEdit ? (
          <input
            type="text"
            value={userData.name}
            onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
            className="text-2xl font-semibold bg-gray-100 px-2 py-1 rounded w-full max-w-sm"
          />
        ) : (
          <h2 className="text-2xl font-semibold text-gray-800">{userData.name}</h2>
        )}
      </div>

      <hr className="my-6 border-gray-300" />

      <div className="space-y-4">
        <h3 className="text-gray-600 font-semibold underline">Contact Information</h3>
        <div className="grid grid-cols-[120px_1fr] gap-y-3 text-sm">
          <span className="font-medium text-gray-700">Email:</span>
          <span className="text-blue-500">{userData.email}</span>

          <span className="font-medium text-gray-700">Phone:</span>
          {isEdit ? (
            <input
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="bg-gray-100 px-2 py-1 rounded w-full max-w-xs"
            />
          ) : (
            <span className="text-blue-500">{userData.phone}</span>
          )}

          <span className="font-medium text-gray-700">Address:</span>
          {isEdit ? (
            <div className="space-y-2">
              <input
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value }
                  }))
                }
                className="bg-gray-100 px-2 py-1 rounded w-full max-w-xs"
              />
              <input
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value }
                  }))
                }
                className="bg-gray-100 px-2 py-1 rounded w-full max-w-xs"
              />
            </div>
          ) : (
            <span className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </span>
          )}
        </div>

        <h3 className="text-gray-600 font-semibold underline mt-6">Basic Information</h3>
        <div className="grid grid-cols-[120px_1fr] gap-y-3 text-sm">
          <span className="font-medium text-gray-700">Gender:</span>
          {isEdit ? (
            <select
              value={userData.gender}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              className="bg-gray-100 px-2 py-1 rounded max-w-xs"
            >
              <option value="Not Selected">Not Selected</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <span className="text-gray-500">{userData.gender}</span>
          )}

          <span className="font-medium text-gray-700">Birthday:</span>
          {isEdit ? (
            <input
              type="date"
              value={userData.dob}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              className="bg-gray-100 px-2 py-1 rounded max-w-xs"
            />
          ) : (
            <span className="text-gray-500">{userData.dob}</span>
          )}
        </div>

        <div className="mt-6">
          {isEdit ? (
            <button
              onClick={updateUserProfileData}
              className="px-6 py-2 bg-primary text-white rounded-full hover:shadow-md transition"
            >
              Save Information
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="px-6 py-2 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  ) : null
}

export default MyProfile
