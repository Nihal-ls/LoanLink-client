import React from 'react';
import { HiOutlineArrowNarrowRight, HiOutlineClock, HiOutlineTag } from "react-icons/hi";

const Blogs = () => {
    const blogPosts = [
        {
            id: 1,
            title: "5 Tips to Improve Your Credit Score Before Applying",
            excerpt: "Learn the secrets to boosting your credit score quickly to unlock lower interest rates on your next loan...",
            author: "David Miller",
            date: "Jan 12, 2026",
            readTime: "5 min",
            tag: "Credit Tips",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 2,
            title: "Understanding Fixed vs. Variable Interest Rates",
            excerpt: "Which one is right for you? We break down the pros and cons of both interest rate types in today's market...",
            author: "Sophia Reed",
            date: "Jan 08, 2026",
            readTime: "8 min",
            tag: "Education",
            image: "https://as2.ftcdn.net/v2/jpg/01/89/92/15/360_F_189921536_PkSAUEoBZV8cwfw2ThDsmTf916BITnvj.jpg"
        },
        {
            id: 3,
            title: "How to Manage Your Debt Without Stress",
            excerpt: "Debt management doesn't have to be a nightmare. Follow our step-by-step guide to financial freedom...",
            author: "James Wilson",
            date: "Jan 02, 2026",
            readTime: "6 min",
            tag: "Planning",
            image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section className="py-24 bg-transparent px-6">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-orange-500 font-bold tracking-[0.4em] uppercase text-xs mb-3 block">Insights & News</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                            Financial <span className="text-orange-400 font-serif italic">Intelligence.</span>
                        </h2>
                    </div>
                    <button className="btn btn-outline border-white/20 text-white hover:bg-orange-500 hover:border-orange-500 rounded-full px-8">
                        View All Articles
                    </button>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="group flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:translate-y-[-10px]"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-orange-500  text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                                        {post.tag}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4  text-xs mb-4 font-medium uppercase tracking-widest">
                                    <span className="flex items-center gap-1"><HiOutlineClock /> {post.readTime}</span>
                                    <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                                    <span>{post.date}</span>
                                </div>

                                <h3 className="text-2xl font-bold  mb-4 group-hover:text-orange-400 transition-colors">
                                    {post.title}
                                </h3>

                                <p className=" text-sm leading-relaxed mb-8 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-[10px] border border-orange-500/30">
                                            {post.author.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <span className=" text-xs font-semibold">{post.author}</span>
                                    </div>

                                    <button className=" group-hover:text-orange-400 transition-all flex items-center gap-2 font-bold text-sm">
                                        Read More <HiOutlineArrowNarrowRight className="group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter Sub-Card */}
                <div className="mt-20 p-1 bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-orange-500/20 rounded-[3rem]">
                    <div className="bg-slate-950/40 backdrop-blur-3xl rounded-[2.9rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-md">
                            <h4 className="text-2xl font-bold  mb-2">Subscribe to our newsletter</h4>
                            <p className="text-white/50">Get the latest financial insights delivered to your inbox weekly.</p>
                        </div>
                        <div className="flex w-full md:w-auto bg-white/5 border border-white/10 p-2 rounded-2xl">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-transparent border-none focus:ring-0 text-white px-4 py-2 w-full md:w-64"
                            />
                            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-all">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Blogs;