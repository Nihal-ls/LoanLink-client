import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';
import UUpdateLoans from './Modals/UUpdateLoans';

const ManagerLoansTable = ({ loan, index, setloans, loans }) => {

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

                const data = axios.delete(`${import.meta.env.VITE_DOMAIN}/manager-loans/${loan._id}`)

                const remaining = loans.filter(item => item._id !== loan._id);
                setloans(remaining);
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
        <tr>
      
            <th>{index + 1}</th>
            <td><img
                className='w-50 h-30 rounded-lg'
                src={loan.loanImage} alt={loan.loanImage} /></td>
            <td>{loan.loanTitle}</td>
            <td>{loan.interestRate}</td>
            <td>{loan.category}</td>

            <td className='space-x-2'>
                <button onClick={handleDelete} className='text-red-500 hover:text-white hover:bg-red-500 bg-red-100 btn'>Delete</button>
                <button
                    onClick={() => document.getElementById('my_modal_3').showModal()}
                    className='bg-green-100 text-green-500 hover:bg-green-500 hover:text-white btn'>Update</button>

                 <UUpdateLoans loan={loan}/>


            </td>
        </tr>
    );
};

export default ManagerLoansTable;