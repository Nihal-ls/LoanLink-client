import React from 'react';
import { useLoaderData } from 'react-router';
import LoanCard from '../../Components/Shared/LoanCard';
import HomeBanner from '../../Components/Banners/HomeBanner.';
import LoaidngSpinenr from '../../Components/Shared/LoaidngSpinenr';

const Allloans = () => {
    const data = useLoaderData()
    if (!data) {
        return <LoaidngSpinenr/>
    }
    return (
        <div className="">
            <HomeBanner />
            <h1 className="text-center mt-10 font-bold text-3xl">All Loans</h1>

            <div className='max-w-7xl my-10 mx-auto gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                    data.map(loan => <LoanCard loan={loan} />)
                }
            </div>
        </div>
    );
};

export default Allloans;