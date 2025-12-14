import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import ApplicationTableModal from './Modals/ApplicationTableModal';
import { TbReceiptYuan } from 'react-icons/tb';

const MyloansTable = ({ l, index, loans, setLoan }) => {


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

    return (
        <tr>
          
            <th>{index + 1}</th>
            <td>{l.loanTitle}</td>
            <td>{l._id}</td>
            <td>{l?.status}</td>
            <td className='flex gap-2'>
                <button onClick={() => document.getElementById(`my_modal_${l._id}`).showModal()} className='btn bg-orange-100 text-orange-500 hover:bg-orange-500 hover:text-white' >View</button>
                <ApplicationTableModal loan={l} />
                {l.status === 'pending' && <button onClick={handleDelete} className='text-red-500 hover:text-white hover:bg-red-500 bg-red-100 btn'>Delete</button>
                }
                <button className='bg-green-100 text-green-500 hover:bg-green-500 hover:text-white btn'>Pay</button>
            </td>
        </tr>
    );
};

export default MyloansTable;