import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
    navigate("/login");
  };

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.15,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
      },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.25,
        ease: "easeIn",
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "60%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      {/* DocOnTime Logo */}
      <motion.div
        onClick={() => navigate("/")}
        className="cursor-pointer flex items-center gap-2"
        variants={logoVariants}
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L13.09 8.26L18 7.5L14.5 12L18 16.5L13.09 15.74L12 22L10.91 15.74L6 16.5L9.5 12L6 7.5L10.91 8.26L12 2Z"
                fill="white"
              />
              <circle cx="12" cy="12" r="3" fill="white" fillOpacity="0.3" />
            </svg>
          </div>
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </motion.div>
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-gray-800">DocOnTime</span>
          <span className="text-xs text-green-600 -mt-1">Healthcare</span>
        </div>
      </motion.div>

      {/* Desktop Navigation */}
      <motion.ul
        className="md:flex items-start gap-5 font-medium hidden"
        variants={navVariants}
      >
        {[
          { to: "/", label: "HOME" },
          { to: "/doctors", label: "ALL DOCTORS" },
          { to: "/about", label: "ABOUT" },
          { to: "/contact", label: "CONTACT" },
        ].map((item, index) => (
          <motion.div key={item.to} variants={menuItemVariants}>
            <NavLink to={item.to}>
              {({ isActive }) => (
                <motion.div
                  className="relative"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <li className="py-1 cursor-pointer">{item.label}</li>
                  <motion.hr
                    className={`border-none outline-none h-0.5 bg-green-500 w-3/5 m-auto ${
                      isActive ? "block" : "hidden"
                    }`}
                    variants={underlineVariants}
                    initial="hidden"
                    animate={isActive ? "visible" : "hidden"}
                  />
                </motion.div>
              )}
            </NavLink>
          </motion.div>
        ))}
      </motion.ul>

      <motion.div className="flex items-center gap-4" variants={navVariants}>
        {token && userData ? (
          <motion.div
            className="flex items-center gap-2 cursor-pointer group relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.img
              className="w-8 rounded-full border-2 border-transparent group-hover:border-green-300"
              src={userData.image}
              alt=""
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.img
              className="w-2.5"
              src={assets.dropdown_icon}
              alt=""
              animate={{ rotate: 0 }}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            />

            <AnimatePresence>
              <motion.div
                className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block"
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div
                  className="min-w-48 bg-white rounded-lg shadow-xl border border-gray-100 flex flex-col gap-1 p-2"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {[
                    {
                      onClick: () => navigate("/my-profile"),
                      label: "My Profile",
                    },
                    {
                      onClick: () => navigate("/my-appointments"),
                      label: "My Appointments",
                    },
                    { onClick: logout, label: "Logout" },
                  ].map((item, index) => (
                    <motion.p
                      key={index}
                      onClick={item.onClick}
                      className="hover:text-black hover:bg-green-50 cursor-pointer p-2 rounded transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.p>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.button
            onClick={() => navigate("/login")}
            className="bg-green-500 text-white px-8 py-3 rounded-full font-light hidden md:block shadow-lg relative overflow-hidden"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div
              className="absolute inset-0 bg-green-600 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Create account</span>
          </motion.button>
        )}

        <motion.img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden cursor-pointer"
          src={assets.menu_icon}
          alt=""
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        />

        {/* Mobile Menu */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              className="md:hidden fixed w-full right-0 top-0 bottom-0 z-20 bg-white"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="flex items-center justify-between px-5 py-6 border-b border-gray-200"
                variants={mobileItemVariants}
              >
                {/* Mobile Logo */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L13.09 8.26L18 7.5L14.5 12L18 16.5L13.09 15.74L12 22L10.91 15.74L6 16.5L9.5 12L6 7.5L10.91 8.26L12 2Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-bold text-gray-800">
                    DocOnTime
                  </span>
                </div>

                <motion.img
                  onClick={() => setShowMenu(false)}
                  src={assets.cross_icon}
                  className="w-7 cursor-pointer"
                  alt=""
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.ul
                className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium"
                variants={navVariants}
              >
                {[
                  { to: "/", label: "HOME" },
                  { to: "/doctors", label: "ALL DOCTORS" },
                  { to: "/about", label: "ABOUT" },
                  { to: "/contact", label: "CONTACT" },
                ].map((item, index) => (
                  <motion.div key={item.to} variants={mobileItemVariants}>
                    <NavLink onClick={() => setShowMenu(false)} to={item.to}>
                      <motion.p
                        className="px-4 py-2 rounded-full inline-block hover:bg-green-50 transition-colors"
                        whileHover={{ scale: 1.05, x: 10 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                      </motion.p>
                    </NavLink>
                  </motion.div>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
