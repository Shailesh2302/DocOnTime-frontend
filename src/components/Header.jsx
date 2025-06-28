import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Header = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const leftContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const profilesVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const arrowVariants = {
    rest: { x: 0 },
    hover: {
      x: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "60%",
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-green-500 to-green-600 rounded-lg px-6 md:px-10 lg:px-20 shadow-xl overflow-hidden relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-10 right-20 w-20 h-20 bg-white/10 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-16 h-16 bg-white/5 rounded-full"
        animate={{
          y: [0, 15, 0],
          opacity: [0.05, 0.2, 0.05],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* --------- Header Left --------- */}
      <motion.div
        className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] relative z-10"
        variants={leftContentVariants}
      >
        <motion.div className="relative">
          <motion.p
            className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight"
            variants={titleVariants}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Book Appointment
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              With Trusted Doctors
            </motion.span>
          </motion.p>

          {/* Animated underline */}
          <motion.div
            className="absolute -bottom-2 left-0 h-1 bg-white/80 rounded-full"
            variants={underlineVariants}
          />
        </motion.div>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light"
          variants={containerVariants}
        >
          <motion.img
            className="w-28"
            src={assets.group_profiles}
            alt=""
            variants={profilesVariants}
            whileHover={{
              scale: 1.1,
              rotate: 2,
              transition: { duration: 0.3 },
            }}
          />
          <motion.p variants={textVariants}>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" />
            schedule your appointment hassle-free.
          </motion.p>
        </motion.div>

        <motion.a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 shadow-lg relative overflow-hidden"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          initial="rest"
        >
          <motion.div
            className="absolute inset-0 bg-gray-50 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span className="relative z-10">Book appointment</motion.span>
          <motion.img
            className="w-3 relative z-10"
            src={assets.arrow_icon}
            alt=""
            variants={arrowVariants}
          />
        </motion.a>

        {/* Decorative animated lines */}
        <motion.div
          className="absolute top-8 left-0 w-12 h-0.5 bg-white/40 rounded-full"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 48, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />
        <motion.div
          className="absolute bottom-8 left-0 w-16 h-0.5 bg-white/40 rounded-full"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 64, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        />
      </motion.div>

      {/* --------- Header Right --------- */}
      <motion.div className="md:w-1/2 relative" variants={imageVariants}>
        <motion.img
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
          src={assets.header_img}
          alt=""
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
        />

        {/* Floating animation elements */}
        <motion.div
          className="absolute top-12 right-12 w-6 h-6 bg-white/30 rounded-full hidden md:block"
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-24 right-24 w-3 h-3 bg-white/50 rounded-full hidden md:block"
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Pulse effect behind image */}
        <motion.div
          className="absolute inset-0 bg-white/5 rounded-lg hidden md:block"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0, 0.1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Header;
