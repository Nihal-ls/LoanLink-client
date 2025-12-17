import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';
import ApplicationTableModal from '../../Components/Dashboard/Modals/ApplicationTableModal';
import MyloansTable from '../../Components/Dashboard/MyloansTable';
import LoaidngSpinenr from '../../Components/Shared/LoaidngSpinenr';

const Myloans = () => {
    const { user } = useAuth()
    const [loan, setLoan] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`${import.meta.env.VITE_DOMAIN}/loan-application/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLoan(data)
                setLoading(false)
            })
    }, [user])
    if (loading) return <LoaidngSpinenr/>

 

    return (
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-transparent">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Loan Name</th>
                            <th>Loan ID </th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            loan.map((l, index) =>
                               <MyloansTable l={l} loans={loan} setLoan={setLoan} index={index}/>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myloans;