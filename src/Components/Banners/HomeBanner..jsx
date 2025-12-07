import React from "react";
import { motion } from "framer-motion"; // Import motion
import bannerImg from '../../assets/bannerimg1.png'

const HomeBanner = () => {
    // 1. Define animation variants for the main container and children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Reduced stagger delay for a quicker flow
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 }, // Start slightly lower
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 10 } },
    };

    // Variant for the image side (sliding in from the right)
    const imageVariants = {
        hidden: { opacity: 0, x: 100 }, // Start further right
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <div className="my-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center sm:px-10 md:px-20 lg:px30">
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.svg
                            variants={itemVariants}
                            className="h-30 w-full"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="50" cy="50" r="30"></circle>
                            <path d="M50 35c-4.14 0-7.5 3.36-7.5 7.5v5c0 1.38-1.12 2.5-2.5 2.5h-5c-1.38 0-2.5-1.12-2.5-2.5v-5c0-4.14 3.36-7.5 7.5-7.5h5z"></path>
                            <path d="M50 35c4.14 0 7.5 3.36 7.5 7.5v5c0 1.38 1.12 2.5 2.5 2.5h5c1.38 0 2.5-1.12 2.5-2.5v-5c0-4.14-3.36-7.5-7.5-7.5h-5z"></path>
                            <path d="M50 65c4.14 0 7.5-3.36 7.5-7.5v-5c0-1.38 1.12-2.5 2.5-2.5h5c1.38 0 2.5 1.12 2.5 2.5v5c0 4.14-3.36 7.5-7.5 7.5h-5z"></path>
                            <path d="M50 65c-4.14 0-7.5-3.36-7.5-7.5v-5c0-1.38-1.12-2.5-2.5-2.5h-5c-1.38 0-2.5 1.12-2.5 2.5v5c0 4.14 3.36 7.5 7.5 7.5h5z"></path>
                            <path d="M42.5 50a7.5 7.5 0 0115 0h-15z"></path>
                            <path d="M46.25 50a3.75 3.75 0 017.5 0h-7.5z"></path>
                            <circle cx="50" cy="50" r="12"></circle>
                            <path d="M46.25 46.25a5.25 5.25 0 017.5 7.5"></path>
                            <path d="M53.75 53.75a5.25 5.25 0 01-7.5-7.5"></path>
                            <path d="M69.1,69.1 A27,27 0 0 1 50,77 A27,27 0 0 1 30.9,69.1 L35.3,64.7 A21,21 0 0 0 50,71 A21,21 0 0 0 64.7,64.7 L69.1,69.1z"></path>
                            <path d="M30.9,30.9 A27,27 0 0 1 50,23 A27,27 0 0 1 69.1,30.9 L64.7,35.3 A21,21 0 0 0 50,29 A21,21 0 0 0 35.3,35.3 L30.9,30.9z"></path>
                        </motion.svg>
                        <motion.h1 
                            variants={itemVariants}
                            className="text-3xl my-2 font-bold text-center"
                        >
                            Loan Link
                        </motion.h1>
                        <motion.p 
                            variants={itemVariants}
                            className="text-sm text-center"
                        >
                            LoanLink is a web-based microloan request, review & approval management system.
                            Many small financial organizations, NGOs, and microloan providers struggle to maintain loan applications, verification, approvals, EMI schedules, and repayments in one centralized place.
                        </motion.p>
                        <motion.div 
                            variants={itemVariants}
                            className="flex justify-center"
                        >
                            <button className="btn rounded-md border-none my-4 px-20 bg-orange-400 text-white hover:bg-orange-500 transition duration-300">
                                Apply A Loan
                            </button>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        className=""
                    >
                        <img className="h-70 mx-auto" src={bannerImg} alt="Loan management dashboard" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;