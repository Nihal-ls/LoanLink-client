import React from 'react';
import { useLoaderData } from 'react-router';
import LoanCard from '../Shared/LoanCard';




const AvailableLoans = () => {
const data = useLoaderData()
console.log(data);

    return (
        <div className='max-w-7xl mx-auto '>
            <h1 className='text-center text-2xl font-bold'>Available Loans</h1>
            <div className="grid my-10 grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
                {
                data.map(loan => <LoanCard loan={loan}/>)
            }
            </div>
        </div>
    );
};

export default AvailableLoans;