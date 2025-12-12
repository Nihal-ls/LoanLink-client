import React, { useEffect, useState } from 'react';
import useRole from '../../Hooks/useRole';
import axios from 'axios';
import LoaidngSpinenr from '../Shared/LoaidngSpinenr';
import ApplicationTable from '../Dashboard/ApplicationTable';

const ApplicationsTable = () => {
    const [loans, setLoans] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`${import.meta.env.VITE_DOMAIN}/loan-application`)
            .then(res => res.json())
            .then(data => {
                setLoans(data)
                setLoading(false)
            })
    }, [])
    if (loading) {
        return <LoaidngSpinenr />
    }
    return (
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-transparent">
                <table className="table border-2">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Loan Id </th>
                            <th>user</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    {/* row 1 */}
                    {
                        loans.map((loan, index) =>
                            <ApplicationTable loan={loan} index={index} />
                        )
                    }

                </table>
            </div>
        </div>
    );
};

export default ApplicationsTable;