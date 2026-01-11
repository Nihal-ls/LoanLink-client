import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoanCard from '../../Components/Shared/LoanCard';
import HomeBanner from '../../Components/Banners/HomeBanner.';
import LoaidngSpinenr from '../../Components/Shared/LoaidngSpinenr';
import { Search, Filter, X } from 'lucide-react';

const Allloans = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [interest, setInterest] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [loans, setLoans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [maxLimit, setMaxLimit] = useState("");


    useEffect(() => {
        const fetchLoans = async () => {
            try {
                setLoading(true);

                const res = await axios.get('http://localhost:5000/Allloans', {
                    params: {
                        search: searchTerm || undefined,
                        interest: interest || undefined,
                        maxLimit: maxLimit || undefined
                    }
                });

                setLoans(res.data);
            } catch (error) {
                console.error("Failed to fetch loans", error);
            } finally {
                setLoading(false);
            }
        };

        fetchLoans();
    }, [searchTerm, interest, maxLimit]);


    const handlefilterByinterest = (e) => {
        setInterest(e.target.value);
    };

    const handleMaxLimitChange = (e) => {
        setMaxLimit(e.target.value);
    };

    if (loading) {
        return <LoaidngSpinenr />;
    }

    return (
        <div>
            <div className="w-full max-w-6xl mx-auto px-4 py-8">

                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="hidden md:block md:w-1/4"></div>

                    <div className="relative w-full md:w-2/4">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-3 border rounded-xl bg-transparent"
                            placeholder="Search loans..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* FILTER BUTTON */}
                    <div className="w-full md:w-1/4 flex justify-end">
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="flex items-center px-6 py-3 rounded-xl bg-orange-400 text-white"
                        >
                            <Filter className="h-4 w-4 mr-2" />
                            Filters
                        </button>
                    </div>
                </div>

                {/* FILTER PANEL */}
                {isFilterOpen && (
                    <div className="mt-4 p-6 border rounded-xl shadow-lg">
                        <div className="flex justify-between mb-4">
                            <h3 className="font-semibold">Advanced Filters</h3>
                            <button onClick={() => setIsFilterOpen(false)}>
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                            {/* INTEREST FILTER */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Filter by interest rate</legend>
                                <select
                                    className="select bg-transparent"
                                    onChange={handlefilterByinterest}
                                >
                                    <option value="">All</option>
                                    <option value="7">7%</option>
                                    <option value="8">8%</option>
                                    <option value="9">9%</option>
                                    <option value="11">11%</option>
                                </select>
                            </fieldset>
                            {/* max loan limit */}
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Filter by max limit</legend>
                                <select
                                    className="select bg-transparent"
                                    onChange={handleMaxLimitChange}
                                >
                                    <option value="">All</option>
                                    <option value="100000">Up to 1 Lakh</option>
                                    <option value="500000">Up to 5 Lakh</option>
                                    <option value="1000000">Up to 10 Lakh</option>
                                    <option value="5000000">Up to 50 Lakh</option>
                                </select>
                            </fieldset>


                        </div>
                    </div>
                )}
            </div>

            <h1 className="text-center mt-10 font-bold text-3xl">All Loans</h1>

            <div className="max-w-7xl my-10 mx-auto gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {loans.map((loan) => (
                    <LoanCard key={loan._id} loan={loan} />
                ))}
            </div>
        </div>
    );
};

export default Allloans;
