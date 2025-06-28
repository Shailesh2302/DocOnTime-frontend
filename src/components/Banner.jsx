import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate()

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    }

    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    const buttonVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.98
        }
    }

    const imageVariants = {
        hidden: { opacity: 0, x: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    }

    const lineVariants = {
        hidden: { width: 0 },
        visible: {
            width: "100%",
            transition: {
                duration: 1.2,
                ease: "easeInOut",
                delay: 0.5
            }
        }
    }

    return (
        <motion.div 
            className='flex bg-gradient-to-r from-green-500 to-green-600 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 shadow-xl overflow-hidden'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
        >
            {/* ------- Left Side ------- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5 relative'>
                <motion.div 
                    className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white relative'
                    variants={textVariants}
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Book Appointment
                    </motion.p>
                    
                    {/* Animated underline */}
                    <motion.div
                        className="h-1 bg-white rounded-full mt-2"
                        variants={lineVariants}
                    />
                    
                    <motion.p 
                        className='mt-4'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        With 100+ Trusted Doctors
                    </motion.p>
                </motion.div>
                
                <motion.button 
                    onClick={() => { navigate('/login'); scrollTo(0, 0) }} 
                    className='bg-white text-sm sm:text-base text-[#595959] px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all shadow-lg relative overflow-hidden'
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                >
                    <motion.span className="relative z-10">Create account</motion.span>
                    <motion.div
                        className="absolute inset-0 bg-gray-100 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.button>

                {/* Decorative animated lines */}
                <motion.div
                    className="absolute top-4 left-0 w-16 h-0.5 bg-white/30 rounded-full"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 64, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                />
                <motion.div
                    className="absolute bottom-4 left-0 w-24 h-0.5 bg-white/30 rounded-full"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 96, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                />
            </div>

            {/* ------- Right Side ------- */}
            <motion.div 
                className='hidden md:block md:w-1/2 lg:w-[370px] relative'
                variants={imageVariants}
            >
                <motion.img 
                    className='w-full absolute bottom-0 right-0 max-w-md' 
                    src={assets.appointment_img} 
                    alt=""
                    whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.3 }
                    }}
                />
                
                {/* Floating animation effect */}
                <motion.div
                    className="absolute top-8 right-8 w-4 h-4 bg-white/40 rounded-full"
                    animate={{
                        y: [0, -10, 0],
                        opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-16 right-16 w-2 h-2 bg-white/60 rounded-full"
                    animate={{
                        y: [0, -8, 0],
                        opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />
            </motion.div>
        </motion.div>
    )
}

export default Banner