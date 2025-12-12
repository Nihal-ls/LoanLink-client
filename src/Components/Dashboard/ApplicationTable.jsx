import React from 'react';
import ApplicationTableModal from './Modals/ApplicationTableModal';

const ApplicationTable = ({ loan, index }) => {
    console.log(loan);
    return (
        <tbody>
            <tr>
                <th>{index + 1}</th>
                <th>{loan._id}</th>
                <td><h1>{loan.firstName + ' ' + loan.lastName}</h1>
                    <h1>{loan.email}</h1>
                </td>
                <td>{loan.loanAmount}$</td>
                <td>
                    <span className='p-2 rounded-md text-black bg-orange-100'>{loan.status}</span>
                </td>
                <td className='flex gap-2'>
                    <button onClick={() => document.getElementById(`my_modal_${loan._id}`).showModal()} className='btn bg-orange-100 text-orange-500 hover:bg-orange-500 hover:text-white' >View</button>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                    <ApplicationTableModal loan={loan} />

                </td>
            </tr>
        </tbody>
    );
};

export default ApplicationTable;