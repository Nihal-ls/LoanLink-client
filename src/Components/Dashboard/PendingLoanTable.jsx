import React from 'react';
import ApplicationTableModal from './Modals/ApplicationTableModal';
import axios from 'axios';
import Swal from 'sweetalert2';

const PendingLoanTable = ({ index, l,setLoan,loans }) => {


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

                const data = axios.delete(`${import.meta.env.VITE_DOMAIN}/loan-application/${l._id}`)

                const remaining = loans.filter(item => item._id !== l._id);
                setLoan(remaining);

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
const handleApprove = async () => {
    try {
        await axios.post(
            `${import.meta.env.VITE_DOMAIN}/loan-application/approve/${l._id}`
        );

        const remaining = loans.filter(item => item._id !== l._id);
        setLoan(remaining);

        Swal.fire({
            icon: 'success',
            title: 'Approved!',
            text: 'Loan has been approved successfully'
        });

    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to approve loan'
        });
    }
};

    return (
        <tr>

            <th>{index + 1}</th>
            <td>{l.loanTitle}</td>
            <td>{l._id}</td>
            <td className=''>
                <span className='bg-yellow-100/40 text-yellow-500 p-2 rounded-full'>{l?.status}</span>
            </td>
            <td className='flex gap-2'>
                <button onClick={() => document.getElementById(`my_modal_${l._id}`).showModal()} className='btn bg-orange-100 text-orange-500 hover:bg-orange-500 hover:text-white' >View</button>

                <ApplicationTableModal loan={l} />

                <button onClick={handleDelete} className='text-red-500 hover:text-white hover:bg-red-500 bg-red-100 btn'>Delete</button>
                <button onClick={handleApprove} className='bg-green-100 text-green-500 hover:bg-green-500 hover:text-white btn'>Approve</button>
            </td>
        </tr>
    );
};

export default PendingLoanTable;