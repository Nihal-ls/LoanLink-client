import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import { useParams } from 'react-router';

const ApplyLoan = () => {

    const { user } = useAuth()

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
        return <p>Loading</p>
    }

    const { loanTitle, _id, loanImage, maxLimit, availableEMIPlans, interestRate, description, category } = loan || []


    return (
        <div>
            <div className="hero bg-transparent min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Apply a loan now!</h1>
                    </div>
                    <div className="card bg-transparent w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form className="fieldset">
                                {/* email */}
                                <label className="label">Email</label>
                                <input type="email" defaultValue={user?.email} className="input" placeholder="Email" />
                                {/* loan name */}
                                <label className="label">Loan Name</label>
                                <input type="text" defaultValue={loanTitle} className="input" placeholder="Loan Name" />
                                {/* interest rate */}
                                <label className="label">Loan interest Rate</label>
                                <input type="text" className="input" placeholder="interest rate" />
                                {/* First name */}
                                <label className="label">First Name</label>
                                <input type="text" className="input" placeholder="First Name" />
                                {/* last name */}
                                <label className="label">Last Name</label>
                                <input type="text" className="input" placeholder="Last Name" />
                                {/* contact numeber */}
                                <label className="label">Contact</label>
                                <input type="number" className="input" placeholder="Your Mobile Number" />
                                {/* National ID / Passport Number */}
                                <label className="label">National ID / Passport Number</label>
                                <input type="number" className="input" placeholder="National ID / Passport Number" />
                                {/* Income Source */}
                                <label className="label">Income Source</label>
                                <input type="text" className="input" placeholder="Income Source" />
                                {/*Motnhly income */}
                                <label className="label">Monthly Income</label>
                                <input type="text" className="input" placeholder="Monthly Income" />

                                {/*Loan Ammount */}
                                <label className="label">Loan Amount</label>
                                <input type="text" className="input" placeholder="Loan Amount" />
                                {/*Reason for Loan */}
                                <label className="label">Reason for loan</label>
                                <textarea className='input' placeholder='reason' rows={50} cols={50}></textarea>
                                {/*address */}
                                <label className="label">Address</label>
                                <input className='input' type="text" placeholder='Address' />
                                {/*Reason for Loan */}
                                <label className="label">Extra Notes</label>
                                <textarea className='input' placeholder='Extra Notes' rows={50} cols={50}></textarea>
                        
                                <button className="btn btn-neutral mt-4">Apply</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplyLoan;