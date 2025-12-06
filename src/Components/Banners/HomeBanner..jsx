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
                staggerChildren: 0.3, // Delay between child animations
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
    };

    // Variant for the image side (sliding in from the right)
    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
    };

    return (
        <div className="font-display h-100">
            <div className="flex h-100  max-w-7xl mx-auto flex-col">
                {/* Wrap the main content div with motion.div and apply initial/animate props */}
                <motion.div
                    className="sm:px-10 md:px-20 lg:px-30 grid grid-cols-1  md:grid-cols-2 grid  shadow-2xl my-10 bg-transparent"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* LEFT SIDE: Animated Text Content */}
                    <motion.div
                        className="flex flex-col items-center justify-center p-8 text-center"
                        variants={containerVariants} // Use container variants to manage its children
                    >
                        {/* Animated SVG Icon */}
                        <motion.div className=" h-24 w-24" variants={itemVariants}>
                            <svg
                                className="h-full w-full"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1"
                                viewBox="0 0 100 100"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="50" cy="50" r="30"></circle>
                                {/* ... other SVG paths ... */}
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
                            </svg>
                        </motion.div>

                        {/* Animated Heading */}
                        <motion.h1 className="text-4xl font-bold" variants={itemVariants}>
                            LoanLink
                        </motion.h1>

                        {/* Animated Paragraph */}
                        <motion.p className="mt-2 text-sm opacity-80" variants={itemVariants}>
                            LoanLink is a web-based microloan request, review & approval management system.
                            Many small financial organizations, NGOs, and microloan providers struggle to maintain loan applications, verification, approvals, EMI schedules, and repayments in one
                        </motion.p>

                        {/* Animated Button with Hover Effect */}
                        <motion.div
                            className=" mt-4 flex justify-center"
                            variants={itemVariants}
                        >
                            <motion.button
                                className="rounded-lg bg-orange-400 text-white px-8 py-3.5 font-medium shadow-lg"
                                whileHover={{ scale: 1.05 }} // Scale up on hover
                                whileTap={{ scale: 0.95 }} // Scale down on press
                            >
                               Apply For A loan
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE: Animated Image */}
                    <motion.div
                        className=" items-center justify-center p-4 text-center"
                        variants={imageVariants}
                    >
                        {/* Image will slide in from the right */}
                        <img className="mx-auto" src={bannerImg} alt="LoanLink Banner Illustration" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default HomeBanner;