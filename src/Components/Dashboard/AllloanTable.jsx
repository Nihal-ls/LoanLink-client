import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const AllloanTable = ({ loan, index }) => {

const navigate = useNavigate()
 

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

                const data = axios.delete(`${import.meta.env.VITE_DOMAIN}/All-loans/${loan._id}`)

                


                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your Loan has been deleted.",
                    icon: "success"
                });
                navigate('/dashboard/All-loan')
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
            <th><img className='sm:w-100 md:w-110 lg:w-120 md:h-60' src={loan.loanImage} alt="" /></th>
            <td>{loan.loanTitle}</td>
            <td>{loan.interestRate}</td>
            <td>{loan.category}</td>
            <td>{loan?.created_by}</td>
            <td>  <label className="label">
                <input type="checkbox" className="checkbox" />
                Show On Home
            </label></td>
            <td className=''>
                <button className='btn bg-orange-100 text-orange-500 hover:bg-orange-500 hover:text-white' >Update</button>
                <button onClick={handleDelete} className='text-red-500 hover:text-white hover:bg-red-500 bg-red-100 btn'>Delete</button>
            </td>
        </tr>
    );
};

export default AllloanTable;