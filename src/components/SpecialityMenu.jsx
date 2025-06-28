import React from 'react'
import { motion } from 'framer-motion'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
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

    const scrollContainerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.8
        },
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
            y: -15,
            scale: 1.1,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.95,
            transition: {
                duration: 0.1
            }
        }
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 1.2, rotate: -10 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.15,
            rotate: 5,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    }

    const textItemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: 0.2
            }
        },
        hover: {
            scale: 1.05,
            color: "#059669",
            transition: {
                duration: 0.2
            }
        }
    }

    const lineVariants = {
        hidden: { width: 0 },
        visible: {
            width: "80px",
            transition: {
                duration: 1,
                ease: "easeInOut",
                delay: 0.4
            }
        }
    }

    const glowVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 0.6,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
        hover: {
            opacity: 1,
            scale: 1.2,
            transition: {
                duration: 0.3
            }
        }
    }

    return (
        <motion.div 
            id='speciality' 
            className='flex flex-col items-center gap-4 py-16 text-[#262626] relative overflow-hidden'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Background decorative elements */}
            <motion.div
                className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full blur-xl"
                animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-xl"
                animate={{
                    x: [0, -25, 0],
                    y: [0, 15, 0],
                    scale: [1, 0.8, 1]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            <motion.div className="text-center relative">
                <motion.h1 
                    className='text-3xl font-medium relative'
                    variants={headerVariants}
                >
                    Find by Speciality
                </motion.h1>
                
                {/* Animated underline */}
                <motion.div
                    className="h-0.5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 mx-auto"
                    variants={lineVariants}
                />
                
                {/* Decorative dots */}
                <motion.div
                    className="absolute -top-2 -right-8 w-2 h-2 bg-green-400 rounded-full"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute -bottom-2 -left-6 w-1.5 h-1.5 bg-blue-400 rounded-full"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />
            </motion.div>
            
            <motion.p 
                className='sm:w-1/3 text-center text-sm'
                variants={textVariants}
            >
                Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
            </motion.p>
            
            <motion.div 
                className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll pb-4'
                variants={scrollContainerVariants}
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {specialityData.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="relative"
                    >
                        <Link 
                            to={`/doctors/${item.speciality}`} 
                            onClick={() => scrollTo(0, 0)} 
                            className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 relative p-4 rounded-2xl group'
                        >
                            {/* Hover background glow */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100"
                                variants={glowVariants}
                                transition={{ duration: 0.3 }}
                            />
                            
                            {/* Image container with glow effect */}
                            <motion.div className="relative mb-2">
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100"
                                    transition={{ duration: 0.3 }}
                                />
                                <motion.img 
                                    className='w-16 sm:w-24 relative z-10' 
                                    src={item.image} 
                                    alt=""
                                    variants={imageVariants}
                                    whileHover="hover"
                                />
                                
                                {/* Floating particles around image */}
                                <motion.div
                                    className="absolute -top-1 -right-1 w-1 h-1 bg-green-400 rounded-full opacity-0 group-hover:opacity-100"
                                    animate={{
                                        y: [0, -8, 0],
                                        x: [0, 4, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <motion.div
                                    className="absolute -bottom-1 -left-1 w-0.5 h-0.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                                    animate={{
                                        y: [0, 6, 0],
                                        x: [0, -3, 0]
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.7
                                    }}
                                />
                            </motion.div>
                            
                            <motion.p 
                                className="relative z-10 text-center font-medium"
                                variants={textItemVariants}
                                whileHover="hover"
                            >
                                {item.speciality}
                            </motion.p>

                            {/* Animated border on hover */}
                            <motion.div
                                className="absolute inset-0 border-2 border-gradient-to-r from-green-400 to-blue-400 rounded-2xl opacity-0"
                                whileHover={{ 
                                    opacity: 1,
                                    borderImage: "linear-gradient(45deg, #10b981, #3b82f6) 1"
                                }}
                                transition={{ duration: 0.3 }}
                                style={{
                                    background: 'linear-gradient(45deg, #10b981, #3b82f6)',
                                    padding: '2px',
                                    borderRadius: '16px',
                                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                                    WebkitMaskComposite: 'subtract'
                                }}
                            />
                        </Link>
                    </motion.div>
                ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="flex gap-1 mt-4 sm:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <motion.div
                    className="w-1 h-1 bg-green-400 rounded-full"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="w-1 h-1 bg-blue-400 rounded-full"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />
                <motion.div
                    className="w-1 h-1 bg-purple-400 rounded-full"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />
            </motion.div>
        </motion.div>
    )
}

export default SpecialityMenu