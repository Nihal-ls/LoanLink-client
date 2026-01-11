import React from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { BiSupport } from "react-icons/bi";
import useAuth from '../../Hooks/useAuth';

const ContactUs = () => {

    const { user } = useAuth()

    return (
        <div className="min-h-screen bg-transparent py-16 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-black  mb-4 tracking-tight">
                        Get in <span className="text-orange-400">Touch</span>
                    </h1>
                    <p className="text-slate-500 text-lg max-w-xl mx-auto opacity-80">
                        Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                {/* Main Glass Container */}
                <div className="flex flex-col lg:flex-row bg-white/5 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/10 overflow-hidden">

                    {/* Left Side: Contact Info */}
                    <div className="lg:w-1/3 bg-orange-500/10 p-10 lg:p-14  border-r border-white/10">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

                            <div className="space-y-10">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                        <HiOutlineMail size={28} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-orange-400 font-bold uppercase tracking-tighter">Email Us</p>
                                        <p className="text-lg font-medium">support@loanlink.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                        <HiOutlinePhone size={28} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-orange-400 font-bold uppercase tracking-tighter">Call Anytime</p>
                                        <p className="text-lg font-medium">+1 (800) 555-LOAN</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                        <HiOutlineLocationMarker size={28} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-orange-400 font-bold uppercase tracking-tighter">Our Office</p>
                                        <p className="text-lg font-medium">Finance Way, NY 10001</p>
                                    </div>
                                </div>
                            </div>

                            {/* 24/7 Support Box */}
                            <div className="mt-20 p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-2">
                                    <BiSupport className="text-orange-400 text-3xl" />
                                    <span className="font-bold text-lg">24/7 Support</span>
                                </div>
                                <p className="text-sm text-slate-300">Our automated assistant is available 24/7 for your urgent loan queries.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="lg:w-2/3 p-10 lg:p-16">
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="form-control">
                                    <label className="label  font-medium opacity-90">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Alex Thompson"
                                        className="input bg-white/5 border-black/20  placeholder:text-slate-400 focus:border-orange-500 focus:bg-white/10 h-14 rounded-xl transition-all"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label font-medium opacity-90">Email Address</label>
                                    <input
                                        type="email"
                                        defaultValue={user?.email}
                                        placeholder="alex@company.com"
                                        className="input bg-white/5 border-black/20  placeholder:text-slate-400 focus:border-orange-500 focus:bg-white/10 h-14 rounded-xl transition-all"
                                    />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label text-white font-medium opacity-90">Interested Loan Category</label>
                                <div className="flex flex-wrap gap-3">
                                    {['Personal', 'Business', 'Home', 'Student'].map((tag) => (
                                        <button
                                            key={tag}
                                            type="button"
                                            className="px-6 py-2 rounded-full border border-black/20 hover:text-white  hover:bg-orange-500 hover:border-orange-500 transition-all text-sm font-medium"
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="form-control flex flex-col">
                                <label className="label text-white font-medium opacity-90">How can we help?</label>
                                <textarea
                                    className="textarea bg-white/5 border-black/20  text-white placeholder:text-slate-400 focus:border-orange-500 focus:bg-white/10 h-40 rounded-xl transition-all"
                                    placeholder="Tell us about your requirements..."
                                ></textarea>
                            </div>

                            <button className="btn w-full md:w-auto px-12 h-14 bg-orange-500 hover:bg-orange-600 border-none text-white text-lg font-bold rounded-xl shadow-lg shadow-orange-500/20 uppercase tracking-wider">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Socials */}
                <div className="mt-12 text-center">
                    <p className="text-white/40 text-sm font-medium uppercase tracking-[0.3em] mb-4">Follow LoanLink</p>
                    <div className="flex justify-center gap-6">
                        {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map(social => (
                            <a key={social} href="#" className="text-white/60 hover:text-orange-400 transition-colors font-bold text-sm uppercase">{social}</a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;