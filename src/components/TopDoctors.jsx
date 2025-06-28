import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    }

    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.4,
                staggerChildren: 0.12
            }
        }
    }

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 60,
            scale: 0.9,
            rotateY: -15
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        },
        hover: {
            y: -20,
            scale: 1.03,
            rotateY: 5,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.97,
            transition: {
                duration: 0.1
            }
        }
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 1.2 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.08,
            transition: {
                duration: 0.3
            }
        }
    }

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }
    }

    const statusVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    const nameVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    }

    const buttonVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            y: -2,
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.98
        }
    }

    const lineVariants = {
        hidden: { width: 0 },
        visible: {
            width: "100px",
            transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 0.4
            }
        }
    }

    const sparkleVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <motion.div 
            className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10 relative overflow-hidden'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Background decorative elements */}
            <motion.div
                className="absolute top-20 left-5 w-24 h-24 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-2xl"
                animate={{
                    x: [0, 40, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.3, 1]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-32 right-8 w-20 h-20 bg-gradient-to-r from-green-200/20 to-teal-200/20 rounded-full blur-xl"
                animate={{
                    x: [0, -35, 0],
                    y: [0, 25, 0],
                    scale: [1, 0.8, 1]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3
                }}
            />

            <motion.div className="text-center relative">
                <motion.h1 
                    className='text-3xl font-medium relative'
                    variants={headerVariants}
                >
                    Top Doctors to Book
                    
                    {/* Sparkle decorations */}
                    <motion.span
                        className="absolute -top-1 -right-6 text-yellow-400 text-lg"
                        variants={sparkleVariants}
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        ✨
                    </motion.span>
                    <motion.span
                        className="absolute -bottom-1 -left-4 text-yellow-400 text-sm"
                        variants={sparkleVariants}
                        animate={{
                            rotate: [360, 0],
                            scale: [1, 1.3, 1]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    >
                        ⭐
                    </motion.span>
                </motion.h1>
                
                {/* Animated underline */}
                <motion.div
                    className="h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-full mt-2 mx-auto"
                    variants={lineVariants}
                />
            </motion.div>
            
            <motion.p 
                className='sm:w-1/3 text-center text-sm'
                variants={textVariants}
            >
                Simply browse through our extensive list of trusted doctors.
            </motion.p>
            
            <motion.div 
                className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'
                variants={gridVariants}
            >
                {doctors.slice(0, 10).map((item, index) => (
                    <motion.div 
                        key={index}
                        onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} 
                        className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl relative bg-white group'
                        variants={cardVariants}
                        whileHover="hover"
                        whileTap="tap"
                        style={{ 
                            transformStyle: "preserve-3d",
                            backfaceVisibility: "hidden"
                        }}
                    >
                        {/* Gradient overlay on hover */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-purple-50/60 to-green-50/80 opacity-0 pointer-events-none"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        
                        {/* Image container */}
                        <div className="relative overflow-hidden">
                            <motion.img 
                                className='bg-[#EAEFFF] w-full h-48 object-cover' 
                                src={item.image} 
                                alt=""
                                variants={imageVariants}
                                whileHover="hover"
                            />
                            
                            {/* Floating elements */}
                            <motion.div
                                className="absolute top-4 right-4 w-3 h-3 bg-blue-400/60 rounded-full"
                                animate={{
                                    y: [0, -12, 0],
                                    opacity: [0.6, 1, 0.6],
                                    scale: [1, 1.2, 1]
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className="absolute top-8 right-12 w-2 h-2 bg-purple-400/70 rounded-full"
                                animate={{
                                    y: [0, -8, 0],
                                    opacity: [0.7, 1, 0.7],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.8
                                }}
                            />
                            
                            {/* Shimmer effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                                initial={{ x: '-100%' }}
                                whileHover={{ 
                                    x: '100%',
                                    transition: { duration: 0.6, ease: "easeInOut" }
                                }}
                            />
                        </div>
                        
                        <motion.div 
                            className='p-4 relative z-10'
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div 
                                className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : "text-gray-500"}`}
                                variants={statusVariants}
                            >
                                <motion.p 
                                    className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}
                                    animate={item.available ? {
                                        scale: [1, 1.3, 1],
                                        opacity: [1, 0.7, 1]
                                    } : {}}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <motion.p
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {item.available ? 'Available' : "Not Available"}
                                </motion.p>
                            </motion.div>
                            
                            <motion.p 
                                className='text-[#262626] text-lg font-medium mt-2'
                                variants={nameVariants}
                                whileHover={{ 
                                    color: "#7c3aed",
                                    scale: 1.02,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                {item.name}
                            </motion.p>
                            
                            <motion.p 
                                className='text-[#5C5C5C] text-sm'
                                variants={nameVariants}
                                whileHover={{ 
                                    color: "#059669",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                {item.speciality}
                            </motion.p>
                        </motion.div>

                        {/* Animated border on hover */}
                        <motion.div
                            className="absolute inset-0 rounded-xl opacity-0 pointer-events-none"
                            style={{
                                background: 'linear-gradient(45deg, #8b5cf6, #06b6d4, #10b981)',
                                padding: '2px',
                                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                WebkitMaskComposite: 'subtract'
                            }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />

                        {/* Badge for top doctors */}
                        {index < 3 && (
                            <motion.div
                                className="absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg"
                                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: index * 0.1 + 0.8,
                                    type: "spring",
                                    stiffness: 200 
                                }}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            >
                                #{index + 1}
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </motion.div>
            
            <motion.button 
                onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} 
                className='bg-gradient-to-r from-purple-500 to-blue-500 text-white px-12 py-3 rounded-full mt-10 shadow-lg relative overflow-hidden font-medium'
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
            >
                <motion.span className="relative z-10">View All Doctors</motion.span>
                
                {/* Button glow effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
                
                {/* Ripple effect */}
                <motion.div
                    className="absolute inset-0 bg-white/20 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ 
                        scale: 1, 
                        opacity: [0, 0.5, 0],
                        transition: { duration: 0.6 }
                    }}
                />
            </motion.button>
        </motion.div>
    )
}

export default TopDoctors