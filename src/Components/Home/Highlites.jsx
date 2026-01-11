import React from 'react';
import { HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineChartPie, HiOutlineBadgeCheck } from "react-icons/hi";

const Highlights = () => {
    const features = [
        {
            title: "Instant Approval",
            desc: "Get your loan approved in as little as 24 hours with our automated digital verification system.",
            icon: <HiOutlineLightningBolt />,
            glow: "group-hover:shadow-orange-500/50"
        },
        {
            title: "Bank-Grade Security",
            desc: "Your data is encrypted with 256-bit SSL security, ensuring your financial info stays private.",
            icon: <HiOutlineShieldCheck />,
            glow: "group-hover:shadow-blue-500/50"
        },
        {
            title: "Flexible EMI Plans",
            desc: "Choose from multiple repayment plans that fit your monthly budget and lifestyle.",
            icon: <HiOutlineChartPie />,
            glow: "group-hover:shadow-purple-500/50"
        },
        {
            title: "Lowest Interest Rates",
            desc: "We partner with top-tier lenders to bring you the most competitive rates in the market.",
            icon: <HiOutlineBadgeCheck />,
            glow: "group-hover:shadow-green-500/50"
        }
    ];

    return (
        <section className="py-10 bg-transparent px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-orange-500 font-bold tracking-[0.4em] uppercase text-sm mb-4">
                            Why LoanLink
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-black  leading-tight">
                            Experience the future of <br />
                            <span className="text-orange-400">digital lending.</span>
                        </h3>
                    </div>
                    <p className="text-lg max-w-sm border-l-2 border-orange-500/30 pl-6 py-2">
                        We’ve removed the paperwork to give you a seamless borrowing experience.
                    </p>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative p-8 bg-white/5 backdrop-blur-xl border border-black/10 rounded-[2.5rem] transition-all duration-500 hover:bg-white/10 hover:translate-y-[-8px]"
                        >
                            {/* Icon Wrapper */}
                            <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl text-orange-400 mb-8 transition-all duration-500 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110 shadow-xl ${feature.glow}`}>
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h4 className="text-xl font-bold mb-4">
                                {feature.title}
                            </h4>
                            <p className=" leading-relaxed text-sm  transition-colors">
                                {feature.desc}
                            </p>

                            {/* Small Decorative Line */}
                            <div className="mt-8 w-8 h-1 bg-orange-500/30 rounded-full group-hover:w-16 group-hover:bg-orange-500 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats Row */}
                <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-t border-white/5">
                    {[
                        { label: "Total Loans", value: "12K+" },
                        { label: "Trusted Partners", value: "50+" },
                        { label: "Success Rate", value: "98%" },
                        { label: "Processing Time", value: "<24h" }
                    ].map((stat, i) => (
                        <div key={i} className="text-center lg:text-left">
                            <p className="text-3xl font-black  mb-1">{stat.value}</p>
                            <p className="text-xs text-orange-400 font-bold uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Highlights;