import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  }

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  }

  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div 
      className='md:mx-10'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div 
        className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'
        variants={containerVariants}
      >
        {/* Logo and Description Section */}
        <motion.div variants={itemVariants}>
          <motion.div 
            className='mb-5 w-40 h-12 flex items-center'
            variants={logoVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            {/* Custom DocOnTime Logo */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L13.09 8.26L18 7.5L14.5 12L18 16.5L13.09 15.74L12 22L10.91 15.74L6 16.5L9.5 12L6 7.5L10.91 8.26L12 2Z" fill="white"/>
                    <circle cx="12" cy="12" r="3" fill="white" fillOpacity="0.3"/>
                  </svg>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-800">DocOnTime</span>
                <span className="text-xs text-green-600 -mt-1">Healthcare Solutions</span>
              </div>
            </div>
          </motion.div>
          <motion.p 
            className='w-full md:w-2/3 text-gray-600 leading-6 relative'
            variants={textVariants}
          >
            DocOnTime is your trusted healthcare companion, connecting you with qualified doctors for seamless appointment booking. Experience modern healthcare management with our comprehensive platform designed for your convenience and well-being.
          </motion.p>
        </motion.div>

        {/* Company Section */}
        <motion.div variants={itemVariants}>
          <motion.p 
            className='text-xl font-medium mb-5 relative inline-block'
            variants={textVariants}
          >
            COMPANY
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-green-500 rounded-full"
              variants={underlineVariants}
            />
          </motion.p>
          <motion.ul 
            className='flex flex-col gap-2 text-gray-600'
            variants={containerVariants}
          >
            {['Home', 'About us', 'Our Doctors', 'Contact', 'Privacy policy'].map((item, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                whileHover="hover"
                className="cursor-pointer relative overflow-hidden"
              >
                <motion.span className="relative z-10">{item}</motion.span>
                <motion.div
                  className="absolute inset-0 bg-green-50 rounded"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ 
                    scaleX: 1,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div variants={itemVariants}>
          <motion.p 
            className='text-xl font-medium mb-5 relative inline-block'
            variants={textVariants}
          >
            GET IN TOUCH
            <motion.div
              className="absolute bottom-0 left-0 h-0.5 bg-green-500 rounded-full"
              variants={underlineVariants}
            />
          </motion.p>
          <motion.ul 
            className='flex flex-col gap-2 text-gray-600'
            variants={containerVariants}
          >
            {['+1-212-456-7890', 'contact@docontime.com'].map((contact, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                whileHover="hover"
                className="cursor-pointer relative overflow-hidden"
              >
                <motion.span className="relative z-10">{contact}</motion.span>
                <motion.div
                  className="absolute inset-0 bg-green-50 rounded"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ 
                    scaleX: 1,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Copyright Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
      >
        <motion.hr 
          className="origin-left"
          variants={lineVariants}
        />
        <motion.p 
          className='py-5 text-sm text-center relative'
          variants={textVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          Copyright 2024 @ DocOnTime.com - All Right Reserved.
          
          {/* Decorative dots */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 -bottom-1 flex gap-1"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[0, 1, 2].map((dot) => (
              <motion.div
                key={dot}
                className="w-1 h-1 bg-green-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: dot * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.p>
      </motion.div>

      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full opacity-10 -z-10"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </motion.div>
  )
}

export default Footer