import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import LoaidngSpinenr from '../../../../Components/Shared/LoaidngSpinenr';
import ManagerLoansTable from '../../../../Components/Dashboard/ManagerLoansTable';

const ManagerLoans = () => {
    const [loans, setloans] = useState([])
    const { user } = useAuth()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_DOMAIN}/manager-loan/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setloans(data)
                setLoading(false)
            })
    }, [user])
    console.log(loans);
    if (loading) {
        return <LoaidngSpinenr />
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
                                <th>Loan Image</th>
                                <th>Loan Title </th>
                                <th>Interest</th>
                                <th>Category</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                loans.map((loan, index) =>
                                    <ManagerLoansTable  loan={loan} loans={loans} setloans={setloans} index={index} />
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManagerLoans;