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
    if (loading) {
        return <LoaidngSpinenr />
    }

    const handleSearch = (e) => {
        e.preventDefault()
        const searchtext = e.target.value
        fetch(`${import.meta.env.VITE_DOMAIN}/manager-data?search=${searchtext}`)
        .then(res => res.json())
            .then(data => {
                setloans(data)
             setLoading(false)
            })
    }



    return (
        <div>
            <div>
                <form onChange={handleSearch} className="flex justify-center">
                 
                    <label className="input my-10 max-w-200  rounded-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input name='Search' type="search" required placeholder="Search" />
                    </label>
                </form>

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
                                    <ManagerLoansTable loan={loan} loans={loans} setloans={setloans} index={index} />
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