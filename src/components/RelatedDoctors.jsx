import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const RelatedDoctors = ({ speciality, docId }) => {
    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)
    
    const [relDoc, setRelDoc] = useState([])

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorsData)
        }
    }, [doctors, speciality, docId])

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
                staggerChildren: 0.15
            }
        }
    }

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.9
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
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        tap: {
            scale: 0.98,
            transition: {
                duration: 0.1
            }
        }
    }

    const imageVariants = {
        hidden: { opacity: 0, scale: 1.1 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.3
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
                ease: "easeOut",
                delay: 0.2
            }
        }
    }

    const nameVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: 0.3
            }
        }
    }

    const specialityVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: 0.4
            }
        }
    }

    const lineVariants = {
        hidden: { width: 0 },
        visible: {
            width: "60px",
            transition: {
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.3
            }
        }
    }

    return (
        <motion.div 
            className='flex flex-col items-center gap-4 my-16 text-[#262626]'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div className="text-center relative">
                <motion.h1 
                    className='text-3xl font-medium'
                    variants={headerVariants}
                >
                    Related Doctors
                </motion.h1>
                
                {/* Animated underline */}
                <motion.div
                    className="h-0.5 bg-gradient-to-r from-green-500 to-green-600 rounded-full mt-2 mx-auto"
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
                {relDoc.map((item, index) => (
                    <motion.div 
                        key={index}
                        onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} 
                        className='border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl relative bg-white'
                        variants={cardVariants}
                        whileHover="hover"
                        whileTap="tap"
                        style={{
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                        }}
                    >
                        {/* Hover gradient overlay */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 opacity-0 pointer-events-none"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        
                        <div className="relative overflow-hidden">
                            <motion.img 
                                className='bg-[#EAEFFF] w-full h-48 object-cover' 
                                src={item.image} 
                                alt=""
                                variants={imageVariants}
                                whileHover="hover"
                            />
                            
                            {/* Floating dots animation */}
                            <motion.div
                                className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full"
                                animate={{
                                    y: [0, -8, 0],
                                    opacity: [0.6, 1, 0.6]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        </div>
                        
                        <motion.div 
                            className='p-4 relative z-10'
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
                                        scale: [1, 1.2, 1],
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
                                    color: "#059669",
                                    transition: { duration: 0.2 }
                                }}
                            >
                                {item.name}
                            </motion.p>
                            
                            <motion.p 
                                className='text-[#5C5C5C] text-sm'
                                variants={specialityVariants}
                            >
                                {item.speciality}
                            </motion.p>
                        </motion.div>

                        {/* Animated border on hover */}
                        <motion.div
                            className="absolute inset-0 border-2 border-green-400 rounded-xl opacity-0 pointer-events-none"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                ))}
            </motion.div>
            
            {/* Optional animated "more" button */}
            {/* <motion.button 
                className='bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-3 rounded-full mt-10 shadow-lg relative overflow-hidden'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(34, 197, 94, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
            >
                <motion.span className="relative z-10">View More</motion.span>
                <motion.div
                    className="absolute inset-0 bg-green-400 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.button> */}
        </motion.div>
    )
}

export default RelatedDoctors