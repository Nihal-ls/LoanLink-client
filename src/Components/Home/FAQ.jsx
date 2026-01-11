import React from 'react';
import { Link } from 'react-router';

const FAQ = () => {
    const faqData = [
        {
            question: "What are the basic requirements for a loan?",
            answer: "Generally, you need to be at least 18 years old, have a steady source of income, and provide valid identity documentation. Requirements vary based on the loan category."
        },
        {
            question: "How long does the approval process take?",
            answer: "Most applications are reviewed within 24-48 hours. Once approved, funds are typically disbursed to your linked bank account within 1-2 business days."
        },
        {
            question: "Can I pay off my loan earlier than the EMI plan?",
            answer: "Yes! LoanLink supports early repayments. Depending on the specific loan provider, there might be a small processing fee, but most plans allow you to reduce your interest by paying early."
        },
        {
            question: "How is my interest rate determined?",
            answer: "Your interest rate is calculated based on your credit score, the loan amount, the chosen EMI tenure, and the specific category of the loan."
        }
    ];

    return (
        <section className="py-10 bg-transparent px-6">
            <div className="max-w-4xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-sm">Support Center</span>
                    <h2 className="text-4xl md:text-5xl font-black  mt-3">
                        Frequently Asked <span className="text-orange-400">Questions</span>
                    </h2>
                </div>

                {/* FAQ Accordion List */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        /* CHANGED: 'collapse-plus' makes it a toggleable accordion */
                        <div 
                            key={index} 
                            className="collapse collapse-plus bg-white/5 backdrop-blur-md border border-black/10 rounded-[1.5rem] transition-all duration-300 hover:bg-white/10"
                        >
                            {/* IMPORTANT: Changed from type="radio" to type="checkbox" to allow closing */}
                            <input type="checkbox" className="peer" /> 
                            
                            <div className="collapse-title text-xl font-bold  py-5 px-8 flex items-center gap-4">
                                <span className="text-orange-500 opacity-50 font-mono">0{index + 1}</span>
                                {item.question}
                            </div>

                            <div className="collapse-content px-8 text-slate-500 leading-relaxed">
                                <div className="pb-6 pt-4 border-t border-white/10 mt-2">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Support CTA */}
                <div className="mt-12 p-6 bg-white/5 border border-black/20  rounded-3xl text-center">
                    <p className="">
                        Still have questions? 
                        <Link to='/ContactUs' className="text-orange-400 cursor-pointer hover:underline ml-2 font-bold">Contact Support</Link>
                    </p>
                </div>

            </div>
        </section>
    );
};

export default FAQ;