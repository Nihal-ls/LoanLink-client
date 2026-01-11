import React from 'react';
import { FileText, ShieldCheck, Scale, AlertCircle, HelpCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

const TermsAndConditions = () => {
    const navigate = useNavigate();

    const sections = [
        { id: 'acceptance', title: 'Acceptance of Terms', icon: <CheckCircle size={18} /> },
        { id: 'eligibility', title: 'User Eligibility', icon: <UserCheck size={18} /> },
        { id: 'loans', title: 'Loan Link Services', icon: <Scale size={18} /> },
        { id: 'privacy', title: 'Privacy Policy', icon: <ShieldCheck size={18} /> },
        { id: 'liability', title: 'Limitation of Liability', icon: <AlertCircle size={18} /> },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-transparent">
            <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl max-w-5xl w-full overflow-hidden border border-white/20 flex flex-col md:flex-row">

                <div className="hidden md:flex md:w-1/4 bg-orange-400 p-8 flex-col text-white">
                    <div className="flex items-center gap-2 mb-10">
                        <FileText size={24} />
                        <h1 className="text-xl font-bold">Legal Hub</h1>
                    </div>

                    <nav className="space-y-6">
                        {sections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                className="flex items-center gap-3 text-sm font-medium hover:text-orange-100 transition-colors opacity-80 hover:opacity-100"
                            >
                                {section.title}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-auto pt-10">
                        <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                            <HelpCircle className="mb-2" size={20} />
                            <p className="text-xs opacity-90 leading-relaxed">
                                Have questions about our terms? <br />
                                <span className="font-bold underline cursor-pointer">Contact Support</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="md:w-3/4 p-8 md:p-12 h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-orange-200">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-orange-500 font-semibold mb-6 hover:gap-3 transition-all"
                    >
                        <ArrowLeft size={18} /> Back
                    </button>

                    <header className="mb-10">
                        <h2 className="text-4xl font-extrabold text-gray-800 mb-2">Terms & Conditions</h2>
                        <p className="text-gray-500 text-sm">Last Updated: October 2023</p>
                    </header>

                    <div className="space-y-10 text-gray-600 leading-relaxed">

                        <section id="acceptance">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center text-sm font-bold">01</span>
                                Acceptance of Terms
                            </h3>
                            <p>
                                By accessing and using Loan Link, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services. Our platform facilitates connections between lenders and borrowers, and your use signifies your understanding of this role.
                            </p>
                        </section>

                        <section id="eligibility">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center text-sm font-bold">02</span>
                                User Eligibility
                            </h3>
                            <p>
                                To use Loan Link, you must be at least 18 years of age and possess the legal authority to enter into a binding agreement. You represent that all information provided during registration is accurate and complete.
                            </p>
                        </section>

                        <section id="loans">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center text-sm font-bold">03</span>
                                Loan Link Services
                            </h3>
                            <p>
                                Loan Link is a matching service and does not issue loans directly. We are not responsible for any credit decisions made by lenders. Interest rates, fees, and terms are determined solely by the third-party financial institutions.
                            </p>
                            <div className="mt-4 p-4 bg-orange-50 rounded-xl border-l-4 border-orange-400 text-sm italic">
                                Note: Always read the specific loan agreement provided by your chosen lender before signing.
                            </div>
                        </section>

                        <section id="liability">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 bg-orange-100 text-orange-500 rounded-lg flex items-center justify-center text-sm font-bold">04</span>
                                Limitation of Liability
                            </h3>
                            <p>
                                Loan Link shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services, including but not limited to financial loss or credit score changes.
                            </p>
                        </section>

                    </div>

                    <footer className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-400">© 2023 Loan Link Inc. All rights reserved.</p>
                        <button className="px-8 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-xl font-bold shadow-lg shadow-orange-100 transition-all">
                            Download PDF
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    );
};

const CheckCircle = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

const UserCheck = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
);

export default TermsAndConditions;