import React from 'react';
import { HiOutlineTrendingUp, HiOutlineUsers, HiOutlineGlobeAlt, HiOutlineCurrencyDollar } from "react-icons/hi";

const Statistics = () => {
    const stats = [
        {
            label: "Total Disbursed",
            value: "$128M+",
            icon: <HiOutlineCurrencyDollar />,
            description: "Capital provided to dreams",
            color: "text-green-400"
        },
        {
            label: "Active Users",
            value: "85.4K",
            icon: <HiOutlineUsers />,
            description: "Trusted worldwide members",
            color: "text-blue-400"
        },
        {
            label: "Global Reach",
            value: "140+",
            icon: <HiOutlineGlobeAlt />,
            description: "Operating in major cities",
            color: "text-purple-400"
        },
        {
            label: "Success Rate",
            value: "99.2%",
            icon: <HiOutlineTrendingUp />,
            description: "Approval accuracy rating",
            color: "text-orange-400"
        }
    ];

    return (
        <section className="pb-10 bg-transparent px-6">
            <div className="max-w-7xl mx-auto">

                {/* Dashboard Wrapper */}
                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">

                    {/* Decorative Background Glows */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full -ml-48 -mb-48"></div>

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="text-center max-w-2xl mx-auto mb-16">
                            <h2 className="te text-4xl md:text-5xl font-black tracking-tight mb-4">
                                Our Impact in <span className="text-orange-500 font-mono tracking-tighter">Numbers</span>
                            </h2>
                            <p className="text-lg">
                                Real-time performance metrics showing our commitment to financial growth.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col items-center lg:items-start group">
                                    {/* Icon with Ring */}
                                    <div className={`w-14 h-14 rounded-full bg-white/5 border border-black/10 flex items-center justify-center text-2xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:border-orange-500/50 ${stat.color}`}>
                                        {stat.icon}
                                    </div>

                                    {/* Value */}
                                    <div className="flex flex-col items-center lg:items-start">
                                        <h3 className="text-5xl font-black  mb-2 tracking-tighter">
                                            {stat.value}
                                        </h3>
                                        <p className="text-orange-500 font-bold uppercase text-xs tracking-[0.2em] mb-2">
                                            {stat.label}
                                        </p>
                                        <p className="text-white/30 text-sm italic font-medium">
                                            {stat.description}
                                        </p>
                                    </div>

                                    {/* Animated Progress Line */}
                                    <div className="w-full h-[1px] bg-white/5 mt-8 relative overflow-hidden">
                                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-shimmer"></div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Live Update Indicator */}
                        <div className="mt-20 flex justify-center">
                            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className=" text-xs font-bold uppercase tracking-widest">
                                    System Status: Active & Updating Live
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 3s infinite linear;
                }
            `}} />
        </section>
    );
};

export default Statistics;