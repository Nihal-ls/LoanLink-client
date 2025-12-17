import React, { useEffect, useState } from 'react';
import useRole from '../../../Hooks/useRole';
import LoaidngSpinenr from '../../../Components/Shared/LoaidngSpinenr';
import ApprovedLoanTable from '../../../Components/Dashboard/ApprovedLoanTable';

const Approvedloan = () => {

    const role = useRole()
    const [loan, setLoan] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`${import.meta.env.VITE_DOMAIN}/approved-loans`)
            .then(res => res.json())
            .then(data => {
                setLoan(data)
                setLoading(false)
            })
    }, [role])
    if (loading) return <LoaidngSpinenr />
    console.log(loan);


    if (!role === "Manager") {
        return <h1>You are not allowed</h1>
    }

    return (
        <div>

            <div>
                <div className="overflow-x-auto rounded-box border border-base-content/5 bg-transparent">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Loan id</th>
                                <th>Borrower Info</th>
                                <th>Status</th>
                                <th>Approved At</th>
                                <th>Amount</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                loan.map((l, index) =>
                                    <ApprovedLoanTable l={l} loans={loan} setLoan={setLoan} index={index} />
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Approvedloan;