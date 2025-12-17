import React from 'react';
import ApplicationTableModal from './Modals/ApplicationTableModal';

const ApprovedLoanTable = ({ index, l }) => {
    return (
        <tr>

            <th>{index + 1}</th>
            <td>{l._id}</td>
            <td><h1>{l.firstName + " " + l.lastName}</h1>
             <h1>{l.email}</h1>
            </td>
            <td className=''>
                <span className='bg-green-100/40 text-green-500 p-2 rounded-full'>{l?.status}</span>
            </td>
            <td>{l.approvedAt}</td>
            <td>{l.loanAmount}$</td>

            <td className='flex gap-2'>
                <button onClick={() => document.getElementById(`my_modal_${l._id}`).showModal()} className='btn bg-orange-100 text-orange-500 hover:bg-orange-500 hover:text-white' >View</button>

                <ApplicationTableModal loan={l} />
            </td>
        </tr>
    );
};

export default ApprovedLoanTable;