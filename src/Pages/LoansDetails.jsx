import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import LoaidngSpinenr from '../Components/Shared/LoaidngSpinenr';

const LoansDetails = () => {
    const { id } = useParams();
    const [loan, setLoan] = useState(null); // Changed to null for better object handling
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_DOMAIN}/loans/${id}`)
            .then(res => res.json())
            .then(data => {
                setLoan(data);
                setLoading(false);
            })
            .catch(err => console.error("Error fetching loan:", err));
    }, [id]);

    if (loading) return <LoaidngSpinenr />;
    if (!loan) return <div className="text-center py-20 text-error">Loan details not found.</div>;

    const { loanTitle, _id, loanImage, maxLimit, availableEMIPlans, interestRate, description, category } = loan;

    return (
        <div className="min-h-screen bg-transparent py-10 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Breadcrumbs */}
                <div className="text-sm breadcrumbs mb-6">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/AllLoans">Loans</Link></li>
                        <li className="text-orange-500 font-semibold">{loanTitle}</li>
                    </ul>
                </div>

                <div className="bg-base-100 shadow-xl rounded-3xl overflow-hidden border border-base-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        
                        {/* Left: Image Section */}
                        <div className="bg-transparent flex items-center justify-center p-8">
                            <img
                                src={loanImage}
                                alt={loanTitle}
                                className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 max-h-[400px] object-cover"
                            />
                        </div>

                        {/* Right: Content Section */}
                        <div className="p-8 lg:p-12">
                            <div className="badge badge-outline border-orange-400 text-orange-600 font-medium mb-4">
                                {category}
                            </div>
                            <h1 className="text-4xl font-bold text-base-content mb-4">{loanTitle}</h1>
                            <p className="text-gray-500 leading-relaxed mb-8">
                                {description}
                            </p>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                                    <p className="text-xs uppercase text-orange-400 font-bold tracking-wider">Interest Rate</p>
                                    <p className="text-2xl font-black text-orange-600">{interestRate}% <span className="text-sm font-normal text-gray-500">/year</span></p>
                                </div>
                                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                                    <p className="text-xs uppercase text-blue-400 font-bold tracking-wider">Max Limit</p>
                                    <p className="text-2xl font-black text-blue-600">${maxLimit.toLocaleString()}</p>
                                </div>
                            </div>

                            {/* EMI Plans */}
                            <div className="mb-8">
                                <h3 className="font-bold text-lg mb-3">Available EMI Plans</h3>
                                <div className="flex flex-wrap gap-2">
                                    {availableEMIPlans?.map((plan, idx) => (
                                        <span key={idx} className="badge badge-lg bg-base-200 border-none py-4 px-6 font-medium">
                                            {plan} Months
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="divider"></div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                <Link 
                                    to={`/apply-loan/${_id}`} 
                                    className="btn btn-lg bg-orange-500 hover:bg-orange-600 border-none text-white flex-1 rounded-xl"
                                >
                                    Apply for this Loan
                                </Link>
                                <button className="btn btn-lg btn-outline flex-1 rounded-xl">
                                    Calculate EMI
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoansDetails;