import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import LoaidngSpinenr from '../Components/Shared/LoaidngSpinenr';

const LoansDetails = () => {
    const { id } = useParams()
    const [loan, setLoan] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`${import.meta.env.VITE_DOMAIN}/loans/${id}`)
            .then(res => res.json())
            .then(data => {
                setLoan(data)
                setLoading(false)
            })
    }, [id])
    console.log(loan);
    if (loading) {
        return <LoaidngSpinenr/>
    }
    const {loanTitle, _id,loanImage,maxLimit,availableEMIPlans,interestRate,description,category} = loan
    return (
        <div>
            <div className="card max-w-7xl mx-auto flex-wrap card-side bg-transparent shadow-sm">
                <figure className='mx-auto'>
                    <img
                     className='max-w-200 mx-auto'
                        src={loanImage}
                        alt={loanTitle} />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title text-2xl border-b-1 border-gray-300  pb-2">{loanTitle}</h2>
                    <p className='text-lg'>{description}</p>
                    <p className='text-lg'>Category: {category}</p>
                    <p className='text-lg'>InterestRate: {interestRate}</p>
                    <p className='text-lg'>Max Limit: {maxLimit}</p>
                    <ul className='text-xl pl-4 list-disc border-t-1 pt-1 border-gray-300  '>
                        <p>Available EMI Plans-</p>
                        {availableEMIPlans.map(plans => <li className='border-b-1 border-gray-200'>{plans}</li>)}
                    </ul>
                    <div className="card-actions justify-end">
                    <Link to={`/apply-loan/${_id}`} className="btn rounded-md border-none bg-orange-400 text-white ">Apply Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoansDetails;