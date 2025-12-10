import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

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
    if (loading) return <div>loading...</div>
    console.log(loan);

    const handleDelete = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    }


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
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{l.loanTitle}</td>
                                    <td>{l._id}</td>
                                    <td>{l?.status}</td>
                                    <td className='flex gap-2'>
                                        <button className='btn bg-orange-100 text-orange-500' >View</button>
                                        <button onClick={handleDelete} className='text-red-500 bg-red-100 btn'>Delete</button>
                                        <button className='bg-green-100 text-green-500 btn'>Pay</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Myloans;